const {Book, Category} = require('../../db/models');
const { Op } = require('sequelize');

module.exports = {
     getAllBooks : async (req, res, next)=>{
          try {
               const {keyword = '', category = ''} = req.query;

               let condition = {
                    user : req.user.id,
               };

               if(keyword !== ""){
                    condition = {...condition, title: {[Op.like]: `%${keyword}%`}};
               }

               if(category !== ""){
                    condition = {...condition, category:category};
               }

               const books = await Book.findAll({
                    where: condition,
                    include : {
                         model : Category,
                         attributes : ['id', 'name'],
                    },
               });

               res.status(200).json({message: 'Success Get All books', data: books});
          } catch (error) {
               next(error);
          }
     },

     createBooks : async (req, res, next)=>{
          try {
               let user = req.user.id;
               const {title, price, category, author, published, stock, image} = req.body;

               const checkCategory = await Category.findOne({
                    where: {
                         id: category, 
                         user: user},
               });

               if(!checkCategory){
                    return res.status(404).json({message: 'Category not found'});
               }

               const books = await Book.create({
                    title, price, category, author, published, stock, image, user:user
               });

               res.status(201).json({message: 'Success Create Books', data: books});
          } catch (error) {
               next(error);
          }
     },

     updateBooks : async (req, res, next)=>{
          try {
               let user = req.user.id;
               const {id} = req.params;
               const {title, price, category, author, published, stock, image} = req.body;

               const checkCategory = await Category.findOne({
                    where: {
                         id: category, 
                         user: user},
               });

               if(!checkCategory){
                    return res.status(404).json({message: 'Category not found'});
               }

               const checkBook = await Book.findOne({
                    where: {
                         id: id},
               });

               if(!checkBook){
                    return res.status(404).json({message: 'id book not found'});
               }

               const books = await checkBook.update({
                    title, price, category, author, published, stock, image, user:user
               });

               res.status(200).json({message: 'Success Update Books', data: books});
          } catch (error) {
               next(error);
          }
     },

     deleteBooks : async (req, res, next)=>{
          try {
               const books = await Book.findOne({
                    where: {
                         id: req.params.id},
               });

               if(!books){
                    return res.status(404).json({message: 'id book not found'});
               }

               books.destroy();

               res.status(200).json({message: 'Success Delete Books', data: books});

          } catch (error) {
               next(error);
          }
     }
}
const {Category} = require('../../db/models');

module.exports = {
     getAllCategories : async (req, res, next)=>{
          try {
               const categories = await Category.findAll({
                    where: {user: req.user.id},
                    attributes: ['id', 'name'],
               });

               res.status(200).json({message: 'Success Get All Categories', data: categories});
          } catch (error) {
               next(error);
          }
     },
     
     createCategories : async (req, res, next)=>{
          try {
               const {name} = req.body;
               const categories = await Category.create({name:name, user: req.user.id});
               res.status(201).json({message: 'Success Create Categories', data: categories});
          } catch (error) {
               next(error);
          }
     }
}
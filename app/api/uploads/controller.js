const fs = require('fs');

const uploadImage = async (req, res, next) => {
     try {
          if(!req.file) {
               return res.status(403).json({
                    message: 'File Not Found',
               });
          }

          res.status(201).json({
               message: 'Success Upload Image',
               data: {src : `/uploads/${req.file.filename}`},
          });
     } catch (error) {
          next(error);
     }
}

module.exports = {uploadImage};
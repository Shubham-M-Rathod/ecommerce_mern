const multer = require('multer');
const {v4 : uuidv4} = require('uuid')

const imageUpload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => 
    {
      cb(null, './assets/');
    },
    filename: (req, file, cb) =>
    {
        const type = file.mimetype.split('/')[1];
        cb(null, uuidv4()+'.' + type);
    },
  })
 });
module.exports = imageUpload;

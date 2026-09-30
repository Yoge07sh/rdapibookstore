const multer = require('multer');

const uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 10 * 1024 * 1024 }

});

module.exports = uploader;

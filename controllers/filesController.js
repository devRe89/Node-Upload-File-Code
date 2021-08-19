const {uploadFile} = require('../helpers/upload');

exports.upFiles = async (req, res) => {

    try {
        const nombre = await uploadFile(req.files, ['jpg', 'png'], 'nuevasFotos');
        res.json({
            nombre
        });
        
    } catch (error) {
        res.status(400).json({ error });
    }

}
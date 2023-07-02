const express = require ('express');

const router = express.Router();
//  Use the express.Router class to create modular, mountable route handlers.

//  Import the packages to create short non-sequential url-friendly unique ids.


const fs = require ('fs');
// 'fs' module allows to work with the files on computer.



router.get('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync ('db/db.json', 'utf-8'));
    res.status(200).json (dbJson);

} );
// 'api/notes' read the db.json and return notes as Json with status confirmation.


router.post('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync ( 'db/db.json', 'utf-8'));
    const newNoteApi = {
        title: req.body.title,
        text: req.body.text,
    };
    dbJson.push(newNoteApi);
    fs.writeFileSync('db/db.json', JSON.stringify (dbJson));
    res.status(200).json(dbJson);
});



module.exports = router;






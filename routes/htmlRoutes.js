const express =require ('express');

const router = express.Router();

const path = require ('path');



// Get route for homepage.
router.get('/', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

//  Get route for notes.
router.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);


module.exports = router;

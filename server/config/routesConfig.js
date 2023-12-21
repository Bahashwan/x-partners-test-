
const express = require('express');
const router = express.Router();
// const fs = require('fs');

// User
const userRoutes = require('../routes/userAuth');
router.use('/api/auth', userRoutes);

//Photos
const photoRoutes = require('../routes/photo');
router.use('/api/photo', photoRoutes);


// Get Photo
// router.get('/uploads/:photo', async(req,res)=>{
//     try {
//         const fileName = req.params.photo;
        
//         const photoPath = `./uploads/${fileName}`;
        
//         fs.readFile(photoPath, (err, data) => {
//             if (err) {
//                 console.error(err);
//                 res.status(500).send('Server Error');
//             } else {
//                 res.set('Content-Type', 'image/png');
//                 res.send(data);
//             }
//         });
//     } catch (error) {
//         console.error(error);
//         res.status(500).send('Server Error');
//     }
// })



module.exports = router;



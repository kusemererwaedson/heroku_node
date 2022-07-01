const express = require('express');     


const router = express.Router();

router.get('/', (req, res,) =>{
    res.render('index');
});
router.get('/index', (req, res,) =>{
    res.render('index');
});


router.get('/selling', (req, res,) =>{
    res.render('selling');
});

router.get('/buying', (req, res,) =>{
    res.render('buying');
});

router.get('/contacts', (req, res,) =>{
    res.render('contacts');
});

router.get('/finance', (req, res,) =>{
    res.render('finance');
});

router.get('/renting', (req, res,) =>{
    res.render('renting');
});



module.exports =    router;
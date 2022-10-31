const express = require('express');
const router = express.Router();
//const Controller = require('../controllers/Controller');
let books = require('../models/data');

const booksController = require ("../controllers/Controller");
/*
const router = [
    {
        method: 'POST',
        path: '/books',
        controller :addBook, // handler to input new book data 
    }
]
*/

router.post('/', booksController.index1);

router.get('/', booksController.index2);

router.get('/:id', booksController.index3);

router.get('/jenis/:type', booksController.index4);

router.delete('/:id', booksController.index5);

router.patch('/:id', booksController.index6);

router.put('/:id', booksController.index7);




module.exports = router;
let books = require('../models/data');

class booksController {
  //============================================================================ ADD
  static async index1(req, res) {
    console.log("testADD");
    const book = req.body;
    books.push(book);
    return res.status(200).json({
      message: `book with title ${book.name} added`,
      data: {
        books,
      }
    })
  }
  //============================================================================ GET ALL
  static async index2(req, res) {
    console.log("testGET");
    return res.status(200).json({
      message: "Succes show all books",
      data: {
        books: books,
      }
    })
  }
  //============================================================================ GET ID 
  static async index3(req, res) {
    console.log("testGET_ID");
    const { id } = req.params;
    const findBook = books.find((book) => book.id == id);
    return res.status(200).json({
      message: "Succes show books by id",
      data: {
        books: findBook,
      }
    })
  }
 //============================================================================= GET TYPE (not fixed)
  static async index4(req, res) {
    console.log("testGET_Type");
    const { type } = req.params;
    const findBook = books.find((book) => book.type = type);
    return res.status(200).json({
      message: "not Succes show all type",
      data: {
        books: findBook
      }
    })
  }
 //============================================================================= DELETE ID

  static async index5(req, res) {
    console.log("testDELETE_ID");
    const { id } = req.params;
    $: books = books.filter((book) => book.id != id);
    return res.status(200).json({
      message: `book with id ${id} has been deleted`,
      data: {
        books: books,
      }
    })
  }
//============================================================================= PATCH ID

static async index6(req, res) {
  console.log("testPATCH_ID");
  const { id } = req.params;
  const { name, type } = req.body;
  const book = books.find(( book ) => book.id == id );


  if( name )book.name = name;

   
  return res.status(200).json({
    message: `book with id ${id} has been edit`,
    data: {
      books: books,
    }
  })
}

//============================================================================ PUT ID

static async index7(req, res) {
  console.log("testPUT_ID");
  const { id } = req.params;
  const { name } = req.body;
  const book = books.find(( book ) => book.id == id );


  if( name )book.name = name;

   
  return res.status(200).json({
    message: `book with id ${id} has been edit`,
    data: {
      books: books,
    }
  })
}


}



module.exports = booksController;
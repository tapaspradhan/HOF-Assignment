const books = [
    { title: "Book1", author: "author1", year: 2005 },
    { title: "Book2", author: "author2", year: 2012 },
    { title: "Book3", author: "author3", year: 2008 },
    { title: "Book4", author: "author4", year: 2004 },
    { title: "Book5", author: "author5", year: 2005 },
    { title: "Book6", author: "author6", year: 2006 },
    { title: "Book7", author: "author7", year: 2007 },
    { title: "Book8", author: "author8", year: 2008 },
    { title: "Book9", author: "author9", year: 2009 },
    { title: "Book10", author: "author10", year:2010},
    { title: "Book11", author: "author11", year:2011},
    { title: "Book12", author: "author12", year:2012},
    { title: "Book13", author: "author13", year:2013},
    { title: "Book14", author: "author14", year:2014},
    { title: "Book15", author: "author14", year:2015},
    
];

const oldbook = books
  .filter((e) => {
    return e.year <= 2010;
  })
  .map((e) => {
    return {
        author: e.author.toUpperCase(),
        year: e.year,
  };
});

console.log(oldbook);
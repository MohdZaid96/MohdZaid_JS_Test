const books = [
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      rating: 4.9,
      details: [
        { chapter: "Introduction", pages: 20 },
        { chapter: "Chapter 1", pages: 15 }
      ]
    },
    {
      title: "abc",
      author: "qwerty",
      rating: 4.8,
      details: [
        { chapter: "Introduction", pages: 10 },
        { chapter: "Chapter 2", pages: 25 }
      ]
    }
  ];
  
  function getUnqAuth(books) {
    const authors = books.map(book => book.author);
    return [...new Set(authors)];
  }

  function getBookWMax(books) {
    return books.map(book => {
      const maxChp = book.details.reduce((max, chp) =>
        chp.pages > max.pages ? chp : max
      );
      return { title: book.title, maxChp };
    });
  }
  
  console.log(getBookWMax(books));
  console.log(getUnqAuth(books));
  
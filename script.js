function numberOfBooksRead(library) {
  // Count books with readingStatus === true
  return library.filter(book => book.readingStatus === true).length;
}

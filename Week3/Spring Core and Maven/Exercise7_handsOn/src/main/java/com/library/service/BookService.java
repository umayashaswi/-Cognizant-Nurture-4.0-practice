package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;
    private String libraryName;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void setLibraryName(String libraryName) {
        this.libraryName = libraryName;
    }

    public void addBook(String bookName) {
        System.out.println("Library: " + libraryName);
        System.out.println("Adding book: " + bookName);
        bookRepository.saveBook(bookName);
    }
}

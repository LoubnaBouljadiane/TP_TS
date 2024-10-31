"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
<<<<<<< HEAD
exports.getBookById = exports.deleteBook = exports.updateBook = exports.getBooks = exports.addBook = void 0;
=======
exports.deleteBook = exports.updateBook = exports.getBookById = exports.getBooks = exports.addBook = void 0;
>>>>>>> d3ca953 (Dernierres modifs)
const database_1 = __importDefault(require("./database"));
const addBook = async (book) => {
    const connection = await (0, database_1.default)();
    try {
<<<<<<< HEAD
        const [result] = await connection.execute('INSERT INTO books (title, author, pages, pagesRead, status, format, suggestedBy, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [book.title, book.author, book.pages, book.pagesRead, book.status, book.format, book.suggestedBy, book.price]);
        return result;
    }
    finally {
        connection.end();
=======
        const [result] = await connection.execute('INSERT INTO books (title, author, pages, status, price, pages_read,  format, suggested_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [book.title, book.author, book.pages, book.status, book.price, book.pages_read, book.format, book.suggested_by]);
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error adding book:', error.message);
            throw new Error('Error adding book: ' + error.message);
        }
        else {
            console.error('Unknown error adding book:', error);
            throw new Error('Error adding book: Unknown error');
        }
    }
    finally {
        await connection.end();
>>>>>>> d3ca953 (Dernierres modifs)
    }
};
exports.addBook = addBook;
const getBooks = async () => {
    const connection = await (0, database_1.default)();
    try {
        const [rows] = await connection.execute('SELECT * FROM books');
        return rows;
    }
<<<<<<< HEAD
    finally {
        connection.end();
    }
};
exports.getBooks = getBooks;
const updateBook = async (id, book) => {
    const connection = await (0, database_1.default)();
    try {
        const [result] = await connection.execute('UPDATE books SET title = ?, author = ?, pages = ?, pagesRead = ?, status = ?, format = ?, suggestedBy = ?, price = ? WHERE id = ?', [book.title, book.author, book.pages, book.pagesRead, book.status, book.format, book.suggestedBy, book.price, id]);
        return result.affectedRows > 0 ? result : null;
    }
    finally {
        connection.end();
=======
    catch (error) {
        if (error instanceof Error) {
            console.error('Error retrieving books:', error.message);
            throw new Error('Error retrieving books: ' + error.message);
        }
        else {
            console.error('Unknown error retrieving books:', error);
            throw new Error('Error retrieving books: Unknown error');
        }
    }
    finally {
        await connection.end();
    }
};
exports.getBooks = getBooks;
const getBookById = async (id) => {
    const connection = await (0, database_1.default)();
    try {
        const [rows] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
        return rows[0] || null;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error retrieving book:', error.message);
            throw new Error('Error retrieving book: ' + error.message);
        }
        else {
            console.error('Unknown error retrieving book:', error);
            throw new Error('Error retrieving book: Unknown error');
        }
    }
    finally {
        await connection.end();
    }
};
exports.getBookById = getBookById;
const updateBook = async (id, book) => {
    const connection = await (0, database_1.default)();
    try {
        const [result] = await connection.execute('UPDATE books SET title = ?, author = ?, pages = ?, status = ?, price = ? , pages_read = ?, format = ?, suggested_by = ? WHERE id = ?', [book.title, book.author, book.pages, book.status, book.price, book.pages_read, book.format, book.suggested_by, id]);
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error updating book:', error.message);
            throw new Error('Error updating book: ' + error.message);
        }
        else {
            console.error('Unknown error updating book:', error);
            throw new Error('Error updating book: Unknown error');
        }
    }
    finally {
        await connection.end();
>>>>>>> d3ca953 (Dernierres modifs)
    }
};
exports.updateBook = updateBook;
const deleteBook = async (id) => {
    const connection = await (0, database_1.default)();
    try {
        const [result] = await connection.execute('DELETE FROM books WHERE id = ?', [id]);
<<<<<<< HEAD
        return result.affectedRows > 0;
    }
    finally {
        connection.end();
    }
};
exports.deleteBook = deleteBook;
const getBookById = async (id) => {
    const connection = await (0, database_1.default)();
    try {
        const [rows] = await connection.execute('SELECT * FROM books WHERE id = ?', [id]);
        return rows.length > 0 ? rows[0] : null;
    }
    finally {
        connection.end();
    }
};
exports.getBookById = getBookById;
=======
        return result;
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error deleting book:', error.message);
            throw new Error('Error deleting book: ' + error.message);
        }
        else {
            console.error('Unknown error deleting book:', error);
            throw new Error('Error deleting book: Unknown error');
        }
    }
    finally {
        await connection.end();
    }
};
exports.deleteBook = deleteBook;
>>>>>>> d3ca953 (Dernierres modifs)

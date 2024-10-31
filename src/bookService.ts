import createConnection from './database';
import { RowDataPacket, ResultSetHeader } from 'mysql2';
import { Book } from './Book';

// Ajouter un livre
export const addBook = async (book: Book): Promise<ResultSetHeader> => {
    const connection = await createConnection();
    try {
        const [result] = await connection.execute<ResultSetHeader>(
<<<<<<< HEAD
            'INSERT INTO books (title, author, pages, pagesRead, status, format, suggestedBy, price) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [book.title, book.author, book.pages, book.pagesRead, book.status, book.format, book.suggestedBy, book.price]
        );
        return result;
    } finally {
        connection.end();
    }
};

// Obtenir tous les livres
export const getBooks = async (): Promise<Book[]> => {
    const connection = await createConnection();
    try {
        const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM books');
        return rows as Book[];
    } finally {
        connection.end();
=======
            'INSERT INTO books (title, author, pages, status, price, pages_read,  format, suggested_by) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
            [book.title, book.author, book.pages,book.status, book.price, book.pages_read, book.format, book.suggested_by]);

        
        return result;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error adding book:', error.message);
            throw new Error('Error adding book: ' + error.message);
        } else {
            console.error('Unknown error adding book:', error);
            throw new Error('Error adding book: Unknown error');
        }
    } finally {
        await connection.end();
    }
};

// Récupérer tous les livres
export const getBooks = async (): Promise<Book[]> => {
    const connection = await createConnection();
    try {
        const [rows] = await connection.execute<Book[] & RowDataPacket[]>('SELECT * FROM books');
        return rows;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error retrieving books:', error.message);
            throw new Error('Error retrieving books: ' + error.message);
        } else {
            console.error('Unknown error retrieving books:', error);
            throw new Error('Error retrieving books: Unknown error');
        }
    } finally {
        await connection.end();
    }
};

// Récupérer un livre par ID
export const getBookById = async (id: number): Promise<Book | null> => {
    const connection = await createConnection();
    try {
        const [rows] = await connection.execute<Book[] & RowDataPacket[]>('SELECT * FROM books WHERE id = ?', [id]);
        return rows[0] || null;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error retrieving book:', error.message);
            throw new Error('Error retrieving book: ' + error.message);
        } else {
            console.error('Unknown error retrieving book:', error);
            throw new Error('Error retrieving book: Unknown error');
        }
    } finally {
        await connection.end();
>>>>>>> d3ca953 (Dernierres modifs)
    }
};

// Mettre à jour un livre
<<<<<<< HEAD
export const updateBook = async (id: number, book: Book): Promise<ResultSetHeader | null> => {
    const connection = await createConnection();
    try {
        const [result] = await connection.execute<ResultSetHeader>(
            'UPDATE books SET title = ?, author = ?, pages = ?, pagesRead = ?, status = ?, format = ?, suggestedBy = ?, price = ? WHERE id = ?',
            [book.title, book.author, book.pages, book.pagesRead, book.status, book.format, book.suggestedBy, book.price, id]
        );
        return result.affectedRows > 0 ? result : null; // Return null if no rows were affected
    } finally {
        connection.end();
=======
export const updateBook = async (id: number, book: Book): Promise<ResultSetHeader> => {
    const connection = await createConnection();
    try {
        const [result] = await connection.execute<ResultSetHeader>(
            'UPDATE books SET title = ?, author = ?, pages = ?, status = ?, price = ? , pages_read = ?, format = ?, suggested_by = ? WHERE id = ?',
            [book.title, book.author, book.pages, book.status, book.price, book.pages_read, book.format, book.suggested_by, id]
        );
        return result;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error updating book:', error.message);
            throw new Error('Error updating book: ' + error.message);
        } else {
            console.error('Unknown error updating book:', error);
            throw new Error('Error updating book: Unknown error');
        }
    } finally {
        await connection.end();
>>>>>>> d3ca953 (Dernierres modifs)
    }
};

// Supprimer un livre
<<<<<<< HEAD
export const deleteBook = async (id: number): Promise<boolean> => {
    const connection = await createConnection();
    try {
        const [result] = await connection.execute<ResultSetHeader>('DELETE FROM books WHERE id = ?', [id]);
        return result.affectedRows > 0; // Return true if a row was deleted
    } finally {
        connection.end();
    }
};

// Obtenir un livre par ID
export const getBookById = async (id: number): Promise<Book | null> => {
    const connection = await createConnection();
    try {
        const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM books WHERE id = ?', [id]);
        return rows.length > 0 ? (rows[0] as Book) : null; // Return null if no book found
    } finally {
        connection.end();
=======
export const deleteBook = async (id: number): Promise<ResultSetHeader> => {
    const connection = await createConnection();
    try {
        const [result] = await connection.execute<ResultSetHeader>('DELETE FROM books WHERE id = ?', [id]);
        return result;
    } catch (error: unknown) {
        if (error instanceof Error) {
            console.error('Error deleting book:', error.message);
            throw new Error('Error deleting book: ' + error.message);
        } else {
            console.error('Unknown error deleting book:', error);
            throw new Error('Error deleting book: Unknown error');
        }
    } finally {
        await connection.end();
>>>>>>> d3ca953 (Dernierres modifs)
    }
};

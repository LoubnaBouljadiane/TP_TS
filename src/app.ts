import express, { Request, Response } from 'express';
import path from 'path';
<<<<<<< HEAD
import { addBook, getBooks, updateBook, deleteBook, getBookById } from './bookService';

=======
import { addBook, getBooks,getBookById,deleteBook ,updateBook} from './bookService';
>>>>>>> d3ca953 (Dernierres modifs)
const app = express();
const port = 3000;

// Middleware pour analyser le JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Route pour ajouter un livre
app.post('/addBook', async (req: Request, res: Response) => {
    try {
        const result = await addBook(req.body);
        res.status(201).json(result);
<<<<<<< HEAD
=======
        
>>>>>>> d3ca953 (Dernierres modifs)
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Une erreur inconnue s\'est produite.' });
        }
    }
});

// Route pour obtenir la liste des livres
app.get('/books', async (req: Request, res: Response) => {
    try {
        const books = await getBooks();
        res.json(books);
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Une erreur inconnue s\'est produite.' });
        }
    }
});
<<<<<<< HEAD
=======
app.get('/getBook/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id);
        const book = await getBookById(id);
        if (book) {
            res.json(book);
        } else {
            res.status(404).json({ message: 'Livre non trouvé.' });
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Une erreur inconnue s\'est produite.' });
        }
    }
});

>>>>>>> d3ca953 (Dernierres modifs)

// Route pour mettre à jour un livre
app.put('/updateBook/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id); // Convertir l'ID en nombre
        const result = await updateBook(id, req.body);
<<<<<<< HEAD
=======
        console.log(result)
>>>>>>> d3ca953 (Dernierres modifs)
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ message: 'Livre non trouvé.' });
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Une erreur inconnue s\'est produite.' });
        }
    }
});

<<<<<<< HEAD
// Route pour supprimer un livre
app.delete('/deleteBook/:id', async (req: Request, res: Response) => {
    try {
        const id = Number(req.params.id); // Convertir l'ID en nombre
        const result = await deleteBook(id);
        if (result) {
            res.status(200).json({ message: 'Livre supprimé avec succès.' });
        } else {
            res.status(404).json({ message: 'Livre non trouvé.' });
        }
    } catch (error: unknown) {
        if (error instanceof Error) {
            res.status(500).json({ message: error.message });
        } else {
            res.status(500).json({ message: 'Une erreur inconnue s\'est produite.' });
        }
    }
});

=======

app.delete('/deleteBook/:id', async (req: Request, res: Response) => {
    const bookId = parseInt(req.params.id, 10);
    await deleteBook(bookId);
    res.status(204).send(); // Pas de contenu pour la réponse
});








>>>>>>> d3ca953 (Dernierres modifs)
// Démarrer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});

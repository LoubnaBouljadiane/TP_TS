import mysql from 'mysql2/promise';

async function createConnection() {
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root', // Remplacez par votre nom d'utilisateur
<<<<<<< HEAD
        password: '', // Remplacez par votre mot de passe
=======
        password: 'Loubna@123', // Remplacez par votre mot de passe
>>>>>>> d3ca953 (Dernierres modifs)
        database: 'book_tracker'
    });
    return connection; // Retourne la connexion active
}

export default createConnection;

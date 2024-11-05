const db = require("./connDB");

module.exports = {
    getAllMessages: async () => {
        const [rows] = await db.promise().execute("SELECT * FROM message_content");
        return rows;
    },
    getMessageById: async (id) => {
        const [rows] = await db.promise().execute("SELECT * FROM message_content WHERE idMessage = ?",[id]);
        return rows[0];
    },
    insertMessage: async (idUser, message) => {
        try {
            const [result] = await db.promise().execute("INSERT INTO messages (idUser, contenu) VALUES (?, ?)", [idUser, message]);
            return result;
        } catch (err) {
            console.error('Erreur lors de l\'insertion du message :', err);
            return false;
        }
    },
}
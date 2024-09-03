const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Our Debts API');
});

// Aggiungi altre rotte per gestire i debiti e gli utenti

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

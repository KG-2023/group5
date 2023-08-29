const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const users = [];

app.post('/api/signup', (req, res) => {
    const { name, email, password } = req.body;

    // Server-side validation
    if (!name || !email || !password) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Store the user data
    const newUser = { name, email, password };
    users.push(newUser);

    res.status(201).json({ message: 'User registered successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

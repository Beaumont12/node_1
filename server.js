const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const firstName = "RELGIN";
const lastName = "PALOMA";
const age = 20;
const schoolEmail = "redi.paloma.swu@phinmaed.com";

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to my server! Available routes: /firstname, /lastname, /age, /schoolemail, /mydata');
});

app.get('/firstname', (req, res) => {
    res.send(firstName);
});

app.get('/lastname', (req, res) => {
    res.send(lastName);
});

app.get('/age', (req, res) => {
    res.send(age.toString());
});

app.get('/schoolemail', (req, res) => {
    res.send(schoolEmail);
});

app.get('/mydata', (req, res) => {
    res.json({
        first_name: firstName,
        last_name: lastName,
        age: age,
        school_email: schoolEmail
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const express = require('express'); 
const path = require('path');



const app = express();
app.set('view engine', 'hbs');

const publicDirectory = path.join(__dirname, '/public');   
app.use(express.static(publicDirectory));

app.use('/', require('./routers/pages'));


app.listen(5000,() => {
    console.log('server started on port 5000');
});
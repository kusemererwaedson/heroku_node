const express = require('express'); 
const path = require('path');

const {
    PORT = 5400,
    NODE_ENV = 'development',

} = process.env;

const IN_PROD = NODE_ENV === 'production';



const app = express();
app.set('view engine', 'hbs');

const publicDirectory = path.join(__dirname, '/public');   
app.use(express.static(publicDirectory));

app.use('/', require('./routers/pages'));


app.listen(PORT,() => {
    console.log(`server started on port ${PORT}`);
});
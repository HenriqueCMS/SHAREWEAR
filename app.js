var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const session = require('express-session'); 
const path = require('path');
const app = express();


let ejs = require('ejs');
app.set('view engine', 'ejs');

const screensNavigationRouter = require('./src/routes/screensNavigationRouter');
const produtosRouter = require('./src/routes/produtosRouter')
const productRouter = require('./src/routes/productRouter');
const registerProductRouter = require('./src/routes/registerProductRouter');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'src', 'public')));
app.use('/', screensNavigationRouter);
app.use('/produto', produtosRouter);
app.use('/product', productRouter);
app.use('/register', registerProductRouter);


const connectDataBase = () => {
    console.log('Conectando ao banco de dados')

    mongoose 
    .connect('mongodb+srv://xudavs:floquinho156@cluster0.6rppoz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
              })   
    .then(() => console.log("Database connected!"))
    .catch(err => console.log(err));

    // mongoose.connect('mongodb+srv://xudavs:floquinho156@cluster0.6rppoz9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0').then(()=>{console.log("MongoDB connected")}).catch((error)=>{console.log("MongoDB not connected")})
}

connectDataBase()

app.listen(3000, ()=>{
    console.log("the server is running http://localhost:3000");
});
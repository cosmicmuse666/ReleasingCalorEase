const exp = require('express');
const app = exp();
const cors = require('cors');
const m= require('mongoose');
const bp = require('body-parser');
const ef = require('express-fileupload');


m.connect("mongodb+srv://arnabganai:wl6SVciWk19m37cD@cluster0.edokzgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")


app.get('/', (req, res) => {
  res.send('Hello World');
}); 
app.use(ef);
app.use(bp.urlencoded({extended:false}))
app.use(bp.json());

app.use(cors());

const mod_route = require('./route/mod_route');
app.use('/mod', mod_route);




app.listen(5000);
const exp = require('express');

const app = exp();
const cors = require('cors');
const m= require('mongoose');
const bp = require('body-parser');
const ef = require('express-fileupload');
const mod_route = require('./route/mod_route');
const signup1= require('./route/login');
app.use(exp.static("assets"));

m.connect("mongodb+srv://arnabganai:wl6SVciWk19m37cD@cluster0.edokzgz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => {
  res.send('Hello World');
}); 

app.use(bp.urlencoded({extended:false}))
app.use(bp.json());
app.use(ef());
app.use(cors());
app.use('/mod', mod_route);
app.use('/auth', signup1);


app.listen(5000, ()=>{
  console.log('sever running on port 5000');
});
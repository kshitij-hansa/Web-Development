const express = require("express")

const app = express();
const port = 80;
const path = require("path")

// For serving Static File
app.use('/static',express.static('static'));

// Set the template Engine for pug 
app.set('view engine','pug')

// set the view Directory
app.set('views',path.join(__dirname,'views'))

app.get('/', (req,res)=>{
    res.status(200).render('')
})


// app.get("/",(req,res)=>{
//     res.send("this is a my first app class");
// });
// app.get("/about",(req,res)=>{
//     res.send("this is a about page in app class");
// });
// app.post("/about",(req,res)=>{
//     res.send("this is a post requst about page in app class");
// });

app.listen(port,()=>{
    console.log(`the application started successfully on port ${port}`)
})
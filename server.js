const exp=require('express')
const app = exp()
const mclient=require('mongodb').MongoClient;
const path = require('path')
app.use(exp.static(path.join(__dirname, "./build")));
const DbUrl="mongodb+srv://tapanganesh:tapanganesh@cluster0.fd2zm.mongodb.net/?retryWrites=true&w=majority";

// connect db to server
mclient.connect(DbUrl)
.then((client) => {
    let dbObj = client.db("ExpenseTrackingApp");
    let userCollection=dbObj.collection("Users");
    // to share with apis
    app.set("userCollection", userCollection)
    console.log("database connected")
})
.catch(err => console.log("db connection error",err));

const userApi=require("./Apis/UserApi");
app.use('/user',userApi);
// to handle invalid paths
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./build/index.html"));
});
app.use((req,res,next)=>{
    res.send({message:`path not found ${req.path}`})
})
// handle errors
app.use((error,req,res,next)=>{
    console.log(error.message);
    res.send({message:`error ${error.message} has occured`})
})

app.listen(4000,()=>{console.log('listening on 4000')})
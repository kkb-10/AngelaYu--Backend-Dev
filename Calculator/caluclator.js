const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const hostname='localhost'
const port=3000;

app.use(bodyParser.urlencoded());

app.get("/",(req,res)=>{
    res.sendFile(__dirname+'/index.html');
});
app.post("/",(req,res)=>{
    var n1=Number(req.body.n1);
    var n2=Number(req.body.n2);
    if(req.body.hasOwnProperty("add"))
    {
        var result=n1+n2;
        res.send('The result of addition is ' + result);
    }
    else if(req.body.hasOwnProperty("sub"))
    {
        var result=n1-n2;
        res.send('The result of subtraction is ' + result);
    }
    else if(req.body.hasOwnProperty("mul"))
    {
        var result=n1*n2;
        res.send('The result of multiplication is ' + result);
    }
    else if(req.body.hasOwnProperty("div"))
    {
        var result=n1/n2;
        res.send('The result of division is ' + result);
    }
});

app.listen(port,()=>{
    console.log(`Server is running on http://${hostname}:${port}`);
});
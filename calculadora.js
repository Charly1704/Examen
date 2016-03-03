var express=require("express");
var app = express();
var bodyParser = require("body-parser")

app.use(bodyParser.json()); //aplicattion/JSON
app.use(bodyParser.urlencoded({extended:true}));

app.set("view engine","jade");

app.get("/",function(req,res){
    res.render("index")
})
app.post("/",function(req,res){
    var num1 = parseInt(req.body.num1);
    var num2 = parseInt(req.body.num2);
    var funcion = req.body.operacion;
    switch (funcion) {
        case '+':
         var  resultado = num1+num2;
         
            break;
        case '-':
            resultado = num1-num2;
           
            break;
        case '/':
            resultado = num1/num2;
           
            break;
        case '*':
            resultado = num1*num2;
            
            break;
        default:
            res.send("Funcion no valida");
    }
    res.render("resultado",{resultados:resultado})
})
app.put("/",function(req, res) {
    res.render("index")
    console.log("xx")
})
app.listen(8080);
const express = require('express')
const bodyParser = require('body-parser')
const date = require(__dirname + "/date.js")

const app = express()
app.set('view engine' , 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

let items = ["buy food" , "cock food" , "eat food"]
let workItems = []
app.use(express.static("Public"))

app.get("/" , function(req,res){
  
    let currentday = date.get_day()


    res.render("list" , {listTitle: currentday ,myitem: items })


   

})
app.post("/" , function(req , res){
    console.log(req.body);
    if(req.body.list == "Work"){
        item = req.body.newItem
        workItems.push(item) 
        res.redirect("/work")
    }else{
    item = req.body.newItem
    items.push(item)
    res.redirect("/")
    }
})
app.get("/work" , function(req,res){
    res.render("list" , {listTitle: "Work List" , myitem : workItems })
})
app.post("/work" ,function(req,res){
  
    let item = req.body.newItem

    workItems.push(item)
    res.redirect("/work")
})

app.get("/about", function(req,res){
    res.render("about")
})

app.listen(3000,function(){
    console.log("pleaseeeee work on")
})

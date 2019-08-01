var bodyParser = require('body-parser');

var data = [{item: 'Read'}, {item: 'Play games'}, {item:'Code'}]
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function(app){
    app.get('/todo', function(req,res){
        res.render('todo', {todos:data});
    })

    app.post('/todo', urlencodedParser, function(req,res){
        data.push(req.body);
        res.json(data);
    })

    app.delete('/todo/:item', function(req,res){

    })
}





















/*
var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({extended: false});

var data =[{item:'Tutorials'}, {item:'Do some coding'}, {item:'Sleep'}, {item:'Play Fifa'}];

module.exports= function(app){

app.get('/todo', function(req,res){
    res.render('todo', {todos:data});
});

app.post('/todo', urlencodedParser, function(req,res){
    data.push(req.body);
    res.json(data);  
})


app.delete('/todo:item', function(req,res){
    data = data.filter(function(todo){
        return todo.item.replace(/ /g, '-') !== req.params.item;
    })
    res.json(data);
})

}
*/
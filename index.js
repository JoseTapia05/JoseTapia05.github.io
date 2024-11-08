var express=require('express');
var socket=require('socket.io');
var app=express();

app.use(express.static('public'));

var server=app.listen(5000,function () {
    console.log("Servidor activo en el puerto 5000")
});

app.use(express.static('public'));
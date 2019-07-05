const express = require ('express');
const services = require ('./services');

exports.routes = (app) => {

/*app.use (express.json())//conesto indicamos que puede recibir json
app.use (express.urlencoded())*/


app.get('/', (request, response) =>{
    response.send ('hello mozzy');
});

app.get('/usuario', (request, response) =>{
    const usuario ={
		name:'Chio',
		edad:32
	}
    response.send (usuario);
});

app.get('/usuarios', (request, response) =>{
    const name = request.query.name;
    //const names = name.split(',');
    //console.log(names);
    const age = request.query.age;
    const ageName = age + ' ' + name;
    const color = request.query.color;
    response.send(color);
});

app.get('/sumar', (request, response) =>{
    const a = request.query.num1;
    const b = request.query.num2;
    const total = parseInt(a) + parseInt (b);
    response.send('total = '+ total);
});

app.delete('/borrar', (request, response) => {
    const id =request.query.id;
    // aqui es donde se borrar el recurso
    response.send('se borro'+id);3000
});

app.get('/url', (request, response) => {
    const locacion = request.query.locacion;
       response.json('Ud está aquí '+ locacion);
});

//hacer un endpoint que sume dos numeros y de dos numeros
//http://localhost:3000/sumar?num1=5&num2=6


app.get('/json',(request,response) => {
    const tel = request.query.telefono;
    const brand = request.query.marca;
    const obj = {
        telefono: tel,
        marca: brand
    }
    response.json(obj);
});
//127.0.0.1:3000/json?telefono=2019&marca=apple

app.get('/email',(request,response) => {
    const name = request.query.nombre;
    response.send (name +'@gmail.com');
});
//127.0.0.1:3000/email?nombre=rca

app.get('/edad',(request,response) => {
    const year = request.query.fecha;
    const resultado = 2019 - year;
    response.send ('Tienes ' + resultado + ' años');
});
//127.0.0.1:3000/edad?fecha=1987
/*app.get('/year',(request,response) => {
    const y = request.query.year;
    const currentYear = 2019;
    const result = currentYear - y
    response.send ('edad: ' + result);*/


    //POST
    app.post('/datos',(request,response) => {
        const postData = request.body;
        services.addId(postData);
        response.json(postData);
    });

    app.get('/html',(request,response) => {
        response.render ('form');
    });

    app.post('/form',(request,response) => {
        const data = request.body;
        response.send (data);
        //http://localhost:3000/form
    });
    //http://localhost:3000/form
}
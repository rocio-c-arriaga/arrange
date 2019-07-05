exports.addId = (obj) => {
    var i = 0;
//obj.id = ++i;
obj.forEach(element => {
    element.id = ++i;
});

/*for(i=0); i < obj.lenght; i++){
    obj [i],id = i
} es lo mismo resumido en la linea 4a6*/

return obj;
}



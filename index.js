const express = requiere('express');
cons app = express();

app.use(express.static(_dirname+'/public'));

app.get('/hola',(req,res){
  res.send('ruta hola');
});


app.get('/adios',(req,res){
  res.send('ruta adios');
});

app.listen(3000, ()->){
  console.log('example app listening on port 3000');
};
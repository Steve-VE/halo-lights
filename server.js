let express = require("express");
let app = express();

app.use('/assets', express.static('public'));

app.get('/', (request, response)=>{
    response.sendFile(__dirname + "/views/index.html");
});

app.get('*', (request, response)=>{
    response.redirect('/');
});

app.listen(8080);
const app = require('./config/server');
require('./app/routes/indexRoutes')(app);

// iniciar el servidor

app.listen(app.get('port'), ()=>{
    console.log('server on port ' , app.get('port'));
    
})
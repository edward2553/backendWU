module.exports = app =>{

    app.get( '/' , (req , res)=>{
        res.status(200).json({
            status : true,
            code : 200,
            hola : "hola"
        });

    })

}
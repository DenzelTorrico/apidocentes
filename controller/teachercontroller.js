const mysql = require("../config/server")
module.exports.get = function(req,res){
    const query = mysql.query("select * from teacher",function(err,result){
        if(err){
            console.log("consulta error:",err)
            res.json({
                ok: false,
                status: 500,
                error: 'Error en la consulta a la base de datos'
            });
        }else{
            res.json({
                ok:true,
                status:200,
                body:result
            })
        }

    }) 
}
module.exports.post = function(req,res){
        res.json(req.body)
}
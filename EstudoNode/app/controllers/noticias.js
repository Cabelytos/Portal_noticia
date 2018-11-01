module.exports.noticias = (app, req, res) =>{

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

      noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result});

      });

}

module.exports.noticia = (app, req, res) =>{
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);


    var id_noticia = req.query


        noticiasModel.getNoticia(id_noticia,function(error , result){
            res.render("noticias/noticia", {noticia : result});
      }); // recupera informações no banco de dados

}

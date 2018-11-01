module.exports.formulario_inclusao_noticia = (app, req, res)=> {
    res.render('admin/form_add_noticia',{validacao: {},noticia:{}})

}

module.exports.noticias_salvar = (app, req, res) =>{
    var noticia = req.body;

    req.assert('titulo','titulo nao pode ser vazio').notEmpty();
    req.assert('resumo','resumo nao pode ser vazio').notEmpty();
    req.assert('resumo','resumo obrigatorio').len(10, 100);
    req.assert('autor','autor obrigatorio').notEmpty();
    req.assert('data_noticia', 'data é obrigatoria').notEmpty().isISO8601({format: 'YYYY-MM-DD'});
    req.assert('noticia','Noticia é obrigatória').notEmpty();


    var error = req.validationErrors();
    if(error){
      res.render('admin/form_add_noticia',{validacao : error, noticia : noticia});
      return;
    }

    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

      noticiasModel.salvarNoticia (noticia,(error, result) => {
        res.redirect('/noticias')
      });

}

/*
    req.getValidationResult().then(function(result) {
          var errors = result.array();
            if (!result.isEmpty()) {
                console.log(errors);
              res.render("admin/form_add_noticia", { validacao: errors, noticia: noticia });
              return;
          }
              var connection = app.config.dbConnection();
              var noticiasModel = new app.app.models.NoticiasDAO(connection);
          noticiasModel.salvarNoticia(noticia, function(err, result) {
          res.redirect('/noticias');
          });
      });

}
*/

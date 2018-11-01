var http = require('http'); //import module

var server = http.createServer(function(req, res ){

    var categoria = req.url;

    if(categoria == '/tecnologia' ){
      res.end('<html><body> Portal de tecnologia </body> </noticias>')

    }else if(categoria == '/moda'){
    res.end (' <html><body> portal de modas </body> </noticias>')

  }else if(categoria == '/beleza'){
    res.end (' <html><body> portal de modas </body> </noticias>')

    }else{
    res.end("<html><body> portal de notisscias </body> </noticias>")
  }
});


server.listen(3000)

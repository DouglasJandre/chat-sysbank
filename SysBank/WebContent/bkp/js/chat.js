    $(document).ready( function(){

      //boas vindas.

      $.ajax({
          url: 'https://banco-rendimento.mybluemix.net/conversa/oi',
          method: 'get',

          beforeSend: function() {
            $('#progress').html('<img src="img/loader.gif" width="20"> Banco Rendimentos esta digitando...');
          },

          success: function(data){
            $('#msg').append('<li class="mar-btm">');
                $('#msg').append('<div class="media-left"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" class="img-circle img-sm" alt="Profile Picture"></div>');
                $('#msg').append('<div class="media-body pad-hor"><div class="speech"><a href="#" class="media-heading">Banco Rendimentos</a><p>'+data+'</p><p class="speech-time"><i class="fa fa-clock-o fa-fw"></i>09:23AM</p>');
                $('#msg').append('</div></div></li>');
                $('#progress').html('');
          }
        });


      var minhadiv = document.getElementById("chat");
      $('#btn-envia').click(function(){
        var msg = $('#pergunta').val();                 // Texto do usuário, pronto a guardar na base de dados.
        $.ajax({
          url: 'https://banco-rendimento.mybluemix.net/conversa/' + msg,
          method: 'get',

          beforeSend: function() {
                $('#progress').html('<img src="img/loader.gif" width="20"> Banco Rendimentos esta digitando...');
                var tt = $('#pergunta').val();
                $('#pergunta').val('');
                
                $('#msg').append('<li class="mar-btm">');
                $('#msg').append('<div class="media-right"><img src="img/user.png" class="img-circle img-sm" alt="Profile Picture"></div>');
                $('#msg').append('<div class="media-body pad-hor speech-right"><div class="speech"><a href="#" class="media-heading">Você</a><p>'+msg+'</p><p class="speech-time"><i class="fa fa-clock-o fa-fw"></i>09:23AM</p>');
                $('#msg').append('</div></div></li>');
               minhadiv.scrollTop = minhadiv.scrollHeight;
          },

          success: function(data){
                if(data != 'endereco'){                     
                  $('#progress').html('');
                  $('#msg').append('<li class="mar-btm">');
                  $('#msg').append('<div class="media-left"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" class="img-circle img-sm" alt="Profile Picture"></div>');
                  $('#msg').append('<div class="media-body pad-hor"><div class="speech"><a href="#" class="media-heading">Banco Rendimentos</a><p>'+data+'</p><p class="speech-time"><i class="fa fa-clock-o fa-fw"></i>09:23AM</p>');
                  $('#msg').append('</div></div></li>');
                  $('#progress').html('');
                  minhadiv.scrollTop = minhadiv.scrollHeight;
                }else{
                  //aqui muda o mapa
                  console.log('Mudando o mapa');
                  document.getElementById('fmapa').innerHTML = "<iframe src='mapa2.html' height='400' width='400'></iframe>";
                  $('#progress').html('');
                  $('#msg').append('<li class="mar-btm">');
                  $('#msg').append('<div class="media-left"><img src="http://bootdey.com/img/Content/avatar/avatar1.png" class="img-circle img-sm" alt="Profile Picture"></div>');
                  $('#msg').append('<div class="media-body pad-hor"><div class="speech"><a href="#" class="media-heading">Banco Rendimentos</a><p>'+data+'</p><p class="speech-time"><i class="fa fa-clock-o fa-fw"></i>09:23AM</p>');
                  $('#msg').append('</div></div></li>');

                }

                }
     
        });
      });

      $(document).keypress(function(e) {
        if(e.which == 13){ //Enviar texto com o ENTER
          if ($('#pergunta').val() != "") {
            $('#btn-envia').click();
          }
        } 
          
        
      });

    });
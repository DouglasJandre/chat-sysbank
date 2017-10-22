$(document).ready( function(){

      //boas vindas.

      $.ajax({
          url: 'https://sysbank-test.mybluemix.net/conversa/oi',
//          url: 'http://localhost:8080/conversa/oi',
    	  method: 'get',

          beforeSend: function() {
            $('#progress').html('<img src="img/loader.gif" width="20"> SysBank esta digitando...');
          },

          success: function(data){
          var x = data.split("|");
            $('#msg').append('<li class="mar-btm">');
                $('#msg').append('<div class="media-left"><img src="img/sysbot.png" class="img-circle img-sm" alt="Profile Picture"></div>');
                $('#msg').append('<div class="media-body pad-hor"><div class="speech"><a href="#" class="media-heading"> SysBank </a><p>'+x[1]+'</p><p class="speech-time"><i class="fa fa-clock-o fa-fw"></i>09:23AM</p>');
                $('#msg').append('</div></div></li>');
                $('#progress').html('');
          }
        });


      var minhadiv = document.getElementById("chat");
      $('#btn-envia').click(function(){
        var msg = $('#pergunta').val();                 // Texto do usuário, pronto a guardar na base de dados.
        $.ajax({
          url: 'https://sysbank-test.mybluemix.net/conversa/' + msg,
//          url: 'http://localhost:8080/conversa/' + msg,
          method: 'get',

          beforeSend: function() {
                $('#progress').html('<img src="img/loader.gif" width="20"> SysBank esta digitando...');
                var tt = $('#pergunta').val();
                $('#pergunta').val('');
                
                $('#msg').append('<li class="mar-btm">');
                $('#msg').append('<div class="media-right"><img src="img/user.jpg" class="img-circle img-sm" alt="Profile Picture"></div>');
                $('#msg').append('<div class="media-body pad-hor speech-right"><div class="speech"><a href="#" class="media-heading">Você</a><p>'+msg+'</p><p class="speech-time"><i class="fa fa-clock-o fa-fw"></i>09:23AM</p>');
                $('#msg').append('</div></div></li>');
               minhadiv.scrollTop = minhadiv.scrollHeight;
          },

          success: function(data){ 

                  if (data == "ligaCam") {
                    console.log('Abrindo cam.');
                    $('#btnPag').click();
                    return;
                  }

                  var x = data.split("|");

                  console.log(data);
                  console.log(x[1]);

                  if (x[0] == "true") {
                    console.log('audio tocando..');
                    var playAudio = document.getElementById("playAudio");
                    playAudio.play();
                  }     
                  
                  $('#progress').html('');
                  $('#msg').append('<li class="mar-btm">');
                  $('#msg').append('<div class="media-left"><img src="img/sysbot.png" class="img-circle img-sm" alt="Profile Picture"></div>');
                  $('#msg').append('<div class="media-body pad-hor"><div class="speech"><a href="#" class="media-heading">SysBank</a><p>'+x[1]+'</p><p class="speech-time"><i class="fa fa-clock-o fa-fw"></i>09:23AM</p>');
                  $('#msg').append('</div></div></li>');
                  minhadiv.scrollTop = minhadiv.scrollHeight;
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
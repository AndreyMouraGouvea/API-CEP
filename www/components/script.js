$(document).on("click","#buscar",function(){
  $.ajax({
    type:"get",//como vou enviar
    url: "http://viacep.com.br/ws/"+$("#cep").val()+"/json/", //para onde enviar
    success: function(data){  //executar comando caso funcione
      var conteudo;
      conteudo = "<p><strong>Logradouro:</strong>"+data.logradouro+"</p>";
      conteudo += "<p><strong>Bairro:</strong>"+data.bairro+"</p>";
      conteudo += "<p><strong>Localidade:</strong>"+data.localidade+"</p>";
      conteudo += "<p><strong>Estado:</strong>"+data.uf+"</p>";

      $("dados").html(conteudo);
    },
    error: function(){
      alert("Error!"); //executar comando caso não funcione
    }
    })
  
});


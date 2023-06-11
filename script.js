var largura = 0;
var altura = 0;
var vidas = 1;
var cronometro = 10;

function ajustaTamanhoTela(){
    largura = window.innerWidth;
    altura = window.innerHeight;
}



setInterval(function () {
    cronometro--
    document.getElementById('cronometroTempo').innerHTML = cronometro
    console.log(cronometro)
    if(cronometro <= 0){
        window.location.href = "vitoria.html"
    }
}, 1000);

ajustaTamanhoTela()

function geraClasseMosquito(){
    var classe = Math.trunc(Math.random() * 3);
    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function ladoMosquito(){
    var classe = Math.trunc(Math.random() * 2);
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}

function  CriaMosquito(x, y){
   
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove();

      
        
       
       console.log(vidas)
       if(vidas > 3){
           
            window.location.href = "gameOver.html"
       }else{
            document.getElementById("v" + vidas).src = "imagens/coracao_vazio.png";
       }

       vidas++ ;
    }
    
    
    var mosquito = document.createElement('img');
    mosquito.src = "/imagens/mosca.png";
    mosquito.style.right = x + 'px';
    mosquito.style.top = y + 'px';
    mosquito.style.position = "absolute";
    mosquito.id = 'mosquito'
    document.body.appendChild(mosquito); 
    console.log(ladoMosquito())
    mosquito.className = geraClasseMosquito() + ' ' + ladoMosquito();

   mosquito.onclick = function(){
    this.remove()
   }
}

function GerarPosicaoMosquito(){
    var posicaoX = Math.trunc(Math.random() * largura) - 90;
    var posicaoY = Math.trunc(Math.random() * altura) - 90;
    
    var posicaoX = posicaoX < 0? 0 : posicaoX;
    var posicaoY = posicaoY < 0? 0 : posicaoY;

    CriaMosquito(posicaoX, posicaoY);
    
}

function paginaInicial(){
    window.location.href = "index.html"
}




let cake;
let bebida;
let salgado;
      function escolherTortaChocolate() {
        document.getElementById("tortachocolate").style.borderColor = "green";
        document.getElementById("tortamorango").style.borderColor = "white";
        cake = "Torta de Chocolate";
      }

      function escolherTortaMorango() {
        document.getElementById("tortamorango").style.borderColor = "green";
        document.getElementById("tortachocolate").style.borderColor = "white";
        cake = "Torta de Morango";
      }

      function escolherCoca() {
        document.getElementById("coca").style.borderColor = "green";
        document.getElementById("cafe").style.borderColor = "white";
        bebida = "Coca-cola";
      }

      function escolherCafe() {
        document.getElementById("cafe").style.borderColor = "green";
        document.getElementById("coca").style.borderColor = "white";
        bebida = "Café Expresso";
      }
      function escolherCroissant() {
        document.getElementById("croissant").style.borderColor = "green";
        document.getElementById("coxinha").style.borderColor = "white";
        salgado = "Croissant";
      }
      function escolherCoxinha() {
        document.getElementById("coxinha").style.borderColor = "green";
        document.getElementById("croissant").style.borderColor = "white";
        salgado = "Coxinha";
      }
      function finalizarPedido() {
        let mensagem;
        mensagem =
          "Olá gostaria de pedir " + cake + ", " + bebida + " e " + salgado;
        window.open("https://wa.me/+5571986408325?text=" + mensagem);
      }
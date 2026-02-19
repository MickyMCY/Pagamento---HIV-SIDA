let metodoSelecionado = "mpesa";
let tempoTotal = 15;
let intervalo;

function selecionarMetodo(tipo){
  metodoSelecionado = tipo;

  document.getElementById("mpesaBtn").classList.remove("active");
  document.getElementById("emolaBtn").classList.remove("active");

  if(tipo === "mpesa"){
    document.getElementById("mpesaBtn").classList.add("active");
  } else {
    document.getElementById("emolaBtn").classList.add("active");
  }
}

function copiarNumero(){
  navigator.clipboard.writeText("867145774");

  document.querySelector(".copy-btn").innerText = "Número Copiado ✓";

  setTimeout(()=>{
    if(metodoSelecionado === "mpesa"){
      document.getElementById("instrucao").innerHTML =
        "No seu telemóvel marque <strong>*150#</strong> e siga as instruções.";
    } else {
      document.getElementById("instrucao").innerHTML =
        "No seu telemóvel marque <strong>*898#</strong> e siga as instruções.";
    }
  },3000);

  iniciarContador();
}

function iniciarContador(){
  let tempo = tempoTotal;
  let circle = document.getElementById("circleTimer");
  let tempoTexto = document.getElementById("tempo");
  let confirmar = document.getElementById("confirmarBtn");

  intervalo = setInterval(()=>{
    tempo--;
    let grau = (tempo/tempoTotal)*360;
    circle.style.background =
      `conic-gradient(#a855f7 ${grau}deg, rgba(255,255,255,0.1) ${grau}deg)`;

    tempoTexto.innerText = tempo;

    if(tempo <= 0){
      clearInterval(intervalo);
      circle.style.display = "none";
      confirmar.style.display = "block";
    }

  },1000);
}

function irWhatsapp(){
  let mensagem = encodeURIComponent(
    "Olá, já efetuei o pagamento de 244 MZN e pretendo confirmar."
  );

  window.location.href =
    "https://wa.me/258844598917?text=" + mensagem;
}

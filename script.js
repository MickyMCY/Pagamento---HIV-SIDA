const screens = document.querySelectorAll(".screen");
const btnStep1 = document.getElementById("btnStep1");
const mpesaBtn = document.getElementById("mpesaBtn");
const emolaBtn = document.getElementById("emolaBtn");
const copyBtn = document.getElementById("copyBtn");
const confirmBtn = document.getElementById("confirmBtn");
const metodoTitulo = document.getElementById("metodoTitulo");
const numeroPagamento = document.getElementById("numeroPagamento");
const toast = document.getElementById("toast");

const nomeInput = document.getElementById("nome");
const telefoneInput = document.getElementById("telefone");

let numeroAtual = "";

// Criar elemento de erro dinamicamente
const erroTelefone = document.createElement("div");
erroTelefone.style.color = "#ef4444";
erroTelefone.style.fontSize = "12px";
erroTelefone.style.marginTop = "-10px";
erroTelefone.style.marginBottom = "10px";
telefoneInput.after(erroTelefone);

function vibrarErro(){
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]);
    }
}

function goTo(step){
    screens.forEach(s => s.classList.remove("active"));
    document.getElementById("screen"+step).classList.add("active");
}

// Limitar input apenas números e máximo 9 dígitos
telefoneInput.addEventListener("input", () => {
    telefoneInput.value = telefoneInput.value.replace(/\D/g, "").slice(0,9);
    erroTelefone.innerText = "";
});

// BOTÃO PROSSEGUIR
btnStep1.addEventListener("click", () => {

    const nome = nomeInput.value.trim();
    const telefone = telefoneInput.value.trim();

    if(!nome){
        alert("Preencha o nome completo.");
        vibrarErro();
        return;
    }

    if(telefone.length < 9){
        erroTelefone.innerText = "Faltam dígitos no número.";
        vibrarErro();
        return;
    }

    if(telefone.length > 9){
        erroTelefone.innerText = "Número inválido.";
        vibrarErro();
        return;
    }

    // Validar prefixos válidos (84, 85, 86, 87)
    const prefixo = telefone.substring(0,2);
    if(!["84","85","86","87"].includes(prefixo)){
        erroTelefone.innerText = "Prefixo inválido. Use 84, 85, 86 ou 87.";
        vibrarErro();
        return;
    }

    erroTelefone.innerText = "";
    goTo(2);
});

// MÉTODOS PAGAMENTO
mpesaBtn.addEventListener("click", () => {
    numeroAtual = "844459897";
    metodoTitulo.innerText = "Pagamento via MPesa";
    numeroPagamento.innerText = numeroAtual;
    goTo(3);
});

emolaBtn.addEventListener("click", () => {
    numeroAtual = "867145774";
    metodoTitulo.innerText = "Pagamento via e-Mola";
    numeroPagamento.innerText = numeroAtual;
    goTo(3);
});

// COPIAR
copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(numeroAtual);
    toast.style.display="block";
    setTimeout(()=>toast.style.display="none",2000);
});

// CONFIRMAR
confirmBtn.addEventListener("click", () => {
    window.location.href="https://wa.me/25884598917";
});

// VOLTAR
document.querySelectorAll(".back").forEach(el=>{
    el.addEventListener("click",()=>{
        goTo(el.dataset.back);
    });
});

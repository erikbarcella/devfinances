var newTransaction = document.querySelector(".button")
var modal= document.querySelector(".modal-overlay")

newTransaction.addEventListener("click", oculta)
newTransaction.addEventListener("dblclick", mostra)

function oculta(){
    newTransaction.style.color="blue";
    modal.style.visibility="visible";
    modal.style.opacity="1";
}

function mostra(){
    modal.style.visibility="hidden";
    modal.style.opacity="0";
}


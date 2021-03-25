const Modal ={
    open() {
        //abrir modal 
        //adicionar classe active ao modal
        document.querySelector(".modal-overlay")
        .classList.add("active")
    },
    close(){
        //fechar modal
        //remover classe modal 
        document.querySelector(".modal-overlay")
        .classList.remove("active")
    }
}
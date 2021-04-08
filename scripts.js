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
    } //togle alternativa
}

    const transactions =[
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '02/03/2021'
    },
    {
        id: 2,
        description: 'Acessoria',
        amount: 2000000,
        date: '05/03/2021'
    }, 
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '15/03/2021'
    }
]

const Transaction = {
    incomes (){
        //somar as entradas
    },
    expenses() {
        //somar as saidas
    },
    total(){
        //entradas-saidas
    }
}

const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
        
    },
    innerHTMLTransaction(transaction){
        const html= `
    
        <td class="description">${transaction.description}</td>
        <td class="expense">${transaction.amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="remover transação">
        </td>
   
    `

    return html
    }
}


transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})


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

    const transactions =[   //agrupamento das movimentações de saida e entrada
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

const Transaction = {        //soma e retorno de entrada, saida e total
    all: transactions, 

    add(transaction){
        Transaction.all.push(transaction) // add a todas as transações
        console.log(Transaction.all)
    },

    incomes (){
        let income =0;
        Transaction.all.forEach(transaction => {
            if(transaction.amount>0){
                income+= transaction.amount;
            }
        })
        return income;
    },

    expenses() {
        let expense=0;
        Transaction.all.forEach(transaction => {
            if(transaction.amount<0) {
                expense+=transaction.amount
            }
        })
        return expense
    },

    total(){
        return Transaction.incomes()+ Transaction.expenses();
    },
}


const DOM = {
    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index){
        
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactionsContainer.appendChild(tr)
        
    },
    innerHTMLTransaction(transaction){
        const CSSclass = transaction.amount > 0 ? 'income' : 'expense'

         const amount = Utils.formatCurrency(transaction.amount)


        const html= `
    
        <td class="description">${transaction.description}</td>
        <td class='${CSSclass}'>${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="remover transação">
        </td>
   
    `

    return html
    },

   updateBlance() { //atualizando o balanço 
       document
            .getElementById('incomeDisplay')
            .innerHTML=Utils.formatCurrency(Transaction.incomes())
       document
            .getElementById('expenseDisplay')
            .innerHTML=Utils.formatCurrency(Transaction.expenses())
       document
            .getElementById('totalDisplay')
            .innerHTML=Utils.formatCurrency(Transaction.total())
   }
}

const Utils = {   //responsavel por fazer a devida formatação na moeda corrente
    formatCurrency(value){
        const signal = Number(value) < 0 ? "-" : ""

        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100

        value = value.toLocaleString("pt-BR",{
            style: "currency",
            currency: "BRL"
        })

        return signal+value
    }
}

const App ={
    init () {

    },
    reload() {},
}

App.init

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})

DOM.updateBlance() 






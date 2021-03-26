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

    const transactions =[{
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
    }
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '15/03/2021'
    }]

const Transaction = {
    incomes (){
        //somar as entradas
    }
    expenses() {
        //somar as saidas
    }
    total(){
        //entradas-saidas
    }
}

const DOM = {
    innerHTMLTransaction(){
        const html= `
    <tr>
        <td class="description">Luz</td>
        <td class="expense">-R$ 500,00</td>
        <td class="date">02/03/2021</td>
        <td>
            <img src="./assets/minus.svg" alt="remover transação">
        </td>
    </tr>`
    }
}
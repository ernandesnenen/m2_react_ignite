import { Container } from "./styles";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'
import { TransactionContext } from "../../Context/TransactionsContext";
import { useContext } from "react";

export function Summary(){
    const {transactions} = useContext(TransactionContext)

   const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'deposit'){
        acc.deposits += transaction.amount
        acc.total  += transaction.amount
    }else{
        acc.withdraws += transaction.amount
        acc.total  -= transaction.amount
    }
    return acc;
    },{
        deposits: 0,
        withdraws:0,
        total:0,
    })
    return(
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img  src={income} alt="Entrada"/>
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR',{
                      style: 'currency',
                      currency: 'BRL'
                    }).format(summary.deposits)}
                </strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img  src={outcome} alt="Saída"/>
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR',{
                      style: 'currency',
                      currency: 'BRL'
                    }).format(summary.withdraws)}
                </strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img  src={total} alt="Total"/>
                </header>
                <strong> 
                    {new Intl.NumberFormat('pt-BR',{
                      style: 'currency',
                      currency: 'BRL'
                    }).format(summary.total)}
                </strong>
            </div>


        </Container>
    );
}
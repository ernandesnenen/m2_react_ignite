import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from "../services/api";

interface Transaction {
    id: number;
    title:string;
    amount: number;
    type: string;
    category: string;
    createdAt: string;
  }

  interface  TransactionsProviderProps{
      children: ReactNode;
  }

// interface  newTransactionInput {
//     title:string;
//     amount: number;
//     type: string;
//     category: string;
// }
 type newTransactionInput= Omit<Transaction, 'id' | 'createdAt'>

 interface TransactionContextData{
     transactions: Transaction[];
     createTransaction: (transaction:newTransactionInput)=> Promise<void>

 }

// ---------------------------------------------------------------------------------------
export const TransactionContext = createContext<TransactionContextData>({} as TransactionContextData)



export function TransactionsProvider({children}:TransactionsProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('/transactions')      
        .then(response => setTransactions(response.data.transactions))
    },[])

    async function createTransaction(transactionInput: newTransactionInput){   
       const response = await api.post("transactions", {
           ...transactionInput,
           createdAt: new Date()
       } )
       const {transaction} = response.data
       setTransactions([
           ...transactions,
           transaction
       ])
    }

    return (
        <TransactionContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionContext.Provider>
    )
    
}
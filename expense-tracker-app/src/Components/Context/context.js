import { createContext } from "react";
import TransactionReducer from './reducer'
import React , {useReducer} from 'react'

let transaction = [
    { amount: 500, desc: "Cash" },
    { amount: -40, desc: "Book" },
    { amount: -200, desc: "Camera" }
]
const TransactionContext = createContext(transaction);


const TransactionProvider = ({ children }) => {
    let [state,dispatch] = useReducer(TransactionReducer, transaction)

    function addTransaction(transObj) {
        dispatch({
            type: "ADD",
            payload: {
                amount: transObj.amount,
                desc: transObj.desc
            }
        })
    }

    return (
        <TransactionContext.Provider value={{ transaction: state, addTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}

export  {TransactionContext,TransactionProvider};

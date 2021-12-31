import { useContext, useState } from 'react';
import {TransactionContext} from './Context/context';


function Child() {
    let { useContextTransaction, addTransaction } = useContext(TransactionContext);
    let [newDesc, setDesc] = useState("");
    let [newAmount, setAmount] = useState(0);


    const addHandler = (event) => {
        event.preventDefault();
        if(Number(newAmount) === 0){
            alert("Please Enter Correct Value")
            return false
        }
        addTransaction({
           
            amount: Number(newAmount),
            desc: newDesc 
          
                       });

                   setDesc('');
                   setAmount(0);    
                                 }



        const getIncome = () => {
            let income = 0;
            for(let i = 0 ; i < useContextTransaction.length ; i++){
                if(useContextTransaction[i].amount > 0){
                          income = income + useContextTransaction[i].amount;
                }
                return income;
            }
        }   
        
        
        const getExpense = () => {
            let Expense = 0;
            for(let i = 0 ; i < useContextTransaction.length ; i++){
                if(useContextTransaction[i].amount < 0){
                    Expense = Expense + useContextTransaction[i].amount;
                }
                return Expense;
            }
        } 



    return (
         <div className = "container">
          <h1>Expense Tracker</h1> 
            <h3>Your Balance <br /> {getIncome() + getExpense()}</h3> 

            <div className="expense-container">
             <h4>Income <br /> {getIncome()}$</h4>
               <h4>Expense <br /> {getExpense()}$</h4>
           </div> 
           <h3>History</h3> 
           <hr /> 

                {useContextTransaction.map((transObj, ind) => {
                    return (
                        <>
                                    <ul className="expense-list">

                            <li key={ind}>
                                <span>{transObj.desc}</span>
                                <span>{transObj.amount}</span>
                            </li>
                            </ul>
                        </>
                    );
                }
                )

                }

            

            <h3>Add new Transaction</h3>
            <hr />

            <form action="" className="transaction-form" onSubmit={addHandler}>

                <label htmlFor="">Enter Description</label><br />
                <input type="text" required value={newDesc} placeholder="Enter Text Here" onChange={(evt) => setDesc(evt.target.value)} />

                <label htmlFor="">Enter Amount</label><br />
                <input type="number" required value={newAmount} placeholder="Enter Amount Here" onChange={(evt) => setAmount(evt.target.value)} />
                <br />

                <input type="submit" value="Add Transaction" className="btn" />



            </form>



         </div>
    );
}

export default Child;

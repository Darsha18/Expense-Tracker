// //its expense item component data 
// import React, {useState, useEffect} from 'react';

// import NewExpense from './components/NewExpense/NewExpense';

// import Expenses from './components/Expenses/Expenses';


// let DUMMY_EXPENSE = [];

// const App = () => {
    
//     const [expenses, setExpenses] = useState(DUMMY_EXPENSE);

//     function fetchData(){
//         fetch('https://techgun.website/sample/api/read.php').then(
//             response => {
//                 return response.json();
//             }
//         ).then(
//             data => {
//                 //console.log(data);
//                 setExpenses(data);
//             }
//         );
//     }

//     useEffect(()=>{
//         fetchData();
//     },[]);

//     const addExpenseHandler = (expense) => {
//         fetch('https://techgun.website/sample/api/create.php', {
//             method: 'POST',
//             body: JSON.stringify(expense),
//             headers: {
//                 'content-Type' : 'application/json'
//             }
//         }).then(
//             response => {
//                 fetchData();
//             }
//         );
//     };

//     return (
//         <div>
//             <NewExpense onAddExpense={addExpenseHandler} />
//             <Expenses item={expenses} />
//         </div>    
//     );
// }

// export default App;



import ExpenseItem from "./components/Expenses/ExpenseItem.js";

// import Expenses from './components/Expenses.js';
import Expenses from './components/Expenses/Expenses.js';
import NewExpense from "./components/NewExpense/NewExpense.js";

import React,{useState} from 'react';


let Dummy_Expense = [
  {
    id: 'e1',
    title: 'School Fees',
    amount: 400,
    date: new Date(2022, 5, 12),

  },

  {
    id: 'e2',
    title: 'Car Insurance',
    amount: 4000,
    date: new Date(2022, 17, 12),

  },

  {
    id: 'e3',
    title: 'Home Expense',
    amount: 50000,
    date: new Date(2022, 12, 12),

  },

  {
    id: 'e4',
    title: 'car Expense',
    amount: 100,
    date: new Date(2022, 25, 12),

  }


];

const App=()=> {

  //  we created a array and then inside that object in javascript {} these is how object is created 
  const [expenxe,setExpense] = useState(Dummy_Expense);


  // let expenseDate = new Date(2021,3,28);
  // let expenseTitle = "School Fee";
  // let expenseAmount = 300;

  const addExpensehandler = (expense)=>{
    const UpdatedExpense = [expense, ...expenxe];
    setExpense(UpdatedExpense);

  }

  return (

    <div className="app-container">
     <NewExpense onAddExpense ={addExpensehandler}/>
      {/* We use the Props inside the component and passed the variable */}
      <Expenses
        item = {expenxe}
      />
    </div>
  );
}

export default App;
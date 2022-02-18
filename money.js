function getId (idInput){
    const id = document.getElementById(idInput);
    return id;
}
document.getElementById('calculate-button').addEventListener('click', function (){
    const costTotal = costTotalFunc();
    const totalIncomePerMonth = totalIncome();
    // calculate
    const expense = getId('total-expenses');
    const balance = getId('balance-after-cost');
    const presentBalance = totalIncomePerMonth - costTotal;
    
    //eror 
    if(isNaN(totalIncomePerMonth) || isNaN(costTotal)){
        error1('!!Please give number')
        expense.innerText = ""
        balance.innerText = ""
        getId('saving-ammount').innerText = ""
        getId('remaining-balance').innerText = ""
    }
    else if(totalIncomePerMonth < 0 || costTotal < 0){
        error1('Negative Number Not Allowed')
        expense.innerText = ""
        balance.innerText = ""
        getId('saving-ammount').innerText = ""
        getId('remaining-balance').innerText = ""
    } 
    else if(costTotal> totalIncomePerMonth){
        error1('Your Income is low!!')
        expense.innerText = ""
        balance.innerText = ""
        getId('saving-ammount').innerText = ""
        getId('remaining-balance').innerText = ""
    } 
    // final result 
    else {
        expense.innerText = costTotal;
        balance.innerText = presentBalance;
        error1("")
    }    
})

function costTotalFunc(){
    const foodField =getId('food-field');
    const foodFildNum = parseInt(foodField.value)
    const rentField =getId('rent-field');
    const rentFieldNum = parseInt(rentField.value)
    const clothField =getId('clothes-field');
    const clothFieldNum = parseInt(clothField.value)

    const totalCost = foodFildNum + rentFieldNum + clothFieldNum;
    foodField.value = ""
    rentField.value = ""
    clothField.value = ""
    return totalCost;
}
function totalIncome(){
    const income  = getId('income-field');
    const incomeNum = parseInt(income.value);
    income.value = ""
    return incomeNum ;
}
// 
function totalExpense(){
    const expense = getId('total-expenses');
    const expenseNum = parseInt(expense.innerText);

    return expenseNum ;
}
function totalBalanceAfterCost(){
    const balance = getId('balance-after-cost');
    const balanceNum = parseInt(balance.innerText);

    return balanceNum ;
}

getId('save-button').addEventListener('click', function(){
    const inputPercent = getId('save-input');
    const inputPercentNum = parseInt(inputPercent.value);
    inputPercent.value = ""


    if(isNaN(inputPercentNum)){
        error2('Please give string to input!!')
    }
    else if(inputPercentNum < 0){
        error2("Negative Number not allowed")
    }
    
    else{
        
    //function call
    const expense = totalExpense();
    const balance = totalBalanceAfterCost();

    const total = expense + balance;
    const inputPercentCurrent = (total * inputPercentNum) / 100;
    const inputPercentCurrentFixed = inputPercentCurrent.toFixed(2)
    const remainingBalance = balance - inputPercentCurrent;
    const remainingBalanceFixed = remainingBalance.toFixed(2);
    getId('saving-ammount').innerText = inputPercentCurrentFixed;
    getId('remaining-balance').innerText = remainingBalanceFixed;
    error2("")
    }
    
})
// error function
function error1(err){
    getId('error').innerText = err;
}
function error2(err){
    getId('error2').innerText = err;
}

// function for get id
function getId (inputId){
    const inputField = document.getElementById(inputId);
    return inputField;
}
// claculate button and calculation
document.getElementById('calculate-button').addEventListener('click', function(){
    const incomePerMonth = getId('income-field'); 
    const incomePerMonthNum = parseInt(incomePerMonth.value) 
    
    // calculate cost and balance
    const totalCost = totalCostFuntion();
    // if( isNaN(incomePerMonth)){
    //     errorFun('Sorry!! Income not a number ')
    // }
    if( incomePerMonth> 0){
        const totalExpences = getId('total-expenses');
        totalExpences.innerText  = totalCost;
        const balanceAfterCost = getId('balance-after-cost');
        balanceAfterCost.innerText = incomePerMonthNum - totalCost;
    }
     else if(incomePerMonthNum<totalCost){
        errorFun('Sorry!! You have not enogh balance')
    }
    incomePerMonth.value = ""
   
    
    
})

// total cost function 
function totalCostFuntion(){
const foodField = getId('food-field');
const rentField = getId('rent-field');
const clothesField = getId('clothes-field');
if(isNaN(parseInt(foodField.value)) || isNaN(parseInt(rentField.value)) || isNaN(parseInt(clothesField.value))){
    errorFun('String not allowed!! Please give a valid input!! ')
}
else if(rentField.value<0 || clothesField.value < 0  || foodField.value< 0){
    errorFun('Negative number not allowed!! Please give a valid input!! ')
}


    const totalCostPerMonth = parseInt(foodField.value) + parseInt(rentField.value) + parseInt(clothesField.value);
    foodField.value = ""
    rentField.value = ""
    clothesField.value = ""
    return totalCostPerMonth;
}

// saving ammount save button event
getId('save-button').addEventListener('click', function(){
    const saveInput = getId('save-input');
    const saveInputNum = parseInt(saveInput.value);
    
    if(saveInput.value > 0 ){
        const totalCost = totalCostFuntion();
    const mainBalance =  getId('income-field');
    const mainBalanceNum = parseInt(mainBalance.value);
    const remainBalance = mainBalanceNum - totalCost;
    // calculate percentage
    const totalSavePercent =  (saveInputNum * mainBalanceNum ) / 100;

    const remainBalancePresent = remainBalance - totalSavePercent;
    getId('saving-ammount').innerText = totalSavePercent;
    getId('remaining-balance').innerText = remainBalancePresent;
    }
    else if(isNaN(saveInput.value) ){
        errorFun2('Not allow string!!')
    }
   //calculate for balance after cost
    // const totalCost = totalCostFuntion();
    // const mainBalance =  getId('income-field');
    // const mainBalanceNum = parseInt(mainBalance.value);
    // const remainBalance = mainBalanceNum - totalCost;
    // // calculate percentage
    // const totalSavePercent =  (saveInputNum * mainBalanceNum ) / 100;

    // const remainBalancePresent = remainBalance - totalSavePercent;
    else if(totalSavePercent>remainBalance){
        errorFun2('You have not Enoug Balance!!')
    }
    
    saveInput.value = ""
})

    function errorFun(whatError){
        const erronName = document.getElementById('error');
        erronName.innerText = whatError;
    }
    function errorFun2(whatError){
        const erronName = document.getElementById('error2');
        erronName.innerText = whatError;
    }

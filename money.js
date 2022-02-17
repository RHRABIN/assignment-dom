function getId (inputId){
    const inputField = document.getElementById(inputId);
    return inputField;
}

document.getElementById('calculate-button').addEventListener('click', function(){
    const incomePerMonth = getId('income-field'); //total income
    const incomePerMonthNum = parseInt(incomePerMonth.value) 
    
    // calculate cost and balance
    const totalCost = totalCostFuntion();
    if( isNaN(totalCost)){
        erronFun('String not allowed')
    }
    
    else if(incomePerMonthNum<totalCost){
        erronFun("not enough balance");
    }
    else {
        const totalExpences = getId('total-expenses');
    totalExpences.innerText  = totalCost;
    const balanceAfterCost = getId('balance-after-cost');
    balanceAfterCost.innerText = incomePerMonthNum - totalCost;
    }
    
    incomePerMonth.value = ""
    
})

// total cost
function totalCostFuntion(){
const foodField = getId('food-field');
if(isNaN(parseInt(foodField.value))){
    erronFun("food field not correct")
}
const rentField = getId('rent-field');
if(isNaN(parseInt(rentField.value))){
    erronFun("rent field not correct")
}
const clothesField = getId('clothes-field');
if(isNaN(parseInt(clothesField.value))){
    erronFun("Cloth field not correct")
}
const totalCostPerMonth = parseInt(foodField.value) + parseInt(rentField.value) + parseInt(clothesField.value);
rentField.value = ""
clothesField.value = ""
foodField.value = ""
return totalCostPerMonth;
}

// saving ammount
getId('save-button').addEventListener('click', function(){
    const saveInput = getId('save-input');
    const saveInputNum = parseInt(saveInput.value);
   
    const totalCost = totalCostFuntion();
    const mainBalance =  getId('income-field');
    const mainBalanceNum = parseInt(mainBalance.value);
    const remainBalance = mainBalanceNum - totalCost;

    const totalSavePercent =  (saveInputNum * mainBalanceNum ) / 100;

    const remainBalancePresent = remainBalance - totalSavePercent;
    if(totalSavePercent>remainBalance){
        erronFun2('not enough balance')
    }
    else{
        getId('saving-ammount').innerText = totalSavePercent;
        getId('remaining-balance').innerText = remainBalancePresent;
    }
    saveInput.value = ""

})

    
function erronFun(war){
    document.getElementById('error').innerText = war;
}
function erronFun2(war){
    document.getElementById('error2').innerText = war;
}
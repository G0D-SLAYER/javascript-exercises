const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }
    else if (num1 % 1 != 0 || num2 % 1 != 0){
        return "ERROR";
    }
    else if (typeof num1 != "number" || typeof num2 != "number"){
        return "ERROR";
    }
    else if (num1 > num2){
        n = (num1 - num2)+1;
    }
    else{
        n = (num2 - num1)+1;
    }
    let sum = (n*(num1+num2))/2;
    return sum;
};

// Do not edit below this line
module.exports = sumAll;

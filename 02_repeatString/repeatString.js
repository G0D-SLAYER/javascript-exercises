const repeatString = function(string, num) {
    let result = "";
    if (num < 0){
        return("ERROR");
    }
    for(i = 0; i < num; i++){
        result = result + string;
    }
    return result;
}
// Do not edit below this line
module.exports = repeatString;

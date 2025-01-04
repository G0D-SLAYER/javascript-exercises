const reverseString = function(string) {
    result = "";
    const splitWords = string.split(" ");
    for (i = splitWords.length - 1; i >= 0; i--){
        for (j = splitWords[i].length - 1; j >= 0; j--){
            result = result + splitWords[i].charAt(j);
        }
        if (i == 0){
            break;
        }
        else {
            result = result + " ";
        }
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;

const removeFromArray = function(array, ...targets) {
    for (const target of targets){
        let index = array.indexOf(target);
        if (index == -1) {
            continue;
        }
        while(index != -1){
            array.splice(index,1);
            index = array.indexOf(target);
        }
    }
    
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;

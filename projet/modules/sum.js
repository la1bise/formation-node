
const som = function(num){
let total = 0;

    for (let index = 0; index < num; index++) {
        if(index % 3 === 0 || index % 5 === 0){
            total += index;
        }    
    }
    return total;
}

module.exports = { som };
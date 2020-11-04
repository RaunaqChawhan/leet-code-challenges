/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function(s) {
    let sample = s.toLowerCase();
    let counter = 1;
    let max = [];   //hold the count of all the alphabets
    if(sample.length >= 1 && sample.length <= 500) {
        let stringArr = sample.split("");
        
        while(stringArr.length > 0) {
            let i = 0;
            if(stringArr[i] === stringArr[i + 1]) {
                counter++;
                stringArr.shift();
            } else {
                if(counter > 1) {
                    max.push(counter);
                    counter = 1;
                    stringArr.shift();
                } else {
                    stringArr.shift();
                    max.push(counter);
                }
            }
        }
    }
    max.sort((a, b) => b - a);
    return max[0];
};
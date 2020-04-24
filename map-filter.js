const numbers =[2,4,3,5,6];
const output =[];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element
    output.push(result);
}

const square = element => element*element;
const square = x => x*x;

function square(element) {
    return element*element
}
const result = numbers.map(function (element) {
    return element*element
});





const result = numbers.filter(x => x < 6)
const result = numbers.find(x => x < 5)

console.log(result)
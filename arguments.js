
function add() {
    var sum = 0;
    console.log([...arguments]);
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum+num;
        
    }
    return sum ;

}
const result = add(5,7,6,5)
console.log(result)

var friendsName = ["kamal", "jamal", "badal", "jabbar" ];

for(i = 0; i < friendsName.length; i++){

var element = friendsName[i];
    console.log(element)


}
function add(num1,num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;

    }
    return sum;

}

var total = add(3,5,6,7);
console.log(total)
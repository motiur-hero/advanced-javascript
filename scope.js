let bonus = 20;

function sum(a,b) {
    
    let result = a+b+bonus;
    //console.log(bonus);// bahirer const access korte parbe
    if(result > 10){
        let mood = "happy"
             mood = "funky"
            mood = "cranky"
        //console.log(mood)
    }
    //console.log(mood)//if er scope er bahire theke access kora jabe na. but(var mood) access pabe
    return result;
   
     
    
}
const output = sum(5,6)
//console.log(result) //no access
console.log(output)
//console.log(division);//scope area er baire access dibe na
console.log(day)// error asbe, not before value
let day = "friday"

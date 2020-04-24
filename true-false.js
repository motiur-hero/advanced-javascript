
// falsy:
// ""
// 0
// null
// false
// NaN

//truthy:
//[]
//" "
// '0'
let name = 0
console.log(name)
if (name || name == 0) {
    console.log("condition is true")
    
}
else{ 
    console.log("condition is false")
}
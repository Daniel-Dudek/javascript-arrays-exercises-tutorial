let mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];

// Your code here
let newArray = []
for (let i = 0; i < mix.length; i++) {
    const element = mix[i];
    newArray.push(typeof element)   
}
console.log(newArray)
console.log("Hello world from HTML")
let obj = {
    name: "Dương", 
    address: "HN",
    Age: 19,
    a: function() {
        console.log("Hello world from obj")
        return ``
    }
};
let b = 'name';
obj[b] = 'Wilson';
console.log(`type of obj: `, typeof obj, `type of b: `, typeof b)
console.log(`What is your name ? `, `My name is:`, obj.name)
console.log(`How old are you ? `, `I'm`, obj.Age, `years old`)
console.log(`call funtion: `,obj.a())
console.log(`What is your name ? `, `My name is:`, obj['name'])
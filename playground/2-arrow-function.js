//const square = function(x) {
//    return x * x;
//}
const square = x => x * x;
console.log(square(2));


const event = {
    name: 'Birthday Party',
    guestList: ['Erick', 'Oda'],
    printGuestList() {              // object's shorthand for printGuestList: function(){}
        console.log(`Guest list for ${this.name}`);
        
        /* arrow function don't bind their own "this" value, they access the
        "this" value of the context in which they were created - printGuestList() */ 
        this.guestList.forEach( guest => {
            console.log(`${guest} is attending ${this.name}`)
        })
    }
}
event.printGuestList();
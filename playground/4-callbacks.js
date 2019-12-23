
function add( n1, n2, cb ) {
    setTimeout( () => {
        cb( n1 + n2 );
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
console.log('Client side javascript file is loaded!')


const weatherForm = document.querySelector('form');
const searchElem = document.querySelector('input');

weatherForm.addEventListener( 'submit', (e) => {
    e.preventDefault();
    console.log({search: searchElem.value})

    fetch(`http://localhost:3000/weather?address=${searchElem.value}`).then( res => {
            res.json().then( data => {
                    if ( data.err ) {
                        console.log( data.err )
                    }
                    else {
                        console.log(data.location);
                        console.log(data.forecast);
                    }
                }) 
        });
})
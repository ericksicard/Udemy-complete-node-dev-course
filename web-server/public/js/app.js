console.log('Client side javascript file is loaded!')

fetch('http://localhost:3000/weather?address=Miami').then( res => {
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
// fetch('https://65045f34c8869921ae24effd.mockapi.io/menucard')
    // .then( response => console.log(response.json()))
    // .then( data => console.log(data))
//     .catch( error => console.log(error))

async function fetchData(){
    try {
        const data = await fetch('https://65045f34c8869921ae24effd.mockapi.io/menucard')
            .then( data => data.json())
            .then(response => console.log(response))
        
    } catch (error) {
        console.error(error);
    }
}
fetchData();
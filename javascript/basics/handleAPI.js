fetch('https://652a242255b137ddc83f53c1.mockapi.io/api/v1/WorldCupPointsTable')
    .then((response)=>{
        return response.json;
    })
    .then((data)=>{
        console.log(data);
    })
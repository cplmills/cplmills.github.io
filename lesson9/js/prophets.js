function prophets(){
    console.log('hello');
    const requestURL = './latter-day-prophets.json';
    fetch(requestURL)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonObject) {
            console.table(jsonObject);  // temporary checking for valid response and data parsing
            const prophets = jsonObject['prophets'];
            for (let i = 0; i < prophets.length; i++ ) {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
                card.appendChild(h2);
                document.querySelector('div.cards').appendChild(card);
            }
        }
        );
}
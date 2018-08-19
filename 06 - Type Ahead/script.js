const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
//fetch data from url returns "blob"
const prom = fetch(endpoint)
//then run json() method on it to return data
.then(blob => blob.json())
//return and push data into cities array.
.then(data => cities.push(...data));

//function to find matches uses filter() method to only return array with searchTerm in city OR state
function findMatches(searchTerm, cities){
    return cities.filter(place => {
        const regex = new RegExp(searchTerm, 'gi');
        return place.city.match(regex) || place.state.match(regex);
    })
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

function displayMatches(){
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi')
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        return `
        <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
        </li>
        `;    
    }).join('');
    suggestions.innerHTML = html;
}

// html selectors 
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

//listen for change in input box
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);

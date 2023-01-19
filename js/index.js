const options = {
	method: 'GET',
	headers: {
		// Create an account with api-ninjas.com, so you can access your api key...
		'X-Api-Key': process.env.API_KEY
	}
};

const loaded = false;
const factsParent = document.querySelector('.facts');

const callApi = (async(e) => {
	factsParent.innerHTML = '<p class="text-2xl text-yellow-500 animate-pulse text-center">Fetching facts...</p>';
	
	if (!loaded) {
	const response = await fetch(`https://api.api-ninjas.com/v1/facts?limit=${e.value}`, options)
	const facts = await response.json()

	factsParent.innerHTML = ''
	facts.map(e => {
		factsParent.insertAdjacentHTML('beforeend', `<div class="fact border-l-2 border-yellow-100 rounded-lg p-3 shadow-lg hover:scale-150 duration-700 hover:bg-[#062e45]"><h1 class="text-3xl text-yellow-200 ml-3 font-bold mb-2">Did you know<span class="text-4xl font-black">?...</span></h1><p>${e.fact}</p></div>`)
	})
} else {
	factsParent.innerHTML = '<p class="animate-pulse text-center">Fetching facts...</p>';
}

})


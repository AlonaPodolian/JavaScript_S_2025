async function haeVitsi() {
    const button = document.querySelector('button');
    const vastaus = document.getElementById("vastaus");

    button.disabled = true;
    vastaus.innerHTML = "Ladataan...";

const url = 'https://humor-jokes-and-memes.p.rapidapi.com/jokes/create?topics=pirates&max-length=1000';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5c7d55a9d8mshc3c7c42535e8846p1a73f9jsn70727df72946',
		'x-rapidapi-host': 'humor-jokes-and-memes.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    vastaus.innerHTML = result.joke;
	console.log(result);
} catch (error) {
	console.error(error);
}
}




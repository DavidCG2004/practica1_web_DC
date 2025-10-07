const obtenerGit = async () => {

    const gifContainers = document.getElementById('gifs');
    const gifTemplate = document.getElementById('gif'); 

    const request = await fetch("https://api.giphy.com/v1/gifs/trending?api_key=lerx9FDWD5PH78M207Cj95ac4KTt8G3v&limit=1"); 

    const respuesta = await request.json();

    const gifUrl = respuesta.data[0].images.original.url;

    gifTemplate.src = gifUrl;

};

obtenerGit();

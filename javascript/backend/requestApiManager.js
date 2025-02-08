
export function requestDataAPI(isbn) {
    return requestTo(getURL(isbn));
}   

async function requestTo(url) {
    let object;

    try {
        console.log("URL to get data: " + url);
        
        // Mando la richiesta all'API
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`Error with the request: ${response.status}`);
        }
        console.log("Request body: ", response);

        object = await response.json();
        console.log("Json Object: ", object);

    } catch (error) {
        console.log("Error with API: ", error);
    }

    return object;
}

function getURL(isbn) {
    return `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
}

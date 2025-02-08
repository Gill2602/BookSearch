
export function extractDataFrom(object) {

    // Controllo che ci siano dei dati 
    if (object.totalItems < 1) {
        throw new Error("Book not found");
    }    

    // Estraggo i dati all'interno del object
    const title = object.items[0].volumeInfo.title;
    const authors = object.items[0].volumeInfo.authors;
    const publisher = object.items[0].volumeInfo.publisher || 'Non disponibile'; // Valore di default se mancante
    const publishedDate = object.items[0].volumeInfo.publishedDate || 'Non disponibile'; // Valore di default
    const description = object.items[0].volumeInfo.description || 'Non disponibile'; // Valore di default
    const categories = object.items[0].volumeInfo.categories || 'Non disponibile'; // Valore di default

    // Log dei dati
    console.log("title: ", title);
    console.log("authors: ", authors);
    console.log("publisher: ", publisher);
    console.log("publishedDate: ", publishedDate);
    console.log("description: ", description);
    console.log("categories: ", categories);

    // Ritorno
    return {
        title: title,
        authors: authors, // Array
        publisher: publisher,
        publishedDate: publishedDate,
        description: description,
        categories: categories
    };
}
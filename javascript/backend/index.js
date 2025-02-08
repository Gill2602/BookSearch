import {isbnFormatter} from "./isbnFormatter.js";
import {requestDataAPI} from "./requestApiManager.js";
import {extractDataFrom} from "./extractData.js";
import {updateBookInfo} from "../frontend/updateFrontend.js";

const isbnField = document.getElementById("isbnField");
const searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", async () => {
    try {
        
        // User inserisce un ISBN
        let isbn = isbnField.value;
        // Formattazione ISBN
        let isbnFormatted = isbnFormatter(isbn);

        // Richiesta GET API "Google Books APIs"
        let responseBody = await requestDataAPI(isbnFormatted);
        // Estrarre e analizzare i dati interessati
        let bookInfo = extractDataFrom(responseBody);

        // Restituire i dati al frontend
        updateBookInfo(bookInfo);
    } catch (error) {
        console.log(error);
    }
});

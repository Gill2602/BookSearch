
export function isbnFormatter(isbn) {
    if (!containOnlyNumber(isbn) || isbn.length != 13) {
        console.log(`ISBN inserted is not valid: ${isbn}`);
        throw new Error("The ISBN inserted in not valid, the ISBN should contain only 13 numbers");
    }

    console.log(`ISBN inserted is valid: ${isbn}`);
    return isbn;
}

function containOnlyNumber(str) {
    return !isNaN(str) && str.trim() !== '';
}
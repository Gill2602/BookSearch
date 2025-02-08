
const titleField = document.getElementById("titleField");
const authorsField = document.getElementById("authorsField");
const publisherField = document.getElementById("publisherField");
const publishedDateField = document.getElementById("publishedDateField");
const descriptionField = document.getElementById("descriptionField");
const categoriesField = document.getElementById("categoriesField");

export function updateBookInfo(bookInfo) {
    titleField.innerText = bookInfo.title;
    authorsField.innerText = bookInfo.authors;
    publisherField.innerText = bookInfo.publisher;
    publishedDateField.innerText = bookInfo.publishedDate;
    descriptionField.innerText = bookInfo.description;
    categoriesField.innerText = bookInfo.categories;
}
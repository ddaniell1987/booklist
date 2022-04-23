let url = 'http://localhost:3000/books'
let books;
let baseURL = "http://localhost:3000"
document.addEventListener('DOMContentLoaded', () => {
    getBooks();
    document.getElementById("book").addEventListener('click', getBooks)
})

const fetchBooks = async() => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data
    
}
//this part came from Nancy's project example I attended
function getBooks() {
    const ul = document.getElementById('book-list')
    info.innerHTML = " ";
     ul.innerHTML = " ";
    fetchBooks()
    .then(data => {
        data.forEach(books => {
            console.log(books);
            ul.innerHTML += `<li><a href="#" data-id="${books.id}">${books.title}</a></li>`
            const info = document.getElementById('info');
            

        })
        selectBook()
    })
}

//Once you select the book it will display the GoodReads Image and info on the book.
const selectBook = () => {
    const books = document.querySelectorAll('a')
    books.forEach((book) => {
        book.addEventListener('click', getBookImage);
    })
}

const getBookImage = (event) => {
    console.log(event.target.dataset.id)
    const info = document.getElementById('info');
    const ul = document.getElementById('book-list')
    ul.innerHTML = " ";
    fetch(baseURL + `/books/${event.target.dataset.id}`)
    .then(response => response.json())
    .then(books => {
        console.log(books)
        info.innerHTML = `
        <h1>${books.title}</h1>
        <img src="${books.image}"/>
        <h4>Author: </h4>
        <p>${books.author}</p>
        <h4>Genre:</h4>
        <p>${books.genre}</p>
        <h4> Plot: </h4>
        <p>${books.plot}</p>
        `
    })
    renderBooks()
}
const renderBooks = () => {
    books.forEach(book => renderBooks(book))
}


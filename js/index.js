document.addEventListener("DOMContentLoaded", function() {});
function getBooks () {
    fetch("http://localhost:3000/books")
    .then(response => response.json())
    .then(booksInfo => {
        console.log(booksInfo)
        booksInfo.forEach(renderBooks)
    })
}
//DOM selectors
let listUl = document.querySelector('#list');
let showPanel = document.querySelector('#show-panel');
//console.log(showPanel)


function renderBooks(books) {
    let titleLi = document.createElement('li');
    titleLi.textContent = books.title;
    listUl.append(titleLi);
    titleLi.addEventListener('click', () => {
        showPanel.innerHTML = '';
        let bookTitle = document.createElement('h2');
        let bookSubtitle = document.createElement('h3');
        let bookDescription = document.createElement('p');
        let bookAuthor = document.createElement('h3');
        let bookImage = document.createElement('img');
        let userUl = document.createElement('ul');
        let likeBtn = document.createElement('button');
        likeBtn.innerText = 'Like';
        bookTitle.textContent = books.title;
        bookSubtitle.textContent = books.subtitle;
        bookDescription.textContent = books.description;
        bookAuthor.textContent = books.author;
        bookImage.src = books["img_url"]
        books.users.forEach(user => {
            let userLi = document.createElement('li');
            userLi.textContent = user.username;
            userUl.append(userLi);

        })
        showPanel.append(bookImage, bookTitle, bookSubtitle, bookDescription, bookAuthor, likeBtn, userUl);

    })

}

getBooks();
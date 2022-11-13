

  //header create
  let headerElement = document.createElement('header');
  headerElement.classList.add('header');
  let headerContainer = document.createElement('div');
  headerContainer.classList.add('header__container');
  headerContainer.classList.add('container');
  let headerLink = document.createElement('a');
  headerLink.href = "catalog.html";
  let headerLogo = document.createElement('img');
  headerLogo.src = "../images/logo.png";
  headerLogo.alt = "logo";
  let headerBasket = document.createElement('div');
  headerBasket.classList.add('header__basket');
  let headerBasketImg = document.createElement('img');
  headerBasketImg.src = "../images/basket.png";
  headerBasketImg.alt = "basket";

  //header add
  let body = document.querySelector('body');
  body.appendChild(headerElement);
  headerElement.appendChild(headerContainer);
  headerContainer.appendChild(headerLink);
  headerLink.appendChild(headerLogo);
  headerContainer.appendChild(headerBasket);
  headerBasket.appendChild(headerBasketImg);

  //main create
  let mainBooks = document.createElement('main');
  mainBooks.classList.add('books');
  let booksContainer = document.createElement('div');
  booksContainer.classList.add('books__container');
  booksContainer.classList.add('container');

  //main add
  headerElement.after(mainBooks);
  mainBooks.append(booksContainer);

function noDigits(event) {
  if ("1234567890".indexOf(event.key) != -1)
    event.preventDefault();
}

async function getResponce() {
  let responce = await fetch('../books.json')
  let content = await responce.json();


  let key

  for (key in content) {
  let bookCard = document.createElement('div');
  bookCard.innerHTML = `
    <div class="books__wrapper"><img src="${content[key].imageLink}" alt="book"></div>
    <h2 class="books__title">${content[key].title}</h2>
    <p class="books__author">${content[key].author}</p>
    <p class="books__price">${content[key].price}$</p>
    <button class="books__buy">Add to bag</button>
    <button class="books__show">Show more</button>
`;

  bookCard.classList.add('books__book');
  booksContainer.appendChild(bookCard);
  }

  

}

getResponce();
var books = [
  { id: 0123, title: "Atomic habits", author: "James avel", price: "40" },
  {
    id: 4567,
    title: "crepuscule d'une idole",
    author: "michel onfray",
    price: "50",
  },
];

buttonAjout = document.getElementById("ajout");
buttonAjout.addEventListener("onclick", () => {
  nomliv = document.getElementById("nomlivre").textContent;
  auteur = document.getElementById("nomauteur").textContent;
  price1 = document.getElementById("prix").textContent;
  id1 = document.getElementById("id").textContent;
  var i = 2;
  books[i].id = id1;
  books[i].title = nomliv;
  books[i].author = auteur;
  books[i].price = price1;
  console.log(books);
  i = i + 1;
  table = document.getElementsByTagName("table");
  newrow = table.insertRow();
  c1 = newrow.insertCell(0);
  c2 = newrow.insertCell(1);
  c3 = newrow.insertCell(2);
  c4 = newrow.insertCell(3);
  c5 = newrow.insertCell(4);
  c1.innerHtml = books[i].id;
  c2.innerHtml = books[i].title;
  c3.innerHtml = books[i].author;
  c4.innerHtml = books[i].price;
  c5.innerHTML =
    '<button onclick="editRow(this)">Éditer</button> <button onclick="deleteRow(this)">Supprimer</button>';
});

import { Component } from '@angular/core';
import { BookAddComponent } from "../book-add/book-add.component";
import { Book } from "../model/book";
import { ModifyBookListComponent } from "../modify-book-list/modify-book-list.component";
@Component({
  selector: 'app-books-list',
  standalone: true,
  imports: [BookAddComponent,ModifyBookListComponent],
  templateUrl: './books-list.component.html',
  styleUrl: './books-list.component.css'
})
export class BooksListComponent {
  title="les listes des livres  "
  books=[new Book(1,"Atomic habits","james clear",25),new Book(2,"le crepuscule d'une idole ","micheal onfray",30),new Book(3," habits","jaeffery",45)]; 
  action = "";
  i=0;
  changeAction(action : string){
    this.action = action;
    if (action==="modify") {
      this.i++;
    }
    
  }
  addBook(book : Book){
    this.books=[...this.books,book];//creer un tableau on a copier les elements de book dans le mem tableau avec le nouv element 
    this.changeAction("");

  }
  modifyBook(book : Book){
    this.books[this.i-1]=book;//creer un tableau on a copier les elements de book dans le mem tableau avec le nouv element 
    this.changeAction("");

  }
  

}

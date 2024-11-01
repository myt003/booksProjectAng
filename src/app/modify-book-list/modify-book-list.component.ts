import { Component,EventEmitter,Input,Output } from '@angular/core';
import { last } from 'rxjs';
import { Book } from "../model/book";
@Component({
  selector: 'app-modify',
  standalone: true,
  imports: [],
  templateUrl: './modify-book-list.component.html',
  styleUrl: './modify-book-list.component.css'
})
export class ModifyBookListComponent {
  @Input() Id=0;
  @Output()  bookMade= new EventEmitter<Book>();
  modifyBook(Id: number,title : string, author : string, price : number){
    const modifiedBook= new Book(this.Id,title,author,price);
    console.log(this.Id);
    this.bookMade.emit(modifiedBook);
    console.log(modifiedBook);
  }
}

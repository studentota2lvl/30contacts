import { Component, OnInit } from '@angular/core';
import { Contacts } from '../models/Contact';
import { Observable } from 'rxjs';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  dataSource$: Observable<Contacts>
  displayedColumns = ['name', 'surname']
  
  constructor(private contactsService: ContactsService) { }

  ngOnInit() {
    this.updateList();
  }

  updateList(){
    this.dataSource$ = this.contactsService.list()
    // this.contactsService.list().subscribe((data) => console.log(data))
  }

}

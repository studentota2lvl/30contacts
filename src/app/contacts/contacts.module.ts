import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts/contacts.component';
import { Route, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import {MatTableModule} from '@angular/material/table';
import { ContactsService } from './contacts.service';

const routes: Route[] = [
  { path: '', component: ContactsComponent, children: [
    { path: '', component: ListComponent}
  ]}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatTableModule
  ],
  providers: [ContactsService],
  exports: [RouterModule],
  declarations: [ContactsComponent, ListComponent]
})
export class ContactsModule { }

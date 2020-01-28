import { Component, OnInit } from '@angular/core';
import { DatabaseFirebaseService } from 'src/app/services/database-firebase.service';
import { Observable } from 'rxjs';

import itemsong from '../../interfaces/itemsong';

@Component({
  selector: 'app-listsongs',
  templateUrl: './listsongs.component.html',
  styleUrls: ['./listsongs.component.scss']
})
export class ListsongsComponent implements OnInit {

  constructor(private db: DatabaseFirebaseService) { }

  songs$: Observable<itemsong[]>
    
  ngOnInit() {
    this.songs$ = this.db.getSongs();
  }

}

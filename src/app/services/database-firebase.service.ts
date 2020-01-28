import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFirebaseService {

  constructor(private db: AngularFirestore) { }

  getSongs() {
    return this.db.collection('canciones').valueChanges();
  }

  addSong() {}
}

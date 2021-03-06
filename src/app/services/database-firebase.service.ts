import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import itemsong from '../interfaces/itemsong';

@Injectable({
  providedIn: 'root'
})
export class DatabaseFirebaseService {
  
  collection$: AngularFirestoreCollection<itemsong>;
  
  constructor(private db: AngularFirestore) {
    this.collection$ = this.db.collection('canciones');
  }

  getSongs() {
    return this.collection$.valueChanges();
  }

  addSong( newSong: itemsong) {
    let guardada = null;
    try{
      this.collection$.add(newSong)
      guardada = true;
    } catch(e) {
      guardada = e;
    }
    return guardada
  }
}

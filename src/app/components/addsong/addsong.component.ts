import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DatabaseFirebaseService } from 'src/app/services/database-firebase.service';
import itemsong from 'src/app/interfaces/itemsong';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.scss']
})
export class AddsongComponent implements OnInit {

  constructor(private db: DatabaseFirebaseService) { }

  @ViewChild('nameSong', {static: false}) nameSong: ElementRef;
  @ViewChild('nameArtista', {static: false}) nameArtista: ElementRef;
  @ViewChild('nameAlbum', {static: false}) nameAlbum: ElementRef;
  @ViewChild('anio', {static: false}) anio: ElementRef;

  newSong: itemsong = {album: '', anio: 0, name: '', artista: ''};

  ngOnInit() {
  }

  addItem() {
    if (this.nameSong.nativeElement.value === '' || this.nameArtista.nativeElement.value === ''
     || this.nameAlbum.nativeElement.value === '' || this.anio.nativeElement.value === '') {
       alert('Todos los campos son obligtorios')
     } else {
        this.newSong.album = this.nameAlbum.nativeElement.value;
        this.newSong.anio = this.anio.nativeElement.value;
        this.newSong.name = this.nameSong.nativeElement.value;
        this.newSong.artista = this.nameArtista.nativeElement.value;
        let guardada = this.db.addSong( this.newSong );

        if (guardada === true) {
          alert('Guardada Correctamente')
          this.nameAlbum.nativeElement.value = '';
          this.nameSong.nativeElement.value = '';
          this.nameArtista.nativeElement.value = '';
          this.anio.nativeElement.value = '';
        } else {
          console.log(guardada);
        } 
     }
  }
}

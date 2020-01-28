import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-itemsong',
  templateUrl: './itemsong.component.html',
  styleUrls: ['./itemsong.component.scss']
})
export class ItemsongComponent implements OnInit {

  constructor() { }

  @Input() nameCancion: string;
  
  @Input() nameArtista: string;
  
  @Input() nameAlbum: string;
  
  @Input() anio: string;

  ngOnInit() {
  }

}

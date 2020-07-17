import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album, Photo } from './photos.interface';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.less']
})
export class Menu2Component implements OnInit {

  albums: Album[]
  photos: Photo[]

  selected: number
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get('https://jsonplaceholder.typicode.com/users/1/albums')
      .subscribe((res: Album[])=> {
        this.albums = res
      })
  }

  getPhotos(id: number) {
    this.selected = id
    this._http.get(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
      .subscribe((res: Photo[])=> {
        this.photos = res
      })
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Articles } from './articles.interface';

@Component({
  selector: 'app-menu1',
  templateUrl: './menu1.component.html',
  styleUrls: ['./menu1.component.less']
})
export class Menu1Component implements OnInit {

  articles: Articles[]
  constructor(
    private _http: HttpClient
  ) { }

  ngOnInit(): void {
    this._http.get<Articles[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((res) => {
        this.articles = res
      })
  }

}

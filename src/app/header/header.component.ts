import { Component, OnInit } from '@angular/core';

interface Menu {
  title: string
  link: string
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {

  menus: Menu[] = [
    { title: 'Beranda', link: '/' },
    { title: 'Menu1', link: '/menu1' },
    { title: 'Menu2', link: '/menu2' },
    { title: 'Menu3', link: '/menu3' },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}

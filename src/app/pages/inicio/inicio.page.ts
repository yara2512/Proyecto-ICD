import { Component, OnInit } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirectTo:string;
}
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes:Componente[] = [
    {
      icon:"heart-outline",
      name:"ACTION-SHEET-PAGE",
      redirectTo:"/action"
    },
    {
      icon:"cloudy-outline",
      name:"ALERT-PAGE",
      redirectTo:"/alert"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

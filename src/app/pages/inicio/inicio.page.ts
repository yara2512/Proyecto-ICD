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
      name:"ACTION- SHEET - PAGE",
      redirectTo:"/action"
    },
    {
      icon:"cloudy-outline",
      name:"ALERT - PAGE",
      redirectTo:"/alert"
    },
    {
      icon:"rocket-outline",
      name:"CHECKBOX - PAGE",
      redirectTo:"/checkbox"
    },
    {
      icon:"rocket-outline",
      name:"CONTENT - PAGE",
      redirectTo:"/content"
    },
    {
      icon:"rocket-outline",
      name:"DATA - TIME - PAGE",
      redirectTo:"/date-time"
    },
    {
      icon:"rocket-outline",
      name:"ICONS - PAGE",
      redirectTo:"/icons"
    },
    {
      icon:"rocket-outline",
      name:"INPUT - PAGE",
      redirectTo:"/input"
    },
    {
      icon:"rocket-outline",
      name:"MODAL - PAGE",
      redirectTo:"/modal"
    },
    {
      icon:"rocket-outline",
      name:"TOOLBAR - PAGE",
      redirectTo:"/toolbar"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

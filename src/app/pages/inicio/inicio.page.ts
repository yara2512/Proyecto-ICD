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
  
    /*PRESBY*/
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
    },
    /*YARAVITH*/
    {
      icon:"clipboard-outline",
      name:"ALERT - PAGE",
      redirectTo:"/alert"
    },
    {
      icon:"clipboard-outline",
      name:"CHIP",
      redirectTo:"/chip"
    },
    {
      icon:"clipboard-outline",
      name:"CARD",
      redirectTo:"/card"
    },
    {
      icon:"clipboard-outline",
      name:"LIST",
      redirectTo:"/list"
    },
    {
      icon:"clipboard-outline",
      name:"ACCORDION",
      redirectTo:"/accordion"
    },
    {
      icon:"clipboard-outline",
      name:"TOGGLE",
      redirectTo:"/toggle"
    },
    {
      icon:"clipboard-outline",
      name:"SELECT",
      redirectTo:"/select"
    },
    /*ANA PAOLA*/
    {
      icon:"flower-outline",
      name:"RANGE",
      redirectTo:"/range"
    },
    {
      icon:"flower-outline",
      name:"BADGE",
      redirectTo:"/badge"
    },
    {
      icon:"flower-outline",
      name:"BREADCRUMB",
      redirectTo:"/breadcrumb"
    },
    {
      icon:"flower-outline",
      name:"BUTTON",
      redirectTo:"/button"
    },
    {
      icon:"flower-outline",
      name:"FLOATING",
      redirectTo:"/floating"
    },
    {
      icon:"flower-outline",
      name:"TOAST",
      redirectTo:"/toast"
    },
    {
      icon:"flower-outline",
      name:"SLIDES",
      redirectTo:"/slides"
    },
    {
      icon:"flower-outline",
      name:"TABS",
      redirectTo:"/tabs"
    },
    /* JUANITA*/
    {
      icon:"bonfire-outline",
      name:"SEARCHBAR",
      redirectTo:"/searchbar"
    },
    {
      icon:"bonfire-outline",
      name:"TYPOGRAPHY",
      redirectTo:"/typografy"
    },
    {
      icon:"bonfire-outline",
      name:"INFINITE",
      redirectTo:"/infinite"
    },

    {
      icon:"bonfire-outline",
      name:"MENU",
      redirectTo:"/menu"
    },
    {
      icon:"bonfire-outline",
      name:"SEGMENT",
      redirectTo:"/segment"
    },
    {
      icon:"bonfire-outline",
      name:"PROGRESS INDICATORS",
      redirectTo:"/progress"
    },
    {
      icon:"bonfire-outline",
      name:"REFRESHER",
      redirectTo:"/refresher"
    },

    /*LIZETT*/
    {
      icon:"heart-half-outline",
      name:"POPOVER",
      redirectTo:"/popover"
    },
    {
      icon:"heart-half-outline",
      name:"MEDIA",
      redirectTo:"/media"
    },
    {
      icon:"heart-half-outline",
      name:"GRID",
      redirectTo:"/grid"
    },
    {
      icon:"heart-half-outline",
      name:"NAVIGATION",
      redirectTo:"/navigation"
    },
    {
      icon:"heart-half-outline",
      name:"RADIO",
      redirectTo:"/radio"
    },
    {
      icon:"heart-half-outline",
      name:"REORDER",
      redirectTo:"/reorder"
    },
    {
      icon:"heart-half-outline",
      name:"ROUTING",
      redirectTo:"/routing"
    },
    {
      icon:"heart-half-outline",
      name:"ITEM",
      redirectTo:"/item"
    },
    
  ];
  constructor() { }

  ngOnInit() {
  }

}

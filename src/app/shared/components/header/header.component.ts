import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  menuButton:HeaderMenuObject[]=[
    {
      menuButtonTitle:'Overview',
      menuButtonNavigationLink:'/overview',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Location',
      menuButtonNavigationLink:'/location',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Usage',
      menuButtonNavigationLink:'/usage',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Run Time',
      menuButtonNavigationLink:'/run-time',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Admin',
      menuButtonNavigationLink:'/admin',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
    {
      menuButtonTitle:'Service',
      menuButtonNavigationLink:'/service',
      subMenu:[
        {
          subMenuButtonTitle:'subMenu 1',
          subMenuButtonNavigationLink:'/sub-menu-1'
        },
        {
          subMenuButtonTitle:'subMenu 2',
          subMenuButtonNavigationLink:'/sub-menu-2'
        }
      ]
    },
  ]
  
  constructor() { }

  ngOnInit(): void {
  }

}


export interface SubMenuObject{
  subMenuButtonTitle:string,
  subMenuButtonNavigationLink:string,
}
export interface HeaderMenuObject{
  menuButtonTitle:string,
  menuButtonNavigationLink:string,
  subMenu:SubMenuObject[],
}

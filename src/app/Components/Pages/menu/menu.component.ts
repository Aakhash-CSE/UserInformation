import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  User: any;
  loginuser: any;

  constructor(private route: Router,private rout: Router) { }

  icons: Array<string>;
  config = {
    paddingAtStart: true,
    classname: 'Menu',
    listBackgroundColor: '#17202A',
    fontColor: '#FFFFFF',
    backgroundColor: '#17202A',
    selectedListFontColor: '#0074D9',
    
    
  };

  Componentitem: any = [
    
    {
      label: 'Users',
      link: '/Home/users',
      icon: 'person_pin'
    },
    {
      label: 'Posts',
      link: '/Home/posts',
      icon: 'published_with_changes'
    },
    
  ];
 



  ngOnInit() {
    this.icons = [
      "build", "assignment", "book", "extension", "store"
    ];
    this.loginuser = this.Componentitem;
    this.rout.navigateByUrl('/home/party/listingparty');
  }

  selectedItem(event: any): void{
    if(event.label == 'eCommerce Application'){
          }
          else if(event.label == 'User To Party'){
            this.route.navigate([event['link']]);
          }
        else{
    this.route.navigate([event['link']]);
  }
  }
  }

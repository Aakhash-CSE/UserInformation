import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';
import { Router } from '@angular/router';

@Component({
  selector: 'app-common-panel',
  templateUrl: './common-panel.component.html',
  styleUrls: ['./common-panel.component.scss']
})
export class CommonPanelComponent implements OnInit {
  //Responsive screen
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );

sidenavWidth = 15;  
sideNavFootIcon="arrow_back";
  poup: any;

  
  constructor(private breakpointObserver: BreakpointObserver,private dialog: MatDialog,private bottomSheet: MatBottomSheet,
    private route: Router) { }

  ngOnInit() {
    this.poup = 0;
  }

  //increase func on side nav arrow button click
  increase(){
    this.sidenavWidth = 15;
  }

  //decrease func on side nav arrow button click
  decrease(){
    this.sidenavWidth = 4;
  }

  //toogle side nav
  toggleSideNav(evnt){
    if(this.sidenavWidth == 4){
      this.sideNavFootIcon="arrow_back";
      this.increase();
    }
    else{
      this.sideNavFootIcon="arrow_forward";
      this.decrease();
    }
  }


}

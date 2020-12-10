import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from 'src/app/Service/common.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  Users: any;
  dataSource: MatTableDataSource<unknown>;

  constructor(public commonService: CommonService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.commonService.getUserData().subscribe(res=>{
      this.Users= res;
      this.dataSource = new MatTableDataSource(this.Users);
      this.dataSource.paginator = this.paginator;
    })
  }
  displayedColumns: string[] = [ 'id', 'name', 'username','email','address','phone','company','website'];
}

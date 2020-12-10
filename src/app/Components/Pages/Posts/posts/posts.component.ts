import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { CommonService } from 'src/app/Service/common.service';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  Posts: any;
  dataSource: MatTableDataSource<unknown>;
 
  constructor(public commonService: CommonService) { }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.commonService.getPostData().subscribe(data=>{
      this.Posts = data;
      this.dataSource = new MatTableDataSource(this.Posts);
          this.dataSource.paginator = this.paginator;
    });
    
      
  }
  
  displayedColumns: string[] = [ 'id', 'userId', 'title'];
}

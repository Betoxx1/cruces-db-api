import { Component, OnInit } from '@angular/core';
import { PhotosService } from 'src/app/services/dynamic-user.service';
import { User } from 'src/app/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-data-table-dinamic-list',
  templateUrl: './data-table-dinamic-list.component.html',
  styleUrls: ['./data-table-dinamic-list.component.scss']
})
export class DataTableDinamicListComponent implements OnInit {

    user: User[] = [];
    //displayedColumns = this.user[1];

    displayedColumns = [];
    

//displayedColumns = ['id','name', 'email', 'phone', 'company'];

    constructor(public photosService: PhotosService) { }



    calldata(){
      alert("Hello! I am an alert box!!");
    }

    addColumn() {
      var i=0
      var test = Object.keys(this.user[0]);//test2;
      console.log(":: test 0");
      
      
      
      for(var i = 0; i < test.length; i++ ){
        console.log(" displayedColumns["+i+"]: "+this.displayedColumns[i])
        this.displayedColumns.push(test[i]);
        console.log(" displayedColumns["+i+"]: "+this.displayedColumns[i])
       var dataType = typeof test[i];

        console.log(":: test "+ this.displayedColumns + "::" + dataType);
        console.log(":: test "+ test[i] + "::" + dataType);
      }
      /*

      console.log(":: displayedColumns "+ this.displayedColumns );
      console.log(":: test "+ test[0] );*/
    }

   // "https://jsonplaceholder.typicode.com/posts";
   //https://cruces-database-api.herokuapp.com/cruces
   
   private handleError(errorResponce: HttpErrorResponse){
     if (errorResponce.error instanceof ErrorEvent){
      console.error('Client Side Error: ', errorResponce.error.message);

     }else {
       console.error('Server Side Error: ',errorResponce);
     }
        
  }

    ngOnInit() {

      this.photosService.getUrl("https://jsonplaceholder.typicode.com/posts")
      this.photosService.getUrl("http://localhost:3000/")

      //this.handleError()

      this.photosService.getDUser()
        .subscribe(
          photos => {

            console.log(photos);
            console.log(typeof(photos))

            //this.user = Object.keys(photos).map(key => ({type: key, value: photos[key]}));;
            this.user = photos;
      //      for(i = 0; )

            console.log("::1");

            console.log(Object.values(this.user));
            console.log(typeof(this.user))

            console.log("::2 "+Object.keys(this.user[0]));
            console.log("::3");
            this.addColumn();
          } 
        )
    }
  
   // something() { alert('Works!'); }
  
}

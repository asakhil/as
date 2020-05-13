import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    title:string;
    details:any;
    byid:string;
    default:any;
    moviedetails = {};
    constructor(
                private http: HttpClient
              ) { }

    ngOnInit(){
        this.http.get('http://www.omdbapi.com/?&apikey=d883870d&s=abc&page=1')
        .subscribe(data =>{
          this.details = data['Search'];
            })
    }
      
    onClick(){close 
      this.http.get('http://localhost:2000/?s='+this.title)
    .subscribe( data => {
            this.details= data['Search'];
            })
            console.log('http://www.omdbapi.com/?&apikey=d883870d&s=',+this.title)

    }

    //......modal details click action.................
    onClickById(Id){
            this.http.get('http://www.omdbapi.com/?&apikey=d883870d&i='+ Id)
            .subscribe( data => {
                    this.moviedetails= data;           
            })
    }

    //...........undefined images..........
    onImgError(event) { 
        event.target.src = 'assets/error.jpg';
    } 
}

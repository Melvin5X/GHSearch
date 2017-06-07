import { Component, OnInit ,Input } from '@angular/core';
import { SearchUsersService } from '../search-users.service';

@Component({
  selector: 'app-search-users',
  templateUrl: './search-users.component.html',
  styleUrls: ['./search-users.component.css']
})
export class SearchUsersComponent implements OnInit {
  location: string;
  language: string;
  results : any[] =[];
  selected: boolean=false;
  selectedUser: any;
  error_text: string = ""; 

  constructor(private searchUserService : SearchUsersService) { }

  ngOnInit() {
  }

  search(location:string,language:string){
    
    
    this.selected=false;
    this.error_text="";
    if(location || language){
      this.location = location;
      this.language = language;
      console.log(this.location,this.language);
      this.searchUserService.getUsersByPlaceAndLanguage(location,language).subscribe(
        users => {
          this.results=users;
        },
        error => {
          this.results = [];
          this.error_text="Sorry no results found. Please try again later...!"
          console.error(this.error_text);
        }
      )
    }
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icontinent } from 'src/continent';

@Injectable({
  providedIn: 'root'
})
export class ContinentserviceService {
springEndpoint: string | undefined;
  
  constructor(private http:HttpClient) {
    this.springEndpoint='http://localhost:8080/api/v1/getbyplace/';
   }

  getContinents(){
    return this.http.get("http://localhost:8080/api/v1/getbyplace/World");
  }

  getcountries(link:string){
    return this.http.get(`${this.springEndpoint}/${link}`);
  }
}

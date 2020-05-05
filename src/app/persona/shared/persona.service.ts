import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
apiurl: string = 'https://covid-19-data.p.rapidapi.com/totals';
headers = new HttpHeaders().set('Content-type', 'application/json')
                           .set('x-rapidapi-host','covid-19-data.p.rapidapi.com')
                           .set('x-rapidapi-key','83fd87422bmsh5d5a9e8fa134e53p14b918jsn789fc2cf581c');
  constructor(private httpClient: HttpClient) {

  }
  getCovidMundial(){
    return this.httpClient.get(`${this.apiurl}`, {headers: this.headers});
  }
  getCovidPorPais(){

  }
}

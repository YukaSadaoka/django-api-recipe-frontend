import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

interface SignupRequest{
  email: string,
  password: string,
  name: string
}

interface SignupResponse{
  email: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://192.46.223.108/api/user/';

  constructor(private http: HttpClient) { }
  
  myuser: SignupRequest = {
    'email': 'yuktest@mail.com',
    'password': 'test123',
    'name': 'test'
  };
  

  signup(){
    console.log("sing up!");
    return this.http.post<SignupRequest>(`${this.baseUrl}create/`, this.myuser)
    .pipe(
      tap((val) => console.log('Result' + val))
    );
    console.log("Done!");
  }

  signin(){
    console.log("sing in....");
    return this.http.post(`${this.baseUrl}token/`, {
      email: this.myuser.email,
      password: this.myuser.password
    }).pipe(
      tap((val) => ('Result' + val.toString()))
    );
  }
}
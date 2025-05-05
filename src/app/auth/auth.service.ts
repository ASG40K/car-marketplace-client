
import { Injectable } from '@angular/core';
import { LoginRequest } from './login-request';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { LoginResponse } from './login-response';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


private _authStatus = new BehaviorSubject<boolean>(false);
authStatus = this._authStatus.asObservable();
private setAuthStatus (value: boolean){
   this._authStatus.next(value); 
}
  constructor(private http: HttpClient) { }

  login(loginRequest: LoginRequest): Observable<LoginResponse>{
      let url = `${environment.baseUrl}api/Admin/Login`;
      return this.http.post<LoginResponse>(url, loginRequest)
      .pipe(tap(loginResult => {
        if(loginResult.success){
          localStorage.setItem("565-jwt", loginResult.token);
          this.setAuthStatus(true);
        } 
      }))  
  }

logout(){
     localStorage.removeItem("565-jwt");
     this.setAuthStatus(false);
}

isAuthenticated(): boolean {
return localStorage.getItem("565-jwt") != null;

}

}

import { Injectable } from '@angular/core';
import { User } from 'src/interfaces/user/user.module';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  users: User[] = [];
  constructor() {
    this.users=JSON.parse(localStorage.users || "[]");
   }

setUser(user: User){ //Users POST
    this.users.push(user);
    //formas de guardar en el localStorage
    localStorage.users=JSON.stringify(this.users);
}

getUsers(): User[]{ //Users GET
    this.users=JSON.parse(localStorage.users);
    return this.users;
}

login(email: string,password: string):boolean{ //login POST
  this.users=JSON.parse(localStorage.users || "[]");
  let emails =this.users.map(function(e){return e.email})
  let passwords =this.users.map(function(e){return e.password})
  let pos=email.indexOf(email);
  if(pos!=-1){
    if(passwords[pos]===password){
      localStorage.isLogIn=true;
      return true
    }else{
      localStorage.isLogIn=false;
      return false;
    }
  }else{
    localStorage.isLogIn=false;
    return false;
  }
}

getIsLogin():boolean{
  return Boolean(localStorage.isLogin);
}

logOut(){ //logOut POST

}
}

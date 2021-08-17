import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: '/user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {



  constructor(private authService: AuthService, 
               private router: Router) { }
  ngOnInit(): void {
  }
  model = {
    userName:'',
    emailAddress: "",
    password: "",

  }

   login() {
    if (this.model) {
    
       this.authService.Login(this.model).subscribe((res)=>{
         this.authService.setSession(res);
         this.router.navigateByUrl('/posts');
       })
         
      }
  }
}


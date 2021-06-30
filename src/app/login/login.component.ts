import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service'
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myReactiveForm:FormGroup;

  constructor(private login:LoginService,private router:Router) {
    this.myReactiveForm = new FormGroup({});
    
   }
  username:string = '';
  password:string = '';
  data:any;

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username':new FormControl(null),
      'password':new FormControl(null),
    })
  }

  formSubmit(){
    let parms = this.myReactiveForm.value;
    this.login.checkLogin(parms).subscribe((res)=>{
      this.data = res;
      if(this.data.success){
        console.log(this.data);
        this.router.navigate(['/tutorials'])
      }
    })
    console.log(this.myReactiveForm.value);
  }
}

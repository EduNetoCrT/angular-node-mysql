import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  errormsg:any

  ngOnInit(): void {
  }
  userForm = new FormGroup({
    'fullname':new FormControl('',Validators.required),
    'email':new FormControl('',Validators.required),
    'mobile':new FormControl('',Validators.required)
  });

  userSubmit()
  {
    if(this.userForm.valid)
    {
      console.log(this.userForm.value)
      this.service.createData(this.userForm.).subscribe((res) => {
        console.log(this.userForm.value, 'res==>')
      })
    }
    else
    {
      this.errormsg = 'all filed is required'
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/tutorial.service';
import { Router} from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";  

@Component({
  selector: 'app-add-tutorial',
  templateUrl: './add-tutorial.component.html',
  styleUrls: ['./add-tutorial.component.css']
})
export class AddTutorialComponent implements OnInit {
  tutorial = {
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private tutorialService: TutorialService,private router:Router,private SpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    console.log("add");
  }

  saveTutorial(): void {
    this.SpinnerService.show();
    const data = {
      title: this.tutorial.title,
      description: this.tutorial.description
    };

    this.tutorialService.create(data)
      .subscribe(
        (response:any) => {
          console.log(response);
          this.submitted = true;
          this.SpinnerService.hide();  
        },
        (error:any) => {
          console.log(error);
        });
  }

  newTutorial(): void {
    this.submitted = false;
    this.tutorial = {
      title: '',
      description: '',
      published: false
    };
  }
  listTutorial(): void{
    this.router.navigate(['/tutorials'])
  }
}
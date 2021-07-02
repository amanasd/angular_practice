import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/tutorial.service';

@Component({
  selector: 'app-tutorials-list',
  templateUrl: './tutorials-list.component.html',
  styleUrls: ['./tutorials-list.component.css']
})
export class TutorialsListComponent implements OnInit {

  tutorials: any = [];
  currentTutorial:any = null;
  currentIndex = -1;
  title = '';

  constructor(private tutorialService: TutorialService) { }

  ngOnInit(): void {
    console.log(localStorage.getItem("token"));
    this.retrieveTutorials();
  }

  retrieveTutorials(): void {
    this.tutorialService.getAll()
      .subscribe(
        (data:any) => {
          this.tutorials = data.data;
          console.log(data.data);
        },
        (error:any) => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveTutorials();
    this.currentTutorial = null;
    this.currentIndex = -1;
  }

  setActiveTutorial(tutorial:any, index:any): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials(): void {
    this.tutorialService.deleteAll()
      .subscribe(
        (response:any) => {
          console.log(response);
          this.retrieveTutorials();
        },
        (error:any) => {
          console.log(error);
        });
  }

  searchTitle(): void {
    this.tutorialService.findByTitle(this.title)
      .subscribe(
        (data:any) => {
          this.tutorials = data.data;
          console.log(data);
        },
        (error:any) => {
          console.log(error);
        });
  }
}
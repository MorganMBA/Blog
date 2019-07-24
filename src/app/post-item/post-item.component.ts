import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {
  @Input() title: string;
  @Input() datePost = new Date();
  @Input() content: string;
  @Input() loveIt: number;

  onLike() {
    this.loveIt++;
    //console.log(this.loveIt);
  }

  onDislike() {
    this.loveIt--;
    //console.log(this.loveIt);
  }
  constructor() { }

  ngOnInit() {
  }

}

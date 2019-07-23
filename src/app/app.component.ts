import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: 'Mon premier post',
      content: 'je serai par la grace de Dieu a ESGI le semestre prochain et en alternance chez onepoint',
      loveIts: 0,
      create_at: Date.now()
    },
    {
      title: 'Mon deuxième post',
      content: "j'ai pas d'amis, ni de copines j'aimerais bien en avoir mais j'ai pas d'argent j'adorerais être appeler pour un travail",
      loveIts: 0,
      create_at: Date.now()
    },
    {
      title: 'Mon troisième post',
      content: 'i love money, on danse',
      loveIts: 0,
      create_at: Date.now()
    }
  ];

}

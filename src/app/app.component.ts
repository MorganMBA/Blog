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
      content: "j'adorerai être embaucher cet été",
      loveIts: 0,
      create_at: Date.now()
    },
    {
      title: 'Mon troisième post',
      content: "tuba life 9.2 c'est l'elite",
      loveIts: 0,
      create_at: Date.now()
    }
  ];
}

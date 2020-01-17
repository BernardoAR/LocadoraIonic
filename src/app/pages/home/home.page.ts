import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage {
  filme;
  constructor(private fb: AngularFireDatabase) {
    fb.list('/locadora')
      .valueChanges()
      .subscribe(dados => (this.filme = dados));
  }
}

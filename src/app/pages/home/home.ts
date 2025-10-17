import { Component } from '@angular/core';
import { Hero } from '@sections/hero/hero';
import { Navbar } from '@sections/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

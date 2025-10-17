import { Component } from '@angular/core';
import { About } from '@sections/about/about';
import { Hero } from '@sections/hero/hero';
import { Navbar } from '@sections/navbar/navbar';

@Component({
  selector: 'app-home',
  imports: [Navbar, Hero, About],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}

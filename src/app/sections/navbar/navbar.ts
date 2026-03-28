import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, FacebookIcon, InstagramIcon, LinkedinIcon } from 'lucide-angular';

@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  readonly FacebookIcon = FacebookIcon;
  readonly InstagramIcon = InstagramIcon;
  readonly LinkedinIcon = LinkedinIcon;
}

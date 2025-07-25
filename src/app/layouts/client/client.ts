import { Component } from '@angular/core';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-client',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './client.html',
  styleUrl: './client.css',
})
export class Client {}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  onSubmit() {
    // Get the current URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    console.log(window.location); 
// Fetch the value of the 'redirectUrl' parameter
    const returnUrl = urlParams.get('returnUrl') || '/';
// Decode the Url
    const decodedRedirectUrl: string = decodeURIComponent(returnUrl); 
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLinkActive, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'stackthrive';

  token = ""
  obj: any = {
    "product_id": "n76sdclHb",
    "environment_id": "y4jCrtlfj"
  }
  http = inject(HttpClient)


  getToken() {
    this.http.post("https://api.app.thrivestack.ai/v1/GetTSDefaultManagementToken", this.obj).subscribe((res:any)=> {

      this.token = res.data; 
      alert(this.token)

    })
  }
}

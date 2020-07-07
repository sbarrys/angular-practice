import { Component } from '@angular/core';

@Component({
  //루트 컴포넌트이다.
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //나중에 {{ title }} 로 사용 하게 된다.
  title = '[ AppComponent ]';
}

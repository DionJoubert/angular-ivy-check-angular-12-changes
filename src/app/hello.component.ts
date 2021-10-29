import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `<h1>Testing: {{name}}</h1>`,
  styles: [`h1 { font-family: Verdana; }`]
})
export class HelloComponent  {
  @Input() name: string;
}

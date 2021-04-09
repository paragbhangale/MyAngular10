import { Directive ,ElementRef} from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private e1:ElementRef) {
    e1.nativeElement.style.color="Red"
   // e1.nativeElement.style.display="none"
   }

}

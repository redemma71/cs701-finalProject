import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telephone',
  pure: false
})
export class TelephonePipe implements PipeTransform {

  transform(phoneNumber: number): string {
    let phoneNumberNormal = (phoneNumber.toString()).replace(/\D/g, '');
      return '(' + phoneNumberNormal.substr(0, 3) + ')'
                 + phoneNumberNormal.substr(3, 3) + '-'
                 + phoneNumberNormal.substr(6, 4);

  }

}

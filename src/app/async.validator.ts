import { AbstractControl, ValidationErrors } from '@angular/forms';
import { map, Observable, timer } from 'rxjs';

export function forbiddenAsyncValidator(control: AbstractControl): Observable<ValidationErrors | null> {
  const forbiddenPasswords = ['password', 'passw0rd', '123456'];
  return timer(2_500).pipe(map(() => (forbiddenPasswords.includes(control.value) ? { forbidden: true } : null)));
}

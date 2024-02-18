import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CesarCipherService {
  encrypt(text: string, shift: number): string {
    return this.shiftText(text, shift);
  }

  decrypt(text: string, shift: number): string {
    return this.shiftText(text, -shift);
  }

  private shiftText(text: string, shift: number): string {
    return text
      .split('')
      .map(char => {
        const charCode = char.charCodeAt(0);
        if (charCode >= 65 && charCode <= 90) { // Uppercase letters
          return String.fromCharCode((charCode - 65 + shift + 26) % 26 + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Lowercase letters
          return String.fromCharCode((charCode - 97 + shift + 26) % 26 + 97);
        } else {
          return char; // Non-alphabetic characters
        }
      })
      .join('');
  }
}

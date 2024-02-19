import { Component } from '@angular/core';
import { CesarCipherService } from '../cesar-cipher.service';

@Component({
  selector: 'app-cesar-cipher',
  templateUrl: './cesar-cipher.component.html',
  styleUrls: ['./cesar-cipher.component.css']
})
export class CesarCipherComponent {
  //A
  inputText: string = '';
  shiftAmount: number = 0;
  encryptedText: string = '';

  constructor(private cesarCipherService: CesarCipherService) {}

  //E
  encrypt() {
    this.encryptedText = this.cesarCipherService.encrypt(this.inputText, this.shiftAmount);
  }

  decrypt() {
    this.encryptedText = this.cesarCipherService.decrypt(this.inputText, this.shiftAmount);
  }
}

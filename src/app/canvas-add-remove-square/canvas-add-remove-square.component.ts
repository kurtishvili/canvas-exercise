import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'my-canvas',
  templateUrl: './canvas-add-remove-square.component.html',
  styleUrls: ['./canvas-add-remove-square.component.scss']
})
export class CanvasAddRemoveSquareComponent implements OnInit {

  squares: Square[] = [];
  selectedSquare: Square;

  constructor() { }


  ngOnInit() {
    for (let index = 0; index < 4; index++) {
      let left = Math.floor(Math.random() * Math.floor(380));
      let top = Math.floor(Math.random() * Math.floor(180));
      //let color = this.getRandomColor();
      this.squares.push({ left: left, top: top })
    }

  }

  getRandomColor() {
    var color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }

  addSquare() {

  }

  selectSquare(square: Square) {
    this.selectedSquare = square;
  }
}

export interface Square {
  id?: number;
  left?: number;
  top?: number;
  color?: string;
  isSelected?: boolean;
}
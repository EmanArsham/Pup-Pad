
import { Component, ElementRef, ViewChild, AfterViewInit,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-draw',
  standalone:true,
  imports: [],
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})

export class DrawComponent implements OnInit {
  @ViewChild('canvas', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private drawing: boolean = false;
  private lastX: number = 0;
  private lastY: number = 0;
  fillColor: string = '#000000';
  isDrawing: boolean = false; // Add this line to define the isDrawing property

  ngOnInit() {
    const canvasEl = this.canvas.nativeElement;
    const context = canvasEl.getContext('2d');
    
    if (context) {
      this.ctx = context;
      canvasEl.width = canvasEl.offsetWidth;
      canvasEl.height = canvasEl.offsetHeight;
      this.ctx.strokeStyle = this.fillColor;
      this.ctx.lineJoin = 'round';
      this.ctx.lineCap = 'round';
      this.ctx.lineWidth = 5;
    } else {
      throw new Error('Could not get canvas context');
    }
  }

  onBeginStroke(event: MouseEvent) {
    this.drawing = true;
    this.isDrawing = true; // Update isDrawing when drawing starts
    [this.lastX, this.lastY] = [event.offsetX, event.offsetY];
  }

  onEndStroke(event: MouseEvent) {
    this.drawing = false;
    this.isDrawing = false; // Update isDrawing when drawing ends
    this.ctx.beginPath(); // Reset the path so there's no continuation between strokes
  }

  onDraw(event: MouseEvent) {
    if (!this.drawing) return;

    this.ctx.beginPath();
    this.ctx.moveTo(this.lastX, this.lastY);
    this.ctx.lineTo(event.offsetX, event.offsetY);
    this.ctx.stroke();

    [this.lastX, this.lastY] = [event.offsetX, event.offsetY];
  }

  clearCanvas() {
    const canvasEl = this.canvas.nativeElement;
    this.ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
  }

  setColor(color: string) {
    this.fillColor = color;
    this.ctx.strokeStyle = this.fillColor;
  }

  onColorChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.setColor(input.value);
  }
}






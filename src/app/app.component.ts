import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: {
    '(document:keydown)': 'handleKeyboardEvent($event)',
    '(document:click)': 'handleClickEvent($event)'
  }
})
export class AppComponent {
  x_position = 30;
  y_position = 10;

  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "ArrowLeft") {
      this.x_position = this.x_position - 20
    }
    else if (event.key === "ArrowRight") {
      this.x_position = this.x_position + 20
    }
    else if (event.key === "ArrowUp") {
      this.y_position = this.y_position - 20
    }
    else if (event.key === "ArrowDown") {
      this.y_position = this.y_position + 20
    }

    document.getElementById("mom").style.cssText = "left: " + this.x_position + "px;top: " + this.y_position + "px;";
  }

  handleClickEvent(event: MouseEvent) {
    if (event.screenX / screen.width < 0.3) {
      this.x_position = this.x_position - 20
    }
    else if (event.screenX / screen.width > 0.7) {
      this.x_position = this.x_position + 20
    }
    else if (event.screenY / screen.height < 0.3) {
      this.y_position = this.y_position - 20
    }
    else if (event.screenY / screen.height > 0.7) {
      this.y_position = this.y_position + 20
    }

    document.getElementById("mom").style.cssText = "left: " + this.x_position + "px;top: " + this.y_position + "px;";
  }
}

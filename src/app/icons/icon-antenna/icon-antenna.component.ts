import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TooltipDirective} from "../../core/tooltip/tooltip.directive";

@Component({
  selector: 'app-icon-antenna',
  standalone: true,
  imports: [CommonModule, TooltipDirective],
  templateUrl: './icon-antenna.component.svg',
  styleUrls: ['../style.scss']
})
export class IconAntennaComponent {

}

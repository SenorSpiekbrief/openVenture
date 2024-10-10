import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-new-game-menu',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatToolbarModule,MatExpansionModule,                                                                                                                                                                            MatSelectModule, MatInputModule, MatFormFieldModule],
  templateUrl: './new-game-menu.component.html',
  styleUrl: './new-game-menu.component.scss'
})
export class NewGameMenuComponent {

}

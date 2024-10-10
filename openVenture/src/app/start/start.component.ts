import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatExpansionModule, ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.scss'
})
export class StartComponent {

  constructor(private router: Router) {}

  startNewVenture() {
    this.router.navigate(['/new-venture']);
  }

  continueVenture() {
    alert('Continuing venture...');
  }

  personalAssets() {
    alert('Opening Personal Assets...');
  }

  displaySettings() {
    alert('Opening Display Settings...');
  }

  soundSettings() {
    alert('Opening Sound Settings...');
  }

  accountSettings() {
    alert('Opening Account Settings...');
  }

  logOff() {
    alert('Logging off...');
  }
}

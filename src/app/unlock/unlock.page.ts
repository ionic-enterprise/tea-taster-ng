import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SessionVaultService } from '@app/core';
import { IonicModule, NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-unlock',
  templateUrl: './unlock.page.html',
  styleUrls: ['./unlock.page.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule, ReactiveFormsModule],
})
export class UnlockPage {
  constructor(private navController: NavController, private platform: Platform, private session: SessionVaultService) {}

  async unlockClicked() {
    try {
      await this.session.getSession();
      this.navController.navigateRoot('/tabs/tea');
    } catch (err) {}
  }

  redoClicked() {
    this.session.clear();
    this.session.setUnlockMode('SecureStorage');
    this.navController.navigateRoot('/tabs/tea');
  }
}

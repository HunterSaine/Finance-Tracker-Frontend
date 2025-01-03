import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-assets',
  standalone: false,
  templateUrl: './assets.component.html',
  styleUrl: './assets.component.scss'
})
export class AssetsComponent {
  assets: any = [];
  newAsset: any = {};


  constructor(private apiService: ApiService) {}

  getAssets() {
    this.apiService.getAssets().subscribe((data: any) => {
      this.assets = data;
    });
  }
  addAsset() {
    this.apiService.postAsset(this.newAsset).subscribe(() => {
      this.getAssets();
    });
  }

}

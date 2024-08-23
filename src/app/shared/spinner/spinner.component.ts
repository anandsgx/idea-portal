import { Component } from '@angular/core';
import { LoaderService } from '../../core/services/loader.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  isLoading: boolean = false;

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
    this.loaderService.isLoading$.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }
}

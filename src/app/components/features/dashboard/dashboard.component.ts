import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerComponent } from '../../common/container/container.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  standalone: true,
  imports: [CommonModule, ContainerComponent],
})
export class DashboardComponent {
  stats = [
    { label: 'Total Leads', value: '2.543', icon: 'assessment' },
    { label: 'Conversão', value: '24%', icon: 'trending_up' },
    { label: 'Ativos', value: '1.891', icon: 'check_circle' },
  ];
}

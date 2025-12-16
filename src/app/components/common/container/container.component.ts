import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';

interface BreadcrumbItem {
  label: string;
  url: string;
}

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  standalone: true,
  imports: [CommonModule],
})
export class ContainerComponent {
  title = input.required<string>();
  subtitle = input<string>('');

  breadcrumbs: BreadcrumbItem[] = [];

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.createBreadcrumbs())
      )
      .subscribe((breadcrumbs) => {
        this.breadcrumbs = breadcrumbs;
      });

    this.breadcrumbs = this.createBreadcrumbs();
  }

  private createBreadcrumbs(): BreadcrumbItem[] {
    const url = this.router.url;
    const parts = url.split('/').filter((part) => part);
    const breadcrumbs: BreadcrumbItem[] = [];

    let currentUrl = '';
    parts.forEach((part, index) => {
      currentUrl += `/${part}`;
      breadcrumbs.push({
        label: this.formatLabel(part),
        url: currentUrl,
      });
    });

    return breadcrumbs;
  }

  private formatLabel(segment: string): string {
    return segment
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  navigateTo(url: string): void {
    this.router.navigate([url]);
  }
}

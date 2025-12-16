import { Component, OnInit, signal, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected readonly title = signal('web');
  private router = inject(Router);

  ngOnInit() {
    // Handle GitHub Pages SPA redirect
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get('redirect');
    
    if (redirect) {
      // Remove the redirect param and navigate to the real path
      const pathMatch = redirect.match(/\/web(.*)$/);
      if (pathMatch) {
        const path = pathMatch[1] || '/';
        window.history.replaceState(null, '', window.location.origin + window.location.pathname);
        this.router.navigateByUrl(path);
      }
    }
  }
}

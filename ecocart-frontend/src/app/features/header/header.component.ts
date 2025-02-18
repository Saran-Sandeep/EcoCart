import { CommonModule } from '@angular/common';
import { Component, ElementRef, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuVisible = signal(false);

  @ViewChild('hamburger') searchHamburgerRef!: ElementRef;

  toggleMobileMenu() {
    if (!this.isMenuVisible()) {
      this.isMenuVisible.set(true);
      this.searchHamburgerRef.nativeElement.classList.remove('ri-menu-line');
      this.searchHamburgerRef.nativeElement.classList.add(
        'ri-close-large-line'
      );
    } else {
      this.isMenuVisible.set(false);
      this.searchHamburgerRef.nativeElement.classList.remove(
        'ri-close-large-line'
      );
      this.searchHamburgerRef.nativeElement.classList.add('ri-menu-line');
    }
  }
}

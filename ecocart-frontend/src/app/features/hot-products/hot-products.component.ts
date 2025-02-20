import {
  Component,
  OnInit,
  CUSTOM_ELEMENTS_SCHEMA,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from '../../shared/Models/Product';
import { CurrencyPipe } from '@angular/common';
// swiper
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
// register Swiper custom elements
register();

@Component({
  selector: 'app-hot-products',
  imports: [CurrencyPipe],
  templateUrl: './hot-products.component.html',
  styleUrl: './hot-products.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HotProductsComponent implements OnInit, AfterViewInit {
  constructor(private ProductService: ProductService) {}

  mostWantedProducts: Product[] = [];
  newArrivalProducts: Product[] = [];

  @ViewChild('swiperEle', { static: false }) swiperEle!: ElementRef;
  @ViewChild('leftNav', { static: false }) leftNav!: ElementRef;
  @ViewChild('rightNav', { static: false }) rightNav!: ElementRef;

  ngOnInit(): void {
    this.fetchMostWantedProducts();
    this.fetchNewArrivals();
  }

  ngAfterViewInit(): void {
    this.setSwiperConfig();
    window.addEventListener('resize', this.setSwiperConfig);
  }

  fetchMostWantedProducts(): void {
    this.ProductService.getMostWantedProducts().subscribe({
      next: (data) => {
        this.mostWantedProducts = data;
        console.log('Successfully fetched most wanted products');
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  fetchNewArrivals(): void {
    this.ProductService.getNewArrivalProducts().subscribe({
      next: (data) => {
        this.newArrivalProducts = data;
        console.log('Successfully fetched new arrival products');
      },
      error: (error) => console.log(error),
    });
  }

  // swiper config
  setSwiperConfig(): void {
    if (this.swiperEle) {
      const swiperElement = this.swiperEle.nativeElement;
      const windowWidth = window.innerWidth;
      const leftNav = this.leftNav.nativeElement;
      const rightNav = this.rightNav.nativeElement;

      leftNav.addEventListener('click', () => {
        swiperElement.swiper.slidePrev();
      });

      rightNav.addEventListener('click', () => {
        swiperElement.swiper.slideNext();
      });

      const swiperParams: SwiperOptions = {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
          375: { slidesPerView: 1, spaceBetween: 10 },
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 3, spaceBetween: 30 },
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
        loop: true,
        speed: 400,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        allowTouchMove: true,
      };

      Object.assign(swiperElement, swiperParams);
      swiperElement.initialize();
    }
  }

  // swiperParams: SwiperOptions = {
  //   slidesPerView: 3,
  //   spaceBetween: 50,
  //   pagination: {
  //     el: '.swiper-pagination',
  //   },
  //   direction: 'vertical',
  //   loop: true,
  //   speed: 400,
  //   autoplay: {
  //     delay: 3000,
  //     disableOnInteraction: false,
  //   },
  // };

  // swiper = new Swiper('.swiper', this.swiperParams);
}

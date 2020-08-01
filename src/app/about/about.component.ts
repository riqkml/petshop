import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent implements OnInit {
  version: string | null = environment.version;
  dataDummy = [
    {
      id: 1,
      name: 'Piring Double Anti Semut',
      image: 'doubleplate.jpg',
      stok: 30,
      category: 'alat kucing',
      price: 100000,
    },
    {
      id: 2,
      name: 'Shampoo BOAAM C&D FRESHMINT 250ml',
      image: 'shampoboam250.jpg',
      category: 'produk kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 3,
      name: 'Hima Vet Obat Cacing 10ml',
      image: 'himavetcacing.jpg',
      category: 'obat kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 4,
      name: 'Medipet Flea&Tick Spray 30ml',
      image: 'medipet.jpg',
      category: 'produk kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 5,
      name: 'Whiskas Junior Mackerel 24x85gr',
      image: 'juniormackarel.jpg',
      category: 'makanan kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 6,
      name: 'Shampoo BOAAM 100ml',
      image: 'boam100.jpg',
      category: 'produk kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 7,
      name: 'Whiskas Junior Mackerel 24x85gr',
      image: 'juniormackarel.jpg',
      category: 'makanan kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 8,
      name: 'Sendok Ekonomis',
      image: 'sendokekonomis.jpg',
      category: 'alat kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 9,
      name: 'Bola Plastik Pawise anjing dan kucing',
      image: 'ballpawise.jpg',
      category: 'alat kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 10,
      name: 'Whiskas Adult Ocean Fish 24x85gr',
      image: 'oceanfish.jpg',
      category: 'makanan kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 11,
      name: 'ProDiet Kitten Mackerel 12x85gr',
      image: 'prodiet.jpg',
      category: 'makanan kucing',
      stok: 30,
      price: 100000,
    },
    {
      id: 12,
      name: 'Shampoo BOAAM 100ml',
      image: 'boam100.jpg',
      category: 'produk kucing',
      stok: 30,
      price: 100000,
    },
  ];
  constructor() {}

  ngOnInit() {}
}

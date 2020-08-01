import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { StokbarangRoutingModule } from './stok-routing.module';
import { StokbarangComponent } from './stokbarang.component';

@NgModule({
  imports: [CommonModule, TranslateModule, StokbarangRoutingModule],
  declarations: [StokbarangComponent],
})
export class StokbarangModule {}

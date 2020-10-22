// anytime we use a separate module to keep our code clean, we have to use the ngModule import
import { NgModule } from '@angular/core';

// All the material imports below
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';


@NgModule({
    imports: [
      MatButtonModule,
      MatIconModule,
      MatMenuModule,  
      MatProgressSpinnerModule,
      MatToolbarModule
    ],
    exports: [
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatToolbarModule
    ]
  })
  export class MaterialModule {}
  
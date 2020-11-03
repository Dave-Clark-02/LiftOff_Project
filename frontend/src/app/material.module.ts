// anytime we use a separate module to keep our code clean, we have to use the ngModule import
import { NgModule } from '@angular/core';

// All the material imports below
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
    imports: [
      MatButtonModule,
      MatIconModule,
      MatMenuModule,  
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatTooltipModule
    ],
    exports: [
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
      MatProgressSpinnerModule,
      MatToolbarModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatTooltipModule
    ]
  })
  export class MaterialModule {}
  
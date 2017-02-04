import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { HeroTraitsComponent } from './hero-traits.component';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule 
    ],

  declarations: [ 
    AppComponent,
    HeroTraitsComponent
    ],

  bootstrap:    [ 
    AppComponent 
    ]
})
export class AppModule { }

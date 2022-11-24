import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
//import { CustomPipe } from './custom.pipe';
import { FilterPipe } from './filter.pipe';
import { ListFilterPipe } from './list-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    //CustomPipe
    FilterPipe
    //ListFilterPipe
  ],
  imports: [
		CommonModule,
    BrowserModule,
		FormsModule,
    AppRoutingModule,
		HttpClientModule,
    NgbModule
  ],
	exports: [
		//ListFilterPipe
		FilterPipe
	],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AngularFireModule } from '@angular/fire/compat';
import {  AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListingPageComponent } from './listing-page/listing-page.component';
import { ListingDetailPageComponent } from './listing-detail-page/listing-detail-page.component';
import { MyListingPageComponent } from './my-listing-page/my-listing-page.component';
import { NewListingPageComponent } from './new-listing-page/new-listing-page.component';
import { EditListingPageComponent } from './edit-listing-page/edit-listing-page.component';
import { FormsModule } from '@angular/forms';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ListingDataFormComponent } from './listing-data-form/listing-data-form.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { environment } from 'src/environment/environment';


@NgModule({
  declarations: [
    AppComponent,
    ListingPageComponent,
    ListingDetailPageComponent,
    MyListingPageComponent,
    NewListingPageComponent,
    EditListingPageComponent,
    NewListingPageComponent,
    MyListingPageComponent,
    ContactPageComponent,
    ListingDataFormComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule, 
    HttpClientModule, 
    AngularFireModule.initializeApp(environment.firebase), 
    AngularFireAuthModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

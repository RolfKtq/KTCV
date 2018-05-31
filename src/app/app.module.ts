import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';
import { KandidaterComponent } from './kandidater/kandidater.component';
import { DataStorageService } from './services/data.storage.service';
import { HttpModule } from '@angular/http';
import { Lister } from './services/lister';
import { KandidatComponent } from './kandidater/kandidat/kandidat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageComponent } from './kandidater/kandidat/image/image.component';
import { UtdanningComponent } from './kandidater/kandidat/utdanning/utdanning.component';
import { KursComponent } from './kandidater/kandidat/kurs/kurs.component';
import { ErfaringComponent } from './kandidater/kandidat/erfaring/erfaring.component';
import { AttestComponent } from './kandidater/kandidat/attest/attest.component';
import { CvUtdanningComponent } from './kandidater/kandidat/utdanning/cv-utdanning/cv-utdanning.component';
import { CvKursComponent } from './kandidater/kandidat/kurs/cv-kurs/cv-kurs.component';
import { CvErfaringComponent } from './kandidater/kandidat/erfaring/cv-erfaring/cv-erfaring.component';
import { CvAttestComponent } from './kandidater/kandidat/attest/cv-attest/cv-attest.component';
import { PdfGenerellComponent } from './pdf-generell/pdf-generell.component';
import { Logo } from './services/logo';


@NgModule({
  declarations: [
    AppComponent,
    KandidaterComponent,
    KandidatComponent,
    ImageComponent,
    UtdanningComponent,
    KursComponent,
    ErfaringComponent,
    AttestComponent,
    CvUtdanningComponent,
    CvKursComponent,
    CvErfaringComponent,
    CvAttestComponent,
    PdfGenerellComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DataStorageService, Lister, Logo],
  bootstrap: [AppComponent]
})
export class AppModule implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}

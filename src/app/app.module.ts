import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { SocialResponsibilityComponent } from './social-responsibility/social-responsibility.component';
import { ThirdCountryComponent } from './third-country/third-country.component';
import { GomrukComponent } from './gomruk/gomruk.component';
import { LimitsComponent } from './limits/limits.component';
import { ImportsComponent } from './imports/imports.component';
import { ExportsComponent } from './exports/exports.component';
import { SuccessComponent } from './success/success.component';
import { UniversalComponent } from './universal/universal.component';
import { DeliveryTermsComponent } from './delivery-terms/delivery-terms.component';
import { DeclarationsComponent } from './declarations/declarations.component';
import { GomrukImportComponent } from './gomruk-import/gomruk-import.component';
import { GomrukIxracComponent } from './gomruk-ixrac/gomruk-ixrac.component';
import { ParcelTermsComponent } from './parcel-terms/parcel-terms.component';
import { DocumentTermsComponent } from './document-terms/document-terms.component';
import { ProhibitedComponent } from './prohibited/prohibited.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { PromosComponent } from './promos/promos.component';
import { PromoComponent } from './promo/promo.component';
import { ForMediaComponent } from './for-media/for-media.component';
import { TerminologyComponent } from './terminology/terminology.component';
import { FaqComponent } from './faq/faq.component';
import { DownloadsComponent } from './downloads/downloads.component';
import { ForCorporatesComponent } from './for-corporates/for-corporates.component';
import { ContactComponent } from './contact/contact.component';
import { CalculateComponent } from './calculate/calculate.component';
import { GomrukResmilesdirComponent } from './gomruk-resmilesdir/gomruk-resmilesdir.component';
import { QadagalarComponent } from './qadagalar/qadagalar.component';
import { ListComponent } from './list/list.component';
import { FursetlerComponent } from './fursetler/fursetler.component';
import { FursetlerInsideComponent } from './fursetler-inside/fursetler-inside.component';
import { KivComponent } from './kiv/kiv.component';
import { KorporativUcunComponent } from './korporativ-ucun/korporativ-ucun.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    AboutCompanyComponent,
    VacanciesComponent,
    VacancyComponent,
    SocialResponsibilityComponent,
    ThirdCountryComponent,
    GomrukComponent,
    LimitsComponent,
    ImportsComponent,
    ExportsComponent,
    SuccessComponent,
    UniversalComponent,
    DeliveryTermsComponent,
    DeclarationsComponent,
    GomrukImportComponent,
    GomrukIxracComponent,
    ParcelTermsComponent,
    DocumentTermsComponent,
    ProhibitedComponent,
    PlaceOrderComponent,
    PromosComponent,
    PromoComponent,
    ForMediaComponent,
    TerminologyComponent,
    FaqComponent,
    DownloadsComponent,
    ForCorporatesComponent,
    ContactComponent,
    CalculateComponent,
    GomrukResmilesdirComponent,
    QadagalarComponent,
    ListComponent,
    FursetlerComponent,
    FursetlerInsideComponent,
    KivComponent,
    KorporativUcunComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

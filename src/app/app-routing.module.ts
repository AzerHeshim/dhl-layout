import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {AboutCompanyComponent} from "./about-company/about-company.component";
import {VacanciesComponent} from "./vacancies/vacancies.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {SocialResponsibilityComponent} from "./social-responsibility/social-responsibility.component";
import {ThirdCountryComponent} from "./third-country/third-country.component";
import {GomrukComponent} from "./gomruk/gomruk.component";
import {LimitsComponent} from "./limits/limits.component";
import {ImportsComponent} from "./imports/imports.component";
import {ExportsComponent} from "./exports/exports.component";
import {SuccessComponent} from "./success/success.component";
import {UniversalComponent} from "./universal/universal.component";
import {DeliveryTermsComponent} from "./delivery-terms/delivery-terms.component";
import {DeclarationsComponent} from "./declarations/declarations.component";
import {GomrukImportComponent} from "./gomruk-import/gomruk-import.component";
import {GomrukIxracComponent} from "./gomruk-ixrac/gomruk-ixrac.component";
import {ParcelTermsComponent} from "./parcel-terms/parcel-terms.component";
import {DocumentTermsComponent} from "./document-terms/document-terms.component";
import {ProhibitedComponent} from "./prohibited/prohibited.component";
import {PlaceOrderComponent} from "./place-order/place-order.component";
import {PromosComponent} from "./promos/promos.component";
import {PromoComponent} from "./promo/promo.component";
import {TerminologyComponent} from "./terminology/terminology.component";
import {FaqComponent} from "./faq/faq.component";
import {DownloadsComponent} from "./downloads/downloads.component";
import {ForCorporatesComponent} from "./for-corporates/for-corporates.component";
import {ContactComponent} from "./contact/contact.component";
import {CalculateComponent} from "./calculate/calculate.component";
import {GomrukResmilesdirComponent} from "./gomruk-resmilesdir/gomruk-resmilesdir.component";
import {QadagalarComponent} from "./qadagalar/qadagalar.component";
import {ListComponent} from "./list/list.component";
import {FursetlerComponent} from "./fursetler/fursetler.component";
import {FursetlerInsideComponent} from "./fursetler-inside/fursetler-inside.component";
import {KivComponent} from "./kiv/kiv.component";

const routes: Routes = [
  { path:  '', component:  ListComponent},
  { path:  'notfound', component:  NotFoundComponent},
  { path:  'about', component:  AboutCompanyComponent},
  { path:  'vacancies', component:  VacanciesComponent},
  { path:  'vacancy', component:  VacancyComponent},
  { path:  'social-responsibility', component: SocialResponsibilityComponent},
  { path:  'third-country', component: ThirdCountryComponent},
  { path:  'gomruk', component: GomrukComponent},
  { path:  'limits', component: LimitsComponent},
  { path:  'imports', component: ImportsComponent},
  { path:  'exports', component: ExportsComponent},
  { path:  'success', component: SuccessComponent},
  { path:  'universal', component: UniversalComponent},
  { path:  'delivery-terms', component: DeliveryTermsComponent},
  { path:  'declarations', component: DeclarationsComponent},
  { path:  'gomruk-import', component: GomrukImportComponent},
  { path:  'gomruk-ixrac', component: GomrukIxracComponent},
  { path:  'parcel-terms', component: ParcelTermsComponent},
  { path:  'document-terms', component: DocumentTermsComponent},
  { path:  'prohibited', component: ProhibitedComponent},
  { path:  'place-order', component: PlaceOrderComponent},
  { path:  'promos', component: PromosComponent},
  { path:  'promo', component: PromoComponent},
  { path:  'terminology', component: TerminologyComponent},
  { path:  'faq', component: FaqComponent},
  { path:  'downloads', component: DownloadsComponent},
  { path:  'for-corporates', component: ForCorporatesComponent},
  { path:  'contact', component: ContactComponent},
  { path:  'calculate', component: CalculateComponent},
  { path:  'gomruk-resmilesdir', component: GomrukResmilesdirComponent},
  { path:  'qadagalar', component: QadagalarComponent},
  { path:  'home', component: HomeComponent},
  { path:  'fursetler', component: FursetlerComponent},
  { path:  'furset', component: FursetlerInsideComponent},
  { path:  'kiv', component: KivComponent},
  { path:  'termminology', component: TerminologyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';
import { FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { OurTeamComponent } from './pages/our-team/our-team.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';

const appRoutes: Routes = [
	{ path: '',component : HomeComponent },
	{ path: 'AboutUs',component : AboutUsComponent },
	{ path: 'Courses',component : CoursesComponent },
	{ path: 'OurTeam',component : OurTeamComponent },
	{ path: 'ContactUs',component : ContactUsComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
	
    AboutUsComponent,
    CoursesComponent,
    OurTeamComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
	RouterModule.forRoot(appRoutes),
	FormsModule,
	NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

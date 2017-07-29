import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { GrantComponent } from './grant/grant.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { MarkComponent } from './mark/mark.component';
import { ProjectsComponent } from './projects/projects.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownDirective } from './shared/dropdown.directive';
import { SidenavComponent } from './sidenav/sidenav.component';

import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    FooterComponent,
    GrantComponent,
    HeaderComponent,
    IndexComponent,
    MarkComponent,
    ProjectsComponent,
    DropdownDirective,
    SidenavComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

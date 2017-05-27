import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app-routing.module";

import { UserPermissionService } from 'my-lib/my-lib';
import { PermissionService } from 'user-permissions/export';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		AppRoutingModule,
		BrowserModule,
		FormsModule,
		HttpModule
	],
	providers: [UserPermissionService],
	bootstrap: [AppComponent]
})
export class AppModule {
}
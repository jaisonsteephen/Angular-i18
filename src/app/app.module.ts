import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Ensure this path matches your setup
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent // Declare AppComponent here
  ],
  imports: [
    BrowserModule, // Include essential Angular modules
    HttpClientModule
  ],
  bootstrap: [AppComponent] // Define the bootstrap component
})
export class AppModule {}

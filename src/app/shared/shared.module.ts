import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ScrollingModule} from "@angular/cdk/scrolling";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TextFieldModule} from "@angular/cdk/text-field";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule,
    FormsModule,
    TextFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    ScrollingModule,
    FormsModule,
    TextFieldModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {
}

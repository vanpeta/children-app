import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ChildrenComponent } from './children/children.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [HeaderComponent, ChildrenComponent, ChildComponent]
})
export class CoreModule { }

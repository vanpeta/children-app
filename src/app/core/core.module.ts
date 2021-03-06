import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
//components
import { HeaderComponent } from './header/header.component';
import { ChildrenComponent } from './children/children.component';
import { ChildComponent } from './child/child.component';
//services
import { ChildrenService } from './children-service/children.service';
import { DateService } from './date-service/date.service';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
      HeaderComponent,
      ChildrenComponent,
      ChildComponent
  ],
  exports: [
      HeaderComponent,
      ChildrenComponent
  ],
  providers: [ ChildrenService, DateService ]
})

export class CoreModule { }

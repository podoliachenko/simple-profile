import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProfileComponent } from './profile/profile.component';
import { SettingComponent } from './setting/setting.component';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileInfoComponent,
    SidebarComponent,
    ProfileComponent,
    SettingComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiInputPasswordModule,
    TuiButtonModule,
    FormsModule
  ]
})
export class ProfileModule { }

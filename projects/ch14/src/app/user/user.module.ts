import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { FlexLayoutModule } from '@ngbracket/ngx-layout'
import { ReactiveFormsModule } from '@angular/forms'

import { AppMaterialModule } from '../app-material.module'
import { AuthGuard } from '../auth/auth-guard.service'
import { SharedComponentsModule } from '../shared-components.module'
import { FieldErrorModule } from '../user-controls/field-error/field-error.module'
import { LemonRaterModule } from '../user-controls/lemon-rater/lemon-rater.module'
import { LogoutComponent } from './logout/logout.component'
import { ProfileComponent } from './profile/profile.component'
import { UserMaterialModule } from './user-material.module'
import { UserRoutingModule } from './user-routing.module'
import { UserResolve } from './user/user.resolve'
import { provideEnvironmentNgxMask } from 'ngx-mask'

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    SharedComponentsModule,
    AppMaterialModule,
    UserMaterialModule,
    LemonRaterModule,
    FieldErrorModule,
  ],
  providers: [UserResolve, AuthGuard, provideEnvironmentNgxMask({ showMaskTyped: true })],
  declarations: [ProfileComponent, LogoutComponent],
})
export class UserModule {}

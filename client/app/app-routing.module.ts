// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CompanyEditComponent} from './pages/company-edit/company-edit.component';
import { CompanyListComponent} from './pages/company-list/company-list.component';
import { ContactDetailComponent} from './pages/contact-detail/contact-detail.component';
import { ContactEditComponent} from './pages/contact-edit/contact-edit.component';
import { ContactListComponent} from './pages/contact-list/contact-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from "./security/auth.guard";

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'company/:id',  component: CompanyEditComponent  },
    { path: 'companys/:id',  component: CompanyEditComponent , canActivate: [AuthGuard] },
    { path: 'companys',  component: CompanyListComponent  },
    { path: 'contacts/:id/detail',  component: ContactDetailComponent  },
    { path: 'contacts/:id',  component: ContactEditComponent  },
    { path: 'contacts/:id',  component: ContactEditComponent , canActivate: [AuthGuard] },
    { path: 'contacts/:id',  component: ContactEditComponent , canActivate: [AuthGuard] },
    { path: 'contacts',  component: ContactListComponent  },
    { path: 'home',  component: HomeComponent , canActivate: [AuthGuard] },

 /* END MY VIEWS */
    
    { path: 'home', component: HomeComponent},
    // SECURITY
    { path: 'manage-users',  component: ManageUserListComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'manage-users/:id',  component: ManageUserEditComponent, canActivate: [AuthGuard], data:['ADMIN']},
    { path: 'profile',  component: ProfileComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
import { Routes } from '@angular/router';
import { ContentComponent } from './content/content.component';
import { CreateComponent } from './create/create.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
{
// Suggested code may be subject to a license. Learn more: ~LicenseLog:2347648803.
    path :'home' , component:ContentComponent
},
{
    path:'create',component:CreateComponent
},
{
    path:'table',component:TableComponent
}


];

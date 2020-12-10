import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommonPanelComponent } from '../Components/Initial Components/common-panel/common-panel.component';
import { MenuComponent } from '../Components/Pages/menu/menu.component';
import { PostsComponent } from '../Components/Pages/Posts/posts/posts.component';
import { UsersComponent } from '../Components/Pages/UserInformation/users/users.component';



const routings: Routes = [
    
{ path : 'Home', component: CommonPanelComponent,children: [
    { path : 'users', component: UsersComponent},
    { path : 'posts', component: PostsComponent},
    { path: '', redirectTo: 'users', pathMatch: 'full' },
     { path: '**', redirectTo: 'users', pathMatch: 'full' },
]},
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: '**', redirectTo: 'home', pathMatch: 'full' }
];


@NgModule({
    imports: [RouterModule.forRoot(routings)],
    exports: [RouterModule],
    entryComponents: []
})

export class InitialRouting { }

export const InitialRoutingComponents = [
    CommonPanelComponent, MenuComponent
];
import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { SingleComponent } from './single/single.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';

export const routes: Routes = [
    {
        path:"",
        component:ArticleListComponent
    },
    {
        path:"articles/:id",
        component:SingleComponent
    },
    {
        path:"about",
        component: AboutComponent
    },
    {
        path:"create",
        component: CreateComponent
    }
];

import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { SingleComponent } from './single/single.component';
import { AboutComponent } from './about/about.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { CreateApiComponent } from './create-api/create-api.component';
import { ArticleApiComponent } from './article-api/article-api.component';

export const routes: Routes = [
    {
        path:"",
        component:ArticleApiComponent
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
    },
    {
        path:"edit/:id",
        component: EditComponent
    },
    {
        path:"create-api",
        component: CreateApiComponent
    }
];

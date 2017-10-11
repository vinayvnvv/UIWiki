import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './docs/docs.component';

//elements docs
import { StartComponent } from './docs/start/start.component';
import { ButtonsComponent } from './docs/buttons/buttons.component';
import { InputComponent } from './docs/input/input.component';
import { TypographyComponent } from './docs/typography/typography.component';
import { ListComponent } from './docs/list/list.component';
import { LabelComponent } from './docs/label/label.component';
import { TableComponent } from './docs/table/table.component';
import { ImageComponent } from './docs/image/image.component';
import { DividerComponent } from './docs/divider/divider.component';
import { WhiteframeComponent } from './docs/whiteframe/whiteframe.component';

let elements = [ StartComponent, ButtonsComponent, InputComponent, 
                TypographyComponent, ListComponent, LabelComponent, TableComponent, ImageComponent,
                DividerComponent, WhiteframeComponent
                ];

//components docs
import { BreadcrumbComponent } from './docs/components/breadcrumb/breadcrumb.component';
import { MessageComponent } from './docs/components/message/message.component';
import { PanelComponent } from './docs/components/panel/panel.component';
import { PaginationComponent } from './docs/components/pagination/pagination.component';

let components = [ BreadcrumbComponent, MessageComponent, PanelComponent, PaginationComponent ];

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'docs', component: DocsComponent,
  	children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      { path: 'start', component: StartComponent },
      { path: 'typography', component: TypographyComponent },
      { path: 'buttons', component: ButtonsComponent },
      { path: 'input', component: InputComponent },
      { path: 'list', component: ListComponent },
      { path: 'label', component: LabelComponent },
      { path: 'table', component: TableComponent},
      { path: 'image', component: ImageComponent },
      { path: 'divider', component: DividerComponent },
      { path: 'whiteframe', component: WhiteframeComponent },
      { path: 'breadcrumb' , component: BreadcrumbComponent },
      { path: 'message' , component: MessageComponent },
      { path: 'panel', component: PanelComponent },
      { path: 'pagination', component: PaginationComponent }
    ]
  },
  { path: '*', redirectTo: "/home" },
  { path: '**', redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routerComponents = [ HomeComponent, DocsComponent,
                                  elements,
                                  components
                                ];

 
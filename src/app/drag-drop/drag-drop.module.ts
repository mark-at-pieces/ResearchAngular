import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropViewComponent } from './Views/drag-drop-view/drag-drop-view.component';
import { DropzoneDirective } from 'src/app/drag-drop/Directives/dropzone/dropzone.directive';



@NgModule({
  declarations: [
    DropzoneDirective,
    DragDropViewComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropzoneDirective
  ]
})
export class DragDropModule { }

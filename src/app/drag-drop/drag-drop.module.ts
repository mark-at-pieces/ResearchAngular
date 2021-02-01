import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropViewComponent } from './Views/drag-drop-view/drag-drop-view.component';
import { DropzoneDirective } from 'src/app/drag-drop/Directives/dropzone/dropzone.directive';
import { PasteDirective } from 'src/app/drag-drop/Directives/paste/paste.directive';



@NgModule({
  declarations: [
    DropzoneDirective,
    PasteDirective,
    DragDropViewComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    DropzoneDirective,
    PasteDirective
  ]
})
export class DragDropModule { }

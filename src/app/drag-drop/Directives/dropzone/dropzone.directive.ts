import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[dropzone]'
})
export class DropzoneDirective implements OnDestroy {

  // =============================== Variables ==================================
  private drop: Observable<any>;
  private dragEnter: Observable<any>;
  private dragOver: Observable<any>;
  private dragLeave: Observable<any>;
  private ngUnsubscribe: Subject<any> = new Subject();

  // =============================== Properties =================================
  // TODO figure out if we want to emit hovered 
  @Output() public dropped = new EventEmitter<FileList>();
  @Output() public hovered = new EventEmitter<boolean>();

  // =============================== Constructor ================================
  /**
   * Will create a new instance of the DropzoneDirective
   * (1) will set up all our subscriptions!
   */
  constructor(element: ElementRef) {
    console.log('heres our element?', element);
    // let { drop, dragOver, dragLeave } = this;
    this.drop = fromEvent(element.nativeElement, 'drop');
    this.dragEnter = fromEvent(element.nativeElement, 'dragenter');
    this.dragLeave = fromEvent(element.nativeElement, 'dragleave');
    this.dragOver = fromEvent(element.nativeElement, 'dragover');

    // drop subscriber
    this.drop
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((event) => {
        console.log('something was dropped!', event, event.dataTransfer.files, JSON.stringify(event.dataTransfer));
        event.preventDefault();
        this.dropped.emit(event.dataTransfer.files);
        this.hovered.emit(false);
      });
    // dragEnter subscriber
    this.dragEnter
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((event) => {
        event.preventDefault();
        this.hovered.emit(true);
        console.log('dragEnter fired', event);
      });
    // dragOver subscriber
    this.dragOver.pipe(
      takeUntil(this.ngUnsubscribe)
    )
      .subscribe((event) => {
        event.preventDefault();
        this.hovered.emit(true);
        console.log('dragOver fired', event);
      });
    // dragLeave subscriber
    this.dragLeave
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((event) => {
        console.log('dragleave fired');
        event.preventDefault();
        this.hovered.emit(false);
      });
  }

  // =============================== Functions ================================

  /**
   * This will unsubscribe from all of our subscriptions
   */
  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

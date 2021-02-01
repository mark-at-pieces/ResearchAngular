import { Directive, ElementRef, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { Subject } from 'rxjs/internal/Subject';

@Directive({
  selector: '[paste]'
})
export class PasteDirective implements OnDestroy {
  // =============================== Variables ==================================
  private ngUnsubscribe: Subject<any> = new Subject();
  private pasteEvent: Observable<any>;

  // =============================== Properties =================================
  // will potentially be additional types here FileList | code | ...
  @Output() public pasteRegistered = new EventEmitter<any>();

  constructor(element: ElementRef) {
    this.pasteEvent = fromEvent(element.nativeElement, 'paste');
    this.pasteEvent
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((event) => {
        console.log('something was pasted into our div!!', event, JSON.stringify(event), event.clipboardData.files, event.clipboardData.items, event.clipboardData.types);
        event.preventDefault();
        this.pasteRegistered.emit(event);
      });
  }

  /**
   * This will unsubscribe from all of our subscriptions
   */
  public ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

<portal>
  <div
    class="portalPopupOverlay"
    [ngStyle]="getPopupStyle()"
    (click)="handleOverlayClick($event)"
  >
    <ng-content> </ng-content>
  </div>
</portal>

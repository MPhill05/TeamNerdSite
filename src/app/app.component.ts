import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
//    template: `
//    <!-- Container for sidebar(s) + page content -->
//    <ng-sidebar-container>
//
//      <!-- A sidebar -->
//      <ng-sidebar [(opened)]="_opened">
//        <p>Sidebar contents</p>
//      </ng-sidebar>
//
//      <!-- Page content -->
//      <div ng-sidebar-content>
//        <button (click)="_toggleSidebar()">Toggle sidebar</button>
//      </div>
//
//    </ng-sidebar-container>
//  `
})
export class AppComponent {
  title = 'app';
//    private _opened: boolean = false;
//
//  private _toggleSidebar() {
//    this._opened = !this._opened;
//  }
}
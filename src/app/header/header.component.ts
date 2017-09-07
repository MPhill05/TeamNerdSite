import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public collapseMenu = true;
    public title:string;
	public subTitle:string;
	public navToggle: boolean = false;
  constructor() { }

  ngOnInit() {
      this.title = 'Angular 2 Full-Screen';
    this.subTitle = 'menu / navigation';
	}
	
	toggleNav(){
		this.navToggle = !this.navToggle;
	}

}


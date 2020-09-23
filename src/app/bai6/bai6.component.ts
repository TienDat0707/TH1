import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bai6',
  templateUrl: './bai6.component.html',
  styleUrls: ['./bai6.component.css']
})
export class Bai6Component implements OnInit {

  constructor() { }

 
  title="Bài 6: Tính tổng các phần tử là các số dương có trong một dãy số.";
  tong=0;
  s:number;
  dayso=[-9,-8,-7,-6,-5,-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,243]
    ngOnInit(): void {
      let S=0;
        for(let i=0; i<this.dayso.length;i++){
          if(this.dayso[i]>=0){
             S+=this.dayso[i];
            };
        this.s=S;
        
    }

  
  }
  }



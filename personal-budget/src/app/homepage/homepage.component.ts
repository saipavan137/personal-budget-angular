import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { Chart } from 'chart.js';
import * as d3 from 'd3';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.scss'
})
export class HomepageComponent implements OnInit{
  public dataSource: any ={
    datasets: [
      {
          data: [],
          backgroundColor: [
              '#ffcd56',
              '#ff6384',
              '#36a2eb',
              '#fd6b19',
              '#05219F',
              '#710947',
              '#C80808',
              '#0AA7A3'

          ],
      }
  ],
  labels: []
  }
   public DataSource1: any = []
//    public svg: any;
//    public pie: any;
//    public width: number = 960;
//    public height = 450;
//    public radius = Math.min(this.width, this.height) / 2;
//  public arc: any;
//  public outerArc: any;


  constructor(private http: HttpClient){ }
  //  public key = function(d: any){ return d.label; };
  // public color = d3.scaleOrdinal(
  //   ["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"],
  // ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      console.log(res.mybudget);
      for (var i = 0; i < res.mybudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.mybudget[i].budget;
        console.log("data",this.dataSource.datasets[0].data[i]);
        this.dataSource.labels[i] = res.mybudget[i].title;
        console.log("label",this.dataSource.labels[i]);
        this.DataSource1.push({
          "label":res.mybudget[i].title,
          "value":res.mybudget[i].budget
        });
      }
    });
     this.createChart();
    //  this.createChart1();

    // console.log("DataSource1",this.DataSource1);
    //  this.change(this.DataSource1);
  }
  createChart() {

      new Chart('firstChart', {
        type: 'pie',
        data: this.dataSource
          });
}

// change(data: any) : void{
//   this.createSvg();
//   this.createPie();
//   this.createArc();
//   var slice = this.svg.select(".slices").selectAll("path.slice")
// 		.data(this.pie(data), this.key);

// 	slice.enter()
// 		.insert("path")
// 		.style("fill", function(d: any) { return d3.color(d.data.label); })
// 		.attr("class", "slice");

	// slice
	// 	.transition().duration(1000)
	// 	.attrTween("d", (d: any)=> {
	// 		this._current = this._current || d;
	// 		var interpolate = d3.interpolate(this._current, d);
	// 		this._current = interpolate(0);
	// 		return (t: any) => {
	// 			return this.arc(interpolate(t));
	// 		};
	// 	});

// 	slice.exit()
// 		.remove();

// }

// createSvg(): void{

//   this.svg = d3.select("body")
// .append("svg")
// .append("g")

// this.svg.append("g")
// .attr("class", "slices");
// this.svg.append("g")
// .attr("class", "labels");
// this.svg.append("g")
// .attr("class", "lines");
// }
// createArc(): void{
// this.arc  = d3.arc()
// 	.outerRadius(this.radius * 0.8)
// 	.innerRadius(this.radius * 0.4);

// this.outerArc = d3.arc()
// 	.innerRadius(this.radius * 0.9)
// 	.outerRadius(this.radius * 0.9);
// }

// createPie(): void{


//   this.pie = d3.pie()
// 	.sort(null)
// 	.value(function(d:any) {
// 		return d.value;
// 	});

// Component({
//   selector: 'my-donut-chart',
//   templateUrl: './donut-chart.component.html',
//   styleUrls: ['./donut-chart.component.css']
// })
// export class DonutChartComponent implements OnInit {


}



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
//   public dataSource1: any= [];
//   public svg: any;
//   public pie: any;
//   public width: number = 960;
// public  height: number = 450;
// public	radius: number = Math.min(this.width, this.height) / 2;
//   private createSvg(): void{
//     this.svg = d3.select("body")
//     .append("svg")
//     .append("g");
//     this.svg.append("g")
//     .attr("class", "slices");
//   this.svg.append("g")
//     .attr("class", "labels");
//   this.svg.append("g")
//     .attr("class", "lines");
//   this.pie = d3.layout.pie()
//       .sort(null)
//       .value(function(d) {
//         return d.value;
//       });


//   }


  constructor(private http: HttpClient){ }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      //console.log(res.mybudget);
      for (var i = 0; i < res.mybudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.mybudget[i].budget;
        console.log("data",this.dataSource.datasets[0].data[i]);
        this.dataSource.labels[i] = res.mybudget[i].title;
        console.log("label",this.dataSource.labels[i]);

        // this.dataSource1.push({
        //     "label":res.mybudget[i].title,
        //     "value":res.mybudget[i].budget
        //   });
        //   console.log("dataSource1",this.dataSource1)
    }
   this.createChart();
    // change(DataSource1);
    });
  }
  createChart() {

      new Chart('firstChart', {
        type: 'pie',
        data: this.dataSource
          });
}



// public arc = d3.svg.arc()
// 	.outerRadius(radius * 0.8)
// 	.innerRadius(radius * 0.4);

// public outerArc = d3.svg.arc()
// 	.innerRadius(radius * 0.9)
// 	.outerRadius(radius * 0.9);

// svg.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

// public key = function(d){ return d.data.label; };

// var color = d3.scale.ordinal()
// 	.domain(["Lorem ipsum", "dolor sit", "amet", "consectetur", "adipisicing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt"])
// 	.range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

// function change(data) {

// 	/* ------- PIE SLICES -------*/
// 	var slice = svg.select(".slices").selectAll("path.slice")
// 		.data(pie(data), key);

// 	slice.enter()
// 		.insert("path")
// 		.style("fill", function(d) { return color(d.data.label); })
// 		.attr("class", "slice");

// 	slice
// 		.transition().duration(1000)
// 		.attrTween("d", function(d) {
// 			this._current = this._current || d;
// 			var interpolate = d3.interpolate(this._current, d);
// 			this._current = interpolate(0);
// 			return function(t) {
// 				return arc(interpolate(t));
// 			};
// 		})

// 	slice.exit()
// 		.remove();

// 	/* ------- TEXT LABELS -------*/

// 	var text = svg.select(".labels").selectAll("text")
// 		.data(pie(data), key);

// 	text.enter()
// 		.append("text")
// 		.attr("dy", ".35em")
// 		.text(function(d) {
// 			return d.data.label;
// 		});

// 	function midAngle(d){
// 		return d.startAngle + (d.endAngle - d.startAngle)/2;
// 	}

// 	text.transition().duration(1000)
// 		.attrTween("transform", function(d) {
// 			this._current = this._current || d;
// 			var interpolate = d3.interpolate(this._current, d);
// 			this._current = interpolate(0);
// 			return function(t) {
// 				var d2 = interpolate(t);
// 				var pos = outerArc.centroid(d2);
// 				pos[0] = radius * (midAngle(d2) < Math.PI ? 1 : -1);
// 				return "translate("+ pos +")";
// 			};
// 		})
// 		.styleTween("text-anchor", function(d){
// 			this._current = this._current || d;
// 			var interpolate = d3.interpolate(this._current, d);
// 			this._current = interpolate(0);
// 			return function(t) {
// 				var d2 = interpolate(t);
// 				return midAngle(d2) < Math.PI ? "start":"end";
// 			};
// 		});

// 	text.exit()
// 		.remove();

// 	/* ------- SLICE TO TEXT POLYLINES -------*/

// 	var polyline = svg.select(".lines").selectAll("polyline")
// 		.data(pie(data), key);

// 	polyline.enter()
// 		.append("polyline");

// 	polyline.transition().duration(1000)
// 		.attrTween("points", function(d){
// 			this._current = this._current || d;
// 			var interpolate = d3.interpolate(this._current, d);
// 			this._current = interpolate(0);
// 			return function(t) {
// 				var d2 = interpolate(t);
// 				var pos = outerArc.centroid(d2);
// 				pos[0] = radius * 0.95 * (midAngle(d2) < Math.PI ? 1 : -1);
// 				return [arc.centroid(d2), outerArc.centroid(d2), pos];
// 			};
// 		});

// 	polyline.exit()
// 		.remove();
// };
}

import { Component, OnInit } from '@angular/core';
import { getJsonFromUrl } from '../../../services/getJsonFromUrl';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
import * as pluginAnnotations from 'chartjs-plugin-annotation';
import { ChartsModule } from 'ng2-charts';
import { GraphLineService } from '../../../services/graph-line.service';

@Component({
  selector: 'app-graph-cars',
  templateUrl: './graph-cars.component.html',
  styleUrls: ['./graph-cars.component.scss']
})
export class GraphCarsComponent implements OnInit {
  public resultado = '';
  public car_makeOrder;
  public data: Array<any>;
  public arr1: Array<any>;
  public arr2: Array<any>;
  public record: string;
  public page: 1;

  baseURL = "https://run.mocky.io/v3/15517ca5-7e07-4ebc-bf63-5b033ec4e16a";

  constructor(
    public _getJsonFromUrl:getJsonFromUrl,
    public _getdata:GraphLineService
  ){
    this.getData();
  }

  ngOnInit(){
    console.log(this.arr1);
  }

  public lineChartData: ChartDataSets[] = [];
  public lineChartLabels: Label[] = [];
  public arrayTotal: Array<number> = [];

  public getData(){

    this._getJsonFromUrl.jsonResult(this.baseURL).subscribe((res: any) => {
      this.resultado = JSON.stringify(res);

      var arr = res.sales.map(x => x.car_make).filter((x, index, self) => self.indexOf(x) === index);
      this.arr1=arr.sort();
      this.car_makeOrder = this.arr1;
      console.log("arr1 : "+JSON.stringify(this.arr1));
      this.arr2 = this.arr1;
      let salida = (res.sales);
      for (let marca of this.arr1){
        let mark = this.arr1.filter(arr1 => arr1.car_make == marca);
        let mayoresDeEdad = salida.filter(salida => salida.car_make == marca);
        console.log('Para ' + marca + '\n', mayoresDeEdad);
        var precio = mayoresDeEdad.map(x => x.quantity).filter((x, index, marca) => marca.indexOf(x) === index);
        let total = precio.reduce((a, b) => a + b, 0);
        console.log("sumaaaaa.... \n" + total);
        this.arrayTotal.push(total);
      }

      this.lineChartLabels = this.arr1;
      this.lineChartData = [{ data: this.arrayTotal, label: 'Ventas pore marca' }];
    });
    console.log(this.arr1);
  }


  public lineChartOptions: (ChartOptions & { annotation: any }) = {
    responsive: true,
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [{}],
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
        },
        {
          id: 'y-axis-1',
          position: 'right',
          gridLines: {
            color: 'rgba(255,0,0,0.3)',
          },
          ticks: {
            fontColor: 'red',
          }
        }
      ]
    },
    annotation: {
      annotations: [
        {
          type: 'line',
          mode: 'vertical',
          scaleID: 'x-axis-0',
          value: 'March',
          borderColor: 'orange',
          borderWidth: 2,
          label: {
            enabled: true,
            fontColor: 'orange',
            content: 'LineAnno'
          }
        },
      ],
    },
  };
  public lineChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];

  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins = [pluginAnnotations];

  /*public randomize(): void {
    for (let i = 0; i < this.lineChartData.length; i++) {
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        this.lineChartData[i].data[j] = this.generateNumber(i);
      }
    }
    this.chart.update();
  }*/

  private generateNumber(i: number): number {
    return Math.floor((Math.random() * (i < 2 ? 100 : 1000)) + 1);
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  /*public hideOne(): void {
    const isHidden = this.chart.isDatasetHidden(1);
    this.chart.hideDataset(1, !isHidden);
  }*/

  public pushOne(): void {
  //    this.getData();
/*
    this.lineChartData.forEach((x, i) => {
      const num = this.generateNumber(i);
      const data: number[] = x.data as number[];
      data.push(num);
    });
    this.lineChartLabels.push(`Label ${this.lineChartLabels.length}`);*/
  }

  public changeColor(): void {
    this.lineChartColors[2].borderColor = 'green';
    this.lineChartColors[2].backgroundColor = `rgba(0, 255, 0, 0.3)`;
  }

  public changeLabel(): void {
    this.lineChartLabels[2] = ['1st Line', '2nd Line'];
  }
}

import { Component } from '@angular/core';
import { Calculator } from './Calculator.model';

@Component({
    template : `<h1>Salary Calculator</h1>
<hr>
<section>
	<div class="field"><label for="">Basic :</label><input type="number" [(ngModel)]="calculator.basic"></div>
	<div class="field"><label for="">HRA :</label><input type="number" [(ngModel)]="calculator.hra"></div>
	<div class="field"><label for="">DA :</label><input type="number" [(ngModel)]="calculator.da"></div>
	<div class="field">
		<label for="">Tax :</label>
		<input type="range" [(ngModel)]="calculator.tax" value="0" min="0" max="30">
		<span>{{calculator.tax}}</span>
	</div>
	<div class="field"><input type="button" value="Calculate" (click)="calculator.calculate()"></div>
	<div class="field">
		<div class="salary">{{calculator.salary}}</div>
	</div>
</section>`,
    selector : 'salary-calculator'
})
export class SalaryCalculator{
    calculator : Calculator = new Calculator();
}


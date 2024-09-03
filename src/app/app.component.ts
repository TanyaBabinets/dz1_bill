
import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
	selector: 'my-app',
	standalone: true, // указывает, что компонент будет независимым, то есть для него не нужно создавать дополнительных модулей
	imports: [FormsModule],
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
//////???????/////////	я сначала писала тут, как вы говорили, но потом решила вывести в отдельные файлы css & html / как лучше ?

// template: `<div class="quotes">«Patience is a key element of success»<br>
// «If you think your teacher is tough, wait till you get a boss»<br>
// </div>
// 	<div> <img src="../assets/bill.jfif"> </div>
// 	<h2>Гейтс Билл</h2>
// 				<h4> 
// Американский предприниматель, общественный деятель, филантроп,
// один из создателей компании Microsoft. </h4><br><p> Уильям Генри Гейтс III - американский предприниматель и общественный деятель, филантроп, один из создателей (совместно с Полом Алленом) и бывший крупнейший акционер компании Microsoft. Также является сопредседателем благотворительного Фонда Билла и Мелинды Гейтс, членом совета директоров Berkshire Hathaway, генеральным директором Cascade investment.
// `,
// 	styles: [`h2, p {color:green;}`]\\
export class AppComponent {
	name = "";
}
import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'books';

	constructor() {
		// Your web app's Firebase configuration
		const firebaseConfig = {
			apiKey: "AIzaSyBM8zZZHUrjLQAcEp89YywhwNyZGId1Ngc",
			authDomain: "books-angular-cc5cd.firebaseapp.com",
			databaseURL: "https://books-angular-cc5cd.firebaseio.com",
			projectId: "books-angular-cc5cd",
			storageBucket: "books-angular-cc5cd.appspot.com",
			messagingSenderId: "567020158062",
			appId: "1:567020158062:web:8b4f44ad507e021bc9ba7f"
		};
		// Initialize Firebase
		firebase.initializeApp(firebaseConfig);
	}

}

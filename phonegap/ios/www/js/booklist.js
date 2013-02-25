var app = {
	// Application Constructor
	initialize: function() {
		console.log("inside init");
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		console.log("inside bindEvent");
		this.loadBookList();
		// document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
		loadBookList();
	},

	loadBookList: function() {
		$.getJSON("http://libr.herokuapp.com/api/books", function(data) {
			$('#bookList li').remove();
			books = data.books;
			$.each(books, function(index, book) {
				$('#bookList').append(
					'<li><a href="#">' +
					'<img src="' + book.image + '"/>' +
					'<h4>' + book.name + '</h4>' +
					'<p>Author: ' + book.isbn + '</p>' +
					'</a></li>');
				$('#bookList').listview('refresh');
			});
		});
	}
};
var app = {
	// Application Constructor
	initialize: function() {
		this.bindEvents();
	},
	// Bind Event Listeners
	//
	// Bind any events that are required on startup. Common events are:
	// 'load', 'deviceready', 'offline', and 'online'.
	bindEvents: function() {
		if(navigator.userAgent.match(/(iPhone|iPod|iPad)/)) {
        	document.addEventListener('deviceready', this.onDeviceReady, false);
        	console.log("ios userAgent");
		} else {
 		    this.loadBookList();	

		}
	},
	// deviceready Event Handler
	//
	// The scope of 'this' is the event. In order to call the 'receivedEvent'
	// function, we must explicity call 'app.receivedEvent(...);'
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},		

    receivedEvent: function(id) {
    	app.loadBookList();
    },

	loadBookList: function() {
		$.getJSON("http://libr.herokuapp.com/api/books", function(data) {
			$('#bookList li').remove();
			books = data.books;
			$.each(books, function(index, book) {
				$('#bookList').append(
					'<li><a href="#">' +
					'<img src="' + book.image + '"/>' +
					'<p>Author: ' + book.isbn + '</p>' +
					'<h4>' + book.name + '</h4>' +
					'</a></li>');
				$('#bookList').listview('refresh');
			});
		});
	}
};
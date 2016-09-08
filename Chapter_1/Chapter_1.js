$(document).ready(function() {
	var billAmount = 0,
		tip = 0,
		tipRate = 0,
		total = 0;

	var billAmount = Number(prompt("What is the bill amount?"));
	var tipRate = Number(prompt("What is the tip rate?"));
	// debugger
	// if (billAmount !== NaN){
	// 	return $('div').append("Tip: $" + tip + "<br />" + "Total: $" + total);
	// } else {
	// 	prompt("Please enter a valid number for the bill amount.");		
	// }	

	var App = {
		init: function() {
			this.tip();
			this.validate();
		},
		bindEvents: function() {
			// App.tip.bind(this);
			// App.total.bind(this);
			App.receipt.bind(this);
		},
		// prompt: function() {
		// 	billAmount = Number(prompt("What is the bill amount?"));
		// 	tipRate = Number(prompt("What is the tip rate?"));
		// 	App.tip();		
		// },
		tip: function() {
			var tip = Math.round(billAmount * tipRate) / 100;
			App.total(tip);
		},
		total: function(tip) {
			var total = billAmount + tip;
			App.receipt(tip, total);
		},
		receipt: function(tip, total) {
			$("div").html('<p>Bill Amount: $ ' + billAmount + '</p>' +
							'<p>Tip: $ ' + tip + '</p>' +
							'<p>Total: $ ' + total + '</p>');
		},
		validate: function(billAmount) {
			if (billAmount < 0){
				alert("That is not a valid bill Amount");
			}
		}
	}

	App.init();
})
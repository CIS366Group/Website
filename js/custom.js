//
//	jQuery Validate example script
//
//	Prepared by David Cochran
//
//	Free for your use -- No warranties, no guarantees!
//

$(document).ready(function(){

	// Validate
	// http://bassistance.de/jquery-plugins/jquery-plugin-validation/
	// http://docs.jquery.com/Plugins/Validation/
	// http://docs.jquery.com/Plugins/Validation/validate#toptions

	$("#contactForm").validate({
		debug: true;
		rules: {
			txtFirstName: {
				minlength: 1,
	      		required: true
	      	},
	      	txtLastName: {
	      		minlength: 1,
	        	required: true
	      	},
	      	txtEmail: {
	      		minlength: 1,
	        	email: true,
	        	required: true
	      	},
	      	txtComments: {
	        	minlength: 1,
	        	rows: 4,
	        	required: true
	      	}
	    },
		highlight: function(element) {
			$(element).closest('.control-group').removeClass('success').addClass('error');
		},
		success: function(element) {
			element.text('OK!').addClass('valid').closest('.control-group').removeClass('error').addClass('success');
		}
	  });
}); // end document.ready
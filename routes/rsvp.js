var data = {
  rsvp: ['ixd@ucsd.edu']
};

/*
 * GET tasks page.
 */
exports.adminView = function(request, response){
  response.render('rsvp', data);
};

exports.addRSVP = function(request, response) {
	var rsvpEmail = request.body.rsvpEmail;
	// This will print in your terminal when a POST is made
	console.log(rsvpEmail);

	data.rsvp.push(rsvpEmail);

	// Lets send our task name back so our browser knows it worked out!
	response.send(rsvpEmail);
}
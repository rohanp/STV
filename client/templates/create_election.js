Session.set('candidates',1);

Template.createElection.events({
	'click #addCandidate':function(e){
		e.preventDefault();
		Session.set('candidates',Session.get('candidates')+1);
	},
	'click .removeCandidate': function(e){
		e.preventDefault();
		Session.set('candidates', Session.get('candidates')-1);
	}
})

Template.createElection.helpers({
	'candidates':function(){
		blank = [];
		for(var i = 0; i < Session.get('candidates'); i++)
			blank.push(1);

		return blank;
	},
	'getNumCandidates':function(){
		return Session.get('candidates');
	}
})
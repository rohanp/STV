Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
    //waitOn: function() { return Meteor.subscribe('posts'); }
});

var loggedIn = function () { 
	if (!Meteor.user()){
		if (Meteor.loggingIn()){ 
			this.render(this.loadingTemplate);
		} else{
			this.render('join');
		}
	} else {
		this.next();
	}
}

Router.route('/',{name: 'home'});
Router.route('/create', {name: 'createElection'});

Router.onBeforeAction(loggedIn, {only: 'home'});

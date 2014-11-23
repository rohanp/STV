Router.route('/', function() {
    this.layout("layout");
    this.render("home");
}, {
    name: 'home'
});				


Router.route('/create', function() {
	name: 'create'
    this.layout("layout");
    this.render("createElection");
}, {
    name: 'create'
});

Router.onBeforeAction(function() {
    if (!Meteor.user()) {
        if (Meteor.loggingIn()) {
            this.render(this.loadingTemplate);
        } else {
        	this.layout("layout");
            this.render('join');
        }
    } else {
        this.next();
    }
}, {
    only: ['home', 'create']
});

Router.onBeforeAction(function() {
    // all properties available in the route function
    // are also available here such as this.params
    if (!Meteor.user()) {
        // if the user is not logged in, render the Login template
        this.layout('ApplicationLayout');
        this.render('signin');
    } else {
        // otherwise don't hold up the rest of hooks or our route/action function from runnning
        this.next();
    }
}, {
    except: ['signin', 'signup', 'home']
});

///////////////
//Main Routes//
///////////////
Router.route('/', function() {
    this.layout('ApplicationLayout');
    this.render('home');
}, {
    name: 'home'
});

Router.route('/createElection', function() {
    this.layout('ApplicationLayout');
    this.render('createElection');
}, {
    name: 'createElection'
});

Router.route('/elections', function() {
    this.layout('ApplicationLayout');
    this.render('elections');
}, {
    name: 'elections'
});

////////////
//Accounts//
////////////
Router.route('/signup', function() {
    if (Meteor.user()) {
        Router.go('/createElection');
    }
    this.layout('ApplicationLayout');
    this.render('signup');
}, {
    name: 'signup'
});

Router.route('/signin', function() {
    if (Meteor.user()) {
        Router.go('/createElection');
    }
    this.layout('ApplicationLayout');
    this.render('signin');
}, {
    name: 'signin'
});

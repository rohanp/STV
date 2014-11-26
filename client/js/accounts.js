Template.signin.events = {
    'click #signin': function(event) {
        event.preventDefault();
        var username = $('#email').val();
        var password = $('#password').val();
        Meteor.loginWithPassword(username, password, function(error) {
            if (error) {
                alert(error.reason + 'error');
            } else {
                Router.go('/success');
                alert('You are now logged in.');
            }
        });
    }
};
Template.signup.events({
    'click #signup': function(event, template) {
        event.preventDefault();
        var user = {
            email: $('#email').val(),
            password: $('#password').val(),
            profile: {
                firstname: $("#firstname").val(),
                lastname: $("#lastname").val()
            }
        };
        if (!user.email || !user.password || !user.profile.firstname || !user.profile.lastname) {
            alert('Please fill in all fields');
        } else {
            Accounts.createUser(user, function(error) {
                if (error) {
                    alert(error.reason + 'error');
                } else {
                    Router.go('/success');
                }
            });
        }
    },
});

Template.header.events({
    'click .logout': function() {
        Meteor.logout();
    }
});

Template.admin.helpers({
    users: function() {
        return Meteor.users.find({}, {
            sort: {
                created_at: -1
            }
        });
    },
    elections: function() {
        return Elections.find({}, {
            sort: {
                created_at: -1
            }
        });
    }
})

Template.createElection.events({
    'click .save': function() {
        var electionname = $("#name").val();
        var number = $("#number").val();
        var info = $("#info").val();

        var candidate1 = $("#candidate1").val();
        var candidate2 = $("#candidate2").val();
        var candidate3 = $("#candidate3").val();

        if (electionname && number && info) {
            if (candidate1 && candidate2 && candidate3) {
                Elections.insert({
                    created_at: new Date,
                    electionname: electionname,
                    number: number,
                    info: info,
                    candidates: {
                        candidate1: candidate1,
                        candidate2: candidate2,
                        candidate3: candidate3
                    }
                });
                alert("election created")
            } else {
                alert("Please fill out all candidates")
            }
        } else {
            alert("Please fill out all Details")
        }
    }

});

Template.elections.helpers({
    elections: function() {
        return Elections.find({}, {
            sort: {
                created_at: -1
            }
        });
    }
})

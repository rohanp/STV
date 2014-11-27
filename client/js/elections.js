var oldNum=1;

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
                Router.go("/elections")
            } else {
                alert("Please fill out all candidates")
            }
        } else {
            alert("Please fill out all Details")
        }
    },
    'change #number':function() {
        console.log('change number');
        var num = $('#number').val();
        var container = $('#candidate-container');
        var diff = num-oldNum;

        console.log(diff);
        if(diff>0){
            for(var i=oldNum; i<num; i++){
                var positionNum = parseInt(i)+1;
                console.log("position " + positionNum);
                container.append("<label class='control-label' for='title'>Position " + positionNum + "</label>\
                 <input name='title' type='text' value='' placeholder='Name your position' class='form-control candidate'/>\
                 ");
            }
        } else{
            for(var i=0; i<-diff; i++){
                $("#candidate-container input:last-child").remove();
                $("#candidate-container label:last-child").remove();
            }
        }

        oldNum = num;

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

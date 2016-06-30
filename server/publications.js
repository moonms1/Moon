//Meteor.publish("theQuizzes",
//function(){return Quizzes.find();})

Meteor.publish("theQuizzes",
function(Ques){return Quizzes.find({answer});})


//Meteor.publish("greeting",
//function(){return Settings.find({_id: this.userId});})


Meteor.publish("greeting", function() {
    return Meteor.users.find({_id: this.userId}, {fields: { emails: 1, profile: 1 } });
});

Meteor.publish("userSettings", function() {
    return UserSettings.find({userId:this.userId});
});
//Meteor.publish("theHousesBy",
//function(by){return HouseDatas.find({offeredBy:by});})


Meteor.publish("theComments",
function(){return Comments.find();})


Meteor.publish("userData", function () {
    if (this.userId) { // only if you log in can you see it
    //return Meteor.users.find({}); // everyone sees everything!
                               //{fields: {'profile': 1, 'things': 1}});
      return Meteor.users.find({_id: this.userId},
                               {fields:{profile:1,
                                        "services.google.email":1}});
    } else {
      this.ready();
    }
  });

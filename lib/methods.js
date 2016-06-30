Meteor.methods({
"showquiz": function(quizObj){
Quizzes.insert(quizObj);
},
"postcomments": function(comment){
  Comments.insert(comment);
},
"addUserSetting": function(userSettings){
UserSettings.insert(userSettings);
},

});


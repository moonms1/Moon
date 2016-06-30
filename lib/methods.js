Meteor.methods({
"showquiz": function(quizObj){
quizzes.insert(quizObj);
},
"postcomments": function(comment){
  Comments.insert(comment);
},
});


Template.showQuizzes.helpers({
	quizzes:function(){
		return Quizzes.find({})
	}
})
Template.showQuizzes.events({
	"click .js-addQuiz": function(event){
		console.log("hey you clicked the button");
		const name = $(".js-name").val();
		const content = $(".js-content").val();
		const quiz =
		{writtenBy:name,content:content};
		console.dir(quiz);
		Meteor.call("showquiz",quiz);
	}
})
Template.showQuizzes.events({
    "click .js-answer": function(){
	console.log("clicked");
    },
})

Template.showQuizzes.helpers({
	quizzes:function(){
		const qs = Quizzes.find({});
		console.dir(qs);
		return qs; //
	}
})
Template.showQuizzes.events({
	"click .js-addQuiz": function(event){
		console.log("hey you clicked the button");
		const name = $(".js-name").val();
		const gen = $(".js-gen").val();
		const dif = $(".js-dif").val();
		const a = $(".js-a").val();
		const b = $(".js-b").val();
		const c = $(".js-c").val();
		const d = $(".js-d").val();
		const quiz =
		{writtenBy:name,genre:gen,difficulty:dif};
		console.dir(quiz);
		Quizzes.insert(quiz);
	}
})
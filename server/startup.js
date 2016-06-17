Meteor.startup(function(){
	if(Quizzes.find().count()==0){
		//create these fixtures
		Quizzes.insert({writtenBy:"Moon",genre:"nonsense",difficulty:[3]});
		Quizzes.insert({writtenBy:"Moon1",genre:"math",difficulty:[1]});
		Quizzes.insert({writtenBy:"Moon2",genre:"computerscience",difficulty:[2]});
	}
})
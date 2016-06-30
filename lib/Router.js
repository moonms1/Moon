Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
Router.route('quiz1');
Router.route('comments');
Router.route('showQuizzes');
Router.route('about');
Router.route('/showAnswers/:_id',
	     {name:"showAnswers",
	      data: function(){
		  const c = Quizzes.findOne({_id:this.params._id})
		  console.dir(c);
		  return c
		  }
	      }
	    );

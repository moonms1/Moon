Template.comments.helpers({
	commentsdata: function(){return Comments.find({},{sort:{createdAt:-1},limit:30000});}
})

Template.comments.events({
	"click .js-submit-comment": 
	 function(event){
	   event.preventDefault();
	   //console.dir(event);
	   const comment_text = $(".js-user-comment").val();
	   const comment_rating = $(".js-rating-comment").val(); // type these in the chrome console to see the info
	   const comment_obj =
	   {text: comment_text,
	   	rating: comment_rating,
	    createdAt: new Date(),
	    createdBy: Meteor.userId(),
	    userEmail: Meteor.user().emails[0].address};
	    //console.dir(comment_obj);
	    //Router.go({{pathFor 'home'}});
	    Comments.insert(comment_obj); //everyone will have a collection of comment
	    $(".js-user-comment").val("");
	    //Router.go('/');
	    console.log("Did we get here?")
	},
});
Template.commentRow.events({
	"click .js-delete-comment": function(event){
		console.log("cliked on the x");
		console.dir(this);
		Comments.remove(this.comment._id);
	}
})
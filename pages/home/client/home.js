Template.home.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "bg-info",
    counter: 0,
    language1: "english"

  });
  console.log("creating the template");
  console.dir(this.state);
});


Template.home.helpers({
theColor: function(){
const instance = Template.instance();
return instance.state.get("color");
},
theCounter: function(){
const instance = Template.instance();
return instance.state.get("counter");
},

userSettings: function() {
    return UserSettings.findOne({userId:Meteor.userId()});  
  },
})


Template.home.events({

"change .js-color": function(event, instance){
const c = instance.$(".js-color").val();
instance.state.set("color",c);
},

"click .js-pusher": function(event, instance){ 
console.log("Clicked");
const p = instance.state.get("counter"); 
instance.state.set("counter", 1+p); 
},

"click .js-submit-setting": function(event){
const x = {userId: Meteor.userId(),setting:"hi"}
Meteor.call("addUserSetting",x);
},

});

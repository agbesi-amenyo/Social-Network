Template.postForm.events({
  'submit form': function(event){
    event.preventDefault();
    var content = document.getElementById('content').value;

    //call method
    Meteor.call('addPost', content);
        
    event.target.reset();
  }
});

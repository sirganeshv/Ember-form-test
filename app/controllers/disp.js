import Controller from '@ember/controller';

export default Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    select() {
      var that  = this;
      Ember.$.ajax({
        url: "/disp",
        type: "POST",
        data: {
            "Name" : this.get('Name')
        }
      }).then(function(resp){
        var data = JSON.parse(resp);
        that.set('name',data.name);
        that.set('age',data.age);
      }).catch(function(error){
        alert("Some error");
      });
    }
  }
});

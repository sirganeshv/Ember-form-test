import Controller from '@ember/controller';
//import Test from 'app/compiled/Test.class';

export default Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    select() {
      var that  = this;
      Ember.$.ajax({
        url: "/hello",
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
//self.set('model.name', data.name);
//alert(Test.returnNum());
//console.log(this.get('Name'));
//this.transitionToRoute('disp',{queryParams: {Name : this.get('Name')}});

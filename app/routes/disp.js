import Route from '@ember/routing/route';

export default Route.extend({
  setAllValues() {
    alert("set");
  },
  /*actions: {
    sendDataToRoute(data) {
      alert("Data sent to route" + data);
    }
  }
  //queryParams: 'Name',
  /*beforeModel(params){
      console.log(this.get('Name')); //if the parameter contains test as the key
      alert(this.get('Name'));
  }*/
});

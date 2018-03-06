import Route from '@ember/routing/route';

export default Route.extend({
  actions: {
    routeaction:  function(stuff) {
      alert(stuff);
    }
  }
});

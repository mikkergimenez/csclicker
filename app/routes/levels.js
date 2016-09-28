import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return [1, 2, 3, 4, 5, "Random"];
    }
});

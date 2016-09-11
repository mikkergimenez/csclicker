import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        return Array.apply(null, Array(10)).map(function (_, i) {return i + 1;});
    }
});

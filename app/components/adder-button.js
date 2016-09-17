import Ember from 'ember';

export default Ember.Component.extend({
    actions: {
        onClick() {
            this.get("addNumber")();
        }
    }
});

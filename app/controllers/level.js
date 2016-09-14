import Ember from 'ember';

export default Ember.Controller.extend({
    currentNumber: 0,
    beat: false,
    wentOver: false,
    turns: 0,

    setupController: function() {
        this.set("currentNumber", this.get("model").startNumber);
    },

    showOne: function() {
        if (this.get("model").id === 1) {
            return false;
        }
        return true;
    }.property("model.id"),


    nextLevel: function() {
        return parseInt(this.get("model").id) + 1;
    }.property("model.id"),

    addBinaryNumber: function() {
        return (this.get("model").binaryMultiplier.toString(2));
    }.property("model.binaryMultiplier"),

    addDecimalNumber: function() {
        return (this.get("model").decimalMultiplier.toString(10));
    }.property("model.decimalMultiplier"),

    addHexadecimalNumber: function() {
        return (this.get("model").hexadecimalMultiplier.toString(16));
    }.property("model.hexidecimalMultiplier"),

    tryFinish: function() {
        this.set("wentOver", false);

        this.incrementProperty("turns");
        if (this.get("currentNumber") === this.get("model").goalNumber) {
            this.set("beat", true);
        } else if (this.get("currentNumber") > this.get("model").goalNumber) {
            this.set("beat", false);
            this.set("wentOver", true);
            this.set("currentNumber", this.get("model").startNumber);
        } else {
            this.set("beat", false);
        }
    },

    actions: {
        loadNextLevel: function() {
            this.set("currentNumber", 0);
            this.set("beat", false);
            this.set("wentOver", false);
            this.set("turns", 0);
            this.transitionToRoute('level', this.get("nextLevel"));
        },

        addBinary: function() {
            console.log(this.get("model"));
            this.set("currentNumber", this.get("currentNumber") + this.get("model").binaryMultiplier);
            this.tryFinish();
        },

        addDecimal: function() {
            console.log(this.get("model"));
            this.set("currentNumber", this.get("currentNumber") + this.get("model").decimalMultiplier);
            this.tryFinish();
        },

        addHexadecimal: function() {
            console.log(this.get("model"));
            this.set("currentNumber", this.get("currentNumber") + this.get("model").hexadecimalMultiplier);
            this.tryFinish();
        }
    }



});

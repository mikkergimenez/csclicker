import Ember from 'ember';

export default Ember.Controller.extend({
    currentNumber: 0,
    beat: false,
    wentOver: false,
    turns: 0,
    binaryNumber: false,
    decimalNumber: false,
    hexadecimalNumber: false,
    maxLevel: 5,
    maxClicks: 15,

    levelTitle: function() {
        if (this.get("model")) {
            return "Level " + this.get("model").id;
        } else {
            return "Random Level";
        }
    }.property("model.id"),

    init: function() {
        this.getNewAdders();
    },

    resetController: function() {
        if (this.get("model")) {
            this.set("currentNumber", this.get("model").startNumber);
        } else {
            this.set("currentNumber", 0);
        }
    },

    showOne: function() {
        if (this.get("model") && this.get("model").id === 1) {
            return false;
        }
        return true;
    }.property("model.id"),

    goalClicks: function() {
        if (this.get("model")) {
            return this.get("model").goalClicks;
        } else {
            return 10;
        }
    },

    fewestClicks: function() {
        console.log("This took " + this.get("turns") + " But could have taken " + this.get("goalClicks"));
        return this.get("turns") <= this.get("goalClicks");
    }.property("goalClicks"),

    nextLevel: function() {
        if (this.get("model")) {
            return parseInt(this.get("model").id) + 1;
        } else {
            return this.get("maxLevel") + 1;
        }
    }.property("model.id"),

    goalNumber: function() {
        if (this.get("model")) {
            return this.get("model").goalNumber;
        } else {
            return Math.floor(Math.random() * 1000);
        }
    }.property("model.goalNumber", "beat"),

    addBinaryNumber: function() {
        if (this.get("model")) {
            this.set("binaryNumber", this.get("model").binaryMultiplier);
            // return this.get("model").binaryMultiplier.toString(2);
        }
        return this.get("binaryNumber").toString(2);
    }.property("model.binaryMultiplier", "binaryNumber"),

    addDecimalNumber: function() {
        if (this.get("model")) {
            this.set("decimalNumber", this.get("model").decimalMultiplier);
            // return (this.get("model").decimalMultiplier.toString(10));
        }
        return this.get("decimalNumber");
    }.property("model.decimalMultiplier", "decimalNumber"),

    addHexadecimalNumber: function() {
        if (this.get("model")) {
            this.set("hexadecimalNumber", this.get("model").hexadecimalMultiplier);
            // return (this.get("model").hexadecimalMultiplier.toString(16));
        }
        return this.get("hexadecimalNumber").toString(16);
    }.property("model.hexadecimalMultiplier", "hexadecimalNumber"),

    getNewAdders: function() {
        do {
            var num_clicks = 0

            var number_three = Math.floor(Math.random() * (this.get("goalNumber"))) + 100
            var number_two = Math.floor(Math.random() * (this.get("goalNumber") / 10)) + 10
            var number_one = Math.floor(Math.random() * this.get("goalNumber") / 100) + 1

            var three_numbers = [number_one, number_two, number_three]
            var threeNumbersFinal = [number_one, number_two, number_three]

            var largest = Math.max.apply(Math, three_numbers);
            var index_of_largest = three_numbers.indexOf(largest);
            if (index_of_largest > -1) {
                three_numbers.splice(index_of_largest, 1);
            }

            var secondLargest = Math.max.apply(Math, three_numbers);
            var index_of_second_largest = three_numbers.indexOf(secondLargest);
            if (index_of_second_largest > -1) {
                three_numbers.splice(index_of_second_largest, 1);
            }

            var thirdLargest = three_numbers[0]

            var workingGoalNumber = 0;
            do {
                if (workingGoalNumber + largest < this.get("goalNumber")) {
                    num_clicks += 1;
                    workingGoalNumber += largest;
                    continue
                } else if (workingGoalNumber + secondLargest < this.get("goalNumber")) {
                    num_clicks += 1;
                    workingGoalNumber += secondLargest
                    continue
                } else if (workingGoalNumber + thirdLargest < this.get("goalNumber")) {
                    num_clicks += 1;
                    workingGoalNumber += thirdLargest
                    continue
                } else {
                    num_clicks += 1;
                    workingGoalNumber += 1;
                }

            } while (workingGoalNumber < this.get("goalNumber"));

            threeNumbersFinal.sort(function() {
                return .5 - Math.random();
            });

            console.log("Your goal should be " + num_clicks);

            this.set("goalClicks", num_clicks);

        } while (num_clicks > this.get("maxClicks"));

        this.set("binaryNumber", threeNumbersFinal.pop());
        this.set("decimalNumber", threeNumbersFinal.pop());
        this.set("hexadecimalNumber", threeNumbersFinal.pop());

    },

    tryFinish: function() {
        this.set("wentOver", false);

        this.incrementProperty("turns");
        if (this.get("currentNumber") === this.get("goalNumber")) {
            this.set("beat", true);
        } else if (this.get("currentNumber") > this.get("goalNumber")) {
            this.set("beat", false);
            this.set("wentOver", true);
            this.set("currentNumber", 0);

            this.set("turns", 0);
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
            this.getNewAdders();
            if (this.get("nextLevel") > this.get("maxLevel")) {
                this.transitionToRoute('level.random');
            } else {
                this.transitionToRoute('level', this.get("nextLevel"));
            }
        },

        addOne: function() {
            this.set("currentNumber", this.get("currentNumber") + 1);
            this.tryFinish();
        },

        addBinary: function() {
            if (!this.get("beat")) {
                this.set("currentNumber", this.get("currentNumber") + this.get("binaryNumber"));
                this.tryFinish();
            }
        },

        addDecimal: function() {
            if (!this.get("beat")) {
                this.set("currentNumber", this.get("currentNumber") + this.get("decimalNumber"));
                this.tryFinish();
            }
        },

        addHexadecimal: function() {
            if (!this.get("beat")) {
                console.log("Adding Hexadecimal Number " + this.get("hexadecimalNumber"))
                this.set("currentNumber", this.get("currentNumber") + this.get("hexadecimalNumber"));
                this.tryFinish();
            }
        }
    }



});

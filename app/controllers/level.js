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
    newRandom: 0,

    levelTitle: function() {
        if (this.get("model")) {
            return "Level " + this.get("model").id;
        } else {
            return "Random Level";
        }
    }.property("model.id", "newRandom"),

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

    getGoalClicks: function() {
        if (this.get("model")) {
            console.log("Returning model.goalClicks");
            return this.get("model").goalClicks;
        } else {
            console.log("returning GoalCLicks");
            return this.get("goalClicks");
        }
    }.property("model.goalClicks", "goalClicks"),

    fewestClicks: function() {
        console.log("This took " + this.get("turns") + " But could have taken " + this.get("getGoalClicks"));
        return this.get("turns") <= this.get("getGoalClicks");
    }.property("model.goalClicks", "goalClicks"),

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
        this.incrementProperty("newRandom");
        var threeNumbersFinal;
        var num_clicks = 0;

        do {
            num_clicks = 0;
            var number_three = Math.floor(Math.random() * (this.get("goalNumber")));
            var number_two = Math.floor(Math.random() * (this.get("goalNumber") / 10));
            var number_one = Math.floor(Math.random() * this.get("goalNumber") / 100);
            if (number_one = 0) {
                number_one++;
            }
            if (number_two = 0) {
                number_two++;
            }
            if (number_three = 0) {
                number_three++;
            }
            console.log("Trying " + number_one + ", " + number_two + ", " + number_three);
            var three_numbers = [number_one, number_two, number_three];
            var threeNumbersFinal = [number_one, number_two, number_three];

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

            var thirdLargest = three_numbers[0];

            var workingGoalNumber = 0;
            console.log("Entering embedded do While Loop");
            do {
                if (workingGoalNumber + largest < this.get("goalNumber")) {
                    num_clicks += 1;
                    workingGoalNumber += largest;
                    console.log("Hitting First Continue " + workingGoalNumber + " " + largest + " " + this.get("goalNumber"));
                    continue;
                } else if (workingGoalNumber + secondLargest < this.get("goalNumber")) {
                    num_clicks += 1;
                    workingGoalNumber += secondLargest
                    console.log("Hitting Second Continue " + workingGoalNumber + " " + secondLargest + " " + this.get("goalNumber"));
                    continue;
                } else if (workingGoalNumber + thirdLargest < this.get("goalNumber")) {
                    num_clicks += 1;
                    workingGoalNumber += thirdLargest
                    console.log("Hitting Third Continue " + workingGoalNumber + " " + thirdLargest + " " + this.get("goalNumber"));
                    continue;
                } else {
                    num_clicks += 1;
                    workingGoalNumber += 1;
                }

                console.log("Checking that workingGoalNumber is less than goalNumber");
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
        console.log("Finished setting Numbers");
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
            if (this.get("nextLevel") > this.get("maxLevel")) {
                this.set("model", undefined);
                this.getNewAdders();
                this.transitionToRoute('level', "random");
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
                console.log("Adding Hexadecimal Number " + this.get("hexadecimalNumber"));
                this.set("currentNumber", this.get("currentNumber") + this.get("hexadecimalNumber"));
                this.tryFinish();
            }
        }
    }



});

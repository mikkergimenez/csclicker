import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['hard'],
    currentNumber: 0,
    beat: false,
    wentOver: false,
    turns: 0,
    binaryNumber: false,
    decimalNumber: false,
    goalSystem: "Decimal",
    hard: false,
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

    getPrintableNumber: function(number) {
        if (this.get("goalSystem") === "Binary") {
            return number.toString(2);
        }

        if (this.get("goalSystem") === "Hexadecimal") {
            return number.toString(16);
        }

        return number;
    },

    printCurrentNumber: function() {
        return this.getPrintableNumber(this.get("currentNumber"));
    }.property("currentNumber"),

    printGoalNumber: function() {
        return this.getPrintableNumber(this.get("goalNumber"));
    }.property("goalNumber"),

    goalNumber: function() {
        var goalNumber, systems;

        if (this.get("model")) {
            goalNumber = this.get("model").goalNumber;
        } else {
            goalNumber = Math.floor(Math.random() * 1000);
        }

        this.set("goalSystem", "Decimal");

        systems = ["Binary", "Decimal", "Hexadecimal"];
        if (this.get("hard")) {
            var rand_num = Math.floor(Math.random() * 3);
            if (rand_num === 3) {
                rand_num = 2;
            }
            console.log("Setting goal System because hard " + rand_num + systems[rand_num] );

            this.set("goalSystem", systems[rand_num]);
        }

        return goalNumber;

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

    noZeros: function() {

    },

    getNewAdders: function() {
        this.incrementProperty("newRandom");
        var number_one, number_two, number_three, three_numbers, threeNumbersFinal;
        var num_clicks = 0;

        do {
            num_clicks = 0;
            number_three = Math.ceil(Math.random() * (this.get("goalNumber")));
            number_two = Math.ceil(Math.random() * (this.get("goalNumber") / 10));
            number_one = Math.ceil(Math.random() * this.get("goalNumber") / 100);

            console.log("Trying " + number_one + ", " + number_two + ", " + number_three);
            three_numbers = [number_one, number_two, number_three];
            threeNumbersFinal = [number_one, number_two, number_three];

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
                    continue;
                } else if (workingGoalNumber + secondLargest < this.get("goalNumber")) {
                    num_clicks += 1;
                    workingGoalNumber += secondLargest;
                    continue;
                } else if (workingGoalNumber + thirdLargest < this.get("goalNumber")) {
                    num_clicks += 1;
                    workingGoalNumber += thirdLargest;
                    continue;
                } else {
                    num_clicks += 1;
                    workingGoalNumber += 1;
                }

                console.log("Checking that workingGoalNumber is less than goalNumber");
            } while (workingGoalNumber < this.get("goalNumber"));

            threeNumbersFinal.sort(function() {
                return 0.5 - Math.random();
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

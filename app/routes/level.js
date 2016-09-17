import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        var levels = [
            {
                id: 1,
                goalClicks: 1,
                goalNumber: 1,
                goalNumberSystem: "decimal",
                startNumber: 0,
                binaryMultiplier: 1,
                decimalMultiplier: 1,
                hexadecimalMultiplier: 1
            }, {
                id: 2,
                goalClicks: 2,
                goalNumber: 12,
                goalNumberSystem: "decimal",
                startNumber: 0,
                binaryMultiplier: 2,
                decimalMultiplier: 10,
                hexadecimalMultiplier: 16
            }, {
                id: 3,
                goalClicks: 7,
                goalNumber: 56,
                goalNumberSystem: "decimal",
                startNumber: 0,
                binaryMultiplier: 2,
                decimalMultiplier: 10,
                hexadecimalMultiplier: 16
            }, {
                id: 4,
                goalClicks: 9,
                goalNumber: 472,
                goalNumberSystem: "decimal",
                startNumber: 0,
                binaryMultiplier: 4,
                decimalMultiplier: 20,
                hexadecimalMultiplier: 128
            }, {
                id: 5,
                goalClicks: 9,
                goalNumber: 547,
                goalNumberSystem: "decimal",
                startNumber: 0,
                binaryMultiplier: 4,
                decimalMultiplier: 30,
                hexadecimalMultiplier: 160
            }
        ];
        return levels[params.level_id - 1];
    }
});

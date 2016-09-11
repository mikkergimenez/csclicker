import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        var levels = [
            {
                id: 1,
                goalNumber: 1,
                goalClicks: 1,
                startNumber: 0,
                binaryMultiplier: 1,
                decimalMultiplier: 1,
                hexadecimalMultiplier: 1
            }, {
                id: 2,
                goalNumber: 12,
                goalClicks: 2,
                startNumber: 0,
                binaryMultiplier: 2,
                decimalMultiplier: 10,
                hexadecimalMultiplier: 16
            }, {
                id: 3,
                goalNumber: 56,
                goalClicks: 1,
                startNumber: 0,
                binaryMultiplier: 2,
                decimalMultiplier: 10,
                hexadecimalMultiplier: 16
            }, {
                id: 4,
                goalNumber: 472,
                goalClicks: 1,
                startNumber: 0,
                binaryMultiplier: 2,
                decimalMultiplier: 10,
                hexadecimalMultiplier: 16
            }, {
                id: 5,
                goalNumber: 547,
                goalClicks: 1,
                startNumber: 0,
                binaryMultiplier: 1,
                decimalMultiplier: 100,
                hexadecimalMultiplier: 160
            }
        ];
        return levels[params.level_id - 1];
    }
});

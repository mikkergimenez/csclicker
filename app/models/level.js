import DS from 'ember-data';

var Level = DS.Model.extend({
    goalNumber: DS.attr('number'),
    goalClicks: DS.attr('number'),
    startNumber: DS.attr('number'),
    binaryMultiplier: DS.attr('number'),
    decimalMultiplier: DS.attr('number'),
    hexadecimalMultiplier: DS.attr('number')
});


export default Level;

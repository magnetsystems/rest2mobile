var MagnetJS = require('../../src/magnet-sdk')
    .define('../src/controllers')
    .define('../src/models');

var controller = new MagnetJS.Controllers.RestController();

controller.googleDistance({
    origins      : '435 Tasso Street Palo Alto CA',
    destinations : 'Embarcadero Street San Francisco CA',
    sensor       : 'false',
    mode         : 'driving',
    language     : 'en',
    units        : 'imperial'
}, {
    success : function(GoogleDistanceResult, details){
        console.log(JSON.stringify(GoogleDistanceResult));
    },
    error : function(error, details){
        console.log(error, details);
    }
});

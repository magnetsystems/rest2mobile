
var MagnetJS = MagnetJS || require('../src/magnet-sdk');

if(MagnetJS.Utils.isNode){
    MagnetJS
        .define('../src/controllers')
        .define('../src/models');
}

describe('RestController', function(){

    var controller = new MagnetJS.Controllers.RestController();

    describe('googleDistance', function(){

        it('should send and receive data', function(done){
            controller.googleDistance({
                origins      : '435 Tasso Street Palo Alto CA',
                destinations : 'Embarcadero Street San Francisco CA',
                sensor       : 'false',
                mode         : 'driving',
                language     : 'en',
                units        : 'imperial'
            }, {
                success : function(GoogleDistanceResult, details){
                    expect(GoogleDistanceResult.name).toEqual('GoogleDistanceResult');
                    expect(GoogleDistanceResult.isMagnetModel).toEqual(true);
                    expect(GoogleDistanceResult.attributes.status).toEqual('OK');
                    expect(GoogleDistanceResult.attributes['destination_addresses'][0]).toEqual('Embarcadero North Street, San Francisco, CA, USA');
                    expect(GoogleDistanceResult.attributes['origin_addresses'][0]).toEqual('435 Tasso Street, Palo Alto, CA 94301, USA');
                    expect(parseInt(GoogleDistanceResult.attributes.rows[0].elements[0].distance.text.replace(' mi', ''))).toBeCloseTo(34, 2);
                    done();
                },
                error : function(error, details){
                    console.log(error, details);
                    expect(error).toEqual('failed-test');
                    done();
                }
            });
        });

    });

    describe('getSportsNews', function(){

        it('should send and receive data', function(done){
            controller.getSportsNews({
                "apikey"                  : 'YOUR_API_KEY_HERE',
                "X-Mashape-Authorization" : 'YOUR_API_KEY_HERE'
            }, {
                success : function(SportsNewsResult, details){
                    expect(SportsNewsResult.name).toEqual('SportsNewsResult');
                    expect(SportsNewsResult.isMagnetModel).toEqual(true);
                    expect(SportsNewsResult.attributes.status).toEqual('success');
                    expect(SportsNewsResult.attributes.resultsCount).toBeGreaterThan(1000);
                    done();
                },
                error : function(error, details){
                    console.log(JSON.stringify(details.info.metadata.headers));
                    console.log(error, details);
                    expect(error).toEqual('failed-test');
                    done();
                }
            });
        });

    });

    describe('getMapsApiTimezoneJson', function(){

        it('should send and receive data', function(done){
            controller.getMapsApiTimezoneJson({
                "location"  : '39.6034810,-119.6822510',
                "timestamp" : '1331161200',
                sensor      : 'true'
            }, {
                success : function(MapsApiTimezoneJsonResult, details){
                    expect(MapsApiTimezoneJsonResult.name).toEqual('MapsApiTimezoneJsonResult');
                    expect(MapsApiTimezoneJsonResult.isMagnetModel).toEqual(true);
                    expect(MapsApiTimezoneJsonResult.attributes.status).toEqual('OK');
                    expect(MapsApiTimezoneJsonResult.attributes.rawOffset).toEqual(-28800);
                    expect(MapsApiTimezoneJsonResult.attributes.timeZoneId).toEqual('America/Los_Angeles');
                    done();
                },
                error : function(error, details){
                    console.log(error, details);
                    expect(error).toEqual('failed-test');
                    done();
                }
            });
        });

    });

    describe('getMovieById', function(){

        it('should send and receive data', function(done){
            controller.getMovieById({
                'api_key' : 'YOUR_API_KEY_HERE',
                'id'      : 550
            }, {
                success : function(MovieByIdResult, details){
                    expect(MovieByIdResult.name).toEqual('MovieByIdResult');
                    expect(MovieByIdResult.attributes.id).toEqual(550);
                    expect(MovieByIdResult.attributes.title).toEqual('Fight Club');
                    expect(MovieByIdResult.attributes.budget).toEqual(63000000);
                    done();
                },
                error : function(error, details){
                    console.log(error, details);
                    expect(error).toEqual('failed-test');
                    done();
                }
            });
        });

    });

    var popularMovies;

    describe('getPopularMovies', function(){

        it('should send and receive data', function(done){
            controller.getPopularMovies({
                'api_key' : 'YOUR_API_KEY_HERE'
            }, {
                success : function(PopularMoviesResult, details){
                    expect(PopularMoviesResult.name).toEqual('PopularMoviesResult');
                    expect(PopularMoviesResult.attributes.page).toEqual(1);
                    expect(PopularMoviesResult.attributes.results.length).toEqual(20);
                    expect(PopularMoviesResult.attributes['total_pages']).toBeGreaterThan(9000);
                    expect(PopularMoviesResult.attributes['total_results']).toBeGreaterThan(122820);
                    popularMovies = PopularMoviesResult.attributes.results;
                    done();
                },
                error : function(error, details){
                    console.log(error, details);
                    expect(error).toEqual('failed-test');
                    done();
                }
            });
        });

    });

});

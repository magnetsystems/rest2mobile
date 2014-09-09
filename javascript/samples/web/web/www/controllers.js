(function(exports, isNode){ var MagnetJS = isNode ? require('./magnet-sdk') : exports;

  //-------------controller definiton for RestController-------------
  /**
  * @extends MagnetJS.Controller
  * @memberof MagnetJS.Controllers
  * @constructor
  */
  MagnetJS.Controllers.RestController = function(){};
  MagnetJS.Controllers.RestController.prototype = new MagnetJS.Controller('RestController');
  MagnetJS.Controllers.RestController.prototype.constructor = MagnetJS.Controllers.RestController;

  /**
  * This callback is fired after a successful call of MagnetJS.Controllers.RestController.getMapsApiTimezoneJson.
  * @typedef {function} RestController-getMapsApiTimezoneJson
  * @param {MapsApiTimezoneJsonResult} response
  * @param {object} details An object containing details of the request, such as HTTP request, response, and status code.
  * @param {boolean} isCached True if the result came from local cache.
  */
  /**
  * @memberof MagnetJS.Controllers.RestController
  * @param {object} data The request data.
  * @param {string} [data.location]
  * @param {string} [data.timestamp]
  * @param {string} [data.sensor]
  * @param {object} options Request options.
  * @param {MagnetJS.CallOptions} [options.callOptions] A CallOptions object.
  * @param {string} [options.callOptions.saveAs] Save to a file. On a Phonegap client, this property designates a filename. On Node.js,
  * this property designates a directory path and filename. Not compatible with Web client.
  * @param {boolean} [options.callOptions.returnRaw] If enabled, return the response as raw data rather than a Model or Collection.
  * @param {RestController-getMapsApiTimezoneJson} [options.success] Success callback. See Type for return values.
  * @param {ControllerError} [options.error] Error callback. See Type for return values.
  * @returns {MagnetJS.Promise} A MagnetJS.Promise instance.
  */
  MagnetJS.Controllers.RestController.prototype.getMapsApiTimezoneJson = function(data, options){
    return MagnetJS.Method.call(this, data, options, {
      params : {
        name       : 'getMapsApiTimezoneJson',
        path       : '/maps/api/timezone/json',
        baseUrl    : 'https://maps.googleapis.com',
        method     : 'GET',
        produces   : ['application/json'],
        returnType : 'MapsApiTimezoneJsonResult'
      },
      schema : {
        "location" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }, 
        "timestamp" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }, 
        "sensor" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }
      }
    });
  };
  /**
  * This callback is fired after a successful call of MagnetJS.Controllers.RestController.getMovieById.
  * @typedef {function} RestController-getMovieById
  * @param {MovieByIdResult} response
  * @param {object} details An object containing details of the request, such as HTTP request, response, and status code.
  * @param {boolean} isCached True if the result came from local cache.
  */
  /**
  * @memberof MagnetJS.Controllers.RestController
  * @param {object} data The request data.
  * @param {string} data.id
  * @param {string} [data.api_key]
  * @param {object} options Request options.
  * @param {MagnetJS.CallOptions} [options.callOptions] A CallOptions object.
  * @param {string} [options.callOptions.saveAs] Save to a file. On a Phonegap client, this property designates a filename. On Node.js,
  * this property designates a directory path and filename. Not compatible with Web client.
  * @param {boolean} [options.callOptions.returnRaw] If enabled, return the response as raw data rather than a Model or Collection.
  * @param {RestController-getMovieById} [options.success] Success callback. See Type for return values.
  * @param {ControllerError} [options.error] Error callback. See Type for return values.
  * @returns {MagnetJS.Promise} A MagnetJS.Promise instance.
  */
  MagnetJS.Controllers.RestController.prototype.getMovieById = function(data, options){
    return MagnetJS.Method.call(this, data, options, {
      params : {
        name       : 'getMovieById',
        path       : '/3/movie/{id}',
        baseUrl    : 'http://api.themoviedb.org',
        method     : 'GET',
        consumes   : ['application/json'],
        produces   : ['application/json'],
        returnType : 'MovieByIdResult'
      },
      schema : {
        "id" : {
           style    : 'TEMPLATE',
           type     : 'string',
           optional : false
        }, 
        "api_key" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }
      }
    });
  };
  /**
  * This callback is fired after a successful call of MagnetJS.Controllers.RestController.getPopularMovies.
  * @typedef {function} RestController-getPopularMovies
  * @param {PopularMoviesResult} response
  * @param {object} details An object containing details of the request, such as HTTP request, response, and status code.
  * @param {boolean} isCached True if the result came from local cache.
  */
  /**
  * @memberof MagnetJS.Controllers.RestController
  * @param {object} data The request data.
  * @param {string} [data.api_key]
  * @param {object} options Request options.
  * @param {MagnetJS.CallOptions} [options.callOptions] A CallOptions object.
  * @param {string} [options.callOptions.saveAs] Save to a file. On a Phonegap client, this property designates a filename. On Node.js,
  * this property designates a directory path and filename. Not compatible with Web client.
  * @param {boolean} [options.callOptions.returnRaw] If enabled, return the response as raw data rather than a Model or Collection.
  * @param {RestController-getPopularMovies} [options.success] Success callback. See Type for return values.
  * @param {ControllerError} [options.error] Error callback. See Type for return values.
  * @returns {MagnetJS.Promise} A MagnetJS.Promise instance.
  */
  MagnetJS.Controllers.RestController.prototype.getPopularMovies = function(data, options){
    return MagnetJS.Method.call(this, data, options, {
      params : {
        name       : 'getPopularMovies',
        path       : '/3/movie/popular',
        baseUrl    : 'http://api.themoviedb.org',
        method     : 'GET',
        consumes   : ['application/json'],
        produces   : ['application/json'],
        returnType : 'PopularMoviesResult'
      },
      schema : {
        "api_key" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }
      }
    });
  };
  /**
  * This callback is fired after a successful call of MagnetJS.Controllers.RestController.getSportsNews.
  * @typedef {function} RestController-getSportsNews
  * @param {SportsNewsResult} response
  * @param {object} details An object containing details of the request, such as HTTP request, response, and status code.
  * @param {boolean} isCached True if the result came from local cache.
  */
  /**
  * @memberof MagnetJS.Controllers.RestController
  * @param {object} data The request data.
  * @param {string} [data.apikey]
  * @param {string} [data.X-Mashape-Authorization]
  * @param {object} options Request options.
  * @param {MagnetJS.CallOptions} [options.callOptions] A CallOptions object.
  * @param {string} [options.callOptions.saveAs] Save to a file. On a Phonegap client, this property designates a filename. On Node.js,
  * this property designates a directory path and filename. Not compatible with Web client.
  * @param {boolean} [options.callOptions.returnRaw] If enabled, return the response as raw data rather than a Model or Collection.
  * @param {RestController-getSportsNews} [options.success] Success callback. See Type for return values.
  * @param {ControllerError} [options.error] Error callback. See Type for return values.
  * @returns {MagnetJS.Promise} A MagnetJS.Promise instance.
  */
  MagnetJS.Controllers.RestController.prototype.getSportsNews = function(data, options){
    return MagnetJS.Method.call(this, data, options, {
      params : {
        name       : 'getSportsNews',
        path       : '/sports/news',
        baseUrl    : 'https://wmerydith-espn.p.mashape.com',
        method     : 'GET',
        produces   : ['application/json'],
        returnType : 'SportsNewsResult'
      },
      schema : {
        "apikey" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }, 
        "X-Mashape-Authorization" : {
           style    : 'HEADER',
           type     : 'string',
           optional : true
        }
      }
    });
  };
  /**
  * This callback is fired after a successful call of MagnetJS.Controllers.RestController.googleDistance.
  * @typedef {function} RestController-googleDistance
  * @param {GoogleDistanceResult} response
  * @param {object} details An object containing details of the request, such as HTTP request, response, and status code.
  * @param {boolean} isCached True if the result came from local cache.
  */
  /**
  * @memberof MagnetJS.Controllers.RestController
  * @param {object} data The request data.
  * @param {string} [data.origins]
  * @param {string} [data.destinations]
  * @param {string} [data.sensor]
  * @param {string} [data.mode]
  * @param {string} [data.language]
  * @param {string} [data.units]
  * @param {object} options Request options.
  * @param {MagnetJS.CallOptions} [options.callOptions] A CallOptions object.
  * @param {string} [options.callOptions.saveAs] Save to a file. On a Phonegap client, this property designates a filename. On Node.js,
  * this property designates a directory path and filename. Not compatible with Web client.
  * @param {boolean} [options.callOptions.returnRaw] If enabled, return the response as raw data rather than a Model or Collection.
  * @param {RestController-googleDistance} [options.success] Success callback. See Type for return values.
  * @param {ControllerError} [options.error] Error callback. See Type for return values.
  * @returns {MagnetJS.Promise} A MagnetJS.Promise instance.
  */
  MagnetJS.Controllers.RestController.prototype.googleDistance = function(data, options){
    return MagnetJS.Method.call(this, data, options, {
      params : {
        name       : 'googleDistance',
        path       : '/maps/api/distancematrix/json',
        baseUrl    : 'http://localhost:3009',
        method     : 'GET',
        produces   : ['application/json'],
        returnType : 'GoogleDistanceResult'
      },
      schema : {
        "origins" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }, 
        "destinations" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }, 
        "sensor" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }, 
        "mode" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }, 
        "language" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }, 
        "units" : {
           style    : 'QUERY',
           type     : 'string',
           optional : true
        }
      }
    });
  };


})(this['MagnetJS'] || exports, typeof module !== 'undefined' && module.exports && typeof window === 'undefined');
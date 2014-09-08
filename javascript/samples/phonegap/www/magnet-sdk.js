    /*!*
     * @fileoverview Magnet Mobile Server SDK for JavaScript
     *
     * @version 2.3.1-SNAPSHOT
     */

    (function(MagnetJS){

/**
 * Namespace for the Magnet Mobile Server SDK for JavaScript.
 * @namespace MagnetJS
 */

/**
 * @global
 * @desc An object containing attributes used across the MagnetJS SDK.
 * @ignore
 */
MagnetJS.Config = {
    /**
     * @property {string} endpointUrl The host for the Magnet Mobile App Server.
     */
    endpointUrl            : '',
    /**
     * @property {boolean} logging Enable display of logs during code execution for debugging purposes.
     */
    logging                : true,
    /**
     * @property {boolean} storeCredentials Enable storage of user credentials after a successful login.
     * This is required for the LoginService.loginWithSavedCredentials method, allowing the user to login automatically
     * after a restart of the app. Note that credentials are stored in plain text. The default is false.
     */
    storeCredentials       : false,
    /**
     * @property {boolean} debugMode Ignore self-signed certificates when saving files to the file system. Only applicable
     * to the Phonegap client when using FileTransfer API transport.
     */
    debugMode              : false,
    /**
     * @property {string} sdkVersion Version of the Magnet Mobile SDK for JavaScript.
     */
    sdkVersion             : '2.3.1-SNAPSHOT'
};

/**
 * A class containing general utility functions used across the MagnetJS SDK.
 * @memberof MagnetJS
 * @namespace Utils
 * @ignore
 */
if(!String.prototype.trim){
    String.prototype.trim = function(){
        return this.replace(/^\s+|\s+$/g, '');
    };
}
MagnetJS.Utils = {
    /**
     * Indicates whether the current browser is an Android device.
     */
    isAndroid : (typeof navigator !== 'undefined' && navigator.userAgent) ? /Android|webOS/i.test(navigator.userAgent) : false,
    /**
     * Indicates whether the current browser is an iOS device.
     */
    isIOS : (typeof navigator !== 'undefined' && navigator.userAgent) ? /iPhone|iPad|iPod/i.test(navigator.userAgent) : false,
    /**
     * Indicates whether the current browser is an iOS or Android device.
     */
    isMobile : (typeof navigator !== 'undefined' && navigator.userAgent) ? /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) : false,
    /**
     * Indicates whether the current client is a Node.js server.
     */
    isNode : (typeof module !== 'undefined' && module.exports && typeof window === 'undefined'),
    /**
     * Indicates whether the current client is a Cordova app.
     */
    isCordova : (typeof navigator !== 'undefined' && navigator.userAgent) &&
        (typeof window !== 'undefined' && window.location && window.location.href) &&
        (typeof cordova !== 'undefined' || typeof PhoneGap !== 'undefined' || typeof phonegap !== 'undefined') &&
        /^file:\/{3}[^\/]/i.test(window.location.href) &&
        /ios|iphone|ipod|ipad|android/i.test(navigator.userAgent),
    /**
     * Merges the attributes of the second object into the first object.
     * @param {object} obj1 The first object, into which the attributes will be merged.
     * @param {object} obj2 The second object, whose attributes will be merged into the first object.
     */
    mergeObj : function(obj1, obj2){
        var obj1 = obj1 || {};
        var obj2 = obj2 || {};
        for(var p in obj2){
            try{
                if(obj2[p].constructor == Object){
                    obj1[p] = this.mergeObj(obj1[p], obj2[p]);
                }else{
                    obj1[p] = obj2[p];
                }
            }catch(e){
                obj1[p] = obj2[p];
            }
        }
        return obj1;
    },
    /**
     * Determines whether the input is a JavaScript object.
     * @param {*} input The input to check.
     */
    isObject : function(input){
        return Object.prototype.toString.call(input) == "[object Object]";
    },
    /**
     * Determines whether the input is a JavaScript array.
     * @param {*} input The input to check.
     */
    isArray : function(input){
        return Object.prototype.toString.call(input) === '[object Array]';
    },
    /**
     * Convert the specified object into Form Data.
     * @param {string} str The input to convert.
     * @returns {string} A Form Data string.
     */
    objectToFormdata : {
        stringify : function(input){
            if(MagnetJS.Utils.isObject(input)){
                var ary = [];
                for(var key in input){
                    if(input.hasOwnProperty(key) && input[key] != null)
                        ary.push(key+'='+encodeURIComponent(input[key]));
                }
                return ary.join('&');
            }
            return '';
        }
    },
    /**
     * Get all attribute names of the given object as an array.
     * @param {object} obj The object to parse.
     */
    getAttributes : function(obj){
        var ary = [];
        obj = obj || {};
        for(var attr in obj){
            if(obj.hasOwnProperty(attr)) ary.push(attr);
        }
        return ary;
    },
    /**
     * Checks whether an object is empty.
     * @param {object} obj The object to check.
     */
    isEmptyObject : function(obj){
        if(!obj || typeof obj === 'string' || typeof obj === 'boolean' || this.isNumeric(obj)){
            return true;
        }
        if(!obj.hasOwnProperty){
            for(var i in obj){
                return false;
            }
            return true;
        }else{
            for(var i in obj){
                if(obj.hasOwnProperty(i)){
                    return false;
                }
            }
            return true;
        }
    },
    /**
     * Convert XHR and response headers into a JavaScript object.
     * @param {object} xhr The XMLHTTPRequest object to convert.
     */
    convertHeaderStrToObj : function(xhr){
        var obj = {};
        // for IE9+ and webkit browsers - faster performance
        if(Object.keys(xhr).forEach){
            Object.keys(xhr).forEach(function(prop){
                if((typeof xhr[prop] == 'string' || typeof xhr[prop] == 'number' || typeof xhr[prop] == 'boolean') && prop != 'responseText'){
                    obj[prop] = xhr[prop];
                }
            });
        }else{
            for(var prop in xhr){
                if((typeof xhr[prop] == 'string' || typeof xhr[prop] == 'number' || typeof xhr[prop] == 'boolean') && prop != 'responseText'){
                    obj[prop] = xhr[prop];
                }
            }
        }
        var ary = xhr.getAllResponseHeaders().split('\n');
        for(var i in ary){
            var prop = ary[i].trim().split(': ');
            if(prop.length > 1){
                obj[prop[0]] = prop[1];
            }
        }
        return obj;
    },
    /**
     * Determines whether the input is numeric.
     * @param {*} input The input to check.
     */
    isNumeric : function(input){
        return !isNaN(parseFloat(input)) && isFinite(input);
    },
    /**
     * Handles basic validation of object attributes based on the specified schema.
     * @param {object} schema The controller or model schema consistent with the server.
     * @param {object} attributes The current set of controller or model attributes.
     * @param {boolean} isUpdate If enabled, do not fail validation on missing required fields. Default is disabled (false).
     * @returns {object|boolean} An array of invalid property objects, or false if validation passes.
     */
    validate : function(schema, attributes, isUpdate){
        var invalid = [], obj;
        attributes = attributes || {};
        for(var attr in schema){
            if(schema.hasOwnProperty(attr)){
                obj = {
                    attribute : attr
                };
                var type = schema[attr].type;
                if(typeof schema !== 'undefined' && typeof schema[attr] !== 'undefined' && typeof schema[attr].type !== 'undefined')
                    type = type.trim();
                if(schema[attr].optional === false && (typeof attributes[attr] === 'undefined' || attributes[attr] === '')){
                    if(!isUpdate) obj.reason = 'required field blank';
                }else if(attributes[attr] && ((type == 'integer' || type == 'biginteger' || type == 'bigdecimal' || type == 'double' || type == 'long' || type == 'float' || type == 'short' || type == 'byte') && !MagnetJS.Utils.isNumeric(attributes[attr]))){
                    obj.reason = 'not numeric';
                }else if(attributes[attr] && type == 'boolean' && attributes[attr] !== 'true' && attributes[attr] !== true && attributes[attr] !== 'false' && attributes[attr] !== false){
                    obj.reason = 'not boolean';
                }else if(attributes[attr] && (type == 'java.util.List' ||  type == 'array') && (!attributes[attr] || attributes[attr].length == 0 || this.isArray(attributes[attr]) === false)){
                    obj.reason = 'empty list';
                }else if(attributes[attr] && (type == '_data' || type == 'binary') && (!attributes[attr].mimeType || !attributes[attr].val)){
                    obj.reason = 'invalid binary format';
                }
                if(obj.reason) invalid.push(obj);
            }
        }
        return invalid.length == 0 ? false : invalid;
    },
    /**
     * Determines whether the specified attribute is a primitive type.
     * @param {string} str The attribute type.
     */
    isPrimitiveType : function(str){
        return '|byte|short|int|long|float|double|boolean|char|string|integer|void|'.indexOf('|'+str+'|') != -1;
    },
    /**
     * Determines whether the specified attribute is an array type. If its type is an array, the type of data in the array is returned; otherwise returns false.
     * @param {string} str The attribute type.
     */
    getArrayType : function(str){
        return str.indexOf('[]') != -1 ? str.slice(0, -2) : false;
    },
    /**
     * Determines the data type for the specified attribute type.
     * @param {string} str The attribute type.
     */
    getDataType : function(str){
        var type;
        switch(Object.prototype.toString.call(str)){
            case '[object Number]'    : type = 'integer'; break;
            case '[object String]'    : type = 'string'; break;
            case '[object Array]'     : type = 'array'; break;
            case '[object Object]'    : type = 'object'; break;
            case '[object Date]'      : type = 'date'; break;
            case '[object Boolean]'   : type = 'boolean'; break;
        }
        return type;
    },
    /**
     * Determines whether the specified attribute is of type date.
     * @param {string} str The attribute type.
     */
    isDateType : function(str){
        return ('|date|'.indexOf('|'+str+'|') != -1) === true;
    },
    /**
     * Determines whether the specified attribute is of type binary.
     * @param {string} str The attribute type.
     */
    isBinaryType : function(str){
        return ('|binary|_data|'.indexOf('|'+str+'|') != -1) === true;
    },
    /**
     * Determines whether the specified attribute is a generic object type.
     * @param {string} str The attribute type.
     */
    isGenericObject : function(str){
        return ('|object|'.indexOf('|'+str+'|') != -1) === true;
    },
    /**
     * Determines whether the specified attribute is of type Model or Collection.
     * @param {string} str The attribute type.
     */
    isModelOrCollection : function(str){
        return (MagnetJS.Models[str] || MagnetJS.Models[this.getArrayType(str)]) ? true : false;
    },
    /**
     * Converts the specified Date object as an ISO 8601 Extended Format string. This is a shim for clients that do not support .toISOString.
     * @param {Date} date The Date object to be converted to an ISO 8601 Extended Format string.
     * @returns {string} An equivalent ISO 8601 Extended Format string.
     */
    dateToISO8601 : function(d){
        function pad(n){return n<10 ? '0'+n : n}
        return d.getUTCFullYear()+'-'
            + pad(d.getUTCMonth()+1)+'-'
            + pad(d.getUTCDate())+'T'
            + pad(d.getUTCHours())+':'
            + pad(d.getUTCMinutes())+':'
            + pad(d.getUTCSeconds())+'Z';
    },
    /**
     * Converts the specified Date string as an ISO 8601 Extended Format Date object.
     * @param {string} str An ISO 8601 Extended Format date string.
     * @returns {object} A Date object equivalent to the specified ISO 8601 Extended Format string.
     */
    ISO8601ToDate : function(str){
        if(typeof str !== 'string') return false;
        var re = /(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/;
        var d = [];
        d = str.match(re);
        if(!d){
            MagnetJS.Log("Couldn't parse ISO 8601 date string '" + str + "'");
            return false;
        }
        var a = [1,2,3,4,5,6,10,11];
        for(var i in a) d[a[i]] = parseInt(d[a[i]], 10);
        d[7] = parseFloat(d[7]);
        var ms = Date.UTC(d[1], d[2] - 1, d[3], d[4], d[5], d[6]);
        if(d[7] > 0) ms += Math.round(d[7] * 1000);
        if(d[8] != "Z" && d[10]){
            var offset = d[10] * 60 * 60 * 1000;
            if(d[11]) offset += d[11] * 60 * 1000;
            if(d[9] == "-") ms -= offset;
            else ms += offset;
        }
        return new Date(ms);
    },
    /**
     * Convert a UTF-8 string into URI-encoded base64 string.
     * @param input A UTF-8 string.
     * @returns {string} An equivalent URI-encoded base64 string.
     */
    stringToBase64 : function(input){
        return (this.isNode === true && typeof Buffer !== 'undefined') ? new Buffer(input).toString('base64') : window.btoa(unescape(encodeURIComponent(input)));
    },
    /**
     * Convert a URI-encoded base64 string into a UTF-8 string.
     * @param input A URI-encoded base64 string.
     * @returns {string} An equivalent UTF-8 string.
     */
    base64ToString : function(input){
        return (this.isNode === true && typeof Buffer !== 'undefined') ? new Buffer(input, 'base64').toString('utf8') : decodeURIComponent(escape(window.atob(input)));
    }
}

/**
 * @class A simple implementation of the Promise API. A Promise object manages state and facilitates a callback after
 * all the associated asynchronous actions of a Deferred object have completed. Multiple promises can be chained with
 * the 'then' function.
 * @constructor
 */
MagnetJS.Promise = function(){
    this.successes = [];
    this.failures = [];
};

MagnetJS.Promise.prototype = {
    successes  : null,
    failures   : null,
    status     : 'pending',
    args       : null,
    _isPromise : true,
    /**
     * Stores success and error callbacks, and calls them if the Promise status is 'resolved' or 'rejected'.
     * @param success A callback that is fired upon a 'resolved' status.
     * @param error A callback that is fired upon a 'rejected' status.
     * @returns {MagnetJS.Promise} A promise object.
     */
    then : function(success, error){
        var defer = new MagnetJS.Deferred();
        if(success)
            this.successes.push({
                fn    : success,
                defer : defer
            });
        if(error)
            this.failures.push({
                fn    : error,
                defer : defer
            });
        if(this.status === 'resolved')
            this.exec({
                fn    : success,
                defer : defer
            }, this.args);
        else if(this.status === 'rejected')
            this.exec({
                fn    : error,
                defer : defer
            }, this.args);
        return defer.promise;
    },
    /**
     * Stores a callback which is fired if the Promise is resolved.
     * @param {function} success A success callback.
     * @returns {MagnetJS.Promise}
     */
    success : function(success){
        var defer = new MagnetJS.Deferred();
        if(success)
            this.successes.push({
                fn    : success,
                defer : defer
            });
        if(this.status === 'resolved')
            this.exec({
                fn    : success,
                defer : defer
            }, this.args);
        return this;
    },
    /**
     * Stores a callback that is fired if the Promise is rejected.
     * @param {function} error The error callback to be stored.
     * @returns {MagnetJS.Promise} A promise object.
     */
    error : function(error){
        var defer = new MagnetJS.Deferred();
        if(error)
            this.failures.push({
                fn    : error,
                defer : defer
            });
        if(this.status === 'rejected')
            this.exec({
                fn    : error,
                defer : defer
            }, this.args);
        return this;
    },
    /**
     * Call and resolve a callback. If the result is a Promise object, bind a
     * new set of callbacks to the Promise object to continue the chain.
     * @param {object} obj An object containing the callback function and a Deferred object.
     * @param {*} args Arguments associated with this Promise.
     */
    exec : function(obj, args){
        setTimeout(function(){
            var res = obj.fn.apply(null, args);
            if(MagnetJS.Utils.isObject(res) && res._isPromise)
                obj.defer.bind(res);
        }, 0);
    }
};
/**
 * @class A Deferred object handles execution of resolve and reject methods, which trigger the success or error callbacks.
 * @constructor
 */
MagnetJS.Deferred = function(){
    this.promise = new MagnetJS.Promise();
};
MagnetJS.Deferred.prototype = {
    promise : null,
    /**
     * Resolve the Deferred object.
     */
    resolve : function(){
        var promise = this.promise;
        promise.args = arguments;
        promise.status = 'resolved';
        for(var i=0;i<promise.successes.length;++i)
            promise.exec(promise.successes[i], promise.args)
    },
    /**
     * Reject the Deferred object.
     */
    reject : function(){
        var promise = this.promise;
        promise.args = arguments;
        promise.status = 'rejected';
        for(var i=0;i<promise.failures.length;++i)
            promise.exec(promise.failures[i], promise.args)
    },
    /**
     * Bind a new set of callbacks to be fired upon completion of the Promise.
     */
    bind : function(promise){
        var me = this;
        promise.then(function(){
            me.resolve.apply(me, arguments);
        }, function(){
            me.reject.apply(me, arguments);
        })
    }
};
/**
 * Asynchronously execute the specified promises. On completion, return an array of success and error arguments in a 'then' function.
 * @param {MagnetJS.Promise} promises An object containing the specified promises.
 */
MagnetJS.Deferred.all = function(){
    var deferred = new MagnetJS.Deferred();
    var successes = [], failures = [], ctr = 0, total = arguments.length;
    for(var i=0;i<total;++i){
        arguments[i].call(null).then(function(){
            successes.push(arguments);
            if(++ctr == total) deferred.resolve(successes, failures);
        }, function(){
            failures.push(arguments);
            if(++ctr == total) deferred.resolve(successes, failures);
        });
    }
    return deferred.promise;
};

/**
 * A class for extending an object with an event.
 * @memberof MagnetJS
 * @namespace Events
 * @ignore
 */
MagnetJS.Events = {
    /**
     * Extends an existing object to handle events.
     * @param {object} me An instance of a MagnetJS Controller.
     * @returns {boolean} Indicates whether the event handlers were created.
     */
    create : function(me){
        if(!me._events && !me.invoke && !me.on && !me.unbind){
            me._events = {};
            me.on = function(eventId, callback){
                me._events[eventId] = me._events[eventId] || [];
                me._events[eventId].push(callback);
            };
            me.invoke = function(events){
                if(typeof events === typeof []){
                    for(var i=events.length;i--;){
                        if(me._events[events[i]]){
                            for(var j=me._events[events[i]].length;j--;){
                                me._events[events[i]][j].apply(this, [].slice.call(arguments, 1));
                            }
                        }
                    }
                }else{
                    if(me._events[events]){
                        for(var k=me._events[events].length;k--;){
                            me._events[events][k].apply(this, [].slice.call(arguments, 1));
                        }
                    }
                }
            };
            me.unbind = function(eventId){
                if(me._events[eventId]) delete me._events[eventId];
            };
            return true;
        }else{
            return false;
        }
    }
};

/**
 * A basic wrapper for console.log to control output of debugging code.
 * @memberof MagnetJS
 * @namespace Log
 * @ignore
 */
MagnetJS.Log = function(){
    if(MagnetJS.Config.logging === true)
        console.log('[MAGNET DEBUG] ', (MagnetJS.Utils.isAndroid || MagnetJS.Utils.isIOS) ? JSON.stringify(arguments) || arguments : arguments);
}

/**
 * @method
 * @desc Set MagnetJS SDK configuration attributes.
 * @param {object} obj An object containing key-value pairs to be set in the MagnetJS attributes.
 */
MagnetJS.set = function(obj){
    for(var prop in obj){
        if(obj.hasOwnProperty(prop)){
            if(prop == 'endpointUrl' && /^(ftp|http|https):/.test(obj[prop] === false))
                throw('invalid endpointUrl - no protocol');
            MagnetJS.Config[prop] = obj[prop];
        }
    }
    return this;
}

/**
 * @method
 * @desc Reset MagnetJS SDK configuration attributes to their default values.
 */
MagnetJS.reset = function(){
    MagnetJS.set({
        endpointUrl            : '',
        logging                : true
    });
    return this;
}

/**
 * @method
 * @desc Load a model or controller resource into memory. For NodeJS only.
 * @param {string} path A relative path to the entity or controller resource.
 */
MagnetJS.define = function(path){
    var resource = require(path), type = resource.Controllers ? 'Controllers' : 'Models';
    MagnetJS.Utils.mergeObj(MagnetJS[type], resource[type]);
    return this;
}

/**
 * A class containing transport functions for facilitating requests and responses between a client and a Mobile App Server.
 * @memberof MagnetJS
 * @namespace Transport
 * @ignore
 */
MagnetJS.Transport = {
    /**
     * Base request function. Determines the best available transport and calls the request.
     * @param {object} [body] The body of the request.
     * @param {object} metadata Request metadata.
     * @param {object} options Request options.
     * @param {function} [callback] Executes if the request succeeded. The success callback will be fired on a status code in the 200-207 range.
     * @param {function} [failback] Executes if the request failed.
     */
    request : function(body, metadata, options, callback, failback){
        options = options || {};
        metadata._path = metadata._path || metadata.path;
        MagnetJS.Config.endpointUrl = MagnetJS.Config.endpointUrl.toLowerCase();
        metadata._path = (metadata.local === true || /^(ftp|http|https):/.test(metadata._path) === true) ? metadata._path : MagnetJS.Config.endpointUrl+metadata._path;
        if(MagnetJS.Utils.isNode){
            this.initNodeRequest(body, metadata, options, callback, failback);
        }else if(typeof jQuery !== 'undefined' && !MagnetJS.Utils.isBinaryType(metadata.returnType) && !metadata.isBinary){
            this.requestJQuery(body, metadata, options, callback, failback);
        }else if(XMLHttpRequest !== 'undefined'){
            this.requestXHR(body, metadata, options, callback, failback);
        }else{
            throw('request-transport-unavailable');
        }
    },
    /**
     * Transport with JQuery over HTTP/SSL protocol with REST. Cross-origin requests from a web browser are currently not supported.
     * @param {object|string|number} [body] The body of the request.
     * @param {object} metadata Request metadata.
     * @param {object} options Request options.
     * @param {function} [callback] Executes if the request succeeded.
     * @param {function} [failback] Executes if the request failed.
     */
    requestJQuery : function(body, metadata, options, callback, failback){
        var me = this;
        var reqBody = me.parseBody(metadata.contentType, body);
        $.support.cors = true;
        var details = {
            body : reqBody,
            info : {
                url : metadata._path
            }
        };
        $.ajax({
            type        : metadata.method,
            url         : metadata._path,
            timeout     : 30000,
            dataType    : metadata.dataType,
            contentType : metadata.contentType,
            data        : reqBody,
            beforeSend  : function(xhr){
                if(metadata.headers){
                    for(var i=metadata.headers.length;i--;){
                        xhr.setRequestHeader(metadata.headers[i].name, metadata.headers[i].val);
                    }
                }
                xhr.setRequestHeader('Accept', me.createAcceptHeader(metadata.dataType));
            },
            success : function(data, status, xhr){
                if(typeof callback === typeof Function){
                    details.info.xhr = MagnetJS.Utils.convertHeaderStrToObj(xhr);
                    details.contentType = xhr.getResponseHeader('Content-Type');
                    details.status = xhr.status;
                    data = data.result || data;
                    callback(data, details);
                }
            },
            error : function(xhr, metadata, error){
                details.info.xhr = MagnetJS.Utils.convertHeaderStrToObj(xhr);
                details.contentType = xhr.getResponseHeader('Content-Type');
                details.status = xhr.status;
                if(metadata == 'parsererror')
                    callback(xhr.responseText, details);
                else if(typeof failback === typeof Function)
                    failback(xhr.responseText, details);
            }
        });
    },
    /**
     * Transport with XMLHttpRequest over HTTP/SSL protocol with REST. Cross-origin requests from a web browser are currently not supported.
     * @param {object|string|number} [body] The body of the request.
     * @param {object} metadata Request metadata.
     * @param {object} options Request options.
     * @param {function} [callback] Executes if the request succeeded.
     * @param {function} [failback] Executes if the request failed.
     */
    requestXHR : function(body, metadata, options, callback, failback){
        var me = this, resBody;
        var reqBody = me.parseBody(metadata.contentType, body);
        var details = {
            body : reqBody,
            info : {
                url : metadata._path
            }
        };
        var xhr = new XMLHttpRequest();
        xhr.timeout = 30000;
        if(MagnetJS.Utils.isBinaryType(metadata.returnType)) xhr.overrideMimeType('text/plain; charset=x-user-defined');
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4){
                details.status = xhr.status;
                details.contentType = xhr.getResponseHeader('Content-Type');
                details.info.xhr = MagnetJS.Utils.convertHeaderStrToObj(xhr);
                resBody = xhr.responseText;
                if(typeof xhr.responseXML !== 'undefined' && xhr.responseXML != null){
                    resBody = xhr.responseXML;
                }else{
                    try{
                        resBody = JSON.parse(resBody);
                    }catch(e){}
                }
                if(me.isSuccess(xhr.status)){
                    if(MagnetJS.Utils.isBinaryType(metadata.returnType))
                        resBody = {
                            mimeType : details.contentType,
                            val      : resBody
                        };
                    if(typeof callback === typeof Function) callback(resBody, details);
                }else{
                    if(typeof failback === typeof Function) failback(resBody, details);
                }
            }
        };
        xhr.ontimeout = function(){
            details.status = 0;
            details.contentType = xhr.getResponseHeader('Content-Type');
            details.info.xhr = MagnetJS.Utils.convertHeaderStrToObj(xhr);
            if(typeof failback === typeof Function) failback('request-timeout', details);
        };
        xhr.open(metadata.method, metadata._path, true);
        if(metadata.contentType)
            xhr.setRequestHeader('Content-Type', metadata.contentType);
        xhr.setRequestHeader('Accept', me.createAcceptHeader(metadata.dataType));
        if(metadata.headers)
            for(var i=metadata.headers.length;i--;)
                xhr.setRequestHeader(metadata.headers[i].name, metadata.headers[i].val);
        xhr.send(reqBody);
    },
    /**
     * Initialize a transport with Node.js. For NodeJS only.
     * @param {object|string|number} [body] The body of the request.
     * @param {object} metadata Request metadata.
     * @param {object} options Request options.
     * @param {function} [callback] Executes if the request succeeded.
     * @param {function} [failback] Executes if the request failed.
     */
    initNodeRequest : function(body, metadata, options, callback, failback){
        var urlParser = require('url');
        var reqObj = urlParser.parse(metadata._path);
        var headers = MagnetJS.Utils.mergeObj({
            'Content-Type'   : metadata.contentType
        }, MagnetJS.Transport.Headers);
        if(metadata.headers)
            for(var i=metadata.headers.length;i--;)
                headers[metadata.headers[i].name] = metadata.headers[i].val;
        metadata.protocol = reqObj.protocol;
        if(reqObj.hostname){
            this.requestNode(body, metadata, {
                host               : reqObj.hostname,
                port               : parseInt(reqObj.port || (reqObj.protocol == 'https:' ? 443 : null)),
                path               : reqObj.path,
                method             : metadata.method,
                rejectUnauthorized : false,
                requestCert        : false,
                headers            : headers
            }, options, callback, failback);
        }else{
            if(typeof failback === typeof Function){
                failback('error-parsing-url', {
                    body : body,
                    info : {
                        url : metadata._path
                    }
                });
            }
        }
    },
    /**
     * Transport with Node.js over HTTP/SSL protocol with REST. For NodeJS only.
     * @param {object|string|number} [body] The body of the request.
     * @param {object} metadata Request metadata.
     * @param {object} httpRequestmetadata http.request metadata.
     * @param {object} options Request options.
     * @param {function} [callback] Executes if the request succeeded.
     * @param {function} [failback] Executes if the request failed.
     */
    requestNode : function(body, metadata, httpRequestmetadata, options, callback, failback){
        var me = this, http = require('http'), https = require('https');
        var reqBody = me.parseBody(metadata.contentType, body);
        httpRequestmetadata.headers = httpRequestmetadata || {};
        httpRequestmetadata['Content-Length'] = httpRequestmetadata.method == 'GET' ? 0 : reqBody.length;
        var call = (metadata.protocol == 'https:' ? https : http).request(httpRequestmetadata, function(res){
            var resBody = '';
            var details = {
                body : reqBody,
                info : {
                    metadata : metadata,
                    url      : metadata._path,
                    request  : call,
                    response : res
                },
                contentType : res.headers['content-type'],
                status      : res.statusCode
            };
            res.setEncoding(MagnetJS.Utils.isBinaryType(metadata.returnType) ? 'binary' : 'utf8');
            res.on('data', function(chunk){
                resBody += chunk;
            });
            res.on('end', function(){
                try{
                    resBody = JSON.parse(resBody);
                }catch(e){}
                if(me.isSuccess(res.statusCode)){
                    if(MagnetJS.Utils.isBinaryType(metadata.returnType))
                        resBody = {
                            mimeType : details.contentType,
                            val      : resBody
                        };
                    if(typeof callback === typeof Function)
                        callback(resBody, details);
                }else{
                    if(typeof failback === typeof Function)
                        failback(resBody, details);
                }
            });
        });
        call.on('error', function(e){
            if(typeof failback === typeof Function){
                var details = {
                    body : body,
                    info : {
                        metadata : metadata,
                        url      : metadata._path,
                        request  : call
                    },
                    status : 0
                };
                failback(e, details);
            }
        });
        if(body) call.write(reqBody, metadata.isBinary === true ? 'binary' : 'utf8');
        call.end();
    },
    /**
     * Determines whether the status code is a success or failure.
     * @param {number} code The HTTP request status code.
     */
    isSuccess : function(code){
        return code >= 200 && code <= 299;
    },
    /**
     * Formats the body into the appropriate string type using the specified Content-Type header.
     * @param {object|string|number} type The Content-Type of the request.
     * @param {string} input The original request body.
     */
    parseBody : function(type, input){
        var QS = MagnetJS.Utils.isNode ? require('querystring') : MagnetJS.Utils.objectToFormdata;
        switch(type){
            case 'application/x-www-form-urlencoded' : input = QS.stringify(input); break;
            case 'application/json' : input = JSON.stringify(input); break;
        }
        return input;
    },
    /**
     * Create an Accept header.
     * @param {string} [dataType] The expected data type of the request.
     * @returns {string} The Accept Header string.
     */
    createAcceptHeader : function(dataType){
        var str = '';
        dataType = dataType || 'json';
        switch(dataType){
            case 'xml'  : str = 'application/xml;q=1.0'; break;
            case 'html' : str = 'text/plain;q=1.0'; break;
            case 'text' : str = 'text/plain;q=1.0'; break;
            case 'json' : str = 'application/json;q=1.0'; break;
            default     : str = '*/*;q=1.0'; break;
        }
        return str;
    }
};
MagnetJS.Transport.Headers = {};


/**
 * @constructor
 * @class Request A request instance that handles the request and response.
 * @param [instance] The object creating the request.
 * @param options The object creating the request.
 * @ignore
 */
MagnetJS.Request = function(instance, options, metadata){
    this.instance = instance;
    this.options = options;
    this.metadata = metadata;
}

/**
 * Send a request.
 * @param {function} [callback] Executes if the request succeeded.
 * @param {function} [failback] Executes if the request failed.
 */
MagnetJS.Request.prototype.send = function(callback, failback){
    var me = this;
    setTimeout(function(){
        me.metadata.params.contentType = me.metadata.params.contentType || (me.metadata.params.consumes ? me.metadata.params.consumes[0] : undefined) || 'application/json';
        var requestObj = me.setup(me.metadata.schema || {}, me.metadata.params, me.options.attributes);
        requestObj.params.headers = requestObj.params.headers || [];
        MagnetJS.Transport.request(requestObj.body, requestObj.params, me.options, function(result, details){
            me.onResponseSuccess(callback, result, details)
        }, function(e, details){
            me.onResponseError(callback, failback, e, details);
        });
    }, 1);
}

/**
 * Prepares a request for transport.
 * @param {object} schema A controller method schema object.
 * @param {object} params A request parameter object.
 * @param {object} attributes Controller method attributes, represented as a key-value pair.
 */
MagnetJS.Request.prototype.setup = function(schema, params, attributes){
    var query = '', body = {}, plains = {}, forms = {}, matrix = '', dataParam = false;
    params.dataType = params.dataType || 'json';
    params._path = params.baseUrl ? (params.baseUrl+params.path) : params.path;
    var requestData = formatRequest(attributes, undefined, undefined, schema);
    for(var attr in requestData){
        if(requestData.hasOwnProperty(attr) && schema[attr]){
            if((schema[attr].type == '_data' || schema[attr].type == 'binary') && typeof multipart == 'undefined'){
                dataParam = attr;
            }else{
                switch(schema[attr].style){
                    case 'TEMPLATE' :
                        params._path = setTemplateParam(params._path, attr, requestData[attr]);
                        break;
                    case 'QUERY' :
                        query += setQueryParam(attr, requestData[attr]);
                        break;
                    case 'PLAIN' :
                        if(this.metadata.params.method === 'DELETE' || this.metadata.params.method === 'GET'){
                            query += setQueryParam(attr, requestData[attr]);
                        }else{
                            plains[attr] = requestData[attr];
                        }
                        break;
                    case 'HEADER' :
                        params.headers = params.headers || [];
                        params.headers.push({
                            name : attr,
                            val  : requestData[attr]
                        });
                        break;
                    case 'MATRIX' :
                        params._path = setTemplateParam(params._path, attr, setMatrixParam(attr, requestData[attr]));
                        break;
                    case 'FORM' :
                        params.contentType = 'application/x-www-form-urlencoded';
                        if(this.metadata.params.method === 'DELETE' || this.metadata.params.method === 'GET')
                            query += setQueryParam(attr, requestData[attr]);
                        else
                            forms[attr] = requestData[attr];
                        break;
                }
            }
        }
    }
    var attrs = MagnetJS.Utils.getAttributes(plains);
    if(dataParam){
        params.isBinary = true;
        params.contentType = requestData[dataParam].mimeType;
        body = requestData[dataParam].val;
    }else if(MagnetJS.Utils.isEmptyObject(forms) && attrs.length == 1){
        body = plains[attrs[0]];
    }else{
        body = MagnetJS.Utils.mergeObj(plains, forms);
    }
    params._path = ((params.basePathOnly === true || params.baseUrl) ? params._path : '/rest'+params._path)+matrix+query;
    params._path = params._path.indexOf('?') == -1 ? params._path.replace('&', '?') : params._path;
    return {
        body   : body,
        params : params
    };
}

function setTemplateParam(path, attr, val){
    return path.replace('{'+attr+'}', val);
}

function setQueryParam(attr, val){
    return '&'+attr+'='+(typeof val === 'object' ? JSON.stringify(val) : val);
}

function setMatrixParam(attr, val){
    return attr+'='+(typeof val === 'object' ? JSON.stringify(val) : val);
}

/**
 * Handles response success.
 * @param {function} [callback] The success callback.
 * @param {*} result The result body.
 * @param {object} details An object containing details of the request.
 */
MagnetJS.Request.prototype.onResponseSuccess = function(callback, result, details){
    var me = this;
    me.formatResponse(result, details, function(convertedResult){
        if(me.instance) me.instance.invoke(['Complete', 'Success', 'MMSDKComplete'], me.metadata.params.name, convertedResult, details);
        if(typeof callback === typeof Function) callback(convertedResult, details);
    });
}

/**
 * Handles response error.
 * @param {function} [callback] The success callback.
 * @param {function} [failback] The error callback.
 * @param {*} error The error body.
 * @param {object} details An object containing details of the error.
 */
MagnetJS.Request.prototype.onResponseError = function(callback, failback, error, details){
    if(this.instance) this.instance.invoke(['Complete', 'Error', 'MMSDKComplete'], this.metadata.params.name, error, details);
    if(typeof failback === typeof Function) failback(error, details);
}

/**
 * Format server response data into client data objects, and handle binary data.
 * @param {*} body The response body.
 * @param {object} details The response details.
 * @param {function} callback Executes upon completion.
 */
MagnetJS.Request.prototype.formatResponse = function(body, details, callback){
    var params = this.metadata.params;
    var out = body;
    if(params.returnType == 'date'){
        callback(MagnetJS.Utils.ISO8601ToDate(body));
    }else if(this.options && this.options.saveAs && MagnetJS.Utils.isCordova === false){
        if(MagnetJS.Utils.isNode){
            require('fs').writeFile(this.options.saveAs, typeof body == 'string' ? body : JSON.stringify(body), MagnetJS.Utils.mergeObj({
                encoding : 'binary',
                mode     : 438,
                flag     : 'w'
            }, this.options.saveAsOptions), function(e){
                if(e) MagnetJS.Log(e);
                callback(out);
            });
        }else{
            MagnetJS.Log('The saveAs option is only compatible with Phonegap or Node.js applications.');
            callback(out);
        }
    }else if(MagnetJS.Utils.isModelOrCollection(params.returnType) === true){
        callback(this.jsonToModel(params.returnType, body));
    }else if(MagnetJS.Utils.isDateType(params.returnType)){
        callback(MagnetJS.Utils.ISO8601ToDate(out));
    }else if(params.returnType == 'bytearray'){
        callback(MagnetJS.Utils.base64ToString(out));
    }else{
        callback(out);
    }
}

/**
 * Convert a JSON object into a MagnetJS Model or Collection, if the data is compatible.
 * @param {*} returnType The return content type specified by the controller metadata.
 * @param {*} body The response body.
 * @param {boolean} [multipart] Indicates whether to enable to skip parsing for multipart/related data.
 * @returns {*} MagnetJS Model or Collection.
 */
MagnetJS.Request.prototype.jsonToModel = function(returnType, body, multipart){
    var modelType = getModelType(returnType);
    if(MagnetJS.Models[modelType] && returnType.indexOf('[]') != -1 && body && MagnetJS.Utils.isArray(body)){
        body = new MagnetJS.Collection(modelType, body);
    }else if(MagnetJS.Models[modelType] && MagnetJS.Utils.isArray(body)){
        for(var i=0;i<body.length;++i)
            body[i] = this.jsonToModel(modelType, body[i]);
    }else if(MagnetJS.Models[modelType] && MagnetJS.Utils.isObject(body)){
        body = new MagnetJS.Models[modelType](body);
        for(var attr in body.attributes)
            if(body.schema[attr])
                body.attributes[attr] = this.jsonToModel(getModelType(body.schema[attr].type), body.attributes[attr]);
    }else if(modelType == 'bytearray'){
        body = MagnetJS.Utils.base64ToString(body);
    }else if(MagnetJS.Utils.isDateType(modelType)){
        body = MagnetJS.Utils.ISO8601ToDate(body);
    }
    return body;
}

// get type of Model
function getModelType(type){
    return (type.indexOf('[]') != -1) ? type.replace('[]', '') : type;
}

// recursively format request data
function formatRequest(data, multipart, model, schema){
    for(var attr in data){
        if(data.hasOwnProperty(attr) && data[attr]){
            if(typeof schema !== 'undefined' && typeof schema[attr] !== 'undefined')
                schema[attr].type = schema[attr].type.trim();
            if(data[attr].isMagnetModel && data[attr].attributes){
                data[attr] = formatRequest(data[attr].attributes, multipart, data[attr]);
            }else if(MagnetJS.Utils.isArray(data[attr])){
                data[attr] = formatRequest(data[attr], multipart);
            }else if(typeof schema !== 'undefined' && schema[attr] && MagnetJS.Utils.isDateType(schema[attr].type)){
                data[attr] = typeof data[attr] === 'string' ? data[attr] : MagnetJS.Utils.dateToISO8601(data[attr]);
            }else if(typeof schema !== 'undefined' && schema[attr] && schema[attr].type == 'bytearray'){
                data[attr] = MagnetJS.Utils.stringToBase64(data[attr]);
            }else if(multipart && typeof model != 'undefined' && model.schema[attr] && (model.schema[attr].type == '_data' || model.schema[attr].type == 'binary')){
                data[attr] = multipart.add(data[attr].mimeType, data[attr].val);
            }
        }
    }
    return data;
}
/**
 * @constructor
 * @memberof MagnetJS
 * @class Model is a client representation of a Mobile App Server Bean. It stores data and performs attribute validations.
 * @param {object} attributes A key-value pair of attributes to be assigned to this Model.
 * @param {boolean} [doValidate] If enabled, validate attributes before set. Disabled by default.
 */
MagnetJS.Model = function(attributes, doValidate){
    MagnetJS.Events.create(this);
    this.attributes = this.attributes || {};
    for(var attr in this.attributes)
        if(this.attributes[attr] === null) delete this.attributes[attr];
//    if(this.entityType) this.attributes['magnet-type'] = this.entityType;
    if(attributes) this.set(attributes, doValidate);
    this.isMagnetModel = true;
    return this;
};

/**
 * Handles basic validation of Model attributes based on schema.
 * @param {object} attributes The attributes to validate.
 * @param {boolean} [isUpdate] If enabled, do not fail validation on missing required fields. Disabled by default.
 */
MagnetJS.Model.prototype.validate = function(attributes, isUpdate){
    return MagnetJS.Utils.validate(this.schema, attributes, isUpdate);
};

/**
 * Set the Model attributes, and optionally perform validation beforehand.
 * @param {object} attributes The attributes to set.
 * @param {boolean} [doValidate] If enabled, validate the attributes before setting. Disabled by default.
 */
MagnetJS.Model.prototype.set = function(attributes, doValidate){
    if(doValidate){
        var invalid = this.validate(attributes);
        if(invalid === false){
            this.attributes = MagnetJS.Utils.mergeObj(this.attributes, attributes);
            this.invoke('onSet', this.name, attributes);
        }else{
            MagnetJS.Log('model "'+this.name+'" validation failure:' + JSON.stringify(invalid));
        }
        return (!invalid ? false : invalid);
    }else{
        this.attributes = MagnetJS.Utils.mergeObj(this.attributes, attributes);
        this.invoke('onSet', this.name, attributes);
        return false;
    }
};

/**
 * @constructor
 * @class Collection is a group of Models. It stores a collection of models and performs batch property validation.
 * @param {string} type The Model type.
 * @param {Model|Model[]|object[]} [models] A Model, array of Models objects, or array of key-value pairs to include in the Collection.
 */
MagnetJS.Collection = function(type, models){
    this._type = type;
    this.entityType = MagnetJS.Models[this._type] ? MagnetJS.Models[this._type].entityType : type;
    this.models = [];
    if(models) this.add(models);
    this.isMagnetCollection = true;
    return this;
};

/**
 * Add Model(s) to the Collection.
 * @param {Model|Model[]|object[]} input A Model, array of Models objects, or array of key-value pairs to include in the Collection.
 */
MagnetJS.Collection.prototype.add = function(input){
    if(MagnetJS.Utils.isArray(input)){
        for(var i=0;i<input.length;++i){
//            if(!input[i].isMagnetModel && this.entityType) input[i]['magnet-type'] = this.entityType;
            this.models.push(input[i].isMagnetModel ? input[i] : new MagnetJS.Models[this._type](input[i]));
        }
    }else{
//        if(!input.isMagnetModel && this.entityType) input['magnet-type'] = this.entityType;
        this.models.push(input.isMagnetModel ? input : new MagnetJS.Models[this._type](input));
    }
};

/**
 * Clear all Models from the Collection.
 */
MagnetJS.Collection.prototype.clear = function(){
    this.models = [];
};

/**
 * Retrieve an array of Model objects with attribute matching the specified query.
 * @param {string|object} attributes An object of key-value pairs or an attribute name to match.
 * @param {*} value The attribute to search by.
 */
MagnetJS.Collection.prototype.where = function(attributes, value){
    var out = [];
    for(var i=0;i<this.models.length;++i){
        if(MagnetJS.Utils.isObject(attributes)){
            var match = true;
            for(var attr in attributes){
                if(attributes.hasOwnProperty(attr))
                    if(!this.models[i].attributes[attr] || this.models[i].attributes[attr] !== attributes[attr]) match = false;
            }
            if(match) out.push(this.models[i]);
        }else{
            if(value && this.models[i].attributes[attributes] === value) out.push(this.models[i]);
        }
    }
    return out;
};

/**
 * A library of MagnetJS.Model objects generated with the Magnet Mobile App Builder.
 * @namespace MagnetJS.Models
 */
MagnetJS.Models = {};
/**
 * @constructor
 * @memberof MagnetJS
 * @class Controller is an object containing a collection of Methods used to manage and simplify interaction with a Mobile App Server controller.
 * @param {string} [name] An identifier for the controller instance. If not specified, a default value will be used.
 */
MagnetJS.Controller = function(name){
    this._MMSDKName = name;
    MagnetJS.Events.create(this);
    return this;
}

/**
 * @class Method is an object within a Controller used to manage and simplify interaction with a particular
 * method of a Mobile App Server controller. It will handle basic validation of controller method attributes
 * based on schema.
 * @param {*} [data] Request data.
 * @param {object} [options] Request options.
 * @param metadata Request metadata.
 * @param {function} [options.success] Callback to fire after a successful request.
 * @param {function} [options.error] Callback to fire after a failed request.
 * @returns {MagnetJS.Promise} A Promise instance.
 */
MagnetJS.Method = function(data, options, metadata){
    var me = this;
    options = options || {};
    options.attributes = (typeof data === 'undefined' || data === null) ? undefined : data;
    options.attributes = MagnetJS.Utils.mergeObj(options.attributes, metadata.attributes);
    var invalid = MagnetJS.Utils.validate(metadata.schema, options.attributes);
    var deferred = new MagnetJS.Deferred();
    deferred.promise = new MagnetJS.Promise();
    options.call = deferred.promise;
    metadata.params.controller = me._MMSDKName;
    if(invalid === false){
        me.invoke(['Set'], metadata.params.name, options, metadata);
        var request = new MagnetJS.Request(me, options, metadata);
        me.invoke(['BeforeRequest'], metadata.params.name, options, metadata);
        request.send(function(){
            if(typeof options.success === typeof Function) options.success.apply(me, arguments);
            deferred.resolve.apply(deferred, arguments);
        }, function(){
            if(typeof options.error === typeof Function) options.error.apply(me, arguments);
            deferred.reject.apply(deferred, arguments);
        });
    }else{
        me.invoke(['Complete', 'Error'], metadata.params.name, 'failed-validation', invalid);
        MagnetJS.Log('controller method "'+metadata.params.name+'" validation failure:' + JSON.stringify(invalid));
        if(typeof options.error === typeof Function) options.error('failed-validation', invalid);
        deferred.reject('failed-validation', invalid);
    }
    return deferred.promise;
}

/**
 * A library of MagnetJS.Controller objects generated with the Magnet Mobile App Builder.
 * @namespace MagnetJS.Controllers
 */
MagnetJS.Controllers = {};

/**
 * This callback is fired on a failed controller call.
 * @typedef {function} ControllerError
 * @param {*} error The error response body, or an error message.
 * @param {object} details An object containing details of the request, such as HTTP request, response, and status code.
 */

/**
 * This callback is fired on a successful controller call.
 * @typedef {function} ControllerSuccess
 * @param {*} data The success response body.
 * @param {object} details An object containing details of the request, such as HTTP request, response, and status code.
 */
/**
 * Third party plugins.
 */

/*!
 *  window.btoa/window.atob shim
 */
(function(){function t(t){this.message=t}var e="undefined"!=typeof exports?exports:this,r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";t.prototype=Error(),t.prototype.name="InvalidCharacterError",e.btoa||(e.btoa=function(e){for(var o,n,a=0,i=r,c="";e.charAt(0|a)||(i="=",a%1);c+=i.charAt(63&o>>8-8*(a%1))){if(n=e.charCodeAt(a+=.75),n>255)throw new t("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");o=o<<8|n}return c}),e.atob||(e.atob=function(e){if(e=e.replace(/=+$/,""),1==e.length%4)throw new t("'atob' failed: The string to be decoded is not correctly encoded.");for(var o,n,a=0,i=0,c="";n=e.charAt(i++);~n&&(o=a%4?64*o+n:n,a++%4)?c+=String.fromCharCode(255&o>>(6&-2*a)):0)n=r.indexOf(n);return c})})();

})(typeof exports === 'undefined' ? this['MagnetJS'] || (this['MagnetJS']={}) : exports);
(function(exports, isNode){ var MagnetJS = isNode ? require('./magnet-sdk') : exports;

  //-------------model definiton for AddMovieToListRequest-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.AddMovieToListRequest = function(){
    this.name = 'AddMovieToListRequest';
    this.entityType = 'AddMovieToListRequest';

    this.schema = {
      'Media_id' : {
        type     : 'integer',
        optional : true
      }
    };
    /**
    * @property {integer} [Media_id]
    **/
    this.attributes = {
      'Media_id'                      : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.AddMovieToListRequest.prototype = new MagnetJS.Model();
  MagnetJS.Models.AddMovieToListRequest.prototype.constructor = MagnetJS.Models.AddMovieToListRequest;

  //-------------model definiton for AddMovieToListResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.AddMovieToListResult = function(){
    this.name = 'AddMovieToListResult';
    this.entityType = 'AddMovieToListResult';

    this.schema = {
      'Status_code' : {
        type     : 'integer',
        optional : true
      }, 
      'Status_message' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {integer} [Status_code]
    * @property {string} [Status_message]
    **/
    this.attributes = {
      'Status_code'                   : null, 
      'Status_message'                : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.AddMovieToListResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.AddMovieToListResult.prototype.constructor = MagnetJS.Models.AddMovieToListResult;

  //-------------model definiton for Api-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Api = function(){
    this.name = 'Api';
    this.entityType = 'Api';

    this.schema = {
      'Athletes' : {
        type     : 'object',
        optional : true
      }, 
      'Events' : {
        type     : 'object',
        optional : true
      }, 
      'Leagues' : {
        type     : 'object',
        optional : true
      }, 
      'News' : {
        type     : 'object',
        optional : true
      }, 
      'Teams' : {
        type     : 'object',
        optional : true
      }
    };
    /**
    * @property {object} [Athletes]
    * @property {object} [Events]
    * @property {object} [Leagues]
    * @property {object} [News]
    * @property {object} [Teams]
    **/
    this.attributes = {
      'Athletes'                      : null, 
      'Events'                        : null, 
      'Leagues'                       : null, 
      'News'                          : null, 
      'Teams'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Api.prototype = new MagnetJS.Model();
  MagnetJS.Models.Api.prototype.constructor = MagnetJS.Models.Api;

  //-------------model definiton for Athlete-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Athlete = function(){
    this.name = 'Athlete';
    this.entityType = 'Athlete';

    this.schema = {
      'Description' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Links' : {
        type     : 'object',
        optional : true
      }
    };
    /**
    * @property {string} [Description]
    * @property {integer} [Id]
    * @property {object} [Links]
    **/
    this.attributes = {
      'Description'                   : null, 
      'Id'                            : null, 
      'Links'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Athlete.prototype = new MagnetJS.Model();
  MagnetJS.Models.Athlete.prototype.constructor = MagnetJS.Models.Athlete;

  //-------------model definiton for Athletes-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Athletes = function(){
    this.name = 'Athletes';
    this.entityType = 'Athletes';

    this.schema = {
      'Href' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Href]
    **/
    this.attributes = {
      'Href'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Athletes.prototype = new MagnetJS.Model();
  MagnetJS.Models.Athletes.prototype.constructor = MagnetJS.Models.Athletes;

  //-------------model definiton for Category-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Category = function(){
    this.name = 'Category';
    this.entityType = 'Category';

    this.schema = {
      'Athlete' : {
        type     : 'object',
        optional : true
      }, 
      'AthleteId' : {
        type     : 'integer',
        optional : true
      }, 
      'Description' : {
        type     : 'string',
        optional : true
      }, 
      'League' : {
        type     : 'object',
        optional : true
      }, 
      'LeagueId' : {
        type     : 'integer',
        optional : true
      }, 
      'SportId' : {
        type     : 'integer',
        optional : true
      }, 
      'Team' : {
        type     : 'object',
        optional : true
      }, 
      'TeamId' : {
        type     : 'integer',
        optional : true
      }, 
      'TopicId' : {
        type     : 'integer',
        optional : true
      }, 
      'Type' : {
        type     : 'string',
        optional : true
      }, 
      'Uid' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {object} [Athlete]
    * @property {integer} [AthleteId]
    * @property {string} [Description]
    * @property {object} [League]
    * @property {integer} [LeagueId]
    * @property {integer} [SportId]
    * @property {object} [Team]
    * @property {integer} [TeamId]
    * @property {integer} [TopicId]
    * @property {string} [Type]
    * @property {string} [Uid]
    **/
    this.attributes = {
      'Athlete'                       : null, 
      'AthleteId'                     : null, 
      'Description'                   : null, 
      'League'                        : null, 
      'LeagueId'                      : null, 
      'SportId'                       : null, 
      'Team'                          : null, 
      'TeamId'                        : null, 
      'TopicId'                       : null, 
      'Type'                          : null, 
      'Uid'                           : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Category.prototype = new MagnetJS.Model();
  MagnetJS.Models.Category.prototype.constructor = MagnetJS.Models.Category;

  //-------------model definiton for CreateMovieListRequest-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.CreateMovieListRequest = function(){
    this.name = 'CreateMovieListRequest';
    this.entityType = 'CreateMovieListRequest';

    this.schema = {
      'description' : {
        type     : 'string',
        optional : true
      }, 
      'name' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Description]
    * @property {string} [Name]
    **/
    this.attributes = {
      'Description'                   : null, 
      'Name'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.CreateMovieListRequest.prototype = new MagnetJS.Model();
  MagnetJS.Models.CreateMovieListRequest.prototype.constructor = MagnetJS.Models.CreateMovieListRequest;

  //-------------model definiton for CreateMovieListResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.CreateMovieListResult = function(){
    this.name = 'CreateMovieListResult';
    this.entityType = 'CreateMovieListResult';

    this.schema = {
      'List_id' : {
        type     : 'string',
        optional : true
      }, 
      'Status_code' : {
        type     : 'integer',
        optional : true
      }, 
      'Status_message' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [List_id]
    * @property {integer} [Status_code]
    * @property {string} [Status_message]
    **/
    this.attributes = {
      'List_id'                       : null, 
      'Status_code'                   : null, 
      'Status_message'                : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.CreateMovieListResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.CreateMovieListResult.prototype.constructor = MagnetJS.Models.CreateMovieListResult;

  //-------------model definiton for CreateUserRequest-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.CreateUserRequest = function(){
    this.name = 'CreateUserRequest';
    this.entityType = 'CreateUserRequest';

    this.schema = {
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'PrimaryEmailAddress' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {integer} [Id]
    * @property {string} [PrimaryEmailAddress]
    **/
    this.attributes = {
      'Id'                            : null, 
      'PrimaryEmailAddress'           : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.CreateUserRequest.prototype = new MagnetJS.Model();
  MagnetJS.Models.CreateUserRequest.prototype.constructor = MagnetJS.Models.CreateUserRequest;

  //-------------model definiton for CreateUserResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.CreateUserResult = function(){
    this.name = 'CreateUserResult';
    this.entityType = 'CreateUserResult';

    this.schema = {
      'AppId' : {
        type     : 'string',
        optional : true
      }, 
      'CreatedTime' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'PrimaryEmailAddress' : {
        type     : 'string',
        optional : true
      }, 
      'UpdatedTime' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [AppId]
    * @property {string} [CreatedTime]
    * @property {integer} [Id]
    * @property {string} [PrimaryEmailAddress]
    * @property {string} [UpdatedTime]
    **/
    this.attributes = {
      'AppId'                         : null, 
      'CreatedTime'                   : null, 
      'Id'                            : null, 
      'PrimaryEmailAddress'           : null, 
      'UpdatedTime'                   : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.CreateUserResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.CreateUserResult.prototype.constructor = MagnetJS.Models.CreateUserResult;

  //-------------model definiton for Distance-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Distance = function(){
    this.name = 'Distance';
    this.entityType = 'Distance';

    this.schema = {
      'Text' : {
        type     : 'string',
        optional : true
      }, 
      'Value' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Text]
    * @property {string} [Value]
    **/
    this.attributes = {
      'Text'                          : null, 
      'Value'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Distance.prototype = new MagnetJS.Model();
  MagnetJS.Models.Distance.prototype.constructor = MagnetJS.Models.Distance;

  //-------------model definiton for Duration-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Duration = function(){
    this.name = 'Duration';
    this.entityType = 'Duration';

    this.schema = {
      'Text' : {
        type     : 'string',
        optional : true
      }, 
      'Value' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Text]
    * @property {string} [Value]
    **/
    this.attributes = {
      'Text'                          : null, 
      'Value'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Duration.prototype = new MagnetJS.Model();
  MagnetJS.Models.Duration.prototype.constructor = MagnetJS.Models.Duration;

  //-------------model definiton for Element-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Element = function(){
    this.name = 'Element';
    this.entityType = 'Element';

    this.schema = {
      'Distance' : {
        type     : 'object',
        optional : true
      }, 
      'Duration' : {
        type     : 'object',
        optional : true
      }, 
      'Status' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {object} [Distance]
    * @property {object} [Duration]
    * @property {string} [Status]
    **/
    this.attributes = {
      'Distance'                      : null, 
      'Duration'                      : null, 
      'Status'                        : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Element.prototype = new MagnetJS.Model();
  MagnetJS.Models.Element.prototype.constructor = MagnetJS.Models.Element;

  //-------------model definiton for Events-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Events = function(){
    this.name = 'Events';
    this.entityType = 'Events';

    this.schema = {
      'Href' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Href]
    **/
    this.attributes = {
      'Href'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Events.prototype = new MagnetJS.Model();
  MagnetJS.Models.Events.prototype.constructor = MagnetJS.Models.Events;

  //-------------model definiton for Genre-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Genre = function(){
    this.name = 'Genre';
    this.entityType = 'Genre';

    this.schema = {
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Name' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {integer} [Id]
    * @property {string} [Name]
    **/
    this.attributes = {
      'Id'                            : null, 
      'Name'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Genre.prototype = new MagnetJS.Model();
  MagnetJS.Models.Genre.prototype.constructor = MagnetJS.Models.Genre;

  //-------------model definiton for GoogleDistanceResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.GoogleDistanceResult = function(){
    this.name = 'GoogleDistanceResult';
    this.entityType = 'GoogleDistanceResult';

    this.schema = {
      'Destination_addresses' : {
        type     : 'string[]',
        optional : true
      }, 
      'Origin_addresses' : {
        type     : 'string[]',
        optional : true
      }, 
      'Rows' : {
        type     : 'object[]',
        optional : true
      }, 
      'Status' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Destination_addresses]
    * @property {string} [Origin_addresses]
    * @property {object} [Rows]
    * @property {string} [Status]
    **/
    this.attributes = {
      'Destination_addresses'         : null, 
      'Origin_addresses'              : null, 
      'Rows'                          : null, 
      'Status'                        : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.GoogleDistanceResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.GoogleDistanceResult.prototype.constructor = MagnetJS.Models.GoogleDistanceResult;

  //-------------model definiton for Headline-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Headline = function(){
    this.name = 'Headline';
    this.entityType = 'Headline';

    this.schema = {
      'Byline' : {
        type     : 'string',
        optional : true
      }, 
      'Categories' : {
        type     : 'object[]',
        optional : true
      }, 
      'Description' : {
        type     : 'string',
        optional : true
      }, 
      'GameId' : {
        type     : 'string',
        optional : true
      }, 
      'Headline' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Images' : {
        type     : 'object[]',
        optional : true
      }, 
      'Keywords' : {
        type     : 'string[]',
        optional : true
      }, 
      'LastModified' : {
        type     : 'string',
        optional : true
      }, 
      'Links' : {
        type     : 'object',
        optional : true
      }, 
      'LinkText' : {
        type     : 'string',
        optional : true
      }, 
      'MobileStory' : {
        type     : 'string',
        optional : true
      }, 
      'Premium' : {
        type     : 'boolean',
        optional : true
      }, 
      'Published' : {
        type     : 'string',
        optional : true
      }, 
      'Related' : {
        type     : 'object[]',
        optional : true
      }, 
      'ShortLinkText' : {
        type     : 'string',
        optional : true
      }, 
      'Source' : {
        type     : 'string',
        optional : true
      }, 
      'Story' : {
        type     : 'string',
        optional : true
      }, 
      'Title' : {
        type     : 'string',
        optional : true
      }, 
      'Type' : {
        type     : 'string',
        optional : true
      }, 
      'Video' : {
        type     : 'object[]',
        optional : true
      }
    };
    /**
    * @property {string} [Byline]
    * @property {object} [Categories]
    * @property {string} [Description]
    * @property {string} [GameId]
    * @property {string} [Headline]
    * @property {integer} [Id]
    * @property {object} [Images]
    * @property {string} [Keywords]
    * @property {string} [LastModified]
    * @property {object} [Links]
    * @property {string} [LinkText]
    * @property {string} [MobileStory]
    * @property {boolean} [Premium]
    * @property {string} [Published]
    * @property {object} [Related]
    * @property {string} [ShortLinkText]
    * @property {string} [Source]
    * @property {string} [Story]
    * @property {string} [Title]
    * @property {string} [Type]
    * @property {object} [Video]
    **/
    this.attributes = {
      'Byline'                        : null, 
      'Categories'                    : null, 
      'Description'                   : null, 
      'GameId'                        : null, 
      'Headline'                      : null, 
      'Id'                            : null, 
      'Images'                        : null, 
      'Keywords'                      : null, 
      'LastModified'                  : null, 
      'Links'                         : null, 
      'LinkText'                      : null, 
      'MobileStory'                   : null, 
      'Premium'                       : null, 
      'Published'                     : null, 
      'Related'                       : null, 
      'ShortLinkText'                 : null, 
      'Source'                        : null, 
      'Story'                         : null, 
      'Title'                         : null, 
      'Type'                          : null, 
      'Video'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Headline.prototype = new MagnetJS.Model();
  MagnetJS.Models.Headline.prototype.constructor = MagnetJS.Models.Headline;

  //-------------model definiton for Image-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Image = function(){
    this.name = 'Image';
    this.entityType = 'Image';

    this.schema = {
      'Alt' : {
        type     : 'string',
        optional : true
      }, 
      'Caption' : {
        type     : 'string',
        optional : true
      }, 
      'Credit' : {
        type     : 'string',
        optional : true
      }, 
      'Height' : {
        type     : 'integer',
        optional : true
      }, 
      'Name' : {
        type     : 'string',
        optional : true
      }, 
      'Type' : {
        type     : 'string',
        optional : true
      }, 
      'Url' : {
        type     : 'string',
        optional : true
      }, 
      'Width' : {
        type     : 'integer',
        optional : true
      }
    };
    /**
    * @property {string} [Alt]
    * @property {string} [Caption]
    * @property {string} [Credit]
    * @property {integer} [Height]
    * @property {string} [Name]
    * @property {string} [Type]
    * @property {string} [Url]
    * @property {integer} [Width]
    **/
    this.attributes = {
      'Alt'                           : null, 
      'Caption'                       : null, 
      'Credit'                        : null, 
      'Height'                        : null, 
      'Name'                          : null, 
      'Type'                          : null, 
      'Url'                           : null, 
      'Width'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Image.prototype = new MagnetJS.Model();
  MagnetJS.Models.Image.prototype.constructor = MagnetJS.Models.Image;

  //-------------model definiton for League-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.League = function(){
    this.name = 'League';
    this.entityType = 'League';

    this.schema = {
      'Description' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Links' : {
        type     : 'object',
        optional : true
      }
    };
    /**
    * @property {string} [Description]
    * @property {integer} [Id]
    * @property {object} [Links]
    **/
    this.attributes = {
      'Description'                   : null, 
      'Id'                            : null, 
      'Links'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.League.prototype = new MagnetJS.Model();
  MagnetJS.Models.League.prototype.constructor = MagnetJS.Models.League;

  //-------------model definiton for Leagues-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Leagues = function(){
    this.name = 'Leagues';
    this.entityType = 'Leagues';

    this.schema = {
      'Href' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Href]
    **/
    this.attributes = {
      'Href'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Leagues.prototype = new MagnetJS.Model();
  MagnetJS.Models.Leagues.prototype.constructor = MagnetJS.Models.Leagues;

  //-------------model definiton for Links-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Links = function(){
    this.name = 'Links';
    this.entityType = 'Links';

    this.schema = {
      'Api' : {
        type     : 'object',
        optional : true
      }, 
      'Mobile' : {
        type     : 'object',
        optional : true
      }, 
      'Web' : {
        type     : 'object',
        optional : true
      }
    };
    /**
    * @property {object} [Api]
    * @property {object} [Mobile]
    * @property {object} [Web]
    **/
    this.attributes = {
      'Api'                           : null, 
      'Mobile'                        : null, 
      'Web'                           : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Links.prototype = new MagnetJS.Model();
  MagnetJS.Models.Links.prototype.constructor = MagnetJS.Models.Links;

  //-------------model definiton for MapsApiTimezoneJsonResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.MapsApiTimezoneJsonResult = function(){
    this.name = 'MapsApiTimezoneJsonResult';
    this.entityType = 'MapsApiTimezoneJsonResult';

    this.schema = {
      'DstOffset' : {
        type     : 'integer',
        optional : true
      }, 
      'RawOffset' : {
        type     : 'integer',
        optional : true
      }, 
      'Status' : {
        type     : 'string',
        optional : true
      }, 
      'TimeZoneId' : {
        type     : 'string',
        optional : true
      }, 
      'TimeZoneName' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {integer} [DstOffset]
    * @property {integer} [RawOffset]
    * @property {string} [Status]
    * @property {string} [TimeZoneId]
    * @property {string} [TimeZoneName]
    **/
    this.attributes = {
      'DstOffset'                     : null, 
      'RawOffset'                     : null, 
      'Status'                        : null, 
      'TimeZoneId'                    : null, 
      'TimeZoneName'                  : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.MapsApiTimezoneJsonResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.MapsApiTimezoneJsonResult.prototype.constructor = MagnetJS.Models.MapsApiTimezoneJsonResult;

  //-------------model definiton for Mobile-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Mobile = function(){
    this.name = 'Mobile';
    this.entityType = 'Mobile';

    this.schema = {
      'Athletes' : {
        type     : 'object',
        optional : true
      }, 
      'Href' : {
        type     : 'string',
        optional : true
      }, 
      'Leagues' : {
        type     : 'object',
        optional : true
      }, 
      'Teams' : {
        type     : 'object',
        optional : true
      }
    };
    /**
    * @property {object} [Athletes]
    * @property {string} [Href]
    * @property {object} [Leagues]
    * @property {object} [Teams]
    **/
    this.attributes = {
      'Athletes'                      : null, 
      'Href'                          : null, 
      'Leagues'                       : null, 
      'Teams'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Mobile.prototype = new MagnetJS.Model();
  MagnetJS.Models.Mobile.prototype.constructor = MagnetJS.Models.Mobile;

  //-------------model definiton for MovieByIdResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.MovieByIdResult = function(){
    this.name = 'MovieByIdResult';
    this.entityType = 'MovieByIdResult';

    this.schema = {
      'Adult' : {
        type     : 'boolean',
        optional : true
      }, 
      'Backdrop_path' : {
        type     : 'string',
        optional : true
      }, 
      'Belongs_to_collection' : {
        type     : 'string',
        optional : true
      }, 
      'Budget' : {
        type     : 'integer',
        optional : true
      }, 
      'Genres' : {
        type     : 'object[]',
        optional : true
      }, 
      'Homepage' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Imdb_id' : {
        type     : 'string',
        optional : true
      }, 
      'Original_title' : {
        type     : 'string',
        optional : true
      }, 
      'Overview' : {
        type     : 'string',
        optional : true
      }, 
      'Popularity' : {
        type     : 'double',
        optional : true
      }, 
      'Poster_path' : {
        type     : 'string',
        optional : true
      }, 
      'Production_companies' : {
        type     : 'object[]',
        optional : true
      }, 
      'Production_countries' : {
        type     : 'object[]',
        optional : true
      }, 
      'Release_date' : {
        type     : 'string',
        optional : true
      }, 
      'Revenue' : {
        type     : 'integer',
        optional : true
      }, 
      'Runtime' : {
        type     : 'integer',
        optional : true
      }, 
      'Spoken_languages' : {
        type     : 'object[]',
        optional : true
      }, 
      'Status' : {
        type     : 'string',
        optional : true
      }, 
      'Tagline' : {
        type     : 'string',
        optional : true
      }, 
      'Title' : {
        type     : 'string',
        optional : true
      }, 
      'Vote_average' : {
        type     : 'double',
        optional : true
      }, 
      'Vote_count' : {
        type     : 'integer',
        optional : true
      }
    };
    /**
    * @property {boolean} [Adult]
    * @property {string} [Backdrop_path]
    * @property {string} [Belongs_to_collection]
    * @property {integer} [Budget]
    * @property {object} [Genres]
    * @property {string} [Homepage]
    * @property {integer} [Id]
    * @property {string} [Imdb_id]
    * @property {string} [Original_title]
    * @property {string} [Overview]
    * @property {double} [Popularity]
    * @property {string} [Poster_path]
    * @property {object} [Production_companies]
    * @property {object} [Production_countries]
    * @property {string} [Release_date]
    * @property {integer} [Revenue]
    * @property {integer} [Runtime]
    * @property {object} [Spoken_languages]
    * @property {string} [Status]
    * @property {string} [Tagline]
    * @property {string} [Title]
    * @property {double} [Vote_average]
    * @property {integer} [Vote_count]
    **/
    this.attributes = {
      'Adult'                         : null, 
      'Backdrop_path'                 : null, 
      'Belongs_to_collection'         : null, 
      'Budget'                        : null, 
      'Genres'                        : null, 
      'Homepage'                      : null, 
      'Id'                            : null, 
      'Imdb_id'                       : null, 
      'Original_title'                : null, 
      'Overview'                      : null, 
      'Popularity'                    : null, 
      'Poster_path'                   : null, 
      'Production_companies'          : null, 
      'Production_countries'          : null, 
      'Release_date'                  : null, 
      'Revenue'                       : null, 
      'Runtime'                       : null, 
      'Spoken_languages'              : null, 
      'Status'                        : null, 
      'Tagline'                       : null, 
      'Title'                         : null, 
      'Vote_average'                  : null, 
      'Vote_count'                    : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.MovieByIdResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.MovieByIdResult.prototype.constructor = MagnetJS.Models.MovieByIdResult;

  //-------------model definiton for News-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.News = function(){
    this.name = 'News';
    this.entityType = 'News';

    this.schema = {
      'Href' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Href]
    **/
    this.attributes = {
      'Href'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.News.prototype = new MagnetJS.Model();
  MagnetJS.Models.News.prototype.constructor = MagnetJS.Models.News;

  //-------------model definiton for PopularMoviesResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.PopularMoviesResult = function(){
    this.name = 'PopularMoviesResult';
    this.entityType = 'PopularMoviesResult';

    this.schema = {
      'Page' : {
        type     : 'integer',
        optional : true
      }, 
      'Results' : {
        type     : 'object[]',
        optional : true
      }, 
      'Total_pages' : {
        type     : 'integer',
        optional : true
      }, 
      'Total_results' : {
        type     : 'integer',
        optional : true
      }
    };
    /**
    * @property {integer} [Page]
    * @property {object} [Results]
    * @property {integer} [Total_pages]
    * @property {integer} [Total_results]
    **/
    this.attributes = {
      'Page'                          : null, 
      'Results'                       : null, 
      'Total_pages'                   : null, 
      'Total_results'                 : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.PopularMoviesResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.PopularMoviesResult.prototype.constructor = MagnetJS.Models.PopularMoviesResult;

  //-------------model definiton for Production_company-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Production_company = function(){
    this.name = 'Production_company';
    this.entityType = 'Production_company';

    this.schema = {
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Name' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {integer} [Id]
    * @property {string} [Name]
    **/
    this.attributes = {
      'Id'                            : null, 
      'Name'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Production_company.prototype = new MagnetJS.Model();
  MagnetJS.Models.Production_company.prototype.constructor = MagnetJS.Models.Production_company;

  //-------------model definiton for Production_country-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Production_country = function(){
    this.name = 'Production_country';
    this.entityType = 'Production_country';

    this.schema = {
      'Iso_3166_1' : {
        type     : 'string',
        optional : true
      }, 
      'Name' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Iso_3166_1]
    * @property {string} [Name]
    **/
    this.attributes = {
      'Iso_3166_1'                    : null, 
      'Name'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Production_country.prototype = new MagnetJS.Model();
  MagnetJS.Models.Production_country.prototype.constructor = MagnetJS.Models.Production_country;

  //-------------model definiton for Related-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Related = function(){
    this.name = 'Related';
    this.entityType = 'Related';

    this.schema = {
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Links' : {
        type     : 'object',
        optional : true
      }, 
      'Title' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {integer} [Id]
    * @property {object} [Links]
    * @property {string} [Title]
    **/
    this.attributes = {
      'Id'                            : null, 
      'Links'                         : null, 
      'Title'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Related.prototype = new MagnetJS.Model();
  MagnetJS.Models.Related.prototype.constructor = MagnetJS.Models.Related;

  //-------------model definiton for RemoveMovieFromListRequest-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.RemoveMovieFromListRequest = function(){
    this.name = 'RemoveMovieFromListRequest';
    this.entityType = 'RemoveMovieFromListRequest';

    this.schema = {
      'Media_id' : {
        type     : 'integer',
        optional : true
      }
    };
    /**
    * @property {integer} [Media_id]
    **/
    this.attributes = {
      'Media_id'                      : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.RemoveMovieFromListRequest.prototype = new MagnetJS.Model();
  MagnetJS.Models.RemoveMovieFromListRequest.prototype.constructor = MagnetJS.Models.RemoveMovieFromListRequest;

  //-------------model definiton for RemoveMovieFromListResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.RemoveMovieFromListResult = function(){
    this.name = 'RemoveMovieFromListResult';
    this.entityType = 'RemoveMovieFromListResult';

    this.schema = {
      'Status_code' : {
        type     : 'integer',
        optional : true
      }, 
      'Status_message' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {integer} [Status_code]
    * @property {string} [Status_message]
    **/
    this.attributes = {
      'Status_code'                   : null, 
      'Status_message'                : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.RemoveMovieFromListResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.RemoveMovieFromListResult.prototype.constructor = MagnetJS.Models.RemoveMovieFromListResult;

  //-------------model definiton for RestListusersResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.RestListusersResult = function(){
    this.name = 'RestListusersResult';
    this.entityType = 'RestListusersResult';

    this.schema = {
      'AppId' : {
        type     : 'string',
        optional : true
      }, 
      'CreatedTime' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'PrimaryEmailAddress' : {
        type     : 'string',
        optional : true
      }, 
      'UpdatedTime' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [AppId]
    * @property {string} [CreatedTime]
    * @property {integer} [Id]
    * @property {string} [PrimaryEmailAddress]
    * @property {string} [UpdatedTime]
    **/
    this.attributes = {
      'AppId'                         : null, 
      'CreatedTime'                   : null, 
      'Id'                            : null, 
      'PrimaryEmailAddress'           : null, 
      'UpdatedTime'                   : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.RestListusersResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.RestListusersResult.prototype.constructor = MagnetJS.Models.RestListusersResult;

  //-------------model definiton for Result-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Result = function(){
    this.name = 'Result';
    this.entityType = 'Result';

    this.schema = {
      'Adult' : {
        type     : 'boolean',
        optional : true
      }, 
      'Backdrop_path' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Original_title' : {
        type     : 'string',
        optional : true
      }, 
      'Popularity' : {
        type     : 'double',
        optional : true
      }, 
      'Poster_path' : {
        type     : 'string',
        optional : true
      }, 
      'Release_date' : {
        type     : 'string',
        optional : true
      }, 
      'Title' : {
        type     : 'string',
        optional : true
      }, 
      'Vote_average' : {
        type     : 'double',
        optional : true
      }, 
      'Vote_count' : {
        type     : 'integer',
        optional : true
      }
    };
    /**
    * @property {boolean} [Adult]
    * @property {string} [Backdrop_path]
    * @property {integer} [Id]
    * @property {string} [Original_title]
    * @property {double} [Popularity]
    * @property {string} [Poster_path]
    * @property {string} [Release_date]
    * @property {string} [Title]
    * @property {double} [Vote_average]
    * @property {integer} [Vote_count]
    **/
    this.attributes = {
      'Adult'                         : null, 
      'Backdrop_path'                 : null, 
      'Id'                            : null, 
      'Original_title'                : null, 
      'Popularity'                    : null, 
      'Poster_path'                   : null, 
      'Release_date'                  : null, 
      'Title'                         : null, 
      'Vote_average'                  : null, 
      'Vote_count'                    : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Result.prototype = new MagnetJS.Model();
  MagnetJS.Models.Result.prototype.constructor = MagnetJS.Models.Result;

  //-------------model definiton for Row-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Row = function(){
    this.name = 'Row';
    this.entityType = 'Row';

    this.schema = {
      'Elements' : {
        type     : 'object[]',
        optional : true
      }
    };
    /**
    * @property {object} [Elements]
    **/
    this.attributes = {
      'Elements'                      : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Row.prototype = new MagnetJS.Model();
  MagnetJS.Models.Row.prototype.constructor = MagnetJS.Models.Row;

  //-------------model definiton for Spoken_language-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Spoken_language = function(){
    this.name = 'Spoken_language';
    this.entityType = 'Spoken_language';

    this.schema = {
      'Iso_639_1' : {
        type     : 'string',
        optional : true
      }, 
      'Name' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Iso_639_1]
    * @property {string} [Name]
    **/
    this.attributes = {
      'Iso_639_1'                     : null, 
      'Name'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Spoken_language.prototype = new MagnetJS.Model();
  MagnetJS.Models.Spoken_language.prototype.constructor = MagnetJS.Models.Spoken_language;

  //-------------model definiton for SportsNewsResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.SportsNewsResult = function(){
    this.name = 'SportsNewsResult';
    this.entityType = 'SportsNewsResult';

    this.schema = {
      'Headlines' : {
        type     : 'object[]',
        optional : true
      }, 
      'ResultsCount' : {
        type     : 'integer',
        optional : true
      }, 
      'ResultsLimit' : {
        type     : 'integer',
        optional : true
      }, 
      'ResultsOffset' : {
        type     : 'integer',
        optional : true
      }, 
      'Status' : {
        type     : 'string',
        optional : true
      }, 
      'Timestamp' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {object} [Headlines]
    * @property {integer} [ResultsCount]
    * @property {integer} [ResultsLimit]
    * @property {integer} [ResultsOffset]
    * @property {string} [Status]
    * @property {string} [Timestamp]
    **/
    this.attributes = {
      'Headlines'                     : null, 
      'ResultsCount'                  : null, 
      'ResultsLimit'                  : null, 
      'ResultsOffset'                 : null, 
      'Status'                        : null, 
      'Timestamp'                     : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.SportsNewsResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.SportsNewsResult.prototype.constructor = MagnetJS.Models.SportsNewsResult;

  //-------------model definiton for Team-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Team = function(){
    this.name = 'Team';
    this.entityType = 'Team';

    this.schema = {
      'Description' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Links' : {
        type     : 'object',
        optional : true
      }
    };
    /**
    * @property {string} [Description]
    * @property {integer} [Id]
    * @property {object} [Links]
    **/
    this.attributes = {
      'Description'                   : null, 
      'Id'                            : null, 
      'Links'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Team.prototype = new MagnetJS.Model();
  MagnetJS.Models.Team.prototype.constructor = MagnetJS.Models.Team;

  //-------------model definiton for Teams-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Teams = function(){
    this.name = 'Teams';
    this.entityType = 'Teams';

    this.schema = {
      'Href' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [Href]
    **/
    this.attributes = {
      'Href'                          : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Teams.prototype = new MagnetJS.Model();
  MagnetJS.Models.Teams.prototype.constructor = MagnetJS.Models.Teams;

  //-------------model definiton for Tracking-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Tracking = function(){
    this.name = 'Tracking';
    this.entityType = 'Tracking';

    this.schema = {
      'CoverageType' : {
        type     : 'string',
        optional : true
      }, 
      'LeagueName' : {
        type     : 'string',
        optional : true
      }, 
      'SportName' : {
        type     : 'string',
        optional : true
      }, 
      'TrackingName' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [CoverageType]
    * @property {string} [LeagueName]
    * @property {string} [SportName]
    * @property {string} [TrackingName]
    **/
    this.attributes = {
      'CoverageType'                  : null, 
      'LeagueName'                    : null, 
      'SportName'                     : null, 
      'TrackingName'                  : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Tracking.prototype = new MagnetJS.Model();
  MagnetJS.Models.Tracking.prototype.constructor = MagnetJS.Models.Tracking;

  //-------------model definiton for UpdateUserRequest-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.UpdateUserRequest = function(){
    this.name = 'UpdateUserRequest';
    this.entityType = 'UpdateUserRequest';

    this.schema = {
      'CreatedTime' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'PrimaryEmailAddress' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [CreatedTime]
    * @property {integer} [Id]
    * @property {string} [PrimaryEmailAddress]
    **/
    this.attributes = {
      'CreatedTime'                   : null, 
      'Id'                            : null, 
      'PrimaryEmailAddress'           : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.UpdateUserRequest.prototype = new MagnetJS.Model();
  MagnetJS.Models.UpdateUserRequest.prototype.constructor = MagnetJS.Models.UpdateUserRequest;

  //-------------model definiton for UpdateUserResult-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.UpdateUserResult = function(){
    this.name = 'UpdateUserResult';
    this.entityType = 'UpdateUserResult';

    this.schema = {
      'AppId' : {
        type     : 'string',
        optional : true
      }, 
      'CreatedTime' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'PrimaryEmailAddress' : {
        type     : 'string',
        optional : true
      }, 
      'UpdatedTime' : {
        type     : 'string',
        optional : true
      }
    };
    /**
    * @property {string} [AppId]
    * @property {string} [CreatedTime]
    * @property {integer} [Id]
    * @property {string} [PrimaryEmailAddress]
    * @property {string} [UpdatedTime]
    **/
    this.attributes = {
      'AppId'                         : null, 
      'CreatedTime'                   : null, 
      'Id'                            : null, 
      'PrimaryEmailAddress'           : null, 
      'UpdatedTime'                   : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.UpdateUserResult.prototype = new MagnetJS.Model();
  MagnetJS.Models.UpdateUserResult.prototype.constructor = MagnetJS.Models.UpdateUserResult;

  //-------------model definiton for Video-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Video = function(){
    this.name = 'Video';
    this.entityType = 'Video';

    this.schema = {
      'Description' : {
        type     : 'string',
        optional : true
      }, 
      'Id' : {
        type     : 'integer',
        optional : true
      }, 
      'Links' : {
        type     : 'object',
        optional : true
      }, 
      'Thumbnail' : {
        type     : 'string',
        optional : true
      }, 
      'Title' : {
        type     : 'string',
        optional : true
      }, 
      'Tracking' : {
        type     : 'object',
        optional : true
      }
    };
    /**
    * @property {string} [Description]
    * @property {integer} [Id]
    * @property {object} [Links]
    * @property {string} [Thumbnail]
    * @property {string} [Title]
    * @property {object} [Tracking]
    **/
    this.attributes = {
      'Description'                   : null, 
      'Id'                            : null, 
      'Links'                         : null, 
      'Thumbnail'                     : null, 
      'Title'                         : null, 
      'Tracking'                      : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Video.prototype = new MagnetJS.Model();
  MagnetJS.Models.Video.prototype.constructor = MagnetJS.Models.Video;

  //-------------model definiton for Web-------------
  /**
  * @constructor
  * @memberof MagnetJS.Models
  * @extends MagnetJS.Model
  * @param {object} [attributes] A key-value pair of attributes to be assigned to this Model.
  * @param {boolean} [doValidate] If enabled, validate attributes before set. Default is disabled.
  */
  MagnetJS.Models.Web = function(){
    this.name = 'Web';
    this.entityType = 'Web';

    this.schema = {
      'Athletes' : {
        type     : 'object',
        optional : true
      }, 
      'Href' : {
        type     : 'string',
        optional : true
      }, 
      'Leagues' : {
        type     : 'object',
        optional : true
      }, 
      'Teams' : {
        type     : 'object',
        optional : true
      }
    };
    /**
    * @property {object} [Athletes]
    * @property {string} [Href]
    * @property {object} [Leagues]
    * @property {object} [Teams]
    **/
    this.attributes = {
      'Athletes'                      : null, 
      'Href'                          : null, 
      'Leagues'                       : null, 
      'Teams'                         : null
    }
    MagnetJS.Model.apply(this, arguments);
  };
  MagnetJS.Models.Web.prototype = new MagnetJS.Model();
  MagnetJS.Models.Web.prototype.constructor = MagnetJS.Models.Web;


})(this['MagnetJS'] || exports, typeof module !== 'undefined' && module.exports && typeof window === 'undefined');
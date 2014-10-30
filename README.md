# Magnet rest2mobile
<img style="margin:10px" src="http://developer.magnet.com/img/logo_r2m_main.png"
 alt="rest2mobile logo" title="rest2mobile" align="right" />

Magnet rest2mobile generates native code for mobile apps from REST APIs. It turns actual REST requests and responses into source code (Objective-C, Android, and JavaScript) that you can call from your mobile app. The source code automatically handles:

* server connections
* marshalling and unmarshalling JSON data
* JSON data conversion into the native object types


## Get Started

rest2mobile provide tools that allow you to generate native Mobile API directly from REST queries, within your IDE, or from the command line. All these tools are freely available on the following github repositories:

* [rest2mobile for Android Studio and IntelliJ IDEA](https://github.com/magnetsystems/r2m-plugin-android)
* [rest2mobile for XCode](https://github.com/magnetsystems/r2m-plugin-ios)
* [rest2mobile CLI](https://github.com/magnetsystems/r2m-cli)
* [samples example for rest2mobile CLI](https://github.com/magnetsystems/r2m-examples)


## How it works

Given REST request/response examples, rest2mobile can infer the entire object model for your requests and responses. The IDE plugins and CLI just ask you to specify the GET/POST/PUT/DELETE REST requests and responses and automatically generates the method and types required to invoke the REST service from your Mobile App.

For instance, see how to use the CLI [here](https://github.com/magnetsystems/r2m-cli/blob/master/README.md).
The plugins make it even easier.

You will need to include the right Magnet Mobile SDK in your project:
* [rest2mobile Android SDK](https://github.com/magnetsystems/r2m-sdk-android)
* [rest2mobile iOS SDK](https://github.com/magnetsystems/r2m-sdk-ios)
* [rest2mobile JS SDK](https://github.com/magnetsystems/r2m-sdk-js)

### Feedback

We are constantly adding features and welcome feedback. 
Please, ask questions or file requests [here](https://github.com/magnetsystems/rest2mobile/issues).

## License

Licensed under the **[Apache License, Version 2.0] [license]** (the "License");
you may not use this software except in compliance with the License.

## Copyright

Copyright © 2014 Magnet Systems, Inc. All rights reserved.

[website]: http://developer.magnet.com
[techdoc]: https://github.com/magnetsystems/rest2mobile/wiki
[r2m-plugin-android]:https://github.com/magnetsystems/r2m-plugin-android/
[r2m-plugin-ios]:https://github.com/magnetsystems/r2m-plugin-ios/
[r2m-cli]:https://github.com/magnetsystems/r2m-cli/
[license]: http://www.apache.org/licenses/LICENSE-2.0



# Syntamedtech

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12.


## Visit below url to check without running code
[Demo website](https://demo-enroll.herokuapp.com/) -Demo application hosted on Heroku(Note:Initial web load will take time since heroku provide limited ram and limited store have patience 😁)



## Getting Started
* Make sure you have installed node, angular ng(Install should be globally)
* Facing CORS error need to add "Access-Control-Allow-Origin" at api end
* Kindly start installing angular packages.
```
    npm i
```

## Key point kept while developing application
* Used Lazy loading module
  - This helps angular to load module faster, ie each business process will have an independent module to address their functionality.
  - So that the only module that is required will only loaded which allows users to interact way faster.

* Ideally there should be Shared module
  - Shared modules helps to make component which are gonna use common among modules.
  - All services should be register at Shared module and exported according to that.
  - Request Interceptor should be a part of every angular project where we can place network activity ie before calling any api which include adding baseUrl and token if required.

## Start server

Run `ng s -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Start server on Linux
Run `sudo ng s -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Built With
* [Angular 8]
* [Express] - Used for Heroku to serve file

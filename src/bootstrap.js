requirejs.config({
    "paths": {
        "marionette":           "../vendor/marionette/backbone.marionette",
        "backbone.babysitter":  "../vendor/backbone.babysitter/backbone.babysitter",
        "backbone.wreqr":       "../vendor/backbone.wreqr/backbone.wreqr",

        "backbone":             "../vendor/backbone/backbone",
        "underscore":           "../vendor/underscore/underscore",

        "text":                 "../vendor/requirejs-text/text",

        "jquery":               ["//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min", "../vendor/jquery/jquery"]
    }
});

require(
    ["bbm"],
    function( BBM ){
        BBM.start();
    }
);

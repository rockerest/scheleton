define(
    [
        // Libraries
        "backbone", "underscore",
        // Dependencies
        "text!templates/views/students.html", "collections/students", "events/students"
    ],

    function( Backbone, _, StudentsTmpl, Students, vent ){
        var StudentsView = Backbone.View.extend({
                "el": "#main",
                "template": _.template( StudentsTmpl ),

                "events": {
                    "click button": function(){ vent.trigger( "add:student" ); },
                    "click tr": function( e ){
                        vent.trigger( "edit:student", {"id": this.$( e.currentTarget ).data( "id" )} );
                    }
                },

                "render": function(){
                    this.$el.html( this.template( { "students": this.students } ) );
                    return this;
                },

                "initialize": function(){
                    this.students = new Students();
                    this.students.fetch();

                    this.render();
                }
            });


        return StudentsView;
    }
);
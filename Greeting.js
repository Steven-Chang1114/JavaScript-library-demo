//My library

((global, $) => {

    let Greet = function(firstname, lastname, language){
        return new Greeting.init(firstname, lastname, language);
    }

    Greeting.init = init;
    
    class init {

        constructor(firstname = '', lastname = '', language = 'en'){
            this.firstname = firstname;
            this.lastname = lastname;
            this.language = language;
        }

    }

    global.Greeting = global.G$ = Greet;

})(window, jQuery);
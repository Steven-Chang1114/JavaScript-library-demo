//My library

((global, $) => {

    let Greet = function(firstname, lastname, language){
        return new Greet.init(firstname, lastname, language);
    }

    Greet.init = function (firstname = '', lastname = '', language = 'en') {
        this.firstname = firstname;
        this.lastname = lastname;
        this.language = language;
    }

    Greet.prototype = {
        Shitting: () => {
            console.log('fuck')
        }
    }

    Greet.init.prototype = Greet.prototype

    global.Greeting = global.G$ = Greet;

})(window, window.jQuery);
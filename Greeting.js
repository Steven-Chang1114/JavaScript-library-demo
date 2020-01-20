//My library

((global, $) => {

    // 'new' an object
    let Greet = function(firstname, lastname, language){
        return new Greet.init(firstname, lastname, language);
    }

    // the actual object is created here, allowing us to 'new' an object without calling 'new'
    Greet.init = function (firstname = '', lastname = '', language = 'en') {
        this.firstname = firstname;
        this.lastname = lastname;
        this.language = language;
    }

    // prototype holds methods (to save memory space)
    Greet.prototype = {
        
        // 'this' refers to the calling object at execution time
        fullName: function() {
            return `${this.firstname} ${this.lastname}`;
        },

        validate: function() {
            // check that is a valid language
            // references the externally inaccessible 'supportedLangs' within the closure
            if (lang.indexOf(this.language) === -1) throw "Invaild language";
        },

        // retrieve messages from object by referring to properties using [] syntax
        greeting: function() {
            return `${greetings[this.language]} ${this.firstname}!`;
        },
 
        formalGreeting: function() {
            return `${formalGreetings[this.language]} ${this.fullName()}.`;
        },

         // chainable methods return their own containing object
        greet: function(formal) {
            let msg;

             // if undefined or null it will be coerced to 'false'
            formal ? msg = this.formalGreeting() : msg = this.greeting();

            console.log(msg);

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },

        log: function() {
            console.log(`${log[this.language]}: ${this.fullName()}`);

            return this;
        },

        setLang: function(newLang) {
            // set the language
            this.language = newLang;

            // check if the language is supported
            this.validate();

            return this;
        },

        HTMLGreeting: function(selector, formal){
            var msg;

            if (!selector) throw "Missing selector";

            // determine the message
            formal ? msg = this.formalGreeting() : msg = this.greeting();

            // inject the message in the chosen place in the DOM
            if(!$){
                document.querySelector(`#${selector}`).textContent = msg;
            }

            $(selector).html(msg);

            return this;
        }

    }

    // trick borrowed from jQuery so we don't have to use the 'new' keyword
    Greet.init.prototype = Greet.prototype

    // hidden within the scope of the IIFE and never directly accessible
    const lang = ['en', 'cn', 'es']

    // informal greetings
    const greetings = {
        en: "Hello",
        cn: "你好",
        es: 'Hola'
    };

    // formal greetings
    const formalGreetings = {
        en: "Greeting",
        cn: "您好",
        es: 'Saludos'
    };

    // logger messages
    const log = {
        en: "Logged in",
        cn: "已登录",
        es: 'Inicio sesion'
    };

     // attach our Greetr to the global object, and provide a shorthand '$G' for ease our poor fingers
    global.Greeting = global.G$ = Greet;

})(window, window.jQuery);
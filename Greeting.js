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
        
        fullName: function() {
            return `${this.firstname} ${this.lastname}`;
        },

        validate: function() {
            if (lang.indexOf(this.language) === -1) throw "Invaild language";
        },

        greeting: function() {
            return `${greetings[this.language]} ${this.firstname}!`;
        },
 
        formalGreeting: function() {
            return `${formalGreetings[this.language]} ${this.fullName()}.`;
        },

        greet: function(formal) {
            let msg;

            formal ? msg = this.formalGreeting() : msg = this.greeting();

            console.log(msg);

            return this;
        },

        log: function() {
            console.log(`${log[this.language]}: ${this.fullName()}`);

            return this;
        },

        setLang: function(newLang) {
            this.language = newLang;

            this.validate();

            return this;
        }

    }

    Greet.init.prototype = Greet.prototype

    const lang = ['en', 'cn', 'es']

    const greetings = {
        en: "Hello",
        cn: "你好",
        es: 'Hola'
    };

    const formalGreetings = {
        en: "Greeting",
        cn: "您好",
        es: 'Saludos'
    };

    const log = {
        en: "Logged in",
        cn: "已登录",
        es: 'Inicio sesion'
    };

    //Put the Greet into the global
    global.Greeting = global.G$ = Greet;

})(window, window.jQuery);
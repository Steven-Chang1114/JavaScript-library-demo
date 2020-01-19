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
        
        fullName: () => {
            return `${this.firstname} ${this.lastname}`;
        },

        validate: () => {
            if (lang.indexOf(this.language) === -1) throw "Invaild language";
        },

        greeting: () => {
            return `${greeting[this.language]} ${this.firstname}!`;
        },

        formalGreeting: () => {
            return `${formalGreeting[this.language]}, ${this.fullName()}.`;
        },

        greet: formal => {
            let msg;

            formal ? msg = formalGreeting() : msg = greeting();

            console.log(msg);

            return this;
        },

        log: () => {
            console.log(`${log[this.language]}: ${this.fullName()}`);

            return this;
        },

        setLang: newLang => {
            this.language = newLang;

            this.validate();
        }

    }

    Greet.init.prototype = Greet.prototype

    const lang = ['en', 'cn', 'es']

    const greeting = {
        en = "Hello",
        cn = "你好",
        es = 'Hola'
    };

    const formalGreeting = {
        en = "Greeting",
        cn = "您好",
        es = 'Saludos'
    };

    const log = {
        en = "Logged in",
        cn = "已登录",
        es = 'Inicio sesion'
    };

    //Put the Greet into the global
    global.Greeting = global.G$ = Greet;

})(window, window.jQuery);
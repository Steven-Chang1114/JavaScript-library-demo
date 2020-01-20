//The file for me to use my library

// let's use our object on the click of the login button
$('#login').click(() => {

    // create a new 'Greetr' object (let's pretend we know the name from the login)
    var loginUser = G$('Steven', 'Chang', $('#lang').val());

    // hide the login on the screen
    $('#logindiv').hide();

    // use our chainable methods
    // fire off an HTML greeting, passing the '#greeting' as the selector and the chosen language, and log the welcome as well
    loginUser.HTMLGreeting('#greeting', $('#formal').val()).log();
})

//console.log(a);
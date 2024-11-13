 

(function () {  
    authContext = new AuthenticationContext(config); 
    // Check For & Handle Redirect From AAD After Login
    isCallback = authContext.isCallback(window.location.hash);
    authContext.handleWindowCallback();
    $errorMessage.html(authContext.getLoginError());

    if (isCallback && !authContext.getLoginError()) {
        window.location = authContext._getItem(authContext.CONSTANTS.STORAGE.LOGIN_REQUEST);
    }

    // Check Login Status, Update UI
    _user = authContext.getCachedUser();
    //if (_user) { // COMENTAR PARA DEJAR SOLO EL BOTON
    //    let dir = window.location.href;
    //    if (dir != _KUrlMaster + "Login/LoginOffice") {
    //        toastr.success("Te encuentras identificado, vas a ser redireccionado a la siguiente pantalla")
    //        setTimeout(function () { 
    //            window.location.href = _KUrlMaster + "Login/LoginOffice?username=" + _user.userName;
    //        },1500)
    //    } else {
    //        $("#username").val(user.userName);
    //    } 
    //} 
    // Handle Navigation Directly to View
    window.onhashchange = function () {
        loadView(stripHash(window.location.hash)); 
    };
    //window.onload = function () { // COMENTAR PARA DEJAR SOLO EL BOTON
    //    $(window).trigger("hashchange");
    //}; 
    // Register NavBar Click Handlers
    $signOutButton.click(function () {
        authContext.logOut();
    });
    $signInButton.click(function () { 
        authContext.login();
    }); 

}());

function LoginADA() {
    if (_user) {
        let dir = window.location.href;
        if (dir != _KUrlMaster + "Login/LoginOffice") {
            toastr.success("Te encuentras identificado, vas a ser redireccionado a la siguiente pantalla")
            //setTimeout(function () {
            //    window.location.href = _KUrlMaster + "Login/LoginOffice?username=" + _user.userName;
            //}, 1500)
        }
    } else { 
        $(window).trigger("hashchange");
    }
}

    // Route View Requests To Appropriate Controller
    function loadCtrl(view) {
        return todoListCtrl; 
        //switch (view.toLowerCase()) { 
        //    case _KUrlMaster:
        //        return todoListCtrl; R
        //}
    }

    // Show a View
    function loadView(view) {  
        var ctrl = loadCtrl(view); 
        if (!ctrl)
            return; 
        // Check if View Requires Authentication
        if (ctrl.requireADLogin && !authContext.getCachedUser()) {
            authContext.config.redirectUri = _KUrlMaster + "Login/LoginOffice";// window.location.href;
            authContext.login();
            return;
        }  
    }

    function stripHash(view) {
        return view.substr(view.indexOf('#') + 1);
    }



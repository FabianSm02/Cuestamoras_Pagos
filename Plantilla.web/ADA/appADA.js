
(function () {
    if (!authContext)
    {
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
        if (_user) {
            $("#username").val(_user.userName);
        } else {
            toastr.warning("No Te encuentras identificado, vas a ser redireccionado a la pantalla de inicio", toastrOptions)
            setTimeout(function () {
                $(window).trigger("hashchange");
            }, 1500)
        } 
        // Handle Navigation Directly to View
        window.onhashchange = function () {
            loadView(stripHash(window.location.hash));
        };
        window.onhashchange = function () {
            if (!_user)
                loadView(stripHash(window.location.hash));
        };
    } 

}()); 

// Route View Requests To Appropriate Controller
function loadCtrl(view) {
    //if(view != '')
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
        authContext.config.redirectUri = _KUrlMaster ;// window.location.href;
        authContext.login();
        return;
    }
}

function stripHash(view) {
    return view.substr(view.indexOf('#') + 1);
}




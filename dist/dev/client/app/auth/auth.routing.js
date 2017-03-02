"use strict";
var router_1 = require('@angular/router');
var signin_component_1 = require("./signin.component");
var signup_component_1 = require("./signup.component");
var auth_service_1 = require("./auth.service");
var auth_guard_service_1 = require("./auth-guard.service");
var auth_component_1 = require("./auth.component");
var forgotpassword_component_1 = require("./forgotpassword/forgotpassword.component");
var resetpassword_component_1 = require("./resetpassword/resetpassword.component");
var authRoutes = [{
        path: 'auth',
        component: auth_component_1.AuthComponent,
        children: [
            { path: 'signin', component: signin_component_1.SigninComponent },
            { path: 'signup', component: signup_component_1.SignupComponent },
            { path: 'forgotpassword', component: forgotpassword_component_1.ForgotPasswordComponent },
            { path: 'password/reset/:token', component: resetpassword_component_1.ResetPasswordComponent },
        ]
    }];
exports.authProviders = [
    auth_guard_service_1.AuthGuard,
    auth_service_1.AuthService
];
exports.authRouting = router_1.RouterModule.forChild(authRoutes);

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hdXRoL2F1dGgucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsdUJBQXFDLGlCQUFpQixDQUFDLENBQUE7QUFFdkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFDbkQsaUNBQThCLG9CQUFvQixDQUFDLENBQUE7QUFFbkQsNkJBQTBCLGdCQUFnQixDQUFDLENBQUE7QUFDM0MsbUNBQXdCLHNCQUFzQixDQUFDLENBQUE7QUFDL0MsK0JBQTRCLGtCQUFrQixDQUFDLENBQUE7QUFDL0MseUNBQXNDLDJDQUEyQyxDQUFDLENBQUE7QUFDbEYsd0NBQXFDLHlDQUF5QyxDQUFDLENBQUE7QUFFL0UsSUFBTSxVQUFVLEdBQVcsQ0FBQztRQUMxQixJQUFJLEVBQUUsTUFBTTtRQUNaLFNBQVMsRUFBRSw4QkFBYTtRQUN4QixRQUFRLEVBQUU7WUFDUixFQUFFLElBQUksRUFBRSxRQUFRLEVBQUcsU0FBUyxFQUFFLGtDQUFlLEVBQUU7WUFDL0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFHLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFHLFNBQVMsRUFBRSxrREFBdUIsRUFBRTtZQUMvRCxFQUFFLElBQUksRUFBRSx1QkFBdUIsRUFBRyxTQUFTLEVBQUUsZ0RBQXNCLEVBQUU7U0FDdEU7S0FDRixDQUFDLENBQUM7QUFFVSxxQkFBYSxHQUFHO0lBQzNCLDhCQUFTO0lBQ1QsMEJBQVc7Q0FDWixDQUFDO0FBSVcsbUJBQVcsR0FBd0IscUJBQVksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMiLCJmaWxlIjoiYXBwL2F1dGgvYXV0aC5yb3V0aW5nLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycyB9ICBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHtTaWduaW5Db21wb25lbnR9IGZyb20gXCIuL3NpZ25pbi5jb21wb25lbnRcIjtcbmltcG9ydCB7U2lnbnVwQ29tcG9uZW50fSBmcm9tIFwiLi9zaWdudXAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7QXV0aFNlcnZpY2V9IGZyb20gXCIuL2F1dGguc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoR3VhcmR9IGZyb20gXCIuL2F1dGgtZ3VhcmQuc2VydmljZVwiO1xuaW1wb3J0IHtBdXRoQ29tcG9uZW50fSBmcm9tIFwiLi9hdXRoLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtGb3Jnb3RQYXNzd29yZENvbXBvbmVudH0gZnJvbSBcIi4vZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50XCI7XG5pbXBvcnQge1Jlc2V0UGFzc3dvcmRDb21wb25lbnR9IGZyb20gXCIuL3Jlc2V0cGFzc3dvcmQvcmVzZXRwYXNzd29yZC5jb21wb25lbnRcIjtcblxuY29uc3QgYXV0aFJvdXRlczogUm91dGVzID0gW3tcbiAgcGF0aDogJ2F1dGgnLFxuICBjb21wb25lbnQ6IEF1dGhDb21wb25lbnQsXG4gIGNoaWxkcmVuOiBbXG4gICAgeyBwYXRoOiAnc2lnbmluJywgIGNvbXBvbmVudDogU2lnbmluQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnc2lnbnVwJywgIGNvbXBvbmVudDogU2lnbnVwQ29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiAnZm9yZ290cGFzc3dvcmQnLCAgY29tcG9uZW50OiBGb3Jnb3RQYXNzd29yZENvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ3Bhc3N3b3JkL3Jlc2V0Lzp0b2tlbicsICBjb21wb25lbnQ6IFJlc2V0UGFzc3dvcmRDb21wb25lbnQgfSxcbiAgXVxufV07XG5cbmV4cG9ydCBjb25zdCBhdXRoUHJvdmlkZXJzID0gW1xuICBBdXRoR3VhcmQsXG4gIEF1dGhTZXJ2aWNlXG5dO1xuXG5cblxuZXhwb3J0IGNvbnN0IGF1dGhSb3V0aW5nOiBNb2R1bGVXaXRoUHJvdmlkZXJzID0gUm91dGVyTW9kdWxlLmZvckNoaWxkKGF1dGhSb3V0ZXMpO1xuIl19

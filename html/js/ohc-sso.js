define("ohc-sso",["js-cookie","jquery","ohc-url"],function(e){

	var t={en:{Welcome:"Welcome details.firstname","Sign Out":"Sign Out","Sign In":"Sign In"},ar:{Welcome:"مرحبًا details.firstname","Sign Out":"تسجيل خروج","Sign In":"تسجيل دخول"},es:{Welcome:"Bienvenido/a details.firstname","Sign Out":"Cerrar sesión","Sign In":"Iniciar sesión"},fr:{Welcome:"Bienvenue details.firstname","Sign Out":"Déconnexion","Sign In":"Connexion"},de:{Welcome:"Willkommen details.firstname","Sign Out":"Abmelden","Sign In":"Anmelden"},it:{Welcome:"Benvenuto/a details.firstname","Sign Out":"Scollega","Sign In":"Accedi"},ja:{Welcome:"ようこそ details.firstname","Sign Out":"サイン・アウト","Sign In":"サイン・イン"},ko:{Welcome:"환영합니다, details.firstname","Sign Out":"로그아웃","Sign In":"로그인"},"pt-br":{Welcome:"Bem-vindo(a) details.firstname","Sign Out":"Sair","Sign In":"Acessar"},"zh-hans":{Welcome:"欢迎 details.firstname","Sign Out":"退出","Sign In":"登录"},"zh-hant":{Welcome:"歡迎您，details.firstname","Sign Out":"登入","Sign In":"登出"}},

	n=$("html").attr("lang");

	n&&(n=n.toLowerCase()),n==="zh-cn"&&(n="zh-hans"),n==="zh-tw"&&(n="zh-hant");

	var r=function(e){if(typeof n!="undefined"&&n!==!1)var r=n;else var r="en";return typeof t[r]=="undefined"&&r.indexOf("-")>-1&&(r=r.substr(0,r.indexOf("-"))),typeof t[r]=="undefined"||typeof t[r][e]=="undefined"?e==="dir"?"en":e:t[r][e]},

	i={};

	return i.isLoggedIn=function(){var t=e.get("ORA_UCM_INFO");return t&&t.split("~").length>3?!0:!1},

	i.getUserDetails=function(){var t=e.get("ORA_UCM_INFO");if(t&&t.split("~").length>3){var n=t.split("~"),r={};return r.firstname=n[2],r.lastname=n[3],r.email=n[4].toLowerCase(),r}return undefined},

	i.login=function(){window.location="http://www.oracle.com/webapps/redirect/signon?nexturl="+encodeURI(window.location.href)},

	i.logout=function(){e.remove("ORASSO_AUTH_HINT");var t=$.parseURL(window.location.href);t.path.indexOf("/secure")===-1?window.location="https://login.oracle.com/sso/logout?p_done_url="+encodeURI(window.location.href):window.location="https://login.oracle.com/sso/logout?p_done_url="+encodeURI("http://www.oracle.com/partners/")},

	i.handleLogInOut=function(){$(".login-link").on("click",function(e){e.preventDefault(),i.login()}),$(".logout-link").on("click",function(e){e.preventDefault(),i.logout()});if(i.isLoggedIn()){var e=i.getUserDetails();$(".logged-in-content").show(),$(".logged-in-content").removeClass("hidden"),$(".append-firstname-greeting").append(e.email)}else $(".logged-out-content").show(),$(".logged-out-content").removeClass("hidden")},

	i

});


/*define("ohc-sso",["js-cookie","jquery","ohc-url"],function(e){

	var t={en:{Welcome:"Welcome details.firstname","Sign Out":"Sign Out","Sign In":"Sign In"},ar:{Welcome:"مرحبًا details.firstname","Sign Out":"تسجيل خروج","Sign In":"تسجيل دخول"},es:{Welcome:"Bienvenido/a details.firstname","Sign Out":"Cerrar sesión","Sign In":"Iniciar sesión"},fr:{Welcome:"Bienvenue details.firstname","Sign Out":"Déconnexion","Sign In":"Connexion"},de:{Welcome:"Willkommen details.firstname","Sign Out":"Abmelden","Sign In":"Anmelden"},it:{Welcome:"Benvenuto/a details.firstname","Sign Out":"Scollega","Sign In":"Accedi"},ja:{Welcome:"ようこそ details.firstname","Sign Out":"サイン・アウト","Sign In":"サイン・イン"},ko:{Welcome:"환영합니다, details.firstname","Sign Out":"로그아웃","Sign In":"로그인"},"pt-br":{Welcome:"Bem-vindo(a) details.firstname","Sign Out":"Sair","Sign In":"Acessar"},"zh-hans":{Welcome:"欢迎 details.firstname","Sign Out":"退出","Sign In":"登录"},"zh-hant":{Welcome:"歡迎您，details.firstname","Sign Out":"登入","Sign In":"登出"}},

	n=$("html").attr("lang");

	n&&(n=n.toLowerCase()),n==="zh-cn"&&(n="zh-hans"),n==="zh-tw"&&(n="zh-hant");

	var r=function(e){if(typeof n!="undefined"&&n!==!1)var r=n;else var r="en";return typeof t[r]=="undefined"&&r.indexOf("-")>-1&&(r=r.substr(0,r.indexOf("-"))),typeof t[r]=="undefined"||typeof t[r][e]=="undefined"?e==="dir"?"en":e:t[r][e]},

	i={};

	return i.isLoggedIn=function(){var t=e.get("ORA_UCM_INFO");return t&&t.split("~").length>3?!0:!1},

i.getUserDetails=function(){var t=$.get("ORA_UCM_INFO");if(t&&t.split("~").length>3){var n=t.split("~"),r={};return r.firstname=n[2],r.lastname=n[3],r.email=n[4].toLowerCase(),r}return undefined},

  i.login=function(){window.location="http://www.oracle.com/webapps/redirect/signon?nexturl="+encodeURI(window.location.href)},

	i.logout=function(){e.remove("ORASSO_AUTH_HINT");var t=$.parseURL(window.location.href);t.path.indexOf("/secure")===-1?window.location="https://login.oracle.com/sso/logout?p_done_url="+encodeURI(window.location.href):window.location="https://login.oracle.com/sso/logout?p_done_url="+encodeURI("http://www.oracle.com/partners/")},

	i.handleLogInOut=function(){$(".login-link").on("click",function(e){e.preventDefault(),i.login()}),$(".logout-link").on("click",function(e){e.preventDefault(),i.logout()});if(i.isLoggedIn()){var e=i.getUserDetails();$(".logged-in-content").show(),$(".logged-in-content").removeClass("hidden"),$(".append-firstname-greeting").append(e.email)}else $(".logged-out-content").show(),$(".logged-out-content").removeClass("hidden")},
	i

});*/

/*define("ohc-sso",["js-cookie","jquery","ohc-url"],function(e,$,ohcurl){

	console.log("ohc-sso.js is loaded");

	var t={en:{Welcome:"Welcome details.firstname","Sign Out":"Sign Out","Sign In":"Sign In"},ar:{Welcome:"مرحبًا details.firstname","Sign Out":"تسجيل خروج","Sign In":"تسجيل دخول"},es:{Welcome:"Bienvenido/a details.firstname","Sign Out":"Cerrar sesión","Sign In":"Iniciar sesión"},fr:{Welcome:"Bienvenue details.firstname","Sign Out":"Déconnexion","Sign In":"Connexion"},de:{Welcome:"Willkommen details.firstname","Sign Out":"Abmelden","Sign In":"Anmelden"},it:{Welcome:"Benvenuto/a details.firstname","Sign Out":"Scollega","Sign In":"Accedi"},ja:{Welcome:"ようこそ details.firstname","Sign Out":"サイン・アウト","Sign In":"サイン・イン"},ko:{Welcome:"환영합니다, details.firstname","Sign Out":"로그아웃","Sign In":"로그인"},"pt-br":{Welcome:"Bem-vindo(a) details.firstname","Sign Out":"Sair","Sign In":"Acessar"},"zh-hans":{Welcome:"欢迎 details.firstname","Sign Out":"退出","Sign In":"登录"},"zh-hant":{Welcome:"歡迎您，details.firstname","Sign Out":"登入","Sign In":"登出"}};

	n=$("html").attr("lang");

	n&&(n=n.toLowerCase()),n==="zh-cn"&&(n="zh-hans"),n==="zh-tw"&&(n="zh-hant");

	var r=function(e){
		if(typeof n!="undefined"&&n!==!1)var r=n;else var r="en";
		return
		typeof t[r]=="undefined"&&r.indexOf("-")>-1&&(r=r.substr(0,r.indexOf("-"))),
		typeof t[r]=="undefined"||typeof t[r][e]=="undefined"?e==="dir"?"en":e:t[r][e]
		};

	i={};

	return

		i.isLoggedIn=function(){
				var t=e.get("ORA_UCM_INFO");
				return
					t&&t.split("~").length>3?!0:!1
				},

		i.getUserDetails=function(){
			var t=e.get("ORA_UCM_INFO");
			if(t&&t.split("~").length>3){
				var n=t.split("~");
				r={};
				return r.firstname=n[2],r.lastname=n[3],r.email=n[4].toLowerCase(),r}
			return undefined
			},

		i.login=function(){
			window.location="http://www.oracle.com/webapps/redirect/signon?nexturl="+encodeURI(window.location.href)
			},

		i.logout=function(){
			e.remove("ORASSO_AUTH_HINT");
			var t=$.parseURL(window.location.href);
			t.path.indexOf("/secure")===-1?window.location="https://login.oracle.com/sso/logout?p_done_url="+encodeURI(window.location.href):window.location="https://login.oracle.com/sso/logout?p_done_url="+encodeURI("http://www.oracle.com/partners/")
			},

		i.handleLogInOut=function(){
			$(".login-link").on("click",function(e){e.preventDefault(),i.login()});
			$(".logout-link").on("click",function(e){e.preventDefault(),i.logout()});
			if(i.isLoggedIn()){
				var e=i.getUserDetails();
					$(".logged-in-content").show();
					$(".logged-in-content").removeClass("hidden");
					$(".append-firstname-greeting").append(e.email);
				}

				else {
					$(".logged-out-content").show();
					$(".logged-out-content").removeClass("hidden");
				}
			},

		i
});

*/

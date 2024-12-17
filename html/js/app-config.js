
window.ohcglobal="ohc-book-template";

requirejs.config({
	waitSeconds:0,

	shim:{
		debounce:{deps:["jquery"]},
		bootstrap:{deps:["jquery"]},
		"oracle-universal":{deps:["jquery"]}
	},

	paths:{
		text:"text",
	  jquery:"jquery-3.5.1.min",
		domReady: "domReady",
		"jquery-ui":"jquery-ui.min.1.12.1",
		debounce:"jquery.ba-throttle-debounce.min",
		"custom-handlebars-page-template":"custom-handlebars-page-template",
	  bootstrap:"bootstrap.bundle.min.4.3.1",
		handlebars:"handlebars.min",
		highlightjs:"highlight.pack",
		"js-cookie":"js-cookie",
		"clipboardjs":"clipboard",
		"ohc-url":"ohc-url",
		"ohc-sso":"ohc-sso",
		feedback:"feedback",
		i18n:"i18n",
		"appish-main":"appish-main",
		"copy-button":"copy-button",
		"build-right-nav":"build-right-nav"
	}

});


require(['app-main']);

define("app-config",function(){
	console.log("app-config is loaded");

});

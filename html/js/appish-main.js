define("appish-main",["jquery","highlightjs","ohc-url","handlebars","ohc-sso","i18n","feedback","copy-button","build-right-nav","bootstrap","debounce","jquery-ui"],function(e,t,n,r,i,s,o,copybutton,brn){





	function w(){
		if(v)return;
		if(!c){
			e(".ohc-menu .tab-pane").css("width",e(".ohc-menu").width()-1);
			if(e(window).scrollTop()-e("main").offset().top>=0){
				var t=Math.round(e(window).scrollTop()+e(window).height()-e("#u10").offset().top);
				t>=0?(e(".ohc-menu-controls nav").css("bottom",1+t+"px"),e(".ohc-menu.tab-content>.active").css("bottom",1+t+"px")):(e(".ohc-menu-controls nav").css("bottom",""),e(".ohc-menu.tab-content>.active").css("bottom","")),e(".ohc-menu-controls nav").addClass("fixed"),e(".ohc-menu.tab-content>.active").addClass("fixed")
			}
			else e(".ohc-menu-controls nav").removeClass("fixed"),e(".ohc-menu.tab-content>.active").removeClass("fixed"),e(".ohc-menu.tab-content>.active").css("bottom",""),e(".ohc-menu-controls nav").css("bottom","")
		}
		}

/*	function S(){var t=[];if(e("#ssot-metadata").length)try{var n=JSON.parse(e("#ssot-metadata").text()),r=n.primary,i="";r.component&&(typeof r.component.display_in_url=="undefined"||r.component.display_in_url)&&(i+="../",t.unshift({title:r.component.element_name,href:i+"index.html"})),r.platform&&(typeof r.platform.display_in_url=="undefined"||r.platform.display_in_url)&&(i+="../",t.unshift({title:r.platform.element_name,href:i+"index.html"})),r.release&&(typeof r.release.display_in_url=="undefined"||r.release.display_in_url)&&(i+="../",t.unshift({title:r.release.element_name,href:i+"index.html"})),r.product&&(typeof r.product.display_in_url=="undefined"||r.product.display_in_url)&&(i+="../",t.unshift({title:r.product.element_name,href:i+"index.html"}));if(r.product_group&&(typeof r.product_group.display_in_url=="undefined"||r.product_group.display_in_url)){i+="../";if(d.protocol.indexOf("http")==0)t.unshift({title:r.product_group.element_name,href:i+"index.html"});else{var o="https://docs.oracle.com/"+s("dir")+"/";r.category&&(typeof r.category.display_in_url=="undefined"||r.category.display_in_url)&&(o+=r.category.short_name+"/"),r.suite&&(typeof r.suite.display_in_url=="undefined"||r.suite.display_in_url)&&(o+=r.suite.short_name+"/"),o+=r.product_group.short_name+"/index.html",t.unshift({title:r.product_group.element_name,href:o})}}if(r.suite&&e("html").hasClass("solution")){var u="reference-architectures",a=s("Reference Architectures");r.suite.short_name!="reference-architectures"?(u="solution-guides",a=s("Solution Playbooks")):e("html").addClass("reference-architecture");if(d.protocol.indexOf("http")==0)t.unshift({title:a,href:"/"+s("dir")+"/solutions/index.html?type="+u});else{var o="https://docs.oracle.com/"+s("dir")+"/";r.category&&(typeof r.category.display_in_url=="undefined"||r.category.display_in_url)&&(o+=r.category.short_name+"/"),o+="/index.html?type="+u,t.unshift({title:a,href:o})}}else if(r.suite&&(typeof r.suite.display_in_url=="undefined"||r.suite.display_in_url)){i+="../";if(d.protocol.indexOf("http")==0)t.unshift({title:r.suite.element_name,href:i+"index.html"});else{var o="https://docs.oracle.com/"+s("dir")+"/";r.category&&(typeof r.category.display_in_url=="undefined"||r.category.display_in_url)&&(o+=r.category.short_name+"/"),o+=r.suite.short_name+"/index.html",t.unshift({title:r.suite.element_name,href:o})}}if(r.suite&&e("html").hasClass("solution")){i+="../";if(d.protocol.indexOf("http")==0)t.unshift({title:"Architecture Center",href:"/"+s("dir")+"/solutions/index.html"});else{var o="https://docs.oracle.com/"+s("dir")+"/solutions/index.html";t.unshift({title:"Architecture Center",href:o})}}else if(r.category&&(typeof r.category.display_in_url=="undefined"||r.category.display_in_url)){i+="../";if(d.protocol.indexOf("http")==0)t.unshift({title:r.category.element_name,href:i+"index.html"});else{var o="https://docs.oracle.com/"+s("dir")+"/"+r.category.short_name+"/index.html";t.unshift({title:r.category.element_name,href:o})}}}catch(f){console.log("Error: Problem parsing SSOT meta-data. "+f.message)}var l=e('<ol class="breadcrumb hidden-print" vocab="http://schema.org/" typeof="BreadcrumbList"></ol>');if(t.length){for(var c=t.length-1;c>=0;c--){var h=t[c];c==t.length-1?l.prepend('<li class="active up" property="itemListElement" typeof="ListItem"><a href="'+h.href+'"><span property="name">'+s(h.title)+"</span></a></li>"):l.prepend('<li property="itemListElement" typeof="ListItem"><a href="'+h.href+'"><span property="name">'+s(h.title)+"</span></a></li>")}l.find("li").each(function(t){e(this).append('<meta property="position" content="'+t+'">')}),e("html").hasClass("solution")?e("#hero-blue h1").before(l):e("body > header > div").prepend(l)}}*/

/* ----------------------------------- custom breadcrumb function -------------------------------*/

	function S(){
		var t=[];
		if(e("#ssot-metadata").length) {

				try{
						var n=JSON.parse(e("#ssot-metadata").text());
						var r=n.primary;
						var breadcrumb = '<ol class="breadcrumb hidden-print" vocab="http://schema.org/" typeof="BreadcrumbList">';
						var language = e("meta[name=language]")[0].content;
						var path = 'https://docs.oracle.com/'+language + '/';
						var i=0;

						//test for category
						if (r.category&&r.category.display_in_url) {
							var path = path + r.category.short_name + '/';
							var category = '<li property="itemListElement" typeof = "ListItem"><a href="' + path + 'index.html"><span property="name">' + r.category.element_name + '</span></a><meta property="position" content="' + i + '"></li>'
							breadcrumb += category;
							i = i + 1;
						}

						//test for suite
						if (r.suite&&r.suite.display_in_url) {
							var path = path + r.suite.short_name +'/';
							var suite = '<li property="itemListElement" typeof = "ListItem"><a href="' + path + 'index.html"><span property="name">' + r.suite.element_name + '</span></a><meta property="position" content="' + i + '"></li>'
							breadcrumb += suite;
							i = i + 1;
						}

						//test for product group
						if (r.product_group&&r.product_group.display_in_url) {
							var path = path + r.product_group.short_name +'/';
							var productgroup = '<li property="itemListElement" typeof = "ListItem"><a href="' + path + 'index.html"><span property="name">' + r.product_group.element_name + '</span></a><meta property="position" content="' + i + '"></li>'
							breadcrumb += productgroup;
							i = i + 1;
						}
						//test for product
						if (r.product&&r.product.display_in_url) {
							var path = path + r.product.short_name +'/';
							var product = '<li property="itemListElement" typeof = "ListItem"><a href="' + path + 'index.html"><span property="name">' + r.product.element_name + '</span></a><meta property="position" content="' + i + '"></li>'
							breadcrumb += product;
							i = i + 1;
						}

						//test for release
						if (r.release&&r.release.display_in_url) {
							var path = path + r.release.short_name +'/';
							var release = '<li property="itemListElement" typeof = "ListItem"><a href="' + path + 'index.html"><span property="name">' + r.release.element_name + '</span></a><meta property="position" content="' + i + '"></li>'
							breadcrumb += release;
							i = i + 1;
						}

						//close off the breadcrumb
						breadcrumb += '</ol>'

						//add the breadcrumb to the beginning of the div in the header
						e("body > div.page > header > div").prepend(breadcrumb);
						// add a class to the last li
						e('ol.breadcrumb li:last-child').addClass('active up');
				}
				catch(f){
					console.log("Error: Problem parsing SSOT meta-data. "+f.message)
				}
		} //end if
	} //end function

/* ----------------------------------- end custom breadcrumb function -------------------------------*/


	function x(){t.configure({languages:["json"]})}

	function T(){if(navigator.userAgent.match(/IEMobile\/10\.0/)){var e=document.createElement("style");e.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}")),document.querySelector("head").appendChild(e)}}

	function N(){e(window).off("scroll",E),e(window).off("resize",E);var t=e("article").first();t.attr("tabindex",-1).focus(),t.offset()&&e(window).scrollTop(e("article").offset().top),e(window).scroll(E),e(window).resize(E)}

	function C(){e(".skipto").click(function(e){e.preventDefault(),e.stopImmediatePropagation(),N()});var t=e("article").first();t.on("blur focusout",function(){e(this).removeAttr("tabindex")})}


	function k(){
		c||e(".ohc-menu-control-item a").on("show.bs.tab",function(t){var n=e(e(t.target).attr("href")),r=e(window).scrollTop()+e(window).height()-e("#u10").offset().top;if(e(window).scrollTop()-e("main").offset().top>=0){var r=Math.round(e(window).scrollTop()+e(window).height()-e("#u10").offset().top);e(".ohc-menu .tab-pane").css("width",e(".ohc-menu").width()-1),n.addClass("fixed"),r>=0?n.css("bottom",1+r+"px"):n.css("bottom","")}else n.removeClass("fixed"),n.css("bottom","")}),

		e(".ohc-menu-control-item a").on("shown.bs.tab",function(t){if(e(window).scrollTop()-e("main").offset().top>=0){var n=e("#tab-toc"),r=n.find(".tocitem.active"),i=n.height()/2-(r.offset().top-e(window).scrollTop())-r.height();n.scrollTop(n.scrollTop()-i)}}),

		/* original*/

				e(".ohc-menu-control-item a").on("click",function(t){
					if(t.which>1)return;
					t.preventDefault();
					t.stopImmediatePropagation();
					e("body > header .navbar-collapse").collapse("hide");
					e(this).parent().hasClass("active")?(

							e(".ohc-menu.tab-content>.active").removeClass("fixed"),
							e("li.ohc-menu-control-item.active").removeClass("active"),
							e("li.ohc-menu-control-item").attr("aria-selected","false"),
							e(".ohc-menu").fadeOut("fast",function(){e(".ohc-menu").addClass("hidden")}))

						: (
							e(this).tab("show"),
							e(".ohc-menu").removeClass("hidden"),
							e(".ohc-menu").fadeIn("slow"),
							e("li.ohc-menu-control-item").attr("aria-selected","false"),
							e("li.ohc-menu-control-item.active").removeClass("active"),
							e(".ohc-menu-control-item a[href="+e(this).attr("href")+"]").parent().addClass("active"),
							e(".ohc-menu-control-item a[href='"+e(this).attr("href")+"']").parent().attr("aria-selected","true"))
				}) /*end original*/


			/* custom code
			e(".ohc-menu-control-item a").on("click",function(t){
						if(t.which>1)return;
						t.preventDefault();
						t.stopImmediatePropagation();
						e("body > header .navbar-collapse").collapse("hide");

					if (	e(this).parent().hasClass("active") ) {
								e(".ohc-menu.tab-content>.active").removeClass("fixed");
								e("li.ohc-menu-control-item.active").removeClass("active");
								e("li.ohc-menu-control-item").attr("aria-selected","false");
								e(".ohc-menu").fadeOut("fast",function(){e(".ohc-menu").addClass("hidden")});

							} else {
								e(this).tab("show");
								e(".ohc-menu").removeClass("hidden");
								e(".ohc-menu").fadeIn("slow");
						  	e(this).closest('li.ohc-menu-control-item').addClass("active");
						  	e(this).closest('li.ohc-menu-control-item').attr("aria-selected","true");
							}
					})
			 end custom code */
	}

	function L(t){var n=e("#tab-toc ul.treeroot");e(".activedescendant",n).removeClass("activedescendant").attr("aria-selected","false").attr("tabindex","-1"),e("#"+t).addClass("activedescendant").attr("aria-selected","true").attr("tabindex","0"),e("#"+t).closest("ul.treeroot").attr("aria-activedescendant",t)}

	function A(t){var n=e("> div",t),r=e("> ul",t);n.hasClass("collapsed")?(r.removeClass("hide-group").addClass("show-group"),n.removeClass("collapsed").addClass("expanded"),t.attr({"aria-expanded":"true"})):(e(".show-group",t).removeClass("show-group").addClass("hide-group"),e(".expanded",t).addClass("collapsed"),e("[aria-expanded=true]",t).attr({"aria-expanded":"false"}),t.attr({"aria-expanded":"false"})),L(t.attr("id"))}

	function O(){e("#tab-toc > header .fa-minus-square").on("click",function(t){t.preventDefault(),t.stopImmediatePropagation();var n=e("#tab-toc .activedescendant").parents("li").last().attr("id");e("#tab-toc .treeview .tree .toggle.expanded").each(function(){var t=e(this),n=t.parent(),r=e("> ul",n);t.removeClass("expanded").addClass("collapsed"),r.removeClass("show-group").addClass("hide-group"),n.attr({"aria-expanded":"false"})}),n&&L(n)}),e("#tab-toc > header .fa-plus-square").on("click",function(t){t.preventDefault(),t.stopImmediatePropagation(),e("#tab-toc .treeview .tree .toggle.collapsed").each(function(){var t=e(this),n=t.parent(),r=e("> ul",n);t.removeClass("collapsed").addClass("expanded"),r.removeClass("hide-group").addClass("show-group"),n.attr({"aria-expanded":"true"})})}),e("#tab-toc .treeview").length&&e("#tab-toc .treeview").each(function(){function n(n,r){var i=e(".tree.show-group > li, > li",t),s=i.index(n);if(r=="up"||r=="parent")var o=0,u=-1;else var o=i.length-1,u=1;if(s==o)return!1;if(r=="parent"){var a=i.index(n.parent().parent());if(a===-1)return!1;var f=i.eq(a)}else var f=i.eq(s+u);n.attr("tabindex","-1"),f.attr("tabindex","0").focus(),L(f.attr("id"))}var t=e("#tab-toc ul.treeroot");t.on("keydown",function(r){if(!(r.shiftKey||r.ctrlKey||r.altKey||r.metaKey)){var i=e("#"+t.attr("aria-activedescendant"));switch(r.which){case 13:r.preventDefault(),r.stopImmediatePropagation(),e(".activedescendant").find("> span a")[0].click();break;case 32:e("> a",i).length&&(location.href=e("> a",i).attr("href"),r.stopImmediatePropagation());break;case 38:r.preventDefault(),r.stopImmediatePropagation(),n(i,"up");break;case 40:r.preventDefault(),r.stopImmediatePropagation(),n(i,"down");break;case 37:r.preventDefault(),r.stopImmediatePropagation(),i.attr("aria-expanded")=="false"||i.is(".noChildren")?n(i,"parent"):A(i);break;case 39:r.preventDefault(),r.stopImmediatePropagation(),i.attr("aria-expanded")=="true"?n(i,"down"):A(i)}}}),e("#tab-toc .toggle").on("click",function(t){t.preventDefault(),t.stopImmediatePropagation(),A(e(this).parent())}).hover(function(){e(this).toggleClass("hover")})})}

	function M(t){var n=[];if(p.length===1)return n.push(p[0]),n;if(!history.replaceState)if(t.length===0)var i=undefined;else var i=t[0].hash;else var r=e.parseURL(window.location.href),i=r.hash;if(!i)t:for(var s=0;s<p.length;s++){if(!p[s].hash){n.push(p[s]);break t}var o=p[s].hash.indexOf("#")>=0?p[s].hash.split("#").splice(1).join("#"):p[s].hash;if(o.length===0){n.push(p[s]);break t}}else{e:for(var s=0;s<p.length;s++)if(!!p[s].hash){var o=p[s].hash.indexOf("#")>=0?p[s].hash.split("#").splice(1).join("#"):p[s].hash;if(i===o){n.push(p[s]);break e}}n.length===0&&(n=t)}return n.length===0&&p.length>0&&n.push(p[0]),n}

	function _(t,n){if(e("#tab-toc").length){var r=e("article").offset().top;e("#tab-toc span.active").removeClass("active");if(t)var i=M(t);else var i=M(D());if(i.length>0){var s=e(i[0]),o=!1;s.parentsUntil("#tab-toc","li.hasChildren").each(function(){$li=e(this);var t=e("> div",$li);if(t.hasClass("collapsed")){o=!0;var n=e("> ul",$li);n.removeClass("hide-group").addClass("show-group"),t.removeClass("collapsed").addClass("expanded"),$li.attr({"aria-expanded":"true"})}});var u=s.closest(".treeview");u.hasClass("collapse")&&u.collapse("show"),e("#tab-toc .treeview.collapse").not(u).collapse("hide"),s.parent().addClass("active");var a=s.parent().parent().attr("id");L(a);function f(){var t=e("#tab-toc"),n=t.find(".tocitem.active");e("html").hasClass("solution")&&(t=t.parent());var r=t.height()/2-(n.offset().top-e(window).scrollTop())-n.height();t.stop(!0).animate({scrollTop:t.scrollTop()-r},"fast")}if(e(window).width()<768){if(!h&&n==undefined){var l=e("article").offset().top,c=l-r;e(window).scrollTop(e(window).scrollTop()+c)}}else setTimeout(f,200)}}}

	function D(){var e=[],t={};for(var n=0;n<p.length;n++)if(!!p[n].hash){var r=p[n].hash.indexOf("#")>=0?p[n].hash.split("#").splice(1).join("#"):p[n].hash,i=document.getElementById(r);i&&(e.push(i),t[r]=p[n])}var s=[],o=I(e);return o.onScreen.length&&s.push(t[o.onScreen[0].attr("id")]),s.length===0&&o.aboveScreen.length&&s.push(t[o.aboveScreen[o.aboveScreen.length-1].attr("id")]),s}

	function P(e){
		var t=D(),
		n=window.location.href;
		t.length===0?window.location.hash&&(n=window.location.href.replace(window.location.hash,"")):window.location.hash?n=window.location.href.replace(window.location.hash,t[0].hash):n=window.location.href+t[0].hash;
		var r=window.location.href;
		n!=r&&(!history.replaceState||history.replaceState({href:n},null,n));
		if(n!=r||e!==undefined)e!==undefined?_(t,e):_(t)
	}


	function H(){e("article pre code, article .codeblock").each(function(e,n){t.highlightBlock(n)})}

	function B(t){
		e(window).off("scroll",E),
		e(window).off("resize",E),
		e("head link[rel=prev]").remove(),
		e("head link[rel=next]").remove(),
		v||e(".ohc-menu-controls").css("height",e("#u10").position().top-e(window).scrollTop()),
		e("article").fadeTo(0,0);
		var n=!1,
		r=e.Deferred();
		if(window.location.protocol=="file:"&&(window.ActiveXObject||"ActiveXObject"in window))
			try{
				var i=new ActiveXObject("Msxml2.XMLHTTP");n=!0}
				catch(s){
					var i=new XMLHttpRequest
				}

		else var i=new XMLHttpRequest;

		i.overrideMimeType&&i.overrideMimeType("text/plain"),
		i.onreadystatechange=function(){i.readyState===4&&(i.status===200||n&&i.status===0?r.resolve(i.responseText):r.reject())};

		try{i.open("GET",t,!0),i.send()}
		catch(o){r.reject()}

		var u=e.when(r.promise(),e("article").promise());

		u.done(function(t){
			e("article").empty(),t=t.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),t=t.replace(/<link rel="stylesheet"[^>]*>/gi,"");var n=e("<div></div>").html(t);e(document).prop("title",n.find("> title").text()),n.find("link[rel=prev]").appendTo(e("head")),n.find("link[rel=next]").appendTo(e("head"));var r=n.find("article");e("article").html(r.html()),e(document).trigger("articleload")}),u.fail(function(t){e(document).trigger("articlefail",t)})}

	function j(t){function r(e,t){var r=document.createElement("input");r.setAttribute("type","hidden"),r.setAttribute("name",e),r.setAttribute("value",t),n.append(r)}var n=e("#search-form");e("#search-form").find("input[name=category]").remove(),e("#search-form").find("input[name=product]").remove(),e("#search-form").find("input[name=book]").remove();var i=n.find("input[name=search-scope]:checked").val();switch(i){case"book":r("book",b.pageData.book);case"product":r("product",b.pageData.product);case"category":r("category",b.pageData.category)}}

	function F(){typeof hiddenDlink=="function"&&(e('article a[href$=".pdf"]').click(hiddenDlink),e('article a[href$=".mobi"]').click(hiddenDlink),e('article a[href$=".epub"]').click(hiddenDlink)),typeof s_Ping=="function"&&(s_PingOK=typeof s_PingOK!="undefined"?s_PingOK:!0,s_Ping(s_PingOK))}

	function I(t){var n={aboveScreen:[],onScreen:[]},r=e(window).scrollTop()-18,i=r+e(window).height(),s=null;for(var o=0;o<t.length;o++){var u=e(t[o]),a=u.offset().top;u.is(":empty")&&(a+=12),a>r&&a<i?n.onScreen.push(u):a<r&&n.aboveScreen.push(u)}return n.aboveScreen.sort(function(e,t){var n=e.offset().top,r=t.offset().top;return n<r?-1:n>r?1:0}),n.onScreen.sort(function(e,t){var n=e.offset().top,r=t.offset().top;return n<r?-1:n>r?1:0}),n}


	//STUFF OUTSIDE OF FUNCTIONS


	/* custom function to check on window resize for TOC */
		function fixTOC() {
			var width = window.innerWidth;
			if ((width >= 1200) && (e(".ohc-menu").not("hidden"))){
				e(".ohc-menu").css("display","table-cell");
				//e(".ohc-menu-control-item a").attr('data-placement','right');
				}
			if ((width < 1200) && (e(".ohc-menu").not("hidden"))){
				e(".ohc-menu").css("display","block");
			//	e(".ohc-menu-control-item a").attr('data-placement','top');
				}
		}
		window.onresize = fixTOC;
/* end custom function for TOC resize fix */




/* custom function for tooltip positioning */
		var tooltipoptions = {
			placement: function (context, source) {
				var width = window.innerWidth;

					if (width > 1200) {
						//large screen
						if (($(source).attr('href') =='#tab-toc') || ($(source).attr('href') =='#tab-search') || ($(source).attr('href') =='#tab-download')    )  {
							return "right";
						}
						if (($(source).attr('id') =='expandTOC') || ($(source).attr('id') == 'collapseTOC')) {
							return "top";
						}

					}

					else {
						//small screen
						return "top";
					}

					//for copy button
					if (($(source).attr('class') == 'copy-btn') && (width>1200)) {
							return "top";
					}
					else {
						return "left";
					}

				}
				, trigger: "hover"
		};


		//end custom function for tooltips



	var a=e("head link[rel=contents]");

	if(a.length)var f=a.attr("href");
	else var f="toc.htm";

	e.fn.collapse.Constructor.TRANSITION_DURATION=100;

	var l=document.createElement("a");

	l.style.cssText="position: -webkit-sticky; position: -moz-sticky; position: -ms-sticky; position: -o-sticky; position: sticky;";

	var c=l.style.position.indexOf("sticky")!==-1;

	c&&e("html").addClass("csspositionsticky"),window.navigator.userAgent.indexOf("Edge")>-1&&e("html").addClass("edge"),e("html").is("[dir=rtl]")&&e("html").addClass("rtl");

	var l=document.createElement("div");

	l.style.cssText="overflow-anchor: none";

	var h=l.style.overflowAnchor?!0:!1;r.registerHelper("if_eq",function(e,t,n){return e===t?n.fn(this):n.inverse(this)}),r.registerHelper("if_inspired",function(t){return e("html").hasClass("inspired")?t.fn(this):t.inverse(this)}),e.ajaxSetup({cache:!1}),x();

	var p=[],d=e.parseURL(window.location.href);

	if(window.top===window&&typeof d.params.embed=="undefined")var v=!1,m=0;
	else if(typeof d.params.embed!="undefined"&&d.params.embed==0)var v=!1,m=0;
	else if(typeof d.params.embed!="undefined")var v=!0,m=d.params.embed;
	else if(window.top!==window){var v=!0,g=e("head link[rel=prev]"),y=e("head link[rel=next]");if(g.length>0||y.length>0)var m=2;else var m=1}

	var b={};

	b.getTemplateData=function(){b.pageData={};var t=e("meta[name=application-name]");t.length?b.pageData.title=e(t[0]).attr("content"):b.pageData.title=e(document).prop("title"),b.pageData.user=i.getUserDetails();var n=e("link[rel=alternate]");n.length&&(b.pageData.tabdownload=[],n.each(function(){var t=e(this),n={};n.href=t.attr("href"),n.title=t.attr("title"),n.type=t.attr("type"),b.pageData.tabdownload.push(n)}));var r=e("meta[name=dcterms\\.dateCopyrighted]");r.length?b.pageData.copyright=e(r[0]).attr("content"):b.pageData.copyright=(new Date).getFullYear();var s=e("meta[name=dcterms\\.category]");s.length&&(b.pageData.category=e(s[0]).attr("content"));var o=e("meta[name=dcterms\\.product]");o.length&&(b.pageData.product=e(o[0]).attr("content"),b.pageData.product.indexOf("/database/oracle/oracle-database/20")!==-1&&(b.pageData.alertMsg="<em>Oracle Database 20c is available only for preview. It is not available for production use. Upgrades to or from Oracle Database 20c are not supported.</em>"));var u=e("meta[name=dcterms\\.isVersionOf]");if(u.length){var a=e(u[0]).attr("content");a&&a.indexOf("-")===-1&&(b.pageData.book=a.toLowerCase())}




	/* custom code */
	var contenttype = e("meta[name=article-type]");
	b.pageData.contenttype = e(contenttype[0]).attr("content");
		/* end custom code */




	return b.pageData},

	b.goToAnchor=function(t){e(window).off("scroll",E),e(window).off("resize",E);var n=document.getElementById(t);e(n).focus(),n!==document.activeElement&&(e(n).attr("tabindex",-1),e(n).focus()),e(n).offset()&&e(window).scrollTop(e(n).offset().top+1),e(window).scroll(E),e(window).resize(E)},

	b.handleInternalClick=function(t){
		if(t.which>1)return;
		if(!history.replaceState||!b.ajax)return;
		t.preventDefault(),t.stopImmediatePropagation();
		var n=e.parseURL(window.location.href),
		r=e.parseURL(this.href),
		i=document.createElement("a");
		i.href="#";
		if(this.href===i.href||this.href==="#")return!0;
		if(n.target+"#"+n.hash==r.target+"#"+r.hash)r.hash?b.goToAnchor(r.hash):(e(window).width()<768||e(window).scrollTop()>e("article").offset().top)&&N();
		else if(n.target===r.target){r.hash?b.goToAnchor(r.hash):(e(window).width()<768||e(window).scrollTop()>e("article").offset().top)&&N();
		var s=e(this).attr("href"),
		o=e.parseURL(s);
		v&&(o.search?this.search+="&embed="+m:this.search="?embed="+m,
		s=e(this).attr("href")),
		history.pushState({href:s},null,s),_()}
		else{
			var s=this.href;
			v&&(r.search?this.search+="&embed="+m:this.search="?embed="+m,s=e(this).attr("href")),
			history.pushState({href:s},null,s),B(this.href)}
	},

	b.templateInit=function(){
		console.log("Start common.templateInit: "+Date.now());if(!v){var t=require.toUrl("oracle-universal-local.js");e.getScript(t),o.init()}


		var r=[f],s=e("head link[rel=prev]");
		s.length&&r.push(s.attr("href"));
		var u=e("head link[rel=next]");
		u.length&&r.push(u.attr("href")),n.configure([],r);var a=b.loadToc();"scrollRestoration"in history&&(history.scrollRestoration="manual"),T(),v?m>1&&e("article").removeClass("embedded"):S(),window.onpopstate=function(t){
			if(!n.isUrlCurrent(e("article").data("id")))B(window.location.href);
			else{var r=e.parseURL(window.location.href);
			if(!r.hash)(e(window).width()<768||e(window).scrollTop()>e("article").offset().top)&&e(window).scrollTop(e("article").offset().top+15);
			else{var i=e("a[href="+location.hash.replace(/(:|\.|\[|\]|,|=|%|@)/g,"\\$1")+"][data-toggle=tab]");i.length?i.tab("show"):(b.goToAnchor(r.hash),_())}}},

			e("#tab-toc").length===0&&(e("li.ohc-menu-control-item.active").removeClass("active"),
			e(".ohc-menu").addClass("hidden")),



			v||(e(".ohc-menu-controls > nav > ul > li").clone(!0).appendTo("#navbar-collapse-1 .visible-xs-block"),k()),e("article").on("shown.bs.tab",'a[data-toggle="tab"]',function(t){!history.replaceState||(history.replaceState(null,null,e(t.target).attr("href")),F())});if(!v){e("#search-form input[type=radio]").first().prop("checked",!0);if(!/docs.*oracle\.com/.test(d.hostname)&&e("#search-form").length>0){var l=e("#search-form").attr("action");e("#search-form").attr("action","https://docs.oracle.com"+l)}e("#search-form").submit(j);if(b.pageData.category){var c=e("#u02search .u02searchform input[name=category]");c.length?c.attr("value",b.pageData.category):e("#u02search .u02searchform").append('<input aria-hidden="true" type="hidden" name="category" value="'+b.pageData.category+'">')}var g=e("meta[name='dcterms.product']");if(g.length){var y=e("#u02search .u02searchform input[name=product]");

		y.length?y.attr("value",g.attr("content")):e("#u02search .u02searchform").append('<input aria-hidden="true" type="hidden" name="product" value="'+g.attr("content")+'">')}n.isOracle()&&(i.handleLogInOut(),e("head").append('<link rel="shortcut icon" href="/sp_common/book-template/ohc-common/img/o-icon/favicon.ico"><link rel="icon" sizes="16x16 32x32 64x64 120x120" href="/sp_common/book-template/ohc-common/img/o-icon/favicon.ico"><link rel="icon" type="image/png" sizes="270x270" href="/sp_common/book-template/ohc-common/img/o-icon/favicon-270.png"><link rel="icon" type="image/png" sizes="192x192" href="/sp_common/book-template/ohc-common/img/o-icon/favicon-192.png"><link rel="icon" type="image/png" sizes="128x128" href="/sp_common/book-template/ohc-common/img/o-icon/favicon-128.png"><link rel="icon" type="image/png" sizes="32x32" href="/sp_common/book-template/ohc-common/img/o-icon/favicon-32.png"><link rel="apple-touch-icon" sizes="120x120" href="/sp_common/book-template/ohc-common/img/o-icon/favicon-120.png"><link rel="apple-touch-icon" sizes="152x152" href="/sp_common/book-template/ohc-common/img/o-icon/favicon-152.png"><link rel="apple-touch-icon" sizes="180x180" href="/sp_common/book-template/ohc-common/img/o-icon/favicon-180.png"><link rel="apple-touch-icon" sizes="270x270" href="/sp_common/book-template/ohc-common/img/o-icon/favicon-270.png"><meta name="msapplication-TileColor" content="#FFFFFF"><meta name="msapplication-TileImage" content="/sp_common/book-template/ohc-common/img/o-icon/favicon-152.png"><meta name="msapplication-config" content="/sp_common/book-template/ohc-common/img/o-icon/browserconfig.xml">')),C();

		var w=500;
		e(".ohc-menu").resizable({maxWidth:w,minWidth:200,handles:"e",create:function(t,n){e(this).parent().on("resize",function(e){e.stopPropagation()})},resize:e.throttle(50,function(t,n){e(this).find("> .tab-pane").outerWidth(n.size.width-1)})});

		function x(){var t=e(".ohc-menu");t.length&&(t.resizable("disable"),t.css("width",""),t.find("> .tab-pane").css("width",""))}

		e(window).width()<768&&x(),
		e(window).resize(e.throttle(50,function(){if(e(window).width()>=768){e(".ohc-menu").resizable("enable");var t=e(".ohc-menu");if(t.length){var n=e(window).width()-(e(".ohc-menu-controls").outerWidth()+e("article").outerWidth())-1;t.resizable("option","maxWidth",n);var r=t[0].style.width;r&&(r=parseInt(r,10),r>n&&(t.outerWidth(n),t.find("> .tab-pane").outerWidth(n-1)))}}else x()})),

		e("#solutions-back-link").length&&typeof document.referrer!="undefined"&&document.referrer.length>0&&n.isUrlSameOrigin(document.referrer)&&e.parseURL(document.referrer).path.indexOf("solutions/index.html")!=-1&&e("#solutions-back-link").attr("href",document.referrer),

		e("#tab-toc").length&&(a.done(function(t){
			console.log("Finish common.loadToc: "+Date.now());
			if(e(window).width()<768){var n=e("article").offset().top;e(window).off("scroll",E),e(window).off("resize",E)}
			document.getElementById("tab-toc").innerHTML=t;
			var r=e("#tab-toc ul a[href]"),
			i=r.not(":urlSameOrigin");
			i.attr("target","_blank");
			var s=r.filter(":urlSameOrigin");
			p=s.filter(":urlCurrent").toArray(),
			s.on("click",b.handleInternalClick),
			e("article a[href]:not([data-toggle])").filter(":urlInternal").on("click",b.handleInternalClick),

			//	e("article").find('[data-toggle="tooltip"]').tooltip({container:"body"});
			//	e("#tab-toc > header").find('[data-toggle="tooltip"]').tooltip({container:"body"}),

			$('[data-toggle="tooltip"]').tooltip(tooltipoptions),


			O(),
			P(!0);
			if(e(window).width()<768){e(window).scroll(E),e(window).resize(E);if(!h){var o=e("article").offset().top,u=o-n;e(window).scrollTop(e(window).scrollTop()+u)}}}),a.fail(function(t){e("#tab-toc").html(t)}));

		var N=e("#share-buttons");if(N.length){var L=location.href,A=e.parseURL(window.location.href);if(A.hostname.indexOf("docs-stage")===0||A.hostname.indexOf("docs-uat")===0)L="https://docs.oracle.com"+A.path;var M="https://api.addthis.com/oexchange/0.8/forward/",D="/offer?url="+encodeURIComponent(L)+"&pubid=ra-552992c80ef99c8d&ct=1&title="+encodeURIComponent(document.title)+"&pco=tbxnj-1.0";N.find(".fa-facebook").closest("a").attr("href",M+"facebook"+D),N.find(".fa-twitter").closest("a").attr("href",M+"twitter"+D),N.find(".fa-envelope").closest("a").attr("href",M+"email"+D),N.find(".fa-plus").closest("a").attr("href","https://www.addthis.com/bookmark.php?source=tbx32nj-1.0&v=300&url="+encodeURIComponent(L)+"&pubid=ra-552992c80ef99c8d&ct=1&title="+encodeURIComponent(document.title)+"&pco=tbxnj-1.0")}e("html.solution [data-toggle=tab]").click(function(t){t.preventDefault(),t.stopImmediatePropagation(),e(this).tab("show")})}d.protocol.indexOf("http")==0&&setTimeout(function(){e.getScript("https://consent.truste.com/notice?domain=oracle.com&c=teconsent&js=bb&cdn=1&pcookie&noticeType=bb&text=true")},200);




		console.log("Finish common.templateInit: "+Date.now());

};

	var E=e.throttle(50,function(){w(),P()});


	
	/*custom b.loadToc function starts */
	/*

	return b.loadToc=function(){function t(t){function n(t,r,i,s,o){i==0?r.push("<ul id='"+s+(new Date).getTime()+"' class='treeroot tree' role='tree' aria-label='"+e(e.parseHTML(o)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' aria-activedescendant='"+s+"-node0'>"):r.push("<ul id='"+s+(new Date).getTime()+"' class='tree hide-group' role='group' aria-labelledby='"+s+"-entry'>");

	for (var u=0;u<t.length;u++) {
		var a=s+(i==0?"-node":"-")+u;
		f=t[u];
		if (f.hasOwnProperty("topics")&&f.topics.length) {
			if (u==0&&i==0) {
				r.push("<li aria-label='"+e(e.parseHTML(f.title)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' id='"+a+"' role='treeitem' aria-selected='true' tabindex='0' aria-level='"+(i+1)+"' class='hasChildren activedescendant' aria-expanded='false'>");
				}
			else {
				r.push("<li aria-label='"+e(e.parseHTML(f.title)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' id='"+a+"' role='treeitem' aria-selected='false' tabindex='-1' aria-level='"+(i+1)+"' class='hasChildren' aria-expanded='false'>");
				}
			r.push("<div aria-hidden='true' class='toggle collapsed tree-expander'>");
			r.push("<span id='" + a + "-entry' class='tocitem tree-expander-indicator' tabindex='-1'></span>" + f.title + "</div>");
			f.hasOwnProperty("topics")&&f.topics.length&&n(f.topics,r,i+1,a);
			r.push("</li>");
		}
		else
		{
			if (u==0&&i==0 ) {
				r.push("<li aria-label='"+e(e.parseHTML(f.title)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' id='"+a+"' role='treeitem' aria-selected='true' tabindex='0' aria-level='"+(i+1)+"' class='noChildren activedescendant'>");
				}
				else {
				r.push("<li aria-label='"+e(e.parseHTML(f.title)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' id='"+a+"' role='treeitem' aria-selected='false' tabindex='-1' aria-level='"+(i+1)+"' class='noChildren'>");
				}
			r.push("<span class='tocitem'>");
			if (f.hasOwnProperty("href")) {
				r.push("<a href='"+f.href+"' id='"+a+"-entry' tabindex='-1'>");
				r.push(f.title);
				r.push("</a>");
			}
					else {
						r.push("<span id='"+a+"-entry' class='wrap'>"),r.push(f.title),r.push("</span>");
						}
					r.push("</span>");
					f.hasOwnProperty("topics")&&f.topics.length&&n(f.topics,r,i+1,a);
					r.push("</li>");
		}
	} 

	r.push("</ul>")}

	var r=[];

	for(var i=0;i<t.toc.length;i++){
		var s=t.toc[i];
		if(i==0&&s.hasOwnProperty("heading")&&s.heading=="Table of Contents")var o="Introduction";
		else if(s.hasOwnProperty("heading"))var o=s.heading;
		else if(t.toc.length==1)var o="Table of Contents";
		else if(i==0)var o="Introduction";
		else var o="Section "+i;

	if (i==0) {
		r.push('<header class="clearfix"><h2>'+o+'</h2><span class="controls"><a href="#" id="expandTOC" class="fa fa-plus-square" data-toggle="tooltip" data-placement="bottom" role="button" aria-label="Expand All" title="Expand All"></a><a class="sr-only">Expand All</a><a href="#" id="collapseTOC" class="fa fa-minus-square" data-toggle="tooltip" data-placement="bottom" role="button" aria-label="Collapse All" title="Collapse All"></a><a class="sr-only">Collapse All</a></span></header>');
	}
	else {
		r.push("<h2>"+o+"</h2>");
	}
	r.push("<div class='treeview' id='treeview"+i+"'>");
	s.hasOwnProperty("topics")&&s.topics.length&&n(s.topics,r,0,"tree"+i,o);
	r.push("</div>");
	} //end for loop

	return r.join("")}console.log("Start common.loadToc: "+Date.now());var r=!1,i=e.Deferred();if(window.location.protocol=="file:"&&(window.ActiveXObject||"ActiveXObject"in window))try{var s=new ActiveXObject("Msxml2.XMLHTTP");r=!0}catch(o){var s=new XMLHttpRequest}else var s=new XMLHttpRequest;s.overrideMimeType&&s.overrideMimeType("text/plain"),s.onreadystatechange=function(){s.readyState===4&&(s.status===200||r&&s.status===0?i.resolve(s.responseText):i.reject())};try{s.open("GET",f,!0),s.send()}catch(u){i.reject()}var a=e.Deferred();return i.done(function(r){function i(t){var n={toc:[]},r=n.toc;if(e("html").hasClass("solution"))var i=t.find("article > h1, article > h2, article > h3, article > h4, article > ul, article > ul > li:has(>span)");else var i=t.find("article > h1, article > h2, article > h3, article > h4, article > header > h1, article > header > h2, article > header > h3, article > header > h4, article > ul");var o={};r.push(o);var u=0,a=0;for(var f=0;f<i.length;f++){var l=e(i[f]);if(i[f].nodeName.charAt(0)=="H")u>0&&(o={},r.push(o),u=0,a=0),u++,o.heading=l.html();else if(i[f].nodeName.charAt(0)=="L"){u>0&&(o={},r.push(o),u=0,a=0),u++;var c=l.find("> span");o.heading=c.prev().text()+c.html(),a++;var h=[];o.topics=h,s(c.next("ul"),h)}else{a>0&&(o={},r.push(o),u=0,a=0),a++;var h=[];o.topics=h,s(l,h)}}return n}function s(t,n){t.find("> li").each(function(){var t=e(this);if(t.not(":has(> span:not(.wrap))").length){var r={};n.push(r);var i=t.find("> a").first();if(i.length!=0)r.title=i.html(),r.href=i.attr("href");else{var o=t.find("> span.wrap").first();o.length!=0&&(r.title=o.html())}var u=t.find("> ul").first();if(u.length!=0){var a=[];r.topics=a,s(u,a)}}})}b.ajax=!0,r=r.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),r=r.replace(/<link rel="stylesheet"[^>]*>/gi,"");var o=e("<div></div>").html(r);n.configure(o.find("ul a[href]").filter(":urlSameOrigin"),[f]);var u=o.find("article");if(u.length!==1)require({baseUrl:"."},["toc"],function(r){var i=t(r),s=e("<div></div>").html(i);n.configure(s.find("ul a[href]").filter(":urlSameOrigin"),[f]),a.resolve(i)},function(e){a.reject("Unable to load Table of Contents")});else{var l=i(o);a.resolve(t(l))}}),i.fail(function(){b.ajax=!1,require({baseUrl:"."},["toc"],function(r){var i=t(r),s=e("<div></div>").html(i);n.configure(s.find("ul a[href]").filter(":urlSameOrigin"),[f]),a.resolve(i)},function(e){a.reject("Unable to load Table of Contents")})}),a.promise()},

	/* end custom*/

	
	
	/*original b.loadTOC*/
	return b.loadToc=function(){function t(t){function n(t,r,i,s,o){i==0?r.push("<ul id='"+s+(new Date).getTime()+"' class='treeroot tree' role='tree' aria-label='"+e(e.parseHTML(o)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' aria-activedescendant='"+s+"-node0'>"):r.push("<ul id='"+s+(new Date).getTime()+"' class='tree hide-group' role='group' aria-labelledby='"+s+"-entry'>");for(var u=0;u<t.length;u++){var a=s+(i==0?"-node":"-")+u,f=t[u];f.hasOwnProperty("topics")&&f.topics.length?(u==0&&i==0?r.push("<li aria-label='"+e(e.parseHTML(f.title)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' id='"+a+"' role='treeitem' aria-selected='true' tabindex='0' aria-level='"+(i+1)+"' class='hasChildren activedescendant' aria-expanded='false'>"):r.push("<li aria-label='"+e(e.parseHTML(f.title)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' id='"+a+"' role='treeitem' aria-selected='false' tabindex='-1' aria-level='"+(i+1)+"' class='hasChildren' aria-expanded='false'>"),r.push("<div aria-hidden='true' class='toggle collapsed'></div>")):u==0&&i==0?r.push("<li aria-label='"+e(e.parseHTML(f.title)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' id='"+a+"' role='treeitem' aria-selected='true' tabindex='0' aria-level='"+(i+1)+"' class='noChildren activedescendant'>"):r.push("<li aria-label='"+e(e.parseHTML(f.title)).text().replace(/'/g,"&#39;").replace(/\r?\n|\r/g," ").replace(/ +(?= )/g,"")+"' id='"+a+"' role='treeitem' aria-selected='false' tabindex='-1' aria-level='"+(i+1)+"' class='noChildren'>"),r.push("<span class='tocitem'>"),f.hasOwnProperty("href")?(r.push("<a href='"+f.href+"' id='"+a+"-entry' tabindex='-1'>"),r.push(f.title),r.push("</a>")):(r.push("<span id='"+a+"-entry' class='wrap'>"),r.push(f.title),r.push("</span>")),r.push("</span>"),f.hasOwnProperty("topics")&&f.topics.length&&n(f.topics,r,i+1,a),r.push("</li>")}r.push("</ul>")}var r=[];for(var i=0;i<t.toc.length;i++){var s=t.toc[i];if(i==0&&s.hasOwnProperty("heading")&&s.heading=="Table of Contents")var o="Table of Contents";else if(s.hasOwnProperty("heading"))var o=s.heading;else if(t.toc.length==1)var o="Table of Contents";else if(i==0)var o="Table of Contents";else var o="Section "+i;e("html").hasClass("solution")?r.push('<button class="toc-collapse-button collapsed" type="button" data-toggle="collapse" data-target="#treeview'+i+'" aria-expanded="false" aria-controls="treeview'+i+'">'+o+"</button>"):i==0?r.push('<header class="clearfix"><h2>'+o+'</h2><span class="controls"><a href="#" class="fa fa-plus-square" data-toggle="tooltip" data-placement="bottom" role="button" aria-label="Expand All" title="Expand All"></a><a class="sr-only">Expand All</a><a href="#" class="fa fa-minus-square" data-toggle="tooltip" data-placement="bottom" role="button" aria-label="Collapse All" title="Collapse All"></a><a class="sr-only">Collapse All</a></span></header>'):r.push("<h2>"+o+"</h2>"),e("html").hasClass("solution")?r.push("<div class='treeview collapse toc-collapse-row' id='treeview"+i+"' aria-expanded='false'>"):r.push("<div class='treeview' id='treeview"+i+"'>"),s.hasOwnProperty("topics")&&s.topics.length&&n(s.topics,r,0,"tree"+i,o),r.push("</div>")}return r.join("")}console.log("Start common.loadToc: "+Date.now());var r=!1,i=e.Deferred();if(window.location.protocol=="file:"&&(window.ActiveXObject||"ActiveXObject"in window))try{var s=new ActiveXObject("Msxml2.XMLHTTP");r=!0}catch(o){var s=new XMLHttpRequest}else var s=new XMLHttpRequest;s.overrideMimeType&&s.overrideMimeType("text/plain"),s.onreadystatechange=function(){s.readyState===4&&(s.status===200||r&&s.status===0?i.resolve(s.responseText):i.reject())};try{s.open("GET",f,!0),s.send()}catch(u){i.reject()}var a=e.Deferred();return i.done(function(r){function i(t){var n={toc:[]},r=n.toc;if(e("html").hasClass("solution"))var i=t.find("article > h1, article > h2, article > h3, article > h4, article > ul, article > ul > li:has(>span)");else var i=t.find("article > h1, article > h2, article > h3, article > h4, article > header > h1, article > header > h2, article > header > h3, article > header > h4, article > ul");var o={};r.push(o);var u=0,a=0;for(var f=0;f<i.length;f++){var l=e(i[f]);if(i[f].nodeName.charAt(0)=="H")u>0&&(o={},r.push(o),u=0,a=0),u++,o.heading=l.html();else if(i[f].nodeName.charAt(0)=="L"){u>0&&(o={},r.push(o),u=0,a=0),u++;var c=l.find("> span");o.heading=c.prev().text()+c.html(),a++;var h=[];o.topics=h,s(c.next("ul"),h)}else{a>0&&(o={},r.push(o),u=0,a=0),a++;var h=[];o.topics=h,s(l,h)}}return n}function s(t,n){t.find("> li").each(function(){var t=e(this);if(t.not(":has(> span:not(.wrap))").length){var r={};n.push(r);var i=t.find("> a").first();if(i.length!=0)r.title=i.html(),r.href=i.attr("href");else{var o=t.find("> span.wrap").first();o.length!=0&&(r.title=o.html())}var u=t.find("> ul").first();if(u.length!=0){var a=[];r.topics=a,s(u,a)}}})}b.ajax=!0,r=r.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,""),r=r.replace(/<link rel="stylesheet"[^>]*>/gi,"");var o=e("<div></div>").html(r);n.configure(o.find("ul a[href]").filter(":urlSameOrigin"),[f]);var u=o.find("article");if(u.length!==1)require({baseUrl:"."},["toc"],function(r){var i=t(r),s=e("<div></div>").html(i);n.configure(s.find("ul a[href]").filter(":urlSameOrigin"),[f]),a.resolve(i)},function(e){a.reject("Unable to load Table of Contents")});else{var l=i(o);a.resolve(t(l))}}),i.fail(function(){b.ajax=!1,require({baseUrl:"."},["toc"],function(r){var i=t(r),s=e("<div></div>").html(i);n.configure(s.find("ul a[href]").filter(":urlSameOrigin"),[f]),a.resolve(i)},function(e){a.reject("Unable to load Table of Contents")})}),a.promise()},
	
	








	b.renderArticle=function(){
	//	u(), original call for clipboard functionality
	//custom
	copybutton.initiate();
	// end copy button

	//custom for tooltips
	$('[data-toggle="tooltip"]').tooltip(tooltipoptions);
//end custom for tooltips

		e("#tab-download").on("keydown focus","p a[role=button]",function(e){e.keyCode&&e.keyCode===32&&(e.preventDefault(),e.target.click())}),
		console.log("Start common.renderArticle: "+Date.now()),
		e("article").data("id",location.href),
		p=e("#tab-toc ul a[href]").filter(":urlCurrent").toArray();
		if(location.hash){
			var t=e("a[href="+location.hash.replace(/(:|\.|\[|\]|,|=|%|@)/g,"\\$1")+"][data-toggle=tab]");t.length&&t.tab("show")
		}

	/*var r=e("head link[rel=prev]"),i=e("head link[rel=next]");if((!v||m!=1)&&(r.length>0||i.length>0)){var s=e("nav.ohc-pager");s.clone().removeClass("hidden").prependTo("article")}*/
	/*Custom code added to include toc button on smaller screens */
		//		var s=e("nav.ohc-pager");
		//		s.clone().removeClass("hidden").prependTo("#on-this-page");
				/* end custom code */

	e("article a[name]").each(function(){var t=e(this);t.attr("id",t.attr("name"))}),e("article table").each(function(){var t=e(this).parent();t.is("div.table-responsive")||e(this).wrap('<div class="table-responsive"></div>')}),

	/*r.length&&(n.isUrlCurrent(r.attr("href"))||e("article .ohc-pager .previous").removeClass("disabled").find("a").attr("href",r.attr("href")).removeAttr("aria-hidden")),
	i.length&&(n.isUrlCurrent(i.attr("href"))||e("article .ohc-pager .next").removeClass("disabled").find("a").attr("href",i.attr("href")).removeAttr("aria-hidden")),*/

	e("article a[href]:not([data-toggle])").filter(":urlInternal").on("click",b.handleInternalClick),

	setTimeout(function(){H()},100),

	e("article a[href]:not([data-toggle])").filter(":urlNewTarget").each(function(){e(this).attr("target","_blank").addClass("new-window")}),


	//custom to initialize tooltip
//	e("article").find('.copy-btn').tooltip({container:"body"});

	//end custom


	o.show(),

	console.log("Finish common.renderArticle: "+Date.now())},




	b.showArticle=function(t){console.log("Start common.showArticle: "+Date.now()),v||e(".ohc-menu-controls").css("height",""),e("article").fadeTo(0,1),e.when(e("article").promise()).then(function(){
/*
		var n=e.parseURL(window.location.href),
		r=e("head link[rel=prev]"),
		i=e("head link[rel=next]");
		if((!v||m!=1)&&(r.length>0||i.length>0)){var s=0;e("article").children().each(function(){s+=e(this).outerHeight(!0)});var o=e("article nav.ohc-pager");s>200&&o.clone(!0).appendTo("article")}*/

	var n=e.parseURL(window.location.href);


		e(window).width()<=768&&!v&&e("article img[src]").one("load error",function(t){t.type=="load"&&this.naturalWidth>e(window).width()&&this.naturalWidth>this.width&&e(this).wrap("<a href='"+this.src+"' target='_blank' title='Open image in new window'></a>")}).each(function(){this.complete?e(this).trigger("load"):this.error&&e(this).trigger("error")});

		if(!n.hash)typeof t=="undefined"||t?N():e(window).width()<768?e(window).scrollTop(e("article").offset().top+15):e(window).scrollTop()>e("article").offset().top;else{var u=e("a[href="+n.hash.replace(/(:|\.|\[|\]|,|=|%|@)/g,"\\$1")+"][data-toggle=tab]");if(u.length)u.tab("show");else{b.goToAnchor(n.hash);var a=e("article img"),f=0;if(a.length){var l=function(){b.goToAnchor(n.hash)};for(var c=0;c<a.length;c++)a[c].complete&&a[c].naturalWidth!==undefined?console.log("img already loaded"):(f++,e(a[c]).on("load",l),e(a[c]).on("error",l));f===0&&b.goToAnchor(n.hash)}}}w(),_(),e(window).scroll(E),e(window).resize(E),F()});

		/*custom code */
		 var pubType = e("meta[name=article-type]")[0].content;
		 brn.buildrightnav(pubType);
		 /* custom code */

		console.log("Finish common.showArticle: "+Date.now())},



	b.showError=function(){e("article").empty(),e("article").append("<div><p>The page failed to load.</p></div>"),e("article").append("<div><a href='"+location.href+"' id='reload'>Reload</a></div>"),e("#reload").on("click",function(e){if(e.which>1)return;e.preventDefault(),location.reload()}),e("article").fadeTo(0,1)},

	b
});

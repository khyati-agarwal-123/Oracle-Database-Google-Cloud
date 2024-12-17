define("app-main",["require","jquery", "appish-main", "handlebars","text!handlebar-templates/bookish.html","text!handlebar-templates/solution.html","text!handlebar-templates/embed.html","text!handlebar-templates/videomodal.html","custom-handlebars-page-template","build-right-nav","i18n"],function(e,$,appishmain,handlebars,i,s,o,u,customhbpagetemplate,brn,i18n){

	console.log('app-main.js is loaded');

	function l(){function s(e){var t={};t.href=e;
		var r=$.parseURL(e);
		t.isYouTube=!1;switch(r.hostname.toLowerCase()){case"www.youtube.com":case"m.youtube.com":case"youtube.com":case"www.youtu.be":case"youtu.be":t.isYouTube=!0}if(t.isYouTube){var i=r.path.split("/");if(i.length===2&&i[1]!=="watch")var s=i[1];else if(i.length>2)var s=i.pop();else if(i.length===2&&i[1]==="watch")var s=r.params.v;t.href="https://www.youtube.com/watch?v="+s+"&autoplay=0&html5=1",t.embed="https://www.youtube.com/embed/"+s+"?autoplay=0&modestbranding=1&showinfo=1&rel=0&html5=1",t.thumbnail="https://img.youtube.com/vi/"+s+"/mqdefault.jpg"}return t}var e=$("head link[rel=prev]"),r=$("head link[rel=next]");!e.length&&!r.length&&$("article .ohc-pager .next").removeClass("disabled").find("a").attr("href","index.html").on("click",t.handleInternalClick);var i=$("<iframe class='ohc-iframe embed-responsive-item' type='text/html' src='' allowfullscreen frameborder='0' />");$("article div.video-container[id]").each(function(){$(this).addClass("embed-responsive"),$(this).addClass("embed-responsive-16by9");var e=$(this).attr("id");if(e&&e.length>0){$(this).html("<a href='http://apexapps.oracle.com/pls/apex/f?p=44785:265:0::::P265_CONTENT_ID:"+e+"'>Play Video</a>");var t="https://apexapps.oracle.com/pls/apex/oll_rest/oll/docsv1/content/",r=$.ajax({url:t+e+"?callback=?",dataType:"json",context:this});r.done(function(e){var t=i.clone();t.attr("src",e.link),$(this).html(t)})}else console.log("Error: invalid video id")}),$("article .video-container a.iframe").each(function(){$(this).removeAttr("target");var e=$(this).attr("href"),t=this,r="P265_CONTENT_ID:";if(e.indexOf(r)>0){var i=e.substr(e.lastIndexOf(r)+r.length,e.length);$.getJSON("https://apexapps.oracle.com/pls/apex/oll_rest/oll/docsv2/content/"+i+"?callback=?",function(e){if(e.link){var r=s(e.link);r.isYouTube&&($(t).attr("href",r.href),$(t).data("embed",r.embed),$(t).data("thumbnail",r.thumbnail))}e.title&&$(t).attr("title",e.title)})}else{var o=s(e);o.isYouTube&&($(t).attr("href",o.href),$(t).data("embed",o.embed),$(t).data("thumbnail",o.thumbnail))}$(this).on("click",function(e){if($(window).width()>=768)return e.preventDefault(),e.stopPropagation(),$(t).data("embed")?$("#videoModal iframe").attr("src",$(t).data("embed")):$("#videoModal iframe").attr("src",$(this).attr("href")),$("#videoModal").modal("show"),!1})})}


	var t=document.createElement("a");

	$.parseURL=function(n){
		t.href=n,
		t.href=t.href;
		var r=t.pathname.indexOf("/")!==0?"/"+t.pathname:t.pathname,
		i=t.href.split("#").splice(1).join("#"),
		s={protocol:t.protocol.replace(":",""),hostname:t.hostname,port:t.port,hash:i.length>0?i:undefined,path:r,target:t.hostname+r,search:t.search?t.search.substring(1):undefined,params:{}};

		if(s.search){
			var o=s.search.split("&");
			for(var u=0;u<o.length;u++){
				var a=o[u].split("=");
				if(s.params.hasOwnProperty(a[0]))if($.isArray(s.params[a[0]]))s.params[a[0]].push(a[1]);else{var f=[];f.push(s.params[a[0]]),f.push(a[1]),s.params[a[0]]=f}else s.params[a[0]]=a.length>1?a[1]:undefined}
		}
		return s
		};



	var a = $.parseURL(window.location.href);

/*

	if(window.top===window&&typeof a.params.embed=="undefined")
		{
			if($("html").hasClass("solution")) {
				//compile solutions
				var f=handlebars.compile(s);
			}
			else {
				//compile bookish
				console.log('compile1');
				var f=handlebars.compile(customhbpagetemplate);
			}
		}

	else if(typeof a.params.embed!="undefined"&&a.params.embed==0) {

			if($("html").hasClass("solution")) {
				var f=handlebars.compile(s);
			}
			else {
				console.log('compile2');
				var f=handlebars.compile(i);
			}
	}

	else {
		//compile embed.html
		console.log('compile3');
		var f=handlebars.compile(o);
	}

*/


/* custom code */


//for Popper - custom
	//	var x=require.toUrl("popper.min.js");
//		e.getScript(x)


// Retrieve the template data from the HTML (jQuery is used here).
var template = customhbpagetemplate;

// Compile the template data into a function
var f = handlebars.compile(template);

/* custom code ends */



	$(function(){

		var e = appishmain.getTemplateData();
		console.log(e.contenttype);
		e.tabtoc='<p class="text-center"><span class="fa fa-spinner fa-pulse fa-3x fa-fw" aria-hidden="true"></span><span class="sr-only">Loading...</span></p>';
		e.tabsearch=!0;
		e.tabprint=!0;
	/*	e.pubType="book";*/

	/* custom code */
		e.pubType = e.contenttype;

	/* end custom code */


		e.article=$("article").html();
		e.disclaimers=$("#disclaimers").html();
		$("body").html(f(e));
		$(u).appendTo("body");
		$("#videoModal").on("hidden.bs.modal",function(e){$("#videoModal iframe").attr("src","")});
		$("#videoModal").on("shown.bs.modal",function(e){$("#videoModal .modal-header button.close").focus()});

		appishmain.templateInit();

		$(document).on("articleload",function(){
				appishmain.renderArticle(),
				l(),
				appishmain.showArticle();
			});

		$(document).on("articlefail",function(e){
				console.log(e),y.showError();
			});

		appishmain.renderArticle();
		l();
		appishmain.showArticle(!1);
		a.protocol.indexOf("http")===0&&setTimeout(function(){$.getScript("https://www.oracleimg.com/us/assets/metrics/ora_docs.js")},200);

		/* custom code */
		 if (e.pubType =='article') {
			 $('#tableofcontentsbtn').click();
		 }

		 if (e.pubType =='book') {
			 $('body').css("max-width","initial");
		 }

		 brn.buildrightnav(e.pubType);
		$(".external-link").attr("target", "_blank");

		 //end custom code

	});  //$(function() )

}); //end module

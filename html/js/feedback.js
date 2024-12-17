
define("feedback",["jquery","i18n"],function(e,t){
	console.log("feedback.js is loaded")
	var n=t("feedback-survey");
	n=="feedback-survey"&&(n="https://ora-java.custhelp.com/ci/documents/detail/5/2573/12/44094e13fc9b4657e63934ebc4cd31c019aa93a5?locale=en");
	var r={};

	r.init=function(){var r=t("Was this page helpful?");e("#q15751").text(r),e(".optBtn").click(function(){e("div.frame").hide();var r=e(this).val(),i=null,s=window.location.hostname+"/",o=15e5;["docs.oracle.com","docs-stage.oracle.com"].includes(location.hostname)?s=n+"&_="+Date.now()+"&like="+r:(t.htmlLang==="pt-br"&&(t.htmlLang="pt-BR"),t.htmlLang==="zh-hans"&&(t.htmlLang="zh-Hans"),t.htmlLang==="zh-hant"&&(t.htmlLang="zh-Hant"),s="https://ora-java.custhelp.com/ci/documents/detail/5/2639/12/e572a1f6cbda421c17f05dc71c386e83f8a0a608?locale="+t.htmlLang+"&_="+Date.now()+"&like="+r);var u=window.screenLeft!=undefined?window.screenLeft:screen.left,a=window.screenTop!=undefined?window.screenTop:screen.top,f=window.innerWidth?window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:screen.width,l=window.innerHeight?window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:screen.height;if(window.innerWidth<=768)var c=window.innerWidth,h=window.innerHeight,p=0+u,d=0+a;else var c=500,h=350,p=f-c+u,v=document.getElementById("u10"),d=l-v.offsetHeight-h+a;i==null||i.closed?(i=window.open(s,"Feedback Form","directories=0,location=0,menubar=0,scrollbars=1,status=0,toolbar=0, width="+c+", height="+h+", top="+d+", left="+p),i.focus()):i.focus(),setTimeout(function(){i.close()},o)})}

	r.show=function(){e("div.frame").show()}

return r

});

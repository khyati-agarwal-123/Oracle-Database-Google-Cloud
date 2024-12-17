define("ohc-url",["jquery"],function(e){
	console.log("ohc-url.js is loaded");
	String.prototype.endsWith||(String.prototype.endsWith=function(e,t){

		var n=this.toString();if(t===undefined||t>n.length)t=n.length;t-=e.length;var r=n.indexOf(e,t);return r!==-1&&r===t}),Array.isArray||(Array.isArray=function(e){return Object.prototype.toString.call(e)==="[object Array]"});var t=document.createElement("a");

	e.parseURL=function(n){t.href=n,t.href=t.href;var r=t.pathname.indexOf("/")!==0?"/"+t.pathname:t.pathname,i=t.href.split("#").splice(1).join("#"),s={protocol:t.protocol.replace(":",""),hostname:t.hostname,port:t.port,hash:i.length>0?i:undefined,path:r,target:t.hostname+r,search:t.search?t.search.substring(1):undefined,params:{}};if(s.search){var o=s.search.split("&");for(var u=0;u<o.length;u++){var a=o[u].split("=");if(s.params.hasOwnProperty(a[0]))if(e.isArray(s.params[a[0]]))s.params[a[0]].push(a[1]);else{var f=[];f.push(s.params[a[0]]),f.push(a[1]),s.params[a[0]]=f}else s.params[a[0]]=a.length>1?a[1]:undefined}}return s};

	var n={},r={};

	n.configure=function(t,n){r={};for(var i=0;i<t.length;i++){var s=e.parseURL(t[i].href).target;r[s]=!0}if(!!n)for(var i=0;i<n.length;i++){var s=e.parseURL(n[i]).target;r[s]=!0}},

	n.isUrlInternal=function(t){var n=e.parseURL(t).target;return r.hasOwnProperty(n)},

	n.isOracle=function(){var t=e.parseURL(window.location.href);return t.hostname.endsWith("oracle.com")},

	n.isUrlSameOrigin=function(t){var n=e.parseURL(window.location.href),r=e.parseURL(t);return n.hostname==r.hostname&&n.port==r.port&&n.protocol==r.protocol},

	n.isUrlNewTarget=function(t){if(n.isUrlInternal(t))return!1;var r=e.parseURL(t);return r.target==="www.oracle.com/pls/topic/lookup"?!1:window.location.hostname!==r.hostname?!0:r.path.toLowerCase().endsWith(".pdf")?!0:!1},

	n.fileShortName=function(t){var n=e.parseURL(t);if(n.path.lastIndexOf("/")===n.path.length-1)return"index";var r=n.path.substring(n.path.lastIndexOf("/")+1);return r.indexOf(".")===-1?r:r.substring(0,r.lastIndexOf("."))},

	n.currentFileShortName=function(){return n.fileShortName(window.location.href)};

	var i=document.createElement("a");

	i.href="#";

	var s=document.createElement("a");

	return n.isUrlCurrent=function(t){s.href=t;if(i.href===s.href)return!1;var n=e.parseURL(window.location.href);n.path&&(n.path=decodeURI(n.path));var r=e.parseURL(t);r.path&&(r.path=decodeURI(r.path));if(n.hostname!==r.hostname)return!1;if(n.path===r.path)return!0;if(n.path.lastIndexOf("/")===n.path.length-1){if(n.path+"index.html"===r.path)return!0;if(n.path+"index.htm"===r.path)return!0}if(r.path.lastIndexOf("/")===r.path.length-1){if(r.path+"index.html"===n.path)return!0;if(r.path+"index.htm"===n.path)return!0}return!1},

	e.expr[":"].urlInternal=function(e,t,r,i){return e.href?n.isUrlInternal(e.href):!1},

	e.expr[":"].urlNewTarget=function(t,r,i,s){var o=e(t);return o.hasClass("newwindow")?!0:o.hasClass("notnew")?!1:t.href?n.isUrlNewTarget(t.href):!1},

	e.expr[":"].urlSameOrigin=function(e,t,r,i){return e.href?n.isUrlSameOrigin(e.href):!1},

	e.expr[":"].urlCurrent=function(e,t,r,i){return e.href?n.isUrlCurrent(e.href):!1},

	n
});

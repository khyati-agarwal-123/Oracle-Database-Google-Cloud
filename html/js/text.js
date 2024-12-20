define("text",["module"],function(e){

	console.log("text is loaded")
	"use strict";

	function v(e,t){
		return e===undefined||e===""?t:e}

	function m(e,t,n,r){
		if(t===r)return!0;
		if(e===n){
			if(e==="http")return v(t,"80")===v(r,"80");
			if(e==="https")return v(t,"443")===v(r,"443")}return!1
		}

	var t,n,r,i,s,o=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],
	u=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,a=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,
	f=typeof location!="undefined"&&location.href,
	l=f&&location.protocol&&location.protocol.replace(/\:/,""),
	c=f&&location.hostname,
	h=f&&(location.port||undefined),
	p={},
	d=e.config&&e.config()||{};


	t={
		version:"2.0.15",

		strip:function(e){if(e){e=e.replace(u,"");var t=e.match(a);t&&(e=t[1])}else e="";return e},

		jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},

		createXhr:d.createXhr||function(){
			var e,t,n;
			if(typeof XMLHttpRequest!="undefined")return new XMLHttpRequest;
			if(typeof ActiveXObject!="undefined")for(t=0;t<3;t+=1){n=o[t];try{e=new ActiveXObject(n)}catch(r){}if(e){o=[n];break}}return e},

		parseName:function(e){var t,n,r,i=!1,s=e.lastIndexOf("."),o=e.indexOf("./")===0||e.indexOf("../")===0;return s!==-1&&(!o||s>1)?(t=e.substring(0,s),n=e.substring(s+1)):t=e,r=n||t,s=r.indexOf("!"),s!==-1&&(i=r.substring(s+1)==="strip",r=r.substring(0,s),n?n=r:t=r),{moduleName:t,ext:n,strip:i}},

		xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,n,r,i){var s,o,u,a=t.xdRegExp.exec(e);return a?(s=a[2],o=a[3],o=o.split(":"),u=o[1],o=o[0],(!s||s===n)&&(!o||o.toLowerCase()===r.toLowerCase())&&(!u&&!o||m(s,u,n,i))):!0},

		finishLoad:function(e,n,r,i){r=n?t.strip(r):r,d.isBuild&&(p[e]=r),i(r)},

		load:function(e,n,r,i){if(i&&i.isBuild&&!i.inlineText){r();return}d.isBuild=i&&i.isBuild;var s=t.parseName(e),o=s.moduleName+(s.ext?"."+s.ext:""),u=n.toUrl(o),a=d.useXhr||t.useXhr;if(u.indexOf("empty:")===0){r();return}!f||a(u,l,c,h)?t.get(u,function(n){t.finishLoad(e,s.strip,n,r)},function(e){r.error&&r.error(e)}):n([o],function(e){t.finishLoad(s.moduleName+"."+s.ext,s.strip,e,r)})},

		write:function(e,n,r,i){if(p.hasOwnProperty(n)){var s=t.jsEscape(p[n]);r.asModule(e+"!"+n,"define(function () { return '"+s+"';});\n")}},

		writeFile:function(e,n,r,i,s){var o=t.parseName(n),u=o.ext?"."+o.ext:"",a=o.moduleName+u,f=r.toUrl(o.moduleName+u)+".js";t.load(a,r,function(n){var r=function(e){return i(f,e)};r.asModule=function(e,t){return i.asModule(e,f,t)},t.write(e,a,r,s)},s)}
	};


	if (d.env==="node"||!d.env&&typeof process!="undefined"&&process.versions&&!!process.versions.node&&!process.versions["node-webkit"]&&!process.versions["atom-shell"]) {

		n=require.nodeRequire("fs");

		t.get=function(e,t,r){
			try{
				var i=n.readFileSync(e,"utf8");
				i[0]==="﻿"&&(i=i.substring(1)),t(i)
				}
			catch(s){
				r&&r(s)}
				};
	}

	else if (d.env==="xhr"||!d.env&&t.createXhr()) {

		t.get=function(e,n,r,i){
		

			var s=t.createXhr(),o;

			s.open("GET",e,!0);if(i)for(o in i)i.hasOwnProperty(o)&&s.setRequestHeader(o.toLowerCase(),i[o]);d.onXhr&&d.onXhr(s,e),s.onreadystatechange=function(t){var i,o;s.readyState===4&&(i=s.status||0,i>399&&i<600?(o=new Error(e+" HTTP status: "+i),o.xhr=s,r&&r(o)):n(s.responseText),d.onXhrComplete&&d.onXhrComplete(s,e))},s.send(null)
		};
	}

	else if (d.env==="rhino"||!d.env&&typeof Packages!="undefined"&&typeof java!="undefined") {

		t.get=function(e,t){var n,r,i="utf-8",s=new java.io.File(e),o=java.lang.System.getProperty("line.separator"),u=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(s),i)),a="";try{n=new java.lang.StringBuffer,r=u.readLine(),r&&r.length()&&r.charAt(0)===65279&&(r=r.substring(1)),r!==null&&n.append(r);while((r=u.readLine())!==null)n.append(o),n.append(r);a=String(n.toString())}finally{u.close()}t(a)};
	}

	else if (d.env==="xpconnect"||!d.env&&typeof Components!="undefined"&&Components.classes&&Components.interfaces) {

		r=Components.classes,
		i=Components.interfaces,
		Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),
		s="@mozilla.org/windows-registry-key;1"in r,

		t.get=function(e,t){
			var n,o,u,a={};
			s&&(e=e.replace(/\//g,"\\")),
			u=new FileUtils.File(e);

			try{n=r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),n.init(u,1,0,!1),o=r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),o.init(n,"utf-8",n.available(),i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),o.readString(n.available(),a),o.close(),n.close(),t(a.value)}

			catch(f){throw new Error((u&&u.path||"")+": "+f)}};
	}


	return t

});

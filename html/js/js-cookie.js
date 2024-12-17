/*!
 * JavaScript Cookie v2.0.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

define("js-cookie",function(e){

		function e(){var e=0,t={};for(;e<arguments.length;e++){var n=arguments[e];for(var r in n)t[r]=n[r]}return t}

		function t(n){function r(t,i,s){var o;if(arguments.length>1){s=e({path:"/"},r.defaults,s);if(typeof s.expires=="number"){var u=new Date;u.setMilliseconds(u.getMilliseconds()+s.expires*864e5),s.expires=u}try{o=JSON.stringify(i),/^[\{\[]/.test(o)&&(i=o)}catch(a){}return i=encodeURIComponent(String(i)),i=i.replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)),t=t.replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent),t=t.replace(/[\(\)]/g,escape),document.cookie=[t,"=",i,s.expires&&"; expires="+s.expires.toUTCString(),s.path&&"; path="+s.path,s.domain&&"; domain="+s.domain,s.secure?"; secure":""].join("")}t||(o={});var f=document.cookie?document.cookie.split("; "):[],l=/(%[0-9A-Z]{2})+/g,c=0;for(;c<f.length;c++){var h=f[c].split("="),p=h[0].replace(l,decodeURIComponent),d=h.slice(1).join("=");d.charAt(0)==='"'&&(d=d.slice(1,-1));try{d=n&&n(d,p)||d.replace(l,decodeURIComponent);if(this.json)try{d=JSON.parse(d)}catch(a){}if(t===p){o=d;break}t||(o[p]=d)}catch(a){}}return o}return r.get=r.set=r,r.getJSON=function(){return r.apply({json:!0},[].slice.call(arguments))},r.defaults={},r.remove=function(t,n){r(t,"",e(n,{expires:-1}))},r.withConverter=t,r}

		return t()

});

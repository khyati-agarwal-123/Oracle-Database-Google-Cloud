define("copy-button",["jquery","clipboardjs","i18n"],function(e,clipboardjs,n){
 console.log("copy-button.js is loaded");
/*  function u(t){
    var r=e(t);
    r.data("mouse")==="true"?(r.blur(),r.data("mouse","false")):r.focus();

    if(r.data("locked")==="false"||r.data("locked")===undefined){
      r.data("locked","true");
      var i=r.find("span"),
      o=e('<span class="copied-btn-text" role="alert">'+n("Copied")+"</span>"),


      u=e(s+n("Copy")+"</span>");
     // u=e(s+"<span>");
      i.remove(),r.append(o),

      r.removeClass("copy-btn-enabled copy-btn-color-change").addClass("copied-btn"),

      setTimeout(function(){
        r.removeClass("copied-btn").addClass("copy-btn-color-change"),
        o.fadeOut(1e3,function(){o.remove()}),
        r.append(u).children(":last").hide().fadeIn(1e3,function(){
          r.removeClass("copy-btn-color-change").addClass("copy-btn-enabled"),
          r.data("locked","false")})},1e3)}
    }

    var r=new t(".copy-btn",{text:function(t){
        var n=e(t).parent().clone();
        return n.find("button").remove(),
        n.text()}});

    r.on("success",function(e){e.clearSelection(),u(e.trigger)});

    var i=e("html").attr("lang");

    i&&(i=i.toLowerCase());

    var s ='<span class="copy-btn-text">';
    var o = ' style=""';
    i==="de"?s='<span class="copy-btn-text" style="right: 14px;">':i==="ja"&&(s='<span class="copy-btn-text" style="right: 41px;">',o='style="width: 136px;"');

    var a=function(){
      e(function(){
        var t='<button class="copy-btn copy-btn-enabled" data-toggle="tooltip" data-placement="left" title="'+n("Copy the following example to clipboard") + '"' + o + ' aria-label="'+n("Copy the following example to clipboard")+'">'+s+n("Copy")+'</span></button>';
        e("pre:not(td pre)").prepend(t);
        var r=e('<div class="source-btn-container"></div>');
        e(".toggle-schema.pull-right.btn.btn-default").parent().find("pre.schema-source").prepend(r);
        var i=e('<li><div class="source-btn-container"></div></li>');
        e(".toggle-schema.pull-right.btn.btn-default").parent().find("ul.schema-properties").prepend(i),
        e("body").on("mouseup",".copy-btn",function(){e(this).data("mouse","true")});

  var u=e('<div class="pre-space"></div>');

  e("html").attr("lang").toLowerCase()==="ar"?(e("pre:not(td pre)").closest("ul").css("padding-right","0px"),

  e("pre:not(td pre)").closest("ol").css("padding-right","0px"),

  e("pre:not(td pre)").prepend(u)):e("pre:not(td pre)").append(u);

  var a=e("pre");

  a.filter(":not([class])").addClass("codeblock")});



};




  return a

});
*/

return {

  initiate: function() {
      console.log("clipboard.initiate is loaded...");

      $('.copy-btn').attr('title',n('copy'));
      $('.copy-btn').attr('aria-label',n('Copy the following example to clipboard'));



         var clipboard = new clipboardjs('.copy-btn', {
        text: function(trigger) {
      //    var n = trigger.closest('div').nextElementSibling.childNodes[0].childNodes[0];
	  /* note - modified Sept 3, 2020 to copy all lines that have class=input.
	  If you use querySelector, you select the first element; also, text: lets you return a string. 
	  target: function(trigger)... lets you return a node */
            var n = trigger.closest('div').nextElementSibling.querySelectorAll('.input');
			console.log(n);
			var i;
			var text = "";
			for (i = 0; i < n.length; i++) {
				/* the purpose of the if/else is to not include a carriage return after the last statement*/
				if (i !== n.length-1) {
					text += n[i].innerHTML + "\r\n";
				}
				else {
					text += n[i].innerHTML;
				}
			
			} 
			/*return html entities to their original state - these are just some of them. If you need others, please request. */
			text = text.replace("&lt;","<");
			text = text.replace("&gt;",">");
			text = text.replace("&amp;","&");
			text = text.replace('&quot;','"');
			text = text.replace("&apos;","'");
			
          return text
          }
          });

        clipboard.on("success", function(t) {
          $(t.trigger).attr("title",n("copied"))
            .tooltip('_fixTitle')
            .tooltip('show')
            .attr("title",n("copy"))
            .tooltip('_fixTitle')
        t.clearSelection();

         setTimeout(function(){
          $(t.trigger).tooltip( 'hide' );
          $(t.trigger).closest('div').blur();
        }, 1000);
        });	 //end clipboard.on
    }//end fuction initiate
}; //end return

}); //end module

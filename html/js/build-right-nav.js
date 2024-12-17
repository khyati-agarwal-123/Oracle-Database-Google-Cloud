define("build-right-nav",["require","jquery"],function(e,$){

return {

		buildrightnav: function(pubType){
						$("#on-this-page").empty();

            if (pubType=='article') {
                var headinglevel = $("article h2");
            //  console.log('article: '+ headinglevel.length);
            }
            else {
                var headinglevel = $("article h3");
            //    console.log('book: ' + headinglevel.length);
              }



						if (((pubType=='article')&&($(headinglevel).length > 1)) || ((pubType=='book')&&($(headinglevel).length > 0))){
									var ToC = "<h2>On this page</h2>" + "<ul>";
									var el, title, link;
									$(headinglevel).each(function() {
											el = $(this);
											title = el.text();

											if (el.attr("id")) {
												var fixedid = el.attr("id");
												//	var fixedid = fixedid.replace(/[&\/\\#,+()$~%.'":*?!<>{}]/g,'');
												var fixedid = fixedid.replace(/[^a-zA-Z0-9]/g,'');
												el.attr("id",fixedid);
												link = '#' + el.attr("id");
												newLine = "<li><a href='" + link + "' role='link'>" + title + "</a></li>";
												//console.log(newLine);
												ToC += newLine
											}
											});


									ToC += "</ul></nav>";
									$("#on-this-page").append(ToC);

									$('#on-this-page ul li:first').addClass('active');


									highlightscroll();
						} //end if



						function highlightscroll(){


							//number of headings on this pagevar infolinks = $("#on-this-page a");
							var infolinks = $("#on-this-page a");
						//	console.log("Number of On this Page links: " + infolinks.length);

							// Cache selectors
							var lastId,
							topMenu = $("#on-this-page ul"),
							topMenuHeight = topMenu.outerHeight(),
							// All list items
							menuItems = topMenu.find("a"),
							// Anchors corresponding to menu items
							scrollItems = menuItems.map(function(){
									var item = $($(this).attr("href"));
									if (item.length) { return item; }
								});


						// Bind click handler to menu items
						// so we can get a fancy scroll animation

							menuItems.click(function(e){
							  var href = $(this).attr("href");
								// offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
								  var firstlink = $("#on-this-page a:first").attr("href");
								  offsetTop = href === "#" ? 0 : $(href).offset().top-32;

							  $('html, body').stop().animate({
								  scrollTop: offsetTop
							  }, 300);
							  e.preventDefault();
							});


							// Bind to scroll

								$(window).scroll(function(){

									var fromTop = $(this).scrollTop() + 300;
									if (fromTop <= 300)
									{
										 $('#on-this-page ul li:first').addClass('active');
									}

								   // Get id of current scroll item
								   var cur = scrollItems.map(function(){
									 if ($(this).offset().top < fromTop)
									   return this;
								   });
								   // Get the id of the current element
								   cur = cur[cur.length-1];
								   var id = cur && cur.length ? cur[0].id : "";

								   if (lastId !== id) {
									   lastId = id;
									   // Set/remove active class
									   menuItems
										 .parent().removeClass("active")
										 .end().filter("[href='#"+id+"']").parent().addClass("active");
								   }
								});

					}	//end function highlightscroll
				}//end function buildrightnav
			}; //end return


}); //end module function

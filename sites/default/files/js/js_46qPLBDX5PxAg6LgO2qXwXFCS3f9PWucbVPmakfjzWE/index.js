/*
 * Project: Twitter Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies?: Twitter Bootstrap's Dropdown plugin
 *
 * A simple plugin to enable twitter bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * No license, do what you want. I'd love credit or a shoutout, though.
 *
 * http://cameronspear.com/blog/twitter-bootstrap-dropdown-on-hover-plugin/
 */(function(e,t,n){var r=e();e.fn.dropdownHover=function(n){r=r.add(this.parent());return this.each(function(){var i=e(this).parent(),s={delay:500,instantlyCloseOthers:!0},o={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},u=e.extend(!0,{},s,n,o),a;i.hover(function(){u.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(a);e(this).addClass("open")},function(){a=t.setTimeout(function(){i.removeClass("open")},u.delay)})})};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})})(jQuery,this);
;
/*
	Header Information------------------------------------[Do Not Remove This Header]--
	Title: OO Dom Image Rollover
	Description: This script makes it easy to add rollover/ mousedown 
  	effects to any image on the page, including image submit buttons. Automatically 
  	preloads images as well. Script works in all DOM capable browsers- IE5+, NS6+, 
  	Opera7+.
	
	Legal: Copyright 2005 Adam Smith
	Author Email Address: ibulwark@hotmail.com
	Date Created: June 6, 2005
	Website: Codevendor.com | eBadgeman.com
	Script featured on Dynamic Drive: http://www.dynamicdrive.com
	-----------------------------------------------------------------------------------
*/

function imageholderclass(){
	this.over=new Array();
	this.down=new Array();
	this.src=new Array();
	this.store=store;
	
	function store(src, down, over){
		var AL=this.src.length;
		this.src[AL]=new Image(); this.src[AL].src=src;
		this.over[AL]=new Image(); this.over[AL].src=over;
		this.down[AL]=new Image(); this.down[AL].src=down;
	}
}

var ih = new imageholderclass();
var mouseisdown=0;

function preloader(t){
	for(i=0;i<t.length;i++){
		if(t[i].getAttribute('srcover')||t[i].getAttribute('srcdown')){
			
			storeimages(t[i]);
			var checker='';
			checker=(t[i].getAttribute('srcover'))?checker+'A':checker+'';
			checker=(t[i].getAttribute('srcdown'))?checker+'B':checker+'';
			
			switch(checker){
			case 'A' : mouseover(t[i]);mouseout(t[i]); break;
			case 'B' : mousedown(t[i]); mouseup2(t[i]); break;
			case 'AB' : mouseover(t[i]);mouseout(t[i]); mousedown(t[i]); mouseup(t[i]); break;
			default : return;			
			}
			
			if(t[i].src){t[i].setAttribute("oldsrc",t[i].src);}
		}
	}
}
function mouseup(t){
	var newmouseup;
	if(t.onmouseup){
		t.oldmouseup=t.onmouseup;
		newmouseup=function(){mouseisdown=0;this.src=this.getAttribute("srcover");this.oldmouseup();}

	}
	else{newmouseup=function(){mouseisdown=0;this.src=this.getAttribute("srcover");}}
	t.onmouseup=newmouseup;
}

function mouseup2(t){
	var newmouseup;
	if(t.onmouseup){
		t.oldmouseup=t.onmouseup;
		newmouseup=function(){mouseisdown=0;this.src=this.getAttribute("oldsrc");this.oldmouseup();}
		}
	else{newmouseup=function(){mouseisdown=0;this.src=this.getAttribute("oldsrc");}}
	t.onmouseup = newmouseup;
}

function mousedown(t){
	var newmousedown;
	if(t.onmousedown){
		t.oldmousedown=t.onmousedown;
		newmousedown=function(){if(mouseisdown==0){this.src=this.getAttribute("srcdown");this.oldmousedown();}}
	}
	else{newmousedown=function(){if(mouseisdown==0){this.src=this.getAttribute("srcdown");}}}
	t.onmousedown=newmousedown;
}

function mouseover(t){
	var newmouseover;
	if(t.onmouseover){
		t.oldmouseover=t.onmouseover;
		newmouseover=function(){this.src=this.getAttribute("srcover");this.oldmouseover();}
	}
	else{newmouseover=function(){this.src=this.getAttribute("srcover");}}
	t.onmouseover=newmouseover;
}

function mouseout(t){
	var newmouseout;
	if(t.onmouseout){
		t.oldmouseout=t.onmouseout;
		newmouseout=function(){this.src=this.getAttribute("oldsrc");this.oldmouseout();}
	}
	else{newmouseout=function(){this.src=this.getAttribute("oldsrc");}}
	t.onmouseout=newmouseout;
}

function storeimages(t){
	var s=(t.getAttribute('src'))?t.getAttribute('src'):'';
	var d=(t.getAttribute('srcdown'))?t.getAttribute('srcdown'):'';
	var o=(t.getAttribute('srcover'))?t.getAttribute('srcover'):'';
	ih.store(s,d,o);
}

function preloadimgsrc(){
	if(!document.getElementById) return;
	var it=document.getElementsByTagName('IMG');
	var it2=document.getElementsByTagName('INPUT');
	preloader(it);
	preloader(it2);
}

if(window.addEventListener){window.addEventListener("load", preloadimgsrc, false);} 
else{
	if(window.attachEvent){window.attachEvent("onload", preloadimgsrc);}
	else{if(document.getElementById){window.onload=preloadimgsrc;}}
}


/* FOR IMG ROLLOVER */

jQuery(document).ready(function(){
	jQuery(".transparentbga").hide();
	jQuery(".products-grid li").each(function (i) {
    jQuery(this).addClass("prd" + i);
   });
	jQuery(".products-grid li").each(function (n) {
	jQuery(".prd" + n).mouseenter(function(){
		jQuery(".prd" + n + " div").show();
	});
	jQuery(".prd" + n ).mouseleave(function(){
		jQuery(".prd" + n + " div").hide();
	});
	});	
});;
/*
 * Project: Twitter Bootstrap Hover Dropdown
 * Author: Cameron Spear
 * Contributors: Mattia Larentis
 *
 * Dependencies?: Twitter Bootstrap's Dropdown plugin
 *
 * A simple plugin to enable twitter bootstrap dropdowns to active on hover and provide a nice user experience.
 *
 * No license, do what you want. I'd love credit or a shoutout, though.
 *
 * http://cameronspear.com/blog/twitter-bootstrap-dropdown-on-hover-plugin/
 */(function(e,t,n){var r=e();e.fn.dropdownHover=function(n){r=r.add(this.parent());return this.each(function(){var i=e(this).parent(),s={delay:500,instantlyCloseOthers:!0},o={delay:e(this).data("delay"),instantlyCloseOthers:e(this).data("close-others")},u=e.extend(!0,{},s,n,o),a;i.hover(function(){u.instantlyCloseOthers===!0&&r.removeClass("open");t.clearTimeout(a);e(this).addClass("open")},function(){a=t.setTimeout(function(){i.removeClass("open")},u.delay)})})};e(document).ready(function(){e('[data-hover="dropdown"]').dropdownHover()})})(jQuery,this);
;
(function($) {
  Drupal.behaviors.djlnVideoResize = {
    attach: function(context, settings) {

      $(window).load(function() {

        // Resize Youtube Videos. By Chris Coyier & tweaked by Mathias Bynens
        $(function() {

          // Find all YouTube videos
          var $allVideos = $("iframe[src^='//www.youtube.com'], iframe[src^='http://player.vimeo.com'] "),

              // The element that is fluid width
              $fluidEl = $(".field-item .media-youtube-video:visible, .media-vimeo-video:visible, .field-name-body:visible");

          // Figure out and save aspect ratio for each video
          $allVideos.each(function() {

            $(this).data('aspectRatio', this.height / this.width)

            // and remove the hard coded width/height
            .removeAttr('height').removeAttr('width');

          });

          // When the window is resized
          $(window).resize(function() {
            
            //reselect containers for the case where something which wasn't visible now is on resize
            $fluidEl = $(".media-youtube-video:visible, .media-vimeo-video:visible, .field-name-body:visible");
            var newWidth = $fluidEl.width();

            // Resize all videos according to their own aspect ratio
            $allVideos.each(function() {

              var $el = $(this);
              $el.width(newWidth).height(newWidth * $el.data('aspectRatio'));

            });

            // Kick off one resize to fix all videos on page load
          }).resize();

        });

      });

    }
  }
})(jQuery);
;
/**
* jquery.matchHeight-min.js v0.5.2
* http://brm.io/jquery-match-height/
* License: MIT
*/
(function(c){var n=-1,f=-1,r=function(a){var b=null,d=[];c(a).each(function(){var a=c(this),k=a.offset().top-h(a.css("margin-top")),l=0<d.length?d[d.length-1]:null;null===l?d.push(a):1>=Math.floor(Math.abs(b-k))?d[d.length-1]=l.add(a):d.push(a);b=k});return d},h=function(a){return parseFloat(a)||0},p=function(a){var b={byRow:!0,remove:!1,property:"height"};if("object"===typeof a)return c.extend(b,a);"boolean"===typeof a?b.byRow=a:"remove"===a&&(b.remove=!0);return b},b=c.fn.matchHeight=function(a){a=
p(a);if(a.remove){var e=this;this.css(a.property,"");c.each(b._groups,function(a,b){b.elements=b.elements.not(e)});return this}if(1>=this.length)return this;b._groups.push({elements:this,options:a});b._apply(this,a);return this};b._groups=[];b._throttle=80;b._maintainScroll=!1;b._beforeUpdate=null;b._afterUpdate=null;b._apply=function(a,e){var d=p(e),g=c(a),k=[g],l=c(window).scrollTop(),f=c("html").outerHeight(!0),m=g.parents().filter(":hidden");m.each(function(){var a=c(this);a.data("style-cache",
a.attr("style"))});m.css("display","block");d.byRow&&(g.each(function(){var a=c(this),b="inline-block"===a.css("display")?"inline-block":"block";a.data("style-cache",a.attr("style"));a.css({display:b,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px"})}),k=r(g),g.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||"")}));c.each(k,function(a,b){var e=c(b),f=0;d.byRow&&1>=e.length?e.css(d.property,
""):(e.each(function(){var a=c(this),b={display:"inline-block"===a.css("display")?"inline-block":"block"};b[d.property]="";a.css(b);a.outerHeight(!1)>f&&(f=a.outerHeight(!1));a.css("display","")}),e.each(function(){var a=c(this),b=0;"border-box"!==a.css("box-sizing")&&(b+=h(a.css("border-top-width"))+h(a.css("border-bottom-width")),b+=h(a.css("padding-top"))+h(a.css("padding-bottom")));a.css(d.property,f-b)}))});m.each(function(){var a=c(this);a.attr("style",a.data("style-cache")||null)});b._maintainScroll&&
c(window).scrollTop(l/f*c("html").outerHeight(!0));return this};b._applyDataApi=function(){var a={};c("[data-match-height], [data-mh]").each(function(){var b=c(this),d=b.attr("data-match-height")||b.attr("data-mh");a[d]=d in a?a[d].add(b):b});c.each(a,function(){this.matchHeight(!0)})};var q=function(a){b._beforeUpdate&&b._beforeUpdate(a,b._groups);c.each(b._groups,function(){b._apply(this.elements,this.options)});b._afterUpdate&&b._afterUpdate(a,b._groups)};b._update=function(a,e){if(e&&"resize"===
e.type){var d=c(window).width();if(d===n)return;n=d}a?-1===f&&(f=setTimeout(function(){q(e);f=-1},b._throttle)):q(e)};c(b._applyDataApi);c(window).bind("load",function(a){b._update(!1,a)});c(window).bind("resize orientationchange",function(a){b._update(!0,a)})})(jQuery);;
(function ($, Drupal, window, document, undefined) {

  $(document).ready(function() {
    
    // Match heights on video page view
    if ( $(window).width() > 480) {
      $(".page-videos .view-video .span3, .page-schools .view-school-listing .span3").matchHeight();
    };
    
    // Make video page view play buttons link to colorbox popup
    $(".page-videos .view-video .views-field-nothing a:last-child, #block-views-video-block-2 .views-field-nothing a:last-child, .view-school-resources .views-field-nothing a:last-child").each(function() {
      var href = $(this).attr('href');
      $(this).prev('a').attr('href',href);
    });
    
    // image padding in body text
    $('.field-name-body img').each(function() {
      if ($(this).css('float') == 'left') {
        $(this).addClass('float-left');
      }
      if ($(this).css('float') == 'right') {
          $(this).addClass('float-right');
      }
    });
    
  });

})(jQuery, Drupal, this, this.document);;

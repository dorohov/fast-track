"use strict";function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},pc:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.pc=function(){return e.screen.w>1024},e.screenIs=function(){var s="noname";return e.isXS()?s="xs":e.isSM()?s="sm":e.isMD()?s="md":e.isMDH()?s="md-h":e.isLG()?s="lg":e.isXL()?s="xl":e.isXXL()?s="xxl":e.device()?s="device":e.pc()&&(s="pc"),s},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var s="noname";return e.isPortrait()?s="portrait":e.isLandscape()&&(s="landscape"),s},e.is=function(s){return s==e.screenIs()||s==e.orientationIs()},e.onResize=function(s,n){if(s.type){var o=e.__resizefunctions[s.type];s.orientation?o[s.orientation].push(n):o.default.push(n)}},e.resizeCall=function(s){if(s.type){if(e.__resizefunctions[s.type].default)for(var n=0;n<e.__resizefunctions[s.type].default.length;n++){var o=e.__resizefunctions[s.type].default[n];o(s)}if(e.__resizefunctions[s.type][s.orientation])for(var n=0;n<e.__resizefunctions[s.type][s.orientation].length;n++){var o=e.__resizefunctions[s.type][s.orientation][n];o(s)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}function initMap(){var e="map-google",s=$("#"+e);if(s.length){var n=JSON.parse(s.attr("data-map")||"{}"),o=n.center,i=n.zoom,a=[{featureType:"all",stylers:[{saturation:0},{hue:"#e7ecf0"}]},{featureType:"road",stylers:[{saturation:-70}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"simplified"},{saturation:-60}]}],t={zoom:i,center:new google.maps.LatLng(o[0],o[1]),styles:a},r=document.getElementById(e),l=new google.maps.Map(r,t),d={path:"M19.9,0C9.6,0.4,1.1,8.4,0.1,18.6c-0.2,2-0.1,4,0.3,5.9l0,0c0,0,0,0.2,0.1,0.6 c0.3,1.4,0.8,2.8,1.4,4.1c2.1,4.9,6.9,13.1,17.6,22c0.7,0.6,1.6,0.6,2.3,0c10.7-8.9,15.5-17.1,17.6-22c0.6-1.3,1.1-2.7,1.4-4.1 c0.1-0.4,0.1-0.6,0.1-0.6l0,0c0.2-1.3,0.4-2.6,0.4-3.9C41.3,9,31.6-0.4,19.9,0z M20.6,30.9c-5.5,0-10-4.5-10-10s4.5-10,10-10   s10,4.5,10,10S26.2,30.9,20.6,30.9z",fillColor:"#37a9e2",strokeColor:"#000000",fillOpacity:1,anchor:new google.maps.Point(21,51),strokeWeight:0,scale:1};if(h=new google.maps.Marker({position:w,map:l,icon:d}),n.placemarks.length)for(var c=0;c<n.placemarks.length;c++)var w={lat:n.placemarks[c].coord[0],lng:n.placemarks[c].coord[1]},h=new google.maps.Marker({position:w,map:l,icon:d})}}window.onerror=function(e,s,n,o,i){console.log("Error FECSS: "+s+":"+n+":"+o+": "+JSON.stringify(e)+"\n"+JSON.stringify(i))};var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var s=jQuery.fn.addClass,n=jQuery.fn.removeClass,o=jQuery.fn.toggleClass;e.fn.addClass=function(){var n=s.apply(this,arguments);return e(this).trigger("changeClass",["add"]),n},e.fn.removeClass=function(){var s=n.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),s},e.fn.toggleClass=function(){var s=o.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),s}}(jQuery),!function(){$("form").each(function(){var e=$("input[name=key]").val();e=e.replace("london","tirana"),e=e.replace("greatbritain","albania"),$("input[name=key]").val(e)})}(),!function(){$(window).on("load",function(){var e=$(".navbar__hamburger-btn").data("toggle-nav"),s=$(".navbar__hamburger-btn").data("body"),n=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(s).toggleClass("is--open-navbar"),$(e).toggleClass("is--open"),$(n).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(o){0==$(o.target).closest(".navbar").length&&($(s).removeClass("is--open-navbar"),$(e).removeClass("is--open"),$(n).removeClass("is--open"),$(".navbar__hamburger-btn").removeClass("is--active"))})})}(),$(function(){$(document.body).on("fecss.default",null,{},function(e){console.log("body trigger:fecss.default")}),$(document.body).on("fecss.init",null,{},function(e){console.log("body trigger:fecss.init");var s=(new Date).getTime();$(document.body).attr("data-created_at",s)}),$(document.body).on("fecss.window.unload",null,{},function(e,s){console.log("body trigger:fecss.window.unload: "+JSON.stringify(s))}),$(document.body).on("fecss.ajax.success",null,{},function(e){console.log("body trigger:fecss.ajax.success")}),$(document.body).on("fecss.keydown",null,{},function(e,s){console.log("body trigger:fecss.keydown: "+JSON.stringify(s))}),$(document.body).on("DOMSubtreeModified",null,{},function(e,s){}),$(document.body).on("wheel mousewheel DOMMouseScroll MozMousePixelScroll",function(e){-e.originalEvent.deltaY||e.originalEvent.detail||e.originalEvent.wheelDelta}),$(document.body).on("changeClass",null,{},function(e,s){$(function(){})}),$(function(){var e="noname-browser",s=navigator.userAgent.toLowerCase();s.indexOf("msie")!=-1&&(e="msie"),s.indexOf("trident")!=-1&&(e="msie"),s.indexOf("konqueror")!=-1&&(e="konqueror"),s.indexOf("firefox")!=-1&&(e="firefox"),s.indexOf("safari")!=-1&&(e="safari"),s.indexOf("chrome")!=-1&&(e="chrome"),s.indexOf("chromium")!=-1&&(e="chromium"),s.indexOf("opera")!=-1&&(e="opera"),s.indexOf("yabrowser")!=-1&&(e="yabrowser"),$("html").eq(0).addClass(e)}),$(function(){$(document.body).on("keydown",function(e){e.stopPropagation(),$(document.body).trigger("fecss.keydown",[{alt:e.altKey,ctrl:e.ctrlKey,shift:e.shiftKey,meta:e.metaKey,key:e.which,liter:String.fromCharCode(e.which)}])})}),$(function(){}),$(document.body).on("click.fecss.scrollto",".scrollto",{},function(e){e.preventDefault(),console.log("body trigger:click.fecss.scrollto");var s=$(this),n=$(s.attr("href")).eq(0),o=parseInt(s.attr("data-scrollto-diff"))||0,i=parseInt(s.attr("data-scrollto-speed"))||777;$("html, body").animate({scrollTop:n.offset().top+o},i)}),$("img").addClass("img-responsive"),!function(){$(document.body).on("click",".is--show-video",{},function(e){e.preventDefault();var s=$(this),n=s.attr("data-iframe-url")||"",o=$("#modal-video"),i=o.find("iframe");i.attr("src",n),o.one("hide.bs.modal",function(){i.attr("src","")})})}();var e=window.location.href;$('.navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$('.navbar__nav-dropdown-menu a[href="'+e+'"]').parent().addClass("is--active"),$('.navbar-site [data-toggle="dropdown"]').on("click",function(e){e.preventDefault(),e.stopPropagation(),$(this).parent().siblings().removeClass("open"),$(this).parent().toggleClass("open")}),screenJS.isLG()||($(".navbar-site .dropdown").on("mouseenter",function(e){$(this).addClass("open")}),$(".navbar-site .dropdown").on("mouseleave",function(e){$(this).removeClass("open")}));var e=window.location.href;$('.blog-navbar__nav a[href="'+e+'"]').parent().addClass("is--active"),$(".text__block table").addClass("table table-bordered"),$(".text__block ol").addClass("is--counts"),$(".text__block ul").addClass("is--styled"),$(".text__block .table.table-bordered").wrap('<div class="table-responsive"></div>'),$(window).on("resize",function(e){$(function(){var e={xs:{min:0,max:768},sm:{min:767,max:992},md:{min:991,max:1200},lg:{min:1199,max:1e4}},s={xs:{min:0,max:361},sm:{min:360,max:769},md:{min:768,max:961},lg:{min:960,max:1e4}},n="window-width",o="window-height",i=$(window).outerWidth(!0),a=$(window).outerHeight(!0),t=$("html body").eq(0);i<e.xs.max&&(t.hasClass("window-width-sm")&&t.removeClass("window-width-sm"),t.hasClass("window-width-md")&&t.removeClass("window-width-md"),t.hasClass("window-width-lg")&&t.removeClass("window-width-lg"),n="window-width-xs"),i>e.sm.min&&i<e.sm.max&&(t.hasClass("window-width-xs")&&t.removeClass("window-width-xs"),t.hasClass("window-width-md")&&t.removeClass("window-width-md"),t.hasClass("window-width-lg")&&t.removeClass("window-width-lg"),n="window-width-sm"),i>e.md.min&&i<e.md.max&&(t.hasClass("window-width-xs")&&t.removeClass("window-width-xs"),t.hasClass("window-width-sm")&&t.removeClass("window-width-sm"),t.hasClass("window-width-lg")&&t.removeClass("window-width-lg"),n="window-width-md"),i>e.lg.min&&(t.hasClass("window-width-xs")&&t.removeClass("window-width-xs"),t.hasClass("window-width-sm")&&t.removeClass("window-width-sm"),t.hasClass("window-width-md")&&t.removeClass("window-width-md"),n="window-width-lg"),a<s.xs.max&&(t.hasClass("window-height-sm")&&t.removeClass("window-height-sm"),t.hasClass("window-height-md")&&t.removeClass("window-height-md"),t.hasClass("window-height-lg")&&t.removeClass("window-height-lg"),o="window-height-xs"),a>s.sm.min&&a<s.sm.max&&(t.hasClass("window-height-xs")&&t.removeClass("window-height-xs"),t.hasClass("window-height-md")&&t.removeClass("window-height-md"),t.hasClass("window-height-lg")&&t.removeClass("window-height-lg"),o="window-height-sm"),a>s.md.min&&a<s.md.max&&(t.hasClass("window-height-xs")&&t.removeClass("window-height-xs"),t.hasClass("window-height-sm")&&t.removeClass("window-height-sm"),t.hasClass("window-height-lg")&&t.removeClass("window-height-lg"),o="window-height-md"),a>s.lg.min&&(t.hasClass("window-height-xs")&&t.removeClass("window-height-xs"),t.hasClass("window-height-sm")&&t.removeClass("window-height-sm"),t.hasClass("window-height-md")&&t.removeClass("window-height-md"),o="window-height-lg"),$("html body").eq(0).addClass(n).addClass(o)})}).trigger("resize"),$(window).on("scroll",function(e){var s=$(document).scrollTop(),n=$(".navbar-site.scroll");n.hasClass("scroll-navbar")?s<=500&&n.removeClass("scroll-navbar"):s>500&&n.addClass("scroll-navbar"),n.hasClass("opacity")?s<=200&&n.removeClass("opacity"):s>200&&n.addClass("opacity"),n.hasClass("fixed")?s<=400&&n.removeClass("fixed"):s>400&&n.addClass("fixed")}).trigger("scroll"),window.onbeforeunload=function(e){$("body").trigger("fecss.window.unload",[e])},$(document.body).trigger("fecss.init")});
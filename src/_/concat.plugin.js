function fecss_ScreenJS(){var e=this;e.screen={w:0,h:0,type:"xs",orientation:"portrait"},e.__resizefunctions={xs:{default:[],portrait:[],landscape:[]},sm:{default:[],portrait:[],landscape:[]},md:{default:[],portrait:[],landscape:[]},"md-h":{default:[],portrait:[],landscape:[]},lg:{default:[],portrait:[],landscape:[]},xl:{default:[],portrait:[],landscape:[]},device:{default:[],portrait:[],landscape:[]},pc:{default:[],portrait:[],landscape:[]},xxl:{default:[],portrait:[],landscape:[]}},e.isXS=function(){return e.screen.w<768},e.isSM=function(){return e.screen.w>767&&e.screen.w<1025},e.isMD=function(){return e.screen.w>1024&&e.screen.w<1200},e.isMDH=function(){return e.screen.w>1024&&e.screen.w<1281&&e.screen.h>909},e.isLG=function(){return e.screen.w>1199},e.isXL=function(){return e.screen.w>1399&&e.screen.w<1681},e.isXXL=function(){return e.screen.w>1680},e.device=function(){return e.screen.w<1010},e.pc=function(){return e.screen.w>1024},e.screenIs=function(){var n="noname";return e.isXS()?n="xs":e.isSM()?n="sm":e.isMD()?n="md":e.isMDH()?n="md-h":e.isLG()?n="lg":e.isXL()?n="xl":e.isXXL()?n="xxl":e.device()?n="device":e.pc()&&(n="pc"),n},e.isPortrait=function(){return e.screen.h>e.screen.w},e.isLandscape=function(){return e.screen.w>e.screen.h},e.orientationIs=function(){var n="noname";return e.isPortrait()?n="portrait":e.isLandscape()&&(n="landscape"),n},e.is=function(n){return n==e.screenIs()||n==e.orientationIs()},e.onResize=function(n,r){if(n.type){var t=e.__resizefunctions[n.type];n.orientation?t[n.orientation].push(r):t.default.push(r)}},e.resizeCall=function(n){if(n.type){if(e.__resizefunctions[n.type].default)for(var r=0;r<e.__resizefunctions[n.type].default.length;r++){var t=e.__resizefunctions[n.type].default[r];t(n)}if(e.__resizefunctions[n.type][n.orientation])for(var r=0;r<e.__resizefunctions[n.type][n.orientation].length;r++){var t=e.__resizefunctions[n.type][n.orientation][r];t(n)}}},e.setScreen=function(){return e.screen.w=$(window).outerWidth(!0),e.screen.h=$(window).outerHeight(!0),e.screen.type=e.screenIs(),e.screen.orientation=e.orientationIs(),e.resizeCall(e.screen),console.log(e.screen),e.screen}}var screenJS=new fecss_ScreenJS;$(window).on("resize",function(){screenJS.setScreen()}),function(e){var n=jQuery.fn.addClass,r=jQuery.fn.removeClass,t=jQuery.fn.toggleClass;e.fn.addClass=function(){var r=n.apply(this,arguments);return e(this).trigger("changeClass",["add"]),r},e.fn.removeClass=function(){var n=r.apply(this,arguments);return e(this).trigger("changeClass",["remove"]),n},e.fn.toggleClass=function(){var n=t.apply(this,arguments);return e(this).trigger("changeClass",["toggle"]),n}}(jQuery);
function initMap(){var e="map-google",a=$("#"+e);if(a.length){var t=JSON.parse(a.attr("data-map")||"{}"),o=t.center,r=t.zoom,l=[{featureType:"all",stylers:[{saturation:0},{hue:"#e7ecf0"}]},{featureType:"road",stylers:[{saturation:-70}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{visibility:"simplified"},{saturation:-60}]}],s={zoom:r,center:new google.maps.LatLng(o[0],o[1]),styles:l},i=document.getElementById(e),n=new google.maps.Map(i,s),p={path:"M19.9,0C9.6,0.4,1.1,8.4,0.1,18.6c-0.2,2-0.1,4,0.3,5.9l0,0c0,0,0,0.2,0.1,0.6 c0.3,1.4,0.8,2.8,1.4,4.1c2.1,4.9,6.9,13.1,17.6,22c0.7,0.6,1.6,0.6,2.3,0c10.7-8.9,15.5-17.1,17.6-22c0.6-1.3,1.1-2.7,1.4-4.1 c0.1-0.4,0.1-0.6,0.1-0.6l0,0c0.2-1.3,0.4-2.6,0.4-3.9C41.3,9,31.6-0.4,19.9,0z M20.6,30.9c-5.5,0-10-4.5-10-10s4.5-10,10-10   s10,4.5,10,10S26.2,30.9,20.6,30.9z",fillColor:"#37a9e2",strokeColor:"#000000",fillOpacity:1,anchor:new google.maps.Point(21,51),strokeWeight:0,scale:1};if(m=new google.maps.Marker({position:g,map:n,icon:p}),t.placemarks.length)for(var c=0;c<t.placemarks.length;c++)var g={lat:t.placemarks[c].coord[0],lng:t.placemarks[c].coord[1]},m=new google.maps.Marker({position:g,map:n,icon:p})}}
!function(){"use strict";$("form").each(function(){var a=$("input[name=key]").val();a=a.replace("london","tirana"),a=a.replace("greatbritain","albania"),$("input[name=key]").val(a)})}();
!function(){"use strict";$(window).on("load",function(){var a=$(".navbar__hamburger-btn").data("toggle-nav"),n=$(".navbar__hamburger-btn").data("body"),e=$(".navbar__hamburger-btn").data("collapse-nav");$(".navbar__hamburger-btn").on("click",function(){$(n).toggleClass("is--open-navbar"),$(a).toggleClass("is--open"),$(e).toggleClass("is--open"),$(this).toggleClass("is--active")}),$(document.body).on("click",function(s){0==$(s.target).closest(".navbar").length&&($(n).removeClass("is--open-navbar"),$(a).removeClass("is--open"),$(e).removeClass("is--open"),$(".navbar__hamburger-btn").removeClass("is--active"))})})}();
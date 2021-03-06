
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};

// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,clear,count,debug,dir,dirxml,error,exception,firebug,group,groupCollapsed,groupEnd,info,log,memoryProfile,memoryProfileEnd,profile,profileEnd,table,time,timeEnd,timeStamp,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());





jQuery(document).ready(function(){
	
	(function() {
		var po = document.createElement('script');
		po.type = 'text/javascript';
		po.async = true;
		po.src = 'https://apis.google.com/js/plusone.js';
		var s = document.getElementsByTagName('script')[0];
		s.parentNode.insertBefore(po, s);
	})();
	
	var foolslide = new $.foolslide(null, {
		slideUrls: ['http://foolrulez.org/slide']
	});
	
	if(jQuery('#list_for_foolslide').length > 0)
	{
		var chaptersArray = foolslide.readerChapters({
			direction: 'desc',
			per_page: 12
		});
		
		var chapters_list = "";
		var prev_id = 0;
		jQuery.each(chaptersArray.chapters, function(index, chapter){
			if(prev_id != chapter.comic_id)
			{
				var comic = foolslide.readerComic({
					id: chapter.comic_id
				});
				chapters_list += '<dt><a href="' + comic.comics[0].href + '">' + comic.comics[0].name + '</a></dt>'; 
				prev_id = chapter.comic_id;
			}
			chapters_list += '<dd><a href="' + chapter.href + '">' + ((chapter.volume>0)?'Vol.' + chapter.volume + ' ':'') + 'Chapter ' + chapter.chapter + ((chapter.subchapter>0)?'.' + chapter.subchapter + ' ':'');
			
			// some date calculation
			var date = new Date((chapter.created || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
			diff = (((new Date()).getTime() - date.getTime()) / 1000),
			day_diff = Math.floor(diff / 86400);
			
			if(day_diff <= 2)
				chapters_list += ' <time style="color:red">' + prettyDate(chapter.created) + '</time>';
			else if(day_diff <= 7)
				chapters_list += ' <time style="color:orange">' + prettyDate(chapter.created) + '</time>';
			else
				chapters_list += ' <time>' + prettyDate(chapter.created) + '</time>';
			
			chapters_list += '</a></dd>';
		})
	
		jQuery('#list_for_foolslide').html(chapters_list);
	}
});





// place any jQuery/helper plugins in here, instead of separate, slower script files.

/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
;(function(d){var k=d.scrollTo=function(a,i,e){d(window).scrollTo(a,i,e)};k.defaults={axis:'xy',duration:parseFloat(d.fn.jquery)>=1.3?0:1};k.window=function(a){return d(window)._scrollable()};d.fn._scrollable=function(){return this.map(function(){var a=this,i=!a.nodeName||d.inArray(a.nodeName.toLowerCase(),['iframe','#document','html','body'])!=-1;if(!i)return a;var e=(a.contentWindow||a).document||a.ownerDocument||a;return d.browser.safari||e.compatMode=='BackCompat'?e.body:e.documentElement})};d.fn.scrollTo=function(n,j,b){if(typeof j=='object'){b=j;j=0}if(typeof b=='function')b={onAfter:b};if(n=='max')n=9e9;b=d.extend({},k.defaults,b);j=j||b.speed||b.duration;b.queue=b.queue&&b.axis.length>1;if(b.queue)j/=2;b.offset=p(b.offset);b.over=p(b.over);return this._scrollable().each(function(){var q=this,r=d(q),f=n,s,g={},u=r.is('html,body');switch(typeof f){case'number':case'string':if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)){f=p(f);break}f=d(f,this);case'object':if(f.is||f.style)s=(f=d(f)).offset()}d.each(b.axis.split(''),function(a,i){var e=i=='x'?'Left':'Top',h=e.toLowerCase(),c='scroll'+e,l=q[c],m=k.max(q,i);if(s){g[c]=s[h]+(u?0:l-r.offset()[h]);if(b.margin){g[c]-=parseInt(f.css('margin'+e))||0;g[c]-=parseInt(f.css('border'+e+'Width'))||0}g[c]+=b.offset[h]||0;if(b.over[h])g[c]+=f[i=='x'?'width':'height']()*b.over[h]}else{var o=f[h];g[c]=o.slice&&o.slice(-1)=='%'?parseFloat(o)/100*m:o}if(/^\d+$/.test(g[c]))g[c]=g[c]<=0?0:Math.min(g[c],m);if(!a&&b.queue){if(l!=g[c])t(b.onAfterFirst);delete g[c]}});t(b.onAfter);function t(a){r.animate(g,j,b.easing,a&&function(){a.call(this,n,b)})}}).end()};k.max=function(a,i){var e=i=='x'?'Width':'Height',h='scroll'+e;if(!d(a).is('html,body'))return a[h]-d(a)[e.toLowerCase()]();var c='client'+e,l=a.ownerDocument.documentElement,m=a.ownerDocument.body;return Math.max(l[h],m[h])-Math.min(l[c],m[c])};function p(a){return typeof a=='object'?a:{top:a,left:a}}})(jQuery);
		
		
/*
 * JavaScript Pretty Date
 * Copyright (c) 2011 John Resig (ejohn.org)
 * Licensed under the MIT and GPL licenses.
 */

// Takes an ISO time and returns a string representing how
// long ago the date represents.
function prettyDate(time){
	var date = new Date((time || "").replace(/-/g,"/").replace(/[TZ]/g," ")),
		diff = (((new Date()).getTime() - date.getTime()) / 1000),
		day_diff = Math.floor(diff / 86400);
			
	if ( isNaN(day_diff) || day_diff < 0 || day_diff >= 61 )
		return;
			
	return day_diff == 0 && (
			diff < 60 && "just now" ||
			diff < 120 && "1 minute ago" ||
			diff < 3600 && Math.floor( diff / 60 ) + " minutes ago" ||
			diff < 7200 && "1 hour ago" ||
			diff < 86400 && Math.floor( diff / 3600 ) + " hours ago") ||
		day_diff == 1 && "Yesterday" ||
		day_diff < 12 && day_diff + " days ago" ||
		day_diff < 31 && Math.ceil( day_diff / 7 ) + " weeks ago" ||
		day_diff < 61 && "1 month ago";
		day_diff >= 61 && Math.ceil( day_diff / 31 ) + " months ago";
}

// If jQuery is included in the page, adds a jQuery plugin to handle it as well
if ( typeof jQuery != "undefined" )
	jQuery.fn.prettyDate = function(){
		return this.each(function(){
			var date = prettyDate(this.title);
			if ( date )
				jQuery(this).text( date );
		});
	};		
		
		
// this would be foolslide.js		
(function(a){a.foolslide=function(d,f){var l={slideUrls:[]};var g=this;g.settings={};var r=a(d),d=d;g.init=function(){g.settings=a.extend({},l,f);a.each(g.settings.slideUrls,function(B,C){if(C.substr(-1)=="/"){g.settings.slideUrls[B]=C.substr(0,C.length-1)}})};var v={};var b={};var e={};var s={};var q={};var h={};var y={};g.cleanCache=function(){v={};b={};e={};s={};q={};h={};y={}};var j=function(B){a.each(B,function(C,D){a.each(D.comics,function(F,E){if(typeof v[E.id+"_"+C]=="undefined"||x(E.updated)>x(v[E.id+"_"+C].updated)){v[E.id+"_"+C]=E;v[E.id+"_"+C].slideUrl=C}})})};var o=function(B){a.each(B,function(C,D){a.each(D.chapters,function(G,F){if(typeof F.comic!="undefined"&&(typeof v[F.comic.id+"_"+C]=="undefined"||x(F.comic.updated)>x(v[F.comic.id+"_"+C].updated))){v[F.comic.id+"_"+C]=F.comic;v[F.comic.id+"_"+C].slideUrl=C;if(typeof v[F.comic.id+"_"+C].href=="undefined"){v[F.comic.id+"_"+C].href=v[F.comic.id+"_"+C].slideUrl+"/reader/comic/"+v[F.comic.id+"_"+C].stub}}if(typeof F.teams!="undefined"){a.each(F.teams,function(H,I){if(typeof s[I.id+"_"+C]=="undefined"||(typeof s[I.id+"_"+C]!="undefined"&&x(I.updated)>x(s[I.id+"_"+C].updated))){s[I.id+"_"+C]=I;s[I.id+"_"+C].slideUrl=C;if(typeof s[I.id+"_"+C].href=="undefined"){s[I.id+"_"+C].href=s[I.id+"_"+C].slideUrl+"reader/team/"+s[I.id+"_"+C].stub}}})}if(F.teams.length>1){q[F.chapter.joint_id+"_"+C]={id:F.joint_id,slideUrl:C,teams:[]};a.each(F.teams,function(H,I){q[F.chapter.joint_id+"_"+C].teams.push(I.id)})}if(typeof F.chapter!="undefined"&&(typeof b[F.chapter.id+"_"+C]=="undefined"||x(F.chapter.updated)>x(b[F.chapter.id+"_"+C].updated))){b[F.chapter.id+"_"+C]=F.chapter;b[F.chapter.id+"_"+C].slideUrl=C;if(typeof b[F.chapter.id+"_"+C].href=="undefined"){b[F.chapter.id+"_"+C].href=b[F.chapter.id+"_"+C].slideUrl+"/reader/read/";if(typeof v[F.chapter.comic_id+"_"+C]=="undefined"){var E=g.readerComic({id:F.chapter.comic_id}).comics[0].stub;if(typeof E=="undefined"){console.log("Impossible to fetch comic stub when creating href to chapter. Chapter was ID:"+F.chapter.id+" and comic was ID:"+F.chapter.comic_id)}else{b[F.chapter.id+"_"+C].href+=E}}else{b[F.chapter.id+"_"+C].href+=v[F.chapter.comic_id+"_"+C].stub}b[F.chapter.id+"_"+C].href+="/"+b[F.chapter.id+"_"+C].language+"/"+b[F.chapter.id+"_"+C].volume+"/"+b[F.chapter.id+"_"+C].chapter+"/"+b[F.chapter.id+"_"+C].subchapter+"/";if(b[F.chapter.id+"_"+C].team_id>0){b[F.chapter.id+"_"+C].href+=s[b[F.chapter.id+"_"+C].team_id+"_"+C].stub+"/"}else{b[F.chapter.id+"_"+C].href+="0/"+b[F.chapter.id+"_"+C].joint_id+"/"}}if(typeof b[F.chapter.id+"_"+C].title=="undefined"){b[F.chapter.id+"_"+C].title=(b[F.chapter.id+"_"+C].volume>0?"Vol."+b[F.chapter.id+"_"+C].volume+" ":"")+"Chapter "+b[F.chapter.id+"_"+C].chapter+(b[F.chapter.id+"_"+C].subchapter>0?"."+b[F.chapter.id+"_"+C].subchapter:"")+(b[F.chapter.id+"_"+C].name!=""?": "+b[F.chapter.id+"_"+C].name:"")}}if(typeof F.pages!="undefined"){if(F.pages.length==0){b[F.chapter.id+"_"+C].zeroPages==true}else{b[F.chapter.id+"_"+C].zeroPages==false}a.each(F.pages,function(H,I){if(typeof e[I.id+"_"+C]=="undefined"||(typeof e[I.id+"_"+C]!="undefined"&&x(I.updated)>x(e[I.id+"_"+C].updated))){e[I.id+"_"+C]=I;e[I.id+"_"+C].slideUrl=C}})}})});return B};g.readerComics=function(D){var F={direction:"asc",orderby:"name",per_page:40,page:1,cache:true};var C=a.extend({},F,C);var E="/orderby/"+C.direction+"_"+C.orderby+"/per_page/"+C.per_page+"/page/"+C.page;j(z("/reader/comics"+E),"",D.cache);var B=p(v,D.orderby,(C.direction=="desc"));B=u(B,F.page,C.per_page);return{comics:B}};g.readerChapters=function(C){var E={direction:"asc",orderby:"created",per_page:40,page:1,fromCache:false,cache:true};var C=a.extend({},E,C);var D="/orderby/"+C.direction+"_"+C.orderby+"/per_page/"+C.per_page+"/page/"+C.page;if(!C.fromCache){o(z("/reader/chapters"+D),"",C.cache)}var B=p(b,C.orderby,(C.direction=="desc"));B=u(B,E.page,C.per_page);return{chapters:B}};g.readerComic=function(D){var G={id:0,stub:"",uniqid:"",orderby:"chapter",direction:"asc",slideUrl:g.settings.slideUrls[0],forceChapters:false,forceCache:false,cache:true};var D=a.extend({},G,D);if(D.id>0){var C=A(D);if(C!==false){var H=C;var E=p(H.chapters,D.orderby,(D.direction=="desc"));H.chapters=E;return H}var F="/id/"+D.id+"/"}if(D.forceCache){return false}if(D.stub!=""){a.each(v,function(I,J){if((J.stub==D.stub)&&(J.slideUrl==D.slideUrl)){D.id=J.id;return false}});if(D.id>0){return g.readerComic(D)}var F="/stub/"+D.stub+"/";if(G.uniqid!=""){F+="uniqid/"+D.uniqid}}var B=z("/reader/comic"+F,D.slideUrl,D.cache);if(typeof v[B[D.slideUrl].comic.id+"_"+D.slideUrl]=="undefined"||x(B[D.slideUrl].comic.updated)>x(v[B[D.slideUrl].comic.id+"_"+D.slideUrl].updated)){v[B[D.slideUrl].comic.id+"_"+D.slideUrl]=B[D.slideUrl].comic;v[B[D.slideUrl].comic.id+"_"+D.slideUrl].slideUrl=D.slideUrl}if(B[D.slideUrl].chapters.length==0){v[B[D.slideUrl].comic.id+"_"+D.slideUrl].zeroChapters=true}else{v[B[D.slideUrl].comic.id+"_"+D.slideUrl].zeroChapters=false;o(B)}D.id=B[D.slideUrl].comic.id;D.forceCache=true;return g.readerComic(D)};var A=function(D){var C=false;if(typeof v[D.id+"_"+D.slideUrl]!="undefined"){var E=[];var B={comics:[v[D.id+"_"+D.slideUrl]],chapters:[]};if(D.forceChapters&&typeof v[D.id+"_"+D.slideUrl].zeroChapters=="undefined"){C=true}if(!C){a.each(b,function(G,H){if(H.slideUrl==D.slideUrl&&H.comic_id==D.id){var F=m({id:H.id,slideUrl:D.slideUrl,forcePages:false});if(F===false){C=true;return false}else{a.merge(B.chapters,F.chapters)}}})}if(!C){return B}}return false};g.readerChapter=function(D){var F={id:0,comic_id:"",volume:"",chapter:"",subchapter:"",team_id:"",joint_id:"",forcePages:false,forceCache:false,slideUrl:g.settings.slideUrls[0],cache:true};var D=a.extend({},F,D);var E="";if(D.id>0){var C=m(D);if(C!==false){return C}if(D.forceCache){return false}E+="/id/"+D.id}else{a.each(b,function(G,H){if((isNaN(parseInt(D.comic_id))||H.comic_id==parseInt(D.comic_id))&&(isNaN(parseInt(D.volume))||H.volume==parseInt(D.volume))&&(isNaN(parseInt(D.chapter))||H.chapter==parseInt(D.chapter))&&(isNaN(parseInt(D.subchapter))||H.subchapter==parseInt(D.subchapter))&&(isNaN(parseInt(D.team_id))||H.team_id==parseInt(D.team_id))&&(isNaN(parseInt(D.joint_id))||H.joint_id==parseInt(D.joint_id))&&(H.slideUrl==D.slideUrl)){D.id=H.id;return false}});if(D.id>0){return g.readerChapter(D)}if(D.comic_id>0){E+="/comic_id/"+D.comic_id}if(D.volume>0){E+="/volume/"+D.volume}if(D.chapter>0){E+="/chapter/"+D.chapter}if(D.subchapter>0){E+="/subchapter/"+D.subchapter}if(D.team_id>0){E+="/team_id/"+D.team_id}if(D.joint_id>0){E+="/joint_id/"+D.joint_id}}var B=z("/reader/chapter"+E,F.slideUrl,D.cache);B[D.slideUrl].chapters=[{comic:B[D.slideUrl].comic,chapter:B[D.slideUrl].chapter,teams:B[D.slideUrl].teams,pages:B[D.slideUrl].pages}];o(B);D.id=B[D.slideUrl].chapter.id;D.forceCache=true;return g.readerChapter(D)};var m=function(E){if(typeof b[E.id+"_"+E.slideUrl]!="undefined"){var D=false;if(typeof v[b[E.id+"_"+E.slideUrl].comic_id+"_"+E.slideUrl]=="undefined"){D=true}if(!D&&b[E.id+"_"+E.slideUrl].team_id>0&&typeof s[b[E.id+"_"+E.slideUrl].team_id+"_"+E.slideUrl]=="undefined"){D=true}if(!D&&b[E.id+"_"+E.slideUrl].team_id>0){var F=[s[b[E.id+"_"+E.slideUrl].team_id+"_"+E.slideUrl]]}if(!D&&b[E.id+"_"+E.slideUrl].joint_id>0&&typeof q[b[E.id+"_"+E.slideUrl].joint_id+"_"+E.slideUrl]=="undefined"){D=true}if(!D&&b[E.id+"_"+E.slideUrl].joint_id>0){var F=[];a.each(q[b[E.id+"_"+E.slideUrl].joint_id+"_"+E.slideUrl].teams,function(G,H){if(typeof s[H+"_"+E.slideUrl]=="undefined"){D=true;return false}else{F.push(s[H+"_"+E.slideUrl])}})}if(!D){if(E.forcePages&&(b[E.id+"_"+E.slideUrl].zeroPages!==true)){D=true}var C=[];a.each(e,function(G,H){if(H.chapter_id==E.id&&H.slideUrl==E.slideUrl){D=false;C.push(H)}})}if(!D){var B={comics:[v[b[E.id+"_"+E.slideUrl].comic_id+"_"+E.slideUrl]],chapters:[b[E.id+"_"+E.slideUrl]],teams:F};if(E.forcePages){B.pages=C}return B}}return false};g.readerTeam=function(){};g.readerJoint=function(){};var k=function(C){var B=[];a.each(C,function(D,E){B.push(E)});return B};var x=function(C){var B=/^([0-9]{2,4})-([0-1][0-9])-([0-3][0-9]) (?:([0-2][0-9]):([0-5][0-9]):([0-5][0-9]))?$/;var D=C.replace(B,"$1 $2 $3 $4 $5 $6").split(" ");return new Date(D[0],D[1]-1,D[2],D[3],D[4],D[5])};var c=function(){return(new Date().getTime()*0.001)|0};var p=function(E,C,D){switch(C){case"name":var B=n(E,D);break;case"edited":var B=i(E,D);break;case"created":var B=t(E,D);break;case"chapter":var B=w(E,D);break;default:return false}return B};var u=function(C,H,G){var B=[];var D=(H*G)-G;var I=(H*G);var E=0;for(var F=D;F<I&&F<C.length;F++){B.push(C[F])}return B};var i=function(C,D){var B=k(C);B.sort(function(F,E){return x(F.updated)-x(E.updated)});if(D){B.reverse()}return B};var t=function(C,D){var B=k(C);B.sort(function(F,E){return x(F.created)-x(E.created)});if(D){B.reverse()}return B};var n=function(C,D){var B=k(C);B.sort(function(F,E){return F.name<E.name});if(D){B.reverse()}return B};var w=function(B,C){B.sort(function(E,D){function F(I){if(I<10){return"0000"+I}if(I<100){return"000"+I}if(I<1000){return"000"+I}if(I<10000){return"0"+I}}var G={};var H={};G.volume=F(parseInt(E.volume));H.volume=F(parseInt(D.volume));G.chapter=F(parseInt(E.chapter));H.chapter=F(parseInt(D.chapter));G.subchapter=F(parseInt(E.subchapter));H.subchapter=F(parseInt(D.subchapter));if(G.volume+"/"+G.chapter+"/"+G.subchapter<H.volume+"/"+H.chapter+"/"+H.subchapter){return -1}if(G.volume+"/"+G.chapter+"/"+G.subchapter>H.volume+"/"+H.chapter+"/"+H.subchapter){return 1}return 0});if(C){B.reverse()}return B};var z=function(C,E,D){var B={};if(typeof E!="undefined"&&E!=""){var F={slideUrls:[E]}}else{var F={slideUrls:g.settings.slideUrls}}if(typeof D!="undefined"){D=true}a.each(F.slideUrls,function(G,H){a.ajax({url:H+"/api"+C,async:false,cache:D,dataType:"json",success:function(I){B[H]=I}})});return B};g.init()};a.fn.foolslide=function(b){return this.each(function(){if(undefined==a(this).data("foolslide")){var c=new a.foolslide(this,b);a(this).data("foolslide",c)}})}})(jQuery);
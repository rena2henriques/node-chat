if (self.CavalryLogger) { CavalryLogger.start_js(["wg7iu"]); }

__d('DimensionLogging',['BanzaiNectar','getViewportDimensions'],(function a(b,c,d,e,f,g){var h=c('getViewportDimensions')();c('BanzaiNectar').log('browser_dimension','homeload',{x:h.width,y:h.height,sw:window.screen.width,sh:window.screen.height,aw:window.screen.availWidth,ah:window.screen.availHeight,at:window.screen.availTop,al:window.screen.availLeft});}),null);
__d('KeyboardShortcuts',['KeyEventController','Layer','ModalLayer'],(function a(b,c,d,e,f,g){function h(j,k,l){'use strict';this.key=j;this.handler=k;this.filter=l;this.register();}h.prototype.register=function(){'use strict';this.token=c('KeyEventController').registerKey(this.key,this.handler,this.filter);};h.prototype.remove=function(){'use strict';this.token.remove();};var i={_tokens:[[]],register:function j(k,l,m){m=m||{};var n=m.allowDefault?l:function(event,r){l.apply(this,arguments);event.prevent();},o=m.baseFilters||[c('KeyEventController').defaultFilter],p=function r(event,s){for(var t=0,u=o.length;t<u;t++)if(!o[t](event,s))return false;return !m.filter||m.filter(event,s);},q=new h(k,n,p);if(!this._tokens.length)this._tokens.push([]);this._tokens[this._tokens.length-1].push(q);return q;},init:function j(){c('Layer').subscribe('show',function(k,l){if(l.hasBehavior(c('ModalLayer')))this.pushLayer();}.bind(this));c('Layer').subscribe('hide',function(k,l){if(l.hasBehavior(c('ModalLayer')))this.popLayer();}.bind(this));},pushLayer:function j(){var k=this._tokens[this._tokens.length-1];k&&k.forEach(function(l){l.remove();});this._tokens.push([]);},popLayer:function j(){var k=this._tokens.length-1;if(k<0)return;var l=this._tokens[k];l.forEach(function(n){n.remove();});this._tokens.pop();var m=this._tokens[k-1];m&&m.forEach(function(n){n.register();});}};i.init();f.exports=i;}),null);
__d('AbstractDockingElement',['Arbiter','Event','Run','SubscriptionsHandler','onEnclosingPageletDestroy','queryThenMutateDOM','removeFromArray'],(function a(b,c,d,e,f,g){var h=[],i=null;function j(){c('queryThenMutateDOM')(function(){return h.forEach(function(m){return m.queryDOM();});},function(){return h.forEach(function(m){return m.updateWithCache();});},'AbstractDockingElement');}function k(){if(!i){i=new (c('SubscriptionsHandler'))();i.addSubscriptions(c('Event').listen(window,'scroll',j),c('Event').listen(window,'resize',j),c('Run').onLeave(function(){while(h.length)l(h[0]);}));i=i;}return i;}function l(m){try{m.onPageletDestroyed&&c('Arbiter').unsubscribe(m.onPageletDestroyed);}catch(n){}finally{m.onPageletDestroyed=null;}if(!i||h.indexOf(m)===-1)return;c('removeFromArray')(h,m);if(h.length)return;i.release();i=null;}f.exports={register:function m(n,o,p){var q=k(),r={onPageletDestroyed:q.addSubscriptions(c('onEnclosingPageletDestroy')(n,function(){l(r);})),queryDOM:o,updateWithCache:p};h.push(r);}};}),null);
__d('DirectionalDockingElement',['AbstractDockingElement','Arbiter','DOM','Scroll','Style','UITinyViewportAction','UserAgent','ViewportBounds','getElementPosition','getStyleProperty','queryThenMutateDOM'],(function a(b,c,d,e,f,g){var h=true,i=false,j=c('UserAgent').isBrowser('Safari < 10')||c('UserAgent').isBrowser('Mobile Safari < 10');function k(l){'use strict';this.$DirectionalDockingElement5=0;this.$DirectionalDockingElement2=null;this.$DirectionalDockingElement7=false;this.$DirectionalDockingElement12=l;this.$DirectionalDockingElement8=0;this.$DirectionalDockingElement11=null;this.$DirectionalDockingElement13=0;this.register();this.$DirectionalDockingElement14=c('ViewportBounds').getTop();c('Style').set(this.$DirectionalDockingElement12,'width',this.$DirectionalDockingElement12.getBoundingClientRect().width+'px');this.$DirectionalDockingElement9=c('DOM').create('div');c('Style').set(this.$DirectionalDockingElement9,'position','relative');c('DOM').replace(this.$DirectionalDockingElement12,this.$DirectionalDockingElement9);c('DOM').appendContent(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12);this.update();}k.prototype.register=function(){'use strict';c('AbstractDockingElement').register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this));};k.prototype.subscribe=function(event,l,m){'use strict';if(!this.$DirectionalDockingElement1)this.$DirectionalDockingElement1=new (c('Arbiter'))();return this.$DirectionalDockingElement1.subscribe(event,l,m);};k.prototype.destroy=function(){'use strict';c('DOM').replace(this.$DirectionalDockingElement9,this.$DirectionalDockingElement12);};k.prototype.__queryDOM=function(){'use strict';var l=-c('getElementPosition')(this.$DirectionalDockingElement9).y;if(l!==this.$DirectionalDockingElement13){this.$DirectionalDockingElement15=l>this.$DirectionalDockingElement13?i:h;this.$DirectionalDockingElement13=l;}this.$DirectionalDockingElement6=this.$DirectionalDockingElement12.getBoundingClientRect();var m=document,n=m.body,o=m.documentElement;if(n&&o){var p=o.clientHeight,q=o.scrollHeight;this.$DirectionalDockingElement7=c('Scroll').getTop(n)+p>Math.max(p,q);}if(j){this.$DirectionalDockingElement11=c('getElementPosition')(this.$DirectionalDockingElement9);var r=parseInt(c('getStyleProperty')(this.$DirectionalDockingElement12,'left'),10);if(this.$DirectionalDockingElement11&&!isNaN(r)&&r!==this.$DirectionalDockingElement11.x)this.$DirectionalDockingElement11=babelHelpers['extends']({},this.$DirectionalDockingElement11,{x:r});}if(this.$DirectionalDockingElement12.style.position==='fixed')this.$DirectionalDockingElement5=c('getElementPosition')(this.$DirectionalDockingElement12).y+this.$DirectionalDockingElement13;};k.prototype.$DirectionalDockingElement16=function(l,m,n){'use strict';if(m===this.$DirectionalDockingElement4&&l===this.$DirectionalDockingElement3&&n===this.$DirectionalDockingElement2)return;var o=l!==this.$DirectionalDockingElement3,p={};if(m!==this.$DirectionalDockingElement4){p.top=m+'px';this.$DirectionalDockingElement4=m;}if(l!==this.$DirectionalDockingElement3){p.position=l;this.$DirectionalDockingElement3=l;}if(j)if(n!==this.$DirectionalDockingElement2){p.left=typeof n==='number'?n+'px':'auto';this.$DirectionalDockingElement2=n;}c('Style').apply(this.$DirectionalDockingElement12,p);if(o&&this.$DirectionalDockingElement1)this.$DirectionalDockingElement1.inform('changedposition');};k.prototype.$DirectionalDockingElement17=function(){'use strict';this.$DirectionalDockingElement16('fixed',this.$DirectionalDockingElement14,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null);};k.prototype.$DirectionalDockingElement18=function(){'use strict';this.$DirectionalDockingElement16('fixed',this.$DirectionalDockingElement8,this.$DirectionalDockingElement11?this.$DirectionalDockingElement11.x:null);};k.prototype.$DirectionalDockingElement19=function(){'use strict';this.$DirectionalDockingElement16('absolute',this.$DirectionalDockingElement5,null);};k.prototype.unfixAndScrollBy=function(l){'use strict';this.$DirectionalDockingElement5=Math.max(0,this.$DirectionalDockingElement5-l);this.$DirectionalDockingElement19();};k.prototype.translateY=function(l){'use strict';var m=c('getElementPosition')(this.$DirectionalDockingElement12).y,n=c('getElementPosition')(this.$DirectionalDockingElement9).y,o=m-n;this.$DirectionalDockingElement5=l+o;this.$DirectionalDockingElement19();};k.prototype.__updateWithCache=function(){'use strict';var l=Math.round(this.$DirectionalDockingElement6.height);if(l!==this.$DirectionalDockingElement10){c('Style').set(this.$DirectionalDockingElement9,'height',l+'px');this.$DirectionalDockingElement10=l;this.$DirectionalDockingElement1&&this.$DirectionalDockingElement1.inform('changedheight');}if(this.$DirectionalDockingElement7)return;if(this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<0||c('UITinyViewportAction').isTiny()){this.$DirectionalDockingElement5=0;this.$DirectionalDockingElement19();return;}if(this.$DirectionalDockingElement15===i&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement8>=this.$DirectionalDockingElement5){this.$DirectionalDockingElement18();}else if(this.$DirectionalDockingElement15===h&&this.$DirectionalDockingElement13+this.$DirectionalDockingElement14<=this.$DirectionalDockingElement5){this.$DirectionalDockingElement17();}else this.$DirectionalDockingElement19();};k.prototype.update=function(){'use strict';c('queryThenMutateDOM')(function(){this.__queryDOM();}.bind(this),function(){this.__updateWithCache();}.bind(this));};k.prototype.setOffset=function(l){'use strict';return this.setOffsetAndTop(l,this.$DirectionalDockingElement14);};k.prototype.setOffsetAndTop=function(l,m){'use strict';c('queryThenMutateDOM')(function(){this.__queryDOM();this.$DirectionalDockingElement8=l;this.$DirectionalDockingElement14=m;}.bind(this),function(){this.__updateWithCache();}.bind(this));return this;};k.prototype.setTop=function(l){'use strict';return this.setOffsetAndTop(this.$DirectionalDockingElement8,l);};k.prototype.getPlaceholder=function(){'use strict';return this.$DirectionalDockingElement9;};k.prototype.getRoot=function(){'use strict';return this.$DirectionalDockingElement12;};f.exports=k;}),null);
__d('DockingElement',['AbstractDockingElement','Arbiter','CSS','DOM','DOMDimensions','Style','UserAgent','UITinyViewportAction','getElementPosition','mixin'],(function a(b,c,d,e,f,g){var h=c('UserAgent').isBrowser('Safari')||c('UserAgent').isBrowser('Mobile Safari');function i(j){'use strict';this.$DockingElement12=j;this.$DockingElement9=c('DOM').create('div');c('Style').set(this.$DockingElement9,'position','relative');c('DOM').replace(this.$DockingElement12,this.$DockingElement9);c('DOM').appendContent(this.$DockingElement9,this.$DockingElement12);this.$DockingElement8=0;this.register();this.update();}i.prototype.register=function(){'use strict';c('AbstractDockingElement').register(this.getRoot(),this.__queryDOM.bind(this),this.__updateWithCache.bind(this));};i.prototype.subscribe=function(event,j,k){'use strict';if(!this.$DockingElement1)this.$DockingElement1=new (c('Arbiter'))();return this.$DockingElement1.subscribe(event,j,k);};i.prototype.__queryDOM=function(){'use strict';this.$DockingElement11=c('getElementPosition')(this.getPlaceholder());this.$DockingElement5=c('DOMDimensions').getElementDimensions(this.$DockingElement12);};i.prototype.__updateWithCache=function(){'use strict';var j=this.$DockingElement8,k=this.getPlaceholder();if(!c('UITinyViewportAction').isTiny()&&this.$DockingElement11.y<=j){if(!this.$DockingElement7&&this.$DockingElement12.parentNode){c('CSS').addClass(this.$DockingElement12,'fixed_elem');this.$DockingElement7=true;}var l;if(this.$DockingElement4!==j){l={};l.top=j+'px';this.$DockingElement4=j;}var m=this.$DockingElement5.width;if(m!==this.$DockingElement3){l=l||{};l.width=m+'px';this.$DockingElement3=m;}if(h){var n=this.$DockingElement11.x;if(n!==this.$DockingElement2){l=l||{};l.left=n+'px';this.$DockingElement2=n;}}l&&c('Style').apply(this.$DockingElement12,l);var o=this.$DockingElement5.height;c('Style').set(k,'height',o+'px');if(o+1<this.$DockingElement10||o-1>this.$DockingElement10){this.$DockingElement10=o;this.$DockingElement1&&this.$DockingElement1.inform('changedheight');}}else if(this.$DockingElement7){c('Style').set(k,'height','');c('Style').apply(this.$DockingElement12,{left:'',top:'',width:''});c('CSS').removeClass(this.$DockingElement12,'fixed_elem');this.$DockingElement7=false;this.$DockingElement2=null;this.$DockingElement3=null;this.$DockingElement4=null;}};i.prototype.update=function(){'use strict';this.__queryDOM();this.__updateWithCache();};i.prototype.getPlaceholder=function(){'use strict';return this.$DockingElement9;};i.prototype.getRoot=function(){'use strict';return this.$DockingElement12;};i.prototype.setOffset=function(j){'use strict';this.$DockingElement8=j;this.update();return this;};f.exports=i;}),null);
__d('StickyRHC',['csx','$','Arbiter','DirectionalDockingElement','DockingElement','DOMDimensions','DOMQuery','Event','Run','SubscriptionsHandler','ViewportBounds','ge','getElementPosition','getViewportDimensions','removeFromArray','throttle'],(function a(b,c,d,e,f,g,h){var i=35,j=[],k;function l(z,aa){if(!aa||!aa.dom_id){j.forEach(m);return;}var ba=c('$')(aa.dom_id);for(var ca=0;ca<j.length;ca++)if(c('DOMQuery').contains(j[ca].getRoot(),ba)){m(j[ca]);return;}}function m(z){var aa=z.getRoot(),ba=z.updateOffset.bind(z),ca=c('DOMQuery').scry(aa,'img.img');ca.forEach(function(da){if(da.complete||da.getAttribute('height')||da.naturalHeight===undefined&&da.naturalHeight!==0)return;var ea=function ia(){ba();fa.remove();ga.remove();ha.remove();},fa=c('Event').listen(da,'load',ea),ga=c('Event').listen(da,'error',ea),ha=c('Event').listen(da,'abort',ea);});ba();}function n(){j.forEach(function(z){z.updateOffset();});}function o(){n();n();}function p(z){var aa=c('DOMQuery').scry(z,"._4-u2"),ba=c('DOMQuery').scry(z,"._4-u3"),ca=c('DOMQuery').scry(z,'.uiHeader'),da=c('DOMQuery').scry(z,'.ego_unit');return [].concat(aa,ba,ca,da).filter(function(ea){return t(ea)!==0;});}function q(z){return c('getElementPosition')(z).y;}function r(z,aa){return z-aa;}function s(){return t(c('ge')('pageFooter'));}function t(z){return z?c('DOMDimensions').getElementDimensions(z).height:0;}var u=v(n);function v(z){return function(aa){return c('Arbiter').subscribe(aa,z);};}function w(z,aa){var ba=arguments.length<=2||arguments[2]===undefined?true:arguments[2];'use strict';this.$StickyRHC1=z;this.$StickyRHC2=aa?new (c('DirectionalDockingElement'))(z):new (c('DockingElement'))(z);this.$StickyRHC3=ba;this.$StickyRHC2.subscribe('changedheight',this.updateOffset.bind(this));this.updateOffset();m(this);if(!j.length){k=new (c('SubscriptionsHandler'))();k.addSubscriptions(u('header_loaded'),u('browse_top_filters_full_width_displayed'),u('search_top_bar_displayed'),c('Arbiter').subscribe('netego_loaded',l),c('Arbiter').subscribe('video_fullscreen_change',o),c('Event').listen(window,'resize',c('throttle')(n)));}c('Run').onLeave(function(){return this.destroy();}.bind(this));j.push(this);}w.getInstances=function(){'use strict';return j;};w.prototype.getRoot=function(){'use strict';return this.$StickyRHC1;};w.prototype.subscribe=function(event,z){'use strict';return this.$StickyRHC2.subscribe(event,z);};w.prototype.destroy=function(){'use strict';this.$StickyRHC2=null;c('removeFromArray')(j,this);if(!j.length&&k){k.release();k=null;}};w.prototype.unfixAndScrollBy=function(z){'use strict';this.$StickyRHC2.unfixAndScrollBy(z);};w.prototype.updateOffset=function(){'use strict';this.$StickyRHC2.setOffset(this.calculateRHCOffset());};w.prototype.calculateRHCOffset=function(){'use strict';var z=this.getRoot(),aa=t(z),ba=x(),ca=y();if(aa<ca)return ba;if(this.$StickyRHC3){var da=p(z).map(q).sort(r),ea=aa+q(z);for(var fa=da,ga=Array.isArray(fa),ha=0,fa=ga?fa:fa[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var ia;if(ga){if(ha>=fa.length)break;ia=fa[ha++];}else{ha=fa.next();if(ha.done)break;ia=ha.value;}var ja=ia,ka=ea-ja;if(ka<ca)return ba-(aa-ka);}}return ba-(aa-ca);};function x(){return c('ViewportBounds').getTop();}function y(){var z=x(),aa=c('getViewportDimensions')().height,ba=s();return aa-z-i-ba;}f.exports=w;}),null);
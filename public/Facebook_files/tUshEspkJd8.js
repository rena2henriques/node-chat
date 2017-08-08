if (self.CavalryLogger) { CavalryLogger.start_js(["CHC6R"]); }

__d('BlueBarFocusListener',['CSS','Deferred','Event'],(function a(b,c,d,e,f,g){var h='f_key',i='f_click',j=null,k=function r(){j=null;};function l(r){c('CSS').removeClass(r,h);c('CSS').removeClass(r,i);}function m(r){if(j)j.reject();j=new (c('Deferred'))();j.then(function(s){l(r);c('CSS').addClass(r,s);}).done(k,k);}function n(){if(j)j.resolve(h);}function o(r){if(j)j.reject();c('CSS').removeClass(r,h);c('CSS').addClass(r,i);}function p(r){return function(event){r(event.getTarget());};}var q={listen:function r(s){if(!s)return;c('Event').listen(s,'focusout',p(l));c('Event').listen(s,'focusin',p(m));c('Event').listen(s,'click',p(o));c('Event').listen(s,'keyup',n);}};f.exports=q;}),null);
__d('RoyalBluebar',['cx','Arbiter','CSS','Event','Run','SubscriptionsHandler'],(function a(b,c,d,e,f,g,h){var i={_subscriptionHandler:null,_getSubscriptionHandler:function j(){if(!this._subscriptionHandler){this._subscriptionHandler=new (c('SubscriptionsHandler'))();c('Run').onUnload(function(){this._subscriptionHandler.release();this._subscriptionHandler=null;}.bind(this));}return this._subscriptionHandler;},fixOnScroll:function j(k){this._getSubscriptionHandler().addSubscriptions(c('Arbiter').subscribe('bluebarFixedBehaviorController/isfixed',function(l,m){var n="_50ti",o="_33rf";if(k.firstChild instanceof Element)c('CSS').conditionClass(k.firstChild,n,m);if(k.firstChild instanceof Element)c('CSS').conditionClass(k.firstChild,o,!m);}));},informOnClick:function j(k){this._getSubscriptionHandler().addSubscriptions(c('Event').listen(k,'click',function(event){if(c('Arbiter').inform('BlueBar/homeClick',event)===false)event.preventDefault();}));}};f.exports=i;}),null);
__d('NotificationComponentsBootloader',['Promise','Bootloader'],(function a(b,c,d,e,f,g){'use strict';function h(){return new (c('Promise'))(function(i){c('Bootloader').loadModules(["NotificationList.react","NotificationJewelList.react"],function(j,k){i([j,k]);},'NotificationComponentsBootloader');});}f.exports={load:h};}),null);
__d("NotificationSeenFilter",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({ALL:"all",SEEN_ONLY:"seen_only",UNSEEN_ONLY:"unseen_only",READ_ONLY:"read_only",UNREAD_ONLY:"unread_only",SEEN_BUT_UNREAD_ONLY:"seen_unread_only"});}),null);
__d('NotificationSeenState',['NotificationConstants','NotificationSeenFilter','NotificationUpdates','createObjectFrom'],(function a(b,c,d,e,f,g){var h=1,i=2,j=0,k=h,l=3,m=c('NotificationConstants').PayloadSourceType.INITIAL_LOAD,n={UNSEEN_AND_UNREAD:j,SEEN_BUT_UNREAD:k,SEEN_AND_READ:l},o={};function p(s){var t=[],u=[];Object.keys(s).forEach(function(v){var w=s[v],x=o[v];o[v]=w;if(x===undefined){t.push(v);u.push(v);return;}var y=x^w;if(y&h)t.push(v);if(y&i)u.push(v);});t.length&&c('NotificationUpdates').didUpdateSeenState(t);u.length&&c('NotificationUpdates').didUpdateReadState(u);}c('NotificationUpdates').subscribe('update-notifications',function(s,t){var u=t.nodes;if(!u||!u.length)return;var v=t.payloadsource,w=c('NotificationConstants').PayloadSourceType,x=v==w.ENDPOINT,y={};u.forEach(function(z){var aa=z.alert_id;if(!x||o[aa]===undefined)if(z.seen_state)y[aa]=n[z.seen_state];});p(y);});c('NotificationUpdates').subscribe('update-seen',function(s,t){if(!t.seenState)return;var u=[],v={};Object.keys(t.seenState).forEach(function(x){if(!t.seenState||!t.seenState[x]){u.push(x);return;}var y=o[x];if(y!==undefined)v[x]=y|h;});var w=babelHelpers['extends']({},c('createObjectFrom')(u,j),v);p(w);});c('NotificationUpdates').subscribe('update-read',function(s,t){if(!t.readState)return;var u=[],v={};Object.keys(t.readState).forEach(function(x){if(!t.readState)return;var y=t.readState[x];if(y){u.push(x);return;}var z=o[x];if(z!==undefined){v[x]=z&~i;}else if(t.payloadsource==m)v[x]=k;});var w=babelHelpers['extends']({},c('createObjectFrom')(u,l),v);p(w);});function q(s){var t=o[s];return t;}var r={isRead:function s(t){return q(t)===l;},isSeen:function s(t){return q(t)!==j;},getUnseenCount:function s(){return r.getUnseenIDs().length;},getUnseenIDs:function s(){return Object.keys(o).filter(function(t){return o[t]===j;});},getUnreadCount:function s(){return r.getUnreadIDs().length;},getUnreadIDs:function s(){return Object.keys(o).filter(function(t){return o[t]!==l;});},validateFilter:function s(t,u){switch(u){case c('NotificationSeenFilter').SEEN_ONLY:return r.isSeen(t);case c('NotificationSeenFilter').UNSEEN_ONLY:return !r.isSeen(t);case c('NotificationSeenFilter').READ_ONLY:return r.isRead(t);case c('NotificationSeenFilter').UNREAD_ONLY:return !r.isRead(t);case c('NotificationSeenFilter').SEEN_BUT_UNREAD_ONLY:return r.isSeen(t)&&!r.isRead(t);default:return true;}}};f.exports=r;}),6);
__d('NotificationJewelControllerModuleLoader',['JSResource','NotificationSeenState','NotificationStore','NotificationUpdates'],(function a(b,c,d,e,f,g){c('NotificationSeenState');c('NotificationStore');c('NotificationUpdates');f.exports=c('JSResource')('NotificationJewelController').__setRef('NotificationJewelControllerModuleLoader');}),null);
__d('NotificationJewelHeaderController',['DOM','Event','NotificationSeenState','NotificationUpdates','NotificationUserActions'],(function a(b,c,d,e,f,g){function h(i,j){'use strict';c('Event').listen(i,'click',function(){c('NotificationUserActions').markAllNotificationsAsRead();});c('NotificationUpdates').subscribe('read-state-updated',function(){if(j)c('DOM').setContent(j,c('NotificationSeenState').getUnreadCount());});}f.exports=h;}),null);
__d('NotificationJewelListController',['NotificationComponentsBootloader','React','ReactDOM'],(function a(b,c,d,e,f,g){var h=null,i=null;function j(k,l){'use strict';this.$NotificationJewelListController1=false;this.$NotificationJewelListController2=false;this.$NotificationJewelListController3=k;this.$NotificationJewelListController4=l;}j.prototype.open=function(){'use strict';this.$NotificationJewelListController1=true;this.$NotificationJewelListController5();};j.prototype.pause=function(){'use strict';this.$NotificationJewelListController2=true;this.$NotificationJewelListController5();};j.prototype.unpause=function(){'use strict';this.$NotificationJewelListController2=false;this.$NotificationJewelListController5();};j.prototype.$NotificationJewelListController5=function(){'use strict';if(!h||!i){c('NotificationComponentsBootloader').load().done(function(k){var l=k[0],m=k[1];h=l;i=m;this.$NotificationJewelListController6();}.bind(this));}else this.$NotificationJewelListController6();};j.prototype.$NotificationJewelListController6=function(){'use strict';if(!h||!i)return;c('ReactDOM').render(c('React').createElement(h,{hasEverBeenOpened:this.$NotificationJewelListController1,paused:this.$NotificationJewelListController2,tracking:this.$NotificationJewelListController4.tracking,negativeTracking:this.$NotificationJewelListController4.negativeTracking,shortenTimestamp:this.$NotificationJewelListController4.shortenTimestamp,businessID:this.$NotificationJewelListController4.businessID,maxHeight:this.$NotificationJewelListController4.maxHeight,useChevron:this.$NotificationJewelListController4.useChevron,chevronType:this.$NotificationJewelListController4.chevronType,numPerPage:5,listRenderer:i,upsell:this.$NotificationJewelListController4.upsell||null,endpoint:this.$NotificationJewelListController4.endpoint}),this.$NotificationJewelListController3);};f.exports=j;}),null);
__d('CrossWindowEventEmitter',['CacheStorage','EventEmitter','FBJSON'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('EventEmitter'));i=h&&h.prototype;function j(k){i.constructor.call(this);this.$CrossWindowEventEmitter2=k;this.$CrossWindowEventEmitter1=new (c('CacheStorage'))('localstorage',k+':');this.$CrossWindowEventEmitter1.addValueChangeCallback(function(l,m,n){var o,event=l.split(':')[1],p=c('FBJSON').parse(n),q=p.__v;(o=i.emit).call.apply(o,[this,event].concat(q));}.bind(this));}j.prototype.emit=function(k){var l;for(var m=arguments.length,n=Array(m>1?m-1:0),o=1;o<m;o++)n[o-1]=arguments[o];this.emitRemote.apply(this,[k].concat(n));(l=i.emit).call.apply(l,[this,k].concat(n));};j.prototype.emitRemote=function(k){for(var l=arguments.length,m=Array(l>1?l-1:0),n=1;n<l;n++)m[n-1]=arguments[n];this.$CrossWindowEventEmitter1.set(k,m);};f.exports=j;}),null);
__d('FriendingSurfaceVisitationTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:FriendingSurfaceVisitationLoggerConfig',this.$FriendingSurfaceVisitationTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:FriendingSurfaceVisitationLoggerConfig',this.$FriendingSurfaceVisitationTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$FriendingSurfaceVisitationTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$FriendingSurfaceVisitationTypedLogger1=babelHelpers['extends']({},this.$FriendingSurfaceVisitationTypedLogger1,j);return this;};h.prototype.setAppVersion=function(j){this.$FriendingSurfaceVisitationTypedLogger1.app_version=j;return this;};h.prototype.setBadgeCount=function(j){this.$FriendingSurfaceVisitationTypedLogger1.badge_count=j;return this;};h.prototype.setClientTimestamp=function(j){this.$FriendingSurfaceVisitationTypedLogger1.client_timestamp=j;return this;};h.prototype.setRawRefTab=function(j){this.$FriendingSurfaceVisitationTypedLogger1.raw_ref_tab=j;return this;};h.prototype.setRawTab=function(j){this.$FriendingSurfaceVisitationTypedLogger1.raw_tab=j;return this;};h.prototype.setRefPage=function(j){this.$FriendingSurfaceVisitationTypedLogger1.ref_page=j;return this;};h.prototype.setSurface=function(j){this.$FriendingSurfaceVisitationTypedLogger1.surface=j;return this;};h.prototype.setTargetProfileID=function(j){this.$FriendingSurfaceVisitationTypedLogger1.target_profile_id=j;return this;};h.prototype.setVC=function(j){this.$FriendingSurfaceVisitationTypedLogger1.vc=j;return this;};var i={app_version:true,badge_count:true,client_timestamp:true,raw_ref_tab:true,raw_tab:true,ref_page:true,surface:true,target_profile_id:true,vc:true};f.exports=h;}),null);
__d('JewelCountSideLoader',['invariant','CSS'],(function a(b,c,d,e,f,g,h){var i={},j={},k={},l={queueInstances:function m(n,o,p){i[n]={badge:o,root:p};},updateCountAndQueueArgs:function m(n,o,p){var q=j[n];if(q){q.updateCountAndArgs(p,o);return;}var r=i[n];r||h(0);k[n]={count:o,args:p};c('CSS').conditionClass(r.root,'hasNew',!!o);r.badge.setLegacyContent(o);return;},getOverwritesForJewel:function m(n){if(k[n.name])return k[n.name];j[n.name]=n;return null;}};f.exports=l;}),null);
__d('NotificationJewelFunnelLoggingConstants',[],(function a(b,c,d,e,f,g){'use strict';f.exports={FUNNEL_LOGGING_NAME:'WWW_NOTIFICATION_FUNNEL',FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:'fetch_notifications',OPEN_JEWEL:'open_jewel',CLOSE_JEWEL:'close_jewel',MOUSE_OVER_ON_JEWEL:'mouse_over_on_jewel',SCROLL_TO_FETCH:'scroll_to_fetch',FETCH_NEXT_SET:'fetch_next_set',CLEAR_BADGE_COUNT:'clear_badge_count'}};}),null);
__d('JewelBase',['csx','Promise','Arbiter','ArbiterMixin','CrossWindowEventEmitter','CSS','DOM','Event','HTML','JewelCountSideLoader','Keys','MercuryMessengerJewelPerfConfig','Run','TabIsolation','Toggler','TooltipData','FunnelLogger','NotificationJewelFunnelLoggingConstants','mixin','reportData','FriendingSurfaceVisitationTypedLogger'],(function a(b,c,d,e,f,g,h){var i,j,k=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_NAME,l=c('NotificationJewelFunnelLoggingConstants').FUNNEL_LOGGING_EVENT,m=new (c('CrossWindowEventEmitter'))('JewelBase'),n={};i=babelHelpers.inherits(o,c('mixin')(c('ArbiterMixin')));j=i&&i.prototype;function o(p,q){'use strict';j.constructor.call(this);this.name=q.name;this.label=q.label;this.root=p;this.badge=q.badge;this.countNew=0;this.initialCount=q.count||0;this.escHandler=null;this.bootload_module=q.bootload_module;this.bootload_args=q.bootload_args;this.bootload_eager_modules=q.bootload_eager_modules;this.bootloading=null;this.togglerInstance=c('Toggler').getInstance(p).setSticky(false);if(c('MercuryMessengerJewelPerfConfig').eagerLoadingOnInteraction){this.$JewelBase1();}else c('Run').onAfterLoad(function(){return this.$JewelBase2();}.bind(this));if(c('MercuryMessengerJewelPerfConfig').eagerLoadingOnInteraction)this.$JewelBase3();if(q.keepOpenForSnowlift)this.togglerInstance.setPrePageTransitionCallback(this.$JewelBase4.bind(this));n[this.name]=this;this.$JewelBase5();var r=this.getFlyout(),s=new (c('TabIsolation'))(r);c('Toggler').createInstance(r).setSticky(false);this.$JewelBase6();c('Toggler').listen('show',this.root,function(t){c('FunnelLogger').appendAction(k,l.OPEN_JEWEL);this.inform('open');this.$JewelBase7();this.hasNew()&&this.markSeen();this.reset();c('Arbiter').inform('layer_shown',{type:'Jewel'});s.enable();this.setupEvents();this.$JewelBase8();if(c('MercuryMessengerJewelPerfConfig').eagerLoadingOnInteraction){this.$JewelBase9();}else this.$JewelBase2().then(function(){return this.inform('opened');}.bind(this)).done();}.bind(this));c('Toggler').listen('hide',this.root,function(t,u){c('FunnelLogger').appendAction(k,l.CLOSE_JEWEL);c('FunnelLogger').endFunnel(k);this.hasNew()&&this.markSeen();this.reset();this.inform('closed');c('Arbiter').inform('layer_hidden',{type:'Jewel'});s.disable();this.removeEvents();this.$JewelBase6();}.bind(this));c('Arbiter').subscribe('jewel/count-updated',function(t,u){u.jewel==this.name&&this.update(u);}.bind(this));c('Arbiter').subscribe('jewel/hide',function(t,u){this.hide();}.bind(this));m.addListener('count-updated',function(t){t.jewel==this.name&&this.update(t);}.bind(this));}o.prototype.getRoot=function(){'use strict';return this.root;};o.prototype.hide=function(){'use strict';if(this.isOpen())c('Toggler').hide(this.root);};o.prototype.getFlyout=function(){'use strict';if(this.$JewelBase10===undefined)this.$JewelBase10=c('DOM').find(this.root,".__tw");return this.$JewelBase10;};o.prototype.hasNew=function(){'use strict';return c('CSS').hasClass(this.root,'hasNew');};o.prototype.isOpen=function(){'use strict';return c('CSS').hasClass(this.root,'openToggler');};o.prototype.reset=function(){'use strict';c('FunnelLogger').appendAction(k,l.CLEAR_BADGE_COUNT);c('CSS').removeClass(this.root,'hasNew');};o.prototype.setContent=function(p){'use strict';var q=c('DOM').find(this.root,'ul.jewelItemList');c('DOM').setContent(q,c('HTML')(p));};o.prototype.update=function(p){'use strict';if(p.animation&&this.badge.setAnimation)this.badge.setAnimation(p.animation);this.countNew=p.count;if(typeof this.countNew==='number'&&this.countNew<0)this.countNew=0;this.badge.setLegacyContent(this.countNew);var q=isNaN(this.countNew)||this.countNew>0;c('CSS').conditionClass(this.root,'hasNew',q);this.inform('updated',p);};o.prototype.setupEvents=function(){'use strict';this.escHandler=c('Event').listen(document.documentElement,'keydown',function(p){if(p.keyCode===c('Keys').ESC)this.hide();}.bind(this));};o.prototype.removeEvents=function(){'use strict';if(this.escHandler){this.escHandler.remove();this.escHandler=null;}};o.prototype.markSeen=function(){'use strict';c('Arbiter').inform('jewel/count-updated',{jewel:this.name,count:0},c('Arbiter').BEHAVIOR_STATE);m.emitRemote('count-updated',{jewel:this.name,count:0});this.inform('marked-seen');};o.prototype.getButton=function(){'use strict';if(typeof this.$JewelBase11==='undefined')this.$JewelBase11=c('DOM').find(this.root,"a.jewelButton");return this.$JewelBase11;};o.prototype.$JewelBase6=function(){'use strict';var p=this.getButton();c('TooltipData').set(p,this.label);p.setAttribute('data-tooltip-delay','500');};o.prototype.$JewelBase8=function(){'use strict';c('TooltipData').remove(this.getButton());};o.prototype.$JewelBase4=function(p,q){'use strict';if(!this.$JewelBase12(q.from)&&!this.$JewelBase12(q.to))this.togglerInstance&&this.togglerInstance.hide();};o.prototype.$JewelBase12=function(p){'use strict';return p&&Object.prototype.hasOwnProperty.call(p.getQueryData(),'theater');};o.prototype.$JewelBase7=function(){'use strict';c('reportData')('jewel_click',{gt:{count:this.countNew,initial:this.initialCount,jewel:this.name}});if(this.name==='requests')new (c('FriendingSurfaceVisitationTypedLogger'))().setSurface('jewel').setBadgeCount(this.countNew).log();};o.prototype.$JewelBase2=function(){'use strict';if(!this.bootload_module)return c('Promise').resolve();if(!this.bootloading)this.bootloading=new (c('Promise'))(function(p,q){this.bootload_module.load().then(function(r){new r(this,this.bootload_args);p();}.bind(this))['catch'](q);}.bind(this));return this.bootloading;};o.prototype.$JewelBase1=function(){'use strict';if(this.bootload_eager_modules){c('Run').onAfterLoad(function(){return this.bootload_eager_modules.loadModules(this);}.bind(this));}else c('Run').onAfterLoad(function(){return this.$JewelBase2();}.bind(this));};o.prototype.$JewelBase3=function(){'use strict';this.bootload_eager_modules&&this.bootload_eager_modules.mount(this);};o.prototype.$JewelBase9=function(){'use strict';if(this.bootload_eager_modules){this.bootload_eager_modules.load(this);}else this.$JewelBase2().then(function(){return this.inform('opened');}.bind(this)).done();};o.prototype.$JewelBase5=function(){'use strict';if(this.bootloading)return;var p=c('JewelCountSideLoader').getOverwritesForJewel(this);if(!p)return;this.updateCountAndArgs(p.args,p.count);};o.prototype.updateCountAndArgs=function(p,q){'use strict';for(var r in p)if(p[r])this.bootload_args[r]=p[r];if(q)c('Arbiter').inform('jewel/count-updated',{jewel:this.name,count:q},c('Arbiter').BEHAVIOR_STATE);};f.exports=o;}),null);
__d('ModalMask',['DOM'],(function a(b,c,d,e,f,g){var h=null,i=0,j={show:function k(){i++;if(!h){h=c('DOM').create('div',{id:'modalMaskOverlay'});c('DOM').appendContent(document.body,h);}},hide:function k(){if(i){i--;if(!i&&h){c('DOM').remove(h);h=null;}}},getNode:function k(){return h;}};f.exports=j;}),null);
__d('LitestandChromeHomeBadge',['cx','Arbiter','AsyncRequest','CSS','DOM','Event','LitestandMessages','UserAgent','formatNumber'],(function a(b,c,d,e,f,g,h){var i=300000,j={},k=void 0,l=void 0;function m(){l&&clearTimeout(l);if(k)return;l=setTimeout(n,i);}function n(){if(k)return;new (c('AsyncRequest'))().setURI('/ajax/litestand/newsfeed_count').setHandler(function(q){if(k)return;p.setCount(q.getPayload());m();}).setAllowCrossPageTransition(true).send();}function o(q){if(j.badgeNode){c('CSS').conditionClass(j.badgeNode,"_2527",q>0);}else{if(j.badgeNode)c('CSS').conditionClass(j.badgeNode,"_461d",q>0);if(q>0){var r=c('formatNumber').withMaxLimit(q,j.maxCount);c('DOM').setContent(j.countNode,r);}}}var p={init:function q(r){j=r;c('Event').listen(j.homeNode,'click',function(event){var s=event.getModifiers(),t=s.shift,u=s.meta,v=s.control;if(t||c('UserAgent').isPlatform('Mac OS X')&&u||c('UserAgent').isPlatform('Windows')&&v)o(0);});c('Arbiter').subscribe(c('LitestandMessages').NEWSFEED_LOAD,function(){k=true;this.setCount(0);}.bind(this));c('Arbiter').subscribe(c('LitestandMessages').LEAVE_HOME,function(){k=false;m();});m();},setCount:function q(r){o(k?0:r);}};f.exports=p;}),null);
__d('AccessibilityShortcut',['AccessibilityLogger','Event','Focus','ge','onEnclosingPageletDestroy','warning'],(function a(b,c,d,e,f,g){var h={init:function i(j,k){var l=c('Event').listen(j,'click',function(m){m.preventDefault();var n=c('ge')(k);if(n){c('Focus').set(n);c('AccessibilityLogger').logSRKey();}else c('warning')(n,'Failed to set focus on element with ID: %s',k);});c('onEnclosingPageletDestroy')(j,function(){return l.remove();});}};f.exports=h;}),null);
__d("CSSClassTransition",[],(function a(b,c,d,e,f,g){var h=[];function i(){}Object.assign(i,{go:function j(k,l,m,n){var o;for(var p=0;p<h.length;p++)if(h[p](k,l,m,n)===true)o=true;if(!o)k.className=l;},registerHandler:function j(k){h.push(k);return {remove:function l(){var m=h.indexOf(k);if(m>=0)h.splice(m,1);}};}});f.exports=i;}),null);
__d('QuicklingAugmenter',['URI'],(function a(b,c,d,e,f,g){var h=[],i={addHandler:function j(k){h.push(k);},augmentURI:function j(k){var l=[],m=new (c('URI'))(k);h.forEach(function(n){var o=n(m);if(!o)return m;l.push(n);m=m.addQueryData(o);});h=l;return m;}};f.exports=i;}),null);
__d('cancelIdleCallback',['IdleCallbackImplementation','TimerStorage'],(function a(b,c,d,e,f,g){f.exports=function(){for(var h=arguments.length,i=Array(h),j=0;j<h;j++)i[j]=arguments[j];c('TimerStorage').unset(c('TimerStorage').IDLE_CALLBACK,i[0]);return Function.prototype.apply.call(c('IdleCallbackImplementation').cancelIdleCallback,b,i);};}),null);
__d('Quickling',['AjaxPipeRequest','Arbiter','CSSClassTransition','DocumentTitle','DOM','HTML','PageHooks','PageEvents','PageNavigationStageLogger','PageTransitionsRegistrar','QuicklingAugmenter','QuicklingConfig','Run','URI','UserAgent_DEPRECATED','PHPQuerySerializer','TimerStorage','cancelAnimationFrame','cancelIdleCallback','clearImmediate','clearInterval','clearTimeout','goOrReplace','isEmpty','requireWeak','setTimeoutAcrossTransitions'],(function a(b,c,d,e,f,g){var h,i,j;c('requireWeak')('PageTransitions',function(w){j=w;});var k=c('QuicklingConfig').version,l=c('QuicklingConfig').sessionLength,m=new RegExp(c('QuicklingConfig').inactivePageRegex),n=0,o,p='',q={isActive:function w(){return true;},isPageActive:function w(x){if(x=='#')return false;x=new (c('URI'))(x);if(x.getDomain()&&x.getDomain()!=new (c('URI'))(window.location.href).getDomain())return false;if(x.getPath()=='/l.php'){var y=x.getQueryData().u;if(y){y=new (c('URI'))(unescape(y)).getDomain();if(y&&y!=new (c('URI'))(window.location.href).getDomain())return false;}}var z=x.getPath(),aa=x.getQueryData();if(!c('isEmpty')(aa))z+='?'+c('PHPQuerySerializer').serialize(aa);if(Object.keys(aa).reduce(function(ba,ca){return ba||c('QuicklingConfig').badRequestKeys.includes(ca);},false))return false;return !m.test(z);},getLoadCount:function w(){return n;}};function r(w){w=w||'Facebook';c('DocumentTitle').set(w);if(c('UserAgent_DEPRECATED').ie()){p=w;if(!o)o=window.setInterval(function(){var x=p,y=c('DocumentTitle').get();if(x!=y)c('DocumentTitle').set(x);},5000,false);}}h=babelHelpers.inherits(s,c('AjaxPipeRequest'));i=h&&h.prototype;function s(w){'use strict';var x={version:k};i.constructor.call(this,w,{quickling:x});this._isQuickling=true;}s.prototype._preBootloadFirstResponse=function(w){'use strict';return true;};s.prototype._fireDomContentCallback=function(){'use strict';this._request.cavalry&&this._request.cavalry.setTimeStamp('t_domcontent');if(j)j.transitionComplete();this._onPageDisplayed&&this._onPageDisplayed(this.pipe);i._fireDomContentCallback.call(this);};s.prototype._fireOnloadCallback=function(){'use strict';if(this._request.cavalry){this._request.cavalry.setTimeStamp('t_hooks');this._request.cavalry.setTimeStamp('t_layout');this._request.cavalry.setTimeStamp('t_onload');}i._fireOnloadCallback.call(this);};s.prototype.isPageActive=function(w){'use strict';return q.isPageActive(w);};s.prototype._versionCheck=function(w){'use strict';if(w.version==k)return true;var x=['quickling','ajaxpipe','ajaxpipe_token'];c('PageNavigationStageLogger').setCookieForNavigation(w.uri);c('PageNavigationStageLogger').setNote('quickling_version');c('PageNavigationStageLogger').updateCookie();c('goOrReplace')(window.location,new (c('URI'))(w.uri).removeQueryData(x),true);return false;};s.prototype._processFirstResponse=function(w){'use strict';var x=w.getPayload();r(x.title);window.scrollTo(0,0);c('CSSClassTransition').go(document.body,x.body_class||'',j.getMostRecentURI(),w.getRequest().getURI());c('Arbiter').inform('quickling/response');};s.prototype.getSanitizedParameters=function(){'use strict';return ['quickling'];};s.prototype.getAsyncRequestType=function(){'use strict';return 'useIframeTransport';};function t(){n++;return n>=l;}function u(w){c('AjaxPipeRequest').setCurrentRequest(null);if(t()){c('PageNavigationStageLogger').setNote('quickling_refresh');return false;}w=c('QuicklingAugmenter').augmentURI(w);if(!q.isPageActive(w)){c('PageNavigationStageLogger').setNote('quickling_inactive');return false;}c('TimerStorage').clearAll(c('TimerStorage').ANIMATION_FRAME,c('cancelAnimationFrame'));c('TimerStorage').clearAll(c('TimerStorage').IDLE_CALLBACK,c('cancelIdleCallback'));c('TimerStorage').clearAll(c('TimerStorage').IMMEDIATE,c('clearImmediate'));c('TimerStorage').clearAll(c('TimerStorage').INTERVAL,c('clearInterval'));c('TimerStorage').clearAll(c('TimerStorage').TIMEOUT,c('clearTimeout'));window.ExitTime=Date.now();c('Run').__removeHook(c('PageHooks').ONLOAD_HOOK);c('Run').__removeHook(c('PageHooks').DOMREADY_HOOK);c('Arbiter').inform(c('PageEvents').AJAXPIPE_ONUNLOAD,{transition_type:'quickling'});v();new s(w).setCanvasId('content').send();var x=window.__bodyWrapper;if(x.getCodeUsage)x.clearCodeUsage();return c('PageTransitionsRegistrar').DELAY_HISTORY;}function v(){var w=function x(){c('PageHooks').runHooks('onleavehooks');};if(c('QuicklingConfig').useAsyncLeaveHooks){c('setTimeoutAcrossTransitions')(w,0);}else w();}c('Run').onAfterLoad(function w(){c('PageTransitionsRegistrar').registerHandler(u,1);});f.exports=b.Quickling=q;}),null);
__d('XHPTemplate',['DataStore','DOM','HTML','XHPTemplateProcessor'],(function a(b,c,d,e,f,g){var h=c('XHPTemplateProcessor').processor;function i(k){'use strict';if(h instanceof Function)k=h(k);this._model=k;}i.prototype.render=function(){'use strict';if(c('HTML').isHTML(this._model))this._model=c('DOM').setContent(document.createDocumentFragment(),this._model)[0];return this._model.cloneNode(true);};i.prototype.build=function(){'use strict';return new j(this.render());};i.getNode=function(k,l){'use strict';return i.getNodes(k)[l];};i.getNodes=function(k){'use strict';var l=c('DataStore').get(k,'XHPTemplate:nodes');if(!l){l={};var m=c('DOM').scry(k,'[data-jsid]');m.push(k);var n=m.length;while(n--){var o=m[n];l[o.getAttribute('data-jsid')]=o;o.removeAttribute('data-jsid');}c('DataStore').set(k,'XHPTemplate:nodes',l);}return l;};function j(k){'use strict';this._root=k;this._populateNodes();}j.prototype._populateNodes=function(){'use strict';this._nodes={};this._leaves={};var k=this._root.getElementsByTagName('*');for(var l=0,m=k.length;l<m;l++){var n=k[l],o=n.getAttribute('data-jsid');if(o){n.removeAttribute('data-jsid');this._nodes[o]=n;this._leaves[o]=!n.childNodes.length;}}};j.prototype.getRoot=function(){'use strict';return this._root;};j.prototype.getNode=function(k){'use strict';return this._nodes[k];};j.prototype.setNodeProperty=function(k,l,m){'use strict';this.getNode(k)[l]=m;return this;};j.prototype.setNodeContent=function(k,l){'use strict';if(!this._leaves[k])throw new Error("Can't setContent on non-leaf node: "+k);c('DOM').setContent(this.getNode(k),l);return this;};f.exports=i;}),null);
__d('ViewasChromeBar',['csx','cx','Arbiter','AsyncRequest','CSS','DOM','Event','Focus','ModalMask','PageTransitionsRegistrar','Parent'],(function a(b,c,d,e,f,g,h,i){var j='ViewasChromeBar/initialized',k=null,l=false;function m(p){c('Arbiter').subscribe(j,p);}function n(p){c('CSS').addClass(p,"_7g7");var q=c('DOM').find(p,"._7g0");c('Focus').set(c('DOM').find(q,'.textInput'));}var o={initChromeBar:function p(q){if(l)return;k=q;l=true;c('Arbiter').inform(j,null,c('Arbiter').BEHAVIOR_STATE);},update:function p(q,r){m(function(){c('DOM').setContent(k,q);if(r)new (c('AsyncRequest'))('/ajax/privacy/glasgow/viewas_bar_flyout_open').send();});},registerSpecificModeOnClick:function p(q){c('Event').listen(q,'click',function(){var r=c('Parent').bySelector(q,"._7f-");if(r instanceof HTMLElement)n(r);});},registerFlyoutModalMask:function p(){c('ModalMask').show();c('PageTransitionsRegistrar').registerHandler(c('ModalMask').hide,10);}};f.exports=o;}),null);
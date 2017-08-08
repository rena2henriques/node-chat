if (self.CavalryLogger) { CavalryLogger.start_js(["Z5rGM"]); }

__d('ChatSidebarPreloadStore',['ChatSidebarData','InitialChatFriendsList'],(function a(b,c,d,e,f,g){'use strict';var h={onLoaded:function i(j){if(c('ChatSidebarData').AsyncDataPreloader){c('ChatSidebarData').AsyncDataPreloader.onLoaded(function(k){var l=k.result,m=l.list,n=l.groups,o=l.shortProfiles,p=l.nearby,q=l.adminedPages,r=l.pageListModule;return j({buddies:m,groups:n,shortProfiles:o,nearby:p,adminedPages:q,pageListModule:r,profiles:[]});});}else if(c('ChatSidebarData').WebGraphQLPreloader){c('ChatSidebarData').WebGraphQLPreloader.onLoaded(function(k){return j(c('ChatSidebarData').WebGraphQLNormalizer.normalize(k));});}else j({buddies:c('InitialChatFriendsList').list||[],groups:c('InitialChatFriendsList').groups||[],shortProfiles:c('InitialChatFriendsList').shortProfiles||{},nearby:c('InitialChatFriendsList').nearby||[],adminedPages:c('InitialChatFriendsList').adminedPages||[],pageListModule:c('InitialChatFriendsList').pageListModule,profiles:[]});}};f.exports=h;}),null);
__d('ChatProfileStore',['ChatSidebarPreloadStore'],(function a(b,c,d,e,f,g){'use strict';var h={},i={init:function j(){c('ChatSidebarPreloadStore').onLoaded(function(k){var l=k.profiles,m=k.nearby;return l.filter(function(n){return !m||m.indexOf(n.id)===-1;}).forEach(function(n){var o=new Date(),p=n.birthdate&&o.getDate()===n.birthdate.day&&o.getMonth()+1===n.birthdate.month,q=n.profile_picture&&n.profile_picture.uri?n.profile_picture.uri:null;h[n.id]={id:n.id,is_birthday:p,thumbSrc:q,name:n.name,is_messenger_only:!!n.is_messenger_only};});});},get:function j(k){return h[k];}};f.exports=i;}),null);
__d('OrderedFriendsList',['AvailableListConstants','ChatProfileStore','ChatSidebarPreloadStore','MercuryIDs','PresenceStatus','SearchableEntry','ShortProfiles','WorkModeConfig','createArrayFromMixed','isValidUniqueID'],(function a(b,c,d,e,f,g){'use strict';var h=null,i={},j=[],k={};function l(r){r=String(r);return c('MercuryIDs').isValid(r)?r:c('MercuryIDs').getParticipantIDFromUserID(r);}function m(r,s){var t=c('createArrayFromMixed')(r);s(t.filter(function(u){var v=c('ShortProfiles').getNow(u);return !v||p(v)||v.is_nonfriend_messenger_contact;}));}function n(r){h=[];var s=0;r.forEach(function(t){var u=t.slice(0,-2),v=t.slice(-1);if(c('PresenceStatus').get(u)==v){h[s]=u;i[u]=s++;}});}function o(r){var s=0;r.forEach(function(t){var u=t.slice(0,-2),v=t.slice(-1);if(v==c('AvailableListConstants').ACTIVE){j[s]=u;k[u]=s++;}});}function p(r){return r.type==='friend'||c('WorkModeConfig').is_work_user&&r.type==='fb4c';}var q={contains:function r(s){return s in i;},getList:function r(s){if(h&&h.length){m(h,s);return;}c('ChatSidebarPreloadStore').onLoaded(function(t){var u=t.buddies;n(u);m(h,s);});},getSearchableEntries:function r(s,t){q.getList(function(u){c('ChatSidebarPreloadStore').onLoaded(function(v){var w=v.groups;c('ShortProfiles').getMulti(u.slice(0,s),function(x){var y=[];for(var z in x)y.push(q.normalizeProfileEntry(x[z],z));var aa=w.map(q.normalizeThreadEntry);t(y.concat(aa).filter(function(ba){return !!ba;}).sort(function(ba,ca){return ba.getOrder()-ca.getOrder();}));});});});},normalizeProfileEntry:function r(s,t){var u=s.searchTokens||[],v=s.name,w=null;return new (c('SearchableEntry'))({uniqueID:s.id||t,keywordString:u.join(' '),order:q.getRank(s.id||t),photo:s.thumbSrc,title:v,subtitle:w,type:s.type,uri:s.uri,auxiliaryData:{isMessengerUser:s.is_messenger_user}});},normalizeThreadEntry:function r(s,t){var u=s.mercury_thread,v=s.participants_to_render.map(function(aa){return babelHelpers['extends']({},aa,{id:l(aa.id)});});u.participants=u.participants.map(l);var w=s.text,x=null;if(!w)w=u.name;var y=v.map(function(aa){return aa.name;}).join(', ');if(!w){w=y;}else x=y;var z=s.uid;if(!w||!c('isValidUniqueID')(z))return null;return new (c('SearchableEntry'))({uniqueID:z,order:t,photo:u.image_src,title:w,subtitle:x,type:'thread',auxiliaryData:{participantsToRender:v,thread:u}});},getRank:function r(s){if(s in i)return i[s];return h?h.length:0;},getActiveList:function r(s){if(j.length>0){s(j);return;}q.getList(function(t){return s(t);});},getActiveRank:function r(s){return s in k?k[s]:q.getRank(s);}};(function(){c('ChatSidebarPreloadStore').onLoaded(function(r){var s=r.buddies,t=r.shortProfiles;c('ShortProfiles').setMulti(t);o(s);n(s);});c('ChatProfileStore').init();})();f.exports=q;}),null);
__d('ChatPerfTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:ChatPerfLoggerConfig',this.$ChatPerfTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:ChatPerfLoggerConfig',this.$ChatPerfTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$ChatPerfTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$ChatPerfTypedLogger1=babelHelpers['extends']({},this.$ChatPerfTypedLogger1,j);return this;};h.prototype.setDuration=function(j){this.$ChatPerfTypedLogger1.duration=j;return this;};h.prototype.setEndpoint=function(j){this.$ChatPerfTypedLogger1.endpoint=j;return this;};h.prototype.setEvent=function(j){this.$ChatPerfTypedLogger1.event=j;return this;};h.prototype.setTabsOpen=function(j){this.$ChatPerfTypedLogger1.tabs_open=j;return this;};var i={duration:true,endpoint:true,event:true,tabs_open:true};f.exports=h;}),null);
__d('ChatPerfInstrumentation',['Promise','BaseEventEmitter','ChatPerfEvent','ChatPerfTypedLogger','FantaConst','PresenceState','WorkModeConfig','emptyFunction','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){'use strict';var h=c('WorkModeConfig').is_work_user,i=h?c('FantaConst').cookieIDs.WORK_COOKIE_ID:c('FantaConst').cookieIDs.PERSONAL_COOKIE_ID,j=c('PresenceState').getInitial(),k=j&&j[i]?j[i].length:0,l=void 0,m={_startTime:Number,_sidebarStartTime:Number,init:function n(){this._startTime=c('performanceAbsoluteNow')();return new (c('Promise'))(function(o){return o();});},initDivebar:function n(){this._sidebarStartTime=c('performanceAbsoluteNow')();},_log:function n(event,o){var p=c('performanceAbsoluteNow')()-(o||this._startTime);if(l)l.emit(event,p);var q=new (c('ChatPerfTypedLogger'))();q.setEvent(event).setDuration(p);q.setTabsOpen(k);q.log();},addPerfTimingsListener:function n(event,o){if(!l)l=new (c('BaseEventEmitter'))();return l.once(event,o);},logInitStores:function n(){this.logInitStores=c('emptyFunction');this._log(c('ChatPerfEvent').CHAT_INIT_STORES);},logInitData:function n(){this.logInitData=c('emptyFunction');this._log(c('ChatPerfEvent').CHAT_INIT_DATA);},logInitUI:function n(){this.logInitUI=c('emptyFunction');this._log(c('ChatPerfEvent').CHAT_INIT_UI);},logInitSound:function n(){this.logInitSound=c('emptyFunction');this._log(c('ChatPerfEvent').CHAT_INIT_SOUND);},logDisplayDone:function n(){this.logDisplayDone=c('emptyFunction');this._log(c('ChatPerfEvent').CHAT_DISPLAY_DONE);},logTTI:function n(){this.logTTI=c('emptyFunction');this._log(c('ChatPerfEvent').TTI);},logCHAT_CONVERSATION_TTI:function n(){this.logCHAT_CONVERSATION_TTI=c('emptyFunction');this._log(c('ChatPerfEvent').CHAT_CONVERSATION_TTI);},logSIDEBAR_FROM_CLIENT_TTI:function n(){this.logSIDEBAR_FROM_CLIENT_TTI=c('emptyFunction');this._log(c('ChatPerfEvent').SIDEBAR_FROM_CLIENT_TTI,this._sidebarStartTime);},logSIDEBAR_DISPLAY_DONE:function n(){this.logSIDEBAR_DISPLAY_DONE=c('emptyFunction');this._log(c('ChatPerfEvent').SIDEBAR_DISPLAY_DONE,this._sidebarStartTime);}};f.exports=m;}),null);
__d('ChatSidebarActionTypes',['keyMirror'],(function a(b,c,d,e,f,g){'use strict';f.exports=c('keyMirror')({INIT:null,LOADED:null,SET_ENABLED:null,SHOW:null});}),null);
__d("ChatSidebarHideReason",[],(function a(b,c,d,e,f,g){var h={VIEWPORT_INCAPABLE:0,LOW_FRIEND_COUNT:1,NOT_ENABLED:2};f.exports=h;}),null);
__d("SidebarType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({SIDEBAR:"sidebar",BUDDYLIST:"buddylist",BUDDYLIST_NUB:"buddylist_nub"});}),null);
__d('ChatSidebarStore',['ChatDispatcher','ChatOptionsInitialData','ChatSidebarActionTypes','FluxStore','SidebarType','performanceAbsoluteNow'],(function a(b,c,d,e,f,g){'use strict';var h,i;h=babelHelpers.inherits(j,c('FluxStore'));i=h&&h.prototype;function j(){i.constructor.call(this,c('ChatDispatcher'));this.$ChatSidebarStore2={initialized:false,initTime:c('performanceAbsoluteNow')(),loaded:false,enabled:!!c('ChatOptionsInitialData').sidebar_mode,visible:null};this.$ChatSidebarStore1={};}j.prototype.__onDispatch=function(k){var l=k.type;this.$ChatSidebarStore1=babelHelpers['extends']({},this.$ChatSidebarStore2);switch(l){case c('ChatSidebarActionTypes').INIT:if(!this.$ChatSidebarStore1.initialized)this.$ChatSidebarStore2.initTime=c('performanceAbsoluteNow')();this.$ChatSidebarStore2.initialized=true;break;case c('ChatSidebarActionTypes').LOADED:this.$ChatSidebarStore2.loaded=true;break;case c('ChatSidebarActionTypes').SHOW:this.$ChatSidebarStore2.visible=k.sidebarType;break;case c('ChatSidebarActionTypes').SET_ENABLED:this.$ChatSidebarStore2.enabled=k.enabled;this.$ChatSidebarStore2.visible=k.sidebarType;break;}for(var m in this.$ChatSidebarStore2)if(Object.prototype.hasOwnProperty.call(this.$ChatSidebarStore2,m))if(this.$ChatSidebarStore2[m]!==this.$ChatSidebarStore1[m]){this.__emitChange();break;}};j.prototype.getPrevState=function(){return this.$ChatSidebarStore1;};j.prototype.getState=function(){return this.$ChatSidebarStore2;};j.prototype.isInitialized=function(){return this.$ChatSidebarStore2.initialized;};j.prototype.isLoaded=function(){return this.$ChatSidebarStore2.loaded;};j.prototype.isEnabled=function(){return this.$ChatSidebarStore2.enabled;};j.prototype.getInitTime=function(){return this.$ChatSidebarStore2.initTime;};j.prototype.getVisibleType=function(){return this.$ChatSidebarStore2.visible;};f.exports=new j();}),null);
__d('ChatSidebarVisibility',['ChatConfig','ChatSidebarHideReason','ChatSidebarStore','OrderedFriendsList','SidebarType','getViewportDimensions'],(function a(b,c,d,e,f,g){'use strict';var h=c('ChatConfig').get('sidebar.min_friends'),i=c('ChatConfig').get('sidebar.minimum_width'),j={getViewport:function k(){return c('getViewportDimensions').withoutScrollbars();},shouldShowSidebar:function k(l,m){j.shouldShowSidebarIgnoreEnabled(l,function(n,o){var p=c('ChatSidebarStore').isEnabled();m(n&&p,p?o:o.concat([c('ChatSidebarHideReason').NOT_ENABLED]));});},shouldShowSidebarIgnoreEnabled:function k(l,m){c('OrderedFriendsList').getActiveList(function(n){var o=l||j.getViewport(),p=o.width>i,q=n.length<h,r=true,s=[];if(!p){r=false;s.push(c('ChatSidebarHideReason').VIEWPORT_INCAPABLE);}if(q){r=false;s.push(c('ChatSidebarHideReason').LOW_FRIEND_COUNT);}m(r,s);});},isSidebarVisible:function k(){return c('ChatSidebarStore').getVisibleType()===c('SidebarType').SIDEBAR;},isBuddyListVisible:function k(){return c('ChatSidebarStore').getVisibleType()===c('SidebarType').BUDDYLIST;}};f.exports=j;}),null);
__d('ChatSidebarActions',['ChatDispatcher','ChatSidebarActionTypes','ChatSidebarVisibility','SidebarType'],(function a(b,c,d,e,f,g){'use strict';var h={init:function i(){c('ChatDispatcher').dispatch({type:c('ChatSidebarActionTypes').INIT});},loaded:function i(){c('ChatDispatcher').dispatch({type:c('ChatSidebarActionTypes').LOADED});},disable:function i(){c('ChatDispatcher').dispatch({type:c('ChatSidebarActionTypes').SET_ENABLED,enabled:false,sidebarType:c('SidebarType').BUDDYLIST});},enable:function i(j){c('ChatDispatcher').dispatch({type:c('ChatSidebarActionTypes').SET_ENABLED,enabled:true,sidebarType:j});},show:function i(j){c('ChatDispatcher').dispatch({type:c('ChatSidebarActionTypes').SHOW,sidebarType:j});}};f.exports=h;}),null);
__d('ChatSidebar',['csx','Arbiter','AsyncRequest','Bootloader','ChatDispatcher','ChatImpressionLogger','ChatPerfInstrumentation','ChatSidebarActions','ChatSidebarHideReason','ChatSidebarStore','ChatSidebarVisibility','CSS','CurrentUser','DOM','DOMDimensions','Event','LogHistory','JSLogger','KeyEventController','LitestandClassicPlaceHolders','Parent','PresencePrivacy','PresenceUtil','ScrollableArea','SidebarType','Style','TimeSlice','ViewportBounds','debounce','emptyFunction','ge'],(function a(b,c,d,e,f,g,h){var i,j,k,l,m,n,o=false,p=null,q=false,r,s=true,t=null,u=c('LogHistory').getInstance('chat_sidebar');function v(){return c('ChatSidebarStore').getVisibleType()===c('SidebarType').SIDEBAR;}function w(ha,ia){if(!v())return;if(c('CurrentUser').isWorkUser())x(!ia);if(ia){m.hide();}else{m.show();aa();}}function x(ha){if(p)if(ha&&q){c('CSS').show(p);}else{q=c('CSS').shown(p);c('CSS').hide(p);}}function y(){return !v()||!l?0:206;}function z(){c('CSS').removeClass(document.documentElement,'sidebarMode');if(c('ChatSidebarStore').isInitialized()){m.hide();c('CSS').hide(l);c('CSS').hide(k);}c('Arbiter').inform('sidebar/visibility',false,c('Arbiter').BEHAVIOR_STATE);c('Arbiter').inform('reflow');c('ViewportBounds').inform('change');}function aa(ha){if(!ha||ha.width!==t.width)c('ChatSidebarVisibility').shouldShowSidebar(t,function(ia,ja){c('ChatSidebarActions').show(ia?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});if(!ha||ha.height!==t.height)da();}function ba(ha){var ia=t||c('ChatSidebarVisibility').getViewport(),ja=ia.height;ha.forEach(function(ka){if(ka&&ka!==i&&!c('CSS').hasClass(ka,'hidden_elem'))ja-=c('DOMDimensions').getElementDimensions(ka).height;});if(r)ja-=r.getOffset();if(n)ja-=c('DOMDimensions').getElementDimensions(n).height;return Math.max(0,ja);}function ca(){c('CSS').show(k);c('CSS').show(l);c('CSS').addClass(document.documentElement,'sidebarMode');m.show();u.log('sidebar_show','{}');c('Arbiter').inform('sidebar/visibility',true,c('Arbiter').BEHAVIOR_STATE);c('LitestandClassicPlaceHolders').destroy('sidebar');c('ViewportBounds').inform('change');if(!o){da();o=true;}}function da(){if(!v())return;var ha=ga.getBodyHeight(),ia=m.getItemHeight(),ja=8;c('Style').set(i,'height',ha+'px');var ka=Math.floor((ha-ja)/ia);m.setNumTopFriends(ka,s);s=false;var la=Math.floor(ha-ja);c('Arbiter').inform('sidebar/resized',la,c('Arbiter').BEHAVIOR_STATE);c('Arbiter').inform('reflow');}function ea(){new (c('AsyncRequest'))('/ajax/chat/settings.php').setHandler(c('emptyFunction')).setErrorHandler(c('emptyFunction')).setData({sidebar_mode:c('ChatSidebarStore').isEnabled(),window_id:c('PresenceUtil').getSessionID()}).setAllowCrossPageTransition(true).send();}function fa(){c('ChatSidebarVisibility').shouldShowSidebar(null,function(ha,ia){var ja=true;ia.forEach(function(la){if(la===null)return;switch(la){case c('ChatSidebarHideReason').NOT_ENABLED:u.log('state_not_enabled','{}');ja=false;break;case c('ChatSidebarHideReason').LOW_FRIEND_COUNT:u.log('state_not_shown_num_friends','{}');ja=false;break;case c('ChatSidebarHideReason').VIEWPORT_INCAPABLE:ja=false;}});var ka=ja?'state_shown':'state_not_shown';u.log(ka,'{}');c('ChatPerfInstrumentation').logSIDEBAR_FROM_CLIENT_TTI();});}var ga={init:function ha(ia,ja,ka){ga.init=c('emptyFunction');c('ChatPerfInstrumentation').initDivebar();c('ChatDispatcher').explicitlyRegisterStore(c('ChatSidebarStore'));c('ChatSidebarActions').loaded();l=ia;m=ja;p=ka;i=c('DOM').find(ia,'div.fbChatSidebarBody');k=c('DOM').find(ia,"._51x_");n=c('DOM').find(ia,"._5qqe");c('Event').listen(window,'resize',function(){var la=babelHelpers['extends']({},t)||{};ga._cacheViewport();aa(la);});c('KeyEventController').registerKey('q',function(event){if(c('ChatSidebarStore').getVisibleType()!==c('SidebarType').SIDEBAR)return;if(!j){var la=c('DOM').scry(ia,"._3rhb input");if(la.length>0)j=la[0];}if(j){j.focus();event.prevent();}});m.setScrollContainer(c('Parent').byClass(m.getRoot(),'uiScrollableAreaWrap'));m.subscribe(['render','show','hide'],c('debounce')(function(la){var ma=c('ScrollableArea').getInstance(m.getRoot());ma&&ma.adjustGripper();}));c('Arbiter').subscribe('chat/option-changed',function(la,ma){if(ma.name==='hide_groups'||ma.name==='hide_admined_pages')da();});c('Arbiter').subscribe(['AppsDivebar/show-apps','AppsDivebar/hide-apps','Ticker/resized','PagesDivebar/show-pages','PagesDivebar/hide-pages'],da);c('Arbiter').subscribe('sidebar/typeahead/active',w);c('PresencePrivacy').subscribe('privacy-user-presence-changed',aa);c('ChatSidebarStore').addListener(function(){var la=c('ChatSidebarStore').getState(),ma=c('ChatSidebarStore').getPrevState();if(la.visible!==ma.visible)switch(la.visible){case c('SidebarType').SIDEBAR:ca();break;case c('SidebarType').BUDDYLIST:z();break;}if(la.enabled!==ma.enabled)ea();});ga._cacheViewport();aa();c('ChatImpressionLogger').init(m);c('ViewportBounds').addPersistentRight(y);c('Arbiter').inform('sidebar/initialized',ga,c('Arbiter').BEHAVIOR_STATE);c('ChatSidebarActions').init();fa();c('ChatPerfInstrumentation').logSIDEBAR_DISPLAY_DONE();},ensureLoaded:function ha(){if(!c('ChatSidebarStore').isEnabled())return;if(c('ChatSidebarStore').isLoaded())return;if(c('ge')('pagelet_sidebar'))return;c('Bootloader').loadModules(["UIPagelet"],function(ia){var ja=c('DOM').create('div',{id:'pagelet_sidebar'});c('DOM').appendContent(document.body,ja);ia.loadFromEndpoint('SidebarPagelet','pagelet_sidebar');},'ChatSidebar');c('ChatSidebarActions').loaded();},hide:function ha(){if(!c('ChatSidebarStore').isEnabled())return;c('ChatSidebarActions').disable();},unhide:function ha(){if(c('ChatSidebarStore').isEnabled())return;c('ChatSidebarVisibility').shouldShowSidebarIgnoreEnabled(null,function(ia,ja){c('ChatSidebarActions').enable(ia?c('SidebarType').SIDEBAR:c('SidebarType').BUDDYLIST);});},_cacheViewport:function ha(){t=c('ChatSidebarVisibility').getViewport();},getBodyHeight:function ha(){return ba(Array.from(k.childNodes));}};c('Arbiter').subscribe(c('JSLogger').DUMP_EVENT,function(ha,ia){ia.sidebar_visible=v();});ga.init=c('TimeSlice').guard(ga.init,'ChatSidebar init');f.exports=ga;}),null);
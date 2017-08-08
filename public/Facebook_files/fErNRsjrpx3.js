if (self.CavalryLogger) { CavalryLogger.start_js(["Em8f3"]); }

__d('MarketplaceFIGSpectrumColors',[],(function a(b,c,d,e,f,g){'use strict';var h={aluminum:'#B9CAD2',cherry:'#F35369',grape:'#8C72CB',lemon:'#FCD872',lime:'#A3CE71',orange:'#F7923B',pink:'#EC7EBD',seafoam:'#54C7EC',skinTone1:'#F1D2B6',skinTone2:'#D7B195',skinTone3:'#D8A873',skinTone4:'#A67B4F',skinTone5:'#6A4F3B',slate:'#A3CEDF',teal:'#6BCEBB',tomato:'#FB724B'};f.exports=h;}),null);
__d('OGHovercardLayerHideOnBlur',['ContextualThing','DOM','Event'],(function a(b,c,d,e,f,g){function h(i){this._layer=i;}Object.assign(h.prototype,{_subscriptions:null,_clickListener:null,enable:function i(){this._subscriptions=[this._layer.subscribe('show',this._attach.bind(this)),this._layer.subscribe('hide',this._detach.bind(this))];if(this._layer.isShown())this._attach();},disable:function i(){this._detach();while(this._subscriptions.length)this._subscriptions.pop().unsubscribe();this._subscriptions=null;},_detach:function i(){this._clickListener&&this._clickListener.remove();this._clickListener=null;},_attach:function i(){setTimeout(function(){this._clickListener=c('Event').listen(document.documentElement,'click',this._maybeHide.bind(this));}.bind(this),0);},_maybeHide:function i(event){var j=event.getTarget();if(c('DOM').contains(this._layer.getContent(),j)||c('ContextualThing').containsIncludingLayers(this._layer.getContentRoot(),j))return;if(this._shouldHide(event))this._layer.hide();},_shouldHide:function i(event){return true;}});f.exports=h;}),null);
__d('OGAggregationHovercardTarget',['cx','fbt','Event','ArbiterMixin','AsyncRequest','ContextualDialog','ContextualDialogArrow','CSS','DOM','LayerHideOnBlur','LayerHideOnEscape','OGHovercardLayerHideOnBlur'],(function a(b,c,d,e,f,g,h,i){var j=350,k={};function l(n){return new (c('ContextualDialog'))({addedBehaviors:[c('LayerHideOnBlur'),c('LayerHideOnEscape')],arrowBehavior:c('ContextualDialogArrow'),classNames:[n]},c('DOM').create('div',{className:"_4q1"},i._("A carregar..."))).setWidth(j);}Object.assign(m,{setHovercard:function n(o,p){var q=k[o];q&&q.setHovercard(p);}});function m(n,o,p,q,r,s,t,u,v){k[o]=this;this._targetID=o;this._endpoint=p;this._preventClose=r||[];this._position=t||'below';this._dialogClass=u||'';this._fetchOnHover=v;this.init(n);for(var w=0,x=q.length;w<x;w++){var y=q[w];this.addTrigger(y.element,y.trigger_class,y.context);}if(s)this.showHovercard(null,null);}Object.assign(m.prototype,c('ArbiterMixin'),{init:function n(o){this._hovercardShown=false;this._hovercardScheduled=false;this._target=o;this._triggers=[];this._hovercard=null;this._fetching=false;this._placeholder=null;this._placeholderListener=null;this._shownClass='hover_shown';this._triggerClass=null;this._currentTrigger=null;this._context=null;return this;},addTrigger:function n(o,p,q){this._triggers.push(o);c('Event').listen(o,'click',this._onTriggerClick.bind(this,o,p,q));if(this._fetchOnHover)c('Event').listen(o,'mouseover',this._onTriggerMouseOver.bind(this));},_onTriggerMouseOver:function n(){this._fetch();},_onTriggerClick:function n(o,p,q){q=q||this._target;if(this._hovercardShown&&this._hovercard.getContext()===q||this._hovercardScheduled&&this._placeholder.getContext()===q||(this._hovercardShown||this._hovercardScheduled)&&this._currentTrigger===o){this._currentTrigger=null;this.hideHovercard();return;}this.hideHovercard();this._currentTrigger=o;this.showHovercard(p,q);},_fetch:function n(){if(this._hovercard!=null||this._fetching)return;this._fetching=true;var o=function q(){this._fetching=false;},p=function q(){this.hideHovercard();};new (c('AsyncRequest'))(this._endpoint).setData({hover_target:this._targetID}).setMethod('GET').setReadOnly(true).setErrorHandler(p.bind(this)).setTransportErrorHandler(p.bind(this)).setFinallyHandler(o.bind(this)).send();},setHovercard:function n(o){var p,q,r=this;this._hovercard=o;p=babelHelpers.inherits(s,c('OGHovercardLayerHideOnBlur'));q=p&&p.prototype;function s(t){'use strict';q.constructor.call(this,t);}s.prototype.$conditionalHideOnBlur1=function(event){'use strict';var t=event.getTarget();for(var u=0,v=r.$conditionalHideOnBlur2.length;u<v;u++)if(c('DOM').contains(r.$conditionalHideOnBlur2[u],t))return false;return true;};this._hovercard.setPosition(this._position).setAlignment('center').enableBehaviors([s,c('LayerHideOnEscape')]);this._hovercard.subscribe('aftershow',this._onHovercardShow.bind(this));this._hovercard.subscribe('hide',this._onHovercardHide.bind(this));this._hovercard.subscribe('destroy',this._onHovercardDestroy.bind(this));if(this._hovercardScheduled)this.showHovercard(this._triggerClass,this._context);},showHovercard:function n(o,p){c('CSS').addClass(this._target,this._shownClass);if(this._triggerClass&&this._triggerClass!==o)c('CSS').removeClass(this._target,this._triggerClass);this._triggerClass=o;this._triggerClass&&c('CSS').addClass(this._target,this._triggerClass);this._context=p;if(this._hovercard){this._hovercard.setContext(p||this._target).show();this._hovercardShown=true;this._hovercardScheduled=false;this._hidePlaceholder();}else{this._hovercardScheduled=true;this._fetch();this._showPlaceholder();}this.inform('showhovercard');},hideHovercard:function n(){this._hovercardScheduled=false;this._hidePlaceholder();if(this._hovercard){this._hovercard.hide();}else this._onHovercardHide();},_showPlaceholder:function n(){if(!this._placeholder){this._placeholder=l(this._dialogClass);this._placeholder.setContext(this._context||this._target).setPosition(this._position).setAlignment('center').show();this._placeholderListener=this._placeholder.subscribe('hide',this._onPlaceholderHide.bind(this));}},_hidePlaceholder:function n(){this._placeholder&&this._placeholder.hide();},_onPlaceholderHide:function n(){if(this._placeholder){this._hovercardScheduled=false;this._placeholderListener&&this._placeholder.unsubscribe(this._placeholderListener);this._placeholder=null;!this._hovercardShown&&this._removeTriggerClasses();}},_onHovercardShow:function n(){var o=this._hovercard.getContent(),p=c('DOM').scry(o,'textarea.mentionsTextarea')[0];p&&p.focus();},_onHovercardHide:function n(){this._hovercardShown=false;this._removeTriggerClasses();this.inform('hidehovercard');},_onHovercardDestroy:function n(){this._hovercard=null;},_removeTriggerClasses:function n(){c('CSS').removeClass(this._target,this._shownClass);this._triggerClass&&c('CSS').removeClass(this._target,this._triggerClass);}});f.exports=m;}),null);
__d('PhotoMultiPhotosThumb',['Event','Style'],(function a(b,c,d,e,f,g){var h=1200,i={init:function j(k,l){var m=null,n=0;function o(q){n=q;l.forEach(function(r,s){c('Style').set(r,'opacity',s===q?1:0);});}function p(){o((n+1)%l.length);m=setTimeout(p,h);}c('Event').listen(k,'mouseenter',function(){if(m)return;n=0;p();});c('Event').listen(k,'mouseleave',function(){o(0);window.clearTimeout(m);m=null;});}};f.exports=i;}),null);
__d('FlexGrid',['csx','DOM','URI','PageTransitions'],(function a(b,c,d,e,f,g,h){'use strict';var i={removePhoto:function j(k){var l=c('DOM').scry(document.body,"._vor"+'[data-fbid="'+k+'"]')[0];if(l){c('DOM').remove(l);var m=c('URI').getMostRecentURI(),n=m.getQueryData();n.needsRefresh='true';m.setQueryData(n);c('PageTransitions').go(m);}}};f.exports=i;}),null);
__d('PhotoCurationControl',['csx','Event','Parent','Toggler'],(function a(b,c,d,e,f,g,h){var i={init:function j(k){var l=c('Parent').bySelector(k,"._vor, .fbPhotoStarGridElement");c('Event').listen(l,'mouseleave',function(){c('Toggler').hide();});}};f.exports=i;}),null);
__d('PhotoInlineActions',['csx','cx','Arbiter','AsyncRequest','CSS','Event','Nectar','Parent'],(function a(b,c,d,e,f,g,h,i){var j={init:function k(l,m,n,o,p,q,r,s,t,u){var v=false;c('Arbiter').subscribe(['UFI/CommentAddedActive','UFI/CommentDeletedActive','UFI/LikeActive'],function(w,x){if(parseInt(l.getAttribute('data-fbid'),10)!==x)return;if(w==='UFI/LikeActive')c('CSS').toggleClass(l,"_53a");new (c('AsyncRequest'))().setURI('/ajax/photos/photo/refresh.php').setData({fbid:l.getAttribute('data-fbid')}).setRelativeTo(l).send();});c('Event').listen(l,'click',function(event){var w=event.getTarget();if(v||!c('Parent').bySelector(w,"._53b"))return;event.prevent();c('CSS').toggleClass(l,"_53a");var x={};c('Nectar').addModuleData(x,l);v=new (c('AsyncRequest'))().setURI('/ajax/photos/photo/like.php').setData(babelHelpers['extends']({fbid:l.getAttribute('data-fbid'),relatedid:m,hovercardendpoint:n,includecommentlink:o,hovercardposition:p,includeleadingseparator:q,dialogClass:r,fetchOnHover:s,includeSocialContext:t,tagURI:u},x)).setRelativeTo(l).setErrorHandler(function(){c('CSS').toggleClass(l,"_53a");}).setFinallyHandler(function(){v=false;}).send();});}};f.exports=j;}),null);
__d("XMarketplaceHomePageController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/marketplace\/{?*rest}",{rest:{type:"String"},ref:{type:"String"}});}),null);
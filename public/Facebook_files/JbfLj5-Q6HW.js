if (self.CavalryLogger) { CavalryLogger.start_js(["Vk\/4Z"]); }

__d('UFICommentFilterFallbackWarning.react',['cx','fbt','React','UFIPagerGenerator','UFIPaging','WebCommentViewOption','distinctArrayBy'],(function a(b,c,d,e,f,g,h,i){'use strict';var j,k;function l(n,o,p){var q=o.availableComments,r=o.repliesMap,s=void 0;if(p){s=r[n]||[];}else s=q||[];s=c('distinctArrayBy')(s,function(t){return t.id;});return s.length;}j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.shouldRender=function(n,o,p,q){if(!n)return false;var r=n.availableComments,s=n.commentCounts,t=n.deletedCounts,u=n.hasPagedToplevel,v=n.orderingMode,w=n.ranges,x=n.repliesExpandedMap,y=n.repliesMap;if(!r||!s||!t||!v||!w||!x||!y)return false;var z=Math.max((s[o]||0)-(t[o]||0),0),aa=w[o];if(!aa||!z||v!==c('WebCommentViewOption').FILTERED||q&&!x[o]||!q&&!u)return false;var ba=l(o,n,q),ca=aa.isLoadingPrev(),da=aa.isLoadingNext(),ea=aa.getOffset(),fa=aa.getLength(),ga=c('UFIPagerGenerator').isBottomPager(q,v),ha=Math.min(fa,z);if(p===c('UFIPaging').ALL){return !ca&&!da&&ea===0&&fa>=z&&ba<ha;}else if(!ga&&p===c('UFIPaging').TOP||ga&&p===c('UFIPaging').BOTTOM){return !ca&&ea===0&&ba<ha;}else if(!ga&&p===c('UFIPaging').BOTTOM||ga&&p===c('UFIPaging').TOP)return !da&&ea+fa>=z&&ba<ha;return false;};m.prototype.$UFICommentFilterFallbackWarning1=function(){var n=this.props,o=n.asReplyWarning,p=n.ufiProps,q=p||{},r=q.feedback,s=q.orderingMode,t=r&&r.orderingmodes||[],u=t.find(function(w){return w&&w.value===s;}),v=u&&u.name;if(o){if(v){return i._("{ordering mode name} est\u00e1 selecionado e, por isso, algumas respostas podem ter sido filtradas.",[i.param('ordering mode name',v)]);}else return i._("Algumas respostas podem ter sido filtradas pelo modo de encomenda selecionado.");}else if(v){return i._("{ordering mode name} est\u00e1 selecionado e, por isso, alguns coment\u00e1rios podem ter sido filtrados.",[i.param('ordering mode name',v)]);}else return i._("Alguns coment\u00e1rios podem ter sido filtrados pelo modo de encomenda selecionado.");};m.prototype.render=function(){var n=this.props,o=n.ufiProps,p=n.targetID,q=n.pagingDirection,r=n.asReplyWarning;if(!this.constructor.shouldRender(o,p,q,r))return null;return c('React').createElement('div',{className:"_2ah8 _4oep UFIRow"},c('React').createElement('div',{className:"_2ah9"},this.$UFICommentFilterFallbackWarning1()));};function m(){j.apply(this,arguments);}f.exports=m;}),null);
__d('BlueBarFixedBehaviorController',['Arbiter','Bootloader'],(function a(b,c,d,e,f,g){f.exports={init:function h(i){if(!('getBoundingClientRect' in i))return;var j=void 0,k=document.documentElement;function l(){var m=i.getBoundingClientRect(),n=m.top,o=Math.round(n)-k.clientTop<=0;if(j!==o){j=o;c('Arbiter').inform('bluebarFixedBehaviorController/isfixed',j,c('Arbiter').BEHAVIOR_STATE);}}l();c('Bootloader').loadModules(["Event"],function(m){m.listen(window,'scroll',l);},'BlueBarFixedBehaviorController');c('Arbiter').subscribe('quickling/response',l);}};}),null);
__d('replaceNativeTimer',['cancelAnimationFrame','clearInterval','clearTimeout','requestAnimationFrame','setInterval','setTimeout'],(function a(b,c,d,e,f,g){c('setTimeout').nativeBackup=b.setTimeout;c('clearTimeout').nativeBackup=b.clearTimeout;c('setInterval').nativeBackup=b.setInterval;c('clearInterval').nativeBackup=b.clearInterval;c('requestAnimationFrame').nativeBackup=b.requestAnimationFrame;c('cancelAnimationFrame').nativeBackup=b.cancelAnimationFrame;b.setTimeout=c('setTimeout');b.clearTimeout=c('clearTimeout');b.setInterval=c('setInterval');b.clearInterval=c('clearInterval');b.requestAnimationFrame=c('requestAnimationFrame');b.cancelAnimationFrame=c('cancelAnimationFrame');}),18);
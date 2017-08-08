if (self.CavalryLogger) { CavalryLogger.start_js(["TNafO"]); }

__d('legacy:async-signal',['AsyncSignal'],(function a(b,c,d,e,f,g){b.AsyncSignal=c('AsyncSignal');}),3);
__d('EgoUnitSlideInsert',['csx','cx','Animation','CSS','DataStore','DOM','Ease','Event','Parent','TidyArbiterMixin','tidyEvent'],(function a(b,c,d,e,f,g,h,i){var j='sliding',k="EgoSlider/End",l=babelHelpers['extends']({isSliding:function m(n){return c('DataStore').get(n,j);},runAfterSlide:function m(n,o){var p=c('tidyEvent')(l.subscribe(k,function(q,r){if(r===n){p&&p.unsubscribe();o();}}));},registerSlide:function m(n,o){c('Event').listen(n,'click',function(p){var q=c('Parent').bySelector(p.getTarget(),"._5cl_");if(!q)return;var r=c('Parent').byClass(n,'ego_unit'),s=0,t=c('Parent').byClass(r,'ego_unit_container'),u=c('DOM').scry(t,'.ego_unit')[0];if(u===r)if(r.nextSibling){r.nextSibling.style.paddingTop='0px';r.nextSibling.style.borderTop='0px';}c('CSS').addClass(r,"_5cl-");c('DataStore').set(r,j,true);new (c('Animation'))(r).to('height',0).to('padding-top',s).to('padding-bottom',0).to('margin',0).from('opacity',1).to('opacity',0).ease(c('Ease').circOut).duration(300).checkpoint(1,function(){c('DOM').appendContent(t,r);c('DOM').prependContent(r,o);c('DataStore').remove(r,j);}).to('height',12).to('opacity',1).to('margin-bottom',10).duration(0).checkpoint(2,function(){l.inform(k,r);}).go();});}},c('TidyArbiterMixin'));f.exports=l;}),null);
__d('NetEgo',['csx','Animation','Arbiter','CSS','DOM','EgoUnitSlideInsert','PageLikeConstants','Parent','URI','ge'],(function a(b,c,d,e,f,g,h){var i={setup:function j(k){c('Arbiter').subscribe([c('PageLikeConstants').LIKED,'FriendRequest/sending'],function(l,m){if(k==m.profile_id&&m.origin=='hovercard'||k==m.uid){var n=c('ge')(document.body,'.ego_unit_container');if(n){var o=c('DOM').scry(n,'.ego_unit'),p=o.length;for(var q=0;q<p;q++){var r=o[q].getAttribute('data-ego-fbid');if(r==k){var s=c('DOM').scry(o[q],'.ego_action a')[0];if(s)s.click();break;}}}}});},updateXids:function j(k,l){if(k.length==0&&l.length==0)return;var m=function v(w){return function(x){var y=x.getAttribute(w);if(!y)return false;var z=new (c('URI'))(y).getQueryData();return !!z.xids;};},n=c('DOM').scry(document.body,'.ego_section a');n=n.filter(m('ajaxify'));if(n.length==0)return;var o=new (c('URI'))(n[0].getAttribute('ajaxify')),p=o.getQueryData();if(!p.xids)return;var q=null;try{q=JSON.parse(p.xids);}catch(v){return;}for(var r=0;r<l.length;++r)q[l[r]]=1;var s=JSON.stringify(q),t=function v(w,x){o=new (c('URI'))(w.getAttribute(x));p=o.getQueryData();p.xids=s;o.setQueryData(p);w.setAttribute(x,o.toString());};for(r=0;r<n.length;++r)t(n[r],'ajaxify');var u=c('DOM').scry(document.body,'.ego_unit form');u=u.filter(m('action'));for(r=0;r<u.length;++r)t(u[r],'action');},replaceUnit:function j(k,l,m,n){i.replaceUnitCheckParent(k,l,m,n,'');},replaceUnitCheckParent:function j(k,l,m,n,o){var p=c('Parent').byClass(k,'ego_unit_container');if(p&&c('EgoUnitSlideInsert').isSliding(k)){var q=c('DOM').appendContent(p,l);q.forEach(c('CSS').hide);c('EgoUnitSlideInsert').runAfterSlide(k,i._replaceUnitElement.bind(null,k,q,o));}else i._replaceUnit(k,l,m,n,o);},_replaceUnit:function j(k,l,m,n,o){var p=c('DOM').insertAfter(k,l);p.forEach(c('CSS').hide);if(n!==undefined&&n!==null){setTimeout(function(){i._replaceUnitFadeout(k,p,m,o);},n);}else i._replaceUnitFadeout(k,p,m,o);},_replaceUnitFadeout:function j(k,l,m,n){if(m){new (c('Animation'))(k).from('opacity',1).to('opacity',0).duration(m).checkpoint(1,function(){i._replaceUnitElement(k,l,n);}).go();}else i._replaceUnitElement(k,l,n);},_replaceUnitElement:function j(k,l,m){var n=c('CSS').hasClass(k,'ego_unit')?k.parentNode:null;if(n&&n.tagName==='LI')n=c('DOM').scry(k.parentNode,'^ul')[0];c('DOM').remove(k);if(l.length)l.forEach(c('CSS').show);c('Arbiter').inform('netego_replacedUnit',{serializedData:m,numUnitsRemained:n.childNodes.length});i.clearHeader();},clearHeader:function j(){var k=c('DOM').scry(document.body,'.ego_column'),l=[];for(var m=0;m<k.length;++m)l=l.concat(c('DOM').scry(k[m],'.uiHeader'));for(m=0;m<l.length;++m){var n=l[m].nextSibling,o=c('DOM').find(n,"._2xq");if(!o)o=n;if(!o||o.childNodes.length===0){c('DOM').remove(l[m]);}else if(o.childNodes.length===1){var p=o.childNodes[0];if(c('CSS').hasClass(p,'ego_appended_units')&&p.childNodes.length===0)c('DOM').remove(l[m]);}}}};f.exports=i;}),null);
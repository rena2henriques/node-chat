if (self.CavalryLogger) { CavalryLogger.start_js(["+G0c5"]); }

__d("XPubcontentChainingHideController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/chaining\/hide\/",{});}),null);
__d('ArticleChainingHide',['csx','AsyncRequest','AttachmentRelatedShareConstants','ContextualThing','CSS','DataAttributeUtils','DOM','DOMQuery','Event','XPubcontentChainingHideController','tidyEvent'],(function a(b,c,d,e,f,g,h){var i={listenForQuickHide:function j(k,l,m,n,o,p){c('tidyEvent')(c('Event').listen(k,'click',function(){var q=c('DOMQuery').find(l,"^._1ui8"),r=c('DOMQuery').find(q,"._3f-c"),s=c('DOMQuery').find(q,"._3f-d");c('CSS').hide(r);setTimeout(function(){var t=c('ContextualThing').getContext(l),u=c('XPubcontentChainingHideController').getURIBuilder(),v=t&&JSON.parse(c('DataAttributeUtils').getDataFt(t))||{};v.object_id=n;v.reason=p;v.chaining_type=o;if(m)v.qid=m;new (c('AsyncRequest'))().setMethod('POST').setURI(u.getURI()).setData(v).setRelativeTo(l).send();},c('AttachmentRelatedShareConstants').HIDE_DELAY);c('CSS').show(s);}));},listenForUndoLink:function j(k,l,m,n){c('tidyEvent')(c('Event').listen(k,'click',function(){var o=c('DOMQuery').find(l,"^._1ui8"),p=c('DOMQuery').find(o,"._3f-c");c('CSS').hide(l);setTimeout(function(){var q=c('ContextualThing').getContext(l),r='/pubcontent/chaining/unhide',s=q&&JSON.parse(c('DataAttributeUtils').getDataFt(q))||{};s.object_id=m;s.chaining_type=n;new (c('AsyncRequest'))().setMethod('POST').setURI(r).setData(s).setRelativeTo(l).send();},c('AttachmentRelatedShareConstants').HIDE_DELAY);c('CSS').show(p);}));},listenForCloseButton:function j(k,l){c('tidyEvent')(c('Event').listen(k,'click',function(){c('CSS').hide(l);}));},listenForButtons:function j(k,l){c('tidyEvent')(c('Event').listen(k,'click',function(){var n=c('DOMQuery').find(k,"^._1ui8"),o=c('DOMQuery').find(n,"._3f-c"),p=c('DOMQuery').find(n,"._3f-d");c('CSS').hide(o);c('CSS').show(p);}));var m=c('DOMQuery').find(l,"._3f-e");c('tidyEvent')(c('Event').listen(m,'click',function(){var n=c('DOMQuery').find(l,"^._1ui8"),o=c('DOMQuery').find(n,"._3f-c");c('CSS').hide(l);c('CSS').show(o);}));},listenForHideConfirm:function j(k,l,m){c('tidyEvent')(c('Event').listen(k,'click',function(n){setTimeout(function(){var o=c('ContextualThing').getContext(k),p=c('XPubcontentChainingHideController').getURIBuilder(),q=o&&JSON.parse(c('DataAttributeUtils').getDataFt(o))||{};q.object_id=l;q.reason=m;new (c('AsyncRequest'))().setMethod('POST').setURI(p.getURI()).setData(q).setRelativeTo(k).send();var r=c('DOMQuery').find(k,"^._1ui8"),s=c('DOMQuery').find(k,"^._4-u2");c('DOM').remove(r);var t=c('DOMQuery').scry(s,"._1ui8");if(t.length===0)c('DOM').remove(s);},c('AttachmentRelatedShareConstants').HIDE_DELAY);}));},listenForUnitHideButton:function j(k,l,m){c('tidyEvent')(c('Event').listen(k,'click',function(n){setTimeout(function(){var o=c('XPubcontentChainingHideController').getURIBuilder(),p={object_id:m,unit:true,reason:0};new (c('AsyncRequest'))().setMethod('POST').setURI(o.getURI()).setData(p).send();c('DOM').remove(l);},c('AttachmentRelatedShareConstants').HIDE_DELAY);}));}};f.exports=i;}),null);
__d('VideoInlinePivotViewportTracking',['csx','StreamViewportTracking','ViewportTracking'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k='video_inline_pivot',l=97;i=babelHelpers.inherits(m,c('StreamViewportTracking'));j=i&&i.prototype;m.prototype.getTimetrackingDataToLog=function(n){var o=j.getTimetrackingDataToLog.call(this,n);o.ft.src=k;return o;};function m(){i.apply(this,arguments);}f.exports={setup:function n(o,p){var q=new m(c('StreamViewportTracking').getBehavior(o,p,"._1ui8",l));q.init(o);return q;}};}),null);
__d('VideoHomeVideoPlayCount.react',['cx','fbt','React','XUIText.react','intlSummarizeNumber'],(function a(b,c,d,e,f,g,h,i){var j,k;j=babelHelpers.inherits(l,c('React').PureComponent);k=j&&j.prototype;l.prototype.render=function(){'use strict';var m=this.props.count;if(m<=0)return null;return c('React').createElement(c('XUIText.react'),{className:"_di_",size:'small'},i._({"*":"{number} Views","268435456":"1 visualiza\u00e7\u00e3o"},[i.plural(m,'number',c('intlSummarizeNumber')(m))]));};function l(){'use strict';j.apply(this,arguments);}f.exports=l;}),null);
__d("XPubcontentRelatedVideoChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/related_video\/",{attachment_div_id:{type:"String",required:true},fbvideo_id:{type:"Int",required:true},qid:{type:"String"},mf_story_key:{type:"String"},cursor:{type:"String"}});}),null);
__d('RelatedVideoSeeMoreController',['csx','AsyncRequest','AsyncResponse','CSS','DOM','Event','XPubcontentRelatedVideoChainingController','getOrCreateDOMID','tidyEvent'],(function a(b,c,d,e,f,g,h){function i(j,k,l){'use strict';this.$RelatedVideoSeeMoreController1=j;this.$RelatedVideoSeeMoreController2=k;this.$RelatedVideoSeeMoreController3=l.videoID;this.$RelatedVideoSeeMoreController4=l.cursor;this.$RelatedVideoSeeMoreController5();}i.prototype.$RelatedVideoSeeMoreController5=function(){'use strict';if(this.$RelatedVideoSeeMoreController2===null)return;c('tidyEvent')(c('Event').listen(this.$RelatedVideoSeeMoreController2,'click',function(){if(this.$RelatedVideoSeeMoreController2){c('CSS').hide(this.$RelatedVideoSeeMoreController2);this.$RelatedVideoSeeMoreController6();}}.bind(this)));};i.prototype.$RelatedVideoSeeMoreController6=function(){'use strict';var j=c('DOM').scry(this.$RelatedVideoSeeMoreController1,"._3blq")[0];j&&c('CSS').show(j);var k=c('XPubcontentRelatedVideoChainingController').getURIBuilder().setInt('fbvideo_id',this.$RelatedVideoSeeMoreController3).setString('attachment_div_id',c('getOrCreateDOMID')(this.$RelatedVideoSeeMoreController2)).setString('cursor',this.$RelatedVideoSeeMoreController4).getURI();new (c('AsyncRequest'))().setURI(k).setRelativeTo(this.$RelatedVideoSeeMoreController1).setHandler(function(l){j&&c('CSS').hide(j);}).send();};f.exports=i;}),null);
__d('VideoThumbnailSlideShow.react',['cx','React','ReactCSSTransitionGroup','Image.react','ScaledImage.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;function k(l){j.constructor.call(this,l);this.state={curIndex:0};this.$VideoThumbnailSlideShow2=[];this.props.imageSources.forEach(function(m){var n=new Image();n.src=m;this.$VideoThumbnailSlideShow2.push(n);}.bind(this));}k.prototype.componentWillReceiveProps=function(l){if(this.props.started&&!l.started){this.$VideoThumbnailSlideShow3();}else if(!this.props.started&&l.started)this.$VideoThumbnailSlideShow4();};k.prototype.componentWillUnmount=function(){this.$VideoThumbnailSlideShow3();};k.prototype.render=function(){var l=this.props.imageSources;if(l.length<1)return null;var m={enter:"_3txw",enterActive:"_3txx",leave:"_3txz",leaveActive:"_3tx-"},n=this.props.started?c('React').createElement(c('Image.react'),{src:'/images/video/play_48dp.png',className:"_3ty2"}):null,o=this.props.started?c('React').createElement('div',{className:"_3ty4",style:{width:this.props.width,height:this.props.height}}):null;return c('React').createElement('div',{className:"_3ty3",style:{width:this.props.width,height:this.props.height}},o,c('React').createElement(c('ReactCSSTransitionGroup'),{transitionName:m,transitionEnterTimeout:200,transitionLeaveTimeout:200},c('React').createElement(c('ScaledImage.react'),{src:this.props.imageSources[this.state.curIndex],imageSize:{height:this.props.imageSourcesDim[this.state.curIndex][0],width:this.props.imageSourcesDim[this.state.curIndex][1]},width:this.props.width,height:this.props.height,className:"_3ty5",key:this.state.curIndex})),n);};k.prototype.$VideoThumbnailSlideShow3=function(){var l=this.$VideoThumbnailSlideShow1;if(l){this.setState({curIndex:0});clearInterval(l);this.$VideoThumbnailSlideShow1=null;}};k.prototype.$VideoThumbnailSlideShow4=function(){this.$VideoThumbnailSlideShow5();if(!this.$VideoThumbnailSlideShow1)this.$VideoThumbnailSlideShow1=setInterval(function(){if(this.props.started)this.$VideoThumbnailSlideShow5();}.bind(this),this.props.slideShowInterval);};k.prototype.$VideoThumbnailSlideShow5=function(){var l=(this.state.curIndex+1)%this.props.imageSources.length;this.setState({curIndex:l});};f.exports=k;}),null);
__d('RelatedVideoVerticalListItem.react',['ix','cx','fbt','DOMContainer.react','Image.react','ImageBlock.react','InlineBlock.react','Layout.react','LineClamp.react','Link.react','ProfileLink.react','React','URI','VideoChainingCaller','VideoLink.react','VideoThumbnailSlideShow.react','VideoHomeVideoPlayCount.react','XUIButton.react','fbglyph','formatDurationSeconds'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('Layout.react').Column,n=c('Layout.react').FillColumn,o=16,p=2,q=1,r=3,s=1,t=/[`~!@#$%^&*()_|+\-=?;:\'\",.<>\{\}\[\]\\\s\/]/gi;k=babelHelpers.inherits(u,c('React').Component);l=k&&k.prototype;function u(v){l.constructor.call(this,v);this.$RelatedVideoVerticalListItem2=function(){this.setState({animationStarted:true});}.bind(this);this.$RelatedVideoVerticalListItem3=function(){this.setState({animationStarted:false});}.bind(this);this.state={animationStarted:false};}u.prototype.render=function(){var v=this.props.title?p:r,w=this.props.title||j._("V\u00eddeo de {name}",[j.param('name',this.props.ownerName)]),x=this.props.description&&!this.$RelatedVideoVerticalListItem1(this.props.title,this.props.description)?c('React').createElement(c('LineClamp.react'),{lines:q,lineHeight:o,fitHeightToShorterText:true,className:"_168s"},this.props.description):null,y=null;if(this.props.viewCount!==null&&this.props.viewCount!==0)y=c('React').createElement('span',{onClick:function fa(ga){return ga.stopPropagation();},role:'presentation'},c('React').createElement(c('VideoHomeVideoPlayCount.react'),{count:this.props.viewCount}));var z=!this.props.withButtons&&y?c('React').createElement('span',null,' ',y,' \u00B7 '):null,aa=this.props.withButtons&&y?c('React').createElement('span',{className:"_5_ob"},' - ',y):null,ba=new (c('URI'))(this.props.videoPermalink),ca=this.props.withButtons?c('React').createElement('div',{className:"_4al9"},c('React').createElement(c('VideoLink.react'),{channelID:this.props.channelID+':'+this.props.videoID,channelCaller:c('VideoChainingCaller').NEWSFEED_PIVOT_INLINE,videoID:this.props.videoID,href:ba,className:"_5_c6"},c('React').createElement(c('XUIButton.react'),{image:c('React').createElement(c('Image.react'),{src:h("113795")}),label:j._("Ver")})),c('React').createElement(c('DOMContainer.react'),{onClick:function fa(ga){return ga.stopPropagation();},className:"_3-9a"},this.props.actionLinkHTML),c('React').createElement(c('DOMContainer.react'),{onClick:function fa(ga){return ga.stopPropagation();},className:"_3-9a"},this.props.contextMenuHTML)):c('React').createElement('div',{className:"_4al9"},z,c('React').createElement(c('DOMContainer.react'),{onClick:function fa(ga){return ga.stopPropagation();}},this.props.actionLinkHTML)),da=c('React').createElement('div',{className:"_1694",onClick:function fa(ga){return ga.stopPropagation();},role:'presentation'},c('React').createElement(c('ImageBlock.react'),{spacing:'none'},c('React').createElement(c('ProfileLink.react'),{uid:this.props.ownerID,className:"_5pcq"},c('React').createElement(c('Image.react'),{src:this.props.profilePhotoURI,width:this.props.profilePicDim,className:"_1695"})),c('React').createElement(c('InlineBlock.react'),{alignv:'middle',height:this.props.profilePicDim+s*2},c('React').createElement('span',null,c('React').createElement(c('ProfileLink.react'),{uid:this.props.ownerID,className:"_5pcq"},this.props.ownerName),aa)))),ea=!this.props.withButtons?c('React').createElement(m,{className:"_168u"},c('React').createElement(c('DOMContainer.react'),{onClick:function fa(ga){return ga.stopPropagation();},role:'button',tabIndex:'0'},this.props.contextMenuHTML)):null;return c('React').createElement(c('Layout.react'),{className:"_4al8 _3f-c"},c('React').createElement(c('VideoLink.react'),{channelID:this.props.channelID+':'+this.props.videoID,channelCaller:c('VideoChainingCaller').NEWSFEED_PIVOT_INLINE,videoID:this.props.videoID,href:ba},c('React').createElement(m,{className:"_3-91 _-8f",onMouseEnter:this.$RelatedVideoVerticalListItem2,onMouseLeave:this.$RelatedVideoVerticalListItem3},c('React').createElement(c('VideoThumbnailSlideShow.react'),{imageSources:this.props.imageSources,imageSourcesDim:this.props.imageSourcesDim,width:this.props.thumbWidth,height:this.props.thumbHeight,slideShowInterval:this.props.slideShowInterval,started:this.state.animationStarted}),c('React').createElement('span',{className:"_-8g"},c('formatDurationSeconds')(this.props.videoDurationInSec)))),c('React').createElement(n,null,c('React').createElement(c('InlineBlock.react'),{alignv:'middle',height:this.props.thumbHeight},c('React').createElement('div',{className:"_31ue",onMouseEnter:this.$RelatedVideoVerticalListItem2,onMouseLeave:this.$RelatedVideoVerticalListItem3},c('React').createElement(c('VideoLink.react'),{channelID:this.props.channelID+':'+this.props.videoID,channelCaller:c('VideoChainingCaller').NEWSFEED_PIVOT_INLINE,videoID:this.props.videoID,href:ba},c('React').createElement(c('Link.react'),{href:'#',className:"_168r"},c('React').createElement(c('LineClamp.react'),{lines:v,lineHeight:o,fitHeightToShorterText:true},w)),x)),da,ca)),ea);};u.prototype.$RelatedVideoVerticalListItem1=function(v,w){if(!w||!v){return true;}else{v=v.toLowerCase().replace(t,'');w=w.toLowerCase().replace(t,'');return w.includes(v);}};f.exports=u;}),null);
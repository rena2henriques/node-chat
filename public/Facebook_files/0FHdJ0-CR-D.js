if (self.CavalryLogger) { CavalryLogger.start_js(["zaUQ2"]); }

__d('UFIAddCommentController',['Parent','React','ReactDOM','UFIAddComment.react','UFIAddCommentActionType','UFIAsyncWrapper','UFICallbackStore','UFICommentEditIDStore','UFIDispatcher','UFIDispatcherContext.react','UFIFeedbackContext.react','UFINewCommentNotifier'],(function a(b,c,d,e,f,g){'use strict';h.factory=function(j,k){k.rootid=j.id;return new h(j,Object.freeze(k));};function h(j,k){i.call(this);this.$UFIAddCommentController1=j;this.$UFIAddCommentController2=k;this.$UFIAddCommentController3=new (c('UFIDispatcher'))();this.$UFIAddCommentController4={UFICallbackStore:new (c('UFICallbackStore'))(this.$UFIAddCommentController3)};this.$UFIAddCommentController4.UFICallbackStore.on(c('UFIAddCommentActionType').SUBMIT_NEW,function(l){return c('UFINewCommentNotifier').onNewComment(c('Parent').byTag(j,'form'),this.$UFIAddCommentController2,l.comment,l.target,l.replyCommentID,l.timestamp);}.bind(this));this.$UFIAddCommentController5=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);c('UFICommentEditIDStore').addListener(function(){var l=c('UFICommentEditIDStore').getForInstance(this.$UFIAddCommentController2.instanceid);if(l!=this.$UFIAddCommentController5){this.$UFIAddCommentController5=l;this.render();}}.bind(this));this.render();}h.prototype.render=function(){var j=c('React').createElement(c('UFIDispatcherContext.react'),{dispatcher:this.$UFIAddCommentController3,stores:this.$UFIAddCommentController4},c('React').createElement(c('UFIFeedbackContext.react'),{contextArgs:this.$UFIAddCommentController2,render:this.renderAddComment}));c('ReactDOM').render(c('React').createElement(c('UFIAsyncWrapper'),null,j),this.$UFIAddCommentController1);};h.prototype.disable=function(){this.$UFIAddCommentController4.UFICallbackStore.remove();};var i=function j(){this.renderAddComment=function(k,l){if(this.$UFIAddCommentController5!==null||!l||!l.cancomment||!l.actorforpost)return null;return c('React').createElement(c('UFIAddComment.react'),{viewerActorID:l.actorforpost,targetID:l.ownerid,initialData:null,ref:null,withoutSeparator:false,editingComment:{},isEditing:false,mentionsDataSource:l.mentionsdatasource,showSendOnEnterTip:l.showsendonentertip,multiCompanyGroupsCount:l.multicompanygroupscount,allowPhotoAttachments:l.allowphotoattachments&&!k.islivestreaming,allowVideoAttachments:l.allowvideoattachments&&!k.islivestreaming,allowStickerAttachments:l.allowstickerattachments&&!k.islivestreaming,allowGifAttachments:l.allowgifattachments&&!k.islivestreaming,allowTipJar:Boolean(l.istipjarenabled&&k.islivestreaming),contextArgs:k,subtitle:l.subtitle,isQAndA:l.isqanda,keepFocus:k.islivestreaming});}.bind(this);};f.exports=h;}),null);
__d('TypeaheadHintText',['emptyFunction'],(function a(b,c,d,e,f,g){function h(i){'use strict';this._typeahead=i;}h.prototype.enable=function(){'use strict';this._typeahead.getCore().resetOnKeyup=false;};Object.assign(h.prototype,{disable:c('emptyFunction')});f.exports=h;}),null);
__d('legacy:HintTextTypeaheadBehavior',['TypeaheadHintText'],(function a(b,c,d,e,f,g){if(!b.TypeaheadBehaviors)b.TypeaheadBehaviors={};b.TypeaheadBehaviors.hintText=function(h){h.enableBehavior(c('TypeaheadHintText'));};}),3);
__d('LayerHideOnSuccess',[],(function a(b,c,d,e,f,g){function h(i){'use strict';this._layer=i;}h.prototype.enable=function(){'use strict';this._subscription=this._layer.subscribe('success',this._layer.hide.bind(this._layer));};h.prototype.disable=function(){'use strict';if(this._subscription){this._subscription.unsubscribe();this._subscription=null;}};Object.assign(h.prototype,{_subscription:null});f.exports=h;}),null);
__d('filterSet',['Set'],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k=new (c('Set'))();for(var l=i,m=Array.isArray(l),n=0,l=m?l:l[typeof Symbol==='function'?Symbol.iterator:'@@iterator']();;){var o;if(m){if(n>=l.length)break;o=l[n++];}else{n=l.next();if(n.done)break;o=n.value;}var p=o;if(j(p))k.add(p);}return k;}f.exports=h;}),null);
__d('differenceSets',['filterSet'],(function a(b,c,d,e,f,g){'use strict';function h(i){for(var j=arguments.length,k=Array(j>1?j-1:0),l=1;l<j;l++)k[l-1]=arguments[l];return c('filterSet')(i,function(m){return !k.some(function(n){return n.has(m);});});}f.exports=h;}),null);
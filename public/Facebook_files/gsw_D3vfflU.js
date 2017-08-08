if (self.CavalryLogger) { CavalryLogger.start_js(["sJPce"]); }

__d('canUseReactEditor',['UserAgent'],(function a(b,c,d,e,f,g){'use strict';var h=typeof b.getSelection==='function',i=h&&(c('UserAgent').isPlatform('iOS')||c('UserAgent').isPlatform('Linux')||c('UserAgent').isPlatform('Mac OS X')||c('UserAgent').isPlatform('Windows')||c('UserAgent').isPlatform('Chrome OS'))&&(c('UserAgent').isEngine('EdgeHTML >= 12')||c('UserAgent').isEngine('Gecko >= 16')||c('UserAgent').isEngine('Trident >= 5')||c('UserAgent').isEngine('WebKit >= 533.16')&&!c('UserAgent').isBrowser('Mobile Safari < 6'));function j(){return i;}f.exports=j;}),null);
__d('applyEmoticonToContentState',['EmoticonsList','applyEmoticonToContentBlock','getTextAfterNearestEntity'],(function a(b,c,d,e,f,g){'use strict';var h=new RegExp(c('EmoticonsList').regexp.source,'g');function i(j,k){var l=k.getAnchorKey(),m=k.getAnchorOffset(),n=j.getBlockForKey(l),o=c('getTextAfterNearestEntity')(n,m),p,q;while(q!==null){q=h.exec(o);if(q!==null)p=q;}if(!p)return j;var r=p[1];if(!r&&m!==o.length)return j;var s=p[2],t=m-o.length,u=t+p.index+p[1].length,v=j.getBlockMap().set(l,c('applyEmoticonToContentBlock')(n,s,u));m-=s.length-1;return j.merge({blockMap:v,selectionBefore:k,selectionAfter:k.merge({anchorOffset:m,focusOffset:m})});}f.exports=i;}),null);
__d('handleBeforeInputForEmoticon',['DraftModifier','EditorState','applyEmoticonToContentState'],(function a(b,c,d,e,f,g){var h=new RegExp(/[\s\'\".,!?]/);function i(j,k){var l=j.getSelection();if(!l.isCollapsed()||!k||!h.test(k))return j;var m=j.getCurrentContent(),n=c('applyEmoticonToContentState')(m,l);if(n===m)return j;var o=c('DraftModifier').insertText(n,n.getSelectionAfter(),k);return c('EditorState').push(j,o,'insert-characters');}f.exports=i;}),null);
__d('handleSoftNewlineForEmoticon',['DraftModifier','EditorState','applyEmoticonToContentState'],(function a(b,c,d,e,f,g){function h(i){var j=i.getCurrentContent(),k=i.getSelection(),l=c('applyEmoticonToContentState')(j,k),m=c('DraftModifier').splitBlock(l,j===l?k:l.getSelectionAfter());return c('EditorState').push(i,m,'split-block');}f.exports=h;}),null);
__d('UFIMentionsInput.react',['cx','Arbiter','BanzaiScuba','Bootloader','DOMVector','DraftModifier','EditorState','EmojiFormat','Input','Keys','MentionsInput.react','React','ReactDOM','SubscriptionsHandler','UFIConfig','UFIUIEvents','URI','addEmojiInput','addEmojiToEditorState','canUseReactEditor','clearImmediate','clickRefAction','containsNode','createEditorStateWithEntities','createMentionEntity','emptyFunction','getMentionsInputDecorator','getMentionsTextForContentState','getVisibleValueForContentState','handleBeforeInputForEmoticon','handleSoftNewlineForEmoticon','isSoftNewlineEvent','setImmediate'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('addEmojiInput')(c('MentionsInput.react')),l=new (c('BanzaiScuba'))('ufi_tinder',null,{addBrowserFields:true,addGeoFields:true,addPredictedGeographyFields:true,addMobileDeviceFields:true,addUser:true}),m=200,n='ufi_comment_composer',o='ufi_reply_composer',p=c('canUseReactEditor')();function q(w){var x=w.map(function(y){return {kind:'file',type:y.type,getAsFile:c('emptyFunction').thatReturns(y)};});return {clipboardData:{items:x}};}function r(){var w=arguments.length<=0||arguments[0]===undefined?{}:arguments[0];return c('createEditorStateWithEntities')({text:w.text||'',ranges:w.ranges,decorator:c('getMentionsInputDecorator')(),addEntityToContentStateFn:v});}function s(w){var x=/^image\//;return w.filter(function(y){return x.test(y.type);});}i=babelHelpers.inherits(t,c('React').Component);j=i&&i.prototype;function t(w){j.constructor.call(this,w);u.call(this);this.$UFIMentionsInput1=false;var x='',y=[];if(this.props.initialData){x=this.props.initialData.value||'';y=this.props.initialData.mentions||[];y=y.map(function(aa){return babelHelpers['extends']({},aa,{entity:{uid:aa.uid,weakreference:aa.weakreference}});});}var z=c('EditorState').moveSelectionToEnd(r({ranges:y,text:x}));this.state={bootloaded:false,fullRender:!!(this.props.initialData&&this.props.initialData.value),typeaheadReporter:null,editorState:z,mentionsSource:null,fallbackText:x};}t.prototype.componentWillMount=function(){this.$UFIMentionsInput2=new (c('SubscriptionsHandler'))();this.$UFIMentionsInput2.addSubscriptions(c('Arbiter').subscribe('Story/delete',function(w,x){var y=x.split(':')[2];if(y===this.props.ftEntIdentifier)this.$UFIMentionsInput5();}.bind(this)),c('Arbiter').subscribe(c('UFIUIEvents').Comment,function(w,x){var y,z=this,aa=x.ft_id,ba=x.target;if(aa!==this.props.ftEntIdentifier)return;if(c('containsNode')(c('ReactDOM').findDOMNode(this),ba))(function(){var ca=c('setImmediate')(function(){this.$UFIMentionsInput5();}.bind(z));z.$UFIMentionsInput2.addSubscriptions({remove:function da(){c('clearImmediate')(ca);}});})();}.bind(this)));};t.prototype.componentWillUnmount=function(){this.$UFIMentionsInput1=false;if(this.$UFIMentionsInput2)this.$UFIMentionsInput2.release();delete this.$UFIMentionsInput2;};t.prototype.hasEnteredText=function(){return !!this.state.editorState.getCurrentContent().getPlainText().trim();};t.prototype.getText=function(){var w=this.state.editorState.getCurrentContent();return c('getMentionsTextForContentState')(w);};t.prototype.insertMention=function(w){this.$UFIMentionsInput6(function(){if(p){var x=this.state.editorState,y=x.getSelection(),z=x.getCurrentContent(),aa=y.getStartKey(),ba=y.getStartOffset(),ca=z.getBlockForKey(aa),da=void 0;if(ca.getText().substr(ba-1,1).trim().length>0){var ea=c('DraftModifier').replaceText(z,y,' ');y=ea.getSelectionAfter();da=c('DraftModifier').insertText(ea,y,w.getTitle(),x.getCurrentInlineStyle(),c('createMentionEntity')(w));}else da=c('DraftModifier').replaceText(z,y,w.getTitle(),x.getCurrentInlineStyle(),c('createMentionEntity')(w));y=da.getSelectionAfter();da=c('DraftModifier').insertText(da,y,' ');x=c('EditorState').push(x,da,'insert-fragment');x=c('EditorState').forceSelection(x,x.getSelection());this.setState({editorState:x});this.focus();}else{var fa=c('ReactDOM').findDOMNode(this.refs.textarea);fa instanceof HTMLElement&&fa.focus();if(this.state.fallbackText.length){this.setState({fallbackText:this.state.fallbackText+' '+w.title});}else this.setState({fallbackText:w.title});}}.bind(this));};t.prototype.insertEmoticon=function(w){if(!p){this.setState({fallbackText:this.state.fallbackText+' '+w});return;}var x=this.state.editorState,y=x.getCurrentContent(),z=x.getSelection(),aa=y.getBlockForKey(z.getStartKey()).getText()[z.getStartOffset()-1];if(aa&&aa!==' ')w=' '+w;var ba=y.getBlockForKey(z.getEndKey()).getText()[z.getEndOffset()];if(ba&&ba!==' ')w+=' ';var ca=c('DraftModifier').replaceText(x.getCurrentContent(),x.getSelection(),w);x=c('EditorState').push(x,ca,'insert-characters');x=c('EditorState').forceSelection(x,x.getSelection());this.setState({editorState:x});};t.prototype.insertEmoji=function(w){var x=c('EmojiFormat').codeArrayToUnicode(w);if(!p){this.setState({fallbackText:this.state.fallbackText+' '+x});return;}c('addEmojiToEditorState')(x,this.state.editorState,this.$UFIMentionsInput7);};t.prototype.$UFIMentionsInput5=function(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd();this.setState({editorState:c('EditorState').moveFocusToEnd(r())});};t.prototype.submitComment=function(w){var x=arguments.length<=1||arguments[1]===undefined?this.state:arguments[1],y=x.editorState.getCurrentContent(),z=c('getVisibleValueForContentState')(y),aa=c('getMentionsTextForContentState')(y),ba={visibleValue:z,encodedValue:aa},ca=c('Input').getValue(c('ReactDOM').findDOMNode(this.refs.proxyInput));if(ca){var da=new (c('URI'))(b.location.href);l.addNormal('path',da.getPath());l.addNormal('proxy_value',ca.substr(0,m));l.post();}return this.props.onEnterSubmit(ba,w);};t.prototype.$UFIMentionsInput11=function(w){var x=s(w);if(x.length){this.props.onPaste(q(x));return true;}return false;};t.prototype.$UFIMentionsInput6=function(w){this.setState({fullRender:true},w);};t.prototype.$UFIMentionsInput24=function(){return c('React').createElement('div',{className:"_2xwx _289b"},c('React').createElement('textarea',{ref:'textarea',className:"UFIAddCommentInput _1os9 _2xww",name:'add_comment_text',placeholder:this.props.placeholder,spellCheck:true,onKeyDown:this.$UFIMentionsInput18,onChange:this.$UFIMentionsInput19,onBlur:this.$UFIMentionsInput20,onFocus:this.$UFIMentionsInput21,value:this.state.fallbackText}));};t.prototype.$UFIMentionsInput25=function(){if(!this.props.hideProxyInput){var w="_1osa mentionsHidden";return c('React').createElement('input',{className:w,name:'add_comment_text',ref:'proxyInput',onFocus:this.focus,tabIndex:'-1'});}return null;};t.prototype.$UFIMentionsInput26=function(){var w="UFIAddCommentInput _1osb _1osc _2xww";return c('React').createElement('div',{onClick:this.$UFIMentionsInput23,className:"_2xwx",onFocus:this.$UFIMentionsInput23,onMouseOver:this.$UFIMentionsInput23,onSelect:c('emptyFunction'),onTouchStart:this.$UFIMentionsInput23,role:'presentation'},this.$UFIMentionsInput25(),c('React').createElement('div',{className:w},this.props.placeholder));};t.prototype.$UFIMentionsInput27=function(w){c('clickRefAction')('ufi',w.target,null,'FORCE');};t.prototype.$UFIMentionsInput28=function(){var w="UFIAddCommentInput _1osb _2xww",x=babelHelpers['extends']({mentionSortFn:this.props.viewOptionsTypeObjectsOrder?this.$UFIMentionsInput22:null},this.props.viewProps);return c('React').createElement('div',{className:"_2xwx _289c",onClick:this.$UFIMentionsInput27,role:'presentation'},this.$UFIMentionsInput25(),c('React').createElement(k,{ref:'mentionsInput',className:w,editorState:this.state.editorState,onChange:this.$UFIMentionsInput7,mentionsSource:this.state.mentionsSource,typeaheadView:this.props.viewComponent,typeaheadViewProps:x,spellCheck:true,placeholder:this.props.placeholder,onAddMention:this.$UFIMentionsInput17,onShowMentions:this.$UFIMentionsInput16,onFocus:this.$UFIMentionsInput15,onBlur:this.$UFIMentionsInput14,handleContentReturn:this.$UFIMentionsInput9,handleBeforeInput:this.$UFIMentionsInput10,handlePastedFiles:this.$UFIMentionsInput13,handleDroppedFiles:this.$UFIMentionsInput12,autoflip:this.props.autoflip,position:this.props.isBroadcasterUFI||this.props.isTahoeUFI?'above':null,webDriverTestID:this.props.replyCommentID?o:n}));};t.prototype.componentDidMount=function(){var w,x=this;if(!p){if(this.state.fallbackText){var y=c('ReactDOM').findDOMNode(this.refs.textarea);y instanceof HTMLElement&&y.focus();}}else if(this.state.editorState.getCurrentContent().hasText())(function(){var z=c('setImmediate')(function(){this.focus();}.bind(x));x.$UFIMentionsInput2.addSubscriptions({remove:function aa(){c('clearImmediate')(z);}});})();this.$UFIMentionsInput1=true;};t.prototype.render=function(){if(!p)return this.$UFIMentionsInput24();if(!this.state.fullRender)return this.$UFIMentionsInput26();return this.$UFIMentionsInput28();};var u=function w(){this.focus=function(){this.$UFIMentionsInput6(function(){if(p){this.refs.mentionsInput.focus();}else{var x=c('ReactDOM').findDOMNode(this.refs.textarea);if(x instanceof HTMLElement)x.focus();}}.bind(this));}.bind(this);this.$UFIMentionsInput8=function(){var x,y=this;if(this.props.monitorHeight)(function(){var z=c('setImmediate')(function(){if(!this.$UFIMentionsInput1)return;var aa=p?c('ReactDOM').findDOMNode(this.refs.mentionsInput):c('ReactDOM').findDOMNode(this.refs.textarea);if(aa instanceof HTMLElement){var ba=c('DOMVector').getElementDimensions(aa).y;if(ba!==this.$UFIMentionsInput3){this.$UFIMentionsInput3=ba;c('Arbiter').inform(c('UFIUIEvents').InputHeightChanged,{node:aa});}}}.bind(y));y.$UFIMentionsInput2.addSubscriptions({remove:function aa(){c('clearImmediate')(z);}});})();}.bind(this);this.$UFIMentionsInput7=function(x){if(this.props.onContentChange){var y=this.state.editorState.getCurrentContent(),z=x.getCurrentContent();if(y!==z)this.props.onContentChange(c('getMentionsTextForContentState')(z));}this.setState({editorState:x},this.$UFIMentionsInput8);}.bind(this);this.$UFIMentionsInput9=function(x,y){if(c('isSoftNewlineEvent')(x)){this.setState({editorState:c('handleSoftNewlineForEmoticon')(y)});return true;}x.persist();this.setState(null,function(){this.submitComment(x,this.state);}.bind(this));return true;}.bind(this);this.$UFIMentionsInput10=function(x,y){var z=c('handleBeforeInputForEmoticon')(y,x);if(z===y){return false;}else{this.setState({editorState:z});return true;}}.bind(this);this.$UFIMentionsInput12=function(x,y){return this.$UFIMentionsInput11(y);}.bind(this);this.$UFIMentionsInput13=function(x){return this.$UFIMentionsInput11(x);}.bind(this);this.$UFIMentionsInput14=function(){this.state.typeaheadReporter&&this.state.typeaheadReporter.sessionEnd();this.props.onBlur&&this.props.onBlur();c('Arbiter').inform(c('UFIUIEvents').Blur,{ftEntIdentifier:this.props.ftEntIdentifier,instanceID:this.props.instanceID,hasEnteredText:this.hasEnteredText()});}.bind(this);this.$UFIMentionsInput15=function(){if(!this.state.bootloaded&&!this.$UFIMentionsInput4){this.$UFIMentionsInput4=true;c('Bootloader').loadModules(["TypeaheadMetricReporter","getMentionsSearchSource"],function(x,y){if(!this.$UFIMentionsInput1)return;var z=new x({event_name:'tinder_mentions'});z.sessionStart();var aa=y(this.props.datasource,z,c('UFIConfig').showHashtagTypeahead);aa.bootstrap();this.setState({typeaheadReporter:z,bootloaded:true,mentionsSource:aa},function(){this.$UFIMentionsInput4=false;}.bind(this));}.bind(this),'UFIMentionsInput.react');}else if(this.state.typeaheadReporter)this.state.typeaheadReporter.sessionStart();this.props.onFocus&&this.props.onFocus();c('Arbiter').inform(c('UFIUIEvents').Focus,{ftEntIdentifier:this.props.ftEntIdentifier,instanceID:this.props.instanceID});}.bind(this);this.$UFIMentionsInput16=function(x,y){if(this.state.typeaheadReporter)this.state.typeaheadReporter.reportResults(x.map(function(z){return z.getUniqueID();}));}.bind(this);this.$UFIMentionsInput17=function(x,y,z){if(this.state.typeaheadReporter){this.state.typeaheadReporter.reportSelect(x.getUniqueID(),x.getType(),y,z.button>=0);var aa=this.state.typeaheadReporter;if(aa){aa.sessionEnd();aa.sessionStart();}}}.bind(this);this.$UFIMentionsInput18=function(x){if(x.which!==c('Keys').RETURN)return;if(c('isSoftNewlineEvent')(x)||!this.state.fallbackText.trim())return;x.preventDefault();var y={visibleValue:this.state.fallbackText,encodedValue:this.state.fallbackText};if(this.props.onEnterSubmit(y,x))this.setState({fallbackText:''});}.bind(this);this.$UFIMentionsInput19=function(x){this.setState({fallbackText:x.target.value});}.bind(this);this.$UFIMentionsInput20=function(x){this.props.onBlur&&this.props.onBlur();}.bind(this);this.$UFIMentionsInput21=function(x){this.props.onFocus&&this.props.onFocus();}.bind(this);this.$UFIMentionsInput22=function(x,y){var z=x.getAuxiliaryData().renderType,aa=y.getAuxiliaryData().renderType;if(z===aa)return x.getOrder()-y.getOrder();var ba=this.props.viewOptionsTypeObjectsOrder;return ba.indexOf(z)-ba.indexOf(aa);}.bind(this);this.$UFIMentionsInput23=function(){this.$UFIMentionsInput6();}.bind(this);};function v(w,x){return x.createEntity('MENTION','IMMUTABLE',{id:w.uid,isWeak:w.weakreference});}f.exports=t;}),null);
__d('OGHovercardFeedback',['Event','Arbiter','CSS','DOM','ScrollableArea','TextAreaControl','UFIUIEvents','ge'],(function a(b,c,d,e,f,g){Object.assign(h,{init:function i(j,k,l){new h(j,k,l);}});function h(i,j,k){this._hovercard=i;this._focusListener=null;for(var l=0;l<j.length;l++)this.conditionClassOnHovercard(j[l],k);c('Arbiter').subscribe(c('UFIUIEvents').Comment,function(m,n){this._scrollComments(n.isinverted?'toTop':'toBottom');}.bind(this));i.subscribe('show',this._initCommentTextAreaAndFocusListener.bind(this));}Object.assign(h.prototype,{conditionClassOnHovercard:function i(j,k){var l=c('ge')(j);this._hovercard.subscribe('beforeshow',function(){c('CSS').addClass(l,k);});this._hovercard.subscribe('hide',function(){c('CSS').removeClass(l,k);});},_scrollComments:function i(j){var k=this._hovercard.getContent(),l=k&&c('DOM').scry(k,'.uiScrollableAreaWrap')[0],m=l&&c('ScrollableArea').getInstance(l);if(j==='toTop'){m&&m.scrollToTop();}else m&&m.scrollToBottom();},_initCommentTextAreaAndFocusListener:function i(){var j=this._hovercard.getContent(),k=j&&c('DOM').scry(j,'.ogHovercardFooter textarea')[0];if(k){var l=c('TextAreaControl').getInstance(k);if(l&&l.isEmpty())l.clear();if(this._focusListener)return;this._focusListener=c('Event').listen(k,'focus',this._scrollComments.bind(this));}}});f.exports=h;}),null);
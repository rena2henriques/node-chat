if (self.CavalryLogger) { CavalryLogger.start_js(["jo+WX"]); }

__d('EmojiInputDecorator',['EmojiRenderer','immutable'],(function a(b,c,d,e,f,g){'use strict';var h=c('immutable').List,i='.',j='emoji';function k(l,m,n){this.$EmojiInputDecorator1=l;this.$EmojiInputDecorator2=m;this.$EmojiInputDecorator3=n;}k.prototype.getDecorations=function(l,m){var n=this.$EmojiInputDecorator2?this.$EmojiInputDecorator2.getDecorations(l,m).toArray():Array(l.getText().length).fill(null),o=0;c('EmojiRenderer').parse(l.getText()).forEach(function(p){var q=p.offset,r=q+p.length,s=true;for(var t=q;t<r;t++)if(n[t]!=null){s=false;break;}if(s){for(var u=q;u<r;u++)n[u]=j+i+o;o++;}});return h(n);};k.prototype.getComponentForKey=function(l){if(!this.$EmojiInputDecorator2||l.split(i)[0]===j)return this.$EmojiInputDecorator1;return this.$EmojiInputDecorator2.getComponentForKey(l);};k.prototype.getPropsForKey=function(l){if(!this.$EmojiInputDecorator2||l.split(i)[0]===j)return this.$EmojiInputDecorator3;return this.$EmojiInputDecorator2.getPropsForKey(l);};f.exports=k;}),null);
__d('EmojiSpan.react',['cx','DraftEntity','EmojiConfig','EmojiImageURL','FBEmojiUtils','React','SupportedFBEmoji','UnicodeUtils'],(function a(b,c,d,e,f,g,h){var i,j,k=c('EmojiImageURL').getFBEmojiURL;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';var m=this.props,n=m.decoratedText,o=m.offsetKey,p=m.size,q=0,r=n.length,s=[];while(q<r){var t=c('UnicodeUtils').getUTF16Length(n,q);s.push(n.substr(q,t));q+=t;}var u=c('FBEmojiUtils').getSupportedKey(s);if(u&&Object.prototype.hasOwnProperty.call(c('SupportedFBEmoji'),u))return c('React').createElement('span',babelHelpers['extends']({},this.props,{className:"_3gl1 _5zz4",'data-offset-key':o,style:{backgroundImage:'url('+k(u,p)+')',backgroundSize:p+'px '+p+'px',height:p,width:p}}),c('React').createElement('span',{className:"_ncl"},n));return c('React').createElement('span',{'data-offset-key':o},n);};function l(){'use strict';i.apply(this,arguments);}f.exports=l;}),null);
__d('keyCommandBackspaceEmoji',['EditorState','EmojiRenderer','UnicodeUtils','moveSelectionBackward','removeTextWithStrategy'],(function a(b,c,d,e,f,g){var h=function i(j){var k=c('removeTextWithStrategy')(j,function(m){var n=m.getSelection(),o=n.getAnchorOffset(),p=m.getCurrentContent().getBlockForKey(n.getAnchorKey()).getText(),q=p[o-1],r=null;if(q){var s=c('EmojiRenderer').parse(p);for(var t=0;t<s.length;t++)if(s[t].offset<o&&s[t].offset+s[t].length>=o){r=s[t].length;break;}if(!r)r=c('UnicodeUtils').getUTF16Length(q,0);}return c('moveSelectionBackward')(m,r||1);},'backward');if(k===j.getCurrentContent())return null;var l=j.getSelection();return c('EditorState').push(j,k.set('selectionBefore',l),l.isCollapsed()?'backspace-character':'remove-range');};f.exports=h;}),null);
__d('keyCommandDeleteEmoji',['EditorState','EmojiRenderer','UnicodeUtils','moveSelectionForward','removeTextWithStrategy'],(function a(b,c,d,e,f,g){var h=function i(j){var k=c('removeTextWithStrategy')(j,function(m){var n=m.getSelection(),o=n.getAnchorOffset(),p=m.getCurrentContent().getBlockForKey(n.getAnchorKey()).getText(),q=p[o],r=null;if(q){var s=c('EmojiRenderer').parse(p);for(var t=0;t<s.length;t++)if(s[t].offset<=o&&s[t].offset+s[t].length>o){r=s[t].length;break;}if(!r)r=c('UnicodeUtils').getUTF16Length(q,0);}return c('moveSelectionForward')(m,r||1);},'forward');if(k===j.getCurrentContent())return null;var l=j.getSelection();return c('EditorState').push(j,k.set('selectionBefore',l),l.isCollapsed()?'delete-character':'remove-range');};f.exports=h;}),null);
__d('addEmojiInput',['EditorState','EmojiInputDecorator','EmojiSpan.react','React','keyCommandBackspaceEmoji','keyCommandDeleteEmoji'],(function a(b,c,d,e,f,g){'use strict';var h=function(i){return function(){var j,k;j=babelHelpers.inherits(l,c('React').Component);k=j&&j.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=k.constructor).call.apply(m,[this].concat(p)),this.$_class1=function(r,s){var t=null;switch(r){case 'backspace':t=c('keyCommandBackspaceEmoji')(s);break;case 'delete':t=c('keyCommandDeleteEmoji')(s);break;}if(t){this.props.onChange(t);return 'handled';}return 'not-handled';}.bind(this),n;}l.prototype.blur=function(){'use strict';var m=this.refs.component;m&&typeof m.blur==='function'&&m.blur();};l.prototype.click=function(){'use strict';var m=this.refs.component;m&&typeof m.click==='function'&&m.click();};l.prototype.focus=function(){'use strict';var m=this.refs.component;m&&typeof m.focus==='function'&&m.focus();};l.prototype.render=function(){'use strict';var m=this.props.editorState,n=m.getDecorator();if(!(n instanceof c('EmojiInputDecorator')))m=c('EditorState').set(this.props.editorState,{decorator:new (c('EmojiInputDecorator'))(c('EmojiSpan.react'),n,{size:16})});return c('React').createElement(i,babelHelpers['extends']({},this.props,{editorState:m,handleKeyCommand:this.$_class1,ref:'component'}));};return l;}();}.bind(this);f.exports=h;}),null);
__d('addEmojiToEditorState',['DraftModifier','EditorState','EmojiFormat','emptyFunction'],(function a(b,c,d,e,f,g){'use strict';function h(i,j){var k=arguments.length<=2||arguments[2]===undefined?c('emptyFunction'):arguments[2];if(typeof i!=='string')i=c('EmojiFormat').codeArrayToUnicode(i);var l=c('DraftModifier').replaceText(j.getCurrentContent(),j.getSelection(),i),m=c('EditorState').push(j,l,'insert-characters');if(m!==j)k(m);return m;}f.exports=h;}),null);
__d('ReactComposerStatusActions',['ReactComposerDispatcher','ReactComposerStatusActionType','ReactComposerStatusStore'],(function a(b,c,d,e,f,g){c('ReactComposerStatusStore');h.prototype.setMentionsSource=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS_SOURCE,mentionsSource:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setTypeaheadReporter=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_TYPEAHEAD_REPORTER,typeaheadReporter:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_EDITOR_STATE,editorState:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setOriginalEditorState=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_ORIGINAL_EDITOR_STATE,originalEditorState:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setMentions=function(i,j){'use strict';var k={composerID:i,type:c('ReactComposerStatusActionType').SET_MENTIONS,mentions:j};c('ReactComposerDispatcher').dispatch(k);};h.prototype.setTextLength=function(i,j){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerStatusActionType').SET_TEXT_LENGTH,textLength:j});};function h(){'use strict';}f.exports=new h();}),null);
__d('ReactComposerStatusAttachmentMentionsInput.react',['cx','addEmojiInput','Arbiter','MentionsInput.react','React','ReactComponentWithPureRenderMixin','ReactComposerConfig','ReactComposerContextMixin','ReactComposerEvents','ReactComposerInit','ReactComposerTaggerType','SubscriptionsHandler','XUITypeaheadView.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('addEmojiInput')(c('MentionsInput.react')),k=c('React').createClass({displayName:'ReactComposerStatusAttachmentMentionsInput',_subscriptions:undefined,mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],propTypes:{config:c('ReactComposerConfig'),mentionsSource:i.object,preventFocus:i.bool,typeaheadReporter:i.object,onChange:i.func,onFocus:i.func,onPasteFiles:i.func},componentWillUnmount:function l(){this.props.onBlur&&this.props.onBlur(this.props.editorState);this._subscriptions&&this._subscriptions.release();},componentWillMount:function l(){var m=new (c('SubscriptionsHandler'))();if(!this.props.preventFocus)m.addSubscriptions(c('Arbiter').subscribe([c('ReactComposerEvents').ACTIVATE_ATTACHMENT+this.context.composerID],function(){return this.focus();}.bind(this)));this._subscriptions=m;},render:function l(){var m=this.props.config&&this.props.taggersConfig&&this.props.config.taggersConfig[c('ReactComposerTaggerType').PEOPLE],n=m&&m.typeaheadView?m.typeaheadView:c('XUITypeaheadView.react'),o=m&&m.typeaheadViewProps?m.typeaheadViewProps:{},p=Object.assign({},{ariaMultiline:true,role:'textbox',typeaheadView:n,typeaheadViewProps:o,selectOnTab:false,spellCheck:true},this.props,{className:c('joinClasses')("_1mwp navigationFocus",this.props.className),editorState:this.props.editorState,onAddMention:this._onAddMention,onShowMentions:this._onShowMentions,onFocus:this._onFocus,onBlur:this._onBlur,onChange:this._onChange,maxResults:10});return c('React').createElement(j,babelHelpers['extends']({ref:'mentionsInput'},p,{webDriverTestID:'status-attachment-mentions-input'}));},focus:function l(){if(!c('ReactComposerInit').isInstanceMounted(this.context.composerID)){c('Arbiter').subscribeOnce([c('ReactComposerEvents').INSTANCE_MOUNTED+this.context.composerID],function(){return this.refs.mentionsInput.focus();}.bind(this));}else this.refs.mentionsInput.focus();},blur:function l(){this.refs.mentionsInput.blur();},_onAddMention:function l(m,n,o){var p=this.props.typeaheadReporter;if(p){p.reportSelect(m.getUniqueID(),m.getType(),n,o.button>=0);p.sessionEnd();p.sessionStart();}},_onShowMentions:function l(m,n){var o=this.props.typeaheadReporter;if(o)o.reportResults(m.map(function(p){return p.getUniqueID();}));},_onFocus:function l(){var m=this.props.typeaheadReporter;if(m)m.sessionStart();this.props.onFocus&&this.props.onFocus();},_onChange:function l(m){this.props.onChange&&this.props.onChange(m);},_onBlur:function l(){this.props.typeaheadReporter&&this.props.typeaheadReporter.sessionEnd();this.props.onBlur&&this.props.onBlur(this.props.editorState);}});f.exports=k;}),null);
__d('ReactComposerInputDecorator',[],(function a(b,c,d,e,f,g){'use strict';f.exports={NONE:0,MENTIONS:1,RICH_TEXT:2};}),null);
__d('ReactComposerStatusAttachmentMentionsInputVariant.react',['cx','addEmojiToEditorState','EmojiInputButton.react','Keys','React','ReactComposerActions','ReactComposerAttachmentType','ReactComposerStatusAttachmentMentionsInput.react','ReactComposerStickerContainer','UserAgent_DEPRECATED','emptyFunction','joinClasses'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('ReactComposerStickerContainer').ReactComposerStickerComponent;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(m){j.constructor.call(this,m);this.insertEmoji=function(n){c('addEmojiToEditorState')(n,this.props.editorState,this.props.onChange);}.bind(this);this.$ReactComposerStatusAttachmentMentionsInputVariant1=function(n){var o=/^image\//;n=n.filter(function(p){return o.test(p.type);});if(n.length>0&&this.props.onPasteFiles){this.props.onPasteFiles(n);return true;}return false;}.bind(this);this.$ReactComposerStatusAttachmentMentionsInputVariant2=function(event,n){var o=c('UserAgent_DEPRECATED').osx()?event.metaKey:event.ctrlKey;if(event.keyCode===c('Keys').RETURN&&o){this.blur();setTimeout(this.props.onPostIntent,0);return true;}return false;}.bind(this);this.$ReactComposerStatusAttachmentMentionsInputVariant3=function(){c('ReactComposerActions').expandSprouts(this.props.compositionID);}.bind(this);}l.prototype.render=function(){var m=this.props.config&&this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],n=null;if(this.props.useRichTextEditor){var o=m.richTextEditor;n=c('React').createElement(o,babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_3w8y _21mu"),canAttachVideo:false,canAttachPhoto:false,canAttachEmbed:false,onSave:c('emptyFunction'),spellCheck:true,autoCorrect:false,handlePastedFiles:this.$ReactComposerStatusAttachmentMentionsInputVariant1,handleContentReturn:this.$ReactComposerStatusAttachmentMentionsInputVariant2,ref:'mentionsInput'}));}else n=c('React').createElement(c('ReactComposerStatusAttachmentMentionsInput.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,(this.props.isSelectedAttachmentActive?"_1mwq":'')+(this.props.config&&this.props.config.showExpandedComposer?' '+"_4c_p":'')+(m&&m.showProfilePic?' '+"_5bu_":'')+(this.props.isPosting?' '+"_1udp":'')+(this.props.shouldUseLargeText?' '+"_17nh":'')+(m&&m.largeTextThreshold?' '+"_34nd":'')+(' '+"_21mu")+(this.props.sticker&&this.props.sticker.stickerID?' '+"_hjn":'')),ref:'mentionsInput',readOnly:this.props.isPosting,editorState:this.props.editorState,mentionsSource:this.props.mentionsSource,typeaheadReporter:this.props.typeaheadReporter,handlePastedFiles:this.$ReactComposerStatusAttachmentMentionsInputVariant1,handleContentReturn:this.$ReactComposerStatusAttachmentMentionsInputVariant2}));var p="_3nc-",q="_3nc_",r="_5zq9",s=c('React').createElement(c('EmojiInputButton.react'),{buttonClassName:p,iconActiveClassName:r,iconClassName:q,onSelect:this.insertEmoji,onClick:this.$ReactComposerStatusAttachmentMentionsInputVariant3}),t=null;if(k)t=c('React').createElement(k,{sticker:this.props.sticker,composerID:this.props.compositionID});return c('React').createElement('div',{className:"_3nd0"},t,n,s);};l.prototype.blur=function(){this.refs.mentionsInput.blur();};l.prototype.focus=function(){this.refs.mentionsInput.focus();};f.exports=l;}),null);
__d('ImplicitLink.react',['cx','React'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').Component);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement('span',{'data-offset-key':this.props.offsetKey,className:"_2ou",spellCheck:false},this.props.children);};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('getRichTextInputDecorator',['CompositeDraftDecorator','EmojiSpan.react','EmoticonSpan.react','HashtagSpan.react','ImplicitLink.react','MentionSpan.react','RichTextEditorLink.react','WeakMentionSpan.react','getEntityMatcher','getHashtagMatches','getImplicitURLMatches'],(function a(b,c,d,e,f,g){var h;function i(){if(!h)h=new (c('CompositeDraftDecorator'))([{strategy:c('getEntityMatcher')(function(j){var k=j.getData();return j.getType()==='MENTION'&&k&&k.isWeak;}),component:c('WeakMentionSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='MENTION';}),component:c('MentionSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='EMOTICON';}),component:c('EmoticonSpan.react')},{strategy:c('getHashtagMatches'),component:c('HashtagSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='EMOJI';}),component:c('EmojiSpan.react')},{strategy:c('getEntityMatcher')(function(j){return j.getType()==='LINK';}),component:c('RichTextEditorLink.react')},{strategy:c('getImplicitURLMatches'),component:c('ImplicitLink.react')}]);return h;}f.exports=i;}),null);
__d('getReactComposerEmojiInputDecorator',['EmojiInputDecorator','EmojiSpan.react','ReactComposerInputDecorator','getMentionsInputDecorator','getRichTextInputDecorator','memoizeWithArgs'],(function a(b,c,d,e,f,g){'use strict';var h=c('memoizeWithArgs')(function(i,j){var k=null;if(i===c('ReactComposerInputDecorator').RICH_TEXT){k=c('getRichTextInputDecorator')();}else if(i===c('ReactComposerInputDecorator').MENTIONS)k=c('getMentionsInputDecorator')();if(j)k=new (c('EmojiInputDecorator'))(c('EmojiSpan.react'),k,{size:j});return k;},function(i,j){if(!j)return '#'+i;return i+'_'+j;});f.exports=h;}),null);
__d('ReactComposerStatusAttachmentMentionsInputContainer.react',['Arbiter','EditorState','LitestandStoryInsertionStatus','React','ReactComponentWithPureRenderMixin','ReactComposerActions','ReactComposerAttachmentStore','ReactComposerAttachmentType','ReactComposerConfig','ReactComposerContextMixin','getReactComposerEmojiInputDecorator','ReactComposerEvents','ReactComposerHandleUnsavedChanges','ReactComposerInputDecorator','ReactComposerMediaUploadStore','ReactComposerMinutiaeAttachmentStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerScrapedAttachmentStore','ReactComposerStatusActions','ReactComposerStatusAttachmentMentionsInputVariant.react','ReactComposerStatusStore','ReactComposerStatusUtils','ReactComposerStore','ReactComposerTaggerStore','ReactComposerTaggerType','TextDelightEvents','UnicodeUtils','ifRequired'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=function k(l,m){var n=c('ReactComposerAttachmentStore').getSelectedAttachmentID(l);if(n===c('ReactComposerAttachmentType').LIVE_VIDEO||n===c('ReactComposerAttachmentType').SELL)return false;var o=m&&m.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],p=c('ReactComposerTaggerStore').hasMarkdown(l);return !!(o&&o.richTextEditor&&!p);},j=c('React').createClass({displayName:'ComposerStatusAttachmentMentionsInputContainer',_rerenderSubscription:undefined,mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerAttachmentStore'),c('ReactComposerMediaUploadStore'),c('ReactComposerMinutiaeAttachmentStore'),c('ReactComposerScrapedAttachmentStore'),c('ReactComposerStatusStore'),c('ReactComposerStore'),c('ReactComposerTaggerStore'))],propTypes:{config:c('ReactComposerConfig'),mentionsEnabled:h.bool,mentionsSource:h.object,onChange:h.func,onFocus:h.func,onPasteFiles:h.func,handlePastedText:h.func},getDefaultProps:function k(){return {mentionsEnabled:true};},getInitialState:function k(){return {isFocused:false};},statics:{calculateState:function k(l,m){var n=c('ReactComposerStatusStore').getEditorState(l),o=m.config&&m.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS],p=false,q=c('ReactComposerStatusStore').getTextLength(l),r=c('ReactComposerAttachmentStore').isSelectedAttachmentActive(l),s=c('ReactComposerAttachmentStore').getSelectedAttachmentID(l),t=i(l,m.config),u=c('ReactComposerInputDecorator').NONE;if(m.mentionsEnabled)u=o&&o.richTextEditor?c('ReactComposerInputDecorator').RICH_TEXT:c('ReactComposerInputDecorator').MENTIONS;if(o&&o.largeTextThreshold&&c('ReactComposerMediaUploadStore').getUploadsCount(l)===0&&!c('ReactComposerScrapedAttachmentStore').hasAttachment(l)&&!c('ReactComposerTaggerStore').hasExplicitLocation(l)&&!c('ReactComposerTaggerStore').hasMarkdown(l)&&c('ReactComposerMinutiaeAttachmentStore').getMarkup(l)===null&&s!==c('ReactComposerAttachmentType').SELL){if(!q&&n){var v=n.getCurrentContent();q=c('UnicodeUtils').strlen(v.getPlainText());}var w=m.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS].placeholderText;if(w&&w.length<=o.LargePlaceholderTextThreshold&&q===0&&r||q!==0&&q<=o.largeTextThreshold)p=true;c('ifRequired')('ReactComposerFormattedTextStore',function(z){var aa=z.getSelectedIndex(l);if(aa>-1){p=true;u=m.mentionsEnabled?c('ReactComposerInputDecorator').MENTIONS:c('ReactComposerInputDecorator').NONE;t=false;}});}var x=c('getReactComposerEmojiInputDecorator')(u,p&&!t?28:16),y;if(n){if(n.getDecorator()!==x){y=c('EditorState').set(n,{decorator:x});c('ReactComposerStatusActions').setEditorState(l,y);}else y=n;}else{y=c('EditorState').createEmpty(x);c('ReactComposerStatusActions').setEditorState(l,y);}return {editorState:y,isSelectedAttachmentActive:c('ReactComposerAttachmentStore').isSelectedAttachmentActive(l),mentionsSource:m.mentionsEnabled?c('ReactComposerStatusStore').getMentionsSource(l):null,posting:c('ReactComposerStore').isPosting(l),typeaheadReporter:c('ReactComposerStatusStore').getTypeaheadReporter(l),shouldUseLargeText:p,selectedSticker:c('ReactComposerTaggerStore').getTaggerData(l,c('ReactComposerTaggerType').STICKER),useRichText:t};}},componentWillMount:function k(){if(this.props.mentionsSource)c('ReactComposerStatusActions').setMentionsSource(this.context.composerID,this.props.mentionsSource);this._storyInsertionBlocker=c('LitestandStoryInsertionStatus').registerBlocker(function(){return c('ReactComposerHandleUnsavedChanges').hasUnsavedChanges(this.context.composerID)||this.state.isFocused;}.bind(this));},componentDidMount:function k(){var l=c('ReactComposerStatusStore').getEditorState(this.context.composerID);if(this.state.editorState!==l){this._pendingEditorStateUpdateFromMount=l;this.setState({editorState:l},function(){this._pendingEditorStateUpdateFromMount=undefined;}.bind(this));}this._rerenderSubscription=c('Arbiter').subscribe(c('ReactComposerEvents').RERENDER_MENTION_INPUT+this.context.composerID,function(){this.setState({editorState:c('ReactComposerStatusStore').getEditorState(this.context.composerID)});}.bind(this));},componentWillReceiveProps:function k(l){if(this.props.mentionsSource!==l.mentionsSource)c('ReactComposerStatusActions').setMentionsSource(this.context.composerID,l.mentionsSource);if(l.editorState===null){var m=c('EditorState').createEmpty(c('getReactComposerEmojiInputDecorator')(c('ReactComposerInputDecorator').MENTIONS));c('ReactComposerStatusActions').setEditorState(this.context.composerID,m);this.setState({editorState:m});}},componentWillUnmount:function k(){this._prefillSubscription&&this._prefillSubscription.unsubscribe();this._prefillSubscription=null;this._storyInsertionBlocker&&this._storyInsertionBlocker.unsubscribe();this._storyInsertionBlocker=null;this._rerenderSubscription&&this._rerenderSubscription.unsubscribe();},render:function k(){return c('React').createElement(c('ReactComposerStatusAttachmentMentionsInputVariant.react'),babelHelpers['extends']({},this.props,{compositionID:this.context.composerID,editorState:this.state.editorState,isSelectedAttachmentActive:this.state.isSelectedAttachmentActive,isPosting:this.state.posting,mentionsSource:this.state.mentionsSource,onBlur:this._onBlur,onChange:this._onChange,onFocus:this._onFocus,onPostIntent:this._onPostIntent,ownerID:this.context.actorID,ref:'mentionsInput',shouldUseLargeText:this.state.shouldUseLargeText,typeaheadReporter:this.state.typeaheadReporter,useRichTextEditor:this.state.useRichText,sticker:this.state.selectedSticker}));},focus:function k(){this.refs.mentionsInput.focus();if(this._pendingEditorStateUpdateFromMount!==undefined)this.setState({editorState:this._pendingEditorStateUpdateFromMount},function(){return this.refs.mentionsInput.focus();}.bind(this));},_onFocus:function k(){c('Arbiter').inform(c('ReactComposerEvents').MENTION_INPUT_FOCUS+this.context.composerID);this.setState({isFocused:true});this.props.onFocus&&this.props.onFocus();},_onChange:function k(l){if(this._pendingEditorStateUpdateFromMount!==undefined)return;var m=0;if(l){var n=l.getCurrentContent();m=n?c('UnicodeUtils').strlen(n.getPlainText()):0;if(c('ReactComposerStatusStore').getEditorState(this.context.composerID)!==l){c('ReactComposerStatusActions').setEditorState(this.context.composerID,l);c('ReactComposerStatusActions').setTextLength(this.context.composerID,m);if(n)c('TextDelightEvents').emitScrapablePost(n.getPlainText());}}this._handleMarkdownChange(l);this.props.onChange&&this.props.onChange(l);this.setState({editorState:l});},_handleMarkdownChange:function k(l){var m=this.props.config?this.props.config.attachmentsConfig[c('ReactComposerAttachmentType').STATUS]:null;c('ReactComposerStatusUtils').handleMarkdownPreview(this.context.composerID,this.context.targetID,m?m.markdownPreviewAttachment:null,l);},_onBlur:function k(l){c('ReactComposerStatusActions').setEditorState(this.context.composerID,l);this.setState({isFocused:false});},_onPostIntent:function k(){c('ReactComposerActions').postIntended(this.context.composerID,{actorID:this.context.actorID,config:this.props.config,targetID:this.context.targetID});}});f.exports=j;}),null);
__d('ReactComposerStatusAttachmentMentionsInputWithTagExpansionContainer.react',['cx','React','ReactComponentWithPureRenderMixin','ReactComposerContextMixin','ReactComposerStatusActions','ReactComposerStatusAttachmentMentionsInputContainer.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i=c('React').createClass({displayName:'ComposerStatusAttachmentMentionsInputWithTagExpansionContainer',mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin')],render:function j(){var k=c('joinClasses')(this.props.className,"_395");return c('React').createElement(c('ReactComposerStatusAttachmentMentionsInputContainer.react'),babelHelpers['extends']({},this.props,{className:k,onChange:this._onChange,ref:'mentionsInput'}));},focus:function j(){this.refs.mentionsInput.focus();},insertEmoji:function j(k){this.refs.mentionsInput.insertEmoji(k);},_onChange:function j(k){c('ReactComposerStatusActions').setMentions(this.context.composerID,this._getMentionsFromEditorState(k));this.props.onChange&&this.props.onChange(k);},_getMentionsFromEditorState:function j(k){var l=k.getCurrentContent(),m={};l.getBlockMap().forEach(function(n){var o=n.getText();n.findEntityRanges(function(){return true;},function(p,q){var r=n.getEntityAt(p);if(!r)return;var s=l.getEntity(r);if(s.getType()!=='MENTION'||s.getData().type!=='user')return;var t=s.getData().id;m[t]={type:'user',uid:t,text:o.slice(p,q),isWeak:s.getData().isWeak};});});return m;}});f.exports=i;}),null);
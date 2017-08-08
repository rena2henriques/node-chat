if (self.CavalryLogger) { CavalryLogger.start_js(["Pw6UU"]); }

__d('MercuryThreadMetadataRawRenderer',['cx','fbt','Event','CSS','DOM','MercuryActionStatus','MercuryErrorInfo','MercuryStatusTemplates','TooltipData'],(function a(b,c,d,e,f,g,h,i){var j={renderParticipantListWithNoThreadName:function k(l,m,n,o,p,q){var r={callback:true,check_length:true,show_unread_count:true};q=q||{};var s={};for(var t in q)if(r[t]){s[t]=q[t];delete q[t];}var u=n.map(function(z){return o[z];}),v=this.renderRawParticipantList(l,u,n.length,q);v=this.renderRawTitleWithUnreadCount(v,s.show_unread_count?m.unread_count:0);var w=q.abbr_mode,x={};for(var y in q)x[y]=q[y];x.abbr_mode=true;p.forEach(function(z){var aa=p.length>1?this._cloneIfDOMElement(v):v;c('DOM').setContent(z,aa);if(s.check_length&&!w&&z.scrollWidth>z.clientWidth){var ba=this.renderRawParticipantList(l,u,n.length,x),ca=this.renderRawTitleWithUnreadCount(ba,s.show_unread_count?m.unread_count:0);c('DOM').setContent(z,ca);}}.bind(this));s.callback&&s.callback(v);},renderRawParticipantList:function k(l,m,n,o){var p={abbr_mode:true,last_separator_uses_and:true,names_renderer:true};o=o||{};var q=null;if(o.names_renderer){q=o.names_renderer(m);}else q=m.map(function(s){return s.name;});var r=null;if(q.length===0){if(!l){r=i._("Mensagem nova");}else r=i._("Nenhum participante");}else if(q.length==1){r=q[0];}else if(q.length==2){if(o.last_separator_uses_and){r=i._("{participant1} e {participant2}",[i.param('participant1',q[0]),i.param('participant2',q[1])]);}else r=i._("{participant1}, {participant2}",[i.param('participant1',q[0]),i.param('participant2',q[1])]);}else if(o.last_separator_uses_and){if(o.abbr_mode){r=i._("{participant1} e {others_link}",[i.param('participant1',q[0]),i.param('others_link',this.renderRawParticipantCount({render_subset:true,count:n-1}))]);}else if(q.length==3){r=i._("{participant1}, {participant2} e {participant3}",[i.param('participant1',q[0]),i.param('participant2',q[1]),i.param('participant3',q[2])]);}else r=i._("{participant1}, {participant2} e {others_link}",[i.param('participant1',q[0]),i.param('participant2',q[1]),i.param('others_link',this.renderRawParticipantCount({render_subset:true,count:n-2}))]);}else if(q.length==3){r=i._("{participant1}, {participant2}, {participant3}",[i.param('participant1',q[0]),i.param('participant2',q[1]),i.param('participant3',q[2])]);}else r=i._("{participant1}, {participant2}, {participant3}, {others_link}",[i.param('participant1',q[0]),i.param('participant2',q[1]),i.param('participant3',q[2]),i.param('others_link',this.renderRawParticipantCount({render_subset:true,count:n-3}))]);if(Array.isArray(r))r=c('DOM').create('span',{},r);return r;},renderRawTitleWithUnreadCount:function k(l,m){var n=l;if(m&&m>1)n=c('DOM').create('span',{},i._("{conversation_title} ({unread_count})",[i.param('conversation_title',l),i.param('unread_count',m)]));return n;},renderRawParticipantCount:function k(l){var m=l.render_subset,n;if(!m){n=l.count>1?i._({"*":"{num} pessoas"},[i.param('num',l.count,[0])]):i._("1 pessoa");}else n=l.count>1?i._({"*":"{others_count} outras pessoas"},[i.param('others_count',l.count,[0])]):i._("1 outra pessoa");return n;},renderShortNames:function k(l){if(l.length==1)return [l[0].name];return l.map(function(m){return m.short_name;});},renderStatusIndicator:function k(l,m,n){var o;if(l==c('MercuryActionStatus').RESENDING){o=this.renderResendIndicator();}else if(l!==undefined&&l!=c('MercuryActionStatus').UNSENT&&l!=c('MercuryActionStatus').UNCONFIRMED&&l!=c('MercuryActionStatus').SUCCESS)o=this.renderErrorIndicator(m,n);return o;},renderResendIndicator:function k(){return c('MercuryStatusTemplates')[':fb:mercury:resend-indicator'].render();},renderErrorIndicator:function k(l,m){if(!l)return null;var n=c('MercuryStatusTemplates')[':fb:mercury:error-indicator'].render(),o=l.is_transient,p=c('MercuryErrorInfo').getMessage(l);if(o)if(c('MercuryErrorInfo').isConnectionError(l)){p=i._("{message} Verifica a tua liga\u00e7\u00e3o \u00e0 Internet e clica para tentar novamente.",[i.param('message',p)]);}else p=i._("{message} Clica para enviares novamente.",[i.param('message',p)]);c('TooltipData').set(n,p,'above','center');if(m&&o){c('Event').listen(n,'click',m);n.setAttribute('tabindex','0');c('CSS').addClass(n,"_55q-");}return n;},_cloneIfDOMElement:function k(l){if(l&&l.cloneNode){return l.cloneNode();}else return l;}};f.exports=j;}),null);
__d('MessagingRecipientTypeaheadItem.react',['cx','BackgroundImage.react','ChatTypeaheadConstants','ImageBlock.react','LeftRight.react','React','SplitImage.react','MercuryThreadMetadataRawRenderer','TypeaheadViewItem','joinClasses','Keys'],(function a(b,c,d,e,f,g,h){var i=c('React').PropTypes,j=c('React').createClass({displayName:'MessagingRecipientTypeaheadItem',propTypes:babelHelpers['extends']({},c('TypeaheadViewItem').propTypes,{imageSize:i.number.isRequired}),mixins:[c('TypeaheadViewItem').Mixin],isThreadRecipient:function k(){return this.props.entry.getType()===c('ChatTypeaheadConstants').THREAD_TYPE;},_getImage:function k(){var l=this.props.entry;if(l.getType()===c('ChatTypeaheadConstants').THREAD_TYPE&&!l.getPhoto()){var m=l.getAuxiliaryData();return c('React').createElement(c('SplitImage.react'),{size:this.props.imageSize,srcs:m.participantsToRender.map(function(n){return n.image_src;})});}if(l.getPhoto())return c('React').createElement(c('BackgroundImage.react'),{width:this.props.imageSize,height:this.props.imageSize,backgroundSize:'cover',src:l.getPhoto()});return c('React').createElement('span',null);},_getThreadParticipantList:function k(){if(!this.isThreadRecipient())return null;var l=this.props.entry;return c('MercuryThreadMetadataRawRenderer').renderRawParticipantList(l.getUniqueID(),l.getAuxiliaryData().participantsToRender,l.getAuxiliaryData().thread.participants.length-1,{names_renderer:c('MercuryThreadMetadataRawRenderer').renderShortNames});},_getTitle:function k(){var l=this.props.entry;if(this.isThreadRecipient()&&!l.getTitle())return this._getThreadParticipantList();return l.getTitle();},_getSubtitle:function k(){var l=this.props.entry;if(this.isThreadRecipient()&&!l.getTitle())return this._getThreadParticipantList();return l.getSubtitle()?l.getSubtitle().split(' \u00b7 ')[0]:null;},_onKeyDown:function k(event){if(event.keyCode===c('Keys').SPACE||event.keyCode===c('Keys').RETURN){event.preventDefault();this._onSelect(event);}},render:function k(){var l=this._getSubtitle(),m=c('joinClasses')("_599m"+(' '+"_55xn")+(!l?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":''),this.props.className);return c('React').createElement('li',{'aria-selected':this.props.selected,className:m,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,onKeyDown:this._onKeyDown,role:this.props.role},c('React').createElement(c('ImageBlock.react'),{spacing:'medium'},this._getImage(),c('React').createElement(c('LeftRight.react'),null,c('React').createElement('div',null,c('React').createElement('div',{className:"_55xt _599p"},this._getTitle()),c('React').createElement('div',{className:"_55z3 _599q"},l)),this.props.children)));}});f.exports=j;}),null);
__d('MessagingRecipientSelectedList.react',['ix','cx','fbt','xuiglyph','Image.react','LeftRight.react','Map','MessagingRecipientTypeaheadItem.react','React'],(function a(b,c,d,e,f,g,h,i,j,k){var l,m,n=c('React').PropTypes;l=babelHelpers.inherits(o,c('React').Component);m=l&&l.prototype;function o(){var p,q;'use strict';for(var r=arguments.length,s=Array(r),t=0;t<r;t++)s[t]=arguments[t];return q=(p=m.constructor).call.apply(p,[this].concat(s)),this.$MessagingRecipientSelectedList1=function(u){var v=h("88982");return c('React').createElement(c('MessagingRecipientTypeaheadItem.react'),{key:u.getUniqueID(),entry:u,imageSize:24,onSelect:this.props.onSelect},c('React').createElement(c('Image.react'),{className:"_1jm4",src:v}));}.bind(this),q;}o.prototype.render=function(){'use strict';var p=j._("Enviar para:"),q=[];this.props.entries.forEach(function(r){return q.push(this.$MessagingRecipientSelectedList1(r));}.bind(this));return c('React').createElement('div',{className:"_1jm5"},c('React').createElement(c('LeftRight.react'),{className:"_1jm6 _2ph-"},c('React').createElement('span',null,p),c('React').createElement('span',null,this.props.entries.size)),c('React').createElement('ul',null,q));};o.propTypes={entries:n.instanceOf(c('Map')),onSelect:n.func.isRequired};f.exports=o;}),null);
__d('MessagingRecipientTypeaheadView.react',['cx','fbt','CenteredContainer.react','Link.react','Map','MessagingRecipientTypeaheadItem.react','React','TypeaheadViewPropTypes','XUISpinner.react'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes,m=32;j=babelHelpers.inherits(n,c('React').Component);k=j&&j.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.$MessagingRecipientTypeaheadView1=function(t){var u=t===this.props.highlightedEntry,v=this.props.selectedEntries.has(t.getUniqueID());return c('React').createElement(c('MessagingRecipientTypeaheadItem.react'),{key:t.getUniqueID(),entry:t,highlighted:u,imageSize:m,selected:v,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight},c('React').createElement(c('Link.react'),{'aria-checked':v,className:"_2i83"+(v?' '+"_2i85":'')+(!v?' '+"_2i86":''),href:'#',role:'checkbox',tabIndex:'0'}));}.bind(this),p;}n.prototype.render=function(){'use strict';if(this.props.entries.length===0&&!this.props.loading)return c('React').createElement(c('CenteredContainer.react'),{className:"_2pi1"},i._("Sem resultados"));return c('React').createElement('ul',{id:this.props.ariaOwneeID,className:"_51do",role:this.props.role},this.props.entries.map(this.$MessagingRecipientTypeaheadView1),c('React').createElement('div',{className:"_51dq"},this.props.loading?c('React').createElement(c('XUISpinner.react'),null):null));};n.propTypes=babelHelpers['extends']({},c('TypeaheadViewPropTypes'),{selectedEntries:l.instanceOf(c('Map')),loading:l.bool});n.defaultProps={role:'listbox'};f.exports=n;}),null);
__d('MessagingForwardAttachmentDialogImpl.react',['ix','cx','fbt','AsyncRequest','ChatSearchSource','Image.react','LayerFadeOnHide','Layout.react','Map','MercuryLocalIDs','MessageShareType','MessagingRecipientSelectedList.react','MessagingRecipientTypeaheadView.react','React','SearchableTextInput.react','ScrollableArea.react','XMessagingForwardAttachmentController','XMessengerPlatformShareCTAController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogCancelButton.react','XUIDialogFooter.react','XUIDialogTitle.react','XUISpinner.react','fbglyph','requireWeak'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k,l,m=c('Layout.react').Column,n=c('Layout.react').FillColumn,o=c('React').PropTypes;k=babelHelpers.inherits(p,c('React').Component);l=k&&k.prototype;function p(){var q,r;for(var s=arguments.length,t=Array(s),u=0;u<s;u++)t[u]=arguments[u];return r=(q=l.constructor).call.apply(q,[this].concat(t)),this.state={bootstrappedEntries:[],entries:[],loading:true,selectedEntries:new (c('Map'))(),sendError:null,sendErrorRecipientMap:null,sending:false,query:''},this.$MessagingForwardAttachmentDialog2=function(v){var w=v.getUniqueID(),x=new (c('Map'))(this.state.selectedEntries);if(x.has(w)){x['delete'](w);}else x.set(w,v);this.setState({selectedEntries:x,sendError:null,sendErrorRecipientMap:null});}.bind(this),this.$MessagingForwardAttachmentDialog3=function(v){var w=v.target.value;this.setState({loading:true,query:w});}.bind(this),this.$MessagingForwardAttachmentDialog4=function(v){this.setState({entries:v});}.bind(this),this.$MessagingForwardAttachmentDialog5=function(v){v===this.state.query&&this.setState({loading:false});}.bind(this),this.$MessagingForwardAttachmentDialog6=function(){var v={};if(this.state.sendError){v=this.state.sendErrorRecipientMap;}else this.state.selectedEntries.forEach(function(y){var z=c('MercuryLocalIDs').generateOfflineThreadingID();v[z]=y.getUniqueID();});var w=this.$MessagingForwardAttachmentDialog7.bind(this,v);if(this.props.shareType===c('MessageShareType').PLATFORM_SHARE_CTA){var x=c('XMessengerPlatformShareCTAController').getURIBuilder().getURI();new (c('AsyncRequest'))(x).setMethod('POST').setHandler(this.$MessagingForwardAttachmentDialog8).setErrorHandler(w).setData({cta_id:this.props.attachmentID,message_id:this.props.messageID,recipient_map:v}).send();}else{x=c('XMessagingForwardAttachmentController').getURIBuilder().getURI();new (c('AsyncRequest'))(x).setMethod('POST').setHandler(this.$MessagingForwardAttachmentDialog8).setErrorHandler(w).setData({attachment_id:this.props.attachmentID,recipient_map:v}).send();}this.setState({sending:true,sendError:null});}.bind(this),this.$MessagingForwardAttachmentDialog8=function(v){this.setState({bootstrappedEntries:[],selectedEntries:new (c('Map'))(),sending:false,query:''},this.props.onClose);}.bind(this),this.$MessagingForwardAttachmentDialog9=function(v){if(!v)this.props.onClose();}.bind(this),r;}p.prototype.componentWillMount=function(){this.$MessagingForwardAttachmentDialog1=new (c('ChatSearchSource'))({queryRequests:[{uri:'/ajax/mercury/composer_query.php'}]});};p.prototype.componentDidMount=function(){c('requireWeak')('OrderedFriendsList',function(q){return q.getSearchableEntries(20,function(r){this.setState({bootstrappedEntries:r,loading:false});}.bind(this));}.bind(this));};p.prototype.$MessagingForwardAttachmentDialog7=function(q,r){this.setState({sending:false,sendError:r.errorSummary,sendErrorRecipientMap:q});};p.prototype.render=function(){var q=j._("Enviar"),r=null;if(this.state.sending){r=c('React').createElement('div',null,c('React').createElement(c('XUISpinner.react'),null),c('React').createElement('span',{className:"_5s0d _3-99"},j._("A enviar")));}else if(this.state.sendError){var s=h("141787");r=c('React').createElement('div',{className:"_5s0d"},c('React').createElement(c('Image.react'),{src:s}),c('React').createElement('span',{className:"_3-99"},this.state.sendError));}var t=j._("Pesquisar pessoas e grupos");return c('React').createElement(c('XUIDialog.react'),{behaviors:{LayerFadeOnHide:c('LayerFadeOnHide')},hideOnEscape:true,onToggle:this.$MessagingForwardAttachmentDialog9,shown:this.props.shown,width:560},c('React').createElement(c('XUIDialogTitle.react'),null,this.props.title),c('React').createElement(c('XUIDialogBody.react'),{useCustomPadding:true},c('React').createElement(c('Layout.react'),null,c('React').createElement(m,{className:"_5s0e"},c('React').createElement('div',{className:"_2ph_"},c('React').createElement(c('SearchableTextInput.react'),{className:"_5s0f autofocus",onChange:this.$MessagingForwardAttachmentDialog3,onEntriesFound:this.$MessagingForwardAttachmentDialog4,placeholder:t,queryString:this.state.query,searchSource:this.$MessagingForwardAttachmentDialog1,searchSourceOptions:{onQueryFinished:this.$MessagingForwardAttachmentDialog5}})),c('React').createElement(c('ScrollableArea.react'),{className:"_5s0g",height:400,width:360},c('React').createElement(c('MessagingRecipientTypeaheadView.react'),{entries:this.state.query?this.state.entries:this.state.bootstrappedEntries,loading:this.state.loading,selectedEntries:this.state.selectedEntries,onSelect:this.$MessagingForwardAttachmentDialog2}))),c('React').createElement(n,{className:"_5s0h"},c('React').createElement(c('ScrollableArea.react'),{height:457,shadow:false},c('React').createElement(c('MessagingRecipientSelectedList.react'),{entries:this.state.selectedEntries,onSelect:this.$MessagingForwardAttachmentDialog2}))))),c('React').createElement(c('XUIDialogFooter.react'),{leftContent:r},c('React').createElement(c('XUIDialogCancelButton.react'),{onClick:this.props.onClose}),c('React').createElement(c('XUIDialogButton.react'),{use:'confirm',disabled:!this.state.selectedEntries.size||this.state.sending,label:q,onClick:this.$MessagingForwardAttachmentDialog6})));};p.propTypes={attachmentID:o.string.isRequired,messageID:o.string,onClose:o.func,shown:o.bool.isRequired,title:o.string.isRequired,shareType:o.string};p.defaultProps={shareType:c('MessageShareType').IMAGE};f.exports=p;}),null);
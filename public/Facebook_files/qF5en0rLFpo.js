if (self.CavalryLogger) { CavalryLogger.start_js(["GSP6a"]); }

__d('P2PPaymentRequest',['P2PPaymentRequestStatus','immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=Math.round(Date.now()/1000);h=babelHelpers.inherits(k,c('immutable').Record({amount:'',amountWithSymbol:'',creationTime:j,currency:'',currentStatus:c('P2PPaymentRequestStatus').INITED,groupThreadFBID:'',id:'',individualRequests:[],memoText:'',requestee:{},requester:{},statusDescription:'',transfer:{},transferID:'',updatedTime:j}));i=h&&h.prototype;function k(){h.apply(this,arguments);}f.exports=k;}),null);
__d('P2PPaymentRequestsStore',['P2PActionConstants','Arbiter','ChannelConstants','CurrentUser','EventEmitter','immutable','ImmutableObject','P2PActions','P2PAPI','P2PChannelType','P2PDispatcher','P2PPaymentRequest','P2PPaymentRequestStatus'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('immutable').List,k=null,l=false,m=null,n=false,o=null,p=j(),q=false,r=false;h=babelHelpers.inherits(s,c('EventEmitter'));i=h&&h.prototype;function s(){i.constructor.call(this);c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').PAYMENT_REQUEST_STATUS_CHANGED),this.handleChannelPaymentRequestStatusChanged.bind(this));c('P2PDispatcher').register(this.onEventDispatched.bind(this));}s.prototype.onEventDispatched=function(t){var u=t.data,v=t.type;switch(v){case c('P2PActionConstants').PAYMENT_REQUEST_INITIATED:q=true;o=null;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_INITIATED_COMPLETE:q=false;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CREATED:this.handlePaymentRequestCreated(u);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CREATED_ERROR:o=new (c('ImmutableObject'))(u.error);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_UPDATED:this.handlePaymentRequestUpdated(u);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_DECLINE_INITIATED:n=true;m=null;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_DECLINED:n=false;m=null;this.handlePaymentRequestDeclined(u);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_DECLINE_ERROR:n=false;m=new (c('ImmutableObject'))(u.error);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CANCEL_INITIATED:l=true;k=null;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CANCELED:l=false;k=null;this.handlePaymentRequestCanceled(u);this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUEST_CANCEL_ERROR:l=false;k=new (c('ImmutableObject'))(u.error);this.emit('change');break;case c('P2PActionConstants').DIALOG_CLOSED:m=null;this.emit('change');break;case c('P2PActionConstants').PAYMENT_REQUESTS_FETCHED:this.handlePaymentRequestsFetched(u);this.emit('change');break;}};s.prototype.handlePaymentRequestCreated=function(t){var u=p.toArray();u.push(new (c('P2PPaymentRequest'))(t));u.sort(function(v,w){return v.creationTime-w.creationTime;});p=j(u);};s.prototype.handlePaymentRequestUpdated=function(t){if(t.groupRequestID)this.updateIndividualRequest(t);delete t.groupRequestID;this.updateRequest(t.id,t);};s.prototype.handlePaymentRequestDeclined=function(t){this.updateRequest(t,{currentStatus:c('P2PPaymentRequestStatus').DECLINED});};s.prototype.handlePaymentRequestCanceled=function(t){this.updateRequest(t,{currentStatus:c('P2PPaymentRequestStatus').CANCELED});};s.prototype.handleChannelPaymentRequestStatusChanged=function(t,u){var v=u.obj;c('P2PActions').paymentRequestUpdated({id:v.id,currentStatus:v.current_status,groupRequestID:v.group_request_id,transfer:v.transfer});};s.prototype.handlePaymentRequestsFetched=function(t){this.$P2PPaymentRequestsStore1(t);};s.prototype.$P2PPaymentRequestsStore1=function(t){t=t.sort(function(v,w){return v.creationTime-w.creationTime;});t.forEach(function(v,w){if(!this.getPaymentRequestByID(v.id))p=p.push(new (c('P2PPaymentRequest'))(v));}.bind(this));var u=p.toArray();u.sort(function(v,w){return v.creationTime-w.creationTime;});p=j(u);};s.prototype.isPaymentRequestInitiated=function(){return q;};s.prototype.isPaymentRequestDeclining=function(){return n;};s.prototype.isPaymentRequestCanceling=function(){return l;};s.prototype.getPaymentRequestByID=function(t){return p.find(function(u){return t===u.id;});};s.prototype.getPaymentRequestError=function(){return o;};s.prototype.getPaymentRequestDeclineError=function(){return m;};s.prototype.getPaymentRequestCancelError=function(){return k;};s.prototype.getPendingPaymentRequest=function(){if(!r){r=true;c('P2PAPI').getPendingPaymentRequests();}return p.filter(function(t){return t.requestee.id===c('CurrentUser').getID()&&t.currentStatus===c('P2PPaymentRequestStatus').INITED;}).last();};s.prototype.updateRequest=function(t,u){p.forEach(function(v,w){if(t===v.id)p=p.set(w,v.merge(v,u));});};s.prototype.updateIndividualRequest=function(t){var u=t.id,v=t.groupRequestID,w=p.findIndex(function(ca){return v===ca.id;}),x=p.get(w),y=x.individualRequests.findIndex(function(ca){return u===ca.id;}),z=x.individualRequests.slice(0),aa=z[y],ba=babelHelpers['extends']({},aa,t);z[y]=ba;x=x.set('individualRequests',z);p=p.set(w,x);};s.prototype.getPaymentRequests=function(){return p;};f.exports=new s();}),null);
__d('P2PSimpleDialog.react',['fbt','FBPaymentsErrorNotice_DEPRECATED.react','P2PButton.react','P2PDialog.react','P2PDialogBody.react','P2PDialogFooter.react','P2PDialogTitle.react','P2PLoadingMask.react','React'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.handleToggle=function(r){if(!r)this.props.onCancel();}.bind(this),n;}l.prototype.render=function(){var m=void 0;if(this.props.error)m=c('React').createElement(c('FBPaymentsErrorNotice_DEPRECATED.react'),{error:this.props.error});return c('React').createElement(c('P2PDialog.react'),{behaviors:this.props.behaviors,layerHideOnBlur:false,onToggle:this.handleToggle,repositionOnUpdate:true,shown:true,width:this.props.width},c('React').createElement(c('P2PDialogTitle.react'),null,this.props.title),c('React').createElement(c('P2PDialogBody.react'),null,m,this.props.bodyText,c('React').createElement(c('P2PLoadingMask.react'),{visible:this.props.loading})),c('React').createElement(c('P2PDialogFooter.react'),null,c('React').createElement(c('P2PButton.react'),{disabled:this.props.loading,label:this.props.cancelButtonText,onClick:this.props.onCancel,size:'medium'}),c('React').createElement(c('P2PButton.react'),{disabled:this.props.loading,label:this.props.confirmButtonText,onClick:this.props.onConfirm,size:'medium',use:'confirm'})));};l.propTypes={bodyText:k.string.isRequired,cancelButtonText:k.string,confirmButtonText:k.string,error:k.object,loading:k.bool,onCancel:k.func.isRequired,onConfirm:k.func.isRequired,title:k.string.isRequired,width:k.number};l.defaultProps={cancelButtonText:h._("Cancelar"),confirmButtonText:h._("Confirmar"),width:300};f.exports=l;}),null);
__d('P2PPaymentRequestCancelDialogContainer.react',['fbt','P2PActions','P2PAPI','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPaymentRequest','P2PPaymentRequestsStore','P2PSimpleDialog.react','React','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PPaymentRequestCancelDialogContainer',mixins:[c('StoreAndPropBasedStateMixin')(c('P2PPaymentRequestsStore'))],propTypes:{paymentRequest:i.instanceOf(c('P2PPaymentRequest')).isRequired},statics:{calculateState:function k(l){return {error:c('P2PPaymentRequestsStore').getPaymentRequestCancelError(),loading:c('P2PPaymentRequestsStore').isPaymentRequestCanceling()};}},log:function k(l,m){c('P2PLogger').log(l,{www_event_flow:c('P2PPaymentLoggerEventFlow').UI_FLOW_P2P_REQUEST,request_id:this.props.paymentRequest.id});},componentDidMount:function k(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_INITIATE_CANCEL_REQUEST);},handleCancel:function k(){c('P2PActions').hideDialog();},handleConfirm:function k(){c('P2PAPI').cancelPaymentRequest({error:function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CANCEL_REQUEST_FAIL);}.bind(this),paymentRequestID:this.props.paymentRequest.id,success:function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CANCEL_REQUEST_SUCCESS);}.bind(this)});this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CONFIRM_CANCEL_REQUEST);},renderBodyText:function k(){var l=this.props.paymentRequest.requestee.name;return h._("{Name of requestee} vai receber uma notifica\u00e7\u00e3o a informar que o pedido foi cancelado.",[h.param('Name of requestee',l)]);},render:function k(){return c('React').createElement(c('P2PSimpleDialog.react'),{bodyText:this.renderBodyText(),error:this.state.error,loading:this.state.loading,cancelButtonText:h._("Retroceder"),confirmButtonText:h._("Cancelar"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,title:h._("Cancelar pedido?")});}});f.exports=j;}),null);
__d('P2PPaymentRequestDeclineDialogContainer.react',['fbt','P2PActions','P2PAPI','P2PLogger','P2PPaymentLoggerEvent','P2PPaymentLoggerEventFlow','P2PPaymentRequest','P2PPaymentRequestsStore','P2PSimpleDialog.react','React','StoreAndPropBasedStateMixin'],(function a(b,c,d,e,f,g,h){'use strict';var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PPaymentRequestDeclineDialogContainer',mixins:[c('StoreAndPropBasedStateMixin')(c('P2PPaymentRequestsStore'))],propTypes:{paymentRequest:i.instanceOf(c('P2PPaymentRequest')).isRequired},statics:{calculateState:function k(l){return {error:c('P2PPaymentRequestsStore').getPaymentRequestDeclineError(),loading:c('P2PPaymentRequestsStore').isPaymentRequestDeclining()};}},log:function k(l,m){c('P2PLogger').log(l,{www_event_flow:c('P2PPaymentLoggerEventFlow').UI_FLOW_P2P_REQUEST,request_id:this.props.paymentRequest.id});},componentDidMount:function k(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_INITIATE_DECLINE_REQUEST);},handleCancel:function k(){c('P2PActions').hideDialog();},handleConfirm:function k(){c('P2PAPI').declinePaymentRequest({error:function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_DECLINE_REQUEST_FAIL);}.bind(this),paymentRequestID:this.props.paymentRequest.id,success:function(){this.log(c('P2PPaymentLoggerEvent').UI_ACTN_DECLINE_REQUEST_SUCCESS);}.bind(this)});this.log(c('P2PPaymentLoggerEvent').UI_ACTN_CONFIRM_DECLINE_REQUEST);},renderBodyText:function k(){var l=this.props.paymentRequest.requester.name;return h._("{Name of requester} vai receber uma notifica\u00e7\u00e3o de que o pedido foi recusado.",[h.param('Name of requester',l)]);},render:function k(){return c('React').createElement(c('P2PSimpleDialog.react'),{bodyText:this.renderBodyText(),error:this.state.error,loading:this.state.loading,cancelButtonText:h._("Retroceder"),confirmButtonText:h._("Recusar"),onCancel:this.handleCancel,onConfirm:this.handleConfirm,title:h._("Recusar pedido?")});}});f.exports=j;}),null);
__d('P2PPaymentRequestActionHelper',['fbt','MercuryIDs','P2PActions','P2PPaymentRequest','P2PPaymentRequestCancelDialogContainer.react','P2PPaymentRequestStatus','P2PPaymentRequestDeclineDialogContainer.react','P2PTransferParam','P2PTransferStatus'],(function a(b,c,d,e,f,g,h){'use strict';var i=function k(l){switch(l){case c('P2PTransferStatus').CANCELED_DECLINED:return c('P2PPaymentRequestStatus').DECLINED;case c('P2PTransferStatus').CANCELED_EXPIRED:return c('P2PPaymentRequestStatus').EXPIRED;case c('P2PTransferStatus').CANCELED_RECIPIENT_RISK:case c('P2PTransferStatus').CANCELED_SAME_CARD:case c('P2PTransferStatus').CANCELED_SENDER_RISK:case c('P2PTransferStatus').CANCELED_SYSTEM_FAIL:return c('P2PPaymentRequestStatus').CANCELED;case c('P2PTransferStatus').COMPLETED:return c('P2PPaymentRequestStatus').TRANSFER_COMPLETED;case c('P2PTransferStatus').INTERMEDIATE_PROCESSING:case c('P2PTransferStatus').PENDING_PUSH_FAIL:case c('P2PTransferStatus').PENDING_SENDER_INITED:case c('P2PTransferStatus').PENDING_RECIPIENT_NUX:case c('P2PTransferStatus').PENDING_SENDER_VERIFICATION:case c('P2PTransferStatus').PENDING_SENDER_MANUAL_REVIEW:case c('P2PTransferStatus').PENDING_RECIPIENT_PROCESSING:case c('P2PTransferStatus').PENDING_RECIPIENT_VERIFICATION:case c('P2PTransferStatus').PENDING_RECIPIENT_MANUAL_REVIEW:case c('P2PTransferStatus').PENDING_SENDER_VERIFICATION_PROCESSING:case c('P2PTransferStatus').PENDING_RECIPIENT_VERIFICATION_PROCESSING:default:return c('P2PPaymentRequestStatus').TRANSFER_INITED;}},j={initDeclinePaymentRequestFlow:function k(l){c('P2PActions').showDialog(c('P2PPaymentRequestDeclineDialogContainer.react'),{paymentRequest:l});},initPayForPaymentRequestFlow:function k(l,m){var n=[],o=l.groupThreadFBID,p=void 0;if(o){n.push(l.requester.id);p=c('MercuryIDs').getThreadIDFromThreadFBID(o);}else p=c('MercuryIDs').getThreadIDFromUserID(l.requester.id);c('P2PActions').chatSendViewOpened({amount:l.amount,memoText:l.memoText,paymentRequestID:l.id,threadID:p,useModal:true,referrer:m,groupSendRecipientUserIDs:n,groupThreadFBID:o});},initCancelPaymentRequestFlow:function k(l){c('P2PActions').showDialog(c('P2PPaymentRequestCancelDialogContainer.react'),{paymentRequest:l});},getPaymentRequest:function k(l){return new (c('P2PPaymentRequest'))({amount:l.amount,amountWithSymbol:l.amountWithSymbol,creationTime:l.creationTime,currency:l.currency,currentStatus:i(l[c('P2PTransferParam').STATUS]),groupThreadFBID:l.groupThreadFBID,individualRequests:[],memoText:l.memoText,requestee:l.sender,requester:l.receiver,statusDescription:l.statusDescription,trnasfer:l,transferID:l[c('P2PTransferParam').TRANSFER_ID],updatedTime:l.updatedTime});},getStatusText:function k(l){var m=l.currentStatus,n=h._("Cancelado"),o=h._("Pago"),p=h._("Recusado"),q=h._("Pendente"),r=void 0;switch(m){case c('P2PPaymentRequestStatus').DECLINED:r=p;break;case c('P2PPaymentRequestStatus').CANCELED:case c('P2PPaymentRequestStatus').TRANSFER_FAILED:r=n;break;case c('P2PPaymentRequestStatus').TRANSFER_COMPLETED:r=o;break;default:r=q;break;}return r;}};f.exports=j;}),null);
__d('P2PAcceptMoneyDialog.react',['cx','BootloadedComponent.react','Bootloader','MessengerEnvironment','P2PDialog.react','P2PLoadingMask.react','JSResource','React','Run'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('React').PropTypes,l=c('MessengerEnvironment').messengerui;i=babelHelpers.inherits(m,c('React').Component);j=i&&i.prototype;function m(){var n,o;for(var p=arguments.length,q=Array(p),r=0;r<p;r++)q[r]=arguments[r];return o=(n=j.constructor).call.apply(n,[this].concat(q)),this.$P2PAcceptMoneyDialog1=function(){return c('React').createElement(c('P2PDialog.react'),{className:"_309"+(l?' '+"_5ktw":''),layerHideOnBlur:false,repositionOnUpdate:true,shown:true,width:l?400:350},c('React').createElement('div',{className:"_3w2b"},c('React').createElement(c('P2PLoadingMask.react'),{visible:true})));},o;}m.preload=function(){c('Run').onAfterLoad(function(){c('Bootloader').loadModules(["P2PAcceptMoneyDialogImpl.react"],function(){},'P2PAcceptMoneyDialog.react');});};m.prototype.render=function(){return c('React').createElement(c('BootloadedComponent.react'),babelHelpers['extends']({bootloadLoader:c('JSResource')('P2PAcceptMoneyDialogImpl.react').__setRef('P2PAcceptMoneyDialog.react'),bootloadPlaceholder:this.$P2PAcceptMoneyDialog1()},this.props));};m.propTypes={creditCards:k.array.isRequired,useRedesignForm:k.bool,onClose:k.func,transfer:k.object};f.exports=m;}),null);
__d('P2PVerificationFlowHelper',['AsyncDialog','AsyncRequest','P2PAPI','P2PTransferParam','emptyFunction'],(function a(b,c,d,e,f,g){var h=null,i=null,j=null,k={startVerificationFlow:function l(m,n,o){h=m;i=n;j=o||c('emptyFunction');c('AsyncDialog').send(new (c('AsyncRequest'))('/p2p/verify/dialog/?id='+m));},setupFlowExitHandler:function l(m,n,o,p){var q=function t(u){j(u);h=null;i=null;j=null;m.destroy();n.destroy();};if(o){m.subscribe('hide',function(){q(p);});}else{var r=false,s=false;m.subscribe('confirm',function(){r=true;});m.subscribe('hide',function(){if(r){m.destroy();n.destroy();}else if(i){n.show();}else q(false);});n.subscribe('confirm',function(){s=true;var t={};t[c('P2PTransferParam').TRANSFER_ID]=h;c('P2PAPI').cancelTransaction({formData:t});q(false);});n.subscribe('hide',function(){if(!s)m.show();});}}};f.exports=k;}),null);
__d("MessengerPaymentProductType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({P2P:"p2p",PAGES_COMMERCE:"pages_commerce",NMOR_PAGES_COMMERCE:"nmor_pages_commerce",MESSENGER_COMMERCE:"messenger_commerce"});}),null);
__d('P2PCreditCardStore',['P2PActionConstants','Arbiter','CreditCardFormParam','ChannelConstants','EventEmitter','ImmutableObject','MessengerPaymentProductType','P2PActions','P2PAPI','P2PChannelType','P2PCreditCard','P2PDispatcher'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=void 0,k=void 0,l=void 0,m=void 0,n=void 0,o=void 0,p=null,q=false,r=false;function s(v,w){if(v)o[v]=new (c('ImmutableObject'))(w);}function t(v,w){p=w;if(v)o[v]={error:w};}h=babelHelpers.inherits(u,c('EventEmitter'));i=h&&h.prototype;function u(){i.constructor.call(this);l=false;m=false;j=[];n=true;o={};k=c('P2PDispatcher').register(this.onEventDispatched.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').CREDIT_CARD_CHANGED),this.handleChannelCreditCardChanged.bind(this));c('Arbiter').subscribe(c('ChannelConstants').getArbiterType(c('P2PChannelType').CREDIT_CARD_DELETED),this.handleChannelCreditCardDeleted.bind(this));}u.prototype.onEventDispatched=function(v){var w=v.data,x=v.type;switch(x){case c('P2PActionConstants').CREDIT_CARD_SAVING:this.handleCreditCardSaving();this.emit('change');break;case c('P2PActionConstants').CREDIT_CARDS_UPDATED:this.handleCreditCardsUpdated(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARDS_UPDATED_ERROR:this.handleCreditCardsUpdatedError();this.emit('change');break;case c('P2PActionConstants').CHANNEL_EVENTS_ALLOWED:this.handleChannelEventsAllowed();break;case c('P2PActionConstants').CHANNEL_EVENTS_IGNORED:this.handleChannelEventsIgnored();break;case c('P2PActionConstants').CREDIT_CARD_ADDED:this.handleCreditCardAdded(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_ADDED_ERROR:this.handleCreditCardAddedError(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_ADDED_ERROR_CLEARED:this.handleCreditCardAddedErrorCleared();this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_DELETED:this.handleCreditCardDeleted(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_DELETED_ERROR:this.handleCreditCardDeletedError(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_UPDATED:this.handleCreditCardUpdated(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_UPDATED_ERROR:this.handleCreditCardUpdatedError(w);this.emit('change');break;case c('P2PActionConstants').PRESET_CREDIT_CARD_UPDATED:this.handlePresetCreditCardUpdated(w);this.emit('change');break;case c('P2PActionConstants').PRESET_CREDIT_CARD_UPDATED_ERROR:this.handlePresetCreditCardUpdatedError(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_VERIFIED:this.handleCreditCardVerified(w);this.emit('change');break;case c('P2PActionConstants').CREDIT_CARD_VERIFIED_ERROR:this.handleCreditCardVerifiedError(w);this.emit('change');break;case c('P2PActionConstants').BIN_NUMBER_VALIDATED:this.handleBINNumberValidated(w);this.emit('change');break;case c('P2PActionConstants').BIN_NUMBER_VALIDATED_ERROR:this.handleBINNumberValidatedError(w);this.emit('change');break;}};u.prototype.handleCreditCardSaving=function(){q=true;p=null;};u.prototype.getAsyncRequestState=function(){return o;};u.prototype.isCreditCardsFetchComplete=function(){return l;};u.prototype.handleCreditCardsUpdated=function(v){l=true;r=false;j=v.map(function(w){return new (c('P2PCreditCard'))(w);});};u.prototype.handleCreditCardsUpdatedError=function(){l=true;r=true;};u.prototype.handleCreditCardAdded=function(v){q=false;s(v.requestID,v);if(!this.getCreditCardByCredentialID(v[c('CreditCardFormParam').CREDENTIAL_ID]))j.push(new (c('P2PCreditCard'))(v));};u.prototype.handleChannelEventsIgnored=function(){n=false;};u.prototype.handleChannelEventsAllowed=function(){n=true;};u.prototype.handleChannelCreditCardChanged=function(v,w){if(n&&!this.getCreditCardByCredentialID(w[c('CreditCardFormParam').CREDENTIAL_ID]))c('P2PAPI').getAllCreditCards();};u.prototype.handleCreditCardAddedError=function(v){q=false;t(v.requestID,v.errors);};u.prototype.handleCreditCardAddedErrorCleared=function(){p=null;};u.prototype.handleCreditCardDeleted=function(v){var w=v[c('CreditCardFormParam').CREDENTIAL_ID];s(v.requestID,v);j=j.filter(function(x){return x.getCredentialId()!==w;});};u.prototype.handleChannelCreditCardDeleted=function(v,w){w=w.obj;c('P2PActions').deleteCreditCard(w);};u.prototype.handleCreditCardDeletedError=function(v){t(v.requestID,v.error);};u.prototype.handleCreditCardUpdated=function(v){s(v.requestID,v);var w=this.getCreditCardByCredentialID(v[c('CreditCardFormParam').CREDENTIAL_ID]);if(w){w.setExp(v[c('CreditCardFormParam').CARD_EXPIRATION]);w.setZipCode(v[c('CreditCardFormParam').ZIP]);}};u.prototype.handleCreditCardUpdatedError=function(v){t(v.requestID,v.errors);};u.prototype.handlePresetCreditCardUpdated=function(v){var w=v[c('CreditCardFormParam').CREDENTIAL_ID];s(v.requestID,v);var x=j.filter(function(z){return z.getIsPreset();})[0];if(x)x.setIsPreset(false);var y=this.getCreditCardByCredentialID(w);if(y)y.setIsPreset(true);};u.prototype.handlePresetCreditCardUpdatedError=function(v){t(v.requestID,v.error);};u.prototype.handleCreditCardVerified=function(v){s(v.requestID,v);var w=this.getCreditCardByCredentialID(v[c('CreditCardFormParam').CREDENTIAL_ID]);if(w)w.setIsVerified(true);};u.prototype.handleCreditCardVerifiedError=function(v){t(v.requestID,v.error);};u.prototype.handleBINNumberValidated=function(v){s(v.requestID,v);};u.prototype.handleBINNumberValidatedError=function(v){t(v.requestID,v.error);};u.prototype.getAll=function(v){v=v===undefined?c('MessengerPaymentProductType').P2P:v;if(!m){m=true;c('P2PAPI').getAllCreditCards();}return j.filter(function(w){if(v===c('MessengerPaymentProductType').P2P)return w.getIsPersonalTransferEligible();return w;});};u.prototype.getCreditCardByCredentialID=function(v){return j.filter(function(w){return w.getCredentialId()===v;})[0];};u.prototype.getDispatchToken=function(){return k;};u.prototype.getSaveErrors=function(){return p;};u.prototype.isSaving=function(){return q;};u.prototype.failedCreditCardFetch=function(){return r;};f.exports=new u();}),null);
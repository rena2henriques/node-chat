if (self.CavalryLogger) { CavalryLogger.start_js(["cf\/Ki"]); }

__d('MentionsInputTypeaheadView.react',['cx','MentionsTypeaheadViewItem.react','React'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;function l(){var m,n;'use strict';for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=j.constructor).call.apply(m,[this].concat(p)),this.$MentionsInputTypeaheadView1=function(r){var s=r===this.props.highlightedEntry;return c('React').createElement(c('MentionsTypeaheadViewItem.react'),{key:r.getUniqueID(),entry:r,highlighted:s,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight});}.bind(this),n;}l.prototype.render=function(){'use strict';var m="_5u8_"+(!this.props.entries.length?' '+"_5u90":'');return c('React').createElement('ul',{className:m,role:'listbox',id:this.props.id},this.props.entries.map(this.$MentionsInputTypeaheadView1));};l.propTypes={id:k.string,highlightedEntry:k.object,entries:k.array.isRequired,onSelect:k.func.isRequired,onHighlight:k.func,onRenderHighlight:k.func};f.exports=l;}),null);
__d("MultilingualPostStrings",["fbt"],(function a(b,c,d,e,f,g,h){var i={DELETE:h._("Eliminar"),EDIT:h._("Editar"),EDIT_POST:h._("Editar publica\u00e7\u00e3o"),REMOVE:h._("Eliminar"),CANCEL:h._("Cancelar"),WRITE_IN_ANOTHER_LANGUAGE:h._("Escrever noutro idioma"),WRITE_IN_NEW_LANGUAGE:h._("Escreve num idioma novo"),WRITE_POST_IN_ANOTHER_LANGUAGE:h._("Escrever publica\u00e7\u00e3o noutro idioma"),POST_IN_MULTIPLE_LANGUAGES:h._("Publicar em v\u00e1rios idiomas"),MULTILINGUAL_POSTS_DESCRIPTION:h._("A tua publica\u00e7\u00e3o vai ser mostrada aos teus seguidores no idioma mais relevante para eles. Os coment\u00e1rios e gostos v\u00e3o ser adicionados \u00e0 mesma publica\u00e7\u00e3o."),LINK_TO_MULTILINGUAL_SETTINGS:h._("Desativa esta op\u00e7\u00e3o."),MULTILINGUAL_COMPOSER_NUX:h._("Alcan\u00e7a o teu p\u00fablico numa l\u00edngua que compreendam."),DROPDOWN_PLACEHOLDER:h._("Escreve para pesquisar"),getEditPostInLanguage:function j(k){return h._("Editar publica\u00e7\u00e3o - {language name}",[h.param("language name",k)]);},getViewingLanguage:function j(k){return h._("A ver: {language name}",[h.param("language name",k)]);},getDefaultLanguage:function j(k){return h._("Predefini\u00e7\u00e3o: {language switcher}",[h.param("language switcher",k)]);},getSelectLanguage:function j(k){return h._("Idioma: {language switcher}",[h.param("language switcher",k)]);},getAuthorTranslationPlaceholder:function j(k){if(!k)return this.WRITE_IN_ANOTHER_LANGUAGE;return h._("Escreve em {language name}...",[h.param("language name",k)]);}};f.exports=i;}),null);
__d('LtgLanguageDialectDropdown.react',['fbt','Map','MultilingualPostStrings','PopoverMenu.react','React','ReactXUIMenu','Set','MenuSeparator.react'],(function a(b,c,d,e,f,g,h){'use strict';var i,j,k=c('ReactXUIMenu').Item,l=c('ReactXUIMenu').SelectableItem,m=c('ReactXUIMenu').SelectableMenu,n=' \u25BE',o='xx_XX';i=babelHelpers.inherits(p,c('React').Component);j=i&&i.prototype;function p(q){j.constructor.call(this,q);this.state={selectedDialect:this.props.initialDialect};}p.prototype.componentWillMount=function(){this.$LtgLanguageDialectDropdown1=this.props.dialectToNamesMap;if(this.props.dialectsToOverride)this.props.dialectsToOverride.forEach(function(q,r){this.$LtgLanguageDialectDropdown1.set(r,q);}.bind(this));};p.prototype.$LtgLanguageDialectDropdown2=function(){var q=[],r=this.props.dialectsToInclude.size>0?this.props.dialectsToInclude:new (c('Set'))(this.$LtgLanguageDialectDropdown1?this.$LtgLanguageDialectDropdown1.keys():[]);r.forEach(function(s){if(this.props.dialectsToExclude.has(s))return;var t=this.$LtgLanguageDialectDropdown1?this.$LtgLanguageDialectDropdown1.get(s):'';q.push(c('React').createElement(l,{key:s,selected:s===this.state.selectedDialect,value:s},t));}.bind(this));return q;};p.prototype.$LtgLanguageDialectDropdown3=function(){var q=[];if(this.props.onAdd)q.push(c('React').createElement(k,{key:'MLC_ADD',onclick:this.props.onAdd},c('MultilingualPostStrings').WRITE_IN_ANOTHER_LANGUAGE));if(q.length>0)q.unshift(c('React').createElement(c('MenuSeparator.react'),{key:'MLC_DIVIDER'}));return q;};p.prototype.$LtgLanguageDialectDropdown4=function(q){this.setState({selectedDialect:q});this.props.onSelect(q);};p.prototype.$LtgLanguageDialectDropdown5=function(){return h._("Mostrar idiomas dispon\u00edveis");};p.prototype.render=function(){var q=h._("Selecionar"),r=this.$LtgLanguageDialectDropdown1.get(this.state.selectedDialect)||q,s=this.$LtgLanguageDialectDropdown2().concat(this.$LtgLanguageDialectDropdown3()),t=function(v,w){return this.$LtgLanguageDialectDropdown4(w.item.getValue());}.bind(this),u=c('React').createElement(m,{maxheight:this.props.maxheight,onChange:t},s);return c('React').createElement(c('PopoverMenu.react'),{alignv:'baseline',className:this.props.className,menu:u},c('React').createElement('a',{title:this.$LtgLanguageDialectDropdown5()},r,n));};p.defaultProps={dialectsToOverride:new (c('Map'))(),dialectsToExclude:new (c('Set'))(),dialectsToInclude:new (c('Set'))(),initialDialect:o,maxheight:230};f.exports=p;}),null);
__d('MultilingualPostsHelpLink.react',['cx','ContextualLayerAutoFlip','LayerFadeOnHide','LayerFadeOnShow','MultilingualPostStrings','PageSettingsRef','React','XPagesManagerSettingsController','Link.react','XUIContextualDialog.react','XUIContextualDialogTitle.react','XUIContextualDialogBody.react','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j,k=c('React').PropTypes;i=babelHelpers.inherits(l,c('React').Component);j=i&&i.prototype;l.prototype.render=function(){'use strict';return c('React').createElement('span',null,c('React').createElement(c('Link.react'),{className:c('joinClasses')("uiHelpLink",this.props.className),ref:'link'}),this.renderLayers());};l.prototype.renderLayers=function(){'use strict';var m=null;if(this.props.showSettingsLink&&this.props.pageID!==''){var n=c('XPagesManagerSettingsController').getURIBuilder().setString('page_token',this.props.pageID).setString('tab','settings').setString('section','multilingual_composer').setString('ref',c('PageSettingsRef').SUPPORT).getURI();m=c('React').createElement('div',null,c('React').createElement(c('Link.react'),{href:n},c('MultilingualPostStrings').LINK_TO_MULTILINGUAL_SETTINGS));}return c('React').createElement(c('XUIContextualDialog.react'),{behaviors:{ContextualLayerAutoFlip:c('ContextualLayerAutoFlip'),LayerFadeOnHide:c('LayerFadeOnHide'),LayerFadeOnShow:c('LayerFadeOnShow')},contextRef:function(){return this.refs.link;}.bind(this),hasActionableContent:this.props.showSettingsLink,hoverContextRef:function(){return this.refs.link;}.bind(this),hoverHideDelay:200,hoverShowDelay:200,position:'left',width:c('XUIContextualDialog.react').WIDTH.NORMAL,key:'contextualDialog'},c('React').createElement(c('XUIContextualDialogTitle.react'),null,c('MultilingualPostStrings').POST_IN_MULTIPLE_LANGUAGES),c('React').createElement(c('XUIContextualDialogBody.react'),null,c('MultilingualPostStrings').MULTILINGUAL_POSTS_DESCRIPTION,m));};function l(){'use strict';i.apply(this,arguments);}l.propTypes={pageID:k.string.isRequired,showSettingsLink:k.bool.isRequired};l.defaultProps={pageID:'',showSettingsLink:false};f.exports=l;}),null);
__d('LtgMultilingualComposerActionsTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:LtgMultilingualComposerActionsLoggerConfig',this.$LtgMultilingualComposerActionsTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:LtgMultilingualComposerActionsLoggerConfig',this.$LtgMultilingualComposerActionsTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$LtgMultilingualComposerActionsTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$LtgMultilingualComposerActionsTypedLogger1=babelHelpers['extends']({},this.$LtgMultilingualComposerActionsTypedLogger1,j);return this;};h.prototype.setAction=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.action=j;return this;};h.prototype.setActiveDialect=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.active_dialect=j;return this;};h.prototype.setActorID=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.actor_id=j;return this;};h.prototype.setAllSelectedDialects=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.all_selected_dialects=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setAuthorTranslationIsEmpty=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.author_translation_is_empty=j;return this;};h.prototype.setComposerType=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.composer_type=j;return this;};h.prototype.setFbid=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.fbid=j;return this;};h.prototype.setIsPublished=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.is_published=j;return this;};h.prototype.setOriginalPostDialect=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.original_post_dialect=j;return this;};h.prototype.setOriginalPostIsEmpty=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.original_post_is_empty=j;return this;};h.prototype.setSessionID=function(j){this.$LtgMultilingualComposerActionsTypedLogger1.session_id=j;return this;};var i={action:true,active_dialect:true,actor_id:true,all_selected_dialects:true,author_translation_is_empty:true,composer_type:true,fbid:true,is_published:true,original_post_dialect:true,original_post_is_empty:true,session_id:true};f.exports=h;}),null);
__d('LanguageDialectSets',['LtgLanguageDialectRawSets','Map','Set'],(function a(b,c,d,e,f,g){h.prototype.getTranslationSupportedDialects=function(){'use strict';return new (c('Set'))(c('LtgLanguageDialectRawSets').TRANSLATION_SUPPORTED_DIALECTS);};h.prototype.getTranslationSupportedTargetDialects=function(){'use strict';return new (c('Set'))(c('LtgLanguageDialectRawSets').TRANSLATION_SUPPORTED_TARGET_DIALECTS);};h.prototype.getTranslationSupportedSourceDialects=function(){'use strict';return new (c('Set'))(c('LtgLanguageDialectRawSets').TRANSLATION_SUPPORTED_SOURCE_DIALECTS);};h.prototype.getMultilingualDialectsToExclude=function(){'use strict';return new (c('Set'))(c('LtgLanguageDialectRawSets').MULTILINGUAL_DIALECTS_EXCLUDE);};h.prototype.getMultilingualDialectsToInclude=function(){'use strict';return new (c('Set'))(c('LtgLanguageDialectRawSets').MULTILINGUAL_DIALECTS_INCLUDE);};h.prototype.getUniqueParentDialects=function(){'use strict';return new (c('Map'))(Object.entries(c('LtgLanguageDialectRawSets').UNIQUE_PARENT_DIALECTS));};function h(){'use strict';}f.exports=new h();}),null);
__d('AbstractLanguageDialectNames',['LanguageDialectSets','Map','Set'],(function a(b,c,d,e,f,g){h.prototype.getDialectNames=function(){'use strict';return this.dialectToNames;};h.prototype.getNameForDialect=function(i){'use strict';return this.dialectToNames.get(i);};h.prototype.filterDialects=function(i){'use strict';var j=new (c('Map'))();this.dialectToNames.forEach(function(k,l){if(i.has(l))j.set(l,k);});return j;};h.prototype.getTranslationSupportedDialects=function(){'use strict';return this.filterDialects(c('LanguageDialectSets').getTranslationSupportedDialects());};h.prototype.getTranslationSupportedSourceDialects=function(){'use strict';return this.filterDialects(c('LanguageDialectSets').getTranslationSupportedSourceDialects());};h.prototype.getTranslationSupportedTargetDialects=function(){'use strict';return this.filterDialects(c('LanguageDialectSets').getTranslationSupportedTargetDialects());};h.prototype.getMultilingualComposerDialects=function(){'use strict';var i=this.getTranslationSupportedDialects();c('LanguageDialectSets').getMultilingualDialectsToExclude().forEach(function(k){i['delete'](k);});c('LanguageDialectSets').getMultilingualDialectsToInclude().forEach(function(k){var l=this.getNameForDialect(k);if(l)i.set(k,l);}.bind(this));var j=[];i.forEach(function(k,l){return j.push([l,k]);});return new (c('Map'))(j.sort(function(k,l){return k[1].localeCompare(l[1]);}));};function h(){'use strict';}f.exports=h;}),null);
__d('LanguageDialectLocalizedNames',['AbstractLanguageDialectNames','LtgLanguageDialectLocalizedNames','Map'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('AbstractLanguageDialectNames'));i=h&&h.prototype;function j(){'use strict';i.constructor.call(this);this.dialectToNames=new (c('Map'))(Object.entries(c('LtgLanguageDialectLocalizedNames').DIALECT_LOCALIZED_NAME_MAP));}f.exports=new j();}),null);
__d('ReactComposerMultilingualStatus.react',['ix','cx','ComposerEntryPointRef','CurrentUser','Image.react','immutable','LanguageDialectLocalizedNames','LanguageDialectRenderStyle','LanguageDialectSearchableDropdown.react','LanguageDialectSetTypes','Link.react','LtgLanguageDialectDropdown.react','MentionsInput.react','MentionsInputTypeaheadView.react','MultilingualPostsHelpLink.react','MultilingualPostStrings','React','Set','ShimButton.react','TooltipLink.react','XUIAmbientNUX.react','XUIGrayText.react','curry','fbglyph'],(function a(b,c,d,e,f,g,h,i){var j,k,l=' \u00b7 ',m=c('React').PropTypes;j=babelHelpers.inherits(n,c('React').PureComponent);k=j&&j.prototype;function n(){var o,p;'use strict';for(var q=arguments.length,r=Array(q),s=0;s<q;s++)r[s]=arguments[s];return p=(o=k.constructor).call.apply(o,[this].concat(r)),this.$ReactComposerMultilingualStatus1=undefined,this.$ReactComposerMultilingualStatus9=function(t){this.props.onLanguageRemoveClick(t);}.bind(this),this.$ReactComposerMultilingualStatus13=function(){this.props.onPromptClose();}.bind(this),this.$ReactComposerMultilingualStatus7=function(t,u){this.props.onChange&&this.props.onChange(t,u);}.bind(this),this.$ReactComposerMultilingualStatus6=function(t){this.props.onBlur&&this.props.onBlur(t);}.bind(this),p;}n.prototype.render=function(){'use strict';var o=this.props.multilingualDialects.size>0||this.props.selectingLanguageDialect?c('React').createElement('div',{className:"_3jk8"},c('React').createElement(c('XUIGrayText.react'),{shade:'light',size:'small'},c('MultilingualPostStrings').getDefaultLanguage(this.$ReactComposerMultilingualStatus2(this.props.specifiedPostLanguageDialect,function(p){return this.$ReactComposerMultilingualStatus3(p);}.bind(this))))):null;return c('React').createElement('div',null,o,this.$ReactComposerMultilingualStatus4(),this.$ReactComposerMultilingualStatus5());};n.prototype.$ReactComposerMultilingualStatus4=function(){'use strict';var o=this.props.multilingualDialects.map(function(p,q){return c('React').createElement('li',{className:"_30oa",key:p},c('React').createElement(c('MentionsInput.react'),{className:"_2mcl"+(this.props.generatedTranslations.get(q)?' '+"_4hm2":''),editorState:this.props.multilingualEditorStates.get(q),mentionsSource:this.props.mentionsSource,onBlur:c('curry')(this.$ReactComposerMultilingualStatus6,p),onChange:c('curry')(this.$ReactComposerMultilingualStatus7,p),placeholder:c('MultilingualPostStrings').getAuthorTranslationPlaceholder(c('LanguageDialectLocalizedNames').getNameForDialect(p)),ref:p,typeaheadView:c('MentionsInputTypeaheadView.react')}),c('React').createElement('div',{className:"_3jk8"},this.$ReactComposerMultilingualStatus2(p,function(r){return this.$ReactComposerMultilingualStatus8(p,r);}.bind(this)),c('React').createElement('span',{className:"_3-8r"},l),c('React').createElement(c('Link.react'),{className:"_3jkb",onClick:c('curry')(this.$ReactComposerMultilingualStatus9,p)},c('MultilingualPostStrings').REMOVE)));}.bind(this));return c('React').createElement('ul',null,o);};n.prototype.$ReactComposerMultilingualStatus5=function(){'use strict';if(!this.props.showingPrompt)return null;return this.props.selectingLanguageDialect?this.$ReactComposerMultilingualStatus10():this.$ReactComposerMultilingualStatus11();};n.prototype.$ReactComposerMultilingualStatus10=function(){'use strict';var o=c('CurrentUser').isEmployee()?c('React').createElement(c('TooltipLink.react'),{className:"_3iv- uiHelpLink _3-90",href:'/groups/languagefeedback/',tooltip:'Provide feedback on the Multilingual Composer (fb-only).',target:'_blank'}):null;return c('React').createElement('div',{className:"_30og"},o,c('React').createElement(c('XUIGrayText.react'),{shade:'light',size:'small'},c('MultilingualPostStrings').getSelectLanguage(this.$ReactComposerMultilingualStatus2(undefined,function(p){return this.$ReactComposerMultilingualStatus12(p);}.bind(this)))),c('React').createElement('span',{className:"_3-8r"},l),c('React').createElement(c('Link.react'),{onClick:this.$ReactComposerMultilingualStatus13},c('MultilingualPostStrings').CANCEL));};n.prototype.$ReactComposerMultilingualStatus11=function(){'use strict';return c('React').createElement(c('ShimButton.react'),{className:"_3jk9"+(' '+"_3-91")+(' '+"_3-95")+(this.props.multilingualDialects.size>0?' '+"_3-8x":''),onClick:this.props.onAddingLanguageClick},c('React').createElement(c('Image.react'),{className:"_30oh _3-8_",src:h("144238")}),c('React').createElement('span',{className:"_30oi",ref:'prompt'},c('MultilingualPostStrings').WRITE_POST_IN_ANOTHER_LANGUAGE),c('React').createElement(c('MultilingualPostsHelpLink.react'),{className:"_30oj _3-9a",pageID:this.props.pageID,showSettingsLink:this.props.composerType==c('ComposerEntryPointRef').PAGES_FEED}),this.$ReactComposerMultilingualStatus14());};n.prototype.$ReactComposerMultilingualStatus14=function(){'use strict';return c('React').createElement(c('XUIAmbientNUX.react'),{contextRef:function(){return this.refs.prompt;}.bind(this),onCloseButtonClick:this.props.onNUXClose,position:'below',shown:this.props.showNUX,width:'auto'},c('MultilingualPostStrings').MULTILINGUAL_COMPOSER_NUX);};n.prototype.$ReactComposerMultilingualStatus2=function(o,p){'use strict';return this.props.useSearchableDropdown?c('React').createElement(c('LanguageDialectSearchableDropdown.react'),{dialectType:c('LanguageDialectSetTypes').MLC,excludedDialects:Array.from(this.props.allPostLanguageDialects.values()),hasCategories:true,initialDialect:o,initialDialectName:o?c('LanguageDialectLocalizedNames').getNameForDialect(o):undefined,onSelect:function q(r){return p(r);},placeholder:c('MultilingualPostStrings').DROPDOWN_PLACEHOLDER,renderStyle:c('LanguageDialectRenderStyle').ULM_CATEGORIES}):c('React').createElement(c('LtgLanguageDialectDropdown.react'),{dialectsToExclude:this.props.allPostLanguageDialects,dialectToNamesMap:c('LanguageDialectLocalizedNames').getMultilingualComposerDialects(),initialDialect:o,maxheight:230,onSelect:function q(r){return p(r);}});};n.prototype.$ReactComposerMultilingualStatus12=function(o){'use strict';this.props.onLanguageCreateClick(o);};n.prototype.$ReactComposerMultilingualStatus8=function(o,p){'use strict';this.props.onLanguageDialectChange(o,p);};n.prototype.$ReactComposerMultilingualStatus3=function(o){'use strict';this.props.onSpecifyPostLanguage(o);};n.propTypes={allPostLanguageDialects:m.instanceOf(c('Set')).isRequired,composerType:m.string.isRequired,generatedTranslations:m.instanceOf(c('immutable').List).isRequired,mentionsSource:m.object,multilingualDialects:m.instanceOf(c('immutable').List).isRequired,multilingualEditorStates:m.instanceOf(c('immutable').List).isRequired,onAddingLanguageClick:m.func,onBlur:m.func,onChange:m.func,onLanguageCreateClick:m.func.isRequired,onLanguageRemoveClick:m.func.isRequired,onLanguageDialectChange:m.func.isRequired,onNUXClose:m.func,onPromptClose:m.func.isRequired,onSpecifyPostLanguage:m.func.isRequired,pageID:m.string,selectingLanguageDialect:m.bool.isRequired,showNUX:m.bool,showingPrompt:m.bool.isRequired,specifiedPostLanguageDialect:m.string.isRequired,useSearchableDropdown:m.bool.isRequired};n.defaultProps={generatedTranslations:c('immutable').List()};f.exports=n;}),null);
__d("ContentAuthorType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({USER_CONTENT:"user",PAGE_CONTENT:"page",WORKPLACE_CONTENT:"workplace"});}),null);
__d("MultilingualComposerActionType",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({MOUNTED_MULTILINGUAL_COMPOSER:"mounted_multilingual_composer",CLICK_WRITE_IN_ANOTHER_LANGUAGE:"click_write_in_another_language",CANCEL_WRITE_IN_ANOTHER_LANGUAGE:"cancel_write_in_another_language",SELECT_NEW_LANGUAGE:"select_new_language",CANCEL_SELECT_LANGUAGE:"cancel_select_language",REMOVE_LANGUAGE:"remove_language",CHANGE_LANGUAGE_FOR_EDITING:"change_language_for_editing",CHANGE_ORIGINAL_POST_LANGUAGE:"change_original_post_language",CHANGE_AUTHOR_TRANSLATION_LANGUAGE:"change_author_translation_language",UPDATE_LANGUAGE_START:"update_language_start",MOUNTED_MONOLINGUAL_EDITOR:"mounted_monolingual_editor",MONOLINGUAL_POST_CONVERSION:"monolingual_post_conversion",SUBMIT_EDITS:"submit_edits",PUBLISH_POST:"publish_post",BACKDATED_POST:"backdated_post",DRAFT_POST:"draft_post",SCHEDULED_POST:"scheduled_post",ADS_POST:"ads_post",BOOSTED_POST:"boosted_post",POST_SAVED:"post_saved",VIEW_PAGE_SETTINGS:"view_page_settings",SET_PAGE_SETTINGS_ON:"set_page_settings_on",SET_PAGE_SETTINGS_OFF:"set_page_settings_off",VIEW_USER_SETTINGS:"view_user_settings",SET_USER_SETTINGS_ON:"set_user_settings_on",SET_USER_SETTINGS_OFF:"set_user_settings_off"});}),null);
__d("PagePostActionButtonActionTypes",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({PUBLISH:"PUBLISH",SAVE_DRAFT:"SAVE_DRAFT",SCHEDULE:"SCHEDULE",BACKDATE:"BACKDATE",ADS_POST:"ADS_POST"});}),null);
__d('ReactComposerMultilingualLoggingStore',['ComposerEntryPointRef','ComposerXSessionIDs','ContentAuthorType','LtgMultilingualComposerActionsTypedLogger','MultilingualComposerActionType','PagePostActionButtonActionTypes','PagesComposerActionsTypes','ReactComposerActionTypes','ReactComposerMultilingualStatusActionType','ReactComposerMultilingualStatusStore','ReactComposerStatusStore','ReactComposerStoreBase'],(function a(b,c,d,e,f,g){var h,i;h=babelHelpers.inherits(j,c('ReactComposerStoreBase'));i=h&&h.prototype;function j(){'use strict';var k;i.constructor.call(this,function(){return {actorID:null,composerType:null};},function(l){k&&k.handler(l);});k=this;}j.prototype.handler=function(k){'use strict';switch(k.type){case c('ReactComposerMultilingualStatusActionType').MOUNTED_MULTILINGUAL_STATUS:this.$ReactComposerMultilingualLoggingStore1(k);break;case c('ReactComposerMultilingualStatusActionType').MULTILINGUAL_PROMPT_CLICK:this.$ReactComposerMultilingualLoggingStore2(k);break;case c('ReactComposerMultilingualStatusActionType').MULTILINGUAL_PROMPT_CLOSE:this.$ReactComposerMultilingualLoggingStore3(k);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CREATED:this.$ReactComposerMultilingualLoggingStore4(k);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_REMOVED:this.$ReactComposerMultilingualLoggingStore5(k);break;case c('ReactComposerMultilingualStatusActionType').LANGUAGE_CHANGED:this.$ReactComposerMultilingualLoggingStore6(k);break;case c('ReactComposerMultilingualStatusActionType').SET_SPECIFIED_POST_LANGUAGE:this.$ReactComposerMultilingualLoggingStore7(k);break;case c('PagesComposerActionsTypes').BACKDATE:this.$ReactComposerMultilingualLoggingStore8(k,c('MultilingualComposerActionType').BACKDATED_POST);break;case c('PagesComposerActionsTypes').SET_DRAFT:this.$ReactComposerMultilingualLoggingStore8(k,c('MultilingualComposerActionType').DRAFT_POST);break;case c('PagesComposerActionsTypes').SCHEDULE:this.$ReactComposerMultilingualLoggingStore8(k,c('MultilingualComposerActionType').SCHEDULED_POST);break;case c('PagesComposerActionsTypes').SET_ADS_POST:this.$ReactComposerMultilingualLoggingStore8(k,c('MultilingualComposerActionType').ADS_POST);break;case c('PagesComposerActionsTypes').SET_BOOSTED_POST:this.$ReactComposerMultilingualLoggingStore8(k,c('MultilingualComposerActionType').BOOSTED_POST);break;case c('ReactComposerActionTypes').PUBLISH_STARTED:case c('PagePostActionButtonActionTypes').PUBLISH:this.$ReactComposerMultilingualLoggingStore8(k,c('MultilingualComposerActionType').PUBLISH_POST);break;}};j.prototype.getSessionID=function(k){'use strict';return c('ComposerXSessionIDs').getSessionID(k)||'';};j.prototype.$ReactComposerMultilingualLoggingStore9=function(k){'use strict';var l=this.getComposerData(k);return new (c('LtgMultilingualComposerActionsTypedLogger'))().setSessionID(this.getSessionID(k)).setAllSelectedDialects(c('ReactComposerMultilingualStatusStore').getAllPostDialects(k)).setOriginalPostDialect(c('ReactComposerMultilingualStatusStore').getSpecifiedPostLanguage(k)).setComposerType(l.composerType).setOriginalPostIsEmpty(this.$ReactComposerMultilingualLoggingStore10(k)).setActorID(l.actorID).setIsPublished(false);};j.prototype.$ReactComposerMultilingualLoggingStore10=function(k){'use strict';return c('ReactComposerStatusStore').getMessage(k)==='';};j.prototype.$ReactComposerMultilingualLoggingStore11=function(k,l){'use strict';return c('ReactComposerMultilingualStatusStore').getMessage(k,l)==='';};j.prototype.$ReactComposerMultilingualLoggingStore1=function(k){'use strict';var l=this.validateAction(k,['composerID','actorID','composerType']),m=l[0],n=l[1],o=l[2],p=this.getComposerData(m);p.actorID=n;p.composerType=o;this.$ReactComposerMultilingualLoggingStore9(m).setAction(c('MultilingualComposerActionType').MOUNTED_MULTILINGUAL_COMPOSER).log();};j.prototype.$ReactComposerMultilingualLoggingStore2=function(k){'use strict';var l=this.validateAction(k,['composerID']);this.$ReactComposerMultilingualLoggingStore9(l).setAction(c('MultilingualComposerActionType').CLICK_WRITE_IN_ANOTHER_LANGUAGE).log();};j.prototype.$ReactComposerMultilingualLoggingStore3=function(k){'use strict';var l=this.validateAction(k,['composerID']);this.$ReactComposerMultilingualLoggingStore9(l).setAction(c('MultilingualComposerActionType').CANCEL_WRITE_IN_ANOTHER_LANGUAGE).log();};j.prototype.$ReactComposerMultilingualLoggingStore4=function(k){'use strict';var l=this.validateAction(k,['composerID','languageDialect']),m=l[0],n=l[1];this.$ReactComposerMultilingualLoggingStore9(m).setAction(c('MultilingualComposerActionType').SELECT_NEW_LANGUAGE).setActiveDialect(n).log();};j.prototype.$ReactComposerMultilingualLoggingStore5=function(k){'use strict';var l=this.validateAction(k,['composerID','languageDialect','previousMessage']),m=l[0],n=l[1],o=l[2];this.$ReactComposerMultilingualLoggingStore9(m).setAction(c('MultilingualComposerActionType').REMOVE_LANGUAGE).setActiveDialect(n).setAuthorTranslationIsEmpty(o==='').log();};j.prototype.$ReactComposerMultilingualLoggingStore6=function(k){'use strict';var l=this.validateAction(k,['composerID','newLanguageDialect']),m=l[0],n=l[1],o=this.$ReactComposerMultilingualLoggingStore11(m,n);this.$ReactComposerMultilingualLoggingStore9(m).setAction(c('MultilingualComposerActionType').CHANGE_AUTHOR_TRANSLATION_LANGUAGE).setActiveDialect(n).setAuthorTranslationIsEmpty(o).log();};j.prototype.$ReactComposerMultilingualLoggingStore7=function(k){'use strict';var l=this.validateAction(k,['composerID','languageDialect']),m=l[0],n=l[1];this.$ReactComposerMultilingualLoggingStore9(m).setAction(c('MultilingualComposerActionType').CHANGE_ORIGINAL_POST_LANGUAGE).setActiveDialect(n).log();};j.prototype.$ReactComposerMultilingualLoggingStore8=function(k,l){'use strict';var m=this.validateAction(k,'composerID'),n=c('ReactComposerMultilingualStatusStore').getLanguageDialects(m);if(n.length===0)return;this.$ReactComposerMultilingualLoggingStore9(m).setAction(l).log();};f.exports=new j();}),null);
__d('ReactComposerMultilingualStatusActions',['ReactComposerDispatcher','ReactComposerMultilingualStatusActionType','ReactComposerMultilingualStatusStore','ReactComposerMultilingualLoggingStore'],(function a(b,c,d,e,f,g){c('ReactComposerMultilingualStatusStore');c('ReactComposerMultilingualLoggingStore');h.prototype.mountedMultilingualStatus=function(i,j,k,l){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').MOUNTED_MULTILINGUAL_STATUS,languageDialect:j,actorID:k,composerType:l});};h.prototype.promptClicked=function(i){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').MULTILINGUAL_PROMPT_CLICK});};h.prototype.promptClosed=function(i){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').MULTILINGUAL_PROMPT_CLOSE});};h.prototype.languageCreated=function(i,j,k){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').LANGUAGE_CREATED,languageDialect:j,languageConfig:k});};h.prototype.languageRemoved=function(i,j,k){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').LANGUAGE_REMOVED,languageDialect:j,previousMessage:k});};h.prototype.languageChanged=function(i,j,k){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').LANGUAGE_CHANGED,oldLanguageDialect:j,newLanguageDialect:k});};h.prototype.setEditorState=function(i,j,k){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').SET_LANGUAGE_EDITOR_STATE,languageDialect:j,editorState:k});};h.prototype.setSpecifiedPostLanguage=function(i,j){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').SET_SPECIFIED_POST_LANGUAGE,languageDialect:j});};h.prototype.prefillData=function(i,j){'use strict';c('ReactComposerDispatcher').dispatch({composerID:i,type:c('ReactComposerMultilingualStatusActionType').PREFILL_MULTILINGUAL_DATA,multilingualData:j});};function h(){'use strict';}f.exports=new h();}),null);
__d('ReactComposerMultilingualStatusDialects',['CurrentLocale','LanguageDialectSets'],(function a(b,c,d,e,f,g){var h='en_XX';i.prototype.getInitialComposerDialect=function(){'use strict';var j=c('CurrentLocale').get(),k=c('LanguageDialectSets').getTranslationSupportedDialects();if(k.has(j))return j;var l=c('LanguageDialectSets').getUniqueParentDialects().get(j);if(l&&k.has(l))return l;return h;};function i(){'use strict';}f.exports=new i();}),null);
__d("XMachineTranslationComposerController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/async\/mlc\/machine_translation\/",{});}),null);
__d('ReactComposerMultilingualStatusContainer.react',['ActorURI','Arbiter','AsyncRequest','EditorState','immutable','MentionsInputUtility','MultilingualComposerConfig','React','ReactComponentWithPureRenderMixin','ReactComposerContextMixin','ReactComposerEvents','ReactComposerMultilingualStatus.react','ReactComposerMultilingualStatusActions','ReactComposerMultilingualStatusDialects','ReactComposerMultilingualStatusStore','ReactComposerPrefillStore','ReactComposerPropsAndStoreBasedStateMixin','ReactComposerStatusStore','Set','SimpleNUXMessage','SimpleNUXMessageTypes','XMachineTranslationComposerController','getMentionsInputDecorator','getMentionsTextForContentState'],(function a(b,c,d,e,f,g){var h=c('React').PropTypes,i=c('React').createClass({displayName:'ReactComposerMultilingualStatusContainer',_prefillSubscription:undefined,mixins:[c('ReactComponentWithPureRenderMixin'),c('ReactComposerContextMixin'),c('ReactComposerPropsAndStoreBasedStateMixin')(c('ReactComposerMultilingualStatusStore'))],propTypes:{onChange:h.func},getInitialState:function j(){return {generatedTranslations:c('immutable').List(),multilingualDialects:c('immutable').List(),multilingualEditorStates:c('immutable').List(),selectingLanguageDialect:false,showingPrompt:true,showNUX:this.context.gks.multilingual_composer_nux&&!c('SimpleNUXMessage').hasUserSeenMessage(c('SimpleNUXMessageTypes').MULTILINGUAL_COMPOSER_NUX)};},componentWillMount:function j(){this._prefillSubscription=c('Arbiter').subscribe(c('ReactComposerEvents').SET_PREFILL_DATA+this.context.composerID,this._handlePrefill);var k=c('ReactComposerMultilingualStatusStore').getSpecifiedPostLanguage(this.context.composerID);if(k==='')k=c('ReactComposerMultilingualStatusDialects').getInitialComposerDialect();this._onMountMultilingualStatus(k);this.setState({multilingualDialects:c('immutable').List(c('ReactComposerMultilingualStatusStore').getLanguageDialects(this.context.composerID)),multilingualEditorStates:c('immutable').List(c('ReactComposerMultilingualStatusStore').getEditorStates(this.context.composerID))});},statics:{calculateState:function j(k,l){return {mentionsSource:c('ReactComposerStatusStore').getMentionsSource(k),specifiedPostLanguage:c('ReactComposerMultilingualStatusStore').getSpecifiedPostLanguage(k)};}},componentWillUnmount:function j(){this._prefillSubscription&&this._prefillSubscription.unsubscribe();this._prefillSubscription=null;},render:function j(){return c('React').createElement(c('ReactComposerMultilingualStatus.react'),{allPostLanguageDialects:this._getAllPostLanguageDialects(),composerType:this.context.composerType,generatedTranslations:this.state.generatedTranslations,mentionsSource:this.state.mentionsSource,multilingualDialects:this.state.multilingualDialects,multilingualEditorStates:this.state.multilingualEditorStates,onAddingLanguageClick:this._onAddingLanguageClick,onBlur:this._onBlur,onChange:this._onChange,onLanguageCreateClick:this._onLanguageCreateClick,onLanguageRemoveClick:this._onLanguageRemoveClick,onLanguageDialectChange:this._onLanguageDialectChange,onNUXClose:this._onNUXClose,onPromptClose:this._onPromptClose,onSpecifyPostLanguage:this._onSpecifyPostLanguage,pageID:this.context.actorID,selectingLanguageDialect:this.state.selectingLanguageDialect,showNUX:this.state.showNUX,showingPrompt:this.state.showingPrompt,specifiedPostLanguageDialect:this._getSpecifiedPostLanguage(),useSearchableDropdown:c('MultilingualComposerConfig').multilingual_composer_searchable_dropdown});},_handlePrefill:function j(){var k=c('ReactComposerPrefillStore').getAndEraseField(this.context.composerID,'multilingualData');if(k)c('ReactComposerMultilingualStatusActions').prefillData(this.context.composerID,k);},_onAddingLanguageClick:function j(){if(this.state.showNUX)c('SimpleNUXMessage').markMessageSeenByUser(c('SimpleNUXMessageTypes').MULTILINGUAL_COMPOSER_NUX);this.setState({selectingLanguageDialect:true,showNUX:false});c('ReactComposerMultilingualStatusActions').promptClicked(this.context.composerID);},_onLanguageCreateClick:function j(k){var l=c('EditorState').createEmpty(c('getMentionsInputDecorator')());this._maybeGenerateTranslation(k);this.setState({multilingualDialects:this.state.multilingualDialects.push(k),multilingualEditorStates:this.state.multilingualEditorStates.push(l),selectingLanguageDialect:false});c('ReactComposerMultilingualStatusActions').languageCreated(this.context.composerID,k,{editorState:l});},_maybeGenerateTranslation:function j(k){var l=c('ReactComposerStatusStore').getMessageText(this.context.composerID);if(!l)return;var m=c('ActorURI').create(c('XMachineTranslationComposerController').getURIBuilder().getURI(),this.context.actorID);new (c('AsyncRequest'))(m).setData({text:l,target_dialect:k}).setHandler(function(n){return this._onTranslationGenerated(n,k);}.bind(this)).send();},_onTranslationGenerated:function j(k,l){var m=k.payload.translation;if(!m)return;var n=c('ReactComposerMultilingualStatusStore').getMessage(this.context.composerID,l);if(n)return;var o=c('MentionsInputUtility').createFromTextWithMentions(m,c('getMentionsInputDecorator')()),p=this.state.multilingualDialects.indexOf(l);this.setState({multilingualEditorStates:this.state.multilingualEditorStates.set(p,o),generatedTranslations:this.state.generatedTranslations.set(p,true)});c('ReactComposerMultilingualStatusActions').setEditorState(this.context.composerID,l,o);},_onLanguageRemoveClick:function j(k){var l=this.state.multilingualDialects.indexOf(k),m=c('getMentionsTextForContentState')(this.state.multilingualEditorStates.get(l).getCurrentContent());this.setState({multilingualDialects:this.state.multilingualDialects.remove(l),multilingualEditorStates:this.state.multilingualEditorStates.remove(l),generatedTranslations:this.state.generatedTranslations.set(l,null)});c('ReactComposerMultilingualStatusActions').languageRemoved(this.context.composerID,k,m);},_onLanguageDialectChange:function j(k,l){var m=this.state.multilingualDialects.indexOf(k);this.setState({multilingualDialects:this.state.multilingualDialects.set(m,l)});c('ReactComposerMultilingualStatusActions').languageChanged(this.context.composerID,k,l);},_onBlur:function j(k){var l=this.state.multilingualDialects.indexOf(k);c('ReactComposerMultilingualStatusActions').setEditorState(this.context.composerID,k,this.state.multilingualEditorStates.get(l));},_onChange:function j(k,l){var m=this.state.multilingualDialects.indexOf(k);this.setState({multilingualEditorStates:this.state.multilingualEditorStates.set(m,l),generatedTranslations:this.state.generatedTranslations.set(m,null)});c('ReactComposerMultilingualStatusActions').setEditorState(this.context.composerID,k,l);},_onMountMultilingualStatus:function j(k){c('ReactComposerMultilingualStatusActions').mountedMultilingualStatus(this.context.composerID,k,this.context.actorID,this.context.composerType);},_onSpecifyPostLanguage:function j(k){c('ReactComposerMultilingualStatusActions').setSpecifiedPostLanguage(this.context.composerID,k);},_onNUXClose:function j(){c('SimpleNUXMessage').markMessageSeenByUser(c('SimpleNUXMessageTypes').MULTILINGUAL_COMPOSER_NUX);this.setState({showNUX:false});},_onPromptClose:function j(){this.setState({showingPrompt:false,selectingLanguageDialect:false});c('ReactComposerMultilingualStatusActions').promptClosed(this.context.composerID);},_getAllPostLanguageDialects:function j(){return new (c('Set'))(this.state.multilingualDialects).add(this._getSpecifiedPostLanguage());},_getSpecifiedPostLanguage:function j(){return this.state.specifiedPostLanguage;}});f.exports=i;}),null);
if (self.CavalryLogger) { CavalryLogger.start_js(["3YOAl"]); }

__d("LEDExperimentEntryPoint",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({LIKE:"like",REACT:"react",COMMENT:"comment",ATTACHMENT:"attachment",NETEGO:"netego",COMPOSER_POST:"composer_post"});}),null);
__d("PageContextualRecommendationsTrigger",[],(function a(b,c,d,e,f,g){f.exports=Object.freeze({DEBUG:"debug",FANNING:"fanning",NONE:"none",STORY_CLICK:"story_click",UFI:"ufi"});}),null);
__d('PubcontentFeedChainingInjectionUtils',['getViewportDimensions'],(function a(b,c,d,e,f,g){'use strict';var h=100,i={isEligibleToInject:function j(k){var l=k.getBoundingClientRect(),m=l.top,n=c('getViewportDimensions').withoutScrollbars(),o=n.height;return !(!!o&&(o-m)/o*100>h);}};f.exports=i;}),null);
__d("XEventRelatedEventsPivotController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/events\/async\/related_events_pivot\/",{event_id:{type:"Int",required:true},attachment_id:{type:"String"},trigger_action:{type:"String"}});}),null);
__d("XFeedAdsChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/feed\/ads_chaining\/",{actor_id:{type:"String",required:true},ft_id:{type:"String"},origin:{type:"String",required:true},ei:{type:"String",required:true},data_ownerid:{type:"String",required:true}});}),null);
__d("XFundraiserAttachmentPivotController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/async\/social_good\/fundraiser\/attachment_pivot\/",{ft_id:{type:"String"}});}),null);
__d("XLEDFollowUpFeedUnitController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/led\/async\/follow_up_feed_unit\/",{ft_id:{type:"String"},story_id:{type:"String"},entry_point:{type:"Enum",required:true,enumType:1}});}),null);
__d("XPubcontentCommerceProductChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/related_product\/",{attachment_id:{type:"String",required:true},product_id:{type:"Int",required:true}});}),null);
__d("XPubcontentFeedChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/feed_chaining\/",{actor_id:{type:"String",required:true},content_id:{type:"String"},ft_id:{type:"String"},origin:{type:"String",required:true},is_home_request:{type:"Bool",defaultValue:false},trigger:{type:"String"},referrer:{type:"String"},is_sponsored:{type:"Bool",defaultValue:false},only_qp_allowed:{type:"Bool",defaultValue:false},reaction_type:{type:"Enum",enumType:0}});}),null);
__d("XPubcontentFeedCommentChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/comment_chaining\/",{action_trigger:{type:"String",required:true},ft_id:{type:"String"}});}),null);
__d("XPubcontentGroupRelatedStoriesChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/group_related_stories\/",{post_id:{type:"Int",required:true},is_home_request:{type:"Bool",defaultValue:false}});}),null);
__d("XPubcontentInlineStoryPivotChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/inline_story_pivot_chaining\/",{origin:{type:"String",required:true},storyid:{type:"String"},ftid:{type:"String"}});}),null);
__d("XPubcontentLocalNewsChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/local_news_chaining\/",{ft_id:{type:"String",required:true}});}),null);
__d("XPubcontentPoliticalIssueChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/political_issue_chaining\/",{ft_id:{type:"String",required:true}});}),null);
__d("XPubcontentRelatedShareChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/related_share\/",{attachment_div_id:{type:"String",required:true},global_share_id:{type:"Int",required:true},video_div_id:{type:"String"},link_url:{type:"String"},qid:{type:"String"},mf_story_key:{type:"String"},share_id:{type:"String"},is_auto_expand:{type:"Bool",defaultValue:false},ft_id:{type:"String"}});}),null);
__d("XPubcontentTopicChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/pubcontent\/topic_chaining\/",{ft_id:{type:"String",required:true}});}),null);
__d("XRelatedGamesChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/games\/async\/related_games\/",{attachment_div_id:{type:"String",required:true},app_id:{type:"Int",required:true}});}),null);
__d("XSearchRelatedPostsPivotController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/search\/async\/related_posts_pivot\/",{origin:{type:"String",required:true},content_id:{type:"String",required:true}});}),null);
__d("XSpokespersonProductChainingController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/spokesperson\/related_product\/",{ft_id:{type:"String"},reaction_type:{type:"Enum",enumType:0}});}),null);
__d('PubcontentFeedChainingControllerX',['csx','cx','AggregatedLinkComposerConfig','Arbiter','AsyncRequest','AttachmentIssueDiversityShareConstants','AttachmentRelatedShareConstants','ContextualRecommendationsFeedChainingConfig','ContextualThing','CSS','DataAttributeUtils','DOM','DOMQuery','Event','FeedAdsChainingConfig','LEDExperimentEntryPoint','LitestandMessages','NavigationMessage','PageContextualRecommendationsTrigger','PageLikeConstants','Parent','PubcontentFeedChainingConfig','PubcontentFeedChainingInjectionUtils','PubcontentLocalNewsChainingConfig','PubcontentPoliticalIssueChainingConfig','PubcontentRelatedShareChainingConfig','PubcontentTopicChainingConfig','RelatedEventsPivotChainingConfig','Run','SearchRelatedPostsPivotChainingConfig','StoryInlinePivotChainingConfig','SubscriptionsHandler','UFIFeedbackTargets','UFIUIEvents','URI','VideoChannelViewVariables','XEventRelatedEventsPivotController','XFeedAdsChainingController','XFundraiserAttachmentPivotController','XLEDFollowUpFeedUnitController','XPubcontentCommerceProductChainingController','XPubcontentFeedChainingController','XPubcontentFeedCommentChainingController','XPubcontentGroupRelatedStoriesChainingController','XPubcontentInlineStoryPivotChainingController','XPubcontentLocalNewsChainingController','XPubcontentPoliticalIssueChainingController','XPubcontentRelatedShareChainingController','XPubcontentRelatedVideoChainingController','XPubcontentTopicChainingController','XRelatedGamesChainingController','XSearchRelatedPostsPivotController','XSpokespersonProductChainingController','cxodecode','getOrCreateDOMID'],(function a(b,c,d,e,f,g,h,i){'use strict';var j='ei',k='ad_fan_page_action',l='ad_like_page_post_action',m='page_story_like_action',n='political_issue_story_article_click_action',o='local_news_story_article_click_action',p='related_share_article_click',q='related_product_click',r='related_share_video_click',s='related_share_video_view',t='page_share_like_action',u='topic_story_like_action',v='story_click_for_pivot_action',w='story_like_pivot_action',x='event_join',y='composer_publish_action',z='place_checkin_story_action',aa='LIKE',ba='COMMENT',ca=500,da=c('VideoChannelViewVariables').channelPivots,ea="._5v9_",fa=null,ga=false,ha=null,ia=null;ja.init=function(na){var oa=na.isLazy,pa=na.srs,qa=na.sdrs;if(pa&&qa){ha=c('cxodecode')(pa);ia=c('cxodecode')(qa);}if(!fa)fa=new ja({isLazy:oa});if(!ga){c('Run').onLeave(ja.cleanup);c('Arbiter').subscribe(c('NavigationMessage').NAVIGATION_BEGIN,ja.cleanup);ga=true;}};ja.cleanup=function(){if(fa){fa.cleanup();fa=null;}};function ja(na){var oa=na.isLazy;this.$PubcontentFeedChainingControllerX1=c('PubcontentFeedChainingConfig');this.$PubcontentFeedChainingControllerX2=c('ContextualRecommendationsFeedChainingConfig');this.$PubcontentFeedChainingControllerX3=c('FeedAdsChainingConfig');this.$PubcontentFeedChainingControllerX4=c('PubcontentRelatedShareChainingConfig');this.$PubcontentFeedChainingControllerX5=c('PubcontentTopicChainingConfig');this.$PubcontentFeedChainingControllerX6=c('PubcontentPoliticalIssueChainingConfig');this.$PubcontentFeedChainingControllerX7=c('StoryInlinePivotChainingConfig');this.$PubcontentFeedChainingControllerX8=c('RelatedEventsPivotChainingConfig');this.$PubcontentFeedChainingControllerX9=c('SearchRelatedPostsPivotChainingConfig');this.$PubcontentFeedChainingControllerX10=c('PubcontentLocalNewsChainingConfig');this.$PubcontentFeedChainingControllerX11={};this.$PubcontentFeedChainingControllerX12=null;this.$PubcontentFeedChainingControllerX13=new (c('SubscriptionsHandler'))();this.$PubcontentFeedChainingControllerX13.addSubscriptions(this.$PubcontentFeedChainingControllerX14(c('PageLikeConstants').LIKED,oa,this.$PubcontentFeedChainingControllerX15.bind(this)),this.$PubcontentFeedChainingControllerX14(c('UFIUIEvents').ActionLinkLike,oa,this.$PubcontentFeedChainingControllerX16.bind(this)),this.$PubcontentFeedChainingControllerX14(c('UFIUIEvents').ReactionButtonClicked,oa,this.$PubcontentFeedChainingControllerX16.bind(this)),this.$PubcontentFeedChainingControllerX14(c('UFIUIEvents').Comment,oa,this.$PubcontentFeedChainingControllerX17.bind(this)),this.$PubcontentFeedChainingControllerX14('composer/publish',oa,this.$PubcontentFeedChainingControllerX18.bind(this)),this.$PubcontentFeedChainingControllerX14('LitestandComposer/publish',oa,this.$PubcontentFeedChainingControllerX18.bind(this)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').ARTICLE_CLICK,oa,this.$PubcontentFeedChainingControllerX19.bind(this)),this.$PubcontentFeedChainingControllerX14(c('AttachmentIssueDiversityShareConstants').ARTICLE_CLICK,oa,this.$PubcontentFeedChainingControllerX20.bind(this)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').VIDEO_CLICK,oa,this.$PubcontentFeedChainingControllerX21(this.$PubcontentFeedChainingControllerX22.bind(this),c('LEDExperimentEntryPoint').ATTACHMENT)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').FBVIDEO_VIEW,oa,this.$PubcontentFeedChainingControllerX21(this.$PubcontentFeedChainingControllerX23.bind(this),c('LEDExperimentEntryPoint').ATTACHMENT)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').FBVIDEO_CLICK,oa,this.$PubcontentFeedChainingControllerX21(this.$PubcontentFeedChainingControllerX23.bind(this),c('LEDExperimentEntryPoint').ATTACHMENT)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').GAME_CLICK,oa,this.$PubcontentFeedChainingControllerX24.bind(this)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').PHOTO_CLICK,oa,this.$PubcontentFeedChainingControllerX21(this.$PubcontentFeedChainingControllerX25.bind(this),c('LEDExperimentEntryPoint').ATTACHMENT)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').EVENT_JOIN,oa,this.$PubcontentFeedChainingControllerX26.bind(this)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').PRODUCT_CLICK,oa,this.$PubcontentFeedChainingControllerX27.bind(this)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').MAP_CLICK,oa,this.$PubcontentFeedChainingControllerX28.bind(this)),this.$PubcontentFeedChainingControllerX14(c('AttachmentRelatedShareConstants').ACTION_BUTTON_CLICK,oa,this.$PubcontentFeedChainingControllerX29.bind(this)));}ja.prototype.$PubcontentFeedChainingControllerX14=function(event,na,oa){var pa=na?[event,event+'.lazy']:[event];return c('Arbiter').subscribe(pa,oa);};ja.prototype.cleanup=function(){this.$PubcontentFeedChainingControllerX13&&this.$PubcontentFeedChainingControllerX13.release();this.$PubcontentFeedChainingControllerX13=null;};ja.getAdClientTokenIndex=function(){return j;};ja.prototype.$PubcontentFeedChainingControllerX15=function(na,oa){var pa=this.findAdClientToken(oa.target);if(pa){this.$PubcontentFeedChainingControllerX30(oa.target,{origin:k,actor_id:oa.profile_id,client_token:pa});}else this.$PubcontentFeedChainingControllerX31(oa.target,{origin:oa.origin,actor_id:oa.profile_id,trigger:c('PageContextualRecommendationsTrigger').FANNING,chaining_type:'contextual_recommendations',reaction_type:oa.reaction_type});};ja.prototype.$PubcontentFeedChainingControllerX16=function(na,oa){if(!oa.ft_id||!oa.target||!oa.reaction_type)return;if(!this.$PubcontentFeedChainingControllerX32(this.findStory(oa.target))||this.$PubcontentFeedChainingControllerX33(this.findStory(oa.target)))return;c('UFIFeedbackTargets').getFeedbackTarget(oa.ft_id,function(pa,qa){this.$PubcontentFeedChainingControllerX34(pa,{ft_id:qa.entidentifier,origin:aa,in_place_pivot:true});var ra=this.findAdClientToken(pa);if(ra&&qa.isshare){this.$PubcontentFeedChainingControllerX30(pa,{actor_id:qa.actorid,origin:l,ft_id:qa.entidentifier,client_token:ra});}else if(qa.isActorFBEntity){this.$PubcontentFeedChainingControllerX35(pa,{ft_id:qa.entidentifier,reaction_type:oa.reaction_type,chaining_type:'contextual_recommendations',origin:aa});}else if(qa.isownerpage){var sa=qa.isshare?t:m;this.$PubcontentFeedChainingControllerX31(pa,{actor_id:qa.actorid,content_id:qa.entidentifier,ft_id:qa.entidentifier,origin:sa,trigger:c('PageContextualRecommendationsTrigger').UFI,chaining_type:'contextual_recommendations',reaction_type:oa.reaction_type});}else if(qa.isshare){this.$PubcontentFeedChainingControllerX31(pa,{actor_id:qa.actorid,content_id:qa.entidentifier,ft_id:qa.entidentifier,origin:t,trigger:c('PageContextualRecommendationsTrigger').UFI,chaining_type:'contextual_recommendations',reaction_type:oa.reaction_type});}else if(qa.grouporeventid){if(this.shouldPuntGroupChaining(pa))return;this.$PubcontentFeedChainingControllerX36(pa,{post_id:qa.entidentifier,origin:aa});}else if(qa.isownerfriend&&qa.allowpivotqpsonfriendstory){this.$PubcontentFeedChainingControllerX31(pa,{actor_id:qa.actorid,content_id:qa.entidentifier,ft_id:qa.entidentifier,origin:aa,trigger:c('PageContextualRecommendationsTrigger').UFI,chaining_type:'contextual_recommendations',reaction_type:oa.reaction_type,only_qp_allowed:true});}else if(qa.isplacecheckin){this.$PubcontentFeedChainingControllerX37(pa,{ft_id:qa.entidentifier,origin:z},c('LEDExperimentEntryPoint').LIKE);}else{var ta=this.$PubcontentFeedChainingControllerX38(pa,{origin:w,ft_id:qa.entidentifier});if(!ta)this.$PubcontentFeedChainingControllerX39(pa,{origin:u,ft_id:qa.entidentifier});}}.bind(this,oa.target));};ja.prototype.$PubcontentFeedChainingControllerX17=function(na,oa){if(!oa.ft_id||!oa.target)return;if(!this.$PubcontentFeedChainingControllerX32(this.findStory(oa.target))||this.$PubcontentFeedChainingControllerX33(this.findStory(oa.target)))return;c('UFIFeedbackTargets').getFeedbackTarget(oa.ft_id,function(pa,qa){this.$PubcontentFeedChainingControllerX34(pa,{ft_id:qa.entidentifier,origin:ba,in_place_pivot:true});if(qa.grouporeventid){if(this.shouldPuntGroupChaining(pa))return;this.$PubcontentFeedChainingControllerX40(pa,{origin:ba,event_id:qa.grouporeventid});}else if(qa.isplacecheckin){this.$PubcontentFeedChainingControllerX37(pa,{ft_id:qa.entidentifier,origin:z},c('LEDExperimentEntryPoint').COMMENT);}else this.$PubcontentFeedChainingControllerX41(oa.target,{origin:p,action_trigger:ba,ft_id:qa.entidentifier});}.bind(this,oa.target));};ja.prototype.$PubcontentFeedChainingControllerX38=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=c('XPubcontentInlineStoryPivotChainingController').getURIBuilder().setString('origin',oa.origin);if(oa.story_id)qa.setString('storyid',String(oa.story_id));if(oa.ft_id)qa.setString('ftid',String(oa.ft_id));new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(qa.getURI()).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX39=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa||!this.$PubcontentFeedChainingControllerX44())return;var qa=c('XPubcontentTopicChainingController').getURIBuilder().setString('ft_id',oa.ft_id);new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(qa.getURI()).setAllowCrossPageTransition(true).send();return;};ja.prototype.$PubcontentFeedChainingControllerX45=function(na,oa,pa,qa){var ra=pa.ft_id;if(!ra){qa&&qa();return;}var sa=this.findStory(oa);if(la(sa)||ma(sa)){qa&&qa();return;}var ta=this.$PubcontentFeedChainingControllerX42(oa,pa);if(!ta){qa&&qa();return;}var ua=na.getURIBuilder().setString('ft_id',ra);new (c('AsyncRequest'))().setErrorHandler(function(){this.$PubcontentFeedChainingControllerX43(ta.story.id);qa&&qa();}.bind(this)).setRelativeTo(ta.chainingWrapper).setURI(ua.getURI()).setAllowCrossPageTransition(true).setHandler(function(va){if(!va.payload.is_chained){this.$PubcontentFeedChainingControllerX43(ta.story.id);qa&&qa();}}.bind(this)).send();return;};ja.prototype.$PubcontentFeedChainingControllerX25=function(na,oa){var pa=this;pa.$PubcontentFeedChainingControllerX38(oa.attachment,{origin:v,story_id:oa.storyid});};ja.prototype.$PubcontentFeedChainingControllerX19=function(na,oa){this.$PubcontentFeedChainingControllerX46(na,oa,true);};ja.prototype.$PubcontentFeedChainingControllerX20=function(na,oa){this.$PubcontentFeedChainingControllerX46(na,oa,false);};ja.prototype.$PubcontentFeedChainingControllerX46=function(na,oa,pa){if(c('AggregatedLinkComposerConfig').no_chained_related_stories==='true')return;var qa=this,ra=this.findStory(oa.attachment),sa=c('DOMQuery').scry(c('DOMQuery').getRootElement(),'#initial_browse_result').length>0;if(sa)return;var ta;if(oa.is_right_click){ta=0;}else ta=c('AttachmentRelatedShareConstants').EVENT_DELAY;setTimeout(function(){if(ra){var ua=qa.findAttachment(ra);if(ua)oa.attachment=ua;}oa.ft_id=qa.findFeedbackTargetId(ra);qa.$PubcontentFeedChainingControllerX45(c('XPubcontentPoliticalIssueChainingController'),oa.attachment,{origin:n,ft_id:oa.ft_id},function(){if(!pa)return;oa.origin=p;qa.$PubcontentFeedChainingControllerX45(c('XPubcontentLocalNewsChainingController'),oa.attachment,{origin:o,ft_id:oa.ft_id},function(){if(!pa)return;oa.origin=p;qa.$PubcontentFeedChainingControllerX47(oa.attachment,oa);});});},ta);};ja.prototype.$PubcontentFeedChainingControllerX22=function(na,oa){if(!this.$PubcontentFeedChainingControllerX44())return;oa.origin=r;var pa=this,qa=this.findStory(oa.attachment);setTimeout(function(){if(qa){var ra=pa.findAttachment(qa);if(ra)oa.attachment=ra;}pa.$PubcontentFeedChainingControllerX47(oa.attachment,oa);},c('AttachmentRelatedShareConstants').EVENT_DELAY);};ja.prototype.$PubcontentFeedChainingControllerX23=function(na,oa){if(!this.$PubcontentFeedChainingControllerX44())return;oa.origin=na.indexOf(c('AttachmentRelatedShareConstants').FBVIDEO_VIEW)===-1?r:s;var pa=this,qa=this.findStory(oa.attachment),ra=function sa(ta){if(qa){var ua=pa.findAttachment(qa);if(ua)ta.attachment=ua;}pa.$PubcontentFeedChainingControllerX47(ta.attachment,ta);};if(oa.in_smooth_injection_experiment){ra(oa);}else setTimeout(ra.bind(this,oa),c('AttachmentRelatedShareConstants').EVENT_DELAY);};ja.prototype.$PubcontentFeedChainingControllerX24=function(na,oa){var pa=this,qa=this.findStory(oa.attachment);setTimeout(function(){if(qa)var ra=pa.findContainer(qa);pa.$PubcontentFeedChainingControllerX48(qa,oa.global_share_id,c('getOrCreateDOMID')(ra));},c('AttachmentRelatedShareConstants').EVENT_DELAY);};ja.prototype.$PubcontentFeedChainingControllerX26=function(na,oa){var pa=this.findStory(oa.attachment);if(pa){var qa=this.findAttachment(pa);if(qa)oa.attachment=qa;}this.$PubcontentFeedChainingControllerX40(oa.attachment,{origin:x,event_id:oa.event_id});};ja.prototype.$PubcontentFeedChainingControllerX27=function(na,oa){oa.origin=q;var pa=this.findStory(oa.attachment);if(pa){var qa=this.findAttachment(pa);if(qa)oa.attachment=qa;}this.$PubcontentFeedChainingControllerX49(oa.attachment,oa);};ja.prototype.$PubcontentFeedChainingControllerX28=function(na,oa){this.$PubcontentFeedChainingControllerX37(oa.attachment,{story_id:oa.story_id,origin:z},c('LEDExperimentEntryPoint').ATTACHMENT);};ja.prototype.$PubcontentFeedChainingControllerX29=function(na,oa){var pa=this.findStory(oa.button);if(!pa)return;this.$PubcontentFeedChainingControllerX37(pa,{story_id:oa.story_id,origin:z},c('LEDExperimentEntryPoint').ATTACHMENT);};ja.prototype.$PubcontentFeedChainingControllerX18=function(na,oa){var pa=this;setTimeout(function(){pa.$PubcontentFeedChainingControllerX50(oa.markup.firstChild,{origin:y,content_id:oa.content_id});},this.$PubcontentFeedChainingControllerX9.composer_publish_action);};ja.prototype.$PubcontentFeedChainingControllerX51=function(na){return !!(na&&na.id&&!c('CSS').matchesSelector(na,"._sf6")&&!(na.id in this.$PubcontentFeedChainingControllerX11)&&!c('DOM').scry(na,"._4ecf")[0]);};ja.prototype.$PubcontentFeedChainingControllerX52=function(na){if(!na)return false;if(na.origin in this.$PubcontentFeedChainingControllerX1||na.origin in this.$PubcontentFeedChainingControllerX2||na.origin in this.$PubcontentFeedChainingControllerX4||na.origin in this.$PubcontentFeedChainingControllerX3||na.origin in this.$PubcontentFeedChainingControllerX7||na.origin in this.$PubcontentFeedChainingControllerX8||na.origin in this.$PubcontentFeedChainingControllerX9||na.origin in this.$PubcontentFeedChainingControllerX5||na.origin in this.$PubcontentFeedChainingControllerX6||na.origin in this.$PubcontentFeedChainingControllerX10||na.origin===q||na.origin===s||na.origin===z||na.origin===aa||na.origin===ba)return true;return false;};ja.prototype.$PubcontentFeedChainingControllerX53=function(na){this.$PubcontentFeedChainingControllerX11[na]=true;};ja.prototype.$PubcontentFeedChainingControllerX43=function(na){delete this.$PubcontentFeedChainingControllerX11[na];};ja.prototype.$PubcontentFeedChainingControllerX32=function(na){if(!na)return false;var oa="_3lkn",pa=na.nextSibling,qa=true;if(pa&&pa.firstChild){var ra=pa.firstChild;qa=!(ra.hasChildNodes()&&c('CSS').hasClass(ra,oa));}if(!qa)return false;var sa=na.children[0],ta=na.children[1],ua="_4_ck";if(sa&&c('CSS').hasClass(sa,ua)||ta&&c('CSS').hasClass(ta,ua))return false;return true;};ja.prototype.$PubcontentFeedChainingControllerX33=function(na){if(!na)return true;var oa=c('DOM').scry(na,"._1xwr");if(oa.length)return true;return false;};ja.prototype.$PubcontentFeedChainingControllerX42=function(na,oa){var pa=this.findStory(na);if(!this.$PubcontentFeedChainingControllerX51(pa))return null;if(!this.$PubcontentFeedChainingControllerX52(oa))return null;if(oa.in_place_pivot)return {chainingWrapper:pa.firstChild,story:pa,is_auto_expand:oa.is_auto_expand};this.$PubcontentFeedChainingControllerX53(pa.id);if(ka(pa)&&oa.chaining_type!=='contextual_recommendations')return null;var qa;if(!oa.continued_chaining){qa=this.findContainer(pa);if(!qa)return null;var ra=c('DOM').create('div'),sa=c('DOM').appendContent(qa,ra);if(sa.length!==1)return null;}else{qa=pa;ra=c('DOM').create('div');sa=c('DOM').insertAfter(qa,ra);c('DOM').remove(qa);if(sa.length!==1)return null;}if(oa.is_auto_expand){return {chainingWrapper:sa[0],story:pa,is_auto_expand:oa.is_auto_expand};}else return {chainingWrapper:sa[0],story:pa};};ja.prototype.$PubcontentFeedChainingControllerX30=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=this.findStreamRoot(pa.story);if(!qa)return false;var ra=qa.getAttribute('id'),sa=c('XFeedAdsChainingController').getURIBuilder().setString('actor_id',oa.actor_id).setString('origin',oa.origin).setString('ei',oa.client_token).setString('data_ownerid',ra);if(oa.ft_id)sa.setString('ft_id',oa.ft_id);new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(sa.getURI()).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX47=function(na,oa){var pa,qa=this;if(!this.$PubcontentFeedChainingControllerX32(this.findStory(na)))return false;var ra=this.$PubcontentFeedChainingControllerX42(na,oa);if(!ra)return false;c('CSS').addClass(ra.chainingWrapper,"_3lkn");var sa=null;if(oa.fbvideo_id){sa=c('XPubcontentRelatedVideoChainingController').getURIBuilder();sa.setInt('fbvideo_id',oa.fbvideo_id);}else{sa=c('XPubcontentRelatedShareChainingController').getURIBuilder();sa.setInt('global_share_id',oa.global_share_id);}sa.setString('attachment_div_id',c('getOrCreateDOMID')(oa.attachment));if(oa.ft_id)sa.setString('ft_id',oa.ft_id);if(oa.link_url)sa.setString('link_url',oa.link_url);if(oa.video_div_id)sa.setString('video_div_id',oa.video_div_id);if(oa.share_id)sa.setString('share_id',oa.share_id);var ta=JSON.parse(c('DataAttributeUtils').getDataFt(ra.story))||{};if('qid' in ta&&'mf_story_key' in ta){sa.setString('qid',ta.qid);sa.setString('mf_story_key',ta.mf_story_key);}if(oa.is_auto_expand){this.$PubcontentFeedChainingControllerX43(ra.story.id);sa.setBool('is_auto_expand',oa.is_auto_expand);}var ua=new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,ra.story.id)).setRelativeTo(ra.chainingWrapper).setAllowCrossPageTransition(true).setURI(sa.getURI());ta&&ua.setData(ta);if(oa.in_smooth_injection_experiment)(function(){var va=null,wa=c('Event').listen(window,'scroll',function(){this.$PubcontentFeedChainingControllerX54=true;if(va!==null)clearTimeout(va);va=setTimeout(function(){this.$PubcontentFeedChainingControllerX54=false;this.$PubcontentFeedChainingControllerX12&&this.$PubcontentFeedChainingControllerX12();this.$PubcontentFeedChainingControllerX12=null;}.bind(this),ca);}.bind(qa));c('CSS').hide(ra.chainingWrapper);ua.setHandler(function(xa){if(!this.$PubcontentFeedChainingControllerX54){this.$PubcontentFeedChainingControllerX55(na,ra.chainingWrapper,wa);}else this.$PubcontentFeedChainingControllerX12=this.$PubcontentFeedChainingControllerX55.bind(this,na,ra.chainingWrapper,wa);}.bind(qa));})();ua.send();return true;};ja.prototype.$PubcontentFeedChainingControllerX48=function(na,oa,pa){if(!this.$PubcontentFeedChainingControllerX51(na))return null;this.$PubcontentFeedChainingControllerX53(na.id);var qa=c('XRelatedGamesChainingController').getURIBuilder().setInt('app_id',oa).setString('attachment_div_id',pa);new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,na.id)).setURI(qa.getURI()).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX31=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=this.findStory(na),ra=c('XPubcontentFeedChainingController').getURIBuilder().setString('actor_id',oa.actor_id).setString('origin',oa.origin).setString('referrer',oa.referrer).setString('trigger',oa.trigger).setBool('is_home_request',this.$PubcontentFeedChainingControllerX44()).setBool('is_sponsored',ka(qa)).setEnum('reaction_type',oa.reaction_type);if(oa.ft_id)ra.setString('ft_id',oa.ft_id);if(oa.content_id)ra.setString('content_id',oa.content_id);if(oa.only_qp_allowed)ra.setBool('only_qp_allowed',oa.only_qp_allowed);new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(ra.getURI()).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX40=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=c('XEventRelatedEventsPivotController').getURIBuilder().setInt('event_id',oa.event_id).setString('attachment_id',c('getOrCreateDOMID')(na)).setString('trigger_action',oa.origin).getURI();new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(qa).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX21=function(na,oa){return function(pa,qa){var ra={origin:z};if(qa.storyid){ra.story_id=qa.storyid;}else{var sa=this.findStory(qa.attachment);if(!sa)return na;ra.ft_id=this.findFeedbackTargetId(sa);}return this.$PubcontentFeedChainingControllerX37(qa.attachment,ra,oa,function(){return na(pa,qa);});}.bind(this);};ja.prototype.$PubcontentFeedChainingControllerX37=function(na,oa,pa,qa){var ra=c('XLEDFollowUpFeedUnitController').getURIBuilder().setEnum('entry_point',pa);if(oa.ft_id)ra=ra.setString('ft_id',oa.ft_id);if(oa.story_id)ra=ra.setString('story_id',oa.story_id);var sa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!sa){qa&&qa();return;}new (c('AsyncRequest'))().setErrorHandler(function(){this.$PubcontentFeedChainingControllerX43(sa.story.id);qa&&qa();}.bind(this)).setHandler(function(ta){if(!ta.payload.is_chained){this.$PubcontentFeedChainingControllerX43(sa.story.id);qa&&qa();}}.bind(this)).setRelativeTo(sa.chainingWrapper).setURI(ra.getURI()).setAllowCrossPageTransition(true).send();};ja.prototype.$PubcontentFeedChainingControllerX35=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=c('XSpokespersonProductChainingController').getURIBuilder().setString('ft_id',oa.ft_id).setEnum('reaction_type',oa.reaction_type).getURI();new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(qa).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX49=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=c('XPubcontentCommerceProductChainingController').getURIBuilder().setString('attachment_id',c('getOrCreateDOMID')(na)).setInt('product_id',oa.product_id).getURI();new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(qa).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX50=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=c('XSearchRelatedPostsPivotController').getURIBuilder().setString('origin',oa.origin).setString('content_id',String(oa.content_id));new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(qa.getURI()).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX41=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=c('XPubcontentFeedCommentChainingController').getURIBuilder().setString('action_trigger',String(oa.action_trigger));if(oa.ft_id)qa.setString('ft_id',oa.ft_id);new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(qa.getURI()).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX36=function(na,oa){var pa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!pa)return false;var qa=c('XPubcontentGroupRelatedStoriesChainingController').getURIBuilder().setInt('post_id',oa.post_id).setBool('is_home_request',this.$PubcontentFeedChainingControllerX44()).getURI();new (c('AsyncRequest'))().setErrorHandler(this.$PubcontentFeedChainingControllerX43.bind(this,pa.story.id)).setRelativeTo(pa.chainingWrapper).setURI(qa).setAllowCrossPageTransition(true).send();return true;};ja.prototype.$PubcontentFeedChainingControllerX34=function(na,oa){var pa=c('XFundraiserAttachmentPivotController').getURIBuilder();if(oa.ft_id)pa=pa.setString('ft_id',oa.ft_id);var qa=this.$PubcontentFeedChainingControllerX42(na,oa);if(!qa)return;new (c('AsyncRequest'))().setRelativeTo(qa.chainingWrapper).setURI(pa.getURI()).setAllowCrossPageTransition(true).send();};ja.prototype.findStory=function(na){var oa="^div._3lb4",pa=c('DOM').scry(na,oa);return pa.length===1?pa[0]:null;};ja.prototype.findFeedbackTargetId=function(na){if(ma(na)){var oa=c('DOMQuery').scry(na,"input[name='ft_ent_identifier']"),pa=oa.find(function(sa){return !la(sa);});if(!pa)return null;return pa.value;}else if(da){var qa=c('DOMQuery').scry(na,"input[name='ft_ent_identifier']")[0];if(!qa)return null;return qa.value;}else{var ra=c('DOMQuery').find(na,"input[name='ft_ent_identifier']");if(!ra)return null;return ra.value;}};ja.prototype.findAttachment=function(na){var oa="div._6m2",pa="div.iframeEmbed",qa=c('DOM').scry(na,oa)[0]||c('DOM').scry(na,pa)[0];return qa;};ja.prototype.findContainer=function(na){var oa=c('DOM').create('div'),pa=c('DOM').insertAfter(na,oa);c('ContextualThing').register(oa,na);return pa.length>=1?pa[0]:null;};ja.prototype.findStreamRoot=function(na){var oa="^div._4ikz";return c('DOM').scry(na,oa)[0];};ja.prototype.findAdClientToken=function(na){var oa=this.findStory(na);if(!oa)return null;var pa=c('DataAttributeUtils').getDataFt(oa);if(!pa)return null;var qa=JSON.parse(pa);return qa[ja.getAdClientTokenIndex()];};ja.prototype.shouldPuntGroupChaining=function(na){var oa="^._4ruh";return c('DOM').scry(na,oa).length>=1;};ja.prototype.$PubcontentFeedChainingControllerX44=function(){var na=c('URI').getRequestURI(false);return na.getPath()==='/'||na.getPath()==='/home.php';};ja.prototype.$PubcontentFeedChainingControllerX55=function(na,oa,pa){var qa=c('PubcontentFeedChainingInjectionUtils').isEligibleToInject(na);if(qa){c('CSS').show(oa);c('Arbiter').inform(c('LitestandMessages').STORIES_INSERTED);}else c('DOM').empty(oa);pa.remove();};function ka(na){if(ha&&ia){return c('DOM').scry(na,ha).length>0&&c('DOM').scry(na,ia).length===0;}else return c('DOM').scry(na,"._5paw").length>0&&c('DOM').scry(na,"._14zs").length===0;}function la(na){return !!na&&(c('CSS').matchesSelector(na,ea)||!!c('Parent').bySelector(na,ea));}function ma(na){return !!na&&c('DOM').scry(na,ea).length>0;}f.exports=ja;}),null);
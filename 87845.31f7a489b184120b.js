"use strict";(self.webpackChunkJbNotifier=self.webpackChunkJbNotifier||[]).push([[87845],{87845:(ht,f,r)=>{r.r(f),r.d(f,{CronExpressionsJobListModule:()=>vt});var c=r(96814),m=r(23758),p=r(35461),v=r(93116),d=r(85054);const b=[{type:"buttons",fixed:!0,buttons:[{name:"delete",template:"grid-delete-button",visible:i=>i.row.data.isDeletable}],width:36},{name:"tenantName",caption:"\u79df\u6236\u540d\u7a31",dataType:"string",filterOperations:p.I$.text,headerCellTemplate:"tenantName",minWidth:120},{dataField:"name",caption:"\u901a\u77e5\u540d\u7a31",dataType:"string",filterOperations:p.I$.text,validationRules:[d.L],headerCellTemplate:"notificationName",minWidth:120},{name:"notificationProviders",caption:"\u901a\u77e5\u63d0\u4f9b\u8005\u540d\u7a31 (\u591a\u7b46)",dataType:"string",filterOperations:p.I$.text,calculateDisplayValue:i=>i.notificationProviders?.map(o=>o.displayName).join("\u3001"),headerCellTemplate:"notificationProviders",minWidth:120},{name:"notificationCategoryName",caption:"\u5206\u985e\u540d\u7a31",dataType:"string",filterOperations:p.I$.text,headerCellTemplate:"notificationCategoryName",minWidth:120},{dataField:"title",caption:"\u6a19\u984c",dataType:"string",filterOperations:p.I$.text,validationRules:[d.L],headerCellTemplate:"notificationTitle",minWidth:120},{name:"receiverDescription",caption:"\u63a5\u6536\u8005\u63cf\u8ff0",dataType:"string",filterOperations:p.I$.text,headerCellTemplate:"receiverDescription",minWidth:120},{dataField:"notificationDataFetchEndpoint",caption:"\u53d6\u5f97\u901a\u77e5\u8cc7\u6599 Endpoint",dataType:"string",filterOperations:p.I$.text,headerCellTemplate:"notificationDataFetchEndpoint",minWidth:120},{dataField:"hookEndpoint",caption:"Hook",dataType:"string",filterOperations:p.I$.text,headerCellTemplate:"hookEndpoint",minWidth:120},{dataField:"expectedEndTime",caption:"\u9810\u8a08\u7d50\u675f\u6642\u9593",dataType:"datetime",filterOperations:p.I$.datetime,headerCellTemplate:"expectedEndTime",minWidth:120,calculateDisplayValue:i=>i.notificationSchedulePlan?.expectedEndTime?(0,v.m)(i.notificationSchedulePlan?.expectedEndTime):""},{dataField:"expectedPushCount",caption:"\u9810\u8a08\u63a8\u9001\u6b21\u6578",dataType:"number",filterOperations:p.I$.number,headerCellTemplate:"expectedPushCount",minWidth:120,alignment:"left"},{dataField:"isFullyFinished",caption:"\u662f\u5426\u5df2\u5b8c\u6210",dataType:"boolean",headerCellTemplate:"isFullyFinished",minWidth:120},{dataField:"notificationProviderIds",caption:"\u901a\u77e5\u63d0\u4f9b\u8005id (\u53ef\u8907\u9078)",dataType:"object",visible:!1,editCellTemplate:"notificationProviderIds",validationRules:[d.L]},{dataField:"isSendToAllReceivers",caption:"\u63a5\u6536\u8005",dataType:"boolean",visible:!1,editCellTemplate:"isSendToAllReceivers"},{dataField:"receiverIds",caption:"\u63a5\u6536\u8005 (\u53ef\u8907\u9078)",dataType:"object",visible:!1,editCellTemplate:"receiverIds"},{dataField:"receiverGroupIds",caption:"\u63a5\u6536\u7fa4\u7d44 (\u53ef\u8907\u9078)",dataType:"object",visible:!1,editCellTemplate:"receiverGroupIds"},{dataField:"topicIds",caption:"\u4e3b\u984c (\u53ef\u8907\u9078)",dataType:"object",visible:!1,editCellTemplate:"topicIds"},{dataField:"isIndependentNotificationSettingUsing",caption:"\u901a\u77e5\u8a2d\u5b9a",dataType:"boolean",visible:!1,editCellTemplate:"isIndependentNotificationSettingUsing"},{dataField:"notificationSettings",caption:"\u901a\u77e5\u8a2d\u5b9a\u9805\u76ee",dataType:"object",visible:!1,editCellTemplate:"notificationSettings"},{dataField:"notificationCategoryId",caption:"\u901a\u77e5\u5206\u985e Id",dataType:"string",visible:!1,validationRules:[d.L]},{dataField:"subtitle",caption:"\u5b50\u6a19\u984c",dataType:"string",visible:!1,validationRules:[d.L]},{dataField:"textContent",caption:"\u6587\u5b57\u5167\u5bb9",dataType:"string",visible:!1},{dataField:"htmlContent",caption:"Html \u5167\u5bb9",dataType:"string",visible:!1},{dataField:"isFetchNotificationDataByEachReceiver",caption:"\u662f\u5426\u4f9d\u5404\u901a\u77e5\u63a5\u6536\u8005\u53d6\u5f97\u8cc7\u6599",dataType:"string",visible:!1},{dataField:"filePaths",dataType:"string",visible:!1},{dataField:"hyperlink",dataType:"string",visible:!1},{dataField:"isUsingTemplate",caption:"\u6a21\u677f",dataType:"boolean",visible:!1,editCellTemplate:"isUsingTemplate"},{dataField:"textContentNotificationTemplateId",caption:"\u901a\u77e5\u6a21\u677f Id",dataType:"string",visible:!1},{dataField:"textContentNotificationTemplateArgs",caption:"\u901a\u77e5\u6a21\u677f\u53c3\u6578",dataType:"string",visible:!1,editCellTemplate:"textContentNotificationTemplateArgs"}],h={index:"/api/app/jbnotifier-admin/cron-expressions/notifications",get:"/api/app/jbnotifier-admin/cron-expressions/notifications",create:"/api/app/jbnotifier-admin/cron-expressions/notifications",update:"/api/app/jbnotifier-admin/cron-expressions/notifications",delete:"/api/app/jbnotifier-admin/cron-expressions/notifications"},y=[{dataField:"notificationProviderIds",path:"/api/app/recurring-notifications/notification-provider-lookup"},{dataField:"receiverIds",path:"/api/app/recurring-notifications/receiver-lookup",pathForSelectedDisplay:"/api/app/jbnotifier-admin/receivers"},{dataField:"receiverGroupIds",path:"/api/app/recurring-notifications/receiver-group-lookup",pathForSelectedDisplay:"/api/app/jbnotifier-admin/receiver-groups"},{dataField:"topicIds",path:"/api/app/recurring-notifications/topic-lookup",pathForSelectedDisplay:"/api/app/jbnotifier-admin/topics"},{dataField:"textContentNotificationTemplateId",path:"/api/app/recurring-notifications/notification-template-lookup",pathForSelectedDisplay:"/api/app/jbnotifier-admin/notification-templates"},{dataField:"receiverGroupIds",path:"/api/app/recurring-notifications/receiver-group-lookup",pathForSelectedDisplay:"/api/app//receiver-groups"},{dataField:"notificationCategoryId",path:"/api/app/recurring-notifications/notification-category-lookup",pathForSelectedDisplay:"/api/app/notification-categories"}],g=[{dataField:"id",mapping:["notificationInfo","id"]},{dataField:"concurrencyStamp",mapping:["notificationInfo","concurrencyStamp"]},{dataField:"type",mapping:["notificationInfo","type"]},{dataField:"title",queryStringKey:"Title",mapping:["notificationInfo","title"]},{name:"name",queryStringKey:"Name",mapping:["notificationInfo","name"]},{name:"tenantName",queryStringKey:"TenantName",mapping:["tenant","name"]},{name:"notificationCategoryName",queryStringKey:"NotificationCategoryName",mapping:["notificationCategory","name"]},{name:"notificationProviders",queryStringKey:"NotificationProviderNames",mapping:["notificationProviders"]},{name:"receiverDescription",queryStringKey:"ReceiverDescription",mapping:["receiverDescription"]},{dataField:"notificationDataFetchEndpoint",queryStringKey:"NotificationDataFetchEndpoint",mapping:["notificationInfo","notificationDataFetchEndpoint"]},{dataField:"hookEndpoint",queryStringKey:"HookEndpoint",mapping:["notificationInfo","hookEndpoint"]},{dataField:"isFullyFinished",queryStringKey:"IsFullyFinished",mapping:["notificationInfo","isFullyFinished"]},{name:"isDeletable",queryStringKey:"IsDeletable",mapping:["isDeletable"]},{name:"isEditable",queryStringKey:"IsEditable",mapping:["isEditable"]},{dataField:"notificationProviderIds",mapping:["notificationProviderIds"]},{dataField:"isSendToAllReceivers",mapping:["notificationInfo","isSendToAllReceivers"]},{dataField:"receiverIds",mapping:["receiverIds"]},{dataField:"receiverGroupIds",mapping:["receiverGroupIds"]},{dataField:"topicIds",mapping:["topicIds"]},{dataField:"isIndependentNotificationSettingUsing",mapping:["notificationInfo","isIndependentNotificationSettingUsing"]},{dataField:"notificationSettings",mapping:["notificationSettings"]},{dataField:"notificationCategoryId",mapping:["notificationCategory","id"]},{dataField:"subtitle",mapping:["notificationInfo","subtitle"]},{dataField:"textContent",mapping:["notificationInfo","textContent"]},{dataField:"htmlContent",mapping:["notificationInfo","htmlContent"]},{dataField:"isFetchNotificationDataByEachReceiver",mapping:["notificationInfo","isFetchNotificationDataByEachReceiver"]},{dataField:"filePaths",mapping:["notificationInfo","filePaths"]},{dataField:"hyperlink",mapping:["notificationInfo","hyperlink"]},{dataField:"textContentNotificationTemplateId",mapping:["textContentNotificationTemplate","id"]},{dataField:"htmlContentNotificationTemplateId",mapping:["htmlContentNotificationTemplate","id"]},{dataField:"textContentNotificationTemplateArgs",mapping:["notificationInfo","textContentNotificationTemplateArgs"]},{dataField:"htmlContentNotificationTemplateArgs",mapping:["notificationInfo","htmlContentNotificationTemplateArgs"]},{name:"notificationSchedulePlan",mapping:["notificationSchedulePlan"]},{dataField:"expectedPushCount",mapping:["notificationSchedulePlan","expectedPushCount"]},{dataField:"expectedEndTime",mapping:["notificationSchedulePlan","expectedEndTime"]}],u=[{itemType:"group",name:"CronExpressionGroup",cssClass:"CronExpressionGroup",colCount:2,caption:"\u6bcf\u5206\u9418 | ******",items:[{dataField:"expectedPushCount",editorType:"dxNumberBox",editorOptions:{min:0}},{dataField:"expectedEndTime",editorType:"dxDateBox",editorOptions:{dateSerializationFormat:"yyyy-MM-ddTHH:mm:ss.SSS+08:00"}}]},{itemType:"group",name:"TopGroup",cssClass:"TopGroup",colCount:8,items:[{itemType:"group",name:"BasicGroup",cssClass:"BasicGroup",caption:"\u57fa\u672c",colSpan:5,items:[{dataField:"notificationProviderIds",label:{visible:!1}},{dataField:"isSendToAllReceivers",cssClass:"isSendToAllReceivers"},{dataField:"receiverIds",label:{visible:!1}},{dataField:"receiverGroupIds",label:{visible:!1}},{dataField:"topicIds",label:{visible:!1}}]},{itemType:"group",name:"SettingGroup",cssClass:"SettingGroup",caption:"\u8a2d\u5b9a",colSpan:3,items:[{dataField:"isIndependentNotificationSettingUsing"},{dataField:"notificationSettings",label:{visible:!1}}]}]},{itemType:"group",name:"NotificationContentGroup",cssClass:"NotificationContentGroup",caption:"\u901a\u77e5\u5167\u5bb9",colCount:2,items:[{dataField:"isUsingTemplate",cssClass:"isUsingTemplate",label:{visible:!1}},{itemType:"empty"},{dataField:"notificationCategoryId",editorType:"dxSelectBox"},{itemType:"empty"},{dataField:"title",editorType:"dxTextBox"},{dataField:"subtitle",editorType:"dxTextBox"},{itemType:"group",name:"CustomContentGroup",cssClass:"CustomContentGroup",colSpan:2,colCount:8,items:[{dataField:"textContent",editorType:"dxTextArea",editorOptions:{height:"240px"},colSpan:3},{dataField:"htmlContent",editorType:"dxHtmlEditor",editorOptions:{...r(35130).W,height:"240px"},colSpan:5}]},{itemType:"group",name:"NotificationTemplateGroup",cssClass:"NotificationTemplateGroup NotificationTemplateGroup--inactive",colSpan:2,colCount:2,items:[{dataField:"textContentNotificationTemplateId",editorType:"dxSelectBox"},{itemType:"empty"},{dataField:"textContentNotificationTemplateArgs",label:{visible:!1},colSpan:2}]},{itemType:"group",name:"EndpointGroup",cssClass:"EndpointGroup",colSpan:2,colCount:3,items:[{dataField:"notificationDataFetchEndpoint",editorType:"dxTextBox"},{dataField:"hookEndpoint",editorType:"dxTextBox"},{dataField:"isFetchNotificationDataByEachReceiver",editorType:"dxCheckBox",cssClass:"basic-form-checkbox"}]}]}],_={popup:{title:"::\u7de8\u8f2f",wrapperAttr:{class:"basic-popup"},showCloseButton:!0,toolbarItems:[{toolbar:"bottom",template:"bottom-toolbar"}]},form:{colCount:1,items:u,elementAttr:{class:"custom-form custom-form--edit custom-form--edit-notification"}}},I={popup:{title:"::\u7de8\u8f2f",wrapperAttr:{class:"basic-popup"},showCloseButton:!0,toolbarItems:[{toolbar:"bottom",template:"bottom-toolbar"}]},form:{colCount:1,items:u,elementAttr:{class:"custom-form custom-form--edit custom-form--edit-notification"}}};var S=r(6990),t=r(19212),N=r(67),E=r(32056),J=r(72783),A=r(82310),j=r(16358),Z=r(20843),x=r(2173),O=r(25012),L=r(44347),P=r(27310),Q=r(92931),D=r(60237),T=r(82140);const U=["grid"];function M(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",21)(1,"div",22),t._uU(2),t.qZA(),t.TgZ(3,"div",23),t._uU(4),t.qZA(),t.TgZ(5,"div",24),t.NdJ("click",function(){const l=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.removeFilterItem(l))}),t._UZ(6,"img",25),t.qZA()()}if(2&i){const e=o.$implicit,n=t.oxw();t.xp6(2),t.Oqu(n.showCaption(e[0])+":"),t.xp6(2),t.Oqu(e[2])}}function R(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",26),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.removeAllFilterItems())}),t._uU(1," \u6e05\u9664\u5168\u90e8 "),t.qZA()}}function B(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-bottom-toolbar-btns",7),t.qZA()),2&i){t.oxw();const e=t.MAs(21);t.xp6(),t.Q6J("grid",e)}}function G(i,o){1&i&&t.GkF(0)}const C=i=>({$implicit:i});function $(i,o){if(1&i&&(t.ynx(0),t.YNc(1,G,1,0,"ng-container",20),t.BQk()),2&i){const e=o.$implicit,n=t.oxw().$implicit,a=t.oxw();t.xp6(),t.Q6J("ngTemplateOutlet",a.templateStore.getGridTemplates(n.key))("ngTemplateOutletContext",t.VKq(2,C,e))}}function w(i,o){if(1&i&&(t.ynx(0),t.YNc(1,$,2,4,"ng-container",18),t.BQk()),2&i){const e=o.$implicit;t.xp6(),t.Q6J("dxTemplateOf",e.key)}}function k(i,o){1&i&&t.GkF(0)}const K=(i,o,e)=>({$implicit:i,templateKey:o,notificationTemplateId:e});function Y(i,o){if(1&i&&t.YNc(0,k,1,0,"ng-container",20),2&i){const e=t.oxw().$implicit,n=t.oxw().$implicit,a=t.oxw();t.Q6J("ngTemplateOutlet",a.notificationTemplateStore.getTemplates(n.key))("ngTemplateOutletContext",t.kEZ(2,K,e,n.key,a.notificationTemplateId))}}function W(i,o){1&i&&t.GkF(0)}const H=(i,o)=>({$implicit:i,templateKey:o});function V(i,o){if(1&i&&t.YNc(0,W,1,0,"ng-container",20),2&i){const e=t.oxw().$implicit,n=t.oxw().$implicit,a=t.oxw();t.Q6J("ngTemplateOutlet",a.notificationTemplateStore.getTemplates(n.key))("ngTemplateOutletContext",t.WLB(2,H,e,n.key))}}function q(i,o){if(1&i&&(t.ynx(0),t.YNc(1,Y,1,6,"ng-container")(2,V,1,5),t.BQk()),2&i){const e=t.oxw().$implicit;t.xp6(),t.um2(1,"textContentNotificationTemplateArgs"===e.key?1:2)}}function z(i,o){if(1&i&&(t.ynx(0),t.YNc(1,q,3,1,"ng-container",18),t.BQk()),2&i){const e=o.$implicit;t.xp6(),t.Q6J("dxTemplateOf",e.key)}}function X(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",27),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)("clearTextBox",!1)}}function tt(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function et(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function it(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function nt(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function ot(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function at(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function rt(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function lt(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function st(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function pt(i,o){if(1&i&&(t.TgZ(0,"div"),t._UZ(1,"app-jb-header-filter",28),t.qZA()),2&i){const e=o.$implicit;t.oxw();const n=t.MAs(21);t.xp6(),t.Q6J("cellInfo",e)("grid",n)}}function dt(i,o){1&i&&t.GkF(0)}const ct=()=>({class:"jb-toolbar-button jb-toolbar-button--add"}),mt=()=>({class:"jb-toolbar-button"}),ft=()=>({class:"jb-toolbar-button jb-toolbar-button--density"}),gt=[{path:"",component:(()=>{class i{constructor(e,n,a,l,s,bt){this.route=e,this.router=n,this.gridDataSourceService=a,this.JBHeaderFilterService=l,this.templateStore=s,this.notificationTemplateStore=bt,this.columns=b,this.cRUDEndpoints=h,this.dataFieldLookupSourceMapping=y,this.relatedDataValueAndQueryStringKeyMapping=g,this.editingPropertiesForCreating=_,this.editingPropertiesForUpdating=I,this.gridProperties={elementAttr:{class:"jb-data-grid"},sorting:{mode:"none"},filterRow:{visible:!1},pager:{visible:!1}}}ngOnInit(){this.route.paramMap.subscribe(e=>{this.cronExpression=encodeURIComponent(e.get("cronExpression"))}),this.gridDataSource=this.gridDataSourceService.getDataSource({index:`/api/app/jbnotifier-admin/cron-expressions/${this.cronExpression}/notifications`,create:"/api/app/jbnotifier-admin/cron-expressions/notifications",delete:"/api/app/jbnotifier-admin/cron-expressions/notifications"},g)}ngAfterViewInit(){this.captions=this.grid.instance.getVisibleColumns().map(e=>({name:e.name,caption:e.caption}))}onInitNewRow(e){e.data.cronExpression=this.cronExpression,e.data.isSendToAllReceivers=!0,e.data.isIndependentNotificationSettingUsing=!1,e.data.isUsingTemplate=!1,e.data.isFetchNotificationDataByEachReceiver=!1,e.data.receiverIds=[],e.data.receiverGroupIds=[],e.data.topicIds=[]}onOptionChanged(e){"editing.changes"!==e.fullName&&"editing.editRowKey"!==e.fullName||"object"!=typeof e.value||!e.value||Array.isArray(e.value)&&0===e.value.length||this.checkNotificationTemplateId(e)}onSaving(e){("insert"===e.changes[0].type||"update"===e.changes[0].type)&&(e.changes[0].data.htmlContentNotificationTemplateArgs=e.changes[0].data.textContentNotificationTemplateArgs,e.changes[0].data.htmlContentNotificationTemplateId=e.changes[0].data.textContentNotificationTemplateId)}onContentReady(e){this.filterItems=(0,S.cloneDeep)(e.component.instance().filter()?.filter(n=>!("string"==typeof n||""===n[2].trim())))}checkNotificationTemplateId(e){"editing.changes"===e.fullName&&!("textContentNotificationTemplateId"in e.value[0].data)||"editing.editRowKey"===e.fullName&&!("textContentNotificationTemplateId"in e.value)||(this.notificationTemplateId="editing.changes"===e.fullName?e.value[0].data.textContentNotificationTemplateId:e.value.textContentNotificationTemplateId)}removeFilterItem(e){const n=this.grid.instance.filter().filter(a=>"string"==typeof a||e[0]!==a[0]);this.grid.instance.filter(n),this.JBHeaderFilterService.headerFilterRefs.find(a=>a.headerFilterName.toLowerCase()===e[0].toLowerCase()).headerFilterTextBox.instance.clear()}removeAllFilterItems(){this.grid.instance.filter([]),this.JBHeaderFilterService.headerFilterRefs.forEach(e=>e.headerFilterTextBox.instance.clear())}showCaption(e){return this.captions.find(n=>n.name.toLowerCase()===e.toLowerCase()).caption}static#t=this.\u0275fac=function(n){return new(n||i)(t.Y36(m.gz),t.Y36(m.F0),t.Y36(N.I),t.Y36(E.Y),t.Y36(J.z),t.Y36(A.P))};static#e=this.\u0275cmp=t.Xpm({type:i,selectors:[["app-cron-expressions-job-list"]],viewQuery:function(n,a){if(1&n&&t.Gf(U,5),2&n){let l;t.iGM(l=t.CRH())&&(a.grid=l.first)}},decls:41,vars:37,consts:[[1,"jb-data-grid-container"],[1,"jb-data-grid-toolbar"],[1,"jb-data-grid-toolbar-first"],[1,"jb-data-grid-toolbar-item"],["appCustomButton","","icon","assets/icons/jb-icons/jb-add-icon.svg",3,"elementAttr","onClick"],["appCustomButton","","icon","assets/icons/jb-icons/jb-more-horizontal-icon.svg",3,"elementAttr"],[1,"jb-data-grid-toolbar-empty"],[3,"grid"],[1,"jb-data-grid-toolbar-last"],[1,"jb-toolbar-filter-row"],[1,"jb-toolbar-density"],["appCustomButton","",3,"elementAttr"],["src","assets/icons/jb-icons/jb-density-icon.svg"],[1,"jb-toolbar-filter"],["class","jb-toolbar-filter-item jb-toolbar-filter-item--remove-all"],["appGridFeature","",3,"datafieldValueQueryStringKeyMapping","dataFieldLookUpSourceMapping","editingPropertiesForCreating","editingPropertiesForUpdating","columns","dataSource","gridProperties","onInitNewRow","onOptionChanged","onSaving","onContentReady"],["grid",""],["name","applyFilterButton","cssClass","d-none"],[4,"dxTemplate","dxTemplateOf"],[4,"ngFor","ngForOf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"jb-toolbar-filter-item"],[1,"jb-toolbar-filter-item-name"],[1,"jb-toolbar-filter-item-value"],[1,"jb-toolbar-filter-item-remove",3,"click"],["src","assets/icons/jb-icons/jb-filter-remove-icon.svg"],[1,"jb-toolbar-filter-item","jb-toolbar-filter-item--remove-all",3,"click"],[3,"cellInfo","grid","clearTextBox"],[3,"cellInfo","grid"],["class","jb-toolbar-filter-item"]],template:function(n,a){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"dx-button",4),t.NdJ("onClick",function(){return a.router.navigate(["./cron-expressions/"+a.cronExpression+"/create-notification-info"])}),t.qZA(),t._UZ(5,"dx-button",5),t.qZA(),t._UZ(6,"div",6),t.TgZ(7,"div",3),t._UZ(8,"app-grid-after-tool-bar",7),t.qZA()(),t.TgZ(9,"div",8)(10,"div",9)(11,"div",10)(12,"dx-button",11),t._UZ(13,"img",12),t.TgZ(14,"span"),t._uU(15,"DENSITY"),t.qZA()()(),t.TgZ(16,"div",13),t.SjG(17,M,7,2,"div",29,t.x6l),t.YNc(19,R,2,0,"div",14),t.qZA()()()(),t.TgZ(20,"dx-data-grid",15,16),t.NdJ("onInitNewRow",function(s){return a.onInitNewRow(s)})("onOptionChanged",function(s){return a.onOptionChanged(s)})("onSaving",function(s){return a.onSaving(s)})("onContentReady",function(s){return a.onContentReady(s)}),t.TgZ(22,"dxo-toolbar"),t._UZ(23,"dxi-item",17),t.qZA(),t.YNc(24,B,2,1,"div",18)(25,w,2,1,"ng-container",19),t.ALo(26,"keyvalue"),t.YNc(27,z,2,1,"ng-container",19),t.ALo(28,"keyvalue"),t.YNc(29,X,2,3,"div",18)(30,tt,2,2,"div",18)(31,et,2,2,"div",18)(32,it,2,2,"div",18)(33,nt,2,2,"div",18)(34,ot,2,2,"div",18)(35,at,2,2,"div",18)(36,rt,2,2,"div",18)(37,lt,2,2,"div",18)(38,st,2,2,"div",18)(39,pt,2,2,"div",18),t.qZA(),t.YNc(40,dt,1,0,"ng-container",20),t.qZA()),2&n){const l=t.MAs(21);t.xp6(4),t.Q6J("elementAttr",t.DdM(32,ct)),t.xp6(),t.Q6J("elementAttr",t.DdM(33,mt)),t.xp6(3),t.Q6J("grid",l),t.xp6(4),t.Q6J("elementAttr",t.DdM(34,ft)),t.xp6(5),t.wJu(a.filterItems),t.xp6(2),t.um2(19,(null==a.filterItems?null:a.filterItems.length)>1?19:-1),t.xp6(),t.Q6J("datafieldValueQueryStringKeyMapping",a.relatedDataValueAndQueryStringKeyMapping)("dataFieldLookUpSourceMapping",a.dataFieldLookupSourceMapping)("editingPropertiesForCreating",a.editingPropertiesForCreating)("editingPropertiesForUpdating",a.editingPropertiesForUpdating)("columns",a.columns)("dataSource",a.gridDataSource)("gridProperties",a.gridProperties),t.xp6(4),t.Q6J("dxTemplateOf","bottom-toolbar"),t.xp6(),t.Q6J("ngForOf",t.lcZ(26,28,a.templateStore.gridTemplates)),t.xp6(2),t.Q6J("ngForOf",t.lcZ(28,30,a.notificationTemplateStore.templates)),t.xp6(2),t.Q6J("dxTemplateOf","tenantName"),t.xp6(),t.Q6J("dxTemplateOf","notificationName"),t.xp6(),t.Q6J("dxTemplateOf","notificationProviders"),t.xp6(),t.Q6J("dxTemplateOf","notificationCategoryName"),t.xp6(),t.Q6J("dxTemplateOf","notificationTitle"),t.xp6(),t.Q6J("dxTemplateOf","receiverDescription"),t.xp6(),t.Q6J("dxTemplateOf","notificationDataFetchEndpoint"),t.xp6(),t.Q6J("dxTemplateOf","hookEndpoint"),t.xp6(),t.Q6J("dxTemplateOf","expectedEndTime"),t.xp6(),t.Q6J("dxTemplateOf","expectedPushCount"),t.xp6(),t.Q6J("dxTemplateOf","isFullyFinished"),t.xp6(),t.Q6J("ngTemplateOutlet",a.notificationTemplateStore.getTemplates("notificationPager"))("ngTemplateOutletContext",t.VKq(35,C,l))}},dependencies:[c.sg,c.tP,j.K,Z.p6,x.ZT3,O.e,x.y1f,L._,P.A,Q.R,D.V,T.j,c.Nd],styles:[".jb-toolbar-density[_ngcontent-%COMP%]{display:flex;align-items:center}.jb-toolbar-filter[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:8px}.jb-toolbar-filter-row[_ngcontent-%COMP%]{background-color:var(--blue-2);min-height:48px;padding:12px 16px;border-radius:12px;display:flex;gap:16px}.jb-toolbar-filter-item[_ngcontent-%COMP%]{padding:4px 8px;border-radius:16px;background-color:var(--white-1);color:var(--gray-1);display:flex;gap:2px}.jb-toolbar-filter-item--remove-all[_ngcontent-%COMP%]{background-color:var(--blue-1);color:var(--white-1);cursor:default}"]})}return i})()},{path:"create-notification-info",loadChildren:()=>Promise.all([r.e(68592),r.e(49892)]).then(r.bind(r,49892)).then(i=>i.CreateNotificationInfoModule)}];let ut=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(gt),m.Bz]})}return i})();var xt=r(5533),Tt=r(31610),Ct=r(41992);let vt=(()=>{class i{static#t=this.\u0275fac=function(n){return new(n||i)};static#e=this.\u0275mod=t.oAB({type:i});static#i=this.\u0275inj=t.cJS({imports:[c.ez,xt.P,ut,Tt.m,Ct.e,T.j]})}return i})()}}]);
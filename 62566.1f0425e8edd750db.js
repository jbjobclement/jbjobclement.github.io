"use strict";(self.webpackChunkJbNotifier=self.webpackChunkJbNotifier||[]).push([[62566],{62566:(q,m,o)=>{o.r(m),o.d(m,{NotificationCategoriesModule:()=>H});var p=o(96814),h=o(31610),g=o(88762),u=o(23758);const x=[{type:"buttons",fixed:!0,buttons:[{name:"save",template:"grid-save-button"},{name:"edit",template:"grid-edit-button"},{name:"delete",template:"grid-delete-button"},{name:"cancel",template:"grid-cancel-button"}]},{dataField:"id",visible:!1},{dataField:"idCode",caption:"idCode",dataType:"string"},{dataField:"name",caption:"\u901a\u77e5\u5206\u985e\u540d\u7a31",dataType:"string"},{dataField:"sortingNumber",caption:"\u6392\u5e8f",dataType:"number",visible:!1},{dataField:"concurrencyStamp",visible:!1},{dataField:"parentNotificationCategoryId",caption:"",dataType:"string",visible:!1}],l={index:"/api/app/notification-categories",get:"/api/app/notification-categories",create:"/api/app/notification-categories",update:"/api/app/notification-categories",delete:"/api/app/notification-categories"},I=[{dataField:"SpecifiedTenantId",path:"/api/app/jbnotifier-admin/api-keys/assignable-tenants"}],f=[{dataField:"id",mapping:["id"]},{dataField:"concurrencyStamp",mapping:["concurrencyStamp"]},{dataField:"tenantId",queryStringKey:"TenantId",mapping:["tenantId"]},{name:"tenantCode",queryStringKey:"TenantId",mapping:["tenant"]},{name:"tenantName",queryStringKey:"TenantId",mapping:["tenant"]},{dataField:"parentNotificationCategoryId",queryStringKey:"ParentNotificationCategoryId",mapping:["parentNotificationCategoryId"]},{name:"parentNotificationCategoryCode",queryStringKey:"ParentNotificationCategoryId",mapping:["parentNotificationCategory"]},{name:"parentNotificationCategoryName",queryStringKey:"ParentNotificationCategoryId",mapping:["parentNotificationCategory"]},{dataField:"name",queryStringKey:"Name",mapping:["name"]},{dataField:"idCode",queryStringKey:"IdCode",mapping:["idCode"]}],F={popup:{title:"::\u65b0\u589e",wrapperAttr:{class:"basic-popup"},showCloseButton:!0,toolbarItems:[{toolbar:"bottom",template:"bottom-toolbar"}],width:500},form:{colCount:1,items:[{dataField:"idCode",editorType:"dxTextBox"},{dataField:"name",editorType:"dxTextBox"},{dataField:"sortingNumber",editorType:"dxNumberBox",editorOptions:{min:1}}],elementAttr:{class:"custom-form custom-form--edit"}}},w={popup:{title:"::\u7de8\u8f2f",wrapperAttr:{class:"basic-popup"},showCloseButton:!0,toolbarItems:[{toolbar:"bottom",template:"bottom-toolbar"}],width:500},form:{colCount:1,items:[{dataField:"name",editorType:"dxTextBox"},{dataField:"sortingNumber",editorType:"dxNumberBox",editorOptions:{min:1}}],elementAttr:{class:"custom-form custom-form--edit"}}},b=[];var D=o(10708),R=o(37398),t=o(19212),M=o(67),_=o(72783),P=o(67846),A=o(39150),K=o(65343),V=o(92931),G=o(16358),C=o(95051),E=o(20843),v=o(2173),O=o(25012),y=o(12305);const Q=["grid"],J=["treeview"];function Z(a,c){1&a&&t.GkF(0)}const B=a=>({$implicit:a});function U(a,c){if(1&a&&(t.ynx(0),t.YNc(1,Z,1,0,"ng-container",12),t.BQk()),2&a){const e=c.$implicit,n=t.oxw().$implicit,i=t.oxw();t.xp6(),t.Q6J("ngTemplateOutlet",i.templateStore.getGridTemplates(n.key))("ngTemplateOutletContext",t.VKq(2,B,e))}}function k(a,c){if(1&a&&(t.ynx(0),t.YNc(1,U,2,4,"ng-container",10),t.BQk()),2&a){const e=c.$implicit;t.xp6(),t.Q6J("dxTemplateOf",e.key)}}function Y(a,c){if(1&a&&(t.TgZ(0,"div"),t._UZ(1,"app-bottom-toolbar-btns",11),t.qZA()),2&a){t.oxw();const e=t.MAs(7);t.xp6(),t.Q6J("grid",e)}}const L=()=>({class:"custom-tree-view"}),$=[{path:"",component:(()=>{class a{constructor(e,n,i,d){this.gridDataSourceService=e,this.templateStore=n,this.appRestService=i,this.configStateService=d,this.columns=x,this.cRUDEndpoints=l,this.dataFieldLookupSourceMapping=I,this.dataFieldTranslationKeysMapping=b,this.relatedDataValueAndQueryStringKeyMapping=f,this.editingPropertiesForCreating=F,this.editingPropertiesForUpdating=w,this.gridProperties={toolbar:{visible:!1}},this.breadCrumbData=[],this.treeViewDataSource=[],this.setGridDataSource=s=>{this.gridDataSource=this.gridDataSourceService.getDataSource(l,f,{override:{load:r=>{r.filter=this.gridDataSourceService.getFlattenedFilter(r.filter);const X=this.gridDataSourceService.getSortingString(r),W=this.gridDataSourceService.getFilterKeyValue(r);return(0,D.n)(this.appRestService.request({url:l.index,method:"GET",params:{ParentNotificationCategoryId:s,Sorting:X,SpecifiedTenantId:this.tenantId,MaxResultCount:r.take,SkipCount:r.skip,...W}}).pipe((0,R.U)(S=>({data:S.items,totalCount:S.totalCount}))))}}})},this.configStateService.getOne$("currentTenant").subscribe(s=>{this.tenantId=s.id})}ngOnInit(){this.setGridDataSource(),this.setTreeViewDataSource()}onInitNewRow(e){const n=this.configStateService.getOne("currentUser");e.data.parentNotificationCategoryId=this.parentNotificationCategoryId,e.data.tenantId=n.tenantId}onRowClick(e){if(e.event.target.classList.contains("dx-button-content"))return;const n=this.treeViewDataSource.find(i=>i.id===e.data.id);this.setGridDataSource(e.data.id),this.treeview.instance.expandItem(n),this.treeview.instance.selectItem(n),this.parentNotificationCategoryId=e.data.id}onRowInserted(e){this.treeViewDataSource.push({id:e.data.id,name:e.data.name,parentId:e.data.parentReceiverGroupId})}onRowRemoved(e){this.treeViewDataSource=this.treeViewDataSource.filter(n=>n.id!==e.data.id)}setTreeViewDataSource(){this.appRestService.request({method:"GET",url:"/api/app/notification-categories"}).subscribe(e=>{const n=e.items.map(i=>({id:i.id,name:i.name,parentId:i.parentReceiverGroupId||"notificationCategories"}));this.treeViewDataSource=n,this.treeViewDataSource.unshift({id:"notificationCategories",name:"\u901a\u77e5\u5206\u985e",parentId:null,selected:!0,expanded:!0})})}onTreeViewItemClick(e){this.setGridDataSource("notificationCategories"===e.itemData.id?null:e.itemData.id),this.treeview.instance.expandItem(e.itemData),this.treeview.instance.selectItem(e.itemData),this.parentNotificationCategoryId=e.itemData.id}static#t=this.\u0275fac=function(n){return new(n||a)(t.Y36(M.I),t.Y36(_.z),t.Y36(g.vgb),t.Y36(g.XJE))};static#e=this.\u0275cmp=t.Xpm({type:a,selectors:[["app-notification-categories"]],viewQuery:function(n,i){if(1&n&&(t.Gf(Q,5),t.Gf(J,5)),2&n){let d;t.iGM(d=t.CRH())&&(i.grid=d.first),t.iGM(d=t.CRH())&&(i.treeview=d.first)}},decls:14,vars:20,consts:[[1,"notification-categories"],[1,"notification-categories-tree-view"],["appGridAddButton","",3,"onClick"],["selectionMode","single","dataStructure","plain","keyExpr","id","displayExpr","name","parentIdExpr","parentId",3,"dataSource","elementAttr","focusStateEnabled","activeStateEnabled","hoverStateEnabled","onItemClick"],["treeview",""],[1,"notification-categories-data-grid"],["appGridFeature","","appGridFeatureNotification","",3,"dataFieldTranslationKeysMapping","datafieldValueQueryStringKeyMapping","dataFieldLookUpSourceMapping","editingPropertiesForCreating","editingPropertiesForUpdating","columns","dataSource","gridProperties","isEditingDataAsync","onInitNewRow","onRowClick","onRowInserted","onRowRemoved"],["grid",""],["name","applyFilterButton","cssClass","d-none"],[4,"ngFor","ngForOf"],[4,"dxTemplate","dxTemplateOf"],[3,"grid"],[4,"ngTemplateOutlet","ngTemplateOutletContext"]],template:function(n,i){if(1&n){const d=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"dx-button",2),t.NdJ("onClick",function(){t.CHM(d);const r=t.MAs(7);return t.KtG(r.instance.addRow())}),t.qZA(),t.TgZ(3,"dx-tree-view",3,4),t.NdJ("onItemClick",function(r){return i.onTreeViewItemClick(r)}),t.qZA()(),t.TgZ(5,"div",5)(6,"dx-data-grid",6,7),t.NdJ("onInitNewRow",function(r){return i.onInitNewRow(r)})("onRowClick",function(r){return i.onRowClick(r)})("onRowInserted",function(r){return i.onRowInserted(r)})("onRowRemoved",function(r){return i.onRowRemoved(r)}),t.TgZ(8,"dxo-toolbar"),t._UZ(9,"dxi-item",8),t.qZA(),t.YNc(10,k,2,1,"ng-container",9),t.ALo(11,"keyvalue"),t.YNc(12,Y,2,1,"div",10),t.qZA(),t._UZ(13,"app-notification-pager",11),t.qZA()()}if(2&n){const d=t.MAs(7);t.xp6(3),t.Q6J("dataSource",i.treeViewDataSource)("elementAttr",t.DdM(19,L))("focusStateEnabled",!1)("activeStateEnabled",!1)("hoverStateEnabled",!1),t.xp6(3),t.Q6J("dataFieldTranslationKeysMapping",i.dataFieldTranslationKeysMapping)("datafieldValueQueryStringKeyMapping",i.relatedDataValueAndQueryStringKeyMapping)("dataFieldLookUpSourceMapping",i.dataFieldLookupSourceMapping)("editingPropertiesForCreating",i.editingPropertiesForCreating)("editingPropertiesForUpdating",i.editingPropertiesForUpdating)("columns",i.columns)("dataSource",i.gridDataSource)("gridProperties",i.gridProperties)("isEditingDataAsync",!0),t.xp6(4),t.Q6J("ngForOf",t.lcZ(11,17,i.templateStore.gridTemplates)),t.xp6(2),t.Q6J("dxTemplateOf","bottom-toolbar"),t.xp6(),t.Q6J("grid",d)}},dependencies:[p.sg,p.tP,P.S,A._,K.f,V.R,G.K,E.p6,C.u,v.ZT3,O.e,v.y1f,y.D,p.Nd],styles:[".notification-categories[_ngcontent-%COMP%]{height:99%;margin-top:24px;padding-top:16px;display:flex}.notification-categories-tree-view[_ngcontent-%COMP%]{flex:1;border-right:1px solid var(--gray-3)}.notification-categories-tree-view[_ngcontent-%COMP%]   dx-tree-view[_ngcontent-%COMP%]{margin-top:4px}.notification-categories-data-grid[_ngcontent-%COMP%]{height:100%;flex:2;padding:0 8px;display:flex;flex-direction:column;justify-content:space-between}.notification-categories-data-grid[_ngcontent-%COMP%]     .dx-datagrid-header-panel{display:none}.notification-categories-data-grid[_ngcontent-%COMP%]     dx-data-grid{padding-top:0;height:90%!important}.notification-categories-data-grid[_ngcontent-%COMP%]     app-notification-pager .pager{margin-top:0}"]})}return a})(),canActivate:[g.a1M,g.nG9]}];let j=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[u.Bz.forChild($),u.Bz]})}return a})();var z=o(5533);let H=(()=>{class a{static#t=this.\u0275fac=function(n){return new(n||a)};static#e=this.\u0275mod=t.oAB({type:a});static#i=this.\u0275inj=t.cJS({imports:[p.ez,j,h.m,z.P,C.V,y.D]})}return a})()}}]);
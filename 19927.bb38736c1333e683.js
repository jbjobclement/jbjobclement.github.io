"use strict";(self.webpackChunkJbNotifier=self.webpackChunkJbNotifier||[]).push([[19927],{19927:(st,g,a)=>{a.r(g),a.d(g,{NotificationSettingsModule:()=>it});var x=a(96814),h=a(31610),u=a(88762),m=a(23758);const C=[{dataField:"items",template:"notification-setting-definition",label:{visible:!1}}];var b=a(37398),p=a(99397),S=a(94664),v=a(10708),T=a(22096),f=a(6990),N=a(86659),I=a(48684),t=a(19212),A=a(53009),D=a(24270),V=a(59444),M=a(15238),Z=a(17374),F=a(27310),E=a(11028),J=a(78012),G=a(16358),_=a(61708),H=a(66782),Q=a(20843),K=a(609),B=a(10518),O=a(74291),k=a(21137);let $=(()=>{class n{constructor(e){this.numberbox=e,this.numberbox.elementAttr={class:"custom-number-box"},this.numberbox.hoverStateEnabled=!1,this.numberbox.focusStateEnabled=!1,this.numberbox.activeStateEnabled=!1}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(_.G))};static#e=this.\u0275dir=t.lG2({type:n,selectors:[["","appNumberBox",""]],standalone:!0})}return n})();const j=["selectbox"];function L(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"dx-select-box",9,10),t.NdJ("valueChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.saveAndDisplayTenantId=i)})("onValueChanged",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.onTenantChanged(i))}),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(),t.Q6J("dataSource",e.tenantsLookupDataSource)("value",e.saveAndDisplayTenantId)}}function P(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div")(1,"div",11)(2,"div",12),t._uU(3),t.qZA(),t.TgZ(4,"div",13)(5,"dx-text-box",14),t.NdJ("valueChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.item.value=i)})("onValueChanged",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.onSettingValueChanged(i))}),t.qZA()(),t.TgZ(6,"div")(7,"dx-button",15),t.NdJ("onClick",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.item.value=i.item.defaultValue)}),t.ALo(8,"abpLocalization"),t.qZA()()()()}if(2&n){const e=t.oxw();t.xp6(3),t.hij(" ",e.item.displayName," "),t.xp6(2),t.Q6J("value",e.item.value),t.xp6(2),t.Q6J("text",t.lcZ(8,3,"::\u9084\u539f\u9810\u8a2d\u503c"))}}const Y=(n,r)=>r.id;function z(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"dx-text-box",21),t.NdJ("valueChange",function(i){t.CHM(e);const s=t.oxw().$implicit;return t.KtG(s.value=i)})("onValueChanged",function(i){t.CHM(e);const s=t.oxw(3);return t.KtG(s.onSettingValueChanged(i))}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("value",e.value)}}function R(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"dx-date-box",22),t.NdJ("valueChange",function(i){t.CHM(e);const s=t.oxw().$implicit;return t.KtG(s.value=i)})("onValueChanged",function(i){t.CHM(e);const s=t.oxw(3);return t.KtG(s.onSettingValueChanged(i))}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("value",e.value)}}function w(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"dx-number-box",23),t.NdJ("valueChange",function(i){t.CHM(e);const s=t.oxw().$implicit;return t.KtG(s.value=i)})("onValueChanged",function(i){t.CHM(e);const s=t.oxw(3);return t.KtG(s.onSettingValueChanged(i))}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("value",e.value)}}function U(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"dx-check-box",24),t.NdJ("valueChange",function(i){t.CHM(e);const s=t.oxw().$implicit;return t.KtG(s.value=i)})("onValueChanged",function(i){t.CHM(e);const s=t.oxw(3);return t.KtG(s.onSettingValueChanged(i))}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("value",e.value)}}function X(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",16)(1,"div",12),t._uU(2),t.qZA(),t.TgZ(3,"div"),t.YNc(4,z,1,1,"dx-text-box",17)(5,R,1,1,"dx-date-box",18)(6,w,1,1,"dx-number-box",19)(7,U,1,1,"dx-check-box",20),t.qZA(),t.TgZ(8,"div")(9,"dx-button",15),t.NdJ("onClick",function(){const s=t.CHM(e).$implicit;return t.KtG(s.value=s.defaultValue)}),t.ALo(10,"abpLocalization"),t.qZA()()()}if(2&n){const e=r.$implicit;t.xp6(2),t.hij(" ",e.displayName," "),t.xp6(2),t.Q6J("ngIf","string"===e.dataType),t.xp6(),t.Q6J("ngIf","datetime"===e.dataType),t.xp6(),t.Q6J("ngIf","int"===e.dataType),t.xp6(),t.Q6J("ngIf","bool"===e.dataType),t.xp6(2),t.Q6J("text",t.lcZ(10,6,"::\u9084\u539f\u9810\u8a2d\u503c"))}}function W(n,r){if(1&n&&(t.TgZ(0,"div"),t.SjG(1,X,11,8,"div",25,Y),t.qZA()),2&n){const e=t.oxw();t.xp6(),t.wJu(e.formData.items)}}const q=()=>({class:"custom-button custom-button--blue"}),tt=[{path:"",component:(()=>{class n{constructor(e,o,i,s,ot){this.appRestService=e,this.configStateService=o,this.toastService=i,this.tenantChooser=s,this.restService=ot,this.formItems=C,this.formData={items:[]},this.isDirty=!1,this.getSettings=()=>this.appRestService.request({method:"GET",url:"/api/app/jbnotifier-admin/notification-settings"}).pipe((0,b.U)(d=>{const c=d.map(l=>{const at=((n,r)=>{switch(r){case"int":return parseInt(n,10);case"string":return String(n);case"datetime":return new Date(n);case"bool":return"true"===n;default:throw new Error(`Unsupported data type: ${r}`)}})(l.notificationSetting.value,l.notificationSettingDefinition.dataType);return{notificationSettingDefinitionId:l.notificationSettingDefinition.id,value:at,isInherited:l.notificationSetting.isInherited,defaultValue:l.notificationSettingDefinition.defaultValue,displayName:l.notificationSettingDefinition.displayName,dataType:l.notificationSettingDefinition.dataType}});return this.originSettings=(0,f.cloneDeep)(c),{items:c}})).pipe((0,p.b)(d=>{this.formData=d,this.formData.items.forEach(c=>{"int"===c.dataType&&Number.isNaN(c.value)&&(c.value=null)})})),this.saveSettings=()=>{const d=this.formData.items.map(c=>({notificationSettingDefinitionId:c.notificationSettingDefinitionId,value:String(c.value),isInherited:c.isInherited}));this.appRestService.request({method:"PUT",url:"/api/app/jbnotifier-admin/notification-settings",body:d}).pipe((0,S.w)(()=>this.getSettings())).subscribe(()=>{this.toastService.success("\u5132\u5b58\u6210\u529f!")})}}ngOnInit(){this.currentTenantId=this.configStateService.getOne("currentUser").tenantId,this.currentTenantId&&(this.saveAndDisplayTenantId=this.currentTenantId),this.currentTenantId?this.getSettings().subscribe():this.getTenantLookup()}ngAfterViewInit(){this.selectbox.instance.getDataSource().load(),this.getHostEnter()}getTenantLookup(){this.tenantsLookupDataSource={store:new N.Z({cacheRawData:!0,key:"id",load:e=>(0,v.n)(this.restService.request({method:"GET",url:"/api/app/jbnotifier-admin/notification-settings/tenant-lookup",params:{Filter:e.searchValue,MaxResultCount:10,SkipCount:e.skip}},{apiName:I.O})).then(o=>[...o.items]),byKey:()=>(0,v.n)((0,T.of)(this.tenantChooser.tempSelectedItem))}),paginate:!0,pageSize:10}}getHostEnter(){this.appRestService.request({method:"GET",url:"/api/app/jbnotifier-admin/notification-settings/tenant-lookup?MaxResultCount=1"}).pipe((0,p.b)(e=>{this.saveAndDisplayTenantId=e.items[0]?.id})).subscribe()}onTenantChanged(e){const o=e.value;void 0===this.originTenantChooserTenantId&&(this.originTenantChooserTenantId=this.tenantChooser.tenantId.getValue()),this.tenantChooser.tenantId.next(o),this.saveAndDisplayTenantId=e.value,this.getSettings().subscribe()}onSettingValueChanged(){const e=!(0,f.isEqual)(this.originSettings,this.formData.items);this.isDirty=e}ngOnDestroy(){this.tenantChooser.tenantId.next(this.originTenantChooserTenantId)}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(A.$),t.Y36(u.XJE),t.Y36(D.P),t.Y36(V.L),t.Y36(u.vgb))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-notification-settings"]],viewQuery:function(o,i){if(1&o&&t.Gf(j,5),2&o){let s;t.iGM(s=t.CRH())&&(i.selectbox=s.first)}},decls:12,vars:11,consts:[[1,"notification-settings","paper-1","d-flex","flex-column","align-items-center","h-100"],[1,"flex-grow-1","d-flex","flex-column","justify-content-center"],[1,"mb-3"],[1,"dx-form-group-caption","text-center","mb-2"],[4,"ngIf"],["appFormFeature","",3,"items","formData"],[4,"dxTemplate","dxTemplateOf"],[1,"d-flex","justify-content-center"],["appCustomButton","",3,"elementAttr","text","disabled","onClick"],["appSelectBox","","displayExpr","displayName","valueExpr","id",3,"dataSource","value","valueChange","onValueChanged"],["selectbox",""],[1,"d-flex","align-items-center","mb-3"],[1,"dx-field-item-label-text"],[1,"ps-3","pe-3"],["valueChangeEvent","keyup",3,"value","valueChange","onValueChanged"],["icon","refresh",3,"text","onClick"],[1,"notification-setting"],["appTextBox","","valueChangeEvent","keyup",3,"value","valueChange","onValueChanged",4,"ngIf"],["valueChangeEvent","keyup","dateSerializationFormat","yyyy-MM-ddTHH:mm:ss.SSS+08:00",3,"value","valueChange","onValueChanged",4,"ngIf"],["appNumberBox","","valueChangeEvent","keyup",3,"value","valueChange","onValueChanged",4,"ngIf"],["appCheckBox","","valueChangeEvent","keyup",3,"value","valueChange","onValueChanged",4,"ngIf"],["appTextBox","","valueChangeEvent","keyup",3,"value","valueChange","onValueChanged"],["valueChangeEvent","keyup","dateSerializationFormat","yyyy-MM-ddTHH:mm:ss.SSS+08:00",3,"value","valueChange","onValueChanged"],["appNumberBox","","valueChangeEvent","keyup",3,"value","valueChange","onValueChanged"],["appCheckBox","","valueChangeEvent","keyup",3,"value","valueChange","onValueChanged"],["class","notification-setting"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),t._uU(4," \u901a\u77e5\u8a2d\u5b9a "),t.qZA(),t.YNc(5,L,3,2,"div",4),t.qZA(),t.TgZ(6,"dx-form",5),t.YNc(7,P,9,5,"div",6)(8,W,3,0,"div",6),t.qZA()(),t.TgZ(9,"div",7)(10,"dx-button",8),t.NdJ("onClick",function(){return i.saveSettings()}),t.ALo(11,"abpLocalization"),t.qZA()()()),2&o&&(t.xp6(5),t.Q6J("ngIf",!i.currentTenantId),t.xp6(),t.Q6J("items",i.formItems)("formData",i.formData),t.xp6(),t.Q6J("dxTemplateOf","string"),t.xp6(),t.Q6J("dxTemplateOf","notification-setting-definition"),t.xp6(2),t.Q6J("elementAttr",t.DdM(10,q))("text",t.lcZ(11,8,"AbpUi::Save"))("disabled",!i.isDirty))},dependencies:[x.O5,M._,Z.A,F.A,E.w,J.m,G.K,Q.p6,_.G,H.M,K.Y,B._,O.I,k.v,$,u.fuE],styles:[".notification-settings[_ngcontent-%COMP%]{background-color:var(--lpx-content-background)}.notification-settings[_ngcontent-%COMP%]   .notification-setting[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-top:16px}.notification-settings[_ngcontent-%COMP%]   .notification-setting[_ngcontent-%COMP%]:first-child{margin-top:0}.notification-settings[_ngcontent-%COMP%]   .notification-setting[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{flex:1}"]})}return n})(),canActivate:[u.a1M,u.nG9]}];let et=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[m.Bz.forChild(tt),m.Bz]})}return n})();var nt=a(5533);let it=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({imports:[x.ez,et,h.m,nt.P]})}return n})()}}]);
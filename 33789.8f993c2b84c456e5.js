"use strict";(self.webpackChunkJbNotifier=self.webpackChunkJbNotifier||[]).push([[33789],{33789:(ye,Z,r)=>{r.r(Z),r.d(Z,{DEFAULT_LANGUAGES_CREATE_FORM_PROPS:()=>I,DEFAULT_LANGUAGES_EDIT_FORM_PROPS:()=>$,DEFAULT_LANGUAGES_ENTITY_ACTIONS:()=>k,DEFAULT_LANGUAGES_ENTITY_PROPS:()=>w,DEFAULT_LANGUAGES_TOOLBAR_ACTIONS:()=>W,DEFAULT_LANGUAGE_MANAGEMENT_CREATE_FORM_PROPS:()=>M,DEFAULT_LANGUAGE_MANAGEMENT_EDIT_FORM_PROPS:()=>b,DEFAULT_LANGUAGE_MANAGEMENT_ENTITY_ACTIONS:()=>R,DEFAULT_LANGUAGE_MANAGEMENT_ENTITY_PROPS:()=>A,DEFAULT_LANGUAGE_MANAGEMENT_TOOLBAR_ACTIONS:()=>S,DEFAULT_LANGUAGE_TEXTS_ENTITY_ACTIONS:()=>Q,DEFAULT_LANGUAGE_TEXTS_TOOLBAR_ACTIONS:()=>Y,LANGUAGE_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS:()=>y,LANGUAGE_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS:()=>O,LANGUAGE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS:()=>C,LANGUAGE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS:()=>v,LANGUAGE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS:()=>E,LanguageManagementExtensionsGuard:()=>Ae,LanguageManagementGuard:()=>Me,LanguageManagementModule:()=>Ee,LanguageTextsComponent:()=>U,LanguagesComponent:()=>_,languageManagementExtensionsResolver:()=>H,languageManagementGuard:()=>X});var u=r(88762),p=r(69670),g=r(17557),e=r(19212);let ee=(()=>{class a{constructor(t){this.restService=t,this.apiName="LanguageManagement",this.get=(n,s,i,l)=>this.restService.request({method:"GET",url:`/api/language-management/language-texts/${n}/${s}/${i}`,params:{baseCultureName:l}},{apiName:this.apiName}),this.getList=n=>this.restService.request({method:"GET",url:"/api/language-management/language-texts",params:{filter:n.filter,resourceName:n.resourceName,baseCultureName:n.baseCultureName,targetCultureName:n.targetCultureName,getOnlyEmptyValues:n.getOnlyEmptyValues,sorting:n.sorting,skipCount:n.skipCount,maxResultCount:n.maxResultCount}},{apiName:this.apiName}),this.restoreToDefault=(n,s,i)=>this.restService.request({method:"PUT",url:`/api/language-management/language-texts/${n}/${s}/${i}/restore`},{apiName:this.apiName}),this.update=(n,s,i,l)=>this.restService.request({method:"PUT",url:`/api/language-management/language-texts/${n}/${s}/${i}`,params:{value:l}},{apiName:this.apiName})}static#e=this.\u0275fac=function(n){return new(n||a)(e.LFG(u.vgb))};static#a=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})(),F=(()=>{class a{constructor(t){this.restService=t,this.apiName="LanguageManagement",this.create=n=>this.restService.request({method:"POST",url:"/api/language-management/languages",body:n},{apiName:this.apiName}),this.delete=n=>this.restService.request({method:"DELETE",url:`/api/language-management/languages/${n}`},{apiName:this.apiName}),this.get=n=>this.restService.request({method:"GET",url:`/api/language-management/languages/${n}`},{apiName:this.apiName}),this.getAllList=()=>this.restService.request({method:"GET",url:"/api/language-management/languages/all"},{apiName:this.apiName}),this.getCulturelist=()=>this.restService.request({method:"GET",url:"/api/language-management/languages/culture-list"},{apiName:this.apiName}),this.getFlagList=()=>this.restService.request({method:"GET",url:"/api/language-management/languages/flag-list"},{apiName:this.apiName}),this.getList=n=>this.restService.request({method:"GET",url:"/api/language-management/languages",params:{filter:n.filter,resourceName:n.resourceName,baseCultureName:n.baseCultureName,targetCultureName:n.targetCultureName,getOnlyEmptyValues:n.getOnlyEmptyValues,sorting:n.sorting,skipCount:n.skipCount,maxResultCount:n.maxResultCount}},{apiName:this.apiName}),this.getResources=()=>this.restService.request({method:"GET",url:"/api/language-management/languages/resources"},{apiName:this.apiName}),this.setAsDefault=n=>this.restService.request({method:"PUT",url:`/api/language-management/languages/${n}/set-as-default`},{apiName:this.apiName}),this.update=(n,s)=>this.restService.request({method:"PUT",url:`/api/language-management/languages/${n}`,body:s},{apiName:this.apiName})}static#e=this.\u0275fac=function(n){return new(n||a)(e.LFG(u.vgb))};static#a=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var h=r(22096),ae=r(94664),D=r(64716),L=r(37398),P=r(99397),te=r(21441),V=r(96814),m=r(60095),N=r(86123),J=r(11411),x=r(65765),G=r(89364),B=r(23079),z=r(14116),ne=r(32427),q=r(23758);function se(a,o){1&a&&e._uU(0),2&a&&e.Oqu(o.$implicit.displayName)}function oe(a,o){if(1&a&&(e.TgZ(0,"strong"),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&a){const t=o.$implicit;e.xp6(),e.AsE("",t.displayName," (",e.lcZ(2,2,"LanguageManagement::DefaultLanguage"),")")}}function ie(a,o){if(1&a&&(e.TgZ(0,"h3"),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&a){const t=e.oxw();e.xp6(),e.hij(" ",e.lcZ(2,1,null!=t.selected&&t.selected.id?"LanguageManagement::Edit":"LanguageManagement::CreateNewLanguage")," ")}}function ge(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"form",12),e.NdJ("ngSubmit",function(){e.CHM(t);const s=e.oxw(2);return e.KtG(s.save())}),e.TgZ(1,"div",13),e._UZ(2,"abp-extensible-form",14),e.qZA()()}if(2&a){const t=e.oxw(2);e.Q6J("formGroup",t.form),e.xp6(2),e.Q6J("selectedRecord",t.selected)}}function le(a,o){if(1&a&&e.YNc(0,ge,3,2,"form",11),2&a){const t=e.oxw();e.Q6J("ngIf",t.form)}}function ue(a,o){1&a&&(e.TgZ(0,"button",15),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA(),e.TgZ(3,"abp-button",16),e._uU(4),e.ALo(5,"abpLocalization"),e.qZA()),2&a&&(e.xp6(),e.hij(" ",e.lcZ(2,2,"AbpIdentity::Cancel")," "),e.xp6(3),e.Oqu(e.lcZ(5,4,"AbpIdentity::Save")))}function re(a,o){if(1&a&&(e.TgZ(0,"option",14),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("ngValue",t.cultureName),e.xp6(),e.hij(" ",t.displayName," ")}}function me(a,o){if(1&a&&(e.TgZ(0,"option",14),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("ngValue",t.cultureName),e.xp6(),e.hij(" ",t.displayName," ")}}function ce(a,o){if(1&a&&(e.TgZ(0,"option",14),e._uU(1),e.qZA()),2&a){const t=o.$implicit;e.Q6J("ngValue",t.name),e.xp6(),e.hij(" ",t.name," ")}}function pe(a,o){if(1&a&&e._UZ(0,"abp-grid-actions",26),2&a){const t=o.row;e.Q6J("index",o.rowIndex)("record",t)}}function de(a,o){if(1&a&&(e.TgZ(0,"div",28),e._uU(1),e.qZA()),2&a){const t=o.row,n=e.oxw().$implicit;e.xp6(),e.hij(" ",t[n.field]," ")}}function _e(a,o){if(1&a&&(e.TgZ(0,"ngx-datatable-column",27),e.ALo(1,"abpLocalization"),e.YNc(2,de,2,1,"ng-template",20),e.qZA()),2&a){const t=o.$implicit;e.Q6J("name",e.lcZ(1,3,t.header))("prop",t.field)("width",200)}}function he(a,o){1&a&&(e.TgZ(0,"h3"),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA()),2&a&&(e.xp6(),e.Oqu(e.lcZ(2,1,"LanguageManagement::Edit")))}function Te(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"div",29)(1,"div",6)(2,"label",30),e._uU(3),e.ALo(4,"abpLocalization"),e.qZA(),e.TgZ(5,"div")(6,"strong"),e._uU(7),e.qZA()()(),e.TgZ(8,"div",6)(9,"label",31),e._uU(10),e.ALo(11,"abpLocalization"),e.qZA(),e._UZ(12,"textarea",32),e.qZA(),e.TgZ(13,"div",6)(14,"label",31),e._uU(15),e.ALo(16,"abpLocalization"),e.qZA(),e.TgZ(17,"textarea",33),e.NdJ("keyup.enter",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.save(!1))})("ngModelChange",function(s){e.CHM(t);const i=e.oxw();return e.KtG(i.selected.value=s)}),e.qZA()()()}if(2&a){const t=e.oxw();e.ekj("show",!t.modalBusy),e.xp6(3),e.Oqu(e.lcZ(4,8,"LanguageManagement::Key")),e.xp6(4),e.Oqu(t.selected.name),e.xp6(3),e.Oqu(e.lcZ(11,10,"LanguageManagement::BaseValue")),e.xp6(2),e.Q6J("value",t.selected.baseValue),e.xp6(3),e.Oqu(e.lcZ(16,12,"LanguageManagement::TargetValue")),e.xp6(2),e.Q6J("ngModel",t.selected.value)}}function Le(a,o){if(1&a){const t=e.EpF();e.TgZ(0,"button",34),e._uU(1),e.ALo(2,"abpLocalization"),e.qZA(),e.TgZ(3,"abp-button",35),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.restore())}),e._uU(4),e.ALo(5,"abpLocalization"),e.qZA(),e.TgZ(6,"abp-button",36),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.save(!1))}),e._uU(7),e.ALo(8,"abpLocalization"),e.qZA(),e.TgZ(9,"abp-button",37),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.save(!0))}),e._uU(10),e.ALo(11,"abpLocalization"),e._UZ(12,"i",38),e.qZA()}if(2&a){const t=e.oxw();e.xp6(),e.hij(" ",e.lcZ(2,6,"LanguageManagement::Cancel")," "),e.xp6(3),e.Oqu(e.lcZ(5,8,"LanguageManagement::RestoreToDefault")),e.xp6(2),e.Q6J("loading",t.modalBusy),e.xp6(),e.Oqu(e.lcZ(8,10,"LanguageManagement::Save")),e.xp6(2),e.Q6J("loading",t.modalBusy),e.xp6(),e.hij("",e.lcZ(11,12,"LanguageManagement::SaveAndNext")," ")}}const fe=()=>({size:"lg"});var Ne=["ad","ae","af","ag","ai","al","am","ao","ar","as","at","au","aw","ax","az","ba","bb","bd","be","bf","bg","bh","bi","bj","bl","bm","bn","bo","bq","br","bs","bt","bw","by","bz","ca","cc","cd","cf","cg","ch","ci","ck","cl","cm","cn","co","cr","cu","cv","cw","cx","cy","cz","de","dj","dk","do","dz","ec","ee","eg","eh","er","es","et","fi","fj","fk","fm","fo","fr","ga","gb","gd","ge","gf","gg","gh","gi","gl","gm","gn","gp","gq","gr","gs","gt","gu","gw","gy","hk","hn","hr","hr","ht","id","ie","il","im","in","io","iq","ir","is","it","je","jm","jo","jp","ke","kg","kh","ki","km","kn","kp","kr","kw","ky","kz","la","lb","lc","li","lk","lr","ls","lt","lu","lv","ly","ma","mc","md","me","mf","mg","mh","mk","ml","mm","mn","mo","mp","mq","mr","ms","mt","mu","mv","mw","mx","my","mz","na","nc","ne","nf","ng","ni","nl","no","nr","nu","nz","om","pa","pe","pf","pg","ph","pk","pl","pm","pn","pr","ps","pt","pw","py","qa","re","ro","rs","ru","rw","sa","sb","sc","sd","se","sg","sh","si","sj","sk","sl","sm","sn","so","sr","ss","st","sv","sx","sy","sz","tc","td","tf","tg","th","tj","tk","tl","tm","tn","to","tr","tt","tv","tw","tz","ua","ug","us","uy","uz","va","vc","ve","vg","vi","vn","vu","wf","ws","xk","ye","yt","za","zm","zw"];let _=(()=>{class a{constructor(t,n,s,i,l,d){this.list=t,this.confirmationService=n,this.service=s,this.injector=i,this.configState=l,this.sessionService=d,this.data={items:[],totalCount:0},this.cultures$=(0,h.of)([]),this.isModalVisible=!1,this.modalBusy=!1,this.flagIcons=Ne}get controls(){return this.form.controls}createForm(){this.cultures$.pipe((0,ae.w)(t=>t.length?(0,h.of)(t):this.service.getCulturelist())).subscribe(t=>{this.cultures$=(0,h.of)(t);const n=new g.lg(this.injector,this.selected);this.form=(0,g.se)(n),this.controls.cultureName.patchValue(null),this.controls.uiCultureName.patchValue(null)})}hookToQuery(){this.list.hookToQuery(t=>this.service.getList(t)).subscribe(t=>this.data=t)}ngOnInit(){this.hookToQuery()}openModal(){this.createForm(),this.isModalVisible=!0}add(){this.selected={},this.openModal()}edit(t){this.service.get(t).subscribe(n=>{this.selected=n,this.openModal()})}save(){if(!this.form.valid)return;this.modalBusy=!0;const{id:t}=this.selected;(t?this.service.update(t,{...this.selected,...this.form.value}):this.service.create(this.form.value)).pipe((0,D.x)(()=>this.modalBusy=!1)).subscribe(()=>{this.isModalVisible=!1,this.list.get(),this.selected.id||this.configState.refreshAppState().subscribe()})}delete(t,n,s=!1){let i="LanguageManagement::LanguageDeletionConfirmationMessage";s&&(i="LanguageManagement::DefaultLanguageDeletionConfirmationMessage"),this.confirmationService.warn(i,"LanguageManagement::AreYouSure",{messageLocalizationParams:[n]}).subscribe(l=>{l===p.Tv.Status.confirm&&this.service.get(t).subscribe(d=>{this.service.delete(t).subscribe(()=>{let T;this.service.getAllList().subscribe(f=>{f.items.forEach(c=>{c.isDefaultLanguage&&(T=c)}),d.cultureName==this.sessionService.getLanguage()&&this.sessionService.setLanguage(T.cultureName)}),this.list.get()})})})}setAsDefault(t){this.service.setAsDefault(t).subscribe(()=>this.list.get())}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(u.XNV),e.Y36(p.YP),e.Y36(F),e.Y36(e.zs3),e.Y36(u.XJE),e.Y36(u.WxB))};static#a=this.\u0275cmp=e.Xpm({type:a,selectors:[["abp-languages"]],features:[e._Bn([u.XNV,{provide:g.ex,useValue:"LanguageManagement.LanguagesComponent"}])],decls:17,vars:10,consts:[[3,"title","toolbar"],["id","wrapper"],["localizationSourceName","LanguageManagement",3,"list"],[1,"card"],[3,"data","recordsTotal","list"],["displayName",""],["defaultLanguage",""],[3,"visible","busy","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],["id","languageForm","validateOnSubmit","",3,"formGroup","ngSubmit",4,"ngIf"],["id","languageForm","validateOnSubmit","",3,"formGroup","ngSubmit"],[1,"mt-2"],[3,"selectedRecord"],["type","button","abpClose","",1,"btn","btn-outline-primary"],["iconClass","fa fa-check","buttonType","submit","formName","languageForm"]],template:function(n,s){1&n&&(e.TgZ(0,"abp-page",0),e.ALo(1,"abpLocalization"),e.TgZ(2,"div",1),e._UZ(3,"abp-advanced-entity-filters",2),e.TgZ(4,"div",3),e._UZ(5,"abp-extensible-table",4),e.qZA()()(),e.YNc(6,se,1,1,"ng-template",null,5,e.W1O)(8,oe,3,4,"ng-template",null,6,e.W1O),e.TgZ(10,"abp-modal",7),e.NdJ("visibleChange",function(l){return s.isModalVisible=l}),e.YNc(11,ie,3,3,"ng-template",null,8,e.W1O)(13,le,1,1,"ng-template",null,9,e.W1O)(15,ue,6,6,"ng-template",null,10,e.W1O),e.qZA()),2&n&&(e.Q6J("title",e.lcZ(1,8,"LanguageManagement::Languages"))("toolbar",s.data),e.xp6(3),e.Q6J("list",s.list),e.xp6(2),e.Q6J("data",s.data.items)("recordsTotal",s.data.totalCount)("list",s.list),e.xp6(5),e.Q6J("visible",s.isModalVisible)("busy",s.modalBusy))},dependencies:[V.O5,m._Y,m.JL,m.sg,u.YzZ,g.gt,g.m5,N.hE,J.hL,p.r0,p.zS,p.YM,x.II,u.fuE],encapsulation:2})}return a})(),U=(()=>{class a{constructor(t,n,s,i,l){this.list=t,this.renderer=n,this.configState=s,this.service=i,this.languageService=l,this.data={items:[],totalCount:0},this.pageQuery={},this.isModalVisible=!1,this.modalBusy=!1,this.resources=[]}ngOnInit(){this.languages=this.configState.getDeep("localization.languages"),this.languageService.getResources().subscribe(t=>{this.resources=t}),this.pageQuery={baseCultureName:this.languages[0].cultureName,targetCultureName:this.languages?.[1]?.cultureName||this.languages?.[0]?.cultureName,getOnlyEmptyValues:!1,resourceName:null},this.hookToQuery(),this.columns=[{field:"name",header:"LanguageManagement::Key"},{field:"baseValue",header:"LanguageManagement::BaseValue"},{field:"value",header:"LanguageManagement::Value"},{field:"resourceName",header:"LanguageManagement::ResourceName"}]}openModal(){this.isModalVisible=!0}closeModal(){this.isModalVisible=!1,this.selected={},this.selectedIndex=null}hookToQuery(){this.list.hookToQuery(t=>this.service.getList({...t,...this.pageQuery})).subscribe(t=>{if(this.data=t,this.isModalVisible){if(!t.items[this.selectedIndex])return void this.closeModal();this.selected={...t.items[this.selectedIndex]}}})}edit(t,n){this.selectedIndex=n%this.list.maxResultCount,this.selected={...t},this.openModal()}save(t){if(this.modalBusy)return;this.modalBusy=!0;const{resourceName:n,cultureName:s,name:i,value:l}=this.selected;this.service.update(n,s,i,l).pipe((0,D.x)(()=>{setTimeout(()=>{this.modalBusy=!1},200),t||this.closeModal()})).subscribe(()=>{if(t){const{maxResultCount:d}=this.list;if(this.selectedIndex+1===this.data.totalCount%d&&10*this.list.page+d>=this.data.totalCount)return void this.closeModal();(this.selectedIndex+1)%d==0?(this.selectedIndex=0,this.list.page=this.list.page+1,this.renderer.removeClass(document.getElementById("LanguageTextToEdit_TargetCultureValue"),"ng-dirty")):(this.selectedIndex+=1,this.selected={...this.data.items[this.selectedIndex]},this.renderer.removeClass(document.getElementById("LanguageTextToEdit_TargetCultureValue"),"ng-dirty"))}this.list.getWithoutPageReset()})}restore(){const{resourceName:t,cultureName:n,name:s}=this.selected;this.service.restoreToDefault(t,n,s).subscribe(()=>{this.closeModal(),this.list.get()})}static#e=this.\u0275fac=function(n){return new(n||a)(e.Y36(u.XNV),e.Y36(e.Qsj),e.Y36(u.XJE),e.Y36(ee),e.Y36(F))};static#a=this.\u0275cmp=e.Xpm({type:a,selectors:[["abp-language-texts"]],features:[e._Bn([u.XNV,{provide:g.ex,useValue:"LanguageManagement.LanguageTextsComponent"}])],decls:54,vars:44,consts:[[3,"title","toolbar"],["id","wrapper"],["localizationSourceName","LanguageManagement",3,"list"],["id","FilterFormId",3,"keyup.enter"],[1,"row"],[1,"col-12","col-md-3"],[1,"mb-3"],["for","BaseCultureName",1,"form-label"],["id","BaseCultureName","name","BaseCultureName",1,"form-select","form-control",3,"ngModel","ngModelChange","change"],[3,"ngValue",4,"ngFor","ngForOf"],["for","TargetCultureName",1,"form-label"],["id","TargetCultureName","name","TargetCultureName",1,"form-select","form-control",3,"ngModel","ngModelChange","change"],["for","ResourceName",1,"form-label"],["id","ResourceName","name","ResourceName",1,"form-select","form-control",3,"ngModel","ngModelChange","change"],[3,"ngValue"],["for","GetOnlyEmptyValues",1,"form-label"],["id","GetOnlyEmptyValues","name","GetOnlyEmptyValues",1,"form-select","form-control",3,"ngModel","ngModelChange","change"],[1,"card"],["default","",3,"rows","count","list"],[3,"name","maxWidth","width","sortable"],["ngx-datatable-cell-template",""],[3,"name","prop","width",4,"ngFor","ngForOf"],[3,"visible","busy","options","visibleChange"],["abpHeader",""],["abpBody",""],["abpFooter",""],["text","LanguageManagement::Actions",3,"index","record"],[3,"name","prop","width"],["abpEllipsis",""],[1,"fade"],[1,"form-label"],["for","LanguageTextToEdit_BaseCultureValue",1,"form-label"],["id","LanguageTextToEdit_BaseCultureValue","name","LanguageTextToEdit.BaseCultureValue","rows","4","disabled","",1,"form-control",3,"value"],["id","LanguageTextToEdit_TargetCultureValue","name","LanguageTextToEdit.TargetCultureValue","rows","4",1,"form-control",3,"ngModel","keyup.enter","ngModelChange"],["type","button","abpClose","",1,"btn","btn-sm","btn-outline-primary"],["iconClass","fa fa-check","buttonClass","btn btn-sm btn-outline-primary",3,"click"],["iconClass","fa fa-check","buttonClass","btn btn-sm btn-primary",3,"loading","click"],["iconClass","fa fa-check","buttonClass","btn btn-sm btn-success",3,"loading","click"],["aria-hidden","true",1,"fa","fa-arrow-right","ms-1"]],template:function(n,s){1&n&&(e.TgZ(0,"abp-page",0),e.ALo(1,"abpLocalization"),e.TgZ(2,"div",1)(3,"abp-advanced-entity-filters",2)(4,"abp-advanced-entity-filters-above-search")(5,"form",3),e.NdJ("keyup.enter",function(){return s.list.get()}),e.TgZ(6,"div",4)(7,"div",5)(8,"div",6)(9,"label",7),e._uU(10),e.ALo(11,"abpLocalization"),e.qZA(),e.TgZ(12,"select",8),e.NdJ("ngModelChange",function(l){return s.pageQuery.baseCultureName=l})("change",function(){return s.list.get()}),e.YNc(13,re,2,2,"option",9),e.qZA()()(),e.TgZ(14,"div",5)(15,"div",6)(16,"label",10),e._uU(17),e.ALo(18,"abpLocalization"),e.qZA(),e.TgZ(19,"select",11),e.NdJ("ngModelChange",function(l){return s.pageQuery.targetCultureName=l})("change",function(){return s.list.get()}),e.YNc(20,me,2,2,"option",9),e.qZA()()(),e.TgZ(21,"div",5)(22,"div",6)(23,"label",12),e._uU(24),e.ALo(25,"abpLocalization"),e.qZA(),e.TgZ(26,"select",13),e.NdJ("ngModelChange",function(l){return s.pageQuery.resourceName=l})("change",function(){return s.list.get()}),e.TgZ(27,"option",14),e._uU(28,"-"),e.qZA(),e.YNc(29,ce,2,2,"option",9),e.qZA()()(),e.TgZ(30,"div",5)(31,"div",6)(32,"label",15),e._uU(33),e.ALo(34,"abpLocalization"),e.qZA(),e.TgZ(35,"select",16),e.NdJ("ngModelChange",function(l){return s.pageQuery.getOnlyEmptyValues=l})("change",function(){return s.list.get()}),e.TgZ(36,"option",14),e._uU(37,"-"),e.qZA(),e.TgZ(38,"option",14),e._uU(39),e.ALo(40,"abpLocalization"),e.qZA()()()()()()()(),e.TgZ(41,"div",17)(42,"ngx-datatable",18)(43,"ngx-datatable-column",19),e.ALo(44,"abpLocalization"),e.YNc(45,pe,1,2,"ng-template",20),e.qZA(),e.YNc(46,_e,3,5,"ngx-datatable-column",21),e.qZA()()()(),e.TgZ(47,"abp-modal",22),e.NdJ("visibleChange",function(l){return s.isModalVisible=l}),e.YNc(48,he,3,3,"ng-template",null,23,e.W1O)(50,Te,18,14,"ng-template",null,24,e.W1O)(52,Le,13,14,"ng-template",null,25,e.W1O),e.qZA()),2&n&&(e.Q6J("title",e.lcZ(1,29,"LanguageManagement::LanguageTexts"))("toolbar",s.data.items),e.xp6(3),e.Q6J("list",s.list),e.xp6(7),e.Oqu(e.lcZ(11,31,"LanguageManagement::BaseCultureName")),e.xp6(2),e.Q6J("ngModel",s.pageQuery.baseCultureName),e.xp6(),e.Q6J("ngForOf",s.languages),e.xp6(4),e.Oqu(e.lcZ(18,33,"LanguageManagement::TargetCultureName")),e.xp6(2),e.Q6J("ngModel",s.pageQuery.targetCultureName),e.xp6(),e.Q6J("ngForOf",s.languages),e.xp6(4),e.Oqu(e.lcZ(25,35,"LanguageManagement::ResourceName")),e.xp6(2),e.Q6J("ngModel",s.pageQuery.resourceName),e.xp6(),e.Q6J("ngValue",null),e.xp6(2),e.Q6J("ngForOf",s.resources),e.xp6(4),e.Oqu(e.lcZ(34,37,"LanguageManagement::TargetValue")),e.xp6(2),e.Q6J("ngModel",s.pageQuery.getOnlyEmptyValues),e.xp6(),e.Q6J("ngValue",!1),e.xp6(2),e.Q6J("ngValue",!0),e.xp6(),e.hij(" ",e.lcZ(40,39,"LanguageManagement::OnlyEmptyValues")," "),e.xp6(3),e.Q6J("rows",s.data.items)("count",s.data.totalCount)("list",s.list),e.xp6(),e.Q6J("name",e.lcZ(44,41,"LanguageManagement::Actions"))("maxWidth",150)("width",150)("sortable",!1),e.xp6(3),e.Q6J("ngForOf",s.columns),e.xp6(),e.Q6J("visible",s.isModalVisible)("busy",s.modalBusy)("options",e.DdM(43,fe)))},dependencies:[V.sg,m._Y,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.JL,m.On,m.F,g.yc,N.hE,N.BJ,G.nE,G.UC,G.vq,p.j3,p.x7,p.r0,p.zS,p.YM,x.II,u.fuE],encapsulation:2})}return a})();const Q=g.uk.createMany([{text:"LanguageManagement::Edit",action:a=>{a.getInjected(U).edit(a.record,a.index)},permission:"LanguageManagement.LanguageTexts.Edit"}]),Y=g.JE.createMany([]),k=g.uk.createMany([{text:"LanguageManagement::Edit",action:a=>{a.getInjected(_).edit(a.record.id)},permission:"LanguageManagement.Languages.Edit"},{text:"LanguageManagement::Delete",action:a=>{a.getInjected(_).delete(a.record.id,a.record.displayName,a.record.isDefaultLanguage)},permission:"LanguageManagement.Languages.Delete"},{text:"LanguageManagement::SetAsDefaultLanguage",action:a=>{a.getInjected(_).setAsDefault(a.record.id)},permission:"LanguageManagement.Languages.ChangeDefault"}]),w=g.QC.createMany([{type:"string",name:"displayName",displayName:"LanguageManagement::DisplayName",columnWidth:200,valueResolver:a=>{const{displayName:o,isDefaultLanguage:t}=a.record;if(!t)return(0,h.of)(o);const n=a.getInjected(u.oQ8),s=n.instant.bind(n);return(0,h.of)(`<strong>${(0,u.F04)(o)} (${s("LanguageManagement::DefaultLanguage")})</strong>`)}},{type:"string",name:"cultureName",displayName:"LanguageManagement::CultureName",columnWidth:200},{type:"string",name:"uiCultureName",displayName:"LanguageManagement::UiCultureName",columnWidth:200},{type:"boolean",name:"isEnabled",displayName:"LanguageManagement::IsEnabled",columnWidth:100},{type:"string",name:"flagIcon",displayName:"LanguageManagement::FlagIcon",columnWidth:100,valueResolver:a=>{const{displayName:o,flagIcon:t}=a.record;return(0,h.of)(`<span class="fi fis fi-${t}" title="${o}"></span>`)}}]);function j(a){return{value:null,key:a.getInjected(u.oQ8).instant("AbpUi::NotAssigned")}}const I=g.Od.createMany([{type:"string",name:"cultureName",displayName:"LanguageManagement::CultureName",id:"culture-name",validators:()=>[m.Validators.required],options:a=>a.getInjected(_).cultures$.pipe((0,L.U)(o=>[j(a),...o.map(t=>({key:t.displayName,value:t.name}))]))},{type:"string",name:"uiCultureName",displayName:"LanguageManagement::UiCultureName",id:"ui-culture-name",validators:()=>[m.Validators.required],options:a=>a.getInjected(_).cultures$.pipe((0,L.U)(o=>[j(a),...o.map(t=>({key:t.displayName,value:t.name}))]))},{type:"string",name:"displayName",displayName:"LanguageManagement::DisplayName",id:"name",validators:()=>[m.Validators.required,m.Validators.maxLength(256)]},{type:"string",name:"flagIcon",displayName:"LanguageManagement::FlagIcon",id:"flag-icon",validators:()=>[m.Validators.required],options:a=>(0,h.of)(a.getInjected(_).flagIcons.map(o=>({key:o,value:o})))},{type:"boolean",name:"isEnabled",displayName:"LanguageManagement::IsEnabled",id:"is-enabled",defaultValue:!1}]),$=I.slice(2),W=g.JE.createMany([{text:"LanguageManagement::CreateNewLanguage",action:a=>{a.getInjected(_).add()},permission:"LanguageManagement.Languages.Create",icon:"fa fa-plus"}]),R={"LanguageManagement.LanguagesComponent":k,"LanguageManagement.LanguageTextsComponent":Q},S={"LanguageManagement.LanguagesComponent":W,"LanguageManagement.LanguageTextsComponent":Y},A={"LanguageManagement.LanguagesComponent":w},M={"LanguageManagement.LanguagesComponent":I},b={"LanguageManagement.LanguagesComponent":$},C=new e.OlP("LANGUAGE_MANAGEMENT_ENTITY_ACTION_CONTRIBUTORS"),E=new e.OlP("LANGUAGE_MANAGEMENT_TOOLBAR_ACTION_CONTRIBUTORS"),v=new e.OlP("LANGUAGE_MANAGEMENT_ENTITY_PROP_CONTRIBUTORS"),y=new e.OlP("LANGUAGE_MANAGEMENT_CREATE_FORM_PROP_CONTRIBUTORS"),O=new e.OlP("LANGUAGE_MANAGEMENT_EDIT_FORM_PROP_CONTRIBUTORS");let Ae=(()=>{class a{constructor(t){this.injector=t}canActivate(){const t=this.injector.get(B.J9),n=this.injector.get(g.X6),s=this.injector.get(C,null)||{},i=this.injector.get(E,null)||{},l=this.injector.get(v,null)||{},d=this.injector.get(y,null)||{},T=this.injector.get(O,null)||{};t||this.filterFlagIcon(A,M,b);const f=this.injector.get(u.XJE);return(0,g.ot)(f,"LanguageManagement").pipe((0,L.U)(c=>({"LanguageManagement.LanguagesComponent":c.Language})),(0,g.V_)(f,"LanguageManagement"),(0,P.b)(c=>{(0,g.Fr)(n.entityActions,R,s),(0,g.Fr)(n.toolbarActions,S,i),(0,g.Hp)(n.entityProps,A,c.prop,l),(0,g.Hp)(n.createFormProps,M,c.createForm,d),(0,g.Hp)(n.editFormProps,b,c.editForm,T)}),(0,te.h)(!0))}filterFlagIcon(...t){t.forEach(n=>{n["LanguageManagement.LanguagesComponent"]=n["LanguageManagement.LanguagesComponent"].filter(s=>"flagIcon"!==s.name)})}static#e=this.\u0275fac=function(n){return new(n||a)(e.LFG(e.zs3))};static#a=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac})}return a})(),Me=(()=>{class a{constructor(t){this.languageManagementFeatures=t}canActivate(){return this.languageManagementFeatures.pipe((0,L.U)(t=>t.enable))}static#e=this.\u0275fac=function(n){return new(n||a)(e.LFG(z.uP))};static#a=this.\u0275prov=e.Yz7({token:a,factory:a.\u0275fac})}return a})();const X=()=>(0,e.f3M)(z.uP).pipe((0,L.U)(o=>o.enable)),H=()=>{const a=(0,e.f3M)(e.zs3),o=a.get(B.J9),t=a.get(g.X6),n=a.get(C,null)||{},s=a.get(E,null)||{},i=a.get(v,null)||{},l=a.get(y,null)||{},d=a.get(O,null)||{};o||function f(...c){c.forEach(K=>{K["LanguageManagement.LanguagesComponent"]=K["LanguageManagement.LanguagesComponent"].filter(ve=>"flagIcon"!==ve.name)})}(A,M,b);const T=a.get(u.XJE);return(0,g.ot)(T,"LanguageManagement").pipe((0,L.U)(c=>({"LanguageManagement.LanguagesComponent":c.Language})),(0,g.V_)(T,"LanguageManagement"),(0,P.b)(c=>{(0,g.Fr)(t.entityActions,R,n),(0,g.Fr)(t.toolbarActions,S,s),(0,g.Hp)(t.entityProps,A,c.prop,i),(0,g.Hp)(t.createFormProps,M,c.createForm,l),(0,g.Hp)(t.editFormProps,b,c.editForm,d)}))},be=[{path:"",redirectTo:"languages",pathMatch:"full"},{path:"",component:u.O39,canActivate:[u.p2e,u.zaK,X],resolve:[H],children:[{path:"languages",component:u.c$y,data:{requiredPolicy:"LanguageManagement.Languages",replaceableComponent:{key:"LanguageManagement.LanguagesComponent",defaultComponent:_}}},{path:"texts",component:u.c$y,data:{requiredPolicy:"LanguageManagement.LanguageTexts",replaceableComponent:{key:"LanguageManagement.LanguageTextsComponent",defaultComponent:U}}}]}];let Ce=(()=>{class a{static#e=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=e.oAB({type:a});static#t=this.\u0275inj=e.cJS({imports:[q.Bz.forChild(be),q.Bz]})}return a})(),Ee=(()=>{class a{static forChild(t={}){return{ngModule:a,providers:[{provide:C,useValue:t.entityActionContributors},{provide:E,useValue:t.toolbarActionContributors},{provide:v,useValue:t.entityPropContributors},{provide:y,useValue:t.createFormPropContributors},{provide:O,useValue:t.editFormPropContributors}]}}static forLazy(t={}){return new u.Cgl(a.forChild(t))}static#e=this.\u0275fac=function(n){return new(n||a)};static#a=this.\u0275mod=e.oAB({type:a});static#t=this.\u0275inj=e.cJS({imports:[Ce,u.IR2,N.vv,p.e2,ne.XC,J.h2,x.BG,N.jE]})}return a})()}}]);
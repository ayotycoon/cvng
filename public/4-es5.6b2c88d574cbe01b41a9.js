(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{QfP8:function(n,e,t){"use strict";t.r(e);var l=t("CcnG"),r=t("lxz4"),o=t("43Ke"),u=t("H0g1"),i=t("cLAn"),a=t.n(i),c=function(){function n(n,e,t,l,r,o){this.dataService=n,this.authService=e,this.elRef=t,this.utilityService=l,this.route=r,this.router=o,this.loading=!0,this.id=!1,this.idChecked=!1,this.editorOptions={theme:"vs-dark",language:"html"},this.subs=[],this.code="\x3c!--Please edit this line to contain the title, type, category, and if the template contains an image--\x3e\n\n  <div class=\"info-whole\" wholetitle='title' wholeimg='false' wholetype='classic' wholecat='resume'>\n  </div>\n  <style>\n   //\x3c!--Write your css styles  in here--\x3e\n      //\x3c!--You should use inline styles when you can--\x3e\n  </style>\n\n\n\n  <div class=\"whole bg-white\">\n\n      \x3c!--Write the rest of your code in here--\x3e\n          \x3c!--the editor must contain the whole class--\x3e\n\n  </div>",this.data=this.dataService.sampleData()}return n.prototype.ngOnInit=function(){},n.prototype.windowRatio=function(n){var e=n.split("|")[0],t=n.split("|")[1],l=this.elRef.nativeElement.querySelector(".code"),r=this.elRef.nativeElement.querySelector(".view");l.style.width=e+"%",r.style.width=t+"%"},n.prototype.listeners=function(n){if(n.ctrlKey||n.metaKey)switch(String.fromCharCode(n.which).toLowerCase()){case"s":n.preventDefault(),this.renderCode()}},n.prototype.renderCode=function(){this.id&&(this.idChecked=!0);var n=this.utilityService.fun_renderEngine(this.code,this.data),e=n.parsedHTML;this.options=n.options,this.viewer.documentElement.querySelector("body").innerHTML=e},n.prototype.getViewerHeadStylesAndLinks=function(){return" <link rel=\"stylesheet\" href=\"./assets/css/bootstrap.min.css\"><style>html{width: 100%;}body{margin: 0;padding: 0;width: 100%;background-color: #dee2e6;background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23c7cdd3' fill-opacity='0.69'%3E%3Cpath opacity='.5' d='M96 95h4v1h-4v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4h-9v4h-1v-4H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15v-9H0v-1h15V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h9V0h1v15h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9h4v1h-4v9zm-1 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm9-10v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-10 0v-9h-9v9h9zm-9-10h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9zm10 0h9v-9h-9v9z'/%3E%3Cpath d='M6 5V0H5v5H0v1h5v94h1V6h94V5H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n\n      padding: 0 auto !important;\n      display: inline-block;\n      font-size: 20px;\n    }\n\n    .whole{\n      width: 10.5in;\n      min-height:16.26in;\n      margin: 20px auto;\n    }\n\n"+this.utilityService.getViewerHeadStylesAndLinks()+"\n"},n.prototype.fun_template_save=function(){var n=this;this.renderCode();var e=this.viewer.documentElement.innerHTML.replace(/\s\=\"\"/g,""),t=document.createElement("div");t.setAttribute("class","ggg"),t.style.width="10.5in",t.style.height="16.26in",t.innerHTML=e,t.querySelector(".whole").style.margin="0",t.style.margin="0",document.body.appendChild(t),a.a.toBlob(document.querySelector(".ggg")).then(function(e){var t=n.code,l=document.querySelector(".ggg");l.parentNode.removeChild(l);var r=new FormData;r.append("image",e),r.append("template",t),r.append("options",JSON.stringify(n.options)),r.append("id",n.id),n.subs.push(n.authService.saveTemplate(r).subscribe(function(e){e.success&&(alert("success"),n.router.navigate(["/editor/"+e.data]))}))}).then(function(n){return n?alert("error"):n})},n.prototype.ngAfterViewInit=function(){var n=this;this.subs.push(this.authService.getMyProfile().subscribe(function(e){e.success&&(e.data.dev?n.utilityService.fun_isMobile()&&(n.utilityService.notify.next({type:"error",msg:"The Editor page can only be used on a computer because of compatibility issues"}),n.router.navigate(["/index"])):(n.utilityService.notify.next({type:"error",msg:"This page is for developers"}),n.router.navigate(["/index"])))})),this.subs.push(this.route.params.subscribe(function(e){var t=e.id;t&&(n.id=t,n.authService.getTemplate(t).subscribe(function(e){e.success&&(n.code=e.data.template,n.renderCode())}))}));var e=this.elRef.nativeElement.querySelector(".viewIframe");this.viewer=e.contentDocument,this.viewer.documentElement.querySelector("head").innerHTML=this.getViewerHeadStylesAndLinks(),this.viewer.documentElement.querySelector("body").innerHTML="\n    ",this.viewer.close(),document.querySelector("ngx-monaco-editor").onkeydown=function(e){n.listeners(e)}},n.prototype.editorInit=function(){this.loading=!1},n.prototype.ngOnDestroy=function(){this.subs.forEach(function(n){return n.unsubscribe()})},n}(),s=function(){return function(){}}(),h=t("pMnS"),v=t("ZYCi"),f=t("Ip0R"),d=t("gIcY"),m=t("WxzH"),p=l.pb({encapsulation:0,styles:["[_nghost-%COMP%] {\n      display: block;\n      height: 200px;\n    }\n\n    .editor-container[_ngcontent-%COMP%] {\n      width: 100%;\n      height: 98%;\n    }"],data:{}});function g(n){return l.Jb(0,[l.Fb(402653184,1,{_editorContainer:0}),(n()(),l.rb(1,0,[[1,0],["editorContainer",1]],null,0,"div",[["class","editor-container"]],null,null,null,null,null))],null,null)}var b=l.pb({encapsulation:0,styles:[["iframe[_ngcontent-%COMP%]{border:none}.body[_ngcontent-%COMP%]{height:100vh;overflow:hidden;width:100%}.body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]{height:44px;color:#6c757d}.body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .icon-options[_ngcontent-%COMP%]{height:100%;vertical-align:top}.body[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%]   .icon-options[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:30px}.body[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%], .body[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]{height:100%;vertical-align:top;display:inline-block;width:50%}.body[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden}.body[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%]   ngx-monaco-editor[_ngcontent-%COMP%]{height:100%;width:100vw}.body[_ngcontent-%COMP%]   .view[_ngcontent-%COMP%]   .viewIframe[_ngcontent-%COMP%]{height:100%;width:100%}"]],data:{}});function y(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,2,"a",[["class","d-inline-block icon-options p-2 "],["target","_blank"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(n,e,t){var r=!0;return"click"===e&&(r=!1!==l.Ab(n,1).onClick(t.button,t.ctrlKey,t.metaKey,t.shiftKey)&&r),r},null,null)),l.qb(1,671744,null,0,v.n,[v.k,v.a,f.h],{target:[0,"target"],routerLink:[1,"routerLink"]},null),(n()(),l.rb(2,0,null,null,0,"i",[["class","far fa-eye"]],null,null,null,null,null))],function(n,e){n(e,1,0,"_blank",l.tb(1,"/template/",e.component.id,""))},function(n,e){n(e,0,0,l.Ab(e,1).target,l.Ab(e,1).href)})}function w(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,20,"span",[["class","d-inline-block float-right mr-2 pt-2"]],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,4,"span",[["class","p-1 d-inline-block"]],null,null,null,null,null)),(n()(),l.rb(2,0,null,null,1,"code",[["class","text-dark"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Title:"])),(n()(),l.rb(4,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),l.Hb(5,null,["",""])),(n()(),l.rb(6,0,null,null,4,"span",[["class","p-1 d-inline-block"]],null,null,null,null,null)),(n()(),l.rb(7,0,null,null,1,"code",[["class","text-dark"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Image:"])),(n()(),l.rb(9,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),l.Hb(10,null,["",""])),(n()(),l.rb(11,0,null,null,4,"span",[["class","p-1 d-inline-block"]],null,null,null,null,null)),(n()(),l.rb(12,0,null,null,1,"code",[["class","text-dark"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Type:"])),(n()(),l.rb(14,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),l.Hb(15,null,["",""])),(n()(),l.rb(16,0,null,null,4,"span",[["class","p-1 d-inline-block"]],null,null,null,null,null)),(n()(),l.rb(17,0,null,null,1,"code",[["class","text-dark"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["Category:"])),(n()(),l.rb(19,0,null,null,1,"code",[],null,null,null,null,null)),(n()(),l.Hb(20,null,["",""]))],null,function(n,e){var t=e.component;n(e,5,0,t.options.wholetitle),n(e,10,0,t.options.wholeimg),n(e,15,0,t.options.wholetype),n(e,20,0,t.options.wholecat)})}function P(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,45,"div",[["class","body"]],null,null,null,null,null)),(n()(),l.rb(1,0,null,null,35,"div",[["class","options border-bottom pb-1"]],null,null,null,null,null)),(n()(),l.rb(2,0,null,null,25,"span",[["class","d-inline-block icon-options p-2 "]],null,null,null,null,null)),(n()(),l.rb(3,0,[["selectedRatio",1]],null,24,"select",[["class","rounded"]],null,[[null,"change"]],function(n,e,t){var r=!0;return"change"===e&&(r=!1!==n.component.windowRatio(l.Ab(n,3).value)&&r),r},null,null)),(n()(),l.rb(4,0,null,null,3,"option",[["selected",""],["value","50|50"]],null,null,null,null,null)),l.qb(5,147456,null,0,d.l,[l.l,l.E,[8,null]],{value:[0,"value"]},null),l.qb(6,147456,null,0,d.p,[l.l,l.E,[8,null]],{value:[0,"value"]},null),(n()(),l.Hb(-1,null,["50%: 50%"])),(n()(),l.rb(8,0,null,null,3,"option",[["value","30|70"]],null,null,null,null,null)),l.qb(9,147456,null,0,d.l,[l.l,l.E,[8,null]],{value:[0,"value"]},null),l.qb(10,147456,null,0,d.p,[l.l,l.E,[8,null]],{value:[0,"value"]},null),(n()(),l.Hb(-1,null,["30%: 70%"])),(n()(),l.rb(12,0,null,null,3,"option",[["value","10|90"]],null,null,null,null,null)),l.qb(13,147456,null,0,d.l,[l.l,l.E,[8,null]],{value:[0,"value"]},null),l.qb(14,147456,null,0,d.p,[l.l,l.E,[8,null]],{value:[0,"value"]},null),(n()(),l.Hb(-1,null,["10%: 90%"])),(n()(),l.rb(16,0,null,null,3,"option",[["value","100|0"]],null,null,null,null,null)),l.qb(17,147456,null,0,d.l,[l.l,l.E,[8,null]],{value:[0,"value"]},null),l.qb(18,147456,null,0,d.p,[l.l,l.E,[8,null]],{value:[0,"value"]},null),(n()(),l.Hb(-1,null,["100%: 0%"])),(n()(),l.rb(20,0,null,null,3,"option",[["value","0|100"]],null,null,null,null,null)),l.qb(21,147456,null,0,d.l,[l.l,l.E,[8,null]],{value:[0,"value"]},null),l.qb(22,147456,null,0,d.p,[l.l,l.E,[8,null]],{value:[0,"value"]},null),(n()(),l.Hb(-1,null,["0%: 100%"])),(n()(),l.rb(24,0,null,null,3,"option",[["value","70|30"]],null,null,null,null,null)),l.qb(25,147456,null,0,d.l,[l.l,l.E,[8,null]],{value:[0,"value"]},null),l.qb(26,147456,null,0,d.p,[l.l,l.E,[8,null]],{value:[0,"value"]},null),(n()(),l.Hb(-1,null,["70%: 30%"])),(n()(),l.rb(28,0,null,null,2,"span",[["class","d-inline-block icon-options p-2 "]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.renderCode()&&l),l},null,null)),(n()(),l.rb(29,0,null,null,1,"i",[["class","material-icons"]],null,null,null,null,null)),(n()(),l.Hb(-1,null,["loop"])),(n()(),l.rb(31,0,null,null,1,"span",[["class","d-inline-block icon-options p-2 "]],null,[[null,"click"]],function(n,e,t){var l=!0;return"click"===e&&(l=!1!==n.component.fun_template_save()&&l),l},null,null)),(n()(),l.rb(32,0,null,null,0,"i",[["class","far fa-save"]],null,null,null,null,null)),(n()(),l.gb(16777216,null,null,1,null,y)),l.qb(34,16384,null,0,f.k,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.gb(16777216,null,null,1,null,w)),l.qb(36,16384,null,0,f.k,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.rb(37,0,null,null,6,"div",[["class","code"]],null,null,null,null,null)),(n()(),l.rb(38,0,null,null,5,"ngx-monaco-editor",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"onInit"],[null,"ngModelChange"]],function(n,e,t){var l=!0,r=n.component;return"onInit"===e&&(l=!1!==r.editorInit()&&l),"ngModelChange"===e&&(l=!1!==(r.code=t)&&l),l},g,p)),l.qb(39,4374528,null,0,m.a,[l.A,m.c],{options:[0,"options"]},{onInit:"onInit"}),l.Eb(1024,null,d.f,function(n){return[n]},[m.a]),l.qb(41,671744,null,0,d.k,[[8,null],[8,null],[8,null],[6,d.f]],{model:[0,"model"]},{update:"ngModelChange"}),l.Eb(2048,null,d.g,null,[d.k]),l.qb(43,16384,null,0,d.h,[[4,d.g]],null,null),(n()(),l.rb(44,0,null,null,1,"div",[["class","view"]],null,null,null,null,null)),(n()(),l.rb(45,0,null,null,0,"iframe",[["class","viewIframe"]],null,null,null,null,null))],function(n,e){var t=e.component;n(e,5,0,"50|50"),n(e,6,0,"50|50"),n(e,9,0,"30|70"),n(e,10,0,"30|70"),n(e,13,0,"10|90"),n(e,14,0,"10|90"),n(e,17,0,"100|0"),n(e,18,0,"100|0"),n(e,21,0,"0|100"),n(e,22,0,"0|100"),n(e,25,0,"70|30"),n(e,26,0,"70|30"),n(e,34,0,t.idChecked),n(e,36,0,t.options),n(e,39,0,t.editorOptions),n(e,41,0,t.code)},function(n,e){n(e,38,0,l.Ab(e,43).ngClassUntouched,l.Ab(e,43).ngClassTouched,l.Ab(e,43).ngClassPristine,l.Ab(e,43).ngClassDirty,l.Ab(e,43).ngClassValid,l.Ab(e,43).ngClassInvalid,l.Ab(e,43).ngClassPending)})}function E(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,1,"div",[],null,null,null,null,null)),(n()(),l.Hb(-1,null,[" Loading "]))],null,null)}function C(n){return l.Jb(0,[(n()(),l.gb(16777216,null,null,1,null,P)),l.qb(1,16384,null,0,f.k,[l.P,l.M],{ngIf:[0,"ngIf"]},null),(n()(),l.gb(16777216,null,null,1,null,E)),l.qb(3,16384,null,0,f.k,[l.P,l.M],{ngIf:[0,"ngIf"]},null)],function(n,e){var t=e.component;n(e,1,0,!t.loading),n(e,3,0,t.loading)},null)}function x(n){return l.Jb(0,[(n()(),l.rb(0,0,null,null,1,"app-editor",[],null,null,null,C,b)),l.qb(1,4440064,null,0,c,[u.a,o.a,l.l,r.a,v.a,v.k],null,null)],function(n,e){n(e,1,0)},null)}var z=l.nb("app-editor",c,x,{},{},[]),T=t("d2mR");t.d(e,"EditorModuleNgFactory",function(){return A});var A=l.ob(s,[],function(n){return l.yb([l.zb(512,l.k,l.bb,[[8,[h.a,z]],[3,l.k],l.y]),l.zb(4608,f.m,f.l,[l.v,[2,f.v]]),l.zb(4608,d.o,d.o,[]),l.zb(1073742336,f.c,f.c,[]),l.zb(1073742336,d.n,d.n,[]),l.zb(1073742336,d.e,d.e,[]),l.zb(1073742336,T.a,T.a,[]),l.zb(1073742336,m.b,m.b,[]),l.zb(1073742336,v.o,v.o,[[2,v.t],[2,v.k]]),l.zb(1073742336,s,s,[]),l.zb(1024,v.i,function(){return[[{path:"",component:c}]]},[])])})},cLAn:function(n,e,t){!function(e){"use strict";var t=function(){return{escape:function(n){return n.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1")},parseExtension:e,mimeType:function(n){var t;return(t="application/font-woff",{woff:t,woff2:t,ttf:"application/font-truetype",eot:"application/vnd.ms-fontobject",png:"image/png",jpg:"image/jpeg",jpeg:"image/jpeg",gif:"image/gif",tiff:"image/tiff",svg:"image/svg+xml"})[e(n).toLowerCase()]||""},dataAsUrl:function(n,e){return"data:"+e+";base64,"+n},isDataUrl:function(n){return-1!==n.search(/^(data:)/)},canvasToBlob:function(n){return n.toBlob?new Promise(function(e){n.toBlob(e)}):function(n){return new Promise(function(e){for(var t=window.atob(n.toDataURL().split(",")[1]),l=t.length,r=new Uint8Array(l),o=0;o<l;o++)r[o]=t.charCodeAt(o);e(new Blob([r],{type:"image/png"}))})}(n)},resolveUrl:function(n,e){var t=document.implementation.createHTMLDocument(),l=t.createElement("base");t.head.appendChild(l);var r=t.createElement("a");return t.body.appendChild(r),l.href=e,r.href=n,r.href},getAndEncode:function(n){return i.impl.options.cacheBust&&(n+=(/\?/.test(n)?"&":"?")+(new Date).getTime()),new Promise(function(e){var t,l=new XMLHttpRequest;if(l.onreadystatechange=function(){if(4===l.readyState)if(200===l.status){var r=new FileReader;r.onloadend=function(){var n=r.result.split(/,/)[1];e(n)},r.readAsDataURL(l.response)}else t?e(t):o("cannot fetch resource: "+n+", status: "+l.status)},l.ontimeout=function(){t?e(t):o("timeout of 30000ms occured while fetching resource: "+n)},l.responseType="blob",l.timeout=3e4,l.open("GET",n,!0),l.send(),i.impl.options.imagePlaceholder){var r=i.impl.options.imagePlaceholder.split(/,/);r&&r[1]&&(t=r[1])}function o(n){console.error(n),e("")}})},uid:(n=0,function(){return"u"+("0000"+(Math.random()*Math.pow(36,4)<<0).toString(36)).slice(-4)+n++}),delay:function(n){return function(e){return new Promise(function(t){setTimeout(function(){t(e)},n)})}},asArray:function(n){for(var e=[],t=n.length,l=0;l<t;l++)e.push(n[l]);return e},escapeXhtml:function(n){return n.replace(/#/g,"%23").replace(/\n/g,"%0A")},makeImage:function(n){return new Promise(function(e,t){var l=new Image;l.onload=function(){e(l)},l.onerror=t,l.src=n})},width:function(n){var e=t(n,"border-left-width"),l=t(n,"border-right-width");return n.scrollWidth+e+l},height:function(n){var e=t(n,"border-top-width"),l=t(n,"border-bottom-width");return n.scrollHeight+e+l}};var n;function e(n){var e=/\.([^\.\/]*?)$/g.exec(n);return e?e[1]:""}function t(n,e){var t=window.getComputedStyle(n).getPropertyValue(e);return parseFloat(t.replace("px",""))}}(),l=function(){var n=/url\(['"]?([^'"]+?)['"]?\)/g;return{inlineAll:function(n,t,o){return e(n)?Promise.resolve(n).then(l).then(function(e){var l=Promise.resolve(n);return e.forEach(function(n){l=l.then(function(e){return r(e,n,t,o)})}),l}):Promise.resolve(n)},shouldProcess:e,impl:{readUrls:l,inline:r}};function e(e){return-1!==e.search(n)}function l(e){for(var l,r=[];null!==(l=n.exec(e));)r.push(l[1]);return r.filter(function(n){return!t.isDataUrl(n)})}function r(n,e,l,r){return Promise.resolve(e).then(function(n){return l?t.resolveUrl(n,l):n}).then(r||t.getAndEncode).then(function(n){return t.dataAsUrl(n,t.mimeType(e))}).then(function(l){return n.replace(function(n){return new RegExp("(url\\(['\"]?)("+t.escape(n)+")(['\"]?\\))","g")}(e),"$1"+l+"$3")})}}(),r=function(){return{resolveAll:function(){return n(document).then(function(n){return Promise.all(n.map(function(n){return n.resolve()}))}).then(function(n){return n.join("\n")})},impl:{readAll:n}};function n(){return Promise.resolve(t.asArray(document.styleSheets)).then(function(n){var e=[];return n.forEach(function(n){try{t.asArray(n.cssRules||[]).forEach(e.push.bind(e))}catch(l){console.log("Error while reading CSS rules from "+n.href,l.toString())}}),e}).then(function(n){return n.filter(function(n){return n.type===CSSRule.FONT_FACE_RULE}).filter(function(n){return l.shouldProcess(n.style.getPropertyValue("src"))})}).then(function(e){return e.map(n)});function n(n){return{resolve:function(){return l.inlineAll(n.cssText,(n.parentStyleSheet||{}).href)},src:function(){return n.style.getPropertyValue("src")}}}}}(),o=function(){return{inlineAll:function e(r){return r instanceof Element?function(n){var e=n.style.getPropertyValue("background");return e?l.inlineAll(e).then(function(e){n.style.setProperty("background",e,n.style.getPropertyPriority("background"))}).then(function(){return n}):Promise.resolve(n)}(r).then(function(){return r instanceof HTMLImageElement?n(r).inline():Promise.all(t.asArray(r.childNodes).map(function(n){return e(n)}))}):Promise.resolve(r)},impl:{newImage:n}};function n(n){return{inline:function(e){return t.isDataUrl(n.src)?Promise.resolve():Promise.resolve(n.src).then(e||t.getAndEncode).then(function(e){return t.dataAsUrl(e,t.mimeType(n.src))}).then(function(e){return new Promise(function(t,l){n.onload=t,n.onerror=l,n.src=e})})}}}}(),u={imagePlaceholder:void 0,cacheBust:!1},i={toSvg:a,toPng:function(n,e){return c(n,e||{}).then(function(n){return n.toDataURL()})},toJpeg:function(n,e){return c(n,e=e||{}).then(function(n){return n.toDataURL("image/jpeg",e.quality||1)})},toBlob:function(n,e){return c(n,e||{}).then(t.canvasToBlob)},toPixelData:function(n,e){return c(n,e||{}).then(function(e){return e.getContext("2d").getImageData(0,0,t.width(n),t.height(n)).data})},impl:{fontFaces:r,images:o,util:t,inliner:l,options:{}}};function a(n,e){return function(n){i.impl.options.imagePlaceholder=void 0===n.imagePlaceholder?u.imagePlaceholder:n.imagePlaceholder,i.impl.options.cacheBust=void 0===n.cacheBust?u.cacheBust:n.cacheBust}(e=e||{}),Promise.resolve(n).then(function(n){return function(n,e,l){return Promise.resolve(n).then(function(n){return n instanceof HTMLCanvasElement?t.makeImage(n.toDataURL()):n.cloneNode(!1)}).then(function(l){return function(e,l,r){var o=n.childNodes;return 0===o.length?Promise.resolve(l):function(n,e,l){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return function(n,e,l){return e&&!e(n)?Promise.resolve():Promise.resolve(n).then(function(n){return n instanceof HTMLCanvasElement?t.makeImage(n.toDataURL()):n.cloneNode(!1)}).then(function(l){return function(e,l,r){var o=n.childNodes;return 0===o.length?Promise.resolve(l):function(n,e,l){var r=Promise.resolve();return e.forEach(function(e){r=r.then(function(){return function(n,e,l){if(!l&&e&&!e(n))return Promise.resolve();return Promise.resolve(n).then(function(n){return n instanceof HTMLCanvasElement?t.makeImage(n.toDataURL()):n.cloneNode(!1)}).then(function(l){return function(n,e,l){var r=n.childNodes;return 0===r.length?Promise.resolve(e):function(n,e,t){var l=Promise.resolve();return e.forEach(function(e){l=l.then(function(){return s(e,t)}).then(function(e){e&&n.appendChild(e)})}),l}(e,t.asArray(r),l).then(function(){return e})}(n,l,e)}).then(function(e){return function(n,e){return e instanceof Element?Promise.resolve().then(function(){var l,r;l=window.getComputedStyle(n),r=e.style,l.cssText?r.cssText=l.cssText:function(n,e){t.asArray(n).forEach(function(t){e.setProperty(t,n.getPropertyValue(t),n.getPropertyPriority(t))})}(l,r)}).then(function(){[":before",":after"].forEach(function(l){!function(l){var r=window.getComputedStyle(n,l),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var u=t.uid();e.className=e.className+" "+u;var i=document.createElement("style");i.appendChild(function(n,e,l){var r="."+n+":"+e,o=l.cssText?function(n){var e=n.getPropertyValue("content");return n.cssText+" content: "+e+";"}(l):function(n){return t.asArray(n).map(function(e){return e+": "+n.getPropertyValue(e)+(n.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(l);return document.createTextNode(r+"{"+o+"}")}(u,l,r)),e.appendChild(i)}}(l)})}).then(function(){n instanceof HTMLTextAreaElement&&(e.innerHTML=n.value),n instanceof HTMLInputElement&&e.setAttribute("value",n.value)}).then(function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach(function(n){var t=e.getAttribute(n);t&&e.style.setProperty(n,t)}))}).then(function(){return e}):e}(n,e)})}(e,l)}).then(function(e){e&&n.appendChild(e)})}),r}(l,t.asArray(o),r).then(function(){return l})}(0,l,e)}).then(function(e){return function(n,e){return e instanceof Element?Promise.resolve().then(function(){var l,r;l=window.getComputedStyle(n),r=e.style,l.cssText?r.cssText=l.cssText:function(n,e){t.asArray(n).forEach(function(t){e.setProperty(t,n.getPropertyValue(t),n.getPropertyPriority(t))})}(l,r)}).then(function(){[":before",":after"].forEach(function(l){!function(l){var r=window.getComputedStyle(n,l),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var u=t.uid();e.className=e.className+" "+u;var i=document.createElement("style");i.appendChild(function(n,e,l){var r="."+n+":"+e,o=l.cssText?function(n){var e=n.getPropertyValue("content");return n.cssText+" content: "+e+";"}(l):function(n){return t.asArray(n).map(function(e){return e+": "+n.getPropertyValue(e)+(n.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(l);return document.createTextNode(r+"{"+o+"}")}(u,l,r)),e.appendChild(i)}}(l)})}).then(function(){n instanceof HTMLTextAreaElement&&(e.innerHTML=n.value),n instanceof HTMLInputElement&&e.setAttribute("value",n.value)}).then(function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach(function(n){var t=e.getAttribute(n);t&&e.style.setProperty(n,t)}))}).then(function(){return e}):e}(n,e)})}(e,l)}).then(function(e){e&&n.appendChild(e)})}),r}(l,t.asArray(o),r).then(function(){return l})}(0,l,e)}).then(function(e){return function(n,e){return e instanceof Element?Promise.resolve().then(function(){var l,r;l=window.getComputedStyle(n),r=e.style,l.cssText?r.cssText=l.cssText:function(n,e){t.asArray(n).forEach(function(t){e.setProperty(t,n.getPropertyValue(t),n.getPropertyPriority(t))})}(l,r)}).then(function(){[":before",":after"].forEach(function(l){!function(l){var r=window.getComputedStyle(n,l),o=r.getPropertyValue("content");if(""!==o&&"none"!==o){var u=t.uid();e.className=e.className+" "+u;var i=document.createElement("style");i.appendChild(function(n,e,l){var r="."+n+":"+e,o=l.cssText?function(n){var e=n.getPropertyValue("content");return n.cssText+" content: "+e+";"}(l):function(n){return t.asArray(n).map(function(e){return e+": "+n.getPropertyValue(e)+(n.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(l);return document.createTextNode(r+"{"+o+"}")}(u,l,r)),e.appendChild(i)}}(l)})}).then(function(){n instanceof HTMLTextAreaElement&&(e.innerHTML=n.value),n instanceof HTMLInputElement&&e.setAttribute("value",n.value)}).then(function(){e instanceof SVGElement&&(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),e instanceof SVGRectElement&&["width","height"].forEach(function(n){var t=e.getAttribute(n);t&&e.style.setProperty(n,t)}))}).then(function(){return e}):e}(n,e)})}(n,e.filter)}).then(h).then(v).then(function(n){return e.bgcolor&&(n.style.backgroundColor=e.bgcolor),e.width&&(n.style.width=e.width+"px"),e.height&&(n.style.height=e.height+"px"),e.style&&Object.keys(e.style).forEach(function(t){n.style[t]=e.style[t]}),n}).then(function(l){return function(n,e,l){return Promise.resolve(n).then(function(n){return n.setAttribute("xmlns","http://www.w3.org/1999/xhtml"),(new XMLSerializer).serializeToString(n)}).then(t.escapeXhtml).then(function(n){return'<foreignObject x="0" y="0" width="100%" height="100%">'+n+"</foreignObject>"}).then(function(n){return'<svg xmlns="http://www.w3.org/2000/svg" width="'+e+'" height="'+l+'">'+n+"</svg>"}).then(function(n){return"data:image/svg+xml;charset=utf-8,"+n})}(l,e.width||t.width(n),e.height||t.height(n))})}function c(n,e){return a(n,e).then(t.makeImage).then(t.delay(100)).then(function(l){var r=function(n){var l=document.createElement("canvas");if(l.width=e.width||t.width(n),l.height=e.height||t.height(n),e.bgcolor){var r=l.getContext("2d");r.fillStyle=e.bgcolor,r.fillRect(0,0,l.width,l.height)}return l}(n);return r.getContext("2d").drawImage(l,0,0),r})}function s(n,e,l){if(!l&&e&&!e(n))return Promise.resolve();return Promise.resolve(n).then(r).then(function(t){return o(n,t,e)}).then(function(e){return u(n,e)});function r(n){return n instanceof HTMLCanvasElement?t.makeImage(n.toDataURL()):n.cloneNode(!1)}function o(n,e,l){var r=n.childNodes;return 0===r.length?Promise.resolve(e):function(n,e,t){var l=Promise.resolve();return e.forEach(function(e){l=l.then(function(){return s(e,t)}).then(function(e){e&&n.appendChild(e)})}),l}(e,t.asArray(r),l).then(function(){return e});function o(n,e,t){var l=Promise.resolve();return e.forEach(function(e){l=l.then(function(){return s(e,t)}).then(function(e){e&&n.appendChild(e)})}),l}}function u(n,e){return e instanceof Element?Promise.resolve().then(function(){!function(n,e){n.cssText?e.cssText=n.cssText:function(n,e){t.asArray(n).forEach(function(t){e.setProperty(t,n.getPropertyValue(t),n.getPropertyPriority(t))})}(n,e)}(window.getComputedStyle(n),e.style)}).then(function(){[":before",":after"].forEach(function(l){!function(l){var r=window.getComputedStyle(n,l),o=r.getPropertyValue("content");if(""===o||"none"===o)return;var u=t.uid();e.className=e.className+" "+u;var i=document.createElement("style");i.appendChild(function(n,e,l){var r="."+n+":"+e,o=l.cssText?function(n){var e=n.getPropertyValue("content");return n.cssText+" content: "+e+";"}(l):function(n){return t.asArray(n).map(function(e){return e+": "+n.getPropertyValue(e)+(n.getPropertyPriority(e)?" !important":"")}).join("; ")+";"}(l);return document.createTextNode(r+"{"+o+"}")}(u,l,r)),e.appendChild(i)}(l)})}).then(function(){n instanceof HTMLTextAreaElement&&(e.innerHTML=n.value);n instanceof HTMLInputElement&&e.setAttribute("value",n.value)}).then(function(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(n){var t=e.getAttribute(n);t&&e.style.setProperty(n,t)})}).then(function(){return e}):e;function l(){function l(n,e){if(n.cssText)e.cssText=n.cssText;else l(n,e);function l(n,e){t.asArray(n).forEach(function(t){e.setProperty(t,n.getPropertyValue(t),n.getPropertyPriority(t))})}}l(window.getComputedStyle(n),e.style)}function r(){function l(l){var r=window.getComputedStyle(n,l),o=r.getPropertyValue("content");if(o===""||o==="none")return;var u=t.uid();e.className=e.className+" "+u;var i=document.createElement("style");function a(n,e,l){var r="."+n+":"+e,o=l.cssText?u(l):i(l);return document.createTextNode(r+"{"+o+"}");function u(n){var e=n.getPropertyValue("content");return n.cssText+" content: "+e+";"}function i(n){return t.asArray(n).map(e).join("; ")+";";function e(e){return e+": "+n.getPropertyValue(e)+(n.getPropertyPriority(e)?" !important":"")}}}i.appendChild(a(u,l,r)),e.appendChild(i)}[":before",":after"].forEach(function(n){l(n)})}function o(){if(n instanceof HTMLTextAreaElement)e.innerHTML=n.value;if(n instanceof HTMLInputElement)e.setAttribute("value",n.value)}function u(){if(!(e instanceof SVGElement))return;if(e.setAttribute("xmlns","http://www.w3.org/2000/svg"),!(e instanceof SVGRectElement))return;["width","height"].forEach(function(n){var t=e.getAttribute(n);if(!t)return;e.style.setProperty(n,t)})}}}function h(n){return r.resolveAll().then(function(e){var t=document.createElement("style");return n.appendChild(t),t.appendChild(document.createTextNode(e)),n})}function v(n){return o.inlineAll(n).then(function(){return n})}n.exports=i}()}}]);
import{d as B,r as o,m as D,o as f,s as g,b as m,e as u,aj as h,w as r,c as E,ae as b,F as n,U as c,G as A,B as N,ab as P,y as v,A as x}from"./vendor.f5c376e8.js";import{n as U,i as w}from"./index.e611ac30.js";const O={class:"list-page"},C=n("a",{href:"https://t.me/shabitt",target:"_blank"},"\u4F5C\u8005",-1),L=n("a",{href:"https://shimily.notion.site/shimily/f90e8e28b55e423185f44c89c53c573c?v=b69a268a91c946ce9238f947100070a4",target:"_blank"},"\u5730\u5740",-1),T=n("br",null,null,-1),M=v(" \u8BF7\u5148\u5728\u6587\u4EF6\u5217\u8868\u64CD\u4F5C\u9009\u62E9\u8BBE\u7F6E\u9ED8\u8BA4 "),S=n("br",null,null,-1),V=B({setup(j){const d=o([]),l=o(),p=o(!1),y=()=>{p.value=!0,U.post("https://api.notion.com/v1/databases/f90e8e28b55e423185f44c89c53c573c/query").then(s=>{if(p.value=!1,l.value=s.data.results,l.value.length)for(let e in l.value[0].properties)console.log(e),d.value.push({title:e,key:e,ellipsis:{tooltip:{placement:"right"}},width:e==="\u540D\u79F0"?600:150,render:a=>{const t=a.properties[e];switch(t.type){case"rich_text":case"title":return c("div",{},{default:()=>t[t.type]&&t[t.type].length&&t[t.type].map(k=>k.plain_text)});case"select":return c("div",{style:{color:a.properties[e].select.color}},t.select.name);case"created_time":return c(A,{time:new Date(t.created_time),type:"date",format:"MM-dd HH:MM"});default:return"--"}}});d.value.push({title:"\u64CD\u4F5C",key:"action",width:80,align:"right",render:e=>c(N,{type:"primary",onClick:()=>{F(e.properties.\u94FE\u63A5.rich_text[0].plain_text)}},{default:()=>"\u4FDD\u5B58"})})})},i=o(),_=()=>JSON.parse(window.localStorage.getItem("pikpakUploadFolder")||"{}"),F=s=>{let e={};if(!_().id)return window.$message.error("\u8BF7\u5148\u8BBE\u7F6E\u9ED8\u8BA4\u4E0A\u4F20\u76EE\u5F55"),!1;if(s.indexOf("PikPak://")===0){const a=s.substring(9).split("|");e={kind:"drive#file",parent_id:_().id,name:a[0],size:a[1],hash:a[2],upload_type:"UPLOAD_TYPE_RESUMABLE",objProvider:{provider:"UPLOAD_TYPE_UNKNOWN"}}}else e={kind:"drive#file",name:"",upload_type:"UPLOAD_TYPE_URL",url:{url:s},params:{from:"file"},folder_type:"DOWNLOAD"};w.post("https://api-drive.mypikpak.com/drive/v1/files",e).then(a=>{(a.data.upload_type==="UPLOAD_TYPE_UNKNOWN"||s.indexOf("PikPak://")===-1)&&window.$message.success("\u6DFB\u52A0\u6210\u529F")})};return D(()=>{i.value=_(),y()}),(s,e)=>(f(),g("div",O,[m(u(h),{title:"\u611F\u8C22@shabitt",type:"info",closable:""},{default:r(()=>[m(u(P),null,{default:r(()=>[C,L]),_:1})]),_:1}),T,!i.value||!i.value.id?(f(),E(u(h),{key:0,title:"\u8BF7\u5148\u8BBE\u7F6E\u9ED8\u8BA4\u4E0A\u4F20\u76EE\u5F55",type:"error"},{default:r(()=>[M]),_:1})):(f(),E(u(h),{key:1,title:"\u9ED8\u8BA4\u76EE\u5F55",type:"success"},{default:r(()=>[v(x(i.value.name),1)]),_:1})),S,m(u(b),{bordered:!1,size:"small",data:l.value,loading:p.value,columns:d.value},null,8,["data","loading","columns"])]))}});export{V as default};

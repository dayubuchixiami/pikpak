import{d as F,r,m as D,a as E,o as k,s as y,F as u,b as t,e as s,aa as T,w as a,ae as x,H as g,D as B,ac as S,I as b,am as z,P,y as m,U as i,G as L,a4 as A,B as N,a5 as I,ab as M}from"./vendor.f5c376e8.js";import{i as p,b as U}from"./index.e611ac30.js";const V={class:"list-page"},$={class:"header"},j={class:"title n-ellipsis"},q=m("\u56DE\u6536\u7AD9"),G={key:0,class:"outer-wrapper static show"},H={class:"toolbar-wrapper"},R=m(" \u8FD8\u539F\u6240\u9009 "),K=m(" \u5220\u9664\u6240\u9009 "),Y=F({setup(O){const _=r(),o=r([]),w=r([{title:"\u5220\u9664\u65F6\u95F4",key:"modified_time",sorter:"default",render:e=>i(L,{time:new Date(String(e.delete_time)||""),format:"MM-dd hh:mm"}),className:"modified_time",width:200},{title:"\u5927\u5C0F",key:"size",sorter:"default",render:e=>Number(e.size)>0?U(Number(e.size)):"",className:"size",width:160}]),f=r([{type:"selection"},{title:"\u540D\u79F0",key:"name",sorter:"default",render:e=>i("div",{class:"file-info"},[i("img",{src:e.thumbnail_link||e.icon_link}),i(A,{class:"title"},{default:()=>String(e.name)}),i("span",{class:"action"},"1")])},{title:"\u64CD\u4F5C",key:"action",width:90,align:"right",render:e=>i(M,{},{default:()=>[i(N,{type:"primary",onClick:()=>{v(String(e.id))}},{default:()=>"\u8FD8\u539F"}),i(I,{placement:"right",onPositiveClick:()=>{h(String(e.id))}},{trigger:()=>i(N,{type:"primary"},{default:()=>"\u5220\u9664"}),default:()=>"\u786E\u5B9A\u5220\u9664\u6587\u4EF6\u5417\uFF1F"})]})}]),d=r(!1),c=()=>{d.value=!0,p.get("https://api-drive.mypikpak.com/drive/v1/files",{params:{parent_id:"*",thumbnail_size:"SIZE_LARGE",with_audit:!0,filters:{phase:{eq:"PHASE_TYPE_COMPLETE"},trashed:{eq:!0}}}}).then(e=>{const{data:l}=e;_.value=l.files}).finally(()=>{d.value=!1})},h=e=>{p.post("https://api-drive.mypikpak.com/drive/v1/files:batchDelete",{ids:typeof e=="string"?[e]:e}).then(()=>{window.$message.success("\u5220\u9664\u6210\u529F"),c()})},v=e=>{p.post("https://api-drive.mypikpak.com/drive/v1/files:batchUntrash",{ids:typeof e=="string"?[e]:e}).then(()=>{c()})};return D(()=>{document.body.clientWidth>968&&f.value.splice(2,0,...w.value),c()}),(e,l)=>{const C=E("router-link");return k(),y("div",V,[u("div",$,[u("div",j,[t(s(T),{separator:">"},{default:a(()=>[t(s(S),null,{default:a(()=>[t(C,{to:""},{default:a(()=>[q]),_:1})]),_:1})]),_:1})])]),t(s(x),{"checked-row-keys":o.value,"onUpdate:checked-row-keys":l[0]||(l[0]=n=>o.value=n),"row-key":n=>n.id,data:_.value,size:"small",columns:f.value,bordered:!1,loading:d.value},null,8,["checked-row-keys","row-key","data","columns","loading"]),o.value.length?(k(),y("div",G,[u("div",H,[u("div",{class:"toolbar-item",onClick:l[1]||(l[1]=n=>v(o.value))},[t(s(g),null,{trigger:a(()=>[t(s(b),null,{default:a(()=>[t(s(z))]),_:1})]),default:a(()=>[R]),_:1})]),u("div",{class:"toolbar-item",onClick:l[2]||(l[2]=n=>h(o.value))},[t(s(g),null,{trigger:a(()=>[t(s(b),null,{default:a(()=>[t(s(P))]),_:1})]),default:a(()=>[K]),_:1})])])])):B("",!0)])}}});export{Y as default};

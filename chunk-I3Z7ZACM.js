import{a as o,b as n,c as a,d as s,e as m,f as e,g as u,j as d,m as c,o as l}from"./chunk-E4LEUYMX.js";var v=class extends l{static{e(this,"PieTokenBuilder")}constructor(){super(["pie","showData"])}},C=class extends c{static{e(this,"PieValueConverter")}runCustomConverter(t,r,i){if(t.name==="PIE_SECTION_LABEL")return r.replace(/"/g,"").trim()}},P={parser:{TokenBuilder:e(()=>new v,"TokenBuilder"),ValueConverter:e(()=>new C,"ValueConverter")}};function p(t=s){let r=a(n(t),u),i=a(o({shared:r}),d,P);return r.ServiceRegistry.register(i),{shared:r,Pie:i}}e(p,"createPieServices");export{P as a,p as b};

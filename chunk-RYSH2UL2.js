import{a as i,b as u,c as a,d as n,e as m,f as r,g as o,k as s,m as l,o as d}from"./chunk-E4LEUYMX.js";var h=class extends d{static{r(this,"ArchitectureTokenBuilder")}constructor(){super(["architecture"])}},A=class extends l{static{r(this,"ArchitectureValueConverter")}runCustomConverter(t,e,c){if(t.name==="ARCH_ICON")return e.replace(/[()]/g,"").trim();if(t.name==="ARCH_TEXT_ICON")return e.replace(/["()]/g,"");if(t.name==="ARCH_TITLE")return e.replace(/[[\]]/g,"").trim()}},C={parser:{TokenBuilder:r(()=>new h,"TokenBuilder"),ValueConverter:r(()=>new A,"ValueConverter")}};function v(t=n){let e=a(u(t),o),c=a(i({shared:e}),s,C);return e.ServiceRegistry.register(c),{shared:e,Architecture:c}}r(v,"createArchitectureServices");export{C as a,v as b};

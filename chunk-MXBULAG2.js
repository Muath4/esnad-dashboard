import{a as d,d as m,e as u,f as y,g as f,h,j as L}from"./chunk-YZPGDIJO.js";import{c as g}from"./chunk-BX6Q2EGA.js";import{D as s,N as l,h as o,j as i}from"./chunk-YMYRQ6W5.js";import{h as a}from"./chunk-FU75TI2F.js";var p={common:l,getConfig:s,insertCluster:d,insertEdge:y,insertEdgeLabel:m,insertMarkers:f,insertNode:L,interpolateToCurve:g,labelHelper:h,log:i,positionEdgeLabel:u},t={},w=o(r=>{for(let e of r)t[e.name]=e},"registerLayoutLoaders"),v=o(()=>{w([{name:"dagre",loader:o(()=>a(void 0,null,function*(){return yield import("./chunk-QS5IO5QJ.js")}),"loader")}])},"registerDefaultLayoutLoaders");v();var R=o((r,e)=>a(void 0,null,function*(){if(!(r.layoutAlgorithm in t))throw new Error(`Unknown layout algorithm: ${r.layoutAlgorithm}`);let n=t[r.layoutAlgorithm];return(yield n.loader()).render(r,e,p,{algorithm:n.algorithm})}),"render"),_=o((r="",{fallback:e="dagre"}={})=>{if(r in t)return r;if(e in t)return i.warn(`Layout algorithm ${r} is not registered. Using ${e} as fallback.`),e;throw new Error(`Both layout algorithms ${r} and ${e} are not registered.`)},"getRegisteredLayoutAlgorithm");export{w as a,R as b,_ as c};

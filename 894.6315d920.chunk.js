"use strict";(self.webpackChunk_app_client=self.webpackChunk_app_client||[]).push([[894],{291:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(294),o=n(369),i=n(977),a=n(989),c=n(581);function s(e){let{children:t}=e;const n=r.useMemo((()=>new o.d(6,6,6,10,10,10).translate(0,3,0)),[]);return r.createElement(i.Xz,{legacy:!0,flat:!0,linear:!0,gl:{localClippingEnabled:!0}},r.createElement(a.c,{makeDefault:!0,position:[0,1.6,0]}),r.createElement(c.z,{makeDefault:!0,target:[0,1,-1.8]}),r.createElement("ambientLight",null),r.createElement("lineSegments",{geometry:n},r.createElement("lineBasicMaterial",{color:"#c0c0c0"})),r.createElement("group",{position:[0,1,-1.88]},t))}},894:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(294),o=n(291),i=n(631),a=n(462),c=n(477),s=n(679),l=n(22),u=n(881),h=n(530),p=n(43),d=n(460),f=n(385),m=n(955);function g(e,t){let{anchorX:n="center",anchorY:o="middle",font:g,children:w,characters:x,onSync:y,...E}=e;const v=(0,l.w)((e=>{let{invalidate:t}=e;return t})),[M]=r.useState((()=>new s.xv)),[C,P]=r.useMemo((()=>{const e=[];let t="";return r.Children.forEach(w,(n=>{"string"==typeof n||"number"==typeof n?t+=n:e.push(n)})),[e,t]}),[w]);(0,u.Rq)((()=>new Promise((e=>(0,s.C5)({font:g,characters:x},e)))),["troika-text",g,x]);const b=r.useRef(null),k=(0,p.Z)(),Z=(0,d.Z)([w]);r.useMemo((()=>{M.renderOrder=k+2;const e=M.material;e.side=c.FrontSide,e.depthWrite=!1,e.needsUpdate=!0}),[M,k]);const[S,I]=r.useState({width:0,height:0});r.useLayoutEffect((()=>{M.sync((()=>{v();const e=2*M.geometry.boundingBox.max.x,t=2*M.geometry.boundingBox.max.y;I({width:e,height:t}),y&&y(M)}))})),r.useEffect((()=>()=>M.dispose()),[M]);const O=r.useId(),{parentId:D}=r.useContext(m.K);return r.useEffect((()=>{null!==b.current&&void 0!==D&&(f.Z.hasOwnProperty(D)||(f.Z[D]=[]),f.Z[D].push({...S,id:O}))}),[D,S,O]),r.createElement(i.Z,{width:S.width,height:S.height,backgroundColor:"crimson",ref:b,key:Z},r.createElement("primitive",(0,a.Z)({object:M,ref:(0,h.l)([b,t]),font:g,text:P,anchorX:n,anchorY:o},E),C))}const w=r.forwardRef(g);w.displayName="ui-text";var x=w;function y(){return r.createElement(o.Z,null,r.createElement(i.Z,{backgroundColor:"#777777",width:1,height:1,justifyContent:"center",flexDirection:"column",alignItems:"center",gap:.05},r.createElement(i.Z,{width:.5,height:.5,backgroundColor:"#555555",alignItems:"start"},r.createElement(x,{fontSize:.1,color:"white",textAlign:"center"},"Some\nText"))))}},631:function(e,t,n){var r=n(294),o=n(530),i=n(477),a=n(22),c=n(43),s=n(460),l=n(385),u=n(955);function h(e,t){let{children:n,width:h=1,height:p=1,backgroundColor:d="black",backgroundImage:f,backgroundSize:m,zIndex:g=0,position:w,rotation:x,flexDirection:y="row",alignItems:E="start",justifyContent:v="start",gap:M=0,onClick:C,onContextMenu:P,onDoubleClick:b,onPointerUp:k,onPointerDown:Z,onPointerOver:S,onPointerOut:I,onPointerEnter:O,onPointerLeave:D,onPointerMove:B,onPointerMissed:W,onPointerCancel:R,onWheel:V}=e;const z=(0,a.w)((e=>e.gl)),A=r.useMemo((()=>({width:h,height:p})),[h,p]),[L,K]=r.useState(void 0);r.useMemo((()=>{void 0!==f&&(new i.TextureLoader).loadAsync(f).then(K)}),[f]),r.useMemo((()=>{void 0!==L&&(L.anisotropy=z.capabilities.getMaxAnisotropy())}),[L,z]);const[_,j,N]=r.useMemo((()=>{const e=A.width/A.height;return void 0===L?[e,e,e]:[e,L.image.width/L.image.height,L.image.height/L.image.width]}),[L,A]),[U,X]=r.useState((()=>{const e=new i.Plane(new i.Vector3,1);return[e.clone(),e.clone(),e.clone(),e.clone()]})),[G,T]=r.useState((()=>({...A}))),Y=r.useMemo((()=>void 0===n?[]:Array.isArray(n)?n:[n]),[n]),q=r.useMemo((()=>new i.Vector2(0,0)),[]),{parentId:F}=r.useContext(u.K),H=r.useCallback((e=>{var t;console.log(l.Z);const n=null!==(t=Y[e].type.displayName)&&void 0!==t?t:"";if(!["ui-surface"].includes(n))return[0,0,0];const r=Y.reduce(((e,t)=>e+t.props.width),0),o=Y.reduce(((e,t)=>e+t.props.height),0);q.set(0,0);let i=r,a="width",c="height";if("column"===y&&(a="height",c="width",i=o),Y.length>0&&!["space-between","space-around"].includes(v)&&(i+=M*(Y.length-1)),"start"===v){q.x=.5*A[a]+.5*Y[0].props[a]-A[a];for(let t=1;t<=e;t++)q.x+=.5*Y[t-1].props[a]+.5*Y[t].props[a]+M}if("center"===v){q.x=.5*Y[0].props[a]-.5*i;for(let t=1;t<=e;t++)q.x+=.5*Y[t-1].props[a]+.5*Y[t].props[a]+M}if("end"===v){q.x=.5*A[a]+.5*Y[0].props[a]-i;for(let t=1;t<=e;t++)q.x+=.5*Y[t-1].props[a]+.5*Y[t].props[a]+M}if("space-between"===v)if(i>=A[a]){q.x=.5*A[a]+.5*Y[0].props[a]-A[a];for(let t=1;t<=e;t++)q.x+=.5*Y[t-1].props[a]+.5*Y[t].props[a]}else{let t=Math.max(0,A[a]-i);0===Y.length?t=0:t>0&&(t/=Y.length-1),q.x=.5*A[a]+.5*Y[0].props[a]-A[a];for(let n=1;n<=e;n++)q.x+=.5*Y[n-1].props[a]+.5*Y[n].props[a]+t}if("space-around"===v)if(i>=A[a]){q.x=.5*A[a]+.5*Y[0].props[a]-A[a];for(let t=1;t<=e;t++)q.x+=.5*Y[t-1].props[a]+.5*Y[t].props[a]}else{let t=Math.max(0,A[a]-i);0===Y.length?t=0:t>0&&(t/=Y.length+1),q.x=.5*A[a]+.5*Y[0].props[a]-A[a],q.x+=t;for(let n=1;n<=e;n++)q.x+=.5*Y[n-1].props[a]+.5*Y[n].props[a]+t}return"start"===E&&("row"===y&&(q.y=.5*A[c]-.5*Y[e].props[c]),"column"===y&&(q.y=-.5*A[c]+.5*Y[e].props[c])),"end"===E&&("row"===y&&(q.y=-.5*A[c]+.5*Y[e].props[c]),"column"===y&&(q.y=.5*A[c]-.5*Y[e].props[c])),"column"===y?[q.y,q.x,0]:[q.x,q.y,0]}),[Y,A,y,E,v,M,q,F]),[J,Q]=r.useState((()=>Y.map(((e,t)=>H(t)))));r.useEffect((()=>{Q(Y.map(((e,t)=>H(t))))}),[Y,H]),r.useEffect((()=>{if(void 0===L)return;const e={...A};"contain"===m&&(j>=_?(e.width=A.width,e.height=e.width*N):(e.height=A.height,e.width=e.height*j)),"cover"===m&&(j>=_?(e.height=A.height,e.width=e.height*j):(e.width=A.width,e.height=e.width*N)),T(e),X((e=>(e[0].set(new i.Vector3(0,-1,0),.5*A.height),e[1].set(new i.Vector3(1,0,0),.5*A.width),e[2].set(new i.Vector3(0,1,0),.5*A.height),e[3].set(new i.Vector3(-1,0,0),.5*A.width),[...e])))}),[x,w,J,L,A,m,j,N,_]);const $=r.useRef(null);r.useEffect((()=>{const e=$.current;null!==e&&(e.updateMatrixWorld(!0),U.forEach((t=>{t.applyMatrix4(e.matrixWorld)})))}),[x,w,J,U]);const ee=(0,c.Z)(),te=(0,s.Z)([J,L,x,w,n,G,U]),ne=r.useId();return r.useEffect((()=>{null!==$.current&&void 0!==F&&(l.Z.hasOwnProperty(F)||(l.Z[F]=[]),l.Z[F].push({...A,id:ne}))}),[A,F,ne]),r.createElement("group",{ref:(0,o.l)([$,t]),key:te,rotation:x,position:w,onClick:C,onContextMenu:P,onDoubleClick:b,onPointerUp:k,onPointerDown:Z,onPointerOver:S,onPointerOut:I,onPointerEnter:O,onPointerLeave:D,onPointerMove:B,onPointerMissed:W,onPointerCancel:R,onWheel:V},r.createElement("mesh",{renderOrder:ee+g},r.createElement("planeBufferGeometry",{args:[A.width,A.height]}),r.createElement("meshBasicMaterial",{color:d,transparent:!0,depthWrite:!1})),r.createElement("mesh",{renderOrder:ee+g,visible:void 0!==L},r.createElement("planeBufferGeometry",{args:[G.width,G.height]}),r.createElement("meshBasicMaterial",{map:L,transparent:!0,depthWrite:!1,clippingPlanes:U})),r.createElement(u.K.Provider,{value:{parentId:ne}},r.Children.map(n,((e,t)=>r.createElement("group",{key:t,position:J[t]},e)))))}const p=r.forwardRef(h);p.displayName="ui-surface",t.Z=p},955:function(e,t,n){n.d(t,{K:function(){return r}});const r=n(294).createContext({})},460:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(294);function o(e){const t=r.useRef(0);return r.useMemo((()=>{let e=++t.current;return e>1e3&&(e=0,t.current=e),e}),e)}},43:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(294);let o=-1;function i(){return r.useMemo((()=>++o),[])}},385:function(e,t){t.Z={}}}]);
//# sourceMappingURL=894.6315d920.chunk.js.map
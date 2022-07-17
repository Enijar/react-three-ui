"use strict";(self.webpackChunk_app_client=self.webpackChunk_app_client||[]).push([[473],{291:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(294),o=n(369),i=n(977),a=n(989),l=n(581);function c(e){let{children:t}=e;const n=r.useMemo((()=>new o.d(6,6,6,10,10,10).translate(0,3,0)),[]);return r.createElement(i.Xz,{legacy:!0,flat:!0,linear:!0,gl:{localClippingEnabled:!0}},r.createElement(a.c,{makeDefault:!0,position:[0,1.6,0]}),r.createElement(l.z,{makeDefault:!0,target:[0,1,-1.8]}),r.createElement("ambientLight",null),r.createElement("lineSegments",{geometry:n},r.createElement("lineBasicMaterial",{color:"#c0c0c0"})),r.createElement("group",{position:[0,1,-1.88]},t))}},473:function(e,t,n){n.r(t),n.d(t,{default:function(){return a}});var r=n(294),o=n(291),i=n(631);function a(){return r.createElement(o.Z,null,r.createElement(i.Z,{position:[-.52,0,0],backgroundColor:"#777777",width:1,height:1,justifyContent:"space-between",flexDirection:"row",alignItems:"center"},r.createElement(i.Z,{width:.3,height:.3,backgroundColor:"red"}),r.createElement(i.Z,{width:.3,height:.3,backgroundColor:"green"}),r.createElement(i.Z,{width:.3,height:.3,backgroundColor:"blue"})),r.createElement(i.Z,{position:[.52,0,0],backgroundColor:"#777777",width:1,height:1,justifyContent:"space-around",flexDirection:"column",alignItems:"center"},r.createElement(i.Z,{width:.3,height:.3,backgroundColor:"red"}),r.createElement(i.Z,{width:.3,height:.3,backgroundColor:"green"}),r.createElement(i.Z,{width:.3,height:.3,backgroundColor:"blue"})))}},631:function(e,t,n){var r=n(294),o=n(530),i=n(477),a=n(22),l=n(43),c=n(460),s=n(385),u=n(955);function h(e,t){let{children:n,width:h=1,height:p=1,backgroundColor:d="black",backgroundImage:g,backgroundSize:m,zIndex:f=0,position:w,rotation:E,flexDirection:x="row",alignItems:C="start",justifyContent:b="start",gap:k=0,onClick:v,onContextMenu:y,onDoubleClick:M,onPointerUp:P,onPointerDown:Z,onPointerOver:D,onPointerOut:I,onPointerEnter:O,onPointerLeave:S,onPointerMove:V,onPointerMissed:W,onPointerCancel:B,onWheel:z}=e;const A=(0,a.w)((e=>e.gl)),L=r.useMemo((()=>({width:h,height:p})),[h,p]),[_,j]=r.useState(void 0);r.useMemo((()=>{void 0!==g&&(new i.TextureLoader).loadAsync(g).then(j)}),[g]),r.useMemo((()=>{void 0!==_&&(_.anisotropy=A.capabilities.getMaxAnisotropy())}),[_,A]);const[K,R,G]=r.useMemo((()=>{const e=L.width/L.height;return void 0===_?[e,e,e]:[e,_.image.width/_.image.height,_.image.height/_.image.width]}),[_,L]),[N,U]=r.useState((()=>{const e=new i.Plane(new i.Vector3,1);return[e.clone(),e.clone(),e.clone(),e.clone()]})),[T,X]=r.useState((()=>({...L}))),q=r.useMemo((()=>void 0===n?[]:Array.isArray(n)?n:[n]),[n]),F=r.useMemo((()=>new i.Vector2(0,0)),[]),{parentId:H}=r.useContext(u.K),J=r.useCallback((e=>{var t;console.log(s.Z);const n=null!==(t=q[e].type.displayName)&&void 0!==t?t:"";if(!["ui-surface"].includes(n))return[0,0,0];const r=q.reduce(((e,t)=>e+t.props.width),0),o=q.reduce(((e,t)=>e+t.props.height),0);F.set(0,0);let i=r,a="width",l="height";if("column"===x&&(a="height",l="width",i=o),q.length>0&&!["space-between","space-around"].includes(b)&&(i+=k*(q.length-1)),"start"===b){F.x=.5*L[a]+.5*q[0].props[a]-L[a];for(let t=1;t<=e;t++)F.x+=.5*q[t-1].props[a]+.5*q[t].props[a]+k}if("center"===b){F.x=.5*q[0].props[a]-.5*i;for(let t=1;t<=e;t++)F.x+=.5*q[t-1].props[a]+.5*q[t].props[a]+k}if("end"===b){F.x=.5*L[a]+.5*q[0].props[a]-i;for(let t=1;t<=e;t++)F.x+=.5*q[t-1].props[a]+.5*q[t].props[a]+k}if("space-between"===b)if(i>=L[a]){F.x=.5*L[a]+.5*q[0].props[a]-L[a];for(let t=1;t<=e;t++)F.x+=.5*q[t-1].props[a]+.5*q[t].props[a]}else{let t=Math.max(0,L[a]-i);0===q.length?t=0:t>0&&(t/=q.length-1),F.x=.5*L[a]+.5*q[0].props[a]-L[a];for(let n=1;n<=e;n++)F.x+=.5*q[n-1].props[a]+.5*q[n].props[a]+t}if("space-around"===b)if(i>=L[a]){F.x=.5*L[a]+.5*q[0].props[a]-L[a];for(let t=1;t<=e;t++)F.x+=.5*q[t-1].props[a]+.5*q[t].props[a]}else{let t=Math.max(0,L[a]-i);0===q.length?t=0:t>0&&(t/=q.length+1),F.x=.5*L[a]+.5*q[0].props[a]-L[a],F.x+=t;for(let n=1;n<=e;n++)F.x+=.5*q[n-1].props[a]+.5*q[n].props[a]+t}return"start"===C&&("row"===x&&(F.y=.5*L[l]-.5*q[e].props[l]),"column"===x&&(F.y=-.5*L[l]+.5*q[e].props[l])),"end"===C&&("row"===x&&(F.y=-.5*L[l]+.5*q[e].props[l]),"column"===x&&(F.y=.5*L[l]-.5*q[e].props[l])),"column"===x?[F.y,F.x,0]:[F.x,F.y,0]}),[q,L,x,C,b,k,F,H]),[Q,Y]=r.useState((()=>q.map(((e,t)=>J(t)))));r.useEffect((()=>{Y(q.map(((e,t)=>J(t))))}),[q,J]),r.useEffect((()=>{if(void 0===_)return;const e={...L};"contain"===m&&(R>=K?(e.width=L.width,e.height=e.width*G):(e.height=L.height,e.width=e.height*R)),"cover"===m&&(R>=K?(e.height=L.height,e.width=e.height*R):(e.width=L.width,e.height=e.width*G)),X(e),U((e=>(e[0].set(new i.Vector3(0,-1,0),.5*L.height),e[1].set(new i.Vector3(1,0,0),.5*L.width),e[2].set(new i.Vector3(0,1,0),.5*L.height),e[3].set(new i.Vector3(-1,0,0),.5*L.width),[...e])))}),[E,w,Q,_,L,m,R,G,K]);const $=r.useRef(null);r.useEffect((()=>{const e=$.current;null!==e&&(e.updateMatrixWorld(!0),N.forEach((t=>{t.applyMatrix4(e.matrixWorld)})))}),[E,w,Q,N]);const ee=(0,l.Z)(),te=(0,c.Z)([Q,_,E,w,n,T,N]),ne=r.useId();return r.useEffect((()=>{null!==$.current&&void 0!==H&&(s.Z.hasOwnProperty(H)||(s.Z[H]=[]),s.Z[H].push({...L,id:ne}))}),[L,H,ne]),r.createElement("group",{ref:(0,o.l)([$,t]),key:te,rotation:E,position:w,onClick:v,onContextMenu:y,onDoubleClick:M,onPointerUp:P,onPointerDown:Z,onPointerOver:D,onPointerOut:I,onPointerEnter:O,onPointerLeave:S,onPointerMove:V,onPointerMissed:W,onPointerCancel:B,onWheel:z},r.createElement("mesh",{renderOrder:ee+f},r.createElement("planeBufferGeometry",{args:[L.width,L.height]}),r.createElement("meshBasicMaterial",{color:d,transparent:!0,depthWrite:!1})),r.createElement("mesh",{renderOrder:ee+f,visible:void 0!==_},r.createElement("planeBufferGeometry",{args:[T.width,T.height]}),r.createElement("meshBasicMaterial",{map:_,transparent:!0,depthWrite:!1,clippingPlanes:N})),r.createElement(u.K.Provider,{value:{parentId:ne}},r.Children.map(n,((e,t)=>r.createElement("group",{key:t,position:Q[t]},e)))))}const p=r.forwardRef(h);p.displayName="ui-surface",t.Z=p},955:function(e,t,n){n.d(t,{K:function(){return r}});const r=n(294).createContext({})},460:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(294);function o(e){const t=r.useRef(0);return r.useMemo((()=>{let e=++t.current;return e>1e3&&(e=0,t.current=e),e}),e)}},43:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(294);let o=-1;function i(){return r.useMemo((()=>++o),[])}},385:function(e,t){t.Z={}}}]);
//# sourceMappingURL=473.84e16d23.chunk.js.map
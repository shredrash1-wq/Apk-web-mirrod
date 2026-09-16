import{r as a,j as e,a6 as T,L as g,s as D}from"./index-voXJbzMG.js";const M="https://inv.nadeko.net",S=["https://invidious.privacyredirect.com","https://inv.tux.pizza","https://yt.cdaut.de","https://invidious.lunar.icu","https://invidious.protokolla.fi","https://invidious.nerdvpn.de","https://iv.melmac.space","https://invidious.perennialte.ch"];function N(){return(D.get("invidiousBase")||M).replace(/\/$/,"")}const L=`
(function() {
  var title = (document.title || '').toLowerCase()
  var body  = (document.body  && document.body.innerText || '').toLowerCase()
  var botKeywords = ['verifying', 'antibot', 'challenge', 'ddos', 'please wait', 'checking your browser', 'just a moment']
  var isBot = botKeywords.some(function(k) { return title.includes(k) || body.includes(k) })
  isBot
})()
`,V=`
(function() {
  if (window.__trailerSetup) return
  window.__trailerSetup = true

  // Hide the "Watch on Invidious" button inside the player
  var style = document.createElement('style')
  style.textContent = '.player-container .invidious-link, a[href*="/watch"], .vjs-invidious-button { display: none !important; }'
  document.head.appendChild(style)

  // Detect video end and notify host
  var attachEnded = function() {
    var video = document.querySelector('video')
    if (!video) return false
    video.addEventListener('ended', function() {
      window.__trailerEnded = true
    })
    return true
  }
  if (!attachEnded()) {
    var obs = new MutationObserver(function() { if (attachEnded()) obs.disconnect() })
    obs.observe(document.body, { childList: true, subtree: true })
  }
})()
`;function I({trailerKey:u,title:w,onClose:s}){const f=a.useRef(null),[o,x]=a.useState(null),[d,m]=a.useState("Loading trailer…"),[b,E]=a.useState(!1),v=a.useRef(-1),l=a.useCallback(()=>{const t=N(),n=[t,...S.filter(r=>r!==t)];v.current+=1;const i=v.current;if(i>=n.length){E(!0),m("All Invidious instances failed. Try setting a custom instance in Settings.");return}const c=n[i],p=c.replace(/^https?:\/\//,"");m(i===0?"Loading trailer…":`Trying ${p}…`),x(`${c}/embed/${u}?autoplay=1&listen=0`)},[u]);a.useEffect(()=>{v.current=-1,l()},[l]),a.useEffect(()=>{const t=n=>{n.key==="Escape"&&s()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[s]);const j=()=>{var i;const n=`${N()}/watch?v=${u}`;(i=window.electron)==null||i.openExternal(n)};return a.useEffect(()=>{const t=f.current;if(!t||!o)return;const n=()=>{t.executeJavaScript(L).then(r=>{r?l():(t.executeJavaScript(V).catch(()=>{}),m(null))}).catch(()=>l())},i=()=>{l()},c=r=>{var h;const y=o.split("/embed/")[0];r.url.startsWith(y)||(r.preventDefault(),(h=window.electron)==null||h.openExternal(r.url))},p=setInterval(()=>{t.executeJavaScript("!!window.__trailerEnded").then(r=>{r&&(clearInterval(p),setTimeout(s,1200))}).catch(()=>{})},800);return t.addEventListener("did-finish-load",n),t.addEventListener("did-fail-load",i),t.addEventListener("will-navigate",c),()=>{clearInterval(p),t.removeEventListener("did-finish-load",n),t.removeEventListener("did-fail-load",i),t.removeEventListener("will-navigate",c)}},[o,l,s]),e.jsxDEV("div",{className:"trailer-overlay",onClick:s,children:e.jsxDEV("div",{className:"trailer-modal",onClick:t=>t.stopPropagation(),children:[e.jsxDEV("div",{className:"trailer-modal-header",children:[e.jsxDEV("span",{className:"trailer-modal-title",children:["🎬 ",w," — Official Trailer"]},void 0,!0,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:165,columnNumber:11},this),e.jsxDEV("div",{style:{display:"flex",alignItems:"center",gap:8},children:[e.jsxDEV("button",{onClick:j,title:"Open in browser",className:"trailer-openbrowser-btn",children:[e.jsxDEV(T,{size:13},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:174,columnNumber:15},this),"Open in Browser"]},void 0,!0,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:169,columnNumber:13},this),e.jsxDEV("button",{className:"trailer-close-btn",onClick:s,title:"Close",children:e.jsxDEV(g,{},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:182,columnNumber:15},this)},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:177,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:168,columnNumber:11},this)]},void 0,!0,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:164,columnNumber:9},this),e.jsxDEV("div",{className:"trailer-embed-wrap",style:{background:"#000",position:"relative"},children:[(d||b)&&e.jsxDEV("div",{style:{position:"absolute",inset:0,zIndex:2,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",background:"#000",color:b?"#ff3860":"rgba(255,255,255,0.6)",fontSize:14,textAlign:"center",padding:"0 32px",gap:10},children:b?e.jsxDEV(e.Fragment,{children:[e.jsxDEV("span",{style:{fontSize:28},children:"⚠"},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:210,columnNumber:19},this),e.jsxDEV("span",{children:d},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:211,columnNumber:19},this)]},void 0,!0,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:209,columnNumber:17},this):e.jsxDEV(e.Fragment,{children:[e.jsxDEV("span",{style:{opacity:.5},children:"⏳"},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:215,columnNumber:19},this),e.jsxDEV("span",{children:d},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:216,columnNumber:19},this)]},void 0,!0,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:214,columnNumber:17},this)},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:191,columnNumber:13},this),o&&e.jsxDEV("webview",{ref:f,src:o,partition:"persist:trailer",allowpopups:"false",style:{position:"absolute",inset:0,width:"100%",height:"100%",border:"none",opacity:d?0:1,transition:"opacity 0.2s"}},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:223,columnNumber:13},this)]},void 0,!0,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:186,columnNumber:9},this)]},void 0,!0,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:163,columnNumber:7},this)},void 0,!1,{fileName:"/app/applet/web/src/components/TrailerModal.jsx",lineNumber:162,columnNumber:5},this)}export{M as D,I as T};

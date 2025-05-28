import{a as p,b as v,h as C}from"./chunk-AKX37LLV.mjs";import{Z as d,aa as E,m as u,q as g,r as b,u as n}from"./chunk-5QW2JDGB.mjs";import{c as f}from"./chunk-A3IIQ6X3.mjs";function H({type:e,url:t,html:o,style:r={}}){return e==="url"&&t?n(R,{url:t,style:r}):e==="html"&&o?n(U,{html:o,style:r}):n(O,{style:r})}E(H,{type:{type:d.Enum,defaultValue:"url",displaySegmentedControl:!0,options:["url","html"],optionTitles:["URL","HTML"]},url:{title:"URL",type:d.String,description:"Some websites don\u2019t support embedding.",hidden(e){return e.type!=="url"}},html:{title:"HTML",type:d.String,displayTextArea:!0,hidden(e){return e.type!=="html"}}});function O({style:e}){return n("div",{style:{minHeight:L(e),...v,overflow:"hidden",...e},children:n("div",{style:w,children:"To embed a website or widget, add it to the properties\xA0panel."})})}function R({url:e,style:t}){let o=!t.height;/[a-z]+:\/\//.test(e)||(e="https://"+e);let r=C(),[i,c]=b(r?void 0:!1);if(u(()=>{if(!r)return;let l=!0;c(void 0);async function V(){let a=await fetch("https://api.framer.com/functions/check-iframe-url?url="+encodeURIComponent(e));if(a.status==200){let{isBlocked:s}=await a.json();l&&c(s)}else{let s=await a.text();console.error(s);let m=new Error("This site can\u2019t be reached.");c(m)}}return V().catch(a=>{console.error(a),c(a)}),()=>{l=!1}},[e]),r&&o)return n(h,{message:"URL embeds do not support auto height.",style:t});if(!e.startsWith("https://"))return n(h,{message:"Unsupported protocol.",style:t});if(i===void 0)return n(j,{});if(i instanceof Error)return n(h,{message:i.message,style:t});if(i===!0){let l=`Can\u2019t embed ${e} due to its content security policy.`;return n(h,{message:l,style:t})}return n("iframe",{src:e,style:{...I,...t},loading:"lazy",fetchPriority:r?"low":"auto",referrerPolicy:"no-referrer",sandbox:k(r)})}var I={width:"100%",height:"100%",border:"none"};function k(e){let t=["allow-same-origin","allow-scripts"];return e||t.push("allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation"),t.join(" ")}function U({html:e,...t}){if(e.includes("<\/script>")){let r=e.includes("</spline-viewer>"),i=e.includes("<!-- framer-direct-embed -->");return r||i?n(P,{html:e,...t}):n(z,{html:e,...t})}return n(W,{html:e,...t})}function z({html:e,style:t}){let o=g(),[r,i]=b(0);u(()=>{var a;let s=(a=o.current)===null||a===void 0?void 0:a.contentWindow;function m(S){if(S.source!==s)return;let y=S.data;if(typeof y!="object"||y===null)return;let x=y.embedHeight;typeof x=="number"&&i(x)}return f.addEventListener("message",m),s?.postMessage("getEmbedHeight","*"),()=>{f.removeEventListener("message",m)}},[]);let c=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,l={...I,...t};return!t.height&&(l.height=r+"px"),n("iframe",{ref:o,style:l,srcDoc:c})}function P({html:e,style:t}){let o=g();return u(()=>{let r=o.current;if(r)return r.innerHTML=e,T(r),()=>{r.innerHTML=""}},[e]),n("div",{ref:o,style:{...M,...t}})}function W({html:e,style:t}){return n("div",{style:{...M,...t},dangerouslySetInnerHTML:{__html:e}})}var M={width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"};function T(e){if(e instanceof Element&&e.tagName==="SCRIPT"){let t=document.createElement("script");t.text=e.innerHTML;for(let{name:o,value:r}of e.attributes)t.setAttribute(o,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)T(t)}function j(){return n("div",{className:"framerInternalUI-componentPlaceholder",style:{...p,overflow:"hidden"},children:n("div",{style:w,children:"Loading\u2026"})})}function h({message:e,style:t}){return n("div",{className:"framerInternalUI-errorPlaceholder",style:{minHeight:L(t),...p,overflow:"hidden",...t},children:n("div",{style:w,children:e})})}var w={textAlign:"center",minWidth:140};function L(e){if(!e.height)return 200}export{H as a};
//# sourceMappingURL=chunk-MIJ3PFEH.mjs.map

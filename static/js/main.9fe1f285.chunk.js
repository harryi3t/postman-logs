(this["webpackJsonppostman-logs"]=this["webpackJsonppostman-logs"]||[]).push([[0],{16:function(e,t,a){e.exports=a(24)},21:function(e,t,a){},22:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),s=a.n(c),l=(a(21),a(2)),i=(a(22),a(26)),o=a(6),m=a(13);var u=function(e){var t=(e.timestamp instanceof Date?e.timestamp:new Date(e.timestamp)).toUTCString().match(", (.*) GMT"),a=t?t[1]:"unknown";return r.a.createElement("div",{className:"postman-log"},r.a.createElement("div",{className:"pId"},e.pId),r.a.createElement("div",{className:"timestamp"},a),r.a.createElement("div",{className:"process"},e.process),r.a.createElement("div",{className:"level"},e.level),r.a.createElement("div",{className:"message"},e.message))};var p=function(){return r.a.createElement("div",{className:"table-header"},r.a.createElement("div",{className:"pId"},"Process ID"),r.a.createElement("div",{className:"timestamp"},"Time"),r.a.createElement("div",{className:"process"},"Process"),r.a.createElement("div",{className:"level"},"Level"),r.a.createElement("div",{className:"message"},"Message"))};function v(e){var t=e.match(/\[([^\]]+)\]\[([^\]]+)\]\[([^\]]+)\]\[([^\]]+)\]\[(.+)\]/);if(t)return{pId:t[1],timestamp:new Date(parseInt(t[2],10)),process:t[3],level:t[4],message:t[5]}}var d=function(e){var t=e.files.reduce((function(e,t){var a=t.content.trim().split("\n");return e.push.apply(e,Object(m.a)(a)),e}),[]).map(v).sort((function(e,t){return e.timestamp-t.timestamp})),a=Object(n.useState)(""),c=Object(l.a)(a,2),s=c[0],i=c[1],o=Object(n.useCallback)((function(e){i(e.target.value)}),[]),d=Object(n.useState)(!1),f=Object(l.a)(d,2),E=f[0],g=f[1],h=Object(n.useCallback)((function(){g(!E)})),b=["regex"];return E&&b.push("active"),s&&(t=function(e,t,a){var n=a.regexFilterActive;if(!t)return e;if(n)try{var r=new RegExp(t);return e.filter((function(e){return e.message.match(r)}))}catch(c){return e}return e.filter((function(e){return e.message.includes(t)}))}(t,s,{regexFilterActive:E})),r.a.createElement("div",{className:"postman-log-preview"},r.a.createElement("div",{className:"log-header"},r.a.createElement("div",{className:"filter-group"},r.a.createElement("span",{className:b.join(" "),onClick:h},".*"),r.a.createElement("input",{className:"filter-input",value:s,placeholder:"Search",onChange:o}))),r.a.createElement("div",{className:"log-body"},r.a.createElement(p,null),r.a.createElement("div",{className:"table-body"},t.map((function(e,t){return r.a.createElement(u,{key:t,pId:e.pId,process:e.process,timestamp:e.timestamp,level:e.level,message:e.message})})))))},f=a(27),E={height:"100vh",width:"100vw",display:"flex",fontSize:"30px"},g={margin:"auto"},h=function(e){var t=e.onDrop,a=Object(f.a)({accept:[o.a.FILE],drop:function(a,n){t&&t(e,n)},collect:function(e){return{isOver:e.isOver(),canDrop:e.canDrop()}}}),n=Object(l.a)(a,2),c=n[0],s=c.canDrop,i=c.isOver,m=n[1],u=s&&i,p=Object.assign({},E,{position:u?"static":"absolute"});return r.a.createElement("div",{ref:m,style:p},r.a.createElement("span",{style:g},u?"Release to drop":"",r.a.createElement("br",null)))};var b=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],c=t[1],s=Object(n.useCallback)((function(e,t){t.getItem().files.forEach((function(e){var t=e.name,n=new FileReader;n.onload=function(e){var n=e.target.result;c(a.concat({fileName:t,content:n}))},n.readAsText(e)}))}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Postman Logs"),r.a.createElement(i.a,{backend:o.b},r.a.createElement(h,{onDrop:s}),r.a.createElement(d,{files:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[16,1,2]]]);
//# sourceMappingURL=main.9fe1f285.chunk.js.map
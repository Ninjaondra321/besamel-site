import{c as p,o as y,a as b,t as f}from"./index-033fa28f.js";const g=f('<div class="sections"><div class="cookies-section"><div class="content"><h1>Cookies</h1><br><div class="cookies-checkbox"><div class="flex " style=" display: flex "><input type="checkbox" id="cookies-checkbox-technicke" checked disabled><label for="cookies-checkbox-technicke"><h2>Technické</h2></label></div><p>Pomocí těchto cookies můžeme sledovat např. návštěvnost webu, délku prohlížení a další statistické informace. Díky nim Vám můžeme poskytovat ještě lepší weby. Můžou obsahovat i cookies třetích stran.</p></div><div class="cookies-checkbox"><div class="flex " style=" display: flex "><input type="checkbox" id="cookies-checkbox-analytické"><label for="cookies-checkbox-analytické"><h2>Analytické</h2></label></div><p>Tento typ cookies nám pomáhá zlepšovat naše webové stránky a služby. Pomáhají nám pochopit, jak naše webové stránky a služby jsou používány a pomáhají nám zlepšovat jejich funkčnost a uživatelské zkušenosti.</p></div><div class="cookies-checkbox"><div class="flex " style=" display: flex "><input type="checkbox" id="cookies-checkbox-marketingove" disabled><label for="cookies-checkbox-marketingove"><h2> Marketingové </h2></label></div><p>Marketingové cookies nepoužíváme </p></div></div></div></div>',42);function u(){const[i,c]=p(!1);function s(){try{localStorage.getItem("COOKIES-NOTIME");let e=JSON.parse(localStorage.getItem("COOKIES-NOTIME"));console.log(e),console.log(e.analytical),c(e.analytical)}catch(e){console.log(e),c(!1),localStorage.setItem("COOKIES-NOTIME",JSON.stringify({analytical:!1}))}}function n(e,l){let o;try{o=JSON.parse(localStorage.getItem("COOKIES-NOTIME"))}catch(t){console.log(t),o={analytical:!1}}o[e]=l,localStorage.setItem("COOKIES-NOTIME",JSON.stringify(o))}return y(()=>{s()}),(()=>{const e=g.cloneNode(!0),l=e.firstChild,o=l.firstChild,t=o.firstChild,k=t.nextSibling,d=k.nextSibling,h=d.nextSibling,r=h.firstChild,a=r.firstChild;return a.addEventListener("change",v=>n("analytical",v.target.checked)),b(()=>a.checked=i()),e})()}export{u as default};

const T=[
["Fashion","👕","10:00 - 22:00","Ready-to-wear clothing and accessories.",["Uniqlo","H&M","Zara","Mango","Cotton On"]],
["Cafe","☕","07:00 - 22:00","Coffee, tea, and light bites with free wifi.",["Starbucks","Kopi Kenangan","Excelso"]],
["Electronics","📱","10:00 - 21:30","Phones, laptops, and accessories.",["iBox","Erafone","Digimap"]],
["Books","📚","10:00 - 21:30","Books, magazines, and stationery.",["Gramedia","Kinokuniya"]],
["Watches","⌚","10:00 - 22:00","Watches, wallets, and leather goods.",["Fossil"]],
["Gifts","🎁","10:00 - 22:00","Cards, wrapping, and gift sets.",["Hallmark","Miniso"]],
["Dining","🍽️","10:00 - 22:00","Dine-in restaurant with family seating.",["Pizza Hut","Sushi Tei","Solaria","HokBen","Marugame Udon"]],
["Footwear","👟","10:00 - 22:00","Sneakers, sportswear, and footwear.",["Nike","Adidas","Converse"]],
["Baby","🍼","10:00 - 21:30","Baby clothing, gear, and maternity.",["Mothercare","Baby Kiddo"]],
["Arcade","🎮","10:00 - 22:00","Arcade games and family fun.",["Timezone","Amazone"]],
["Beauty","✨","10:00 - 22:00","Beauty and skincare brands.",["Sociolla","The Body Shop","Sephora"]],
["Home","🏠","10:00 - 21:30","Furniture and home decor.",["Informa","IKEA"]],
["Music","🎵","10:00 - 21:30","Instruments, vinyl, and audio.",["JB Music","Yamaha Music"]],
["Photo","📷","10:00 - 21:00","Cameras and photo printing.",["Fujifilm","Canon Image Square"]],
["Fitness","🏋️","06:00 - 22:00","Gym, classes, and sports gear.",["Celebrity Fitness","Decathlon"]],
["Eyewear","👓","10:00 - 21:30","Glasses, sunglasses, and eye exams.",["Optik Melawai","Optik Seis"]],
["Hobby","🎨","10:00 - 21:00","Art supplies and creative classes.",["Art Studio","Kawan Lama Hobby"]],
["Salon","💇","10:00 - 21:00","Hair salon and treatments.",["Kerasys","Johnny Andrean"]],
["Dept. Store","🛍️","10:00 - 22:00","Fashion, cosmetics, and household goods.",["Matahari","SOGO"]],
["Pet","🐾","10:00 - 21:00","Pet food, supplies, and grooming.",["Pet Kingdom","Pawshop"]],
["Travel","✈️","10:00 - 20:00","Flight, hotel, and tour bookings.",["Traveloka Store","Panorama Tours"]],
["Cinema","🍿","10:00 - 23:00","Movies with concessions and lounge seats.",["CGV Cinemas"]],
["Dessert","🍦","10:00 - 22:00","Ice cream and frozen treats.",["Baskin Robbins","Haagen-Dazs"]],
["Bakery","🥐","08:00 - 21:00","Fresh bread, pastries, and cakes.",["BreadTalk","Holland Bakery"]],
["Pharmacy","💊","09:00 - 21:00","Medicine and health products.",["Guardian","Century Healthcare"]],
["Jewelry","💎","10:00 - 22:00","Fine jewelry and gold.",["Frank & Co","Mondial"]],
["Toys","🧩","10:00 - 21:30","Toys and games for all ages.",["Toys Kingdom","Lego Store"]],
["Bar","🍷","16:00 - 23:00","Wine, craft beer, and small plates.",["The Wine Cellar","Beer Garden"]],
["Services","💼","09:00 - 17:00","Banking, remittance, and errands.",["BCA ATM Center","Western Union"]],
["Supermarket","🛒","09:00 - 22:00","Groceries and household essentials.",["Ranch Market","Farmers Market"]],
["Computers","💻","10:00 - 21:30","Laptops, components, accessories.",["Gigatech","JD.ID Store"]],
["Audio","🎧","10:00 - 21:30","Headphones and speakers.",["JBL Store","Bose"]],
["Auto","🚗","10:00 - 21:00","Car accessories and parts.",["AutoFashion"]],
["Cycling","🚲","10:00 - 21:00","Bicycles, parts, and riding gear.",["Polygon Bike"]],
["Florist","💐","09:00 - 21:00","Fresh flowers and arrangements.",["Florist Boutique","Bunga Indah"]],
["Clinic","🩺","09:00 - 18:00","Skin and wellness clinic.",["Erha Clinic","ZAP Clinic"]],
["Appliances","📺","10:00 - 21:30","TVs, kitchen and home electronics.",["Electronic City","Best Denki"]]];
const FL=["GF","1F","2F","3F","4F"],PAL=["#1f2937","#9a3b3b","#2f6f5e","#8a5a2b","#4a5b8a","#6b4c8a","#2f6f8a","#8a6b2f","#5b6b2f","#8a2f5e"];
const S=[];T.forEach(([cat,icon,hours,desc,names])=>names.forEach(name=>S.push({name,cat,icon,hours,desc})));
S.forEach((s,i)=>{s.id=i;s.floor=FL[i%5];s.unit=s.floor+"-"+String(Math.floor(i/5)+1).padStart(2,"0");s.phone="021-555-"+(100+i)});
const hash=t=>{let h=0;for(const c of t)h=(h*31+c.charCodeAt(0))>>>0;return h};
const logo=(n,lg,img)=>img?`<div class="logo${lg?" lg":""}" style="background:#fff;border:1px solid var(--line);overflow:hidden"><img src="${img}" alt="" style="width:100%;height:100%;object-fit:contain"></div>`:`<div class="logo${lg?" lg":""}" style="background:${PAL[hash(n)%10]}">${n.split(/\s+/).slice(0,2).map(w=>w[0].toUpperCase()).join("")}</div>`;
const esc=t=>String(t).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
let query="",floor="All",sel=null;
const app=document.getElementById("app");
function baseRender(){
 if(sel){const s=sel;
  app.innerHTML=`<div class="wrap"><button class="back" id="b">← All stores</button><div class="det" data-f="${esc(s.floor)}"><div class="dh"><div class="fl">${esc(s.floor)}</div>${logo(s.name,1,s.logo)}<h2>${esc(s.name)}</h2><div class="cat">${s.icon} ${esc(s.cat)}</div></div><div class="db"><p>${esc(s.desc)}</p><div class="row"><span>Unit</span><b>${esc(s.unit)}</b></div><div class="row"><span>Hours</span><b>${esc(s.hours)}</b></div><div class="row"><span>Phone</span><a href="tel:${esc(s.phone)}">${esc(s.phone)}</a></div><div class="stack">${[...FL].reverse().map(f=>`<div data-f="${f}" class="${f==s.floor?"here":""}"><b>${f}</b>${f==s.floor?"<span>Find it on this floor</span>":""}</div>`).join("")}</div></div></div></div>`;
  document.getElementById("b").onclick=()=>{sel=null;render()};scrollTo(0,0);return}
 app.innerHTML=`<header class="hero"><div class="in"><div class="top"><div class="mark">🛍️</div><div><h1>Ciputra World</h1><div class="sub">Find any store, on any floor</div></div></div><input id="s" placeholder="Search stores or categories" value="${esc(query)}"><button class="ai" id="ai">✦ Not sure where to go? Ask the Mall Assistant</button></div></header><div class="wrap"><div class="chips">${["All",...FL].map(f=>`<button class="chip ${f==floor?"on":""}" data-f="${f}">${f=="All"?"All floors":f}</button>`).join("")}</div><div class="count" id="c"></div><div class="grid" id="g"></div></div>`;
 const s=document.getElementById("s");s.oninput=()=>{query=s.value;list()};
 document.getElementById("ai").onclick=openAI;
 app.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{floor=b.dataset.f;render()});list();
}
function list(){
 const q=query.toLowerCase(),r=S.filter(s=>(s.name.toLowerCase().includes(q)||s.cat.toLowerCase().includes(q))&&(floor=="All"||s.floor==floor));
 document.getElementById("c").textContent=r.length+(r.length==1?" store":" stores")+(floor!="All"?" on "+floor:"");
 const g=document.getElementById("g");g.innerHTML=r.map(s=>`<button class="card" data-i="${s.id}">${logo(s.name,0,s.logo)}<div class="ct"><div class="n">${esc(s.name)}</div><div class="m">${s.icon} ${esc(s.cat)} · ${esc(s.unit)}</div></div><span class="pill" data-f="${esc(s.floor)}">${esc(s.floor)}</span></button>`).join("")||'<div class="m">No stores match. Try another name or floor.</div>';
 g.querySelectorAll(".card").forEach(c=>c.onclick=()=>{sel=S.find(x=>x.id==c.dataset.i);render()});
}
// AI assistant (uses Claude via the page's sample capability)
const modal=document.getElementById("modal"),sb=document.getElementById("sb"),qi=document.getElementById("q");
const PROMPTS=["Gift for my mom's birthday","Quick lunch under 30 minutes","Rainy day activity for kids","New running shoes"];
function intro(){sb.innerHTML=`<p class="m" style="font-size:14px">Describe an occasion, mood, or product and I'll suggest stores.</p><div class="chips" style="justify-content:flex-start">${PROMPTS.map(p=>`<button class="chip">${p}</button>`).join("")}</div>`;
 sb.querySelectorAll(".chip").forEach(b=>b.onclick=()=>ask(b.textContent))}
function openAI(){modal.classList.add("open");intro()}
document.getElementById("close").onclick=()=>modal.classList.remove("open");
document.getElementById("go").onclick=()=>ask();qi.onkeydown=e=>e.key=="Enter"&&ask();
async function ask(t){
 const text=(t??qi.value).trim();if(!text)return;qi.value="";sb.innerHTML='<div class="m">Thinking through the directory...</div>';
 try{
  const sample=await claude.use("sample");if(!sample)throw 0;
  const dir=S.map(s=>`${s.name}|${s.cat}|${s.floor}`).join("\n");
  const r=await sample.json(`You are a mall concierge. From the directory (name|category|floor) pick 2-5 stores that best match the shopper's request. Reply ONLY JSON: {"message":"one short friendly sentence","picks":[{"name":"exact store name","reason":"one short sentence"}]}. Use exact names only; if nothing fits, return empty picks and say so.\n\nRequest: ${text}\n\nDirectory:\n${dir}`);
  const picks=(r.picks||[]).map(p=>({...p,s:S.find(x=>x.name==p.name)})).filter(p=>p.s);
  sb.innerHTML=`<b style="font-size:14px">${esc(r.message||"")}</b>`+picks.map((p,i)=>`<button class="pick" data-n="${esc(p.s.name)}">${logo(p.s.name,0,p.s.logo)}<div><div class="n">${esc(p.s.name)}</div><div class="m">${p.s.floor} · Unit ${p.s.unit}</div><div class="m" style="font-size:12px;margin-top:4px">${esc(p.reason||"")}</div></div></button>`).join("")+(picks.length?"":'<div class="m">Try rephrasing, or browse by category.</div>');
  sb.querySelectorAll(".pick").forEach(b=>b.onclick=()=>{sel=S.find(x=>x.name==b.dataset.n);modal.classList.remove("open");render()});
 }catch(e){sb.innerHTML='<div class="err">Couldn\'t get a recommendation right now. Try again.</div>'}
}
// ---- Editing (owner only): changes are saved by republishing the page with the data embedded ----
const state=JSON.parse(document.getElementById("state").textContent);try{const l=JSON.parse(localStorage.getItem("ciputra-state")||"null");if(l&&!Object.keys(state.edits||{}).length&&!(state.mall&&(state.mall.name||state.mall.logo)))Object.assign(state,l)}catch(e){}
state.mall??={};state.edits??={};
state.added??=[];state.deleted??=[];
const BASE=S.map(s=>({...s}));
function applyState(){S.length=0;BASE.forEach(b=>S.push({...b}));state.added.forEach(a=>S.push({...a}));Object.entries(state.edits).forEach(([i,e])=>{const s=S.find(x=>x.id==i);s&&Object.assign(s,e)});for(let i=S.length-1;i>=0;i--)if(state.deleted.includes(S[i].id))S.splice(i,1)}
applyState();
let canEdit=true,editing=false;
function readImage(f,cb){if(!f)return;const u=URL.createObjectURL(f),im=new Image();im.onload=()=>{const k=Math.min(1,256/Math.max(im.width,im.height)),c=document.createElement("canvas");c.width=Math.round(im.width*k);c.height=Math.round(im.height*k);c.getContext("2d").drawImage(im,0,0,c.width,c.height);URL.revokeObjectURL(u);cb(c.toDataURL("image/png"))};im.onerror=()=>alert("Couldn't read that image.");im.src=u}
function setF(s,k,v){s[k]=v;const e=(state.edits[s.id]??={});e[k]=v;if(k=="cat"){const t=T.find(t=>t[0].toLowerCase()==v.toLowerCase());if(t){s.icon=t[1];e.icon=t[1]}}}
function addStore(){const id=Math.max(999,...S.map(x=>x.id))+1;const s={id,name:"New store",cat:"Other",icon:"🏬",floor:"GF",unit:"",hours:"10:00 - 22:00",phone:"",desc:"",logo:""};state.added.push({...s});S.push(s);sel=s;render()}
function delStore(s){if(!confirm("Delete "+s.name+"?"))return;if(state.added.some(a=>a.id==s.id))state.added=state.added.filter(a=>a.id!=s.id);else state.deleted.push(s.id);delete state.edits[s.id];S.splice(S.indexOf(s),1);sel=null;render()}
async function exportData(){const data=JSON.stringify(state,null,1);try{const d=window.claude?await claude.use("downloads"):null;if(d){await d.save({filename:"ciputra-directory.json",data});return}}catch(e){}
 const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([data],{type:"application/json"}));a.download="ciputra-directory.json";a.click()}
function importData(f){if(!f)return;f.text().then(t=>{try{const d=JSON.parse(t);state.mall=d.mall||{};state.edits=d.edits||{};state.added=d.added||[];state.deleted=d.deleted||[];sel=null;applyState();render();alert("Backup loaded. Tap Save changes to keep it.")}catch(e){alert("That file isn't a valid backup.")}})}
const FIELDS=[["name","Store name"],["cat","Category"],["floor","Floor (GF, 1F...)"],["unit","Unit"],["hours","Opening hours"],["phone","Phone"],["desc","Description"]];
function decorate(){
 const mall=state.mall,h1=app.querySelector("h1"),mk=app.querySelector(".mark");
 if(h1){h1.textContent=mall.name||"Ciputra World";if(mall.logo){mk.style.background="#fff";mk.style.border="1px solid var(--line)";mk.innerHTML=`<img src="${mall.logo}" alt="" style="width:100%;height:100%;object-fit:contain;border-radius:18px">`}}
 if(!canEdit)return;
 app.insertAdjacentHTML("afterbegin",`<div class="tb">${editing?'<button class="btn" id="cx">Cancel</button><button class="btn pri" id="sv">Save changes</button>':'<button class="btn" id="ed">✎ Edit</button>'}</div>`);
 const $=id=>document.getElementById(id);
 if($("ed"))$("ed").onclick=()=>{editing=true;render()};
 if($("cx"))$("cx").onclick=()=>location.reload();
 if($("sv"))$("sv").onclick=save;
 if(!editing)return;
 if(!sel&&h1){
  app.querySelector(".top").insertAdjacentHTML("afterend",`<div class="panel"><h3>Mall branding</h3><div class="lrow"><label class="btn">Upload mall logo<input class="vh" type="file" accept="image/*" id="mf"></label>${mall.logo?'<button class="btn" id="mr">Remove</button>':""}</div><label class="fld">Mall name<input id="mn" value="${esc(mall.name||"Ciputra World")}"></label><div class="lrow"><button class="btn" id="add">+ Add store</button><button class="btn" id="ex">Export backup</button><label class="btn">Import backup<input class="vh" type="file" accept="application/json,.json" id="im"></label></div><div class="m" style="margin-top:8px">Tap any store below to edit its details and logo.</div></div>`);
  $("mf").onchange=e=>readImage(e.target.files[0],d=>{mall.logo=d;render()});
  if($("mr"))$("mr").onclick=()=>{delete mall.logo;render()};
  $("add").onclick=addStore;$("ex").onclick=exportData;$("im").onchange=e=>importData(e.target.files[0]);
  $("mn").oninput=e=>{mall.name=e.target.value;h1.textContent=mall.name||"Ciputra World"};
 }
 if(sel){
  const s=sel;
  app.querySelector(".det").insertAdjacentHTML("afterend",`<div class="panel"><h3>Edit this store</h3><div class="lrow"><label class="btn">Upload store logo<input class="vh" type="file" accept="image/*" id="sf"></label>${s.logo?'<button class="btn" id="sr">Remove logo</button>':""}<button class="btn" id="del">Delete store</button></div>${FIELDS.map(([k,l])=>`<label class="fld">${l}<input data-k="${k}" value="${esc(s[k]||"")}"></label>`).join("")}</div>`);
  $("sf").onchange=e=>readImage(e.target.files[0],d=>{setF(s,"logo",d);render()});
  $("del").onclick=()=>delStore(s);
  if($("sr"))$("sr").onclick=()=>{setF(s,"logo","");render()};
  app.querySelectorAll("[data-k]").forEach(i=>i.oninput=()=>setF(s,i.dataset.k,i.value));
 }
}
function render(){baseRender();decorate()}
async function save(){
 const b=document.getElementById("sv");b.textContent="Saving...";b.disabled=true;
 const local=()=>{try{localStorage.setItem("ciputra-state",JSON.stringify(state))}catch(e){}location.reload()};
 try{
  const a=window.claude?await claude.use("artifact"):null;if(!a)return local();
  const d=document.documentElement.cloneNode(true);
  d.querySelector("#app").innerHTML="";d.querySelector("#sb").innerHTML="";d.querySelector("#modal").className="modal";
  d.querySelector("#state").textContent=JSON.stringify(state).replace(/</g,"\\u003c");
  await a.publish("<!DOCTYPE html>\n"+d.outerHTML);
 }catch(e){local()}
}
render();

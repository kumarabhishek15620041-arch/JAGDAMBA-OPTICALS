const products=[
{name:"Classic Black",type:"Full Rim",cat:"Men",price:699,icon:"👓"},
{name:"Metal Aviator",type:"Round",cat:"Unisex",price:899,icon:"👓"},
{name:"Blue Square",type:"Rectangle",cat:"Men",price:799,icon:"👓"},
{name:"Elegant Cat Eye",type:"Cat Eye",cat:"Women",price:899,icon:"👓"},
{name:"Smart Half Rim",type:"Half Rim",cat:"Men",price:699,icon:"👓"},
{name:"Crystal Rimless",type:"Rimless",cat:"Unisex",price:999,icon:"👓"},
{name:"Kids Comfort",type:"Full Rim",cat:"Kids",price:599,icon:"👓"},
{name:"Premium Brown",type:"Full Rim",cat:"Women",price:1099,icon:"👓"}];

function render(list=products){document.getElementById("products").innerHTML=list.map(p=>`<article class="card"><div class="frame-img">${p.icon}</div><h3>${p.name}</h3><div class="tags">${p.cat} • ${p.type}</div><div class="price">₹${p.price}</div><div class="tags">Size: 52-18-140</div><button onclick="enquire('${p.name}')">View / Enquire</button></article>`).join("")}
function filterProducts(){let q=document.getElementById("search").value.toLowerCase(),c=document.getElementById("category").value,t=document.getElementById("type").value;render(products.filter(p=>(p.name.toLowerCase().includes(q)||p.type.toLowerCase().includes(q))&&(c==="all"||p.cat===c)&&(t==="all"||p.type===t)))}
function enquire(name){let msg=encodeURIComponent(`Hello Jagdamba Optical, I am interested in the ${name} frame. Please share availability and details.`);window.open(`https://wa.me/919650615846?text=${msg}`,"_blank")}
function sendWhatsApp(e){e.preventDefault();let n=document.getElementById("name").value,p=document.getElementById("phone").value,m=document.getElementById("message").value;let msg=encodeURIComponent(`Hello Jagdamba Optical,%0AName: ${n}%0APhone: ${p}%0ARequirement: ${m}`);window.open(`https://wa.me/919650615846?text=${msg}`,"_blank")}
function toggleMenu(){document.getElementById("nav").classList.toggle("show")}
render();
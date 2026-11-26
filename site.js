"use strict";
document.addEventListener("DOMContentLoaded",()=>{
 const menus=[...document.querySelectorAll(".nav-group")];
 menus.forEach(menu=>menu.addEventListener("toggle",()=>{if(menu.open)menus.filter(other=>other!==menu).forEach(other=>other.open=false)}));
 document.addEventListener("click",event=>{if(!event.target.closest(".nav-group"))menus.forEach(menu=>menu.open=false)});
 document.addEventListener("keydown",event=>{if(event.key==="Escape"){const open=menus.find(menu=>menu.open);if(open){open.open=false;open.querySelector("summary").focus()}}});
 const controls=document.querySelector("[data-filter-controls]"),list=document.querySelector("[data-filter-list]");
 if(!controls||!list)return;
 const search=controls.querySelector("input"),select=controls.querySelector("select"),count=document.querySelector("[data-filter-count]"),empty=document.querySelector("[data-empty]"),cards=[...list.querySelectorAll("[data-search]")];
 controls.hidden=false;
 const initial=new URLSearchParams(location.search);search.value=initial.get("q")||"";if([...select.options].some(option=>option.value===initial.get("circle")))select.value=initial.get("circle");
 function apply(){const terms=search.value.toLowerCase().trim().split(/\s+/).filter(Boolean);let visible=0;for(const card of cards){const match=(!select.value||card.dataset.circle===select.value)&&terms.every(term=>card.dataset.search.includes(term));card.hidden=!match;if(match)visible++}count.textContent=visible+" of "+cards.length+" results";empty.hidden=visible!==0;}
 search.addEventListener("input",apply);select.addEventListener("change",apply);controls.querySelector("[data-clear]").addEventListener("click",()=>{search.value="";select.value="";apply();search.focus()});apply();
});

import{a as u,S as p,i as n}from"./assets/vendor-BNibzuFn.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(e){if(e.ep)return;e.ep=!0;const a=t(e);fetch(e.href,a)}})();const m="52952317-f5e88216fd9e8d5aa3001977e",f="https://pixabay.com/api/";function g(s){const r={key:m,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return u.get(f,{params:r}).then(t=>t.data).catch(t=>{throw console.error("Error fetching images",t),t})}const c=document.querySelector(".gallery"),d=document.querySelector("#loader"),h=new p(".gallery a",{captionsData:"alt",captionDelay:250});function y({webformatURL:s,largeImageURL:r,tags:t,likes:i,views:e,comments:a,downloads:o}){return`
    <li class= "gallery-item">
        <a class= "gallery-link" href= "${r}">
            <img class= "gallery-image"
                src= "${s}"
                alt= "${t}"
                title= "${t}"
            />
        </a>
        <div class= "image-details">
            <div class= "details-item">
                <span class= "detail-label">Likes</span>
                <span class= "detail-value">${i}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Views</span>
                <span class= "detail-value">${e}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Comments</span>
                <span class= "detail-value">${a}</span>
            </div>
            <div class= "details-item">
                <span class= "detail-label">Downloads</span>
                <span class= "detail-value">${o}</span>
            </div>
        </div>
    </li> `}function v(s){if(!s||s.length===0)return;const r=s.map(y).join("");c.insertAdjacentHTML("beforeend",r),h.refresh()}function L(){c.innerHTML=""}function b(){d.classList.remove("is-hidden")}function S(){d.classList.add("is-hidden")}const l=document.querySelector(".form"),q=l.querySelector('input[name="search-text"]');async function $(s){s.preventDefault();const r=q.value.trim();if(r===""){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}L(),b();try{const i=(await g(r)).hits;i.length===0?n({title:"No result",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040"}):v(i)}catch(t){n.error({title:"HTTP Error",message:`Failed to fetch images: ${t.message}`,position:"topRight"}),console.error("Error fetching images:",t)}finally{S(),l.reset()}}l.addEventListener("submit",$);
//# sourceMappingURL=index.js.map

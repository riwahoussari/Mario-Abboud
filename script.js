const burgerMenuIcon = document.querySelector('header nav button img')
const navUl = document.querySelector('header nav ul')

burgerMenuIcon.addEventListener('click', () => {
    if([...navUl.classList].includes('dropped')){
        navUl.classList.remove('dropped')
    }else{
        navUl.classList.add('dropped')
    }
})

document.addEventListener('click', e => {
    if(e.target != navUl && e.target != burgerMenuIcon && [...navUl.classList].includes('dropped')){

        navUl.classList.remove('dropped')
    }
    
})


// JavaScript to handle touch events and simulate hover
const hoverables = document.querySelectorAll('.hoverable');

hoverables.forEach(item => {
    item.addEventListener('touchstart', function () {
        item.classList.add('hovering');
    });

    item.addEventListener('touchend', function () {
        setInterval(() => {
            item.classList.remove('hovering');
        }, 1);
    });
    
    item.addEventListener('touchcancel', function () {
        setInterval(() => {
            item.classList.remove('hovering');
        }, 1);
    });

    item.addEventListener('mouseover', function () {
        item.classList.add('hovering');
    });

    item.addEventListener('mouseenter', function () {
        item.classList.add('hovering');
    });

    item.addEventListener('mouseleave', function () {
        item.classList.remove('hovering');
    });

});


//EAANsG1BpdpABO2ukAeEB8WS5x7ann8aGw0VbcYgoPyTHKHDmTs7RrGHCxeHQWdjMzAQJyQm5UGgzEhBZB8wonjKb9Vq0A7XOlQUezE9hKZA5OyG2fBeSyLMeSGYBDRAQYnBZCHA2tFrNZAJIpQZAggKixSFLEYIisZA7EdQBcCCEFevVZAsZBMHD6SulUamhsdZAl

//Appointlet code
// Version: 3.0.7 - January 11, 2022 00:53:44
!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).Appointlet=t()}(this,(function(){"use strict";var e=new class{constructor(e=window){this.addListener=e=>(this.listeners.push(e),e),this.removeListener=e=>{this.listeners=this.listeners.filter(t=>t!==e)},this.listen=()=>{this.window.addEventListener("message",this.receive,!1)},this.unlisten=()=>{this.window.removeEventListener("message",this.receive)},this.receive=e=>{const t=this.listeners.find(t=>t.iFrame.contentWindow===e.source);if("string"!=typeof e.data||"appointlet:"!==e.data.substr(0,11)||!t)return;const n=JSON.parse(e.data.substr(11));t.callback(n)},this.window=e,this.listeners=[],this.listen()}};const t="data-appointlet-inline",n="data-appointlet-modal",i="data-appointlet-registered";return(()=>{let e=!1;const o=()=>{if(e=!0,!window.Appointlet)throw new Error("[@appointlet/appointlet.js]:\n\nThe script did not load or is not present on the page.");document.querySelectorAll(`[${t}], [${n}]`).forEach(e=>{if(!e.hasAttribute(i)){if(e.hasAttribute(t)){const n=e.getAttribute(t);if(!n)throw new Error(`[@appointlet/appointlet.js]:\n\nAttribute "${t}" has no booking link as value.\n\n`);new window.Appointlet(n).inlineEmbed(e),e.setAttribute(i,"")}if(e.hasAttribute(n)){const t=e.getAttribute("href");if(!t)throw new Error(`[@appointlet/appointlet.js]:\n\nAttribute "href" not found.\n\n${e.outerHTML}\n`);const n=new window.Appointlet(t);e.addEventListener("click",e=>{e.preventDefault(),n.openModal()}),e.setAttribute(i,"")}}})};document.addEventListener("DOMContentLoaded",()=>!1===e&&o()),window.addEventListener("load",()=>!1===e&&o())})(),class{constructor(t){this.schedulingPageURL=t,this.__TIMEOUT__=3e4,this.listenForLoadedOrTimeOut=async t=>new Promise((n,i)=>{const o=e.addListener({iFrame:t,callback:t=>{"scheduler:loaded"===t.type&&(n(),e.removeListener(o))}});setTimeout(i,this.__TIMEOUT__)}),this.listenForCompletionOrAbandon=async t=>new Promise(n=>{const i=e.addListener({iFrame:t,callback:t=>{if("booking:created"===t.type&&(n(t.data),e.removeListener(i)),"scheduler:close"===t.type){n(null);const t=document.body;e.removeListener(i),t.classList.remove("modal-open")}}})}),this.url=t}async inlineEmbed(e){const t=document.createElement("iframe");t.setAttribute("src",this.getURLWithModeAndVersion("inline")),t.classList.add("appointlet-iframe","appointlet-inline"),e.appendChild(t);try{await this.listenForLoadedOrTimeOut(t)}catch(e){throw t.remove(),new Error("[@appointlet/appointlet.js]:\n\nFailed to load scheduler")}const n=await this.listenForCompletionOrAbandon(t);return n&&n.redirectUrl&&window.location.assign(n.redirectUrl),n}async openModal(){const e=document.createElement("div"),t=document.body;e.classList.add("appointlet-popover-backdrop"),t.appendChild(e);const n=document.createElement("div");n.classList.add("appointlet-loader"),e.appendChild(n),t.classList.add("modal-open");const i=document.createElement("iframe");i.setAttribute("src",this.getURLWithModeAndVersion("modal")),i.classList.add("appointlet-iframe","appointlet-popover"),t.appendChild(i);try{await this.listenForLoadedOrTimeOut(i)}catch(t){throw i.remove(),n.remove(),e.remove(),new Error("[@appointlet/appointlet.js]:\n\nFailed to load scheduler")}i.style.display="block";let o=!0,s=null;for(;o;){let e=await this.listenForCompletionOrAbandon(i);null===e?o=!1:s=e,s&&s.redirectUrl&&window.location.assign(s.redirectUrl)}return i.remove(),n.remove(),e.remove(),s}getURLWithModeAndVersion(e){return`${this.url}${this.url.indexOf("?")>-1?"&":"?"}mode=${e}&v=3.0.7`}}}));
//# sourceMappingURL=appointlet.umd.min.js.map
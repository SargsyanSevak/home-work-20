"use strict";

function capitalizeFirstLetter(str) {
    let words = str.trim().split(" ");
    words.forEach(function(el, i) {
        words[i] = el[0].toUpperCase() + el.slice(1);
    })
    return words.join(" ");
}
console.log(capitalizeFirstLetter("Ես իմ անուշ Հայաստանի արևահամ բարն եմ սիրում, Մեր հին սազի ողբանվագ, լացակումած լարն եմ սիրում,"));
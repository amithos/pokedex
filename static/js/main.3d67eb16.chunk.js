(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),s=c(7),a=c.n(s),r=(c(13),c(3)),i=(c(14),c(15),c(0)),l=function(e){e.selectedPokemonId;return Object(i.jsx)("section",{className:"selected-pokemon",children:Object(i.jsx)("article",{className:"selected-pokemon__card"})})},m=c(8),j=c(5),u=function(e){return t="".concat("pokemon/").concat(e),fetch("".concat("https://pokeapi.co/api/v2/").concat(t),c).then((function(e){return e.ok?e.json():Promise.reject(e.statusText)}));var t,c},p=(c(17),function(e){var t=e.imageSource,c=e.name,n=e.types;e.id;return Object(i.jsx)("article",{className:"pokemon-card",children:Object(i.jsxs)("div",{className:"pokemon-card__content",children:[Object(i.jsx)("img",{className:"pokemon-card__image",src:t,alt:c}),Object(i.jsx)("p",{className:"pokemon-card__name",children:c}),Object(i.jsx)("div",{className:"pokemon-card__types",children:n.map((function(e){return Object(i.jsx)("span",{className:"pokemon-card__type pokemon-card__type--".concat(e.type.name),children:e.type.name},e.type.name)}))})]})})}),d=(c(18),function(e){e.onSelectPokemon,e.onFilter;var t=Object(n.useState)([]),c=Object(r.a)(t,2),o=c[0],s=c[1],a=function(){for(var e=o.length+1,t=[],c=0;c<12;c++)t.push(u(e)),e++;Promise.all(t).then((function(e){var t=e.map((function(e){var t=e.name,c=e.id,n=e.types;return{imageSource:e.sprites.other["official-artwork"].front_default,name:t,types:n.sort((function(e,t){return e.slot-t.slot})),id:c}}));return s([].concat(Object(j.a)(o),Object(j.a)(t)))}))},l=Object(j.a)(o);return Object(n.useEffect)(a,[]),console.log(l),Object(i.jsx)("section",{className:"pokemon-list",children:Object(i.jsxs)("div",{className:"pokemon-list__content",children:[Object(i.jsx)("ul",{className:"pokemon-list__cards",children:l.map((function(e){return Object(i.jsx)("li",{className:"pokemon-list__item",children:Object(i.jsx)(p,Object(m.a)({},e))},e.id)}))}),Object(i.jsx)("button",{className:"pokemon-list__button",onClick:a,children:"Load More"})]})})}),b=function(){var e=Object(n.useState)(0),t=Object(r.a)(e,2),c=t[0],o=t[1],s=Object(n.useState)(null),a=Object(r.a)(s,2),m=a[0];a[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(d,{onSelectPokemon:function(e){return o(e)},onFilter:m}),c?Object(i.jsx)(l,{selectedPokemonId:c}):Object(i.jsx)("p",{children:"Please, choose some pokemon"})]})};a.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(b,{})}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.3d67eb16.chunk.js.map
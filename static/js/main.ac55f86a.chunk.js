(this["webpackJsonpreact_movies-list-fetch-movies"]=this["webpackJsonpreact_movies-list-fetch-movies"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){},18:function(e,t,c){},21:function(e,t,c){},22:function(e,t,c){"use strict";c.r(t);var i=c(7),s=c.n(i),a=(c(15),c(10)),n=c(2),r=c(1),o=(c(16),c(17),c(18),c(0)),d=function(e){var t=e.movie;return Object(o.jsxs)("div",{className:"card","data-cy":"movieCard",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("figure",{className:"image is-4by3",children:Object(o.jsx)("img",{"data-cy":"moviePoster",src:t.imgUrl,alt:"Film logo"})})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsxs)("div",{className:"media",children:[Object(o.jsx)("div",{className:"media-left",children:Object(o.jsx)("figure",{className:"image is-48x48",children:Object(o.jsx)("img",{src:"images/imdb-logo.jpeg",alt:"imdb"})})}),Object(o.jsx)("div",{className:"media-content",children:Object(o.jsx)("p",{className:"title is-8","data-cy":"movieTitle",children:t.title})})]}),Object(o.jsxs)("div",{className:"content","data-cy":"movieDescription",children:[t.description,Object(o.jsx)("br",{}),Object(o.jsx)("a",{href:t.imdbUrl,"data-cy":"movieURL",children:"IMDB"})]})]})]})},l=function(e){var t=e.movies;return Object(o.jsx)("div",{className:"movies",children:t.map((function(e){return Object(o.jsx)(d,{movie:e},e.imdbId)}))})},j=c(8),m=c(6),b=c.n(m),u=(c(21),c(9)),v=c.n(u);function h(e){return fetch("".concat("https://www.omdbapi.com/?apikey=2c882664","&t=").concat(e)).then((function(e){return e.json()})).catch((function(){return{Response:"False",Error:"unexpected error"}}))}var O=function(e){var t=e.movies,c=e.onAdd,i=Object(r.useState)(""),s=Object(n.a)(i,2),a=s[0],l=s[1],m=Object(r.useState)(),u=Object(n.a)(m,2),O=u[0],x=u[1],p=Object(r.useState)(!1),f=Object(n.a)(p,2),N=f[0],g=f[1],y=Object(r.useState)(!1),w=Object(n.a)(y,2),I=w[0],S=w[1],F=function(){var e=Object(j.a)(b.a.mark((function e(t){var c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),g(!0),e.next=4,h(a);case 4:"Error"in(c=e.sent)?S(!0):(i={title:c.Title,description:c.Plot,imgUrl:"N/A"!==c.Poster?c.Poster:"https://via.placeholder.com/360x270.png?text=no%20preview",imdbUrl:"https://www.imdb.com/title/".concat(c.imdbID),imdbId:c.imdbID},x(i)),g(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){l(""),x(void 0)},C=t.map((function(e){return e.imdbId}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("form",{className:"find-movie",onSubmit:function(e){return F(e)},children:[Object(o.jsxs)("div",{className:"field",children:[Object(o.jsx)("label",{className:"label",htmlFor:"movie-title",children:"Movie title"}),Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("input",{"data-cy":"titleField",type:"text",id:"movie-title",placeholder:"Enter a title to search",className:"input is-dander",value:a,onChange:function(e){l(e.currentTarget.value),S(!1)}})}),I&&Object(o.jsx)("p",{className:"help is-danger","data-cy":"errorMessage",children:"Can't find a movie with such a title"})]}),Object(o.jsxs)("div",{className:"field is-grouped",children:[Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"searchButton",type:"submit",className:v()("button is-light",{"is-loading":N}),disabled:!a.trim(),children:I||O?"Search again":"Find a movie"})}),O&&Object(o.jsx)("div",{className:"control",children:Object(o.jsx)("button",{"data-cy":"addButton",type:"button",className:"button is-primary",onClick:function(){C.includes(O.imdbId)||c(O),k()},children:"Add to the list"})})]})]}),O&&Object(o.jsxs)("div",{className:"container","data-cy":"previewContainer",children:[Object(o.jsx)("h2",{className:"title",children:"Preview"}),Object(o.jsx)(d,{movie:O})]})]})},x=function(){var e=Object(r.useState)([]),t=Object(n.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)("div",{className:"page",children:[Object(o.jsx)("div",{className:"page-content",children:Object(o.jsx)(l,{movies:c})}),Object(o.jsx)("div",{className:"sidebar",children:Object(o.jsx)(O,{movies:c,onAdd:function(e){i((function(t){return[].concat(Object(a.a)(t),[e])}))}})})]})};s.a.render(Object(o.jsx)(x,{}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.ac55f86a.chunk.js.map
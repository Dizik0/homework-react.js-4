(this["webpackJsonphomework-react.js-4"]=this["webpackJsonphomework-react.js-4"]||[]).push([[2],{39:function(e){e.exports=JSON.parse('{"BASE_URL":"https://api.themoviedb.org/3/","API_KEY":"a073961347bd017bb0d5c7cd6f66c875"}')},70:function(e,t,a){e.exports={castList:"Cast_castList__t13TQ",autorImg:"Cast_autorImg__1m5fY",autorItem:"Cast_autorItem__3M19G",autorName:"Cast_autorName__2PNPs",noInformationText:"Cast_noInformationText__3spI6"}},71:function(e,t,a){e.exports={noReviews:"Reviews_noReviews__T5ubI",author:"Reviews_author__3Y02X",reviews:"Reviews_reviews__2mBdS"}},72:function(e,t,a){e.exports={boxDetail:"MovieDetailsPage_boxDetail__jRSlH",btnDetail:"MovieDetailsPage_btnDetail__1zyy8",titleDetail:"MovieDetailsPage_titleDetail__2I1JJ",navLinkDetail:"MovieDetailsPage_navLinkDetail__32UG-",navLinkList:"MovieDetailsPage_navLinkList__JsfLv",Additional:"MovieDetailsPage_Additional__1iA8n",textDetail:"MovieDetailsPage_textDetail__3S7sV",boxMovie:"MovieDetailsPage_boxMovie__1izV3",posterImg:"MovieDetailsPage_posterImg__2c-25",active:"MovieDetailsPage_active__qR4_E",boxImg:"MovieDetailsPage_boxImg__160wI"}},74:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return A}));var n=a(37),r=a.n(n);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var o=a(38),l=a(15),u=a(16),p=a(18),v=a(17),m=a(0),h=a(9),j=a(2),b=a(40),d=a.n(b),f=a(39),_=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.BASE_URL,n=f.API_KEY,e.abrupt("return",d.a.get("".concat(a,"/3/movie/").concat(t,"/credits?api_key=").concat(n,"&language=en-US")));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),O=a(70),x=a.n(O),g=a.p+"static/media/123588579.16383d75.jpg",w=a(1),D=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={cast:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,_(t);case 3:a=e.sent,this.setState({cast:a.data.cast});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state.cast;return e=0===t.length?Object(w.jsx)("li",{className:x.a.noInformationText,children:"No information on authors"}):t.map((function(e){var t=e.profile_path,a=e.id,n=e.name,r=e.character;return Object(w.jsxs)("li",{className:x.a.autorItem,children:[Object(w.jsx)("img",{src:t?"https://image.tmdb.org/t/p/w200/".concat(t):g,alt:"author",className:x.a.autorImg}),Object(w.jsx)("h3",{className:x.a.autorName,children:n}),r&&Object(w.jsx)("p",{className:x.a.autorName,children:r})]},a)})),Object(w.jsx)("ul",{className:x.a.castList,children:e})}}]),a}(m.Component),y=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.BASE_URL,n=f.API_KEY,e.abrupt("return",d.a.get("".concat(a,"/3/movie/").concat(t,"/reviews?api_key=").concat(n,"&language=en-US&page=1")));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=a(71),k=a.n(N),I=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={reviews:[]},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,e.next=3,y(t);case 3:a=e.sent,this.setState({reviews:a.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e,t=this.state.reviews;return e=0===t.length?Object(w.jsx)("p",{className:k.a.noReviews,children:"We don't have any reviews for this movie"}):t.map((function(e){var t=e.id,a=e.author,n=e.content;return Object(w.jsxs)("li",{children:[Object(w.jsxs)("h2",{className:k.a.author,children:["Autors: ",a]}),Object(w.jsx)("p",{className:k.a.reviews,children:n})]},t)})),Object(w.jsx)("ul",{children:e})}}]),a}(m.Component),P=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.BASE_URL,n=f.API_KEY,e.abrupt("return",d.a.get("".concat(a,"/3/movie/").concat(t,"?api_key=").concat(n)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=a(72),M=a.n(L),A=function(e){Object(p.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={title:null,poster_path:null,release_date:null,overview:null,genres:null,vote_average:null,location:null},e.BtnBack=function(){var t=e.props.history,a=e.state.location,n=a.state.from;a.state&&n?t.push(n):t.push("/")},e}return Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=Object(o.a)(r.a.mark((function e(){var t,a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match.params.movieId,a=this.props.location,e.next=4,P(t);case 4:n=e.sent,this.setState(c(c({},n.data),{},{location:a}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.title,a=e.poster_path,n=e.release_date,r=e.overview,s=e.genres,i=e.vote_average,c=this.props.match.params.movieId;return Object(w.jsxs)("div",{className:M.a.boxDetail,children:[Object(w.jsx)("button",{type:"button",onClick:this.BtnBack,className:M.a.btnDetail,children:"\u2190 Back"}),Object(w.jsxs)("div",{className:M.a.boxMovie,children:[Object(w.jsx)("div",{className:M.a.boxImg,children:a?Object(w.jsx)("img",{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:"poster",className:M.a.posterImg}):Object(w.jsx)("img",{src:g,alt:"not found",className:M.a.posterError})}),Object(w.jsxs)("div",{className:M.a.boxInformation,children:[n&&Object(w.jsxs)("h1",{className:M.a.titleDetail,children:[t," (",new Date(n).getFullYear(),")"]}),i&&Object(w.jsxs)("p",{className:M.a.textDetail,children:["User Score: ",i," "]}),Object(w.jsx)("h2",{className:M.a.titleDetail,children:"Overview"}),Object(w.jsx)("p",{className:M.a.textDetail,children:r}),Object(w.jsx)("h2",{className:M.a.titleDetail,children:"Genres"}),Object(w.jsx)("ul",{children:s&&0!==s.length?s.map((function(e){return Object(w.jsx)("li",{className:M.a.textDetail,children:e.name},e.id)})):Object(w.jsx)("li",{children:"No information"})})]})]}),Object(w.jsx)("h2",{className:M.a.Additional,children:"Additional information"}),Object(w.jsxs)("ul",{className:M.a.navLinkList,children:[Object(w.jsx)("li",{children:Object(w.jsx)(h.c,{to:{pathname:"/movies/".concat(c,"/Cast"),state:{from:this.props.location}},className:M.a.navLinkDetail,activeClassName:M.a.active,children:"Cast"})}),Object(w.jsx)("li",{children:Object(w.jsx)(h.c,{to:{pathname:"/movies/".concat(c,"/Reviews"),state:{from:this.props.location}},className:M.a.navLinkDetail,activeClassName:M.a.active,children:"Reviews"})})]}),Object(w.jsx)(j.b,{path:"/movies/:movieId/Cast",component:D}),Object(w.jsx)(j.b,{path:"/movies/:movieId/Reviews",component:I})]})}}]),a}(m.Component)}}]);
//# sourceMappingURL=MovieDetailsPage.1e056f6a.chunk.js.map
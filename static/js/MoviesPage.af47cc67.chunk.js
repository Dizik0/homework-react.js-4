(this["webpackJsonphomework-react.js-4"]=this["webpackJsonphomework-react.js-4"]||[]).push([[3],{39:function(e){e.exports=JSON.parse('{"BASE_URL":"https://api.themoviedb.org","API_KEY":"a073961347bd017bb0d5c7cd6f66c875"}')},69:function(e,t,a){e.exports={itemBoxFilter:"MoviesPage_itemBoxFilter__2fMwE",boxFilter:"MoviesPage_boxFilter__vfYAW",fromFilter:"MoviesPage_fromFilter__2rZnG",inputBoxFilter:"MoviesPage_inputBoxFilter__3TFPC",bntBoxFilter:"MoviesPage_bntBoxFilter__3u2bl",listFilter:"MoviesPage_listFilter__1-D_a",notMovie:"MoviesPage_notMovie__1esOJ"}},76:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return d}));var r=a(37),n=a.n(r),i=a(38),o=a(15),s=a(16),c=a(18),l=a(17),u=a(0),v=a(9),p=a(40),m=a.n(p),f=a(39),b=function(){var e=Object(i.a)(n.a.mark((function e(t){var a,r;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.BASE_URL,r=f.API_KEY,e.abrupt("return",m.a.get("".concat(a,"/3/search/movie/?api_key=").concat(r,"&query=").concat(t)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=a(69),x=a.n(h),_=a(1),d=function(e){Object(c.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(o.a)(this,a);for(var r=arguments.length,s=new Array(r),c=0;c<r;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={value:"",movies:[]},e.getMovies=Object(i.a)(n.a.mark((function t(){var a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.state.value.trim()){t.next=7;break}return t.next=3,b(e.state.value);case 3:a=t.sent,e.setState({movies:a.data.results}),localStorage.setItem("arr",JSON.stringify(e.state.movies)),localStorage.setItem("value",JSON.stringify(e.state.value));case 7:case"end":return t.stop()}}),t)}))),e.screachValueInput=function(t){t.preventDefault(),e.getMovies()},e.getValueInput=function(t){e.setState({value:t.currentTarget.value})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=JSON.parse(window.localStorage.getItem("arr")),t=JSON.parse(window.localStorage.getItem("value"));this.setState({movies:e,value:t})}},{key:"render",value:function(){var e,t=this,a=this.state,r=a.movies,n=a.value;return e=0!==r.length?r.map((function(e){return Object(_.jsx)("li",{className:x.a.itemBoxFilter,children:Object(_.jsx)(v.b,{to:{pathname:"movies/".concat(e.id),state:{from:t.props.location}},children:e.title})},e.id)})):Object(_.jsx)("p",{className:x.a.notMovie,children:"Movie not found"}),Object(_.jsxs)("div",{className:x.a.boxFilter,children:[Object(_.jsxs)("form",{onSubmit:this.screachValueInput,className:x.a.fromFilter,children:[Object(_.jsx)("input",{value:n,type:"text",onChange:this.getValueInput,className:x.a.inputBoxFilter,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435 \u0444\u0438\u043b\u044c\u043c\u0430"}),Object(_.jsx)("button",{type:"submit",className:x.a.bntBoxFilter,children:"\ud83d\udd0d"})]}),Object(_.jsx)("ul",{className:x.a.listFilter,children:e})]})}}]),a}(u.Component)}}]);
//# sourceMappingURL=MoviesPage.af47cc67.chunk.js.map
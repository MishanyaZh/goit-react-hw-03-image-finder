(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{13:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__3SYtS",imageGalleryItemImage:"ImageGalleryItem_imageGalleryItemImage__2gePp"}},25:function(e,t,a){e.exports={app:"App_app__Olz43"}},26:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__3Of5F"}},27:function(e,t,a){e.exports={button:"Button_button__2isXF"}},34:function(e,t,a){},4:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__2iBHo",searchForm:"Searchbar_searchForm__wiOeh",searchFormButton:"Searchbar_searchFormButton__31LFf",searchFormButtonLabel:"Searchbar_searchFormButtonLabel__1dbAh",searchFormInput:"Searchbar_searchFormInput__3Iufe"}},56:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(22),c=a.n(s),i=(a(34),a(3)),o=a.n(i),u=a(8),l=a(6),m=a(23),h=a(24),g=a(29),p=a(28),b=a(5),f=a(25),d=a.n(f),j=a(11),O=a.n(j);O.a.defaults.baseURL="https://pixabay.com/api/";var _=function(){var e=Object(l.a)(o.a.mark((function e(t,a){var r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("?q=".concat(t,"&page=").concat(a,"&key=").concat("22670626-c734a5ab3fb2edefe4011dc83","&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n.hits.map((function(e){return{id:e.id,webImg:e.webformatURL,largeImg:e.largeImageURL}})));case 5:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),x=a(4),v=a.n(x),y=a(1),S=function(e){var t=e.onSubmit;return Object(y.jsx)("header",{className:v.a.searchbar,children:Object(y.jsxs)("form",{onSubmit:function(e){e.preventDefault();var a=e.target.elements.imgValue.value;t(a),e.target.elements.imgValue.value=""},className:v.a.searchForm,children:[Object(y.jsx)("button",{type:"submit",className:v.a.searchFormButton,children:Object(y.jsx)("span",{className:v.a.searchFormButtonLabel,children:"Search"})}),Object(y.jsx)("input",{name:"imgValue",className:v.a.searchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})},I=a(12),k=a(13),F=a.n(k),w=function(e){var t=e.id,a=e.webImg;return Object(y.jsx)("li",{className:F.a.imageGalleryItem,children:Object(y.jsx)("img",{src:a,alt:t,className:F.a.imageGalleryItemImage})})},V=a(26),G=a.n(V),L=function(e){var t=e.images;return Object(y.jsx)("ul",{className:G.a.imageGallery,children:t.map((function(e){return Object(r.createElement)(w,Object(I.a)(Object(I.a)({},e),{},{key:e.id}))}))})},N=a(27),B=a.n(N),C=function(e){var t=e.onClickLoadMore;return Object(y.jsx)("button",{onClick:function(e){e.preventDefault(),t()},className:B.a.button,type:"button",children:"Load more"})},q=function(e){Object(g.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(m.a)(this,a);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=t.call.apply(t,[this].concat(n))).state={imgValue:null,images:[],reqStatus:"idle",page:1},e.handleFormSubmit=function(t){e.setState({imgValue:t})},e.loadMoreClick=function(t){e.setState({page:e.state.page+1}),console.log(e.state.page),console.log(e.state.page+1)},e}return Object(h.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(l.a)(o.a.mark((function e(t,a){var r,n=this;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.imgValue===this.state.imgValue&&a.page===this.state.page){e.next=22;break}if(""!==this.state.imgValue){e.next=4;break}return b.b.error("Pleas write something"),e.abrupt("return");case 4:return a.imgValue!==this.state.imgValue&&this.setState({images:[],page:1}),e.prev=6,e.next=9,_(this.state.imgValue,this.state.page);case 9:if(0!==(r=e.sent).length){e.next=13;break}return b.b.error("your images not faind."),e.abrupt("return");case 13:this.setState({reqStatus:"resolved"}),this.setState((function(e){return e.imgValue!==n.state.imgValue?{images:Object(u.a)(e.images),page:1}:{images:[].concat(Object(u.a)(e.images),Object(u.a)(r))}})),Object(b.b)("its your, ".concat(this.state.imgValue,"s!"),{icon:"\ud83d\udc4f"}),e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),this.setState({reqStatus:"rejected"}),b.b.error("This didn't work.");case 22:case"end":return e.stop()}}),e,this,[[6,18]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return Object(y.jsxs)("div",{className:d.a.app,children:[Object(y.jsx)(S,{onSubmit:this.handleFormSubmit}),Object(y.jsx)(L,{images:this.state.images}),"resolved"===this.state.reqStatus&&Object(y.jsx)(C,{onClickLoadMore:this.loadMoreClick}),Object(y.jsx)(b.a,{position:"top-right",reverseOrder:!1})]})}}]),a}(r.Component);c.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.71967804.chunk.js.map
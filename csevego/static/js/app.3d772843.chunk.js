(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{70:function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n(10),r=n.n(a),o=n(17),i=n.n(o),c=n(13),l=n.n(c),u=n(14),s=n.n(u),d=n(6),f=n.n(d),m=n(12),h=n.n(m),p=n(0),v=n.n(p),g=n(3),y=n(44),k=n(62),b=n(16),S=n(2),E=n(38),C=n(43);function x(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s()(this,n)}}var z=function(e){l()(n,e);var t=x(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).felvitel=function(){var e;return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:e={bevitel1:a.state.nev,bevitel2:a.state.komment,bevitel3:a.props.akttema_bevitel},fetch("https://s1.siralycore.hu:8083/uzenetfelvitel",{method:"POST",body:JSON.stringify(e),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.text()})).then((function(e){a.setState({nev:""}),a.setState({komment:""}),a.props.frissit()})).catch((function(e){console.error(e)}));case 2:case"end":return t.stop()}}),null,null,null,Promise)},a.state={nev:"",komment:""},a}return i()(n,[{key:"render",value:function(){var e=this;return v.a.createElement(S.a,{style:{padding:10,backgroundColor:"lightblue",alignItems:"center",margin:12,borderRadius:10}},v.a.createElement(b.a,{style:{padding:10,fontSize:20,color:"black"}},"N\xe9v"),v.a.createElement(C.a,{placeholderTextColor:"black",style:{height:45,backgroundColor:"#DCDCDC",borderRadius:10,padding:10},placeholder:"Add meg a nevedet!",onChangeText:function(t){return e.setState({nev:t})},value:this.state.nev}),v.a.createElement(b.a,{style:{padding:10,fontSize:20,color:"black",height:80,textAlignVertical:"top"}},"Komment:"),v.a.createElement(C.a,{placeholderTextColor:"black",style:{height:150,width:300,textAlignVertical:"top",backgroundColor:"#DCDCDC",borderRadius:10,padding:10},placeholder:"Add meg a kommented!",onChangeText:function(t){return e.setState({komment:t})},value:this.state.komment,multiline:!0}),v.a.createElement(E.a,{onPress:function(){return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.felvitel());case 1:case"end":return t.stop()}}),null,null,null,Promise)}},v.a.createElement(S.a,{style:{width:120,backgroundColor:"green",borderRadius:10,padding:5,marginTop:15}},v.a.createElement(b.a,{style:{textAlign:"center",fontSize:20}},"Felvitel"))))}}]),n}(p.Component);function R(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=f()(e);if(t){var r=f()(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return s()(this,n)}}var w=function(e){l()(n,e);var t=R(n);function n(e){var a;return r()(this,n),(a=t.call(this,e)).kivalaszt=function(e){var t;return h.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return a.setState({akttema:e}),t={bevitel1:e},n.abrupt("return",fetch("https://s1.siralycore.hu:8083/temauzenet",{method:"POST",body:JSON.stringify(t),headers:{"Content-type":"application/json; charset=UTF-8"}}).then((function(e){return e.json()})).then((function(e){a.setState({isLoading:!1,dataSource2:e},(function(){}))})).catch((function(e){console.error(e)})));case 3:case"end":return n.stop()}}),null,null,null,Promise)},a.state={isLoading:!0,akttema:1,dataSource:[],dataSource2:[]},setInterval((function(){a.kivalaszt(a.state.akttema)}),2e3),a}return i()(n,[{key:"componentDidMount",value:function(){var e=this;return fetch("https://s1.siralycore.hu:8083/tema").then((function(e){return e.json()})).then((function(t){e.setState({isLoading:!1,dataSource:t},(function(){})),e.setState({akttema:e.state.dataSource[0].tema_id}),e.kivalaszt(e.state.akttema)})).catch((function(e){console.error(e)}))}},{key:"render",value:function(){var e=this;return this.state.isLoading?v.a.createElement(S.a,{style:{flex:1,padding:20}},v.a.createElement(k.a,null)):v.a.createElement(S.a,{style:{flex:1,paddingTop:50,backgroundColor:"#00004d"}},v.a.createElement(S.a,null,v.a.createElement(y.a,{data:this.state.dataSource,renderItem:function(t){var n=t.item;return v.a.createElement(S.a,{style:{alignItems:"center",marginTop:10}},v.a.createElement(E.a,{style:{borderWidth:1,borderRadius:10,width:280,height:35,margin:5,backgroundColor:"grey"},onPress:function(){return h.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",e.kivalaszt(n.tema_id));case 1:case"end":return t.stop()}}),null,null,null,Promise)}},v.a.createElement(b.a,{style:{textAlign:"center",fontSize:20,color:"white"}},n.tema_nev," ")))},keyExtractor:function(e,t){return e.tema_id}})),v.a.createElement(z,{akttema_bevitel:this.state.akttema,frissit:function(){return e.kivalaszt(e.state.akttema)}}),v.a.createElement(S.a,{style:{alignItems:"center",margin:5}},v.a.createElement(y.a,{data:this.state.dataSource2,renderItem:function(e){var t=e.item;return v.a.createElement(S.a,{style:{borderWidth:1,borderRadius:10,padding:10,width:600,backgroundColor:"lightblue"}},v.a.createElement(b.a,{style:{fontSize:20,padding:3,color:"blue"}},t.uzenet_szoveg," "),v.a.createElement(b.a,{style:{fontStyle:"italic",fontSize:15,padding:3}},t.uzenet_nev," "),v.a.createElement(b.a,{style:{fontSize:12}},t.uzenet_datum," "))},keyExtractor:function(e,t){return e.uzenet_id}})))}}]),n}(v.a.Component);g.a.create({kekgomb:{alignItems:"center",backgroundColor:"blue",padding:10,width:300,marginLeft:"auto",marginRight:"auto"}})},71:function(e,t,n){e.exports=n(99)}},[[71,1,2]]]);
//# sourceMappingURL=app.3d772843.chunk.js.map
(this["webpackJsonpsocial-net2"]=this["webpackJsonpsocial-net2"]||[]).push([[0],{123:function(e,t,n){e.exports={nav:"Navbar_nav__ID-4m"}},124:function(e,t,n){e.exports={friends:"MyFriends_friends__3__xD"}},125:function(e,t,n){e.exports={photo:"MyPhoto_photo__oXAJB"}},126:function(e,t,n){e.exports={authors:"DialogItem_authors__18kAg",messageList:"DialogItem_messageList__2RW1Y"}},128:function(e,t,n){e.exports={wallpaper:"ProfileInfo_wallpaper__3mMn1"}},129:function(e,t,n){e.exports={item:"Post_item__FRB_T"}},130:function(e,t,n){e.exports={login:"Login_login__1ulig"}},161:function(e,t,n){},240:function(e,t,n){},285:function(e,t,n){"use strict";n.r(t),n.d(t,"reRenderEntireTree",(function(){return dt}));var s=n(61),r=n.n(s),i=(n(161),n(9)),a=n(33),o=n(3),c=n(286),u=n(120),l=n.n(u).a.create({withCredentials:!0,headers:{"API-KEY":"9f225800-9b44-4745-b381-d436ad2be4a7"},baseURL:"https://social-network.samuraijs.com/api/1.0/"}),j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return l.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},d=function(e){return l.post("follow/".concat(e)).then((function(e){return e.data}))},p=function(e){return l.delete("follow/".concat(e)).then((function(e){return e.data}))},h=function(e){return console.warn("This method is obsolete. Use profileAPI instead"),b.getUserIDProfile(e)},b={getUserIDProfile:function(e){return l.get("profile/".concat(e))},getStatus:function(e){return l.get("/profile/status/".concat(e))},updateStatus:function(e){return l.put("/profile/status/",{status:e})}},g=function(){return l.get("auth/me").then((function(e){return e.data}))},A=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return l.post("auth/login",{email:e,password:t,rememberMe:n})},f=function(){return l.delete("auth/login").then((function(e){return e.data}))},O={posts:[{id:Object(c.a)(),postText:"Hello,world!",likesCount:45},{id:Object(c.a)(),postText:"it`s my first message!",likesCount:37},{id:Object(c.a)(),postText:"I a'm doing IT-KAMASUTRA",likesCount:1224}],profile:null,status:""},m=function(e){return{type:"SET_STATUS",status:e}},E={authorsOfMessage:[{id:Object(c.a)(),name:"Nastya",avatar:"https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg"},{id:Object(c.a)(),name:"Natalya",avatar:"https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg"},{id:Object(c.a)(),name:"Alex",avatar:"https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg"},{id:Object(c.a)(),name:"Arina",avatar:"https://www.cnet.com/a/img/liJ9UZA87zs1viJiuEfVnL7YYfw=/940x0/2020/05/18/5bac8cc1-4bd5-4496-a8c3-66a6cd12d0cb/fb-avatar-2.jpg"}],messages:[{id:Object(c.a)(),message:"Bla-bla"},{id:Object(c.a)(),message:"Hello"},{id:Object(c.a)(),message:"What's up?"},{id:Object(c.a)(),message:"I'll pass"}]},I={users:[],pageSize:15,totalUsersCount:0,currentPage:1,isFetching:!0,followingInProgress:[]},x=function(e){return{type:"SET_CURRENT_PAGE",page:e}},S=function(e){return{type:"SET_TOTAL_USER-COUNT",totalCount:e}},C=function(e){return{type:"TOGGLE_IS_FETCHING",isFetching:e}},Q=function(e,t){return{type:"TOGGLE_IS_FOLLOWING_PROGRESS",userID:e,isFetching:t}},k=n(35),y={id:null,login:null,email:null,isAuth:!1,isFetching:!1},U=function(e,t,n,s){return{type:"SET_USER_DATA",payload:{id:e,login:t,email:n,isAuth:s}}},T=function(){return function(e){return e(C(!0)),g().then((function(t){if(0===t.resultCode){var n=t.data,s=n.login,r=n.id,i=n.email;e(U(r,s,i,!0))}e(C(!1))}))}},M=n(121),v=n(119),P={initialized:!1},w="SET_INITIALIZED",B=Object(i.c)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":return Object(o.a)(Object(o.a)({},e),{},{posts:[].concat(Object(a.a)(e.posts),[{id:Object(c.a)(),postText:t.postText,likesCount:0}])});case"SET_USER_PROFILE":return Object(o.a)(Object(o.a)({},e),{},{profile:t.profile});case"SET_STATUS":return Object(o.a)(Object(o.a)({},e),{},{status:t.status});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-NEW-MESSAGE":return Object(o.a)(Object(o.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:Object(c.a)(),message:t.newMessage}])});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_FOLLOWED":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{followed:!0}):e}))});case"IS_UNFOLLOWED":return Object(o.a)(Object(o.a)({},e),{},{users:e.users.map((function(e){return e.id===t.id?Object(o.a)(Object(o.a)({},e),{},{followed:!1}):e}))});case"SET_USERS":return Object(o.a)(Object(o.a)({},e),{},{users:Object(a.a)(t.users)});case"SET_CURRENT_PAGE":return Object(o.a)(Object(o.a)({},e),{},{currentPage:t.page});case"SET_TOTAL_USER-COUNT":return Object(o.a)(Object(o.a)({},e),{},{totalUsersCount:t.totalCount});case"TOGGLE_IS_FOLLOWING_PROGRESS":return Object(o.a)(Object(o.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(a.a)(e.followingInProgress),[t.userID]):e.followingInProgress.filter((function(e){return e!=t.userID}))});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_DATA":return Object(o.a)(Object(o.a)({},e),{},{id:t.payload.id,login:t.payload.login,email:t.payload.email,isAuth:t.payload.isAuth});case"TOGGLE_IS_FETCHING":return Object(o.a)(Object(o.a)({},e),{},{isFetching:t.isFetching});default:return e}},form:v.a,app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return Object(o.a)(Object(o.a)({},e),{},{initialized:!0});default:return e}}}),F=Object(i.e)(B,Object(i.a)(M.a));window.store=F;var K=n(12),J=n(25),G=n(26),D=n(28),L=n(27),R=(n(240),n(123)),V=n.n(R),N=n(0),W=function(){return Object(N.jsxs)("div",{className:V.a.nav,children:[Object(N.jsx)("div",{children:Object(N.jsx)(K.b,{to:"/profile/",children:"\u041c\u043e\u044f \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 "})}),Object(N.jsx)("div",{children:Object(N.jsx)(K.b,{to:"/dialogs",children:"\u041c\u043e\u0438 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f "})}),Object(N.jsx)("div",{children:Object(N.jsx)(K.b,{to:"/my_friends",children:" \u041c\u043e\u0438 \u0434\u0440\u0443\u0437\u044c\u044f"})}),Object(N.jsx)("div",{children:Object(N.jsx)(K.b,{to:"/users",children:"\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0438"})}),Object(N.jsx)("div",{children:Object(N.jsx)(K.b,{to:"/my_photo",children:"\u041c\u043e\u0438 \u0444\u043e\u0442\u043e\u0433\u0440\u0430\u0444\u0438\u0438"})})]})},Y=n(11),Z=n(124),q=n.n(Z),H=n(1),z=n.n(H),X=function(){return Object(N.jsx)("div",{className:q.a.friends})},_=n(125),$=n.n(_),ee=function(){return Object(N.jsx)("div",{className:$.a.foto})},te=n(52),ne=n.n(te),se=n(126),re=n.n(se),ie=function(e){return Object(N.jsxs)("li",{className:re.a.messageList,children:[Object(N.jsx)("img",{src:e.avatar,alt:"user"}),Object(N.jsx)(K.b,{to:"/dialogs/"+e.id,children:e.name})]},e.id)},ae=function(e){return Object(N.jsx)("li",{children:e.message},e.id)},oe=n(117),ce=n(118),ue=n(40),le=n(49),je=n.n(le),de=function(e){e.input;var t=e.meta,n=Object(ue.a)(e,["input","meta"]),s=t.touched&&t.error;return Object(N.jsxs)("div",{className:je.a.formControl+" "+(s?je.a.error:""),children:[n.children,s&&Object(N.jsx)("div",{children:t.error})]})},pe=function(e){var t=e.input,n=(e.meta,e.child,Object(ue.a)(e,["input","meta","child"]));return Object(N.jsx)(de,Object(o.a)(Object(o.a)({},e),{},{children:Object(N.jsx)("textarea",Object(o.a)(Object(o.a)({},t),n))}))},he=function(e){var t=e.input,n=(e.meta,e.child,Object(ue.a)(e,["input","meta","child"]));return Object(N.jsx)(de,Object(o.a)(Object(o.a)({},e),{},{children:Object(N.jsx)("input",Object(o.a)(Object(o.a)({},t),n))}))},be=function(e){if(!e)return"Field is required"},ge=function(e){return function(t){if(t&&t.length>e)return"Max length is ".concat(e," symbols")}},Ae=function(e){var t=e.dialogsPage.authorsOfMessage.map((function(e){return Object(N.jsx)(ie,{avatar:e.avatar,name:e.name,id:e.id},e.id)})),n=e.dialogsPage.messages.map((function(e){return Object(N.jsx)(ae,{id:e.id,message:e.message},e.id)}));return Object(N.jsxs)("div",{className:ne.a.dialogs,children:[Object(N.jsx)("ul",{className:ne.a.authors,children:t}),Object(N.jsx)("div",{className:ne.a.items,children:Object(N.jsx)("ul",{className:ne.a.messages,children:n})}),Object(N.jsx)(Oe,{onSubmit:function(t){e.onAddNewMessage(t.addMessageBody)}})]})},fe=ge(60),Oe=Object(ce.a)({form:"dialogAddMessageForm"})((function(e){return Object(N.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(N.jsx)(oe.a,{component:pe,name:"addMessageBody",placeholder:"Enter your message",validate:[be,fe]}),Object(N.jsx)("button",{children:"Send"})]})})),me=n(10),Ee=function(e){return{isAuth:e.auth.isAuth}};function Ie(e){return Object(me.b)(Ee)((function(t){t.isAuth;var n=Object(ue.a)(t,["isAuth"]);return t.isAuth?Object(N.jsx)(e,Object(o.a)({},n)):Object(N.jsx)(Y.a,{to:"/login"})}))}var xe=Object(i.d)(Ie,Object(me.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{onAddNewMessage:function(t){e(function(e){return{type:"ADD-NEW-MESSAGE",newMessage:e}}(t))}}})))(Ae),Se=n(51),Ce=n.n(Se),Qe="data:image/png;base64,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",ke=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsxs)("h3",{children:[e.name,Object(N.jsx)("pre",{}),e.id]}),Object(N.jsx)(K.b,{to:"/profile/"+e.id,children:Object(N.jsx)("img",{className:Ce.a.img,src:null!==e.photoSmall?e.photoSmall:Qe,alt:e.name})}),e.followed?Object(N.jsx)("button",{onClick:function(){e.unfollow(e.id)},disabled:e.followingInProgress.some((function(t){return t===e.id})),children:"Unfollow"}):Object(N.jsx)("button",{onClick:function(){e.follow(e.id)},disabled:e.followingInProgress.some((function(t){return t===e.id})),children:"Follow"})]})},ye=function(e){for(var t=e.users.map((function(t){return Object(N.jsx)(ke,{id:t.id,name:t.name,followed:t.followed,follow:e.follow,unfollow:e.unfollow,photoSmall:t.photos.small,followingInProgress:e.followingInProgress},t.id)})),n=Math.ceil(e.totalUsersCount/e.pageSize),s=[],r=1;r<=n;r++)s.push(r);return Object(N.jsxs)("div",{children:[Object(N.jsx)("h2",{children:"Users"}),Object(N.jsx)("div",{className:Ce.a.pages,children:s.map((function(t){return Object(N.jsx)("span",{className:"".concat(e.currentPage===t?Ce.a.currentPage:""),onClick:function(n){e.onClickHandler(t)},children:t},t)}))}),t]})},Ue=n.p+"static/media/Spinner.c67c004d.svg",Te=function(e){return Object(N.jsx)("div",{className:e.style?e.style:"",children:Object(N.jsx)("img",{src:Ue,alt:"preloader"})})},Me=n(127),ve=Object(Me.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),Pe=function(e){return e.usersPage.pageSize},we=function(e){return e.usersPage.totalUsersCount},Be=function(e){return e.usersPage.currentPage},Fe=function(e){return e.usersPage.isFetching},Ke=function(e){return e.usersPage.followingInProgress},Je=function(e){return e.auth.isAuth},Ge=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){var e;Object(J.a)(this,n);for(var s=arguments.length,r=new Array(s),i=0;i<s;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){e.props.getUsersThunkCreator(t,e.props.pageSize)},e}return Object(G.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunkCreator(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(N.jsxs)(N.Fragment,{children:[this.props.isFetching?Object(N.jsx)(Te,{}):null,Object(N.jsx)(ye,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,follow:this.props.followThunkCreator,unfollow:this.props.unfollowThunkCreator,setCurrentPage:this.props.setCurrentPage,setTotalUsersCount:this.props.setTotalUsersCount,onClickHandler:this.onPageChanged,followingInProgress:this.props.followingInProgress})]})}}]),n}(z.a.Component),De=Object(i.d)(Object(me.b)((function(e){return{users:ve(e),pageSize:Pe(e),totalUsersCount:we(e),currentPage:Be(e),isFetching:Fe(e),followingInProgress:Ke(e),isAuth:Je(e)}}),{setCurrentPage:x,setTotalUsersCount:S,toggleIsFetching:C,toggleFollowing:Q,getUsersThunkCreator:function(e,t){return function(n){n(C(!0)),n(x(e)),j(e,t).then((function(e){n(C(!1)),n({type:"SET_USERS",users:e.items}),n(S(e.totalCount))}))}},followThunkCreator:function(e){return function(t){t(Q(e,!0)),d(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"IS_FOLLOWED",id:e}}(e)),t(Q(e,!1))}))}},unfollowThunkCreator:function(e){return function(t){t(Q(e,!0)),p(e).then((function(n){0===n.resultCode&&t(function(e){return{type:"IS_UNFOLLOWED",id:e}}(e)),t(Q(e,!1))}))}}}))(Ge),Le=n(128),Re=n.n(Le),Ve=n(87),Ne=z.a.memo((function(e){var t=e.status,n=e.updateStatus,s=Object(H.useState)(t),r=Object(Ve.a)(s,2),i=r[0],a=r[1],o=Object(H.useState)(!1),c=Object(Ve.a)(o,2),u=c[0],l=c[1];console.log("status render"),Object(H.useEffect)((function(){a(t)}),[t]);return Object(N.jsxs)("div",{children:[!u&&Object(N.jsx)("div",{children:Object(N.jsx)("span",{onDoubleClick:function(){l(!0)},children:t||"This is my status"})}),u&&Object(N.jsx)("div",{children:Object(N.jsx)("input",{onBlur:function(){l(!1),n(i)},value:i,onChange:function(e){a(e.currentTarget.value)},autoFocus:!0})})]})})),We=function(e){return e.profile?Object(N.jsxs)("div",{children:[Object(N.jsxs)("div",{className:Re.a.wallpaper,children:[Object(N.jsxs)("p",{children:[" Hi, I am ",e.profile.fullName]}),Object(N.jsx)("img",{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJkgaqXA1NEtiXPaBtZndyZE13EtWtTb4cg&usqp=CAU"})]}),Object(N.jsx)("img",{src:null!==e.profile.photos.large?e.profile.photos.large:Qe,alt:"".concat(e.profile.fullName," photo")}),Object(N.jsx)(Ne,{status:e.status,updateStatus:e.updateStatus})]}):Object(N.jsx)(Te,{})},Ye=n(129),Ze=n.n(Ye),qe=function(e){return Object(N.jsxs)("div",{className:Ze.a.item,children:[Object(N.jsxs)("div",{children:[Object(N.jsx)("img",{src:"data:image/jpeg;base64,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"}),e.postText]}),Object(N.jsxs)("div",{children:[Object(N.jsx)("span",{children:"Like"}),e.likesCount]})]})},He=ge(50),ze=Object(ce.a)({form:"profileAddPostForm"})((function(e){return Object(N.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(N.jsx)(oe.a,{name:"postBody",component:pe,placeholder:"Enter your post",validate:[be,He]}),Object(N.jsx)("button",{children:"Add post"})]})})),Xe=Object(me.b)((function(e){return{profilePage:e.profilePage}}),(function(e){return{onAddNewPost:function(t){e(function(e){return{type:"ADD-POST",postText:e}}(t))}}}))((function(e){var t=e.profilePage.posts.map((function(e){return Object(N.jsx)(qe,{id:e.id,postText:e.postText,likesCount:e.likesCount},e.id)}));return Object(N.jsxs)("div",{children:[Object(N.jsx)("div",{children:"My Posts"}),Object(N.jsx)(ze,{onSubmit:function(t){e.onAddNewPost(t.postBody)}}),t]})})),_e=function(e){return Object(N.jsxs)("div",{children:[Object(N.jsx)(We,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(N.jsx)(Xe,{})]})},$e=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(G.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;null===this.props.authorizedUserId?this.props.history.push("/login"):e||(e=this.props.authorizedUserId),this.props.setUserProfile(e),this.props.getUserStatus(e)}},{key:"render",value:function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(_e,Object(o.a)(Object(o.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(z.a.Component),et=Object(i.d)(Object(me.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{setUserProfile:function(e){return function(t){h(e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getUserStatus:function(e){return function(t){b.getStatus(e).then((function(e){t(m(e.data))}))}},updateStatus:function(e){return function(t){b.updateStatus(e).then((function(n){0===n.data.resultCode&&t(m(e))}))}}}),Y.f,Ie)($e),tt=n(66),nt=n.n(tt),st=function(e){var t=e.login,n=e.isAuth,s=e.isFetching,r=e.logOutThunkCreator;e.children;return Object(N.jsxs)("header",{className:nt.a.header,children:[Object(N.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Vk_Logo.svg/240px-Vk_Logo.svg.png"}),s?Object(N.jsx)(Te,{style:nt.a.loginBlock}):Object(N.jsx)("div",{className:nt.a.loginBlock,children:n?Object(N.jsxs)("div",{children:[" ",t,Object(N.jsx)("button",{onClick:r,children:"Log out"})]}):Object(N.jsx)(K.b,{to:"/login",children:"Login"})})]})},rt=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(G.a)(n,[{key:"render",value:function(){return Object(N.jsx)(st,Object(o.a)({},this.props))}}]),n}(z.a.Component),it=Object(me.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,isFetching:e.auth.isFetching}}),{setAuthUserData:U,toggleIsFetching:C,getAuthUserDataThunkCreator:T,logOutThunkCreator:function(){return function(e){e(C(!0)),f().then((function(t){0===t.resultCode&&e(U(null,null,null,!1)),e(C(!1))}))}}})(rt),at=n(130),ot=n.n(at),ct=Object(ce.a)({form:"email"})((function(e){return Object(N.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(N.jsx)("div",{children:Object(N.jsx)(oe.a,{placeholder:"Email",component:he,name:"email",validate:[be]})}),Object(N.jsx)("div",{children:Object(N.jsx)(oe.a,{placeholder:"Password",component:he,name:"password",type:"password",validate:[be]})}),Object(N.jsxs)("div",{children:[Object(N.jsx)(oe.a,{type:"checkbox",component:he,name:"rememberMe"}),"Remember me"]}),e.error&&Object(N.jsx)("div",{className:je.a.formSummaryError,children:e.error}),Object(N.jsx)("div",{children:Object(N.jsx)("button",{children:"Login"})})]})})),ut=Object(me.b)((function(e){return{isAuth:e.auth.isAuth}}),{logInThunkCreator:function(e,t,n){return function(s){s(C(!0)),A(e,t,n).then((function(e){if(0===e.data.resultCode)s(T());else{var t=e.data.messages.length>0?e.data.messages[0]:"Some error occurred";s(Object(k.a)("email",{_error:t}))}s(C(!1))}))}}})((function(e){return e.isAuth?Object(N.jsx)(Y.a,{to:"/profile"}):Object(N.jsxs)("div",{className:ot.a.login,children:[Object(N.jsx)("h1",{children:"Login"}),Object(N.jsx)(ct,{onSubmit:function(t){e.logInThunkCreator(t.email,t.password,t.rememberMe)}})]})})),lt=function(e){Object(D.a)(n,e);var t=Object(L.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(G.a)(n,[{key:"componentDidMount",value:function(){this.props.setInitializedThunkCreator()}},{key:"render",value:function(){return this.props.initialized?Object(N.jsxs)("div",{className:"appWrapper",children:[Object(N.jsx)(it,{}),Object(N.jsx)(W,{}),Object(N.jsxs)("div",{className:"app-Wrapper-Content",children:[Object(N.jsx)(Y.b,{path:"/login",render:function(){return Object(N.jsx)(ut,{})}}),Object(N.jsx)(Y.b,{path:"/profile/:userId?",render:function(){return Object(N.jsx)(et,{})}}),Object(N.jsx)(Y.b,{path:"/dialogs",render:function(){return Object(N.jsx)(xe,{})}}),Object(N.jsx)(Y.b,{path:"/users",render:function(){return Object(N.jsx)(De,{})}}),Object(N.jsx)(Y.b,{path:"/my_friends",render:function(){return Object(N.jsx)(X,{})}}),Object(N.jsx)(Y.b,{path:"/my_photo",render:function(){return Object(N.jsx)(ee,{})}})]})]}):Object(N.jsx)(Te,{})}}]),n}(H.Component),jt=Object(i.d)(Y.f,Object(me.b)((function(e){return{initialized:e.app.initialized}}),{setInitializedThunkCreator:function(){return function(e){e(T()).then((function(){return e({type:w})}))}}}))(lt),dt=function(){r.a.render(Object(N.jsx)(K.a,{children:Object(N.jsx)(me.a,{store:F,children:Object(N.jsx)(jt,{})})}),document.getElementById("root"))};dt(),F.subscribe((function(){dt()}))},49:function(e,t,n){e.exports={formControl:"FormsControls_formControl__30sTG",error:"FormsControls_error__1uXIo",formSummaryError:"FormsControls_formSummaryError__2PE0E"}},51:function(e,t,n){e.exports={img:"UserItem_img__3-br2",currentPage:"UserItem_currentPage__3RJ53",pages:"UserItem_pages__2n-II"}},52:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__1W0zY"}},66:function(e,t,n){e.exports={header:"Header_header__2VPmP",loginBlock:"Header_loginBlock__1FSOf"}}},[[285,1,2]]]);
//# sourceMappingURL=main.8dcb892f.chunk.js.map
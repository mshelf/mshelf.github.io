webpackJsonp([0],{141:function(e,t,n){"use strict";function a(e){for(var t=e.split("\n"),n=[],a=0;a<t.length;a++){var r=t[a].match(i);if(r){var o=r[1].trim(),s=r[6].trim(),c=3600*(r[3]?parseInt(r[2],10):0)+60*parseInt(r[4],10)+parseInt(r[5],10);r&&n.push({time:c,text:(o+" "+s).trim()})}}return n}function r(e,t){for(var n,a=99999999,r=e[0],i=0;i<e.length;i++)(n=Math.abs(e[i].time-t))<a&&(a=n,r=e[i]);return r.time}t.b=a,t.a=r;var i=/(.*?)((\d+):)?(\d{1,2}):(\d{2})(.*)/},142:function(e,t,n){"use strict";function a(e){return Math.floor(Math.random()*e)}function r(e,t){return Math.floor(Math.random()*(t-e))+e}function i(e){return e[a(e.length)]}function o(e){}t.c=a,t.d=r,t.b=i,t.a=o},149:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(){h.a.render(l.a.createElement(d.HashRouter,null,l.a.createElement(d.Route,{path:"/:channelId?",component:d.withRouter(P)})),document.getElementById("app"))}Object.defineProperty(t,"__esModule",{value:!0});var s=n(150),c=(n.n(s),n(5)),l=n.n(c),u=n(91),h=n.n(u),d=n(117),f=n(268),p=n(269),y=n(270),m=n(357),v=n(358),k=n(359),g=n(381),b=n(382),w=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();window.initApp=function(){"loading"!==document.readyState?o():document.addEventListener("DOMContentLoaded",function(){o()})};var P=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));e.handleToggleMenu=e.handleToggleMenu.bind(e),e.handleSelectChannel=e.handleSelectChannel.bind(e),e.state={isMenuForceShow:!1},e.channelsRegistry=new v.a(m.a),e.favoritesStore=new b.a(e.channelsRegistry);var n=new k.a(e.channelsRegistry);return e.playingQueue=new g.a(n),e}return i(t,e),w(t,[{key:"handleToggleMenu",value:function(e){e.preventDefault(),e.stopPropagation(),this.setState({isMenuForceShow:!this.state.isMenuForceShow})}},{key:"handleSelectChannel",value:function(e){this.props.match.params.channelId!==e&&(this.props.history.push(e),this.setState({isMenuForceShow:!1}))}},{key:"render",value:function(){var e=this.props.match.params.channelId;return l.a.createElement("div",null,l.a.createElement(p.a,{onToggleMenu:this.handleToggleMenu}),l.a.createElement(f.a,{channelId:e,channelsRegistry:this.channelsRegistry,favoritesStore:this.favoritesStore,isForceShow:this.state.isMenuForceShow,onSelectChannel:this.handleSelectChannel}),l.a.createElement(y.a,{channelId:e,favoritesStore:this.favoritesStore,playingQueue:this.playingQueue}))}}]),t}(l.a.Component);P.contextTypes={router:l.a.PropTypes.object.isRequired}},150:function(e,t){},268:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(5),s=n.n(o),c=n(6),l=n.n(c),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.handleMenuItemClick=e.handleMenuItemClick.bind(e),e.noChangeExpandedPath=!1,e.state={expandedPath:{}},e}return i(t,e),u(t,[{key:"componentWillMount",value:function(){var e=void 0,t=this.props,n=t.channelId,a=t.favoritesStore;e=n?this.getExpandedPath(n):this.getExpandedPath(a.getFavoritesChannels().length>0?"Favorites":"Genres"),this.setExpandedPath(e)}},{key:"componentWillReceiveProps",value:function(e){if(e.channelId!==this.props.channelId&&!this.noChangeExpandedPath){var t=this.getExpandedPath(e.channelId);this.setExpandedPath(t)}}},{key:"componentDidUpdate",value:function(e,t){this.noChangeExpandedPath=!1}},{key:"setExpandedPath",value:function(e){this.noChangeExpandedPath=!1,this.setState({expandedPath:e})}},{key:"handleMenuItemClick",value:function(e){e.stopPropagation(),e.preventDefault();var t=e.currentTarget.getAttribute("data-path"),n=e.currentTarget.getAttribute("data-channel-id");if(n)this.noChangeExpandedPath=!0,this.props.onSelectChannel(n);else{if(e.target.className.includes("expanded")){var a=t.split("\\");a.pop(),this.setExpandedPath(this.getExpandedPathByParts(a))}else{var r=this.getExpandedPath(t);this.setExpandedPath(r)}}}},{key:"getExpandedPath",value:function(e){if(void 0===e)return{};var t=e.split("\\");return this.getExpandedPathByParts(t)}},{key:"getExpandedPathByParts",value:function(e){for(var t="",n={},a=0;a<e.length;a++)t=this.concatParentIdAndId(t,e[a]),n[t]=!0;return n}},{key:"concatParentIdAndId",value:function(e,t){return e?e+"\\"+t:t}},{key:"renderChannel",value:function(e,t,n,a){return s.a.createElement("li",{key:e,"data-channel-id":e,"data-path":n,className:a?"channel expanded":"channel",onClick:this.handleMenuItemClick},t)}},{key:"renderFolder",value:function(e,t,n,a){return s.a.createElement("li",{key:t,"data-path":t,className:n?"folder expanded":"folder",onClick:this.handleMenuItemClick},e,s.a.createElement("ul",{className:n?"submenu expanded":"submenu"},a))}},{key:"renderBranch",value:function(e,t){var n=[],a=this.state.expandedPath;for(var r in e){var i=e[r],o=this.concatParentIdAndId(t,i.title);if(i.children){var s=this.renderBranch(i.children,o);if(!i.isJustContainer){var c=this.renderChannel(i.id,"All "+i.title,o,i.id===this.props.channelId);s.unshift(c)}n.push(this.renderFolder(i.title,o,a[o],s))}else{var l=i.id;n.push(this.renderChannel(l,i.title,o,l===this.props.channelId))}}return n}},{key:"render",value:function(){var e=this.props.channelsRegistry.tree,t=this.props.isForceShow?"app-menu shadow force-show":"app-menu shadow",n=this.props.favoritesStore.getFavoritesChannels(),a=[{title:"Favorites",isJustContainer:!0,children:n}];return s.a.createElement("div",{className:t},s.a.createElement("ul",{className:"root"},n.length>0?this.renderBranch(a,""):null,this.renderBranch(e,"")))}}]),t}(s.a.PureComponent);t.a=h,h.propTypes={channelId:l.a.string,onSelectChannel:l.a.func.isRequired,channelsRegistry:l.a.object.isRequired,favoritesStore:l.a.object.isRequired}},269:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(5),s=n.n(o),c=n(6),l=n.n(c),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),h=function(e){function t(){return a(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),u(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"app-top-bar shadow"},s.a.createElement("div",{className:"app-menu-toggle-button",onClick:this.props.onToggleMenu},s.a.createElement("svg",{viewBox:"0 0 32 32"},s.a.createElement("path",{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}))),s.a.createElement("div",{className:"app-header"},s.a.createElement("div",{className:"app-logo"}),s.a.createElement("div",{className:"app-header-text"},"Music Shelf Radio")))}}]),t}(s.a.Component);t.a=h,h.propTypes={onToggleMenu:l.a.func}},270:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var o=n(5),s=n.n(o),c=n(6),l=n.n(c),u=n(121),h=n(141),d=n(142),f=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p={playerVars:{autoplay:1}},y=function(e){function t(){a(this,t);var e=r(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={isStarted:!1},e.handleNextClick=e.handleNextClick.bind(e),e.handlePlayerStateChange=e.handlePlayerStateChange.bind(e),e.autoChangeTrackTimeoutId=0,e.isStarted=!1,e}return i(t,e),f(t,[{key:"componentDidMount",value:function(){this.props.channelId&&this.setChannel(this.props.channelId)}},{key:"componentWillReceiveProps",value:function(e){e.channelId!==this.props.channelId&&this.setChannel(e.channelId)}},{key:"setChannel",value:function(e){var t=this;if(!e)return void this.setTrack(null);var n=this.props.playingQueue;this.props.playingQueue.setOnChangeHandler(function(){t.props.favoritesStore.trackWasStarted(t.props.channelId);var e=n.getNextTrack();t.setTrack(e)}),n.loadTracks(e),this.props.favoritesStore.channelWasOpened(e)}},{key:"setTrack",value:function(e){this.isStarted=!1,this.setState({track:e})}},{key:"handleNextClick",value:function(){this.props.playingQueue.loadTracks(this.props.channelId)}},{key:"handlePlayerStateChange",value:function(e){var t=this;clearTimeout(this.autoChangeTrackTimeoutId);var n=this.state.track;if(n&&1===e.target.getPlayerState()){var a=e.target.getDuration(),r=n.sourceData.channel,i=r.maxTrackDuration?r.maxTrackDuration:1e3,o=a>i;if(!this.isStarted&&(this.isStarted=!0,o)){var s=n.tracklist.length>0?h.a(n.tracklist,d.d(0,a-i)):d.d(0,a-i);return void e.target.seekTo(s)}if(o){var c=Math.floor(e.target.getCurrentTime()),l=n.tracklist.length>0?h.a(n.tracklist,c+i):c+i;this.autoChangeTrackTimeoutId=setTimeout(function(){t.props.playingQueue.loadTracks(t.props.channelId)},1e3*(l-c))}}}},{key:"getChannelNameById",value:function(e){return e.replace(/\\/g," / ")}},{key:"renderPlayer",value:function(){var e=this.state.track;return e?s.a.createElement("div",null,s.a.createElement("div",{className:"app-player-container"},s.a.createElement(u.default,{opts:p,className:"app-youtube-player",videoId:e.id,onEnd:this.handleNextClick,onStateChange:this.handlePlayerStateChange})),s.a.createElement("div",{className:"app-player-buttons"},s.a.createElement("button",{className:"shadow",onClick:this.handleNextClick},"Next Track >>"))):null}},{key:"render",value:function(){var e=this.props.channelId;return e?s.a.createElement("div",{className:"app-content"},s.a.createElement("h1",{className:"app-content-header"},this.getChannelNameById(e)),this.renderPlayer()):null}}]),t}(s.a.PureComponent);t.a=y,y.propTypes={channelId:l.a.string,playingQueue:l.a.object.isRequired,favoritesStore:l.a.object.isRequired}},357:function(e,t,n){"use strict";function a(e,t){return e.title>t.title?1:e.title<t.title?-1:0}t.a=[{title:"Genres",isJustContainer:!0,children:[{title:"Pop",keywords:[{query:["pop music","поп музыка"],yearPostfix:1990},"европа плюс музыка","русское радио музыка"]},{title:"Rock",children:[{title:"Hard Rock",keywords:{query:["Hard rock music","Glam rock music"],epochPostfix:1970}},{title:"Punk Rock",keywords:{epochPostfix:1970}},{title:"Post Rock",keywords:{query:["post rock","shoegaze music","post punk"],yearPostfix:2e3},useKeywordsFactor:2,maxTrackDuration:1800},{title:"Alternative Rock",keywords:{epochPostfix:1990,yearPostfix:2e3}},{title:"Progressive Rock",keywords:{epochPostfix:1970}},{title:"Russian Rock",noUseKeywords:!0}].sort(a)},{title:"Metal",children:[{title:"Heavy Metal",noUseKeywords:!0},{title:"Power Metal",keywords:{epochPostfix:2e3}},{title:"Thrash Metal",keywords:{epochPostfix:1980}},{title:"Black Metal",keywords:{epochPostfix:1980,yearPostfix:2e3}},{title:"Death Metal",children:[{title:"Melodic Death",keywords:{query:"Melodic death metal",yearPostfix:2e3}}].sort(a)},{title:"Metalcore",keywords:{yearPostfix:2e3}},{title:"Nu Metal",keywords:{yearPostfix:2e3,epochPostfix:1990}},{title:"Post Metal",keywords:{query:["post metal","post black metal"],yearPostfix:2005},useKeywordsFactor:2,maxTrackDuration:1800},{title:"Folk Metal",keywords:{query:["folk metal","pagan metal","viking metal"],yearPostfix:2005}}].sort(a)},{title:"Electronic",maxTrackDuration:10800,children:[{title:"Ambient",maxTrackDuration:10800,keywords:{query:"ambient music -chillout",yearPostfix:2015}},{title:"House",maxTrackDuration:10800,children:[{title:"Deep House",keywords:{yearPostfix:2010}},{title:"Electro House",keywords:{yearPostfix:2010}}].sort(a)},{title:"Trance",maxTrackDuration:10800,children:[{title:"Progressive Trance",maxTrackDuration:10800,keywords:{yearPostfix:2005}},{title:"Uplifting Trance",maxTrackDuration:10800,keywords:{yearPostfix:2005}},{title:"Vocal Trance",maxTrackDuration:10800,keywords:{yearPostfix:2005}},{title:"Goa-Psy Trance",maxTrackDuration:10800,keywords:{yearPostfix:2e3,epochPostfix:1990}}].sort(a)},{title:"Hardstyle",children:[{title:"Hardcore",keywords:{query:["Electronic hardcore","electronic hardstyle"],keywords:{yearPostfix:2e3,epochPostfix:1990}}},{title:"Gabber",keywords:{yearPostfix:2010}}].sort(a)},{title:"Light & Relax",maxTrackDuration:10800,children:[{title:"Lounge",maxTrackDuration:10800,keywords:{yearPostfix:2010}},{title:"Chillout",maxTrackDuration:10800,keywords:{yearPostfix:2010}},{title:"Trip-Hop",maxTrackDuration:10800,keywords:{yearPostfix:2010}}].sort(a)},{title:"Drum & Bass",maxTrackDuration:10800,keywords:{query:["Drum & Bass","liquid drum and bass"],yearPostfix:2005}},{title:"Techno",maxTrackDuration:10800,keywords:{query:["Techno","Detroit techno"],yearPostfix:2005,epochPostfix:1990}}].sort(a)},{title:"Hip-Hop & Rap",keywords:{yearPostfix:2e3,epochPostfix:1990},children:[{title:"Russian Rap",keywords:{yearPostfix:2005,epochPostfix:1990}}].sort(a)},{title:"Jazz",maxTrackDuration:3600,children:[{title:"Classic Jazz",maxTrackDuration:3600},{title:"Bebop Jazz",maxTrackDuration:3600},{title:"Piano Jazz",maxTrackDuration:3600},{title:"Acid Jazz",maxTrackDuration:3600},{title:"Avantgarde Jazz",maxTrackDuration:3600}].sort(a)},{title:"Blues",keywords:{epochPostfix:1920}},{title:"Ska"},{title:"Classical",maxTrackDuration:3600},{title:"Instrumental",maxTrackDuration:3600,children:[{title:"Guitar",keywords:"instrumental guitar music",maxTrackDuration:3600},{title:"Piano",keywords:"instrumental piano music",maxTrackDuration:3600}].sort(a)}]}].sort(a)},358:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t,n,a){e.forEach(function(e){var s=i(a,e.title);if(e.id=s,!e.isJustContainer){var c=o(s,e);t[s]=c}e.children&&r(e.children,t,n,s)})}function i(e,t){return e?e+"\\"+t:t}function o(e,t){var n=Object.assign({id:e},t);return!t.isFolder&&t.children&&(n.childrenIds=s(e,t.children)),n}function s(e,t){var n=[];return t.forEach(function(t){c(i(e,t.title),t,n)}),n}function c(e,t,n){n.push(e),t.children&&t.children.forEach(function(t){c(i(e,t.title),t,n)})}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=function(){function e(t){a(this,e),this.registry={},r(t,this.registry,this.tree),this.tree=t}return l(e,[{key:"getChannelDescriptor",value:function(e){return this.registry[e]}}]),e}();t.a=u},359:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){var t=e.keywords?e.keywords:e.title+" music";if("object"===(void 0===t?"undefined":h(t))&&Array.isArray(t)&&(t=u.b(t)),"string"==typeof t)return""+t;var n=void 0;switch(h(t.query)){case"undefined":n=e.title+" music";break;case"object":n=u.b(t.query);break;case"string":n=t.query}switch(u.c(3)%3){case 0:return n;case 1:if(t.yearPostfix){return n+" "+u.d(t.yearPostfix,(new Date).getFullYear()+1)}return n;case 2:if(t.epochPostfix){return n+" "+i(t.epochPostfix)}return n}}function i(e){var t=(new Date).getFullYear(),n=t-t%10;return e+10*u.c(1+Math.floor((n-e)/10))+"s"}function o(e){return null===e||!e.id}var s=n(360),c=n(379),l=n(141),u=n(142),h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),f=function(){function e(t){a(this,e),this.channelsRegistry=t,this.artistsApiClient=new s.a,this.youtubeApiClient=new c.a}return d(e,[{key:"loadTracks",value:function(e){var t=this,n=this.channelsRegistry.getChannelDescriptor(e);return n.childrenIds&&u.c(2)%2==0&&(n=this.channelsRegistry.getChannelDescriptor(u.b(n.childrenIds))),this.artistsApiClient.hasArtists(n.id).then(function(e){var a=n.useKeywordsFactor?n.useKeywordsFactor:5;return!e||!n.noUseKeywords&&u.c(a)%a==0?t._searchByKeywords(n):t._searchByArtists(n)})}},{key:"_searchByArtists",value:function(e){var t=this;return this.artistsApiClient.getRandomArtist(e.id).then(function(n){var a=n+" album";return t._getSearchResult(a,{channel:e,artist:n})}).then(function(n){return o(n)?t._searchByKeywords(e):n})}},{key:"_searchByKeywords",value:function(e){var t=r(e);return this._getSearchResult(t,{channel:e})}},{key:"_getSearchResult",value:function(e,t){var n=this;u.a(e);var a=t.artist?t.artist:null;return this.youtubeApiClient.search(e,a).then(function(e){return n._getRandomVideoIdFromResultSet(e,function(e){return e.id})}).then(function(e){return null===e?null:n.youtubeApiClient.getVideoInfo(e)}).then(function(e){return null===e?(u.a("cannot load info"),{sourceData:t}):(e.tracklist=e.description?l.b(e.description):[],Object.assign(e,{sourceData:t}))})}},{key:"_getRandomVideoIdFromResultSet",value:function(e,t){var n=this;if(e.items.length>0){var a=Math.floor(Math.random()*e.items.length),r=t(e.items[a]);return"youtube#video"===r.kind?(u.a(" - video "+r.videoId),r.videoId):(u.a(" - playlist "+r.playlistId),this.youtubeApiClient.getPlaylistItems(r.playlistId).then(function(e){return n._getRandomVideoIdFromResultSet(e,function(e){return e.snippet.resourceId})}))}return u.a("!!! empty list"),null}}]),e}();t.a=f},360:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return e.toLowerCase().replace(/[\\,\s]/g,"_")+"_"+t+".json"}var i=n(83),o=n.n(i),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=function(){function e(){a(this,e),this.metadata=null,this.cache=null}return s(e,[{key:"hasArtists",value:function(e){return this._getMetadata().then(function(t){return Boolean(t[e])})}},{key:"getRandomArtist",value:function(e){var t=this.metadata[e],n=r(e,Math.floor(Math.random()*t)+1);return this._getArtistsByFile(n).then(function(e){return e[Math.floor(Math.random()*e.length)]})}},{key:"_getMetadata",value:function(){var e=this;return this.metadata?Promise.resolve(this.metadata):o.a.get("data/artists/metadata.json?"+Math.random()).then(function(t){return e.metadata=t.data,t.data})}},{key:"_getArtistsByFile",value:function(e){var t=this;return this.cache&&this.cache[e]?Promise.resolve(this.cache[e]):o.a.get("data/artists/"+e).then(function(n){return t.cache={},t.cache[e]=n.data,n.data})}}]),e}();t.a=c},379:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return t=c.a(t),{items:e.items.filter(function(e){return c.a(e.snippet.title).startsWith(t)})}}var i=n(83),o=n.n(i),s=n(148),c=n.n(s),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}();c.a.defaults.mode="my",c.a.defaults.modes.my={replacement:"-",symbols:!1,remove:null,lower:!0,charmap:c.a.charmap,multicharmap:c.a.multicharmap};var u="AIzaSyDpQHUScIP1XnEoY6PdqgNRNGRRN5kO5vE",h="https://www.googleapis.com/youtube/v3",d=function(){function e(){a(this,e)}return l(e,[{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=h+"/search?part=snippet&key="+u+"&type=video,playlist&maxResults=50&q="+encodeURIComponent(e)+"&fields=items(id,snippet/title)",a=o.a.get(n).then(function(e){return e.data});return t?a.then(function(e){return r(e,t)}):a}},{key:"getPlaylistItems",value:function(e){var t=h+"/playlistItems?part=snippet&key="+u+"&maxResults=30&playlistId="+e+"&fields=items(snippet/resourceId)";return o.a.get(t).then(function(e){return e.data})}},{key:"getVideoInfo",value:function(e){var t=h+"/videos?part=snippet&id="+e+"&fields=items(snippet/title,snippet/description)&key="+u;return o.a.get(t).then(function(t){return t.data.items.length>0?Object.assign({id:e},t.data.items[0].snippet):null})}}]),e}();t.a=d},381:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),i=function(){function e(t){a(this,e),this.tracksLoader=t,this.onChangeHandler=null,this.track=null}return r(e,[{key:"setOnChangeHandler",value:function(e){this.onChangeHandler=e}},{key:"loadTracks",value:function(e){var t=this;this.tracksLoader.loadTracks(e).then(function(e){t.track=e,t.onChangeHandler&&t.onChangeHandler()})}},{key:"getNextTrack",value:function(){return this.track}}]),e}();t.a=i},382:function(e,t,n){"use strict";function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){return e[1]<t[1]?1:e[1]>t[1]?-1:0}function i(e,t,n){void 0===e[t]&&(e[t]=0),e[t]+=n}var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=function(){function e(t){a(this,e),this.isCacheValid=!1,this.channelsRegistry=t}return o(e,[{key:"channelWasOpened",value:function(e){var t=this._getData();i(t,e,5),this._saveData(t)}},{key:"trackWasStarted",value:function(e){var t=this._getData();i(t,e,1),this._saveData(t)}},{key:"getFavoritesChannels",value:function(){var e=this;if(!this.isCacheValid){var t=this._getData(),n=Object.entries(t).sort(r).slice(0,5).map(function(t){var n=t[0];return{id:n,title:e.channelsRegistry.getChannelDescriptor(n).title}});this.cache=n,this.isCacheValid=!0}return this.cache}},{key:"_getData",value:function(){var e=localStorage.getItem("favorites");return e?JSON.parse(e):{}}},{key:"_saveData",value:function(e){this.isCacheValid=!1,localStorage.setItem("favorites",JSON.stringify(e))}}]),e}();t.a=s}},[149]);
define("#base/0.9.15/attribute",[],function(a,b){function e(a){return c.call(a)==="[object String]"}function f(a){return c.call(a)==="[object Function]"}function g(a){return a&&c.call(a)==="[object Object]"&&"isPrototypeOf"in a}function h(a){for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}function i(a,b){var c,e;for(c in b)b.hasOwnProperty(c)&&(e=b[c],d(e)?e=e.slice():g(e)&&(e=i(a[c]||{},e)),a[c]=e);return a}function k(a){return a.charAt(0).toUpperCase()+a.substring(1)}function l(a,b){var c=[],d=a.constructor.prototype;while(d)d.hasOwnProperty("attrs")||(d.attrs={}),m(b,d.attrs,d),h(d.attrs)||c.unshift(d.attrs),d=d.constructor.superclass;var e={};for(var f=0,g=c.length;f<g;f++)e=i(e,u(c[f]));return e}function m(a,b,c,d){for(var e=0,f=a.length;e<f;e++){var g=a[e];if(c.hasOwnProperty(g)){var h=c[g];b[g]=d?b.get(g):h}}}function p(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d="_onChange"+k(c);a[d]&&a.on("change:"+c,a[d])}}function q(a,b){for(var c in b)if(b.hasOwnProperty(c)){var d=b[c].value,e;f(d)&&(e=c.match(n))&&(a[e[1]](r(e[2]),d),delete b[c])}}function r(a){var b=a.match(o),c=b[1]?"change:":"";return c+=b[2].toLowerCase()+b[3],c}function s(a,b,c){var d={silent:!0};a.__initializingAttrs=!0;for(var e in c)c.hasOwnProperty(e)&&b[e]&&b[e].setter&&a.set(e,c[e].value,d);delete a.__initializingAttrs}function u(a){a=i({},a);for(var b in a){var c=a[b];if(g(c)&&v(c,t))continue;a[b]={value:c}}return a}function v(a,b){for(var c=0,d=b.length;c<d;c++)if(a.hasOwnProperty(b[c]))return!0;return!1}function w(a){return a==null||(e(a)||d(a))&&a.length===0||g(a)&&h(a)}function x(a,b){if(a===b)return!0;if(w(a)&&w(b))return!0;var d=c.call(a);if(d!=c.call(b))return!1;switch(d){case"[object String]":return a==String(b);case"[object Number]":return a!=+a?b!=+b:a==0?1/a==1/b:a==+b;case"[object Date]":case"[object Boolean]":return+a==+b;case"[object RegExp]":return a.source==b.source&&a.global==b.global&&a.multiline==b.multiline&&a.ignoreCase==b.ignoreCase;case"[object Array]":var e=a.toString(),f=b.toString();return e.indexOf("[object")===-1&&f.indexOf("[object")===-1&&e===f}if(typeof a!="object"||typeof b!="object")return!1;if(g(a)&&g(b)){if(!x(j(a),j(b)))return!1;for(var h in a)if(a[h]!==b[h])return!1;return!0}return!1}b.initAttrs=function(a,b){b&&(a=a?i(b,a):b);var c=this.propsInAttrs||[],d,e,f;e=l(this,c),d=i({},e),a&&(f=u(a),i(d,f)),p(this,d),q(this,d),this.attrs=d,s(this,d,f),m(c,this,this.attrs,!0)},b.get=function(a){var b=this.attrs[a]||{},c=b.value;return b.getter?b.getter.call(this,c,a):c},b.set=function(a,b,c){var d={};e(a)?d[a]=b:(d=a,c=b),c||(c={});var f=c.silent,h=this.attrs,j=this.__changedAttrs||(this.__changedAttrs={});for(a in d){if(!d.hasOwnProperty(a))continue;var k=h[a]||(h[a]={});b=d[a];if(k.readOnly)throw"This attribute is readOnly: "+a;if(k.validator){var l=k.validator.call(this,b,a);if(l!==!0){c.error&&c.error.call(this,l);continue}}k.setter&&(b=k.setter.call(this,b,a));var m=this.get(a);g(m)&&g(b)&&(b=i(i({},m),b)),h[a].value=b,!this.__initializingAttrs&&!x(m,b)&&(f?j[a]=[b,m]:this.trigger("change:"+a,b,m,a))}return this},b.change=function(){var a=this.__changedAttrs;if(a){for(var b in a)if(a.hasOwnProperty(b)){var c=a[b];this.trigger("change:"+b,c[0],c[1],b)}delete this.__changedAttrs}return this};var c=Object.prototype.toString,d=Array.isArray||function(a){return c.call(a)==="[object Array]"},j=Object.keys;j||(j=function(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c);return b});var n=/^(on|before|after)([A-Z].*)$/,o=/^(Change)?([A-Z])(.*)/,t=["value","getter","setter","validator","readOnly"]});
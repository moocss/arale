define("#iframe-shim/0.9.1/iframe-shim",["jquery","position"],function(a,b,c){function f(a){this.target=d(a).eq(0)}function h(){return d("<iframe>",{src:"javascript:",frameborder:0,css:{display:"none",border:"none",opacity:0,position:"absolute"}}).appendTo(document.body)}var d=a("jquery"),e=a("position");f.prototype.sync=function(){var a=this.target,b=this.iframe,c=a.outerHeight(),d=a.outerWidth();return!c||!d||a.is(":hidden")?b&&b.hide():(b||(b=this.iframe=h()),b.css({height:c,width:d,zIndex:parseInt(a.css("zIndex"))-1||0}),e.pin(b[0],a[0]),b.show()),this},f.prototype.destroy=function(){this.iframe&&(this.iframe.remove(),delete this.iframe),delete this.target};if(d.browser.msie&&d.browser.version==6)c.exports=f;else{function g(){}g.prototype.sync=g,g.prototype.destroy=g,c.exports=g}});
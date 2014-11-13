(function(u){var v,B={},A={16:false,18:false,17:false,91:false},r="all",e={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},f={backspace:8,tab:9,clear:12,enter:13,"return":13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,"delete":46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},a=function(k){return f[k]||k.toUpperCase().charCodeAt(0)},x=[];for(v=1;v<20;v++){f["f"+v]=111+v}function h(F,E){var k=F.length;while(k--){if(F[k]===E){return k}}return -1}function y(E,k){if(E.length!=k.length){return false}for(var F=0;F<E.length;F++){if(E[F]!==k[F]){return false}}return true}var q={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function i(k){for(v in A){A[v]=k[q[v]]}}function C(J){var G,I,E,F,K,H;G=J.keyCode;if(h(x,G)==-1){x.push(G)}if(G==93||G==224){G=91}if(G in A){A[G]=true;for(E in e){if(e[E]==G){g[E]=true}}return}i(J);if(!g.filter.call(this,J)){return}if(!(G in B)){return}H=n();for(F=0;F<B[G].length;F++){I=B[G][F];if(I.scope==H||I.scope=="all"){K=I.mods.length>0;for(E in A){if((!A[E]&&h(I.mods,+E)>-1)||(A[E]&&h(I.mods,+E)==-1)){K=false}}if((I.mods.length==0&&!A[16]&&!A[18]&&!A[17]&&!A[91])||K){if(I.method(J,I)===false){if(J.preventDefault){J.preventDefault()}else{J.returnValue=false}if(J.stopPropagation){J.stopPropagation()}if(J.cancelBubble){J.cancelBubble=true}}}}}}function d(H){var G=H.keyCode,E,F=h(x,G);if(F>=0){x.splice(F,1)}if(G==93||G==224){G=91}if(G in A){A[G]=false;for(E in e){if(e[E]==G){g[E]=false}}}}function j(){for(v in A){A[v]=false}for(v in e){g[v]=false}}function g(E,F,I){var H,G;H=b(E);if(I===undefined){I=F;F="all"}for(var k=0;k<H.length;k++){G=[];E=H[k].split("+");if(E.length>1){G=w(E);E=[E[E.length-1]]}E=E[0];E=a(E);if(!(E in B)){B[E]=[]}B[E].push({shortcut:H[k],scope:F,method:I,key:H[k],mods:G})}}function z(G,H){var k,J,I=[],F,E,K;k=b(G);for(E=0;E<k.length;E++){J=k[E].split("+");if(J.length>1){I=w(J)}G=J[J.length-1];G=a(G);if(H===undefined){H=n()}if(!B[G]){return}for(F=0;F<B[G].length;F++){K=B[G][F];if(K.scope===H&&y(K.mods,I)){B[G][F]={}}}}}function c(k){if(typeof(k)=="string"){k=a(k)}return h(x,k)!=-1}function p(){return x.slice(0)}function l(E){var k=(E.target||E.srcElement).tagName;return !(k=="INPUT"||k=="SELECT"||k=="TEXTAREA")}for(v in e){g[v]=false}function m(k){r=k||"all"}function n(){return r||"all"}function s(G){var F,k,E;for(F in B){k=B[F];for(E=0;E<k.length;){if(k[E].scope===G){k.splice(E,1)}else{E++}}}}function b(k){var E;k=k.replace(/\s/g,"");E=k.split(",");if((E[E.length-1])==""){E[E.length-2]+=","}return E}function w(E){var F=E.slice(0,E.length-1);for(var k=0;k<F.length;k++){F[k]=e[F[k]]}return F}function t(k,E,F){if(k.addEventListener){k.addEventListener(E,F,false)}else{if(k.attachEvent){k.attachEvent("on"+E,function(){F(window.event)})}}}t(document,"keydown",function(k){C(k)});t(document,"keyup",d);t(window,"focus",j);var o=u.key;function D(){var E=u.key;u.key=o;return E}u.key=g;u.key.setScope=m;u.key.getScope=n;u.key.deleteScope=s;u.key.filter=l;u.key.isPressed=c;u.key.getPressedKeyCodes=p;u.key.noConflict=D;u.key.unbind=z;if(typeof module!=="undefined"){module.exports=g}})(this);(function(){var d={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:l,hr:/^( *[-*_]){3,} *(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:l,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,blockquote:/^( *>[^\n]+(\n(?!def)[^\n]+)*\n*)+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +["(]([^\n]+)[")])? *(?:\n+|$)/,table:l,paragraph:/^((?:[^\n]+\n?(?!hr|heading|lheading|blockquote|tag|def))+)\n*/,text:/^[^\n]+/};d.bullet=/(?:[*+-]|\d+\.)/;d.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/;d.item=c(d.item,"gm")(/bull/g,d.bullet)();d.list=c(d.list)(/bull/g,d.bullet)("hr","\\n+(?=\\1?(?:[-*_] *){3,}(?:\\n+|$))")("def","\\n+(?="+d.def.source+")")();d.blockquote=c(d.blockquote)("def",d.def)();d._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:/|[^\\w\\s@]*@)\\b";d.html=c(d.html)("comment",/<!--[\s\S]*?-->/)("closed",/<(tag)[\s\S]+?<\/\1>/)("closing",/<tag(?:"[^"]*"|'[^']*'|[^'">])*?>/)(/tag/g,d._tag)();d.paragraph=c(d.paragraph)("hr",d.hr)("heading",d.heading)("lheading",d.lheading)("blockquote",d.blockquote)("tag","<"+d._tag)("def",d.def)();d.normal=i({},d);d.gfm=i({},d.normal,{fences:/^ *(`{3,}|~{3,}) *(\S+)? *\n([\s\S]+?)\s*\1 *(?:\n+|$)/,paragraph:/^/});d.gfm.paragraph=c(d.paragraph)("(?!","(?!"+d.gfm.fences.source.replace("\\1","\\2")+"|"+d.list.source.replace("\\1","\\3")+"|")();d.tables=i({},d.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/});function b(m){this.tokens=[];this.tokens.links={};this.options=m||a.defaults;this.rules=d.normal;if(this.options.gfm){if(this.options.tables){this.rules=d.tables}else{this.rules=d.gfm}}}b.rules=d;b.lex=function(o,m){var n=new b(m);return n.lex(o)};b.prototype.lex=function(m){m=m.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n");return this.token(m,true)};b.prototype.token=function(n,t,x){var n=n.replace(/^ +$/gm,""),r,p,v,s,u,w,m,q,o;while(n){if(v=this.rules.newline.exec(n)){n=n.substring(v[0].length);if(v[0].length>1){this.tokens.push({type:"space"})}}if(v=this.rules.code.exec(n)){n=n.substring(v[0].length);v=v[0].replace(/^ {4}/gm,"");this.tokens.push({type:"code",text:!this.options.pedantic?v.replace(/\n+$/,""):v});continue}if(v=this.rules.fences.exec(n)){n=n.substring(v[0].length);this.tokens.push({type:"code",lang:v[2],text:v[3]});continue}if(v=this.rules.heading.exec(n)){n=n.substring(v[0].length);this.tokens.push({type:"heading",depth:v[1].length,text:v[2]});continue}if(t&&(v=this.rules.nptable.exec(n))){n=n.substring(v[0].length);w={type:"table",header:v[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:v[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:v[3].replace(/\n$/,"").split("\n")};for(q=0;q<w.align.length;q++){if(/^ *-+: *$/.test(w.align[q])){w.align[q]="right"}else{if(/^ *:-+: *$/.test(w.align[q])){w.align[q]="center"}else{if(/^ *:-+ *$/.test(w.align[q])){w.align[q]="left"}else{w.align[q]=null}}}}for(q=0;q<w.cells.length;q++){w.cells[q]=w.cells[q].split(/ *\| */)}this.tokens.push(w);continue}if(v=this.rules.lheading.exec(n)){n=n.substring(v[0].length);this.tokens.push({type:"heading",depth:v[2]==="="?1:2,text:v[1]});continue}if(v=this.rules.hr.exec(n)){n=n.substring(v[0].length);this.tokens.push({type:"hr"});continue}if(v=this.rules.blockquote.exec(n)){n=n.substring(v[0].length);this.tokens.push({type:"blockquote_start"});v=v[0].replace(/^ *> ?/gm,"");this.token(v,t,true);this.tokens.push({type:"blockquote_end"});continue}if(v=this.rules.list.exec(n)){n=n.substring(v[0].length);s=v[2];this.tokens.push({type:"list_start",ordered:s.length>1});v=v[0].match(this.rules.item);r=false;o=v.length;q=0;for(;q<o;q++){w=v[q];m=w.length;w=w.replace(/^ *([*+-]|\d+\.) +/,"");if(~w.indexOf("\n ")){m-=w.length;w=!this.options.pedantic?w.replace(new RegExp("^ {1,"+m+"}","gm"),""):w.replace(/^ {1,4}/gm,"")}if(this.options.smartLists&&q!==o-1){u=d.bullet.exec(v[q+1])[0];if(s!==u&&!(s.length>1&&u.length>1)){n=v.slice(q+1).join("\n")+n;q=o-1}}p=r||/\n\n(?!\s*$)/.test(w);if(q!==o-1){r=w.charAt(w.length-1)==="\n";if(!p){p=r}}this.tokens.push({type:p?"loose_item_start":"list_item_start"});this.token(w,false,x);this.tokens.push({type:"list_item_end"})}this.tokens.push({type:"list_end"});continue}if(v=this.rules.html.exec(n)){n=n.substring(v[0].length);this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:v[1]==="pre"||v[1]==="script"||v[1]==="style",text:v[0]});continue}if((!x&&t)&&(v=this.rules.def.exec(n))){n=n.substring(v[0].length);this.tokens.links[v[1].toLowerCase()]={href:v[2],title:v[3]};continue}if(t&&(v=this.rules.table.exec(n))){n=n.substring(v[0].length);w={type:"table",header:v[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:v[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:v[3].replace(/(?: *\| *)?\n$/,"").split("\n")};for(q=0;q<w.align.length;q++){if(/^ *-+: *$/.test(w.align[q])){w.align[q]="right"}else{if(/^ *:-+: *$/.test(w.align[q])){w.align[q]="center"}else{if(/^ *:-+ *$/.test(w.align[q])){w.align[q]="left"}else{w.align[q]=null}}}}for(q=0;q<w.cells.length;q++){w.cells[q]=w.cells[q].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */)}this.tokens.push(w);continue}if(t&&(v=this.rules.paragraph.exec(n))){n=n.substring(v[0].length);this.tokens.push({type:"paragraph",text:v[1].charAt(v[1].length-1)==="\n"?v[1].slice(0,-1):v[1]});continue}if(v=this.rules.text.exec(n)){n=n.substring(v[0].length);this.tokens.push({type:"text",text:v[0]});continue}if(n){throw new Error("Infinite loop on byte: "+n.charCodeAt(0))}}return this.tokens};var h={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<([^ >]+(@|:\/)[^ >]+)>/,url:l,tag:/^<!--[\s\S]*?-->|^<\/?\w+(?:"[^"]*"|'[^']*'|[^'">])*?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\]]*\]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^\b_((?:__|[\s\S])+?)_\b|^\*((?:\*\*|[\s\S])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:l,text:/^[\s\S]+?(?=[\\<!\[_*`]| {2,}\n|$)/};h._inside=/(?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*/;h._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/;h.link=c(h.link)("inside",h._inside)("href",h._href)();h.reflink=c(h.reflink)("inside",h._inside)();h.normal=i({},h);h.pedantic=i({},h.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/});h.gfm=i({},h.normal,{escape:c(h.escape)("])","~|])")(),url:/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:c(h.text)("]|","~]|")("|","|https?://|")()});h.breaks=i({},h.gfm,{br:c(h.br)("{2,}","*")(),text:c(h.gfm.text)("{2,}","*")()});function j(m,n){this.options=n||a.defaults;this.links=m;this.rules=h.normal;this.renderer=this.options.renderer||new f;this.renderer.options=this.options;if(!this.links){throw new Error("Tokens array requires a `links` property.")}if(this.options.gfm){if(this.options.breaks){this.rules=h.breaks}else{this.rules=h.gfm}}else{if(this.options.pedantic){this.rules=h.pedantic}}}j.rules=h;j.output=function(p,m,n){var o=new j(m,n);return o.output(p)};j.prototype.output=function(r){var n="",p,q,m,o;while(r){if(o=this.rules.escape.exec(r)){r=r.substring(o[0].length);n+=o[1];continue}if(o=this.rules.autolink.exec(r)){r=r.substring(o[0].length);if(o[2]==="@"){q=o[1].charAt(6)===":"?this.mangle(o[1].substring(7)):this.mangle(o[1]);m=this.mangle("mailto:")+q}else{q=k(o[1]);m=q}n+=this.renderer.link(m,null,q);continue}if(!this.inLink&&(o=this.rules.url.exec(r))){r=r.substring(o[0].length);q=k(o[1]);m=q;n+=this.renderer.link(m,null,q);continue}if(o=this.rules.tag.exec(r)){if(!this.inLink&&/^<a /i.test(o[0])){this.inLink=true}else{if(this.inLink&&/^<\/a>/i.test(o[0])){this.inLink=false}}r=r.substring(o[0].length);n+=this.options.sanitize?k(o[0]):o[0];continue}if(o=this.rules.link.exec(r)){r=r.substring(o[0].length);this.inLink=true;n+=this.outputLink(o,{href:o[2],title:o[3]});this.inLink=false;continue}if((o=this.rules.reflink.exec(r))||(o=this.rules.nolink.exec(r))){r=r.substring(o[0].length);p=(o[2]||o[1]).replace(/\s+/g," ");p=this.links[p.toLowerCase()];if(!p||!p.href){n+=o[0].charAt(0);r=o[0].substring(1)+r;continue}this.inLink=true;n+=this.outputLink(o,p);this.inLink=false;continue}if(o=this.rules.strong.exec(r)){r=r.substring(o[0].length);n+=this.renderer.strong(this.output(o[2]||o[1]));continue}if(o=this.rules.em.exec(r)){r=r.substring(o[0].length);n+=this.renderer.em(this.output(o[2]||o[1]));continue}if(o=this.rules.code.exec(r)){r=r.substring(o[0].length);n+=this.renderer.codespan(k(o[2],true));continue}if(o=this.rules.br.exec(r)){r=r.substring(o[0].length);n+=this.renderer.br();continue}if(o=this.rules.del.exec(r)){r=r.substring(o[0].length);n+=this.renderer.del(this.output(o[1]));continue}if(o=this.rules.text.exec(r)){r=r.substring(o[0].length);n+=k(this.smartypants(o[0]));continue}if(r){throw new Error("Infinite loop on byte: "+r.charCodeAt(0))}}return n};j.prototype.outputLink=function(n,o){var m=k(o.href),p=o.title?k(o.title):null;return n[0].charAt(0)!=="!"?this.renderer.link(m,p,this.output(n[1])):this.renderer.image(m,p,k(n[1]))};j.prototype.smartypants=function(m){if(!this.options.smartypants){return m}return m.replace(/--/g,"\u2014").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1\u2018").replace(/'/g,"\u2019").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1\u201c").replace(/"/g,"\u201d").replace(/\.{3}/g,"\u2026")};j.prototype.mangle=function(q){var n="",m=q.length,o=0,p;for(;o<m;o++){p=q.charCodeAt(o);if(Math.random()>0.5){p="x"+p.toString(16)}n+="&#"+p+";"}return n};function f(m){this.options=m||{}}f.prototype.code=function(n,p,o){if(this.options.highlight){var m=this.options.highlight(n,p);if(m!=null&&m!==n){o=true;n=m}}if(!p){return"<pre><code>"+(o?n:k(n,true))+"\n</code></pre>"}return'<pre><code class="'+this.options.langPrefix+k(p,true)+'">'+(o?n:k(n,true))+"\n</code></pre>\n"};f.prototype.blockquote=function(m){return"<blockquote>\n"+m+"</blockquote>\n"};f.prototype.html=function(m){return m};f.prototype.heading=function(n,o,m){return"<h"+o+' id="'+this.options.headerPrefix+m.toLowerCase().replace(/[^\w]+/g,"-")+'">'+n+"</h"+o+">\n"};f.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"};f.prototype.list=function(m,n){var o=n?"ol":"ul";return"<"+o+">\n"+m+"</"+o+">\n"};f.prototype.listitem=function(m){return"<li>"+m+"</li>\n"};f.prototype.paragraph=function(m){return"<p>"+m+"</p>\n"};f.prototype.table=function(n,m){return"<table>\n<thead>\n"+n+"</thead>\n<tbody>\n"+m+"</tbody>\n</table>\n"};f.prototype.tablerow=function(m){return"<tr>\n"+m+"</tr>\n"};f.prototype.tablecell=function(p,n){var o=n.header?"th":"td";var m=n.align?"<"+o+' style="text-align:'+n.align+'">':"<"+o+">";return m+p+"</"+o+">\n"};f.prototype.strong=function(m){return"<strong>"+m+"</strong>"};f.prototype.em=function(m){return"<em>"+m+"</em>"};f.prototype.codespan=function(m){return"<code>"+m+"</code>"};f.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"};f.prototype.del=function(m){return"<del>"+m+"</del>"};f.prototype.link=function(m,r,q){if(this.options.sanitize){try{var o=decodeURIComponent(g(m)).replace(/[^\w:]/g,"").toLowerCase()}catch(p){return""}if(o.indexOf("javascript:")===0){return""}}var n='<a href="'+m+'"';if(r){n+=' title="'+r+'"'}n+=">"+q+"</a>";return n};f.prototype.image=function(m,p,o){var n='<img src="'+m+'" alt="'+o+'"';if(p){n+=' title="'+p+'"'}n+=this.options.xhtml?"/>":">";return n};function e(m){this.tokens=[];this.token=null;this.options=m||a.defaults;this.options.renderer=this.options.renderer||new f;this.renderer=this.options.renderer;this.renderer.options=this.options}e.parse=function(o,m,n){var p=new e(m,n);return p.parse(o)};e.prototype.parse=function(n){this.inline=new j(n.links,this.options,this.renderer);this.tokens=n.reverse();var m="";while(this.next()){m+=this.tok()}return m};e.prototype.next=function(){return this.token=this.tokens.pop()};e.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0};e.prototype.parseText=function(){var m=this.token.text;while(this.peek().type==="text"){m+="\n"+this.next().text}return this.inline.output(m)};e.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,this.token.text);case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var q="",s="",o,u,t,m,n;t="";for(o=0;o<this.token.header.length;o++){m={header:true,align:this.token.align[o]};t+=this.renderer.tablecell(this.inline.output(this.token.header[o]),{header:true,align:this.token.align[o]})}q+=this.renderer.tablerow(t);for(o=0;o<this.token.cells.length;o++){u=this.token.cells[o];t="";for(n=0;n<u.length;n++){t+=this.renderer.tablecell(this.inline.output(u[n]),{header:false,align:this.token.align[n]})}s+=this.renderer.tablerow(t)}return this.renderer.table(q,s);case"blockquote_start":var s="";while(this.next().type!=="blockquote_end"){s+=this.tok()}return this.renderer.blockquote(s);case"list_start":var s="",r=this.token.ordered;while(this.next().type!=="list_end"){s+=this.tok()}return this.renderer.list(s,r);case"list_item_start":var s="";while(this.next().type!=="list_item_end"){s+=this.token.type==="text"?this.parseText():this.tok()}return this.renderer.listitem(s);case"loose_item_start":var s="";while(this.next().type!=="list_item_end"){s+=this.tok()}return this.renderer.listitem(s);case"html":var p=!this.token.pre&&!this.options.pedantic?this.inline.output(this.token.text):this.token.text;return this.renderer.html(p);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};function k(m,n){return m.replace(!n?/&(?!#?\w+;)/g:/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function g(m){return m.replace(/&([#\w]+);/g,function(o,p){p=p.toLowerCase();if(p==="colon"){return":"}if(p.charAt(0)==="#"){return p.charAt(1)==="x"?String.fromCharCode(parseInt(p.substring(2),16)):String.fromCharCode(+p.substring(1))}return""})}function c(o,n){o=o.source;n=n||"";return function m(p,q){if(!p){return new RegExp(o,n)}q=q.source||q;q=q.replace(/(^|[^\[])\^/g,"$1");o=o.replace(p,q);return m}}function l(){}l.exec=l;function i(p){var n=1,o,m;for(;n<arguments.length;n++){o=arguments[n];for(m in o){if(Object.prototype.hasOwnProperty.call(o,m)){p[m]=o[m]}}}return p}function a(m,o,u){if(u||typeof o==="function"){if(!u){u=o;o=null}o=i({},a.defaults,o||{});var p=o.highlight,t,n,r=0;try{t=b.lex(m,o)}catch(s){return u(s)}n=t.length;var q=function(w){if(w){o.highlight=p;return u(w)}var v;try{v=e.parse(t,o)}catch(x){w=x}o.highlight=p;return w?u(w):u(null,v)};if(!p||p.length<3){return q()}delete o.highlight;if(!n){return q()}for(;r<t.length;r++){(function(v){if(v.type!=="code"){return --n||q()}return p(v.text,v.lang,function(x,w){if(x){return q(x)}if(w==null||w===v.text){return --n||q()}v.text=w;v.escaped=true;--n||q()})})(t[r])}return}try{if(o){o=i({},a.defaults,o)}return e.parse(b.lex(m,o),o)}catch(s){s.message+="\nPlease report this to https://github.com/chjj/marked.";if((o||a.defaults).silent){return"<p>An error occured:</p><pre>"+k(s.message+"",true)+"</pre>"}throw s}}a.options=a.setOptions=function(m){i(a.defaults,m);return a};a.defaults={gfm:true,tables:true,breaks:false,pedantic:false,sanitize:false,smartLists:false,silent:false,highlight:null,langPrefix:"lang-",smartypants:false,headerPrefix:"",renderer:new f,xhtml:false};a.Parser=e;a.parser=e.parse;a.Renderer=f;a.Lexer=b;a.lexer=b.lex;a.InlineLexer=j;a.inlineLexer=j.output;a.parse=a;if(typeof module!=="undefined"&&typeof exports==="object"){module.exports=a}else{if(typeof define==="function"&&define.amd){define(function(){return a})}else{this.marked=a}}}).call(function(){return this||(typeof window!=="undefined"?window:global)}());!function(b){if("object"==typeof exports&&"undefined"!=typeof module){module.exports=b()}else{if("function"==typeof define&&define.amd){define([],b)}else{var a;"undefined"!=typeof window?a=window:"undefined"!=typeof global?a=global:"undefined"!=typeof self&&(a=self),a.page=b()}}}(function(){var d,b,a;return(function c(f,k,h){function g(n,l){if(!k[n]){if(!f[n]){var i=typeof require=="function"&&require;if(!l&&i){return i(n,!0)}if(e){return e(n,!0)}throw new Error("Cannot find module '"+n+"'")}var m=k[n]={exports:{}};f[n][0].call(m.exports,function(o){var p=f[n][1][o];return g(p?p:o)},m,m.exports,c,f,k,h)}return k[n].exports}var e=typeof require=="function"&&require;for(var j=0;j<h.length;j++){g(h[j])}return g})({1:[function(g,h,j){var o=g("path-to-regexp");h.exports=q;var t=window.history.location||window.location;var p=true;var f="";var m;var e=false;function q(y,x){if("function"==typeof y){return q("*",y)}if("function"==typeof x){var v=new n(y);for(var w=1;w<arguments.length;++w){q.callbacks.push(v.middleware(arguments[w]))}}else{if("string"==typeof y){q.show(y,x)}else{q.start(y)}}}q.callbacks=[];q.base=function(v){if(0===arguments.length){return f}f=v};q.start=function(w){w=w||{};if(m){return}m=true;if(false===w.dispatch){p=false}if(false!==w.popstate){window.addEventListener("popstate",r,false)}if(false!==w.click){window.addEventListener("click",u,false)}if(true===w.hashbang){e=true}if(!p){return}var v=(e&&t.hash.indexOf("#!")===0)?t.hash.substr(2)+t.search:t.pathname+t.search+t.hash;q.replace(v,null,true,p)};q.stop=function(){m=false;removeEventListener("click",u,false);removeEventListener("popstate",r,false)};q.show=function(y,x,w){var v=new s(y,x);v.pushState();if(false!==w){q.dispatch(v)}return v};q.replace=function(y,x,z,w){var v=new s(y,x);v.init=z;v.save();if(false!==w){q.dispatch(v)}return v};q.dispatch=function(v){var w=0;function x(){var y=q.callbacks[w++];if(!y){return k(v)}y(v,x)}x()};function k(v){q.stop();v.unhandled=true;t.href=v.canonicalPath}function s(y,w){if("/"===y[0]&&0!==y.indexOf(f)){y=f+y}var v=y.indexOf("?");this.canonicalPath=y;this.path=y.replace(f,"")||"/";this.title=document.title;this.state=w||{};this.state.path=y;this.querystring=~v?y.slice(v+1):"";this.pathname=~v?y.slice(0,v):y;this.params=[];this.hash="";if(!~this.path.indexOf("#")){return}var x=this.path.split("#");this.path=x[0];this.hash=x[1]||"";this.querystring=this.querystring.split("#")[0]}q.Context=s;s.prototype.pushState=function(){history.pushState(this.state,this.title,e&&this.canonicalPath!=="/"?"#!"+this.canonicalPath:this.canonicalPath)};s.prototype.save=function(){history.replaceState(this.state,this.title,e&&this.canonicalPath!=="/"?"#!"+this.canonicalPath:this.canonicalPath)};function n(w,v){v=v||{};this.path=(w==="*")?"(.*)":w;this.method="GET";this.regexp=o(this.path,this.keys=[],v.sensitive,v.strict)}q.Route=n;n.prototype.middleware=function(w){var v=this;return function(x,y){if(v.match(x.path,x.params)){return w(x,y)}y()}};n.prototype.match=function(D,y){var C=this.keys,E=D.indexOf("?"),v=~E?D.slice(0,E):D,x=this.regexp.exec(decodeURIComponent(v));if(!x){return false}for(var z=1,A=x.length;z<A;++z){var B=C[z-1];var w="string"==typeof x[z]?decodeURIComponent(x[z]):x[z];if(B){y[B.name]=undefined!==y[B.name]?y[B.name]:w}else{y.push(w)}}return true};function r(w){if(w.state){var v=w.state.path;q.replace(v,w.state)}}function u(y){if(1!=i(y)){return}if(y.metaKey||y.ctrlKey||y.shiftKey){return}if(y.defaultPrevented){return}var v=y.target;while(v&&"A"!=v.nodeName){v=v.parentNode}if(!v||"A"!=v.nodeName){return}var w=v.getAttribute("href");if(v.pathname==t.pathname&&(v.hash||"#"==w)){return}if(w&&w.indexOf("mailto:")>-1){return}if(v.target){return}if(!l(v.href)){return}var x=v.pathname+v.search+(v.hash||"");var z=x+v.hash;x=x.replace(f,"");if(f&&z==x){return}y.preventDefault();q.show(z)}function i(v){v=v||window.event;return null===v.which?v.button:v.which}function l(w){var v=t.protocol+"//"+t.hostname;if(t.port){v+=":"+t.port}return(w&&(0===w.indexOf(v)))}q.sameOrigin=l},{"path-to-regexp":2}],2:[function(j,h,f){h.exports=i;var g=new RegExp(["(\\\\.)","([\\/.])?(?:\\:(\\w+)(?:\\(((?:\\\\.|[^)])*)\\))?|\\(((?:\\\\.|[^)])*)\\))([+*?])?","([.+*?=^!:${}()[\\]|\\/])"].join("|"),"g");function k(l){return l.replace(/([=!:$\/()])/g,"\\$1")}var e=function(l,m){l.keys=m;return l};function i(s,r,t){if(r&&!Array.isArray(r)){t=r;r=null}r=r||[];t=t||{};var p=t.strict;var n=t.end!==false;var l=t.sensitive?"":"i";var o=0;if(s instanceof RegExp){var m=s.source.match(/\((?!\?)/g)||[];r.push.apply(r,m.map(function(v,u){return{name:u,delimiter:null,optional:false,repeat:false}}));return e(s,r)}if(Array.isArray(s)){s=s.map(function(u){return i(u,r,t).source});return e(new RegExp("(?:"+s.join("|")+")",l),r)}s=s.replace(g,function(w,u,x,A,D,z,B,C){if(u){return u}if(C){return"\\"+C}var v=B==="+"||B==="*";var y=B==="?"||B==="*";r.push({name:A||o++,delimiter:x||"/",optional:y,repeat:v});x=x?"\\"+x:"";D=k(D||z||"[^"+(x||"\\/")+"]+?");if(v){D=D+"(?:"+x+D+")*"}if(y){return"(?:"+x+"("+D+"))?"}return x+"("+D+")"});var q=s[s.length-1]==="/";if(!p){s=(q?s.slice(0,-2):s)+"(?:\\/(?=$))?"}if(!n){s+=p&&q?"":"(?=\\/|$)"}return e(new RegExp("^"+s+(n?"$":""),l),r)}},{}]},{},[1])(1)});

State = {}
Setting = {}
Setting.lbKey = 'asdqwerzxcvjkl;'
Setting.linkKey = 'asdfqwerzxcvjkl;uiop,.m/0123456789'
Links=[]
$ = function(s) {
	return document.querySelector(s)
}
$$ = function(s) {
	return document.querySelectorAll(s)
}
$isStr = function(v) {
	return typeof v == 'string'
}
$ca = function(a, b) {
	if ($isStr(a)) a = $(a)
	a.classList.add(b)
}
$cr = function(a, b) {
	if ($isStr(a)) a = $(a)
	a.classList.remove(b)
}
$e = function(tag, text, id, clas, attr) {
		id = id ? ' id=' + id : ''
		clas = clas ? ' class=' + clas : ''
		attr = attr ? ' ' + attr : ''
		return '<' + tag + id + clas + attr + '>' + text
	}
$elc = function(text, clas, attr) {
		return $e('li', text, '', clas, attr)
	}
$each = function(array, callback, scope) {
	for (var i = 0; i < array.length; i++) {
		callback.call(scope, array[i], i)
	}
}
$agen = function(method, fn,accept) {
	return function(url, data) {
		return function(callback) {
			var request = new XMLHttpRequest()
			request.onload = function() {
				if(callback){
					res = fn ? fn(request.responseText) : request.responseText
					callback(res)
				}
			}
			request.open(method, url)
			if(accept){
				request.setRequestHeader('Accept',accept)
			}
			request.send(JSON.stringify(data))
		}
	}
}
$agh = $agen('get',undefined,'application/vnd.github.VERSION.html')
$agr = $agen('get',undefined,'application/vnd.github.VERSION.raw')
$agj = $agen('get',JSON.parse)
(function() {
  var routes = {
    '/:article': showArticle,
    '/': index
  }
  function* index(c) {
    key.setScope('write')
    if (!c.state.ul1) {
      c.state.ul1 =
        yield $agj('https:/api.github.com/repos/Errenson/static-blog-posts/contents/时间管理')
      c.state.ul2 =
        yield $agj('https:/api.github.com/repos/Errenson/static-blog-posts/contents/环境搭建')
      c.state.ul3 =
        yield $agj('https:/api.github.com/repos/Errenson/static-blog-posts/contents/Programming')
      c.state.article =
        yield $agr('https:/api.github.com/repos/Errenson/static-blog-posts/readme')
      addLeftbar(c.state.ul1, 1)
      addLeftbar(c.state.ul2, 2)
      addLeftbar(c.state.ul3, 3)
      $each($$('leftbar li'), function(li, index) {
        li.setAttribute('keyCue', Setting.lbKey[index]);
      })
      c.save()
    }
    $('article').innerHTML = marked(c.state.article)
    document.body.scrollTop=0
  }

  function addLeftbar(arr, num) {
    $each(arr, function(obj) {
      $('#ul-' + num).innerHTML += $elc(obj.name.slice(0, -3))
    })
  }

  function* showArticle(c) {
    document.body.scrollTop=0
    document.title = c.path.substr(1)
    if (!c.state.a) {
      c.state.a =
        yield $agr('https:/api.github.com/repos/Errenson/static-blog-posts/contents/' + State.gpath + '.md')
      c.save()
    }
    $('article').innerHTML = marked(c.state.a)
  }
  for (path in routes) {
    page(path, auco(routes[path]))
  }
  page()
  function auco(g) {
    return function() {
      var i = g.apply(this, arguments)
      nextWith()

      function nextWith(returnValue) {
        var r = i.next(returnValue)
        if (!r.done) {
          r.value(nextWith)
        }
      }
    }
  }
})()
(function () {
marked.setOptions({
	breaks: true
})
kWrite={}
function leftbarKeyGen(a) {
	return function() {
		var li = $('leftbar li[keycue=' + a + ']')
		var liFocus = $('li.focus')
		if(liFocus) $cr(liFocus,'focus')
		$ca(li,'focus')

		var ulName=['','时间管理','环境搭建','Programming']
		State.gpath=ulName[li.parentElement.id.substr(-1)]+'/'+li.innerText
		page('/' + li.innerText)
	}
}
for (var i = Setting.lbKey.length; i--;) {
	var a = Setting.lbKey[i]
	kWrite[a] = leftbarKeyGen(a)
}
kWrite.f= function(e) {
		var a = $$('a')
		console.log(a);
		if (a) {
			$each(a, function(link, i) {
				link.setAttribute('keycue', Setting.linkKey[i])
				link.setAttribute('target', '_blank')
			})
			key.setScope('link')
		}
	}
kLink = {}
function cmdClick(e) {
	var evt = document.createEvent("MouseEvents");
	evt.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, true, false, false, true, 0, null)
	e.dispatchEvent(evt)
}
function linkKeyGen(a) {
	return function() {
		var li = $('a[keycue=' + a + ']')
		cmdClick(li)
	}
}
for (var i = Setting.linkKey.length; i--;) {
	var a = Setting.linkKey[i]
	kLink[a] = linkKeyGen(a)
}
kLink.esc = function() {
	key.setScope('write')
	var a = $$('a')
	if (a) {
		$each(a, function(link) {
			link.removeAttribute('keycue')
		})
	}
}
keyevents(kWrite, 'write')
keyevents(kLink, 'link')
function keyevents(map, scope) {
	if (scope) {
		for (prop in map) {
			key(prop, scope, map[prop])
		}
	} else {
		for (prop in map) {
			key(prop, map[prop])
		}
	}
}
})()
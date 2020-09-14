var e,t=require("path"),n=(e=t)&&"object"==typeof e&&"default"in e?e.default:e,i=require("mime"),r=Object.freeze({subjectType:"input",force:!1,allowEmpty:!1}),o=Object.freeze({INPUT:"input",DRAG_N_DROP:"drag-n-drop"}),s={};s[o.INPUT]=["change"],s[o.DRAG_N_DROP]=["dragstart","drag","dragenter","drop","change","dragleave","dragend"];var a={message:'"subjectType" is not valid',tip:'Please look into docs to find supported "subjectType" values'},l={message:'"force" is not valid',tip:'Please look into docs to find supported "force" values'},f={message:'"allowEmpty" is not valid',tip:'Please look into docs to find supported "allowEmpty" values'},c={message:'"file encoding" is not valid',tip:'Please look into docs to find supported "encoding" values'},p={message:'"filePath" is not valid',tip:'Please look into docs to find supported "filePath" values'},u={message:'"mimeType" is not valid',tip:'Please look into docs to find supported "mimeType" values'},m={message:"given fixture file is empty",tip:'Please make sure you provide correct file or explicitly set "allowEmpty" to true'},d={message:'missing "filePath" or "fileName"',tip:'Please make sure you are passing either "filePath" or "fileName"'},y=function(e){function t(n){for(var i=[],r=arguments.length-1;r-- >0;)i[r]=arguments[r+1];e.apply(this,i),e.captureStackTrace&&e.captureStackTrace(this,t),this.name="[cypress-file-upload error]",this.message=n.message+".\n"+n.tip}return e&&(t.__proto__=e),(t.prototype=Object.create(e&&e.prototype)).constructor=t,t}(Error),T=Object.freeze({ASCII:"ascii",BASE64:"base64",BINARY:"binary",HEX:"hex",LATIN1:"latin1",UTF8:"utf8",UTF_8:"utf-8",UCS2:"ucs2",UCS_2:"ucs-2",UTF16LE:"utf16le",UTF_16LE:"utf-16le"}),v=Object.freeze({JSON:"json",JS:"js",COFFEE:"coffee",HTML:"html",TXT:"txt",CSV:"csv",PNG:"png",JPG:"jpg",JPEG:"jpeg",GIF:"gif",TIF:"tif",TIFF:"tiff",ZIP:"zip",PDF:"pdf",VCF:"vcf",SVG:"svg",XLS:"xls",XLSX:"xlsx",DOC:"doc",DOCX:"docx",MP3:"mp3"}),g=Object.values(T),h=function(e){return e instanceof Cypress.Promise?e:(delete e.then,Cypress.Promise.resolve(e))},C={};C[T.ASCII]=function(e){return Cypress.Promise.resolve(e)},C[T.BASE64]=function(e,t){return h(Cypress.Blob.base64StringToBlob(e,t))},C[T.BINARY]=function(e,t){return h(Cypress.Blob.binaryStringToBlob(e,t))},C[T.HEX]=function(e){return Cypress.Promise.resolve(e)},C[T.LATIN1]=function(e){return Cypress.Promise.resolve(e)},C[T.UTF8]=function(e){return Cypress.Promise.resolve(e)},C[T.UTF_8]=function(e){return Cypress.Promise.resolve(e)},C[T.UCS2]=function(e){return Cypress.Promise.resolve(e)},C[T.UCS_2]=function(e){return Cypress.Promise.resolve(e)},C[T.UTF16LE]=function(e){return Cypress.Promise.resolve(e)},C[T.UTF_16LE]=function(e){return Cypress.Promise.resolve(e)};var P={};P[v.JSON]=T.UTF8,P[v.JS]=T.UTF8,P[v.COFFEE]=T.UTF8,P[v.HTML]=T.UTF8,P[v.TXT]=T.UTF8,P[v.CSV]=T.UTF8,P[v.PNG]=T.BASE64,P[v.JPG]=T.BASE64,P[v.JPEG]=T.BASE64,P[v.GIF]=T.BASE64,P[v.TIF]=T.BASE64,P[v.TIFF]=T.BASE64,P[v.ZIP]=T.BASE64,P[v.PDF]=T.UTF8,P[v.VCF]=T.UTF8,P[v.SVG]=T.UTF8,P[v.XLS]=T.BINARY,P[v.XLSX]=T.BINARY,P[v.DOC]=T.BINARY,P[v.DOCX]=T.BINARY,P[v.MP3]=T.BINARY;var w=T.UTF8;Cypress.Commands.add("attachFile",{prevSubject:!0},function(e,T,E){var b,F,S=(void 0===(b=E)&&(b={}),void 0===(F=r)&&(F={}),Object.assign({},F,b)),N=S.subjectType,I=S.force,U=S.allowEmpty;!function(e){var t=e.subjectType,n=e.force,i=e.allowEmpty;if(-1===Object.values(o).indexOf(t))throw new y(a);if("boolean"!=typeof n)throw new y(l);if("boolean"!=typeof i)throw new y(f)}({subjectType:N,force:I,allowEmpty:U});var j,A="string"==typeof(j=T)?{filePath:j,encoding:"",mimeType:"",fileName:n.basename(j)}:{filePath:j.filePath,encoding:j.encoding||"",mimeType:j.mimeType||"",fileName:j.fileName||n.basename(j.filePath),fileContent:j.fileContent};!function(e){var t=A.filePath,n=A.fileName,i=A.encoding,r=A.mimeType,o=A.fileContent;if(i&&!g.includes(i))throw new y(c);if("string"!=typeof t&&!o)throw new y(p);if("string"!=typeof r)throw new y(u);if(!t&&!n)throw new y(d)}();var O=A.filePath,B=A.encoding,_=A.fileName,x=A.mimeType||function(e){var n=t.extname(e).slice(1);return i.getType(n)}(O),L=B||function(e){var n=t.extname(e).slice(1);return P[n]||w}(O),D=I||function(e){return!("chrome"===(t=Cypress.browser).name&&t.majorVersion<73&&function(e){if(!e)throw new Error("Element cannot be empty");return Cypress.dom.isAttached(e)&&Cypress.dom.isVisible(e)}(e))||function(e){if(!e)throw new Error("Element cannot be empty");return Cypress.dom.isDetached(e)}(e);var t}(e);return Cypress.cy.window({log:!1}).then(function(n){return function(e){var t=e.filePath,n=e.fileContent,i=e.fileEncoding;return n?h(n):Cypress.cy.fixture(t,i)}({filePath:O,fileContent:A.fileContent,fileEncoding:L}).then(function(i){return function(e){var n=e.fileName,i=e.fileContent,r=e.mimeType,o=e.window;return(0,C[e.encoding])(i,r).then(function(e){var s=e;return t.extname(n).slice(1)===v.JSON&&(s=JSON.stringify(i,null,2)),new o.File([s],n,{type:r})})}({fileContent:i,fileName:_,mimeType:x,encoding:L,window:n}).then(function(t){(function(e,t){if(!t&&0===e.size)throw new y(m)})(t,U),function(e,t){var n=t.file,i=t.subjectType,r=t.force,a=new t.window.DataTransfer;if(a.items.add(n),i===o.INPUT){var l=e[0];l.files&&l.files.length>0&&Array.prototype.forEach.call(l.files,function(e){return a.items.add(e)}),l.files=a.files}if(r){var f=s[i],c={bubbles:!0,cancelable:!0,detail:a};try{f.forEach(function(t){var n=new CustomEvent(t,c);Object.assign(n,{dataTransfer:a}),e[0].dispatchEvent(n)})}catch(e){}}}(e,{file:t,subjectType:N,force:D,window:n}),Cypress.log({name:"attachFile",displayName:"FILE",message:t.name})})})}),Cypress.cy.wrap(e,{log:!1})});
//# sourceMappingURL=bundle.js.map
import{a as Ne,e as le,h as ve,j as Ie,k as Te,l as Oe}from"./chunk-ILINP27B.js";import"./chunk-NFKFJGEM.js";import"./chunk-5YHN6KDB.js";import{a as De}from"./chunk-DFOWQSZE.js";import{d as _e}from"./chunk-BX6Q2EGA.js";import"./chunk-D4IA4D73.js";import{D as M,N as me,O as ye,S as Ee,Z as oe,b as Le,c as ke,h as c,ha as j,j as L}from"./chunk-YMYRQ6W5.js";import{e as we}from"./chunk-NE7DEP4F.js";import"./chunk-337ES2G7.js";import"./chunk-OWRAVFPR.js";import{a as W,b as V,h as A}from"./chunk-FU75TI2F.js";var ce=function(){var e=c(function(O,u,s,a){for(s=s||{},a=O.length;a--;s[O[a]]=u);return s},"o"),o=[1,7],h=[1,13],l=[1,14],i=[1,15],g=[1,19],n=[1,16],b=[1,17],p=[1,18],x=[8,30],f=[8,21,28,29,30,31,32,40,44,47],m=[1,23],z=[1,24],S=[8,15,16,21,28,29,30,31,32,40,44,47],E=[8,15,16,21,27,28,29,30,31,32,40,44,47],w=[1,49],N={trace:c(function(){},"trace"),yy:{},symbols_:{error:2,spaceLines:3,SPACELINE:4,NL:5,separator:6,SPACE:7,EOF:8,start:9,BLOCK_DIAGRAM_KEY:10,document:11,stop:12,statement:13,link:14,LINK:15,START_LINK:16,LINK_LABEL:17,STR:18,nodeStatement:19,columnsStatement:20,SPACE_BLOCK:21,blockStatement:22,classDefStatement:23,cssClassStatement:24,styleStatement:25,node:26,SIZE:27,COLUMNS:28,"id-block":29,end:30,block:31,NODE_ID:32,nodeShapeNLabel:33,dirList:34,DIR:35,NODE_DSTART:36,NODE_DEND:37,BLOCK_ARROW_START:38,BLOCK_ARROW_END:39,classDef:40,CLASSDEF_ID:41,CLASSDEF_STYLEOPTS:42,DEFAULT:43,class:44,CLASSENTITY_IDS:45,STYLECLASS:46,style:47,STYLE_ENTITY_IDS:48,STYLE_DEFINITION_DATA:49,$accept:0,$end:1},terminals_:{2:"error",4:"SPACELINE",5:"NL",7:"SPACE",8:"EOF",10:"BLOCK_DIAGRAM_KEY",15:"LINK",16:"START_LINK",17:"LINK_LABEL",18:"STR",21:"SPACE_BLOCK",27:"SIZE",28:"COLUMNS",29:"id-block",30:"end",31:"block",32:"NODE_ID",35:"DIR",36:"NODE_DSTART",37:"NODE_DEND",38:"BLOCK_ARROW_START",39:"BLOCK_ARROW_END",40:"classDef",41:"CLASSDEF_ID",42:"CLASSDEF_STYLEOPTS",43:"DEFAULT",44:"class",45:"CLASSENTITY_IDS",46:"STYLECLASS",47:"style",48:"STYLE_ENTITY_IDS",49:"STYLE_DEFINITION_DATA"},productions_:[0,[3,1],[3,2],[3,2],[6,1],[6,1],[6,1],[9,3],[12,1],[12,1],[12,2],[12,2],[11,1],[11,2],[14,1],[14,4],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[13,1],[19,3],[19,2],[19,1],[20,1],[22,4],[22,3],[26,1],[26,2],[34,1],[34,2],[33,3],[33,4],[23,3],[23,3],[24,3],[25,3]],performAction:c(function(u,s,a,d,k,t,Y){var r=t.length-1;switch(k){case 4:d.getLogger().debug("Rule: separator (NL) ");break;case 5:d.getLogger().debug("Rule: separator (Space) ");break;case 6:d.getLogger().debug("Rule: separator (EOF) ");break;case 7:d.getLogger().debug("Rule: hierarchy: ",t[r-1]),d.setHierarchy(t[r-1]);break;case 8:d.getLogger().debug("Stop NL ");break;case 9:d.getLogger().debug("Stop EOF ");break;case 10:d.getLogger().debug("Stop NL2 ");break;case 11:d.getLogger().debug("Stop EOF2 ");break;case 12:d.getLogger().debug("Rule: statement: ",t[r]),typeof t[r].length=="number"?this.$=t[r]:this.$=[t[r]];break;case 13:d.getLogger().debug("Rule: statement #2: ",t[r-1]),this.$=[t[r-1]].concat(t[r]);break;case 14:d.getLogger().debug("Rule: link: ",t[r],u),this.$={edgeTypeStr:t[r],label:""};break;case 15:d.getLogger().debug("Rule: LABEL link: ",t[r-3],t[r-1],t[r]),this.$={edgeTypeStr:t[r],label:t[r-1]};break;case 18:let F=parseInt(t[r]),X=d.generateId();this.$={id:X,type:"space",label:"",width:F,children:[]};break;case 23:d.getLogger().debug("Rule: (nodeStatement link node) ",t[r-2],t[r-1],t[r]," typestr: ",t[r-1].edgeTypeStr);let H=d.edgeStrToEdgeData(t[r-1].edgeTypeStr);this.$=[{id:t[r-2].id,label:t[r-2].label,type:t[r-2].type,directions:t[r-2].directions},{id:t[r-2].id+"-"+t[r].id,start:t[r-2].id,end:t[r].id,label:t[r-1].label,type:"edge",directions:t[r].directions,arrowTypeEnd:H,arrowTypeStart:"arrow_open"},{id:t[r].id,label:t[r].label,type:d.typeStr2Type(t[r].typeStr),directions:t[r].directions}];break;case 24:d.getLogger().debug("Rule: nodeStatement (abc88 node size) ",t[r-1],t[r]),this.$={id:t[r-1].id,label:t[r-1].label,type:d.typeStr2Type(t[r-1].typeStr),directions:t[r-1].directions,widthInColumns:parseInt(t[r],10)};break;case 25:d.getLogger().debug("Rule: nodeStatement (node) ",t[r]),this.$={id:t[r].id,label:t[r].label,type:d.typeStr2Type(t[r].typeStr),directions:t[r].directions,widthInColumns:1};break;case 26:d.getLogger().debug("APA123",this?this:"na"),d.getLogger().debug("COLUMNS: ",t[r]),this.$={type:"column-setting",columns:t[r]==="auto"?-1:parseInt(t[r])};break;case 27:d.getLogger().debug("Rule: id-block statement : ",t[r-2],t[r-1]);let fe=d.generateId();this.$=V(W({},t[r-2]),{type:"composite",children:t[r-1]});break;case 28:d.getLogger().debug("Rule: blockStatement : ",t[r-2],t[r-1],t[r]);let G=d.generateId();this.$={id:G,type:"composite",label:"",children:t[r-1]};break;case 29:d.getLogger().debug("Rule: node (NODE_ID separator): ",t[r]),this.$={id:t[r]};break;case 30:d.getLogger().debug("Rule: node (NODE_ID nodeShapeNLabel separator): ",t[r-1],t[r]),this.$={id:t[r-1],label:t[r].label,typeStr:t[r].typeStr,directions:t[r].directions};break;case 31:d.getLogger().debug("Rule: dirList: ",t[r]),this.$=[t[r]];break;case 32:d.getLogger().debug("Rule: dirList: ",t[r-1],t[r]),this.$=[t[r-1]].concat(t[r]);break;case 33:d.getLogger().debug("Rule: nodeShapeNLabel: ",t[r-2],t[r-1],t[r]),this.$={typeStr:t[r-2]+t[r],label:t[r-1]};break;case 34:d.getLogger().debug("Rule: BLOCK_ARROW nodeShapeNLabel: ",t[r-3],t[r-2]," #3:",t[r-1],t[r]),this.$={typeStr:t[r-3]+t[r],label:t[r-2],directions:t[r-1]};break;case 35:case 36:this.$={type:"classDef",id:t[r-1].trim(),css:t[r].trim()};break;case 37:this.$={type:"applyClass",id:t[r-1].trim(),styleClass:t[r].trim()};break;case 38:this.$={type:"applyStyles",id:t[r-1].trim(),stylesStr:t[r].trim()};break}},"anonymous"),table:[{9:1,10:[1,2]},{1:[3]},{11:3,13:4,19:5,20:6,21:o,22:8,23:9,24:10,25:11,26:12,28:h,29:l,31:i,32:g,40:n,44:b,47:p},{8:[1,20]},e(x,[2,12],{13:4,19:5,20:6,22:8,23:9,24:10,25:11,26:12,11:21,21:o,28:h,29:l,31:i,32:g,40:n,44:b,47:p}),e(f,[2,16],{14:22,15:m,16:z}),e(f,[2,17]),e(f,[2,18]),e(f,[2,19]),e(f,[2,20]),e(f,[2,21]),e(f,[2,22]),e(S,[2,25],{27:[1,25]}),e(f,[2,26]),{19:26,26:12,32:g},{11:27,13:4,19:5,20:6,21:o,22:8,23:9,24:10,25:11,26:12,28:h,29:l,31:i,32:g,40:n,44:b,47:p},{41:[1,28],43:[1,29]},{45:[1,30]},{48:[1,31]},e(E,[2,29],{33:32,36:[1,33],38:[1,34]}),{1:[2,7]},e(x,[2,13]),{26:35,32:g},{32:[2,14]},{17:[1,36]},e(S,[2,24]),{11:37,13:4,14:22,15:m,16:z,19:5,20:6,21:o,22:8,23:9,24:10,25:11,26:12,28:h,29:l,31:i,32:g,40:n,44:b,47:p},{30:[1,38]},{42:[1,39]},{42:[1,40]},{46:[1,41]},{49:[1,42]},e(E,[2,30]),{18:[1,43]},{18:[1,44]},e(S,[2,23]),{18:[1,45]},{30:[1,46]},e(f,[2,28]),e(f,[2,35]),e(f,[2,36]),e(f,[2,37]),e(f,[2,38]),{37:[1,47]},{34:48,35:w},{15:[1,50]},e(f,[2,27]),e(E,[2,33]),{39:[1,51]},{34:52,35:w,39:[2,31]},{32:[2,15]},e(E,[2,34]),{39:[2,32]}],defaultActions:{20:[2,7],23:[2,14],50:[2,15],52:[2,32]},parseError:c(function(u,s){if(s.recoverable)this.trace(u);else{var a=new Error(u);throw a.hash=s,a}},"parseError"),parse:c(function(u){var s=this,a=[0],d=[],k=[null],t=[],Y=this.table,r="",F=0,X=0,H=0,fe=2,G=1,He=t.slice.call(arguments,1),_=Object.create(this.lexer),R={yy:{}};for(var se in this.yy)Object.prototype.hasOwnProperty.call(this.yy,se)&&(R.yy[se]=this.yy[se]);_.setInput(u,R.yy),R.yy.lexer=_,R.yy.parser=this,typeof _.yylloc>"u"&&(_.yylloc={});var re=_.yylloc;t.push(re);var Ge=_.options&&_.options.ranges;typeof R.yy.parseError=="function"?this.parseError=R.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function qe(v){a.length=a.length-2*v,k.length=k.length-v,t.length=t.length-v}c(qe,"popStack");function Se(){var v;return v=d.pop()||_.lex()||G,typeof v!="number"&&(v instanceof Array&&(d=v,v=d.pop()),v=s.symbols_[v]||v),v}c(Se,"lex");for(var D,ie,B,I,yt,ae,K={},q,C,xe,J;;){if(B=a[a.length-1],this.defaultActions[B]?I=this.defaultActions[B]:((D===null||typeof D>"u")&&(D=Se()),I=Y[B]&&Y[B][D]),typeof I>"u"||!I.length||!I[0]){var ne="";J=[];for(q in Y[B])this.terminals_[q]&&q>fe&&J.push("'"+this.terminals_[q]+"'");_.showPosition?ne="Parse error on line "+(F+1)+`:
`+_.showPosition()+`
Expecting `+J.join(", ")+", got '"+(this.terminals_[D]||D)+"'":ne="Parse error on line "+(F+1)+": Unexpected "+(D==G?"end of input":"'"+(this.terminals_[D]||D)+"'"),this.parseError(ne,{text:_.match,token:this.terminals_[D]||D,line:_.yylineno,loc:re,expected:J})}if(I[0]instanceof Array&&I.length>1)throw new Error("Parse Error: multiple actions possible at state: "+B+", token: "+D);switch(I[0]){case 1:a.push(D),k.push(_.yytext),t.push(_.yylloc),a.push(I[1]),D=null,ie?(D=ie,ie=null):(X=_.yyleng,r=_.yytext,F=_.yylineno,re=_.yylloc,H>0&&H--);break;case 2:if(C=this.productions_[I[1]][1],K.$=k[k.length-C],K._$={first_line:t[t.length-(C||1)].first_line,last_line:t[t.length-1].last_line,first_column:t[t.length-(C||1)].first_column,last_column:t[t.length-1].last_column},Ge&&(K._$.range=[t[t.length-(C||1)].range[0],t[t.length-1].range[1]]),ae=this.performAction.apply(K,[r,X,F,R.yy,I[1],k,t].concat(He)),typeof ae<"u")return ae;C&&(a=a.slice(0,-1*C*2),k=k.slice(0,-1*C),t=t.slice(0,-1*C)),a.push(this.productions_[I[1]][0]),k.push(K.$),t.push(K._$),xe=Y[a[a.length-2]][a[a.length-1]],a.push(xe);break;case 3:return!0}}return!0},"parse")},te=function(){var O={EOF:1,parseError:c(function(s,a){if(this.yy.parser)this.yy.parser.parseError(s,a);else throw new Error(s)},"parseError"),setInput:c(function(u,s){return this.yy=s||this.yy||{},this._input=u,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:c(function(){var u=this._input[0];this.yytext+=u,this.yyleng++,this.offset++,this.match+=u,this.matched+=u;var s=u.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),u},"input"),unput:c(function(u){var s=u.length,a=u.split(/(?:\r\n?|\n)/g);this._input=u+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var d=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var k=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===d.length?this.yylloc.first_column:0)+d[d.length-a.length].length-a[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[k[0],k[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},"unput"),more:c(function(){return this._more=!0,this},"more"),reject:c(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:c(function(u){this.unput(this.match.slice(u))},"less"),pastInput:c(function(){var u=this.matched.substr(0,this.matched.length-this.match.length);return(u.length>20?"...":"")+u.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:c(function(){var u=this.match;return u.length<20&&(u+=this._input.substr(0,20-u.length)),(u.substr(0,20)+(u.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:c(function(){var u=this.pastInput(),s=new Array(u.length+1).join("-");return u+this.upcomingInput()+`
`+s+"^"},"showPosition"),test_match:c(function(u,s){var a,d,k;if(this.options.backtrack_lexer&&(k={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(k.yylloc.range=this.yylloc.range.slice(0))),d=u[0].match(/(?:\r\n?|\n).*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-d[d.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+u[0].length},this.yytext+=u[0],this.match+=u[0],this.matches=u,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(u[0].length),this.matched+=u[0],a=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var t in k)this[t]=k[t];return!1}return!1},"test_match"),next:c(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var u,s,a,d;this._more||(this.yytext="",this.match="");for(var k=this._currentRules(),t=0;t<k.length;t++)if(a=this._input.match(this.rules[k[t]]),a&&(!s||a[0].length>s[0].length)){if(s=a,d=t,this.options.backtrack_lexer){if(u=this.test_match(a,k[t]),u!==!1)return u;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(u=this.test_match(s,k[d]),u!==!1?u:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:c(function(){var s=this.next();return s||this.lex()},"lex"),begin:c(function(s){this.conditionStack.push(s)},"begin"),popState:c(function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:c(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:c(function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},"topState"),pushState:c(function(s){this.begin(s)},"pushState"),stateStackSize:c(function(){return this.conditionStack.length},"stateStackSize"),options:{},performAction:c(function(s,a,d,k){var t=k;switch(d){case 0:return 10;case 1:return s.getLogger().debug("Found space-block"),31;break;case 2:return s.getLogger().debug("Found nl-block"),31;break;case 3:return s.getLogger().debug("Found space-block"),29;break;case 4:s.getLogger().debug(".",a.yytext);break;case 5:s.getLogger().debug("_",a.yytext);break;case 6:return 5;case 7:return a.yytext=-1,28;break;case 8:return a.yytext=a.yytext.replace(/columns\s+/,""),s.getLogger().debug("COLUMNS (LEX)",a.yytext),28;break;case 9:this.pushState("md_string");break;case 10:return"MD_STR";case 11:this.popState();break;case 12:this.pushState("string");break;case 13:s.getLogger().debug("LEX: POPPING STR:",a.yytext),this.popState();break;case 14:return s.getLogger().debug("LEX: STR end:",a.yytext),"STR";break;case 15:return a.yytext=a.yytext.replace(/space\:/,""),s.getLogger().debug("SPACE NUM (LEX)",a.yytext),21;break;case 16:return a.yytext="1",s.getLogger().debug("COLUMNS (LEX)",a.yytext),21;break;case 17:return 43;case 18:return"LINKSTYLE";case 19:return"INTERPOLATE";case 20:return this.pushState("CLASSDEF"),40;break;case 21:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";break;case 22:return this.popState(),this.pushState("CLASSDEFID"),41;break;case 23:return this.popState(),42;break;case 24:return this.pushState("CLASS"),44;break;case 25:return this.popState(),this.pushState("CLASS_STYLE"),45;break;case 26:return this.popState(),46;break;case 27:return this.pushState("STYLE_STMNT"),47;break;case 28:return this.popState(),this.pushState("STYLE_DEFINITION"),48;break;case 29:return this.popState(),49;break;case 30:return this.pushState("acc_title"),"acc_title";break;case 31:return this.popState(),"acc_title_value";break;case 32:return this.pushState("acc_descr"),"acc_descr";break;case 33:return this.popState(),"acc_descr_value";break;case 34:this.pushState("acc_descr_multiline");break;case 35:this.popState();break;case 36:return"acc_descr_multiline_value";case 37:return 30;case 38:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";break;case 39:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";break;case 40:return this.popState(),s.getLogger().debug("Lex: ))"),"NODE_DEND";break;case 41:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";break;case 42:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";break;case 43:return this.popState(),s.getLogger().debug("Lex: (-"),"NODE_DEND";break;case 44:return this.popState(),s.getLogger().debug("Lex: -)"),"NODE_DEND";break;case 45:return this.popState(),s.getLogger().debug("Lex: (("),"NODE_DEND";break;case 46:return this.popState(),s.getLogger().debug("Lex: ]]"),"NODE_DEND";break;case 47:return this.popState(),s.getLogger().debug("Lex: ("),"NODE_DEND";break;case 48:return this.popState(),s.getLogger().debug("Lex: ])"),"NODE_DEND";break;case 49:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";break;case 50:return this.popState(),s.getLogger().debug("Lex: /]"),"NODE_DEND";break;case 51:return this.popState(),s.getLogger().debug("Lex: )]"),"NODE_DEND";break;case 52:return this.popState(),s.getLogger().debug("Lex: )"),"NODE_DEND";break;case 53:return this.popState(),s.getLogger().debug("Lex: ]>"),"NODE_DEND";break;case 54:return this.popState(),s.getLogger().debug("Lex: ]"),"NODE_DEND";break;case 55:return s.getLogger().debug("Lexa: -)"),this.pushState("NODE"),36;break;case 56:return s.getLogger().debug("Lexa: (-"),this.pushState("NODE"),36;break;case 57:return s.getLogger().debug("Lexa: ))"),this.pushState("NODE"),36;break;case 58:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;break;case 59:return s.getLogger().debug("Lex: ((("),this.pushState("NODE"),36;break;case 60:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;break;case 61:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;break;case 62:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;break;case 63:return s.getLogger().debug("Lexc: >"),this.pushState("NODE"),36;break;case 64:return s.getLogger().debug("Lexa: (["),this.pushState("NODE"),36;break;case 65:return s.getLogger().debug("Lexa: )"),this.pushState("NODE"),36;break;case 66:return this.pushState("NODE"),36;break;case 67:return this.pushState("NODE"),36;break;case 68:return this.pushState("NODE"),36;break;case 69:return this.pushState("NODE"),36;break;case 70:return this.pushState("NODE"),36;break;case 71:return this.pushState("NODE"),36;break;case 72:return this.pushState("NODE"),36;break;case 73:return s.getLogger().debug("Lexa: ["),this.pushState("NODE"),36;break;case 74:return this.pushState("BLOCK_ARROW"),s.getLogger().debug("LEX ARR START"),38;break;case 75:return s.getLogger().debug("Lex: NODE_ID",a.yytext),32;break;case 76:return s.getLogger().debug("Lex: EOF",a.yytext),8;break;case 77:this.pushState("md_string");break;case 78:this.pushState("md_string");break;case 79:return"NODE_DESCR";case 80:this.popState();break;case 81:s.getLogger().debug("Lex: Starting string"),this.pushState("string");break;case 82:s.getLogger().debug("LEX ARR: Starting string"),this.pushState("string");break;case 83:return s.getLogger().debug("LEX: NODE_DESCR:",a.yytext),"NODE_DESCR";break;case 84:s.getLogger().debug("LEX POPPING"),this.popState();break;case 85:s.getLogger().debug("Lex: =>BAE"),this.pushState("ARROW_DIR");break;case 86:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (right): dir:",a.yytext),"DIR";break;case 87:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (left):",a.yytext),"DIR";break;case 88:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (x):",a.yytext),"DIR";break;case 89:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (y):",a.yytext),"DIR";break;case 90:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (up):",a.yytext),"DIR";break;case 91:return a.yytext=a.yytext.replace(/^,\s*/,""),s.getLogger().debug("Lex (down):",a.yytext),"DIR";break;case 92:return a.yytext="]>",s.getLogger().debug("Lex (ARROW_DIR end):",a.yytext),this.popState(),this.popState(),"BLOCK_ARROW_END";break;case 93:return s.getLogger().debug("Lex: LINK","#"+a.yytext+"#"),15;break;case 94:return s.getLogger().debug("Lex: LINK",a.yytext),15;break;case 95:return s.getLogger().debug("Lex: LINK",a.yytext),15;break;case 96:return s.getLogger().debug("Lex: LINK",a.yytext),15;break;case 97:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;break;case 98:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;break;case 99:return s.getLogger().debug("Lex: START_LINK",a.yytext),this.pushState("LLABEL"),16;break;case 100:this.pushState("md_string");break;case 101:return s.getLogger().debug("Lex: Starting string"),this.pushState("string"),"LINK_LABEL";break;case 102:return this.popState(),s.getLogger().debug("Lex: LINK","#"+a.yytext+"#"),15;break;case 103:return this.popState(),s.getLogger().debug("Lex: LINK",a.yytext),15;break;case 104:return this.popState(),s.getLogger().debug("Lex: LINK",a.yytext),15;break;case 105:return s.getLogger().debug("Lex: COLON",a.yytext),a.yytext=a.yytext.slice(1),27;break}},"anonymous"),rules:[/^(?:block-beta\b)/,/^(?:block\s+)/,/^(?:block\n+)/,/^(?:block:)/,/^(?:[\s]+)/,/^(?:[\n]+)/,/^(?:((\u000D\u000A)|(\u000A)))/,/^(?:columns\s+auto\b)/,/^(?:columns\s+[\d]+)/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]*)/,/^(?:space[:]\d+)/,/^(?:space\b)/,/^(?:default\b)/,/^(?:linkStyle\b)/,/^(?:interpolate\b)/,/^(?:classDef\s+)/,/^(?:DEFAULT\s+)/,/^(?:\w+\s+)/,/^(?:[^\n]*)/,/^(?:class\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:style\s+)/,/^(?:(\w+)+((,\s*\w+)*))/,/^(?:[^\n]*)/,/^(?:accTitle\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*:\s*)/,/^(?:(?!\n||)*[^\n]*)/,/^(?:accDescr\s*\{\s*)/,/^(?:[\}])/,/^(?:[^\}]*)/,/^(?:end\b\s*)/,/^(?:\(\(\()/,/^(?:\)\)\))/,/^(?:[\)]\))/,/^(?:\}\})/,/^(?:\})/,/^(?:\(-)/,/^(?:-\))/,/^(?:\(\()/,/^(?:\]\])/,/^(?:\()/,/^(?:\]\))/,/^(?:\\\])/,/^(?:\/\])/,/^(?:\)\])/,/^(?:[\)])/,/^(?:\]>)/,/^(?:[\]])/,/^(?:-\))/,/^(?:\(-)/,/^(?:\)\))/,/^(?:\))/,/^(?:\(\(\()/,/^(?:\(\()/,/^(?:\{\{)/,/^(?:\{)/,/^(?:>)/,/^(?:\(\[)/,/^(?:\()/,/^(?:\[\[)/,/^(?:\[\|)/,/^(?:\[\()/,/^(?:\)\)\))/,/^(?:\[\\)/,/^(?:\[\/)/,/^(?:\[\\)/,/^(?:\[)/,/^(?:<\[)/,/^(?:[^\(\[\n\-\)\{\}\s\<\>:]+)/,/^(?:$)/,/^(?:["][`])/,/^(?:["][`])/,/^(?:[^`"]+)/,/^(?:[`]["])/,/^(?:["])/,/^(?:["])/,/^(?:[^"]+)/,/^(?:["])/,/^(?:\]>\s*\()/,/^(?:,?\s*right\s*)/,/^(?:,?\s*left\s*)/,/^(?:,?\s*x\s*)/,/^(?:,?\s*y\s*)/,/^(?:,?\s*up\s*)/,/^(?:,?\s*down\s*)/,/^(?:\)\s*)/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?:\s*~~[\~]+\s*)/,/^(?:\s*[xo<]?--\s*)/,/^(?:\s*[xo<]?==\s*)/,/^(?:\s*[xo<]?-\.\s*)/,/^(?:["][`])/,/^(?:["])/,/^(?:\s*[xo<]?--+[-xo>]\s*)/,/^(?:\s*[xo<]?==+[=xo>]\s*)/,/^(?:\s*[xo<]?-?\.+-[xo>]?\s*)/,/^(?::\d+)/],conditions:{STYLE_DEFINITION:{rules:[29],inclusive:!1},STYLE_STMNT:{rules:[28],inclusive:!1},CLASSDEFID:{rules:[23],inclusive:!1},CLASSDEF:{rules:[21,22],inclusive:!1},CLASS_STYLE:{rules:[26],inclusive:!1},CLASS:{rules:[25],inclusive:!1},LLABEL:{rules:[100,101,102,103,104],inclusive:!1},ARROW_DIR:{rules:[86,87,88,89,90,91,92],inclusive:!1},BLOCK_ARROW:{rules:[77,82,85],inclusive:!1},NODE:{rules:[38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,78,81],inclusive:!1},md_string:{rules:[10,11,79,80],inclusive:!1},space:{rules:[],inclusive:!1},string:{rules:[13,14,83,84],inclusive:!1},acc_descr_multiline:{rules:[35,36],inclusive:!1},acc_descr:{rules:[33],inclusive:!1},acc_title:{rules:[31],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,9,12,15,16,17,18,19,20,24,27,30,32,34,37,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,93,94,95,96,97,98,99,105],inclusive:!0}}};return O}();N.lexer=te;function P(){this.yy={}}return c(P,"Parser"),P.prototype=N,N.Parser=P,new P}();ce.parser=ce;var Je=ce,T=new Map,ge=[],he=new Map,ze="color",Ce="fill",Ze="bgFill",Re=",",Qe=oe(),Q=new Map,$e=c(e=>me.sanitizeText(e,Qe),"sanitizeText"),et=c(function(e,o=""){let h=Q.get(e);h||(h={id:e,styles:[],textStyles:[]},Q.set(e,h)),o?.split(Re).forEach(l=>{let i=l.replace(/([^;]*);/,"$1").trim();if(RegExp(ze).exec(l)){let n=i.replace(Ce,Ze).replace(ze,Ce);h.textStyles.push(n)}h.styles.push(i)})},"addStyleClass"),tt=c(function(e,o=""){let h=T.get(e);o!=null&&(h.styles=o.split(Re))},"addStyle2Node"),st=c(function(e,o){e.split(",").forEach(function(h){let l=T.get(h);if(l===void 0){let i=h.trim();l={id:i,type:"na",children:[]},T.set(i,l)}l.classes||(l.classes=[]),l.classes.push(o)})},"setCssClass"),Be=c((e,o)=>{let h=e.flat(),l=[];for(let i of h){if(i.label&&(i.label=$e(i.label)),i.type==="classDef"){et(i.id,i.css);continue}if(i.type==="applyClass"){st(i.id,i?.styleClass??"");continue}if(i.type==="applyStyles"){i?.stylesStr&&tt(i.id,i?.stylesStr);continue}if(i.type==="column-setting")o.columns=i.columns??-1;else if(i.type==="edge"){let g=(he.get(i.id)??0)+1;he.set(i.id,g),i.id=g+"-"+i.id,ge.push(i)}else{i.label||(i.type==="composite"?i.label="":i.label=i.id);let g=T.get(i.id);if(g===void 0?T.set(i.id,i):(i.type!=="na"&&(g.type=i.type),i.label!==i.id&&(g.label=i.label)),i.children&&Be(i.children,i),i.type==="space"){let n=i.width??1;for(let b=0;b<n;b++){let p=we(i);p.id=p.id+"-"+b,T.set(p.id,p),l.push(p)}}else g===void 0&&l.push(i)}}o.children=l},"populateBlockDatabase"),ue=[],U={id:"root",type:"composite",children:[],columns:-1},rt=c(()=>{L.debug("Clear called"),Ee(),U={id:"root",type:"composite",children:[],columns:-1},T=new Map([["root",U]]),ue=[],Q=new Map,ge=[],he=new Map},"clear");function Pe(e){switch(L.debug("typeStr2Type",e),e){case"[]":return"square";case"()":return L.debug("we have a round"),"round";case"(())":return"circle";case">]":return"rect_left_inv_arrow";case"{}":return"diamond";case"{{}}":return"hexagon";case"([])":return"stadium";case"[[]]":return"subroutine";case"[()]":return"cylinder";case"((()))":return"doublecircle";case"[//]":return"lean_right";case"[\\\\]":return"lean_left";case"[/\\]":return"trapezoid";case"[\\/]":return"inv_trapezoid";case"<[]>":return"block_arrow";default:return"na"}}c(Pe,"typeStr2Type");function Fe(e){switch(L.debug("typeStr2Type",e),e){case"==":return"thick";default:return"normal"}}c(Fe,"edgeTypeStr2Type");function Ke(e){switch(e.trim()){case"--x":return"arrow_cross";case"--o":return"arrow_circle";default:return"arrow_point"}}c(Ke,"edgeStrToEdgeData");var Ae=0,it=c(()=>(Ae++,"id-"+Math.random().toString(36).substr(2,12)+"-"+Ae),"generateId"),at=c(e=>{U.children=e,Be(e,U),ue=U.children},"setHierarchy"),nt=c(e=>{let o=T.get(e);return o?o.columns?o.columns:o.children?o.children.length:-1:-1},"getColumns"),ot=c(()=>[...T.values()],"getBlocksFlat"),lt=c(()=>ue||[],"getBlocks"),ct=c(()=>ge,"getEdges"),ht=c(e=>T.get(e),"getBlock"),gt=c(e=>{T.set(e.id,e)},"setBlock"),ut=c(()=>console,"getLogger"),dt=c(function(){return Q},"getClasses"),pt={getConfig:c(()=>M().block,"getConfig"),typeStr2Type:Pe,edgeTypeStr2Type:Fe,edgeStrToEdgeData:Ke,getLogger:ut,getBlocksFlat:ot,getBlocks:lt,getEdges:ct,setHierarchy:at,getBlock:ht,setBlock:gt,getColumns:nt,getClasses:dt,clear:rt,generateId:it},bt=pt,Z=c((e,o)=>{let h=ke,l=h(e,"r"),i=h(e,"g"),g=h(e,"b");return Le(l,i,g,o)},"fade"),ft=c(e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span,p {
    color: ${e.titleColor};
  }



  .label text,span,p {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }
  .flowchart-label text {
    text-anchor: middle;
  }
  // .flowchart-label .text-outer-tspan {
  //   text-anchor: middle;
  // }
  // .flowchart-label .text-inner-tspan {
  //   text-anchor: start;
  // }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  /* For html labels only */
  .labelBkg {
    background-color: ${Z(e.edgeLabelBackground,.5)};
    // background-color:
  }

  .node .cluster {
    // fill: ${Z(e.mainBkg,.5)};
    fill: ${Z(e.clusterBkg,.5)};
    stroke: ${Z(e.clusterBorder,.2)};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span,p {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
`,"getStyles"),St=ft,y=oe()?.block?.padding??8;function Me(e,o){if(e===0||!Number.isInteger(e))throw new Error("Columns must be an integer !== 0.");if(o<0||!Number.isInteger(o))throw new Error("Position must be a non-negative integer."+o);if(e<0)return{px:o,py:0};if(e===1)return{px:0,py:o};let h=o%e,l=Math.floor(o/e);return{px:h,py:l}}c(Me,"calculateBlockPosition");var xt=c(e=>{let o=0,h=0;for(let l of e.children){let{width:i,height:g,x:n,y:b}=l.size??{width:0,height:0,x:0,y:0};L.debug("getMaxChildSize abc95 child:",l.id,"width:",i,"height:",g,"x:",n,"y:",b,l.type),l.type!=="space"&&(i>o&&(o=i/(e.widthInColumns??1)),g>h&&(h=g))}return{width:o,height:h}},"getMaxChildSize");function $(e,o,h=0,l=0){L.debug("setBlockSizes abc95 (start)",e.id,e?.size?.x,"block width =",e?.size,"sieblingWidth",h),e?.size?.width||(e.size={width:h,height:l,x:0,y:0});let i=0,g=0;if(e.children?.length>0){for(let S of e.children)$(S,o);let n=xt(e);i=n.width,g=n.height,L.debug("setBlockSizes abc95 maxWidth of",e.id,":s children is ",i,g);for(let S of e.children)S.size&&(L.debug(`abc95 Setting size of children of ${e.id} id=${S.id} ${i} ${g} ${JSON.stringify(S.size)}`),S.size.width=i*(S.widthInColumns??1)+y*((S.widthInColumns??1)-1),S.size.height=g,S.size.x=0,S.size.y=0,L.debug(`abc95 updating size of ${e.id} children child:${S.id} maxWidth:${i} maxHeight:${g}`));for(let S of e.children)$(S,o,i,g);let b=e.columns??-1,p=0;for(let S of e.children)p+=S.widthInColumns??1;let x=e.children.length;b>0&&b<p&&(x=b);let f=Math.ceil(p/x),m=x*(i+y)+y,z=f*(g+y)+y;if(m<h){L.debug(`Detected to small siebling: abc95 ${e.id} sieblingWidth ${h} sieblingHeight ${l} width ${m}`),m=h,z=l;let S=(h-x*y-y)/x,E=(l-f*y-y)/f;L.debug("Size indata abc88",e.id,"childWidth",S,"maxWidth",i),L.debug("Size indata abc88",e.id,"childHeight",E,"maxHeight",g),L.debug("Size indata abc88 xSize",x,"padding",y);for(let w of e.children)w.size&&(w.size.width=S,w.size.height=E,w.size.x=0,w.size.y=0)}if(L.debug(`abc95 (finale calc) ${e.id} xSize ${x} ySize ${f} columns ${b}${e.children.length} width=${Math.max(m,e.size?.width||0)}`),m<(e?.size?.width||0)){m=e?.size?.width||0;let S=b>0?Math.min(e.children.length,b):e.children.length;if(S>0){let E=(m-S*y-y)/S;L.debug("abc95 (growing to fit) width",e.id,m,e.size?.width,E);for(let w of e.children)w.size&&(w.size.width=E)}}e.size={width:m,height:z,x:0,y:0}}L.debug("setBlockSizes abc94 (done)",e.id,e?.size?.x,e?.size?.width,e?.size?.y,e?.size?.height)}c($,"setBlockSizes");function de(e,o){L.debug(`abc85 layout blocks (=>layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`);let h=e.columns??-1;if(L.debug("layoutBlocks columns abc95",e.id,"=>",h,e),e.children&&e.children.length>0){let l=e?.children[0]?.size?.width??0,i=e.children.length*l+(e.children.length-1)*y;L.debug("widthOfChildren 88",i,"posX");let g=0;L.debug("abc91 block?.size?.x",e.id,e?.size?.x);let n=e?.size?.x?e?.size?.x+(-e?.size?.width/2||0):-y,b=0;for(let p of e.children){let x=e;if(!p.size)continue;let{width:f,height:m}=p.size,{px:z,py:S}=Me(h,g);if(S!=b&&(b=S,n=e?.size?.x?e?.size?.x+(-e?.size?.width/2||0):-y,L.debug("New row in layout for block",e.id," and child ",p.id,b)),L.debug(`abc89 layout blocks (child) id: ${p.id} Pos: ${g} (px, py) ${z},${S} (${x?.size?.x},${x?.size?.y}) parent: ${x.id} width: ${f}${y}`),x.size){let E=f/2;p.size.x=n+y+E,L.debug(`abc91 layout blocks (calc) px, pyid:${p.id} startingPos=X${n} new startingPosX${p.size.x} ${E} padding=${y} width=${f} halfWidth=${E} => x:${p.size.x} y:${p.size.y} ${p.widthInColumns} (width * (child?.w || 1)) / 2 ${f*(p?.widthInColumns??1)/2}`),n=p.size.x+E,p.size.y=x.size.y-x.size.height/2+S*(m+y)+m/2+y,L.debug(`abc88 layout blocks (calc) px, pyid:${p.id}startingPosX${n}${y}${E}=>x:${p.size.x}y:${p.size.y}${p.widthInColumns}(width * (child?.w || 1)) / 2${f*(p?.widthInColumns??1)/2}`)}p.children&&de(p,o),g+=p?.widthInColumns??1,L.debug("abc88 columnsPos",p,g)}}L.debug(`layout blocks (<==layoutBlocks) ${e.id} x: ${e?.size?.x} y: ${e?.size?.y} width: ${e?.size?.width}`)}c(de,"layoutBlocks");function pe(e,{minX:o,minY:h,maxX:l,maxY:i}={minX:0,minY:0,maxX:0,maxY:0}){if(e.size&&e.id!=="root"){let{x:g,y:n,width:b,height:p}=e.size;g-b/2<o&&(o=g-b/2),n-p/2<h&&(h=n-p/2),g+b/2>l&&(l=g+b/2),n+p/2>i&&(i=n+p/2)}if(e.children)for(let g of e.children)({minX:o,minY:h,maxX:l,maxY:i}=pe(g,{minX:o,minY:h,maxX:l,maxY:i}));return{minX:o,minY:h,maxX:l,maxY:i}}c(pe,"findBounds");function Ye(e){let o=e.getBlock("root");if(!o)return;$(o,e,0,0),de(o,e),L.debug("getBlocks",JSON.stringify(o,null,2));let{minX:h,minY:l,maxX:i,maxY:g}=pe(o),n=g-l,b=i-h;return{x:h,y:l,width:b,height:n}}c(Ye,"layout");function be(e,o,h=!1){let l=e,i="default";(l?.classes?.length||0)>0&&(i=(l?.classes??[]).join(" ")),i=i+" flowchart-label";let g=0,n="",b;switch(l.type){case"round":g=5,n="rect";break;case"composite":g=0,n="composite",b=0;break;case"square":n="rect";break;case"diamond":n="question";break;case"hexagon":n="hexagon";break;case"block_arrow":n="block_arrow";break;case"odd":n="rect_left_inv_arrow";break;case"lean_right":n="lean_right";break;case"lean_left":n="lean_left";break;case"trapezoid":n="trapezoid";break;case"inv_trapezoid":n="inv_trapezoid";break;case"rect_left_inv_arrow":n="rect_left_inv_arrow";break;case"circle":n="circle";break;case"ellipse":n="ellipse";break;case"stadium":n="stadium";break;case"subroutine":n="subroutine";break;case"cylinder":n="cylinder";break;case"group":n="rect";break;case"doublecircle":n="doublecircle";break;default:n="rect"}let p=_e(l?.styles??[]),x=l.label,f=l.size??{width:0,height:0,x:0,y:0};return{labelStyle:p.labelStyle,shape:n,labelText:x,rx:g,ry:g,class:i,style:p.style,id:l.id,directions:l.directions,width:f.width,height:f.height,x:f.x,y:f.y,positioned:h,intersect:void 0,type:l.type,padding:b??M()?.block?.padding??0}}c(be,"getNodeFromBlock");function We(e,o,h){return A(this,null,function*(){let l=be(o,h,!1);if(l.type==="group")return;let i=M(),g=yield le(e,l,{config:i}),n=g.node().getBBox(),b=h.getBlock(l.id);b.size={width:n.width,height:n.height,x:0,y:0,node:g},h.setBlock(b),g.remove()})}c(We,"calculateBlockSize");function Ve(e,o,h){return A(this,null,function*(){let l=be(o,h,!0);if(h.getBlock(l.id).type!=="space"){let g=M();yield le(e,l,{config:g}),o.intersect=l?.intersect,ve(l)}})}c(Ve,"insertBlockPositioned");function ee(e,o,h,l){return A(this,null,function*(){for(let i of o)yield l(e,i,h),i.children&&(yield ee(e,i.children,h,l))})}c(ee,"performOperations");function je(e,o,h){return A(this,null,function*(){yield ee(e,o,h,We)})}c(je,"calculateBlockSizes");function Ue(e,o,h){return A(this,null,function*(){yield ee(e,o,h,Ve)})}c(Ue,"insertBlocks");function Xe(e,o,h,l,i){return A(this,null,function*(){let g=new De({multigraph:!0,compound:!0});g.setGraph({rankdir:"TB",nodesep:10,ranksep:10,marginx:8,marginy:8});for(let n of h)n.size&&g.setNode(n.id,{width:n.size.width,height:n.size.height,intersect:n.intersect});for(let n of o)if(n.start&&n.end){let b=l.getBlock(n.start),p=l.getBlock(n.end);if(b?.size&&p?.size){let x=b.size,f=p.size,m=[{x:x.x,y:x.y},{x:x.x+(f.x-x.x)/2,y:x.y+(f.y-x.y)/2},{x:f.x,y:f.y}];Oe(e,{v:n.start,w:n.end,name:n.id},V(W({},n),{arrowTypeEnd:n.arrowTypeEnd,arrowTypeStart:n.arrowTypeStart,points:m,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"}),void 0,"block",g,i),n.label&&(yield Ie(e,V(W({},n),{label:n.label,labelStyle:"stroke: #333; stroke-width: 1.5px;fill:none;",arrowTypeEnd:n.arrowTypeEnd,arrowTypeStart:n.arrowTypeStart,points:m,classes:"edge-thickness-normal edge-pattern-solid flowchart-link LS-a1 LE-b1"})),Te(V(W({},n),{x:m[1].x,y:m[1].y}),{originalPath:m}))}}})}c(Xe,"insertEdges");var Lt=c(function(e,o){return o.db.getClasses()},"getClasses"),kt=c(function(e,o,h,l){return A(this,null,function*(){let{securityLevel:i,block:g}=M(),n=l.db,b;i==="sandbox"&&(b=j("#i"+o));let p=i==="sandbox"?j(b.nodes()[0].contentDocument.body):j("body"),x=i==="sandbox"?p.select(`[id="${o}"]`):j(`[id="${o}"]`);Ne(x,["point","circle","cross"],l.type,o);let m=n.getBlocks(),z=n.getBlocksFlat(),S=n.getEdges(),E=x.insert("g").attr("class","block");yield je(E,m,n);let w=Ye(n);if(yield Ue(E,m,n),yield Xe(E,S,z,n,o),w){let N=w,te=Math.max(1,Math.round(.125*(N.width/N.height))),P=N.height+te+10,O=N.width+10,{useMaxWidth:u}=g;ye(x,P,O,!!u),L.debug("Here Bounds",w,N),x.attr("viewBox",`${N.x-5} ${N.y-5} ${N.width+10} ${N.height+10}`)}})},"draw"),mt={draw:kt,getClasses:Lt},zt={parser:Je,db:bt,renderer:mt,styles:St};export{zt as diagram};

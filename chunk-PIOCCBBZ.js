import{a as se,b as re}from"./chunk-WQP6G7XV.js";import{b as ee}from"./chunk-MXBULAG2.js";import{e as Zt,m as te}from"./chunk-BX6Q2EGA.js";import{N as P,S as zt,T as Wt,U as Xt,V as Kt,W as Jt,X as qt,Y as Qt,Z as C,h as r,j as E}from"./chunk-YMYRQ6W5.js";import{h as Ht}from"./chunk-FU75TI2F.js";var Nt=function(){var t=r(function($,o,u,n){for(u=u||{},n=$.length;n--;u[$[n]]=o);return u},"o"),e=[1,2],c=[1,3],a=[1,4],d=[2,4],i=[1,9],p=[1,11],g=[1,16],l=[1,17],_=[1,18],k=[1,19],O=[1,32],L=[1,20],f=[1,21],A=[1,22],I=[1,23],Y=[1,24],F=[1,26],N=[1,27],w=[1,28],st=[1,29],rt=[1,30],it=[1,31],at=[1,34],nt=[1,35],lt=[1,36],ot=[1,37],X=[1,33],S=[1,4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],ct=[1,4,5,14,15,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Mt=[4,5,16,17,19,21,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],Dt={trace:r(function(){},"trace"),yy:{},symbols_:{error:2,start:3,SPACE:4,NL:5,SD:6,document:7,line:8,statement:9,classDefStatement:10,styleStatement:11,cssClassStatement:12,idStatement:13,DESCR:14,"-->":15,HIDE_EMPTY:16,scale:17,WIDTH:18,COMPOSIT_STATE:19,STRUCT_START:20,STRUCT_STOP:21,STATE_DESCR:22,AS:23,ID:24,FORK:25,JOIN:26,CHOICE:27,CONCURRENT:28,note:29,notePosition:30,NOTE_TEXT:31,direction:32,acc_title:33,acc_title_value:34,acc_descr:35,acc_descr_value:36,acc_descr_multiline_value:37,classDef:38,CLASSDEF_ID:39,CLASSDEF_STYLEOPTS:40,DEFAULT:41,style:42,STYLE_IDS:43,STYLEDEF_STYLEOPTS:44,class:45,CLASSENTITY_IDS:46,STYLECLASS:47,direction_tb:48,direction_bt:49,direction_rl:50,direction_lr:51,eol:52,";":53,EDGE_STATE:54,STYLE_SEPARATOR:55,left_of:56,right_of:57,$accept:0,$end:1},terminals_:{2:"error",4:"SPACE",5:"NL",6:"SD",14:"DESCR",15:"-->",16:"HIDE_EMPTY",17:"scale",18:"WIDTH",19:"COMPOSIT_STATE",20:"STRUCT_START",21:"STRUCT_STOP",22:"STATE_DESCR",23:"AS",24:"ID",25:"FORK",26:"JOIN",27:"CHOICE",28:"CONCURRENT",29:"note",31:"NOTE_TEXT",33:"acc_title",34:"acc_title_value",35:"acc_descr",36:"acc_descr_value",37:"acc_descr_multiline_value",38:"classDef",39:"CLASSDEF_ID",40:"CLASSDEF_STYLEOPTS",41:"DEFAULT",42:"style",43:"STYLE_IDS",44:"STYLEDEF_STYLEOPTS",45:"class",46:"CLASSENTITY_IDS",47:"STYLECLASS",48:"direction_tb",49:"direction_bt",50:"direction_rl",51:"direction_lr",53:";",54:"EDGE_STATE",55:"STYLE_SEPARATOR",56:"left_of",57:"right_of"},productions_:[0,[3,2],[3,2],[3,2],[7,0],[7,2],[8,2],[8,1],[8,1],[9,1],[9,1],[9,1],[9,1],[9,2],[9,3],[9,4],[9,1],[9,2],[9,1],[9,4],[9,3],[9,6],[9,1],[9,1],[9,1],[9,1],[9,4],[9,4],[9,1],[9,2],[9,2],[9,1],[10,3],[10,3],[11,3],[12,3],[32,1],[32,1],[32,1],[32,1],[52,1],[52,1],[13,1],[13,1],[13,3],[13,3],[30,1],[30,1]],performAction:r(function(o,u,n,y,b,s,K){var h=s.length-1;switch(b){case 3:return y.setRootDoc(s[h]),s[h];break;case 4:this.$=[];break;case 5:s[h]!="nl"&&(s[h-1].push(s[h]),this.$=s[h-1]);break;case 6:case 7:this.$=s[h];break;case 8:this.$="nl";break;case 12:this.$=s[h];break;case 13:let ht=s[h-1];ht.description=y.trimColon(s[h]),this.$=ht;break;case 14:this.$={stmt:"relation",state1:s[h-2],state2:s[h]};break;case 15:let dt=y.trimColon(s[h]);this.$={stmt:"relation",state1:s[h-3],state2:s[h-1],description:dt};break;case 19:this.$={stmt:"state",id:s[h-3],type:"default",description:"",doc:s[h-1]};break;case 20:var V=s[h],H=s[h-2].trim();if(s[h].match(":")){var J=s[h].split(":");V=J[0],H=[H,J[1]]}this.$={stmt:"state",id:V,type:"default",description:H};break;case 21:this.$={stmt:"state",id:s[h-3],type:"default",description:s[h-5],doc:s[h-1]};break;case 22:this.$={stmt:"state",id:s[h],type:"fork"};break;case 23:this.$={stmt:"state",id:s[h],type:"join"};break;case 24:this.$={stmt:"state",id:s[h],type:"choice"};break;case 25:this.$={stmt:"state",id:y.getDividerId(),type:"divider"};break;case 26:this.$={stmt:"state",id:s[h-1].trim(),note:{position:s[h-2].trim(),text:s[h].trim()}};break;case 29:this.$=s[h].trim(),y.setAccTitle(this.$);break;case 30:case 31:this.$=s[h].trim(),y.setAccDescription(this.$);break;case 32:case 33:this.$={stmt:"classDef",id:s[h-1].trim(),classes:s[h].trim()};break;case 34:this.$={stmt:"style",id:s[h-1].trim(),styleClass:s[h].trim()};break;case 35:this.$={stmt:"applyClass",id:s[h-1].trim(),styleClass:s[h].trim()};break;case 36:y.setDirection("TB"),this.$={stmt:"dir",value:"TB"};break;case 37:y.setDirection("BT"),this.$={stmt:"dir",value:"BT"};break;case 38:y.setDirection("RL"),this.$={stmt:"dir",value:"RL"};break;case 39:y.setDirection("LR"),this.$={stmt:"dir",value:"LR"};break;case 42:case 43:this.$={stmt:"state",id:s[h].trim(),type:"default",description:""};break;case 44:this.$={stmt:"state",id:s[h-2].trim(),classes:[s[h].trim()],type:"default",description:""};break;case 45:this.$={stmt:"state",id:s[h-2].trim(),classes:[s[h].trim()],type:"default",description:""};break}},"anonymous"),table:[{3:1,4:e,5:c,6:a},{1:[3]},{3:5,4:e,5:c,6:a},{3:6,4:e,5:c,6:a},t([1,4,5,16,17,19,22,24,25,26,27,28,29,33,35,37,38,42,45,48,49,50,51,54],d,{7:7}),{1:[2,1]},{1:[2,2]},{1:[2,3],4:i,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:g,17:l,19:_,22:k,24:O,25:L,26:f,27:A,28:I,29:Y,32:25,33:F,35:N,37:w,38:st,42:rt,45:it,48:at,49:nt,50:lt,51:ot,54:X},t(S,[2,5]),{9:38,10:12,11:13,12:14,13:15,16:g,17:l,19:_,22:k,24:O,25:L,26:f,27:A,28:I,29:Y,32:25,33:F,35:N,37:w,38:st,42:rt,45:it,48:at,49:nt,50:lt,51:ot,54:X},t(S,[2,7]),t(S,[2,8]),t(S,[2,9]),t(S,[2,10]),t(S,[2,11]),t(S,[2,12],{14:[1,39],15:[1,40]}),t(S,[2,16]),{18:[1,41]},t(S,[2,18],{20:[1,42]}),{23:[1,43]},t(S,[2,22]),t(S,[2,23]),t(S,[2,24]),t(S,[2,25]),{30:44,31:[1,45],56:[1,46],57:[1,47]},t(S,[2,28]),{34:[1,48]},{36:[1,49]},t(S,[2,31]),{39:[1,50],41:[1,51]},{43:[1,52]},{46:[1,53]},t(ct,[2,42],{55:[1,54]}),t(ct,[2,43],{55:[1,55]}),t(S,[2,36]),t(S,[2,37]),t(S,[2,38]),t(S,[2,39]),t(S,[2,6]),t(S,[2,13]),{13:56,24:O,54:X},t(S,[2,17]),t(Mt,d,{7:57}),{24:[1,58]},{24:[1,59]},{23:[1,60]},{24:[2,46]},{24:[2,47]},t(S,[2,29]),t(S,[2,30]),{40:[1,61]},{40:[1,62]},{44:[1,63]},{47:[1,64]},{24:[1,65]},{24:[1,66]},t(S,[2,14],{14:[1,67]}),{4:i,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:g,17:l,19:_,21:[1,68],22:k,24:O,25:L,26:f,27:A,28:I,29:Y,32:25,33:F,35:N,37:w,38:st,42:rt,45:it,48:at,49:nt,50:lt,51:ot,54:X},t(S,[2,20],{20:[1,69]}),{31:[1,70]},{24:[1,71]},t(S,[2,32]),t(S,[2,33]),t(S,[2,34]),t(S,[2,35]),t(ct,[2,44]),t(ct,[2,45]),t(S,[2,15]),t(S,[2,19]),t(Mt,d,{7:72}),t(S,[2,26]),t(S,[2,27]),{4:i,5:p,8:8,9:10,10:12,11:13,12:14,13:15,16:g,17:l,19:_,21:[1,73],22:k,24:O,25:L,26:f,27:A,28:I,29:Y,32:25,33:F,35:N,37:w,38:st,42:rt,45:it,48:at,49:nt,50:lt,51:ot,54:X},t(S,[2,21])],defaultActions:{5:[2,1],6:[2,2],46:[2,46],47:[2,47]},parseError:r(function(o,u){if(u.recoverable)this.trace(o);else{var n=new Error(o);throw n.hash=u,n}},"parseError"),parse:r(function(o){var u=this,n=[0],y=[],b=[null],s=[],K=this.table,h="",V=0,H=0,J=0,ht=2,dt=1,Ge=s.slice.call(arguments,1),T=Object.create(this.lexer),M={yy:{}};for(var Ct in this.yy)Object.prototype.hasOwnProperty.call(this.yy,Ct)&&(M.yy[Ct]=this.yy[Ct]);T.setInput(o,M.yy),M.yy.lexer=T,M.yy.parser=this,typeof T.yylloc>"u"&&(T.yylloc={});var xt=T.yylloc;s.push(xt);var Be=T.options&&T.options.ranges;typeof M.yy.parseError=="function"?this.parseError=M.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Ye(D){n.length=n.length-2*D,b.length=b.length-D,s.length=s.length-D}r(Ye,"popStack");function Ut(){var D;return D=y.pop()||T.lex()||dt,typeof D!="number"&&(D instanceof Array&&(y=D,D=y.pop()),D=u.symbols_[D]||D),D}r(Ut,"lex");for(var v,At,U,x,Ls,Lt,z={},ft,R,jt,pt;;){if(U=n[n.length-1],this.defaultActions[U]?x=this.defaultActions[U]:((v===null||typeof v>"u")&&(v=Ut()),x=K[U]&&K[U][v]),typeof x>"u"||!x.length||!x[0]){var It="";pt=[];for(ft in K[U])this.terminals_[ft]&&ft>ht&&pt.push("'"+this.terminals_[ft]+"'");T.showPosition?It="Parse error on line "+(V+1)+`:
`+T.showPosition()+`
Expecting `+pt.join(", ")+", got '"+(this.terminals_[v]||v)+"'":It="Parse error on line "+(V+1)+": Unexpected "+(v==dt?"end of input":"'"+(this.terminals_[v]||v)+"'"),this.parseError(It,{text:T.match,token:this.terminals_[v]||v,line:T.yylineno,loc:xt,expected:pt})}if(x[0]instanceof Array&&x.length>1)throw new Error("Parse Error: multiple actions possible at state: "+U+", token: "+v);switch(x[0]){case 1:n.push(v),b.push(T.yytext),s.push(T.yylloc),n.push(x[1]),v=null,At?(v=At,At=null):(H=T.yyleng,h=T.yytext,V=T.yylineno,xt=T.yylloc,J>0&&J--);break;case 2:if(R=this.productions_[x[1]][1],z.$=b[b.length-R],z._$={first_line:s[s.length-(R||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(R||1)].first_column,last_column:s[s.length-1].last_column},Be&&(z._$.range=[s[s.length-(R||1)].range[0],s[s.length-1].range[1]]),Lt=this.performAction.apply(z,[h,H,V,M.yy,x[1],b,s].concat(Ge)),typeof Lt<"u")return Lt;R&&(n=n.slice(0,-1*R*2),b=b.slice(0,-1*R),s=s.slice(0,-1*R)),n.push(this.productions_[x[1]][0]),b.push(z.$),s.push(z._$),jt=K[n[n.length-2]][n[n.length-1]],n.push(jt);break;case 3:return!0}}return!0},"parse")},Pe=function(){var $={EOF:1,parseError:r(function(u,n){if(this.yy.parser)this.yy.parser.parseError(u,n);else throw new Error(u)},"parseError"),setInput:r(function(o,u){return this.yy=u||this.yy||{},this._input=o,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:r(function(){var o=this._input[0];this.yytext+=o,this.yyleng++,this.offset++,this.match+=o,this.matched+=o;var u=o.match(/(?:\r\n?|\n).*/g);return u?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),o},"input"),unput:r(function(o){var u=o.length,n=o.split(/(?:\r\n?|\n)/g);this._input=o+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-u),this.offset-=u;var y=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),n.length-1&&(this.yylineno-=n.length-1);var b=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:n?(n.length===y.length?this.yylloc.first_column:0)+y[y.length-n.length].length-n[0].length:this.yylloc.first_column-u},this.options.ranges&&(this.yylloc.range=[b[0],b[0]+this.yyleng-u]),this.yyleng=this.yytext.length,this},"unput"),more:r(function(){return this._more=!0,this},"more"),reject:r(function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},"reject"),less:r(function(o){this.unput(this.match.slice(o))},"less"),pastInput:r(function(){var o=this.matched.substr(0,this.matched.length-this.match.length);return(o.length>20?"...":"")+o.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:r(function(){var o=this.match;return o.length<20&&(o+=this._input.substr(0,20-o.length)),(o.substr(0,20)+(o.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:r(function(){var o=this.pastInput(),u=new Array(o.length+1).join("-");return o+this.upcomingInput()+`
`+u+"^"},"showPosition"),test_match:r(function(o,u){var n,y,b;if(this.options.backtrack_lexer&&(b={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(b.yylloc.range=this.yylloc.range.slice(0))),y=o[0].match(/(?:\r\n?|\n).*/g),y&&(this.yylineno+=y.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:y?y[y.length-1].length-y[y.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+o[0].length},this.yytext+=o[0],this.match+=o[0],this.matches=o,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(o[0].length),this.matched+=o[0],n=this.performAction.call(this,this.yy,this,u,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),n)return n;if(this._backtrack){for(var s in b)this[s]=b[s];return!1}return!1},"test_match"),next:r(function(){if(this.done)return this.EOF;this._input||(this.done=!0);var o,u,n,y;this._more||(this.yytext="",this.match="");for(var b=this._currentRules(),s=0;s<b.length;s++)if(n=this._input.match(this.rules[b[s]]),n&&(!u||n[0].length>u[0].length)){if(u=n,y=s,this.options.backtrack_lexer){if(o=this.test_match(n,b[s]),o!==!1)return o;if(this._backtrack){u=!1;continue}else return!1}else if(!this.options.flex)break}return u?(o=this.test_match(u,b[y]),o!==!1?o:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:r(function(){var u=this.next();return u||this.lex()},"lex"),begin:r(function(u){this.conditionStack.push(u)},"begin"),popState:r(function(){var u=this.conditionStack.length-1;return u>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:r(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:r(function(u){return u=this.conditionStack.length-1-Math.abs(u||0),u>=0?this.conditionStack[u]:"INITIAL"},"topState"),pushState:r(function(u){this.begin(u)},"pushState"),stateStackSize:r(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:r(function(u,n,y,b){var s=b;switch(y){case 0:return 41;case 1:return 48;case 2:return 49;case 3:return 50;case 4:return 51;case 5:break;case 6:break;case 7:return 5;case 8:break;case 9:break;case 10:break;case 11:break;case 12:return this.pushState("SCALE"),17;break;case 13:return 18;case 14:this.popState();break;case 15:return this.begin("acc_title"),33;break;case 16:return this.popState(),"acc_title_value";break;case 17:return this.begin("acc_descr"),35;break;case 18:return this.popState(),"acc_descr_value";break;case 19:this.begin("acc_descr_multiline");break;case 20:this.popState();break;case 21:return"acc_descr_multiline_value";case 22:return this.pushState("CLASSDEF"),38;break;case 23:return this.popState(),this.pushState("CLASSDEFID"),"DEFAULT_CLASSDEF_ID";break;case 24:return this.popState(),this.pushState("CLASSDEFID"),39;break;case 25:return this.popState(),40;break;case 26:return this.pushState("CLASS"),45;break;case 27:return this.popState(),this.pushState("CLASS_STYLE"),46;break;case 28:return this.popState(),47;break;case 29:return this.pushState("STYLE"),42;break;case 30:return this.popState(),this.pushState("STYLEDEF_STYLES"),43;break;case 31:return this.popState(),44;break;case 32:return this.pushState("SCALE"),17;break;case 33:return 18;case 34:this.popState();break;case 35:this.pushState("STATE");break;case 36:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),25;break;case 37:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),26;break;case 38:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;break;case 39:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),25;break;case 40:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),26;break;case 41:return this.popState(),n.yytext=n.yytext.slice(0,-10).trim(),27;break;case 42:return 48;case 43:return 49;case 44:return 50;case 45:return 51;case 46:this.pushState("STATE_STRING");break;case 47:return this.pushState("STATE_ID"),"AS";break;case 48:return this.popState(),"ID";break;case 49:this.popState();break;case 50:return"STATE_DESCR";case 51:return 19;case 52:this.popState();break;case 53:return this.popState(),this.pushState("struct"),20;break;case 54:break;case 55:return this.popState(),21;break;case 56:break;case 57:return this.begin("NOTE"),29;break;case 58:return this.popState(),this.pushState("NOTE_ID"),56;break;case 59:return this.popState(),this.pushState("NOTE_ID"),57;break;case 60:this.popState(),this.pushState("FLOATING_NOTE");break;case 61:return this.popState(),this.pushState("FLOATING_NOTE_ID"),"AS";break;case 62:break;case 63:return"NOTE_TEXT";case 64:return this.popState(),"ID";break;case 65:return this.popState(),this.pushState("NOTE_TEXT"),24;break;case 66:return this.popState(),n.yytext=n.yytext.substr(2).trim(),31;break;case 67:return this.popState(),n.yytext=n.yytext.slice(0,-8).trim(),31;break;case 68:return 6;case 69:return 6;case 70:return 16;case 71:return 54;case 72:return 24;case 73:return n.yytext=n.yytext.trim(),14;break;case 74:return 15;case 75:return 28;case 76:return 55;case 77:return 5;case 78:return"INVALID"}},"anonymous"),rules:[/^(?:default\b)/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:[\s]+)/i,/^(?:((?!\n)\s)+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:classDef\s+)/i,/^(?:DEFAULT\s+)/i,/^(?:\w+\s+)/i,/^(?:[^\n]*)/i,/^(?:class\s+)/i,/^(?:(\w+)+((,\s*\w+)*))/i,/^(?:[^\n]*)/i,/^(?:style\s+)/i,/^(?:[\w,]+\s+)/i,/^(?:[^\n]*)/i,/^(?:scale\s+)/i,/^(?:\d+)/i,/^(?:\s+width\b)/i,/^(?:state\s+)/i,/^(?:.*<<fork>>)/i,/^(?:.*<<join>>)/i,/^(?:.*<<choice>>)/i,/^(?:.*\[\[fork\]\])/i,/^(?:.*\[\[join\]\])/i,/^(?:.*\[\[choice\]\])/i,/^(?:.*direction\s+TB[^\n]*)/i,/^(?:.*direction\s+BT[^\n]*)/i,/^(?:.*direction\s+RL[^\n]*)/i,/^(?:.*direction\s+LR[^\n]*)/i,/^(?:["])/i,/^(?:\s*as\s+)/i,/^(?:[^\n\{]*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n\s\{]+)/i,/^(?:\n)/i,/^(?:\{)/i,/^(?:%%(?!\{)[^\n]*)/i,/^(?:\})/i,/^(?:[\n])/i,/^(?:note\s+)/i,/^(?:left of\b)/i,/^(?:right of\b)/i,/^(?:")/i,/^(?:\s*as\s*)/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[^\n]*)/i,/^(?:\s*[^:\n\s\-]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:[\s\S]*?end note\b)/i,/^(?:stateDiagram\s+)/i,/^(?:stateDiagram-v2\s+)/i,/^(?:hide empty description\b)/i,/^(?:\[\*\])/i,/^(?:[^:\n\s\-\{]+)/i,/^(?:\s*:[^:\n;]+)/i,/^(?:-->)/i,/^(?:--)/i,/^(?::::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{LINE:{rules:[9,10],inclusive:!1},struct:{rules:[9,10,22,26,29,35,42,43,44,45,54,55,56,57,71,72,73,74,75],inclusive:!1},FLOATING_NOTE_ID:{rules:[64],inclusive:!1},FLOATING_NOTE:{rules:[61,62,63],inclusive:!1},NOTE_TEXT:{rules:[66,67],inclusive:!1},NOTE_ID:{rules:[65],inclusive:!1},NOTE:{rules:[58,59,60],inclusive:!1},STYLEDEF_STYLEOPTS:{rules:[],inclusive:!1},STYLEDEF_STYLES:{rules:[31],inclusive:!1},STYLE_IDS:{rules:[],inclusive:!1},STYLE:{rules:[30],inclusive:!1},CLASS_STYLE:{rules:[28],inclusive:!1},CLASS:{rules:[27],inclusive:!1},CLASSDEFID:{rules:[25],inclusive:!1},CLASSDEF:{rules:[23,24],inclusive:!1},acc_descr_multiline:{rules:[20,21],inclusive:!1},acc_descr:{rules:[18],inclusive:!1},acc_title:{rules:[16],inclusive:!1},SCALE:{rules:[13,14,33,34],inclusive:!1},ALIAS:{rules:[],inclusive:!1},STATE_ID:{rules:[48],inclusive:!1},STATE_STRING:{rules:[49,50],inclusive:!1},FORK_STATE:{rules:[],inclusive:!1},STATE:{rules:[9,10,36,37,38,39,40,41,46,47,51,52,53],inclusive:!1},ID:{rules:[9,10],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,8,10,11,12,15,17,19,22,26,29,32,35,53,57,68,69,70,71,72,73,74,76,77,78],inclusive:!0}}};return $}();Dt.lexer=Pe;function ut(){this.yy={}}return r(ut,"Parser"),ut.prototype=Dt,Dt.Parser=ut,new ut}();Nt.parser=Nt;var ws=Nt,Fe="LR",he="TB",_t="state",$t="relation",Ve="classDef",Me="style",Ue="applyClass",tt="default",de="divider",fe="fill:none",pe="fill: #333",Se="c",ye="text",ge="normal",Rt="rect",Ot="rectWithTitle",je="stateStart",He="stateEnd",ie="divider",ae="roundedWithTitle",ze="note",We="noteGroup",et="statediagram",Xe="state",Ke=`${et}-${Xe}`,be="transition",Je="note",qe="note-edge",Qe=`${be} ${qe}`,Ze=`${et}-${Je}`,ts="cluster",es=`${et}-${ts}`,ss="cluster-alt",rs=`${et}-${ss}`,_e="parent",Te="note",is="state",Pt="----",as=`${Pt}${Te}`,ne=`${Pt}${_e}`,Ee=r((t,e=he)=>{if(!t.doc)return e;let c=e;for(let a of t.doc)a.stmt==="dir"&&(c=a.value);return c},"getDir"),ns=r(function(t,e){return e.db.extract(e.db.getRootDocV2()),e.db.getClasses()},"getClasses"),ls=r(function(t,e,c,a){return Ht(this,null,function*(){E.info("REF0:"),E.info("Drawing state diagram (v2)",e);let{securityLevel:d,state:i,layout:p}=C();a.db.extract(a.db.getRootDocV2());let g=a.db.getData(),l=se(e,d);g.type=a.type,g.layoutAlgorithm=p,g.nodeSpacing=i?.nodeSpacing||50,g.rankSpacing=i?.rankSpacing||50,g.markers=["barb"],g.diagramId=e,yield ee(g,l);let _=8;te.insertTitle(l,"statediagramTitleText",i?.titleTopMargin??25,a.db.getDiagramTitle()),re(l,_,et,i?.useMaxWidth??!0)})},"draw"),$s={getClasses:ns,draw:ls,getDir:Ee},yt=new Map,G=0;function gt(t="",e=0,c="",a=Pt){let d=c!==null&&c.length>0?`${a}${c}`:"";return`${is}-${t}${d}-${e}`}r(gt,"stateDomId");var os=r((t,e,c,a,d,i,p,g)=>{E.trace("items",e),e.forEach(l=>{switch(l.stmt){case _t:Q(t,l,c,a,d,i,p,g);break;case tt:Q(t,l,c,a,d,i,p,g);break;case $t:{Q(t,l.state1,c,a,d,i,p,g),Q(t,l.state2,c,a,d,i,p,g);let _={id:"edge"+G,start:l.state1.id,end:l.state2.id,arrowhead:"normal",arrowTypeEnd:"arrow_barb",style:fe,labelStyle:"",label:P.sanitizeText(l.description,C()),arrowheadStyle:pe,labelpos:Se,labelType:ye,thickness:ge,classes:be,look:p};d.push(_),G++}break}})},"setupDoc"),le=r((t,e=he)=>{let c=e;if(t.doc)for(let a of t.doc)a.stmt==="dir"&&(c=a.value);return c},"getDir");function q(t,e,c){if(!e.id||e.id==="</join></fork>"||e.id==="</choice>")return;e.cssClasses&&(Array.isArray(e.cssCompiledStyles)||(e.cssCompiledStyles=[]),e.cssClasses.split(" ").forEach(d=>{if(c.get(d)){let i=c.get(d);e.cssCompiledStyles=[...e.cssCompiledStyles,...i.styles]}}));let a=t.find(d=>d.id===e.id);a?Object.assign(a,e):t.push(e)}r(q,"insertOrUpdateNode");function ke(t){return t?.classes?.join(" ")??""}r(ke,"getClassesFromDbInfo");function ve(t){return t?.styles??[]}r(ve,"getStylesFromDbInfo");var Q=r((t,e,c,a,d,i,p,g)=>{let l=e.id,_=c.get(l),k=ke(_),O=ve(_);if(E.info("dataFetcher parsedItem",e,_,O),l!=="root"){let L=Rt;e.start===!0?L=je:e.start===!1&&(L=He),e.type!==tt&&(L=e.type),yt.get(l)||yt.set(l,{id:l,shape:L,description:P.sanitizeText(l,C()),cssClasses:`${k} ${Ke}`,cssStyles:O});let f=yt.get(l);e.description&&(Array.isArray(f.description)?(f.shape=Ot,f.description.push(e.description)):f.description?.length>0?(f.shape=Ot,f.description===l?f.description=[e.description]:f.description=[f.description,e.description]):(f.shape=Rt,f.description=e.description),f.description=P.sanitizeTextOrArray(f.description,C())),f.description?.length===1&&f.shape===Ot&&(f.type==="group"?f.shape=ae:f.shape=Rt),!f.type&&e.doc&&(E.info("Setting cluster for XCX",l,le(e)),f.type="group",f.isGroup=!0,f.dir=le(e),f.shape=e.type===de?ie:ae,f.cssClasses=`${f.cssClasses} ${es} ${i?rs:""}`);let A={labelStyle:"",shape:f.shape,label:f.description,cssClasses:f.cssClasses,cssCompiledStyles:[],cssStyles:f.cssStyles,id:l,dir:f.dir,domId:gt(l,G),type:f.type,isGroup:f.type==="group",padding:8,rx:10,ry:10,look:p};if(A.shape===ie&&(A.label=""),t&&t.id!=="root"&&(E.trace("Setting node ",l," to be child of its parent ",t.id),A.parentId=t.id),A.centerLabel=!0,e.note){let I={labelStyle:"",shape:ze,label:e.note.text,cssClasses:Ze,cssStyles:[],cssCompilesStyles:[],id:l+as+"-"+G,domId:gt(l,G,Te),type:f.type,isGroup:f.type==="group",padding:C().flowchart.padding,look:p,position:e.note.position},Y=l+ne,F={labelStyle:"",shape:We,label:e.note.text,cssClasses:f.cssClasses,cssStyles:[],id:l+ne,domId:gt(l,G,_e),type:"group",isGroup:!0,padding:16,look:p,position:e.note.position};G++,F.id=Y,I.parentId=Y,q(a,F,g),q(a,I,g),q(a,A,g);let N=l,w=I.id;e.note.position==="left of"&&(N=I.id,w=l),d.push({id:N+"-"+w,start:N,end:w,arrowhead:"none",arrowTypeEnd:"",style:fe,labelStyle:"",classes:Qe,arrowheadStyle:pe,labelpos:Se,labelType:ye,thickness:ge,look:p})}else q(a,A,g)}e.doc&&(E.trace("Adding nodes children "),os(e,e.doc,c,a,d,!i,p,g))},"dataFetcher"),cs=r(()=>{yt.clear(),G=0},"reset"),Gt="[*]",me="start",De=Gt,Ce="end",oe="color",ce="fill",us="bgFill",hs=",";function Bt(){return new Map}r(Bt,"newClassesList");var Tt=[],Yt=[],xe=Fe,Et=[],W=Bt(),Ae=r(()=>({relations:[],states:new Map,documents:{}}),"newDoc"),kt={root:Ae()},m=kt.root,Z=0,ue=0,ds={LINE:0,DOTTED_LINE:1},fs={AGGREGATION:0,EXTENSION:1,COMPOSITION:2,DEPENDENCY:3},St=r(t=>JSON.parse(JSON.stringify(t)),"clone"),ps=r(t=>{E.info("Setting root doc",t),Et=t},"setRootDoc"),Ss=r(()=>Et,"getRootDoc"),bt=r((t,e,c)=>{if(e.stmt===$t)bt(t,e.state1,!0),bt(t,e.state2,!1);else if(e.stmt===_t&&(e.id==="[*]"?(e.id=c?t.id+"_start":t.id+"_end",e.start=c):e.id=e.id.trim()),e.doc){let a=[],d=[],i;for(i=0;i<e.doc.length;i++)if(e.doc[i].type===de){let p=St(e.doc[i]);p.doc=St(d),a.push(p),d=[]}else d.push(e.doc[i]);if(a.length>0&&d.length>0){let p={stmt:_t,id:Zt(),type:"divider",doc:St(d)};a.push(St(p)),e.doc=a}e.doc.forEach(p=>bt(e,p,!0))}},"docTranslator"),Ft=r(()=>(bt({id:"root"},{id:"root",doc:Et},!0),{id:"root",doc:Et}),"getRootDocV2"),ys=r(t=>{let e;t.doc?e=t.doc:e=t,E.info(e),Le(!0),E.info("Extract initial document:",e),e.forEach(i=>{switch(E.warn("Statement",i.stmt),i.stmt){case _t:B(i.id.trim(),i.type,i.doc,i.description,i.note,i.classes,i.styles,i.textStyles);break;case $t:we(i.state1,i.state2,i.description);break;case Ve:$e(i.id.trim(),i.classes);break;case Me:{let p=i.id.trim().split(","),g=i.styleClass.split(",");p.forEach(l=>{let _=j(l);if(_===void 0){let k=l.trim();B(k),_=j(k)}_.styles=g.map(k=>k.replace(/;/g,"")?.trim())})}break;case Ue:Vt(i.id.trim(),i.styleClass);break}});let c=Ie(),d=C().look;cs(),Q(void 0,Ft(),c,Tt,Yt,!0,d,W),Tt.forEach(i=>{if(Array.isArray(i.label)){if(i.description=i.label.slice(1),i.isGroup&&i.description.length>0)throw new Error("Group nodes can only have label. Remove the additional description for node ["+i.id+"]");i.label=i.label[0]}})},"extract"),B=r(function(t,e=tt,c=null,a=null,d=null,i=null,p=null,g=null){let l=t?.trim();if(m.states.has(l)?(m.states.get(l).doc||(m.states.get(l).doc=c),m.states.get(l).type||(m.states.get(l).type=e)):(E.info("Adding state ",l,a),m.states.set(l,{id:l,descriptions:[],type:e,doc:c,note:d,classes:[],styles:[],textStyles:[]})),a&&(E.info("Setting state description",l,a),typeof a=="string"&&wt(l,a.trim()),typeof a=="object"&&a.forEach(_=>wt(l,_.trim()))),d){let _=m.states.get(l);_.note=d,_.note.text=P.sanitizeText(_.note.text,C())}i&&(E.info("Setting state classes",l,i),(typeof i=="string"?[i]:i).forEach(k=>Vt(l,k.trim()))),p&&(E.info("Setting state styles",l,p),(typeof p=="string"?[p]:p).forEach(k=>ks(l,k.trim()))),g&&(E.info("Setting state styles",l,p),(typeof g=="string"?[g]:g).forEach(k=>vs(l,k.trim())))},"addState"),Le=r(function(t){Tt=[],Yt=[],kt={root:Ae()},m=kt.root,Z=0,W=Bt(),t||zt()},"clear"),j=r(function(t){return m.states.get(t)},"getState"),Ie=r(function(){return m.states},"getStates"),gs=r(function(){E.info("Documents = ",kt)},"logDocuments"),bs=r(function(){return m.relations},"getRelations");function vt(t=""){let e=t;return t===Gt&&(Z++,e=`${me}${Z}`),e}r(vt,"startIdIfNeeded");function mt(t="",e=tt){return t===Gt?me:e}r(mt,"startTypeIfNeeded");function Re(t=""){let e=t;return t===De&&(Z++,e=`${Ce}${Z}`),e}r(Re,"endIdIfNeeded");function Oe(t="",e=tt){return t===De?Ce:e}r(Oe,"endTypeIfNeeded");function Ne(t,e,c){let a=vt(t.id.trim()),d=mt(t.id.trim(),t.type),i=vt(e.id.trim()),p=mt(e.id.trim(),e.type);B(a,d,t.doc,t.description,t.note,t.classes,t.styles,t.textStyles),B(i,p,e.doc,e.description,e.note,e.classes,e.styles,e.textStyles),m.relations.push({id1:a,id2:i,relationTitle:P.sanitizeText(c,C())})}r(Ne,"addRelationObjs");var we=r(function(t,e,c){if(typeof t=="object")Ne(t,e,c);else{let a=vt(t.trim()),d=mt(t),i=Re(e.trim()),p=Oe(e);B(a,d),B(i,p),m.relations.push({id1:a,id2:i,title:P.sanitizeText(c,C())})}},"addRelation"),wt=r(function(t,e){let c=m.states.get(t),a=e.startsWith(":")?e.replace(":","").trim():e;c.descriptions.push(P.sanitizeText(a,C()))},"addDescription"),_s=r(function(t){return t.substring(0,1)===":"?t.substr(2).trim():t.trim()},"cleanupLabel"),Ts=r(()=>(ue++,"divider-id-"+ue),"getDividerId"),$e=r(function(t,e=""){W.has(t)||W.set(t,{id:t,styles:[],textStyles:[]});let c=W.get(t);e?.split(hs).forEach(a=>{let d=a.replace(/([^;]*);/,"$1").trim();if(RegExp(oe).exec(a)){let p=d.replace(ce,us).replace(oe,ce);c.textStyles.push(p)}c.styles.push(d)})},"addStyleClass"),Es=r(function(){return W},"getClasses"),Vt=r(function(t,e){t.split(",").forEach(function(c){let a=j(c);if(a===void 0){let d=c.trim();B(d),a=j(d)}a.classes.push(e)})},"setCssClass"),ks=r(function(t,e){let c=j(t);c!==void 0&&c.styles.push(e)},"setStyle"),vs=r(function(t,e){let c=j(t);c!==void 0&&c.textStyles.push(e)},"setTextStyle"),ms=r(()=>xe,"getDirection"),Ds=r(t=>{xe=t},"setDirection"),Cs=r(t=>t&&t[0]===":"?t.substr(1).trim():t.trim(),"trimColon"),xs=r(()=>{let t=C();return{nodes:Tt,edges:Yt,other:{},config:t,direction:Ee(Ft())}},"getData"),Ps={getConfig:r(()=>C().state,"getConfig"),getData:xs,addState:B,clear:Le,getState:j,getStates:Ie,getRelations:bs,getClasses:Es,getDirection:ms,addRelation:we,getDividerId:Ts,setDirection:Ds,cleanupLabel:_s,lineType:ds,relationType:fs,logDocuments:gs,getRootDoc:Ss,setRootDoc:ps,getRootDocV2:Ft,extract:ys,trimColon:Cs,getAccTitle:Xt,setAccTitle:Wt,getAccDescription:Jt,setAccDescription:Kt,addStyleClass:$e,setCssClass:Vt,addDescription:wt,setDiagramTitle:qt,getDiagramTitle:Qt},As=r(t=>`
defs #statediagram-barbEnd {
    fill: ${t.transitionColor};
    stroke: ${t.transitionColor};
  }
g.stateGroup text {
  fill: ${t.nodeBorder};
  stroke: none;
  font-size: 10px;
}
g.stateGroup text {
  fill: ${t.textColor};
  stroke: none;
  font-size: 10px;

}
g.stateGroup .state-title {
  font-weight: bolder;
  fill: ${t.stateLabelColor};
}

g.stateGroup rect {
  fill: ${t.mainBkg};
  stroke: ${t.nodeBorder};
}

g.stateGroup line {
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.transition {
  stroke: ${t.transitionColor};
  stroke-width: 1;
  fill: none;
}

.stateGroup .composit {
  fill: ${t.background};
  border-bottom: 1px
}

.stateGroup .alt-composit {
  fill: #e0e0e0;
  border-bottom: 1px
}

.state-note {
  stroke: ${t.noteBorderColor};
  fill: ${t.noteBkgColor};

  text {
    fill: ${t.noteTextColor};
    stroke: none;
    font-size: 10px;
  }
}

.stateLabel .box {
  stroke: none;
  stroke-width: 0;
  fill: ${t.mainBkg};
  opacity: 0.5;
}

.edgeLabel .label rect {
  fill: ${t.labelBackgroundColor};
  opacity: 0.5;
}
.edgeLabel {
  background-color: ${t.edgeLabelBackground};
  p {
    background-color: ${t.edgeLabelBackground};
  }
  rect {
    opacity: 0.5;
    background-color: ${t.edgeLabelBackground};
    fill: ${t.edgeLabelBackground};
  }
  text-align: center;
}
.edgeLabel .label text {
  fill: ${t.transitionLabelColor||t.tertiaryTextColor};
}
.label div .edgeLabel {
  color: ${t.transitionLabelColor||t.tertiaryTextColor};
}

.stateLabel text {
  fill: ${t.stateLabelColor};
  font-size: 10px;
  font-weight: bold;
}

.node circle.state-start {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node .fork-join {
  fill: ${t.specialStateColor};
  stroke: ${t.specialStateColor};
}

.node circle.state-end {
  fill: ${t.innerEndBackground};
  stroke: ${t.background};
  stroke-width: 1.5
}
.end-state-inner {
  fill: ${t.compositeBackground||t.background};
  // stroke: ${t.background};
  stroke-width: 1.5
}

.node rect {
  fill: ${t.stateBkg||t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}
.node polygon {
  fill: ${t.mainBkg};
  stroke: ${t.stateBorder||t.nodeBorder};;
  stroke-width: 1px;
}
#statediagram-barbEnd {
  fill: ${t.lineColor};
}

.statediagram-cluster rect {
  fill: ${t.compositeTitleBackground};
  stroke: ${t.stateBorder||t.nodeBorder};
  stroke-width: 1px;
}

.cluster-label, .nodeLabel {
  color: ${t.stateLabelColor};
  // line-height: 1;
}

.statediagram-cluster rect.outer {
  rx: 5px;
  ry: 5px;
}
.statediagram-state .divider {
  stroke: ${t.stateBorder||t.nodeBorder};
}

.statediagram-state .title-state {
  rx: 5px;
  ry: 5px;
}
.statediagram-cluster.statediagram-cluster .inner {
  fill: ${t.compositeBackground||t.background};
}
.statediagram-cluster.statediagram-cluster-alt .inner {
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.statediagram-cluster .inner {
  rx:0;
  ry:0;
}

.statediagram-state rect.basic {
  rx: 5px;
  ry: 5px;
}
.statediagram-state rect.divider {
  stroke-dasharray: 10,10;
  fill: ${t.altBackground?t.altBackground:"#efefef"};
}

.note-edge {
  stroke-dasharray: 5;
}

.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}
.statediagram-note rect {
  fill: ${t.noteBkgColor};
  stroke: ${t.noteBorderColor};
  stroke-width: 1px;
  rx: 0;
  ry: 0;
}

.statediagram-note text {
  fill: ${t.noteTextColor};
}

.statediagram-note .nodeLabel {
  color: ${t.noteTextColor};
}
.statediagram .edgeLabel {
  color: red; // ${t.noteTextColor};
}

#dependencyStart, #dependencyEnd {
  fill: ${t.lineColor};
  stroke: ${t.lineColor};
  stroke-width: 1;
}

.statediagramTitleText {
  text-anchor: middle;
  font-size: 18px;
  fill: ${t.textColor};
}
`,"getStyles"),Gs=As;export{ws as a,$s as b,Ps as c,Gs as d};

_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{"7LjZ":function(e,t,n){"use strict";n.r(t);var o=n("nKUr"),i=n("bmeg"),p=n("8TqS"),d=n("Oqez").Num;setTimeout((function(){var e=Desmos.Geometry(document.getElementById("geometry"),{sidebarCollapsed:!0});e.setState(a);var t=(1+Math.sqrt(5))/2;setInterval((function(){var n=e.getState();if(n){var o=Math.hypot(Math.abs(n.objects[62].x-n.objects[63].x),Math.abs(n.objects[62].y-n.objects[63].y))/1.2356979405,i=o/t,a=o-i,r=Math.sqrt(2*Math.pow(o,2));Object(p.a)(["275"],new d(o).toBase(t).toString(3),n),Object(p.a)(["122","115"],new d(i).toBase(t).toString(3),n),Object(p.a)(["165","200"],new d(a).toBase(t).toString(3),n),Object(p.a)(["384"],new d(r).toBase(t).toString(3),n),e.setState(n)}}),100)}),100);var a={version:"4",objects:{61:{id:"61",type:"segment",hidden:!0,parents:{point1:"62",point2:"63"},color:"#2d70b3"},62:{hidden:!1,type:"point",x:-1.6238823454714244,y:1.0454797368786466,parents:{},id:"62",color:"#6042a6",label:"A",showLabel:!0},63:{hidden:!0,type:"point",id:"63",parents:{},x:2.379641362712296,y:1.0172481379851026,color:"#6042a6",label:"C",showLabel:!0},66:{id:"66",type:"circle",hidden:!0,parents:{point1:"63",point2:"68"},color:"#388c46"},68:{hidden:!0,type:"glider",t:.2930398517019122,parents:{host:"61"},id:"68",color:"#6042a6",label:"D",showLabel:!0},69:{id:"69",type:"circle",hidden:!0,parents:{point1:"62",point2:"71"},color:"#388c46"},71:{hidden:!0,type:"glider",t:.7069827185524342,parents:{host:"61"},id:"71",color:"#6042a6"},74:{id:"74",type:"segment",hidden:!0,parents:{point1:"62",point2:"76"},color:"#2d70b3"},76:{hidden:!1,type:"intersection",negRoot:!0,parents:{host1:"69",host2:"66"},id:"76",color:"#6042a6"},79:{id:"79",type:"midpoint",hidden:!1,parents:{straight:"61"},color:"#6042a6",label:"B",showLabel:!0},81:{id:"81",type:"segment",hidden:!1,parents:{point1:"76",point2:"79"},color:"#2d70b3"},86:{type:"segment",id:"86",hidden:!0,parents:{point1:"79",point2:"62"},color:"#2d70b3"},89:{id:"89",type:"polygon",hidden:!0,parents:{points:["79","62","76"]},color:"#2d70b3"},100:{id:"100",type:"angle",hidden:!0,showLabel:!0,label:"{angle}",parents:{point1:"76",point2:"79",point3:"62"},color:"#000000"},104:{id:"104",type:"angle",hidden:!0,showLabel:!0,label:"{angle}",parents:{point1:"76",point2:"62",point3:"79"},color:"#000000"},110:{id:"110",type:"perpendicular",hidden:!0,parents:{straight:"81",point:"76"},color:"#2d70b3"},112:{id:"112",type:"perpendicular",hidden:!0,parents:{straight:"86",point:"62"},color:"#2d70b3"},115:{type:"segment",id:"115",hidden:!1,parents:{point1:"119",point2:"62"},color:"#2d70b3",label:"{length}",showLabel:!0},118:{id:"118",type:"polygon",hidden:!0,parents:{points:["119","62","79","76"]},color:"#2d70b3"},119:{hidden:!1,type:"intersection",negRoot:!1,parents:{host1:"112",host2:"110"},id:"119",color:"#6042a6"},122:{type:"segment",id:"122",hidden:!1,parents:{point1:"76",point2:"119"},color:"#2d70b3",label:"{length}",showLabel:!0},147:{id:"147",type:"midpoint",hidden:!0,parents:{straight:"86"},color:"#6042a6"},151:{id:"151",type:"circle",hidden:!0,parents:{point1:"147",point2:"76"},color:"#388c46"},156:{id:"156",type:"perpendicular",hidden:!0,parents:{straight:"61",point:"157"},color:"#2d70b3"},157:{hidden:!1,type:"intersection",negRoot:!1,parents:{host1:"61",host2:"151"},id:"157",color:"#6042a6"},158:{id:"158",type:"perpendicular",hidden:!0,parents:{straight:"156",point:"76"},color:"#2d70b3"},165:{id:"165",type:"segment",hidden:!1,parents:{point1:"76",point2:"167"},color:"#2d70b3",label:"{length}",showLabel:!0},167:{hidden:!1,type:"intersection",negRoot:!1,parents:{host1:"158",host2:"156"},id:"167",color:"#6042a6"},170:{id:"170",type:"circle",hidden:!0,parents:{point1:"167",point2:"76"},color:"#388c46"},184:{hidden:!1,type:"intersection",negRoot:!1,parents:{host1:"156",host2:"170"},id:"184",color:"#6042a6"},191:{id:"191",type:"circle",hidden:!0,parents:{point1:"76",point2:"167"},color:"#388c46"},196:{hidden:!1,type:"intersection",negRoot:!1,parents:{host1:"81",host2:"191"},id:"196",color:"#6042a6"},198:{type:"segment",id:"198",hidden:!1,parents:{point1:"76",point2:"196"},color:"#2d70b3"},199:{type:"segment",id:"199",hidden:!1,parents:{point1:"196",point2:"184"},color:"#2d70b3"},200:{type:"segment",id:"200",hidden:!1,parents:{point1:"184",point2:"167"},color:"#2d70b3",label:"{length}",showLabel:!0},201:{id:"201",type:"polygon",hidden:!0,parents:{points:["76","196","184","167"]},color:"#2d70b3"},214:{id:"214",type:"segment",hidden:!0,parents:{point1:"76",point2:"184"},color:"#2d70b3",label:"{length}",showLabel:!0},220:{type:"segment",id:"220",hidden:!1,parents:{point1:"79",point2:"157"},color:"#2d70b3"},221:{type:"segment",id:"221",hidden:!1,parents:{point1:"157",point2:"167"},color:"#2d70b3"},222:{id:"222",type:"polygon",hidden:!0,parents:{points:["76","79","157","167"]},color:"#2d70b3"},247:{id:"247",type:"angle",hidden:!0,showLabel:!0,label:"{angle}",parents:{point1:"62",point2:"76",point3:"79"},color:"#000000"},251:{id:"251",type:"angle",hidden:!0,showLabel:!0,label:"{angle}",parents:{point1:"76",point2:"196",point3:"184"},color:"#000000"},255:{id:"255",type:"angle",hidden:!0,showLabel:!0,label:"{angle}",parents:{point1:"76",point2:"184",point3:"196"},color:"#000000"},259:{id:"259",type:"angle",hidden:!0,showLabel:!0,label:"{angle}",parents:{point1:"196",point2:"76",point3:"184"},color:"#000000"},265:{id:"265",type:"segment",hidden:!1,parents:{point1:"184",point2:"157"},color:"#2d70b3"},270:{id:"270",type:"segment",hidden:!1,parents:{point1:"184",point2:"167"},color:"#2d70b3"},275:{id:"275",type:"segment",hidden:!1,parents:{point1:"62",point2:"157"},color:"#2d70b3",label:"{length}",showLabel:!0},282:{hidden:!0,type:"point",x:-3.9631517052136425,y:1.7816542532340263,parents:{},id:"282",color:"#6042a6"},288:{hidden:!0,type:"point",x:.14112112896903106,y:2.052136417091337,parents:{},id:"288",color:"#6042a6"},296:{id:"296",type:"midpoint",hidden:!1,parents:{straight:"165"},color:"#6042a6"},348:{id:"348",type:"circle",hidden:!0,parents:{point1:"62",point2:"157"},color:"#388c46"},358:{id:"358",type:"line",hidden:!0,parents:{point1:"62",point2:"119"},color:"#2d70b3"},363:{id:"363",type:"perpendicular",hidden:!0,parents:{straight:"358",point:"364"},color:"#2d70b3"},364:{hidden:!1,type:"intersection",negRoot:!0,parents:{host1:"358",host2:"348"},id:"364",color:"#6042a6"},365:{id:"365",type:"perpendicular",hidden:!0,parents:{straight:"363",point:"157"},color:"#2d70b3"},368:{type:"segment",id:"368",hidden:!1,parents:{point1:"62",point2:"364"},color:"#2d70b3"},369:{type:"segment",id:"369",hidden:!1,parents:{point1:"364",point2:"374"},color:"#2d70b3"},370:{type:"segment",id:"370",hidden:!1,parents:{point1:"374",point2:"157"},color:"#2d70b3"},371:{id:"371",type:"polygon",hidden:!1,parents:{points:["62","364","374","157"]},color:"#2d70b3"},374:{hidden:!1,type:"intersection",negRoot:!1,parents:{host1:"365",host2:"363"},id:"374",color:"#6042a6"},384:{id:"384",type:"segment",hidden:!1,parents:{point1:"364",point2:"157"},color:"#2d70b3",label:"{length}",showLabel:!0},389:{id:"389",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"157",point2:"62",point3:"364"},color:"#000000"},393:{id:"393",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"62",point2:"364",point3:"157"},color:"#000000"},403:{id:"403",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"62",point2:"157",point3:"364"},color:"#000000"},407:{id:"407",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"364",point2:"374",point3:"157"},color:"#000000"},416:{id:"416",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"374",point2:"157",point3:"364"},color:"#000000"},420:{id:"420",type:"angle",hidden:!1,showLabel:!0,label:"{angle}",parents:{point1:"157",point2:"364",point3:"374"},color:"#000000"},426:{id:"426",type:"segment",hidden:!0,parents:{point1:"62",point2:"63"},color:"#2d70b3",label:"{length}",showLabel:!0}},viewport:{centerX:0,centerY:0,size:15},customTools:{},graphSettings:{showGrid:!1,showAxes:!1,showAxisNumbers:!1}},r=n("ddIo");n("q1tI"),t.default=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(r.a,{title:"DecimalSystem Golden Ratio Demo",url:"https://decimalsystem.js.org/golden"}),Object(o.jsx)(i.a,{})]})}},UZX3:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/golden",function(){return n("7LjZ")}])}},[["UZX3",0,1,3]]]);
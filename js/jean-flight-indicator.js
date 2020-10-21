!function(t,e)
{"function"==typeof define&&define.amd?define([],e):(t.FlightIndicator=t.FlightIndicator||{},t.FlightIndicator=e())}
(this,function()
{var t,e;
return function(n)
{function i(t)
{for(var e=0,n=[];e<t.length;e++)
{var i=s.resolved[t[e]];i&&n.push(i)}
return n}function r()
{for(var t in s.unresolved){var e=s.unresolved[t],n=i(e.dependencies);o(t,e.factory,e.dependencies,n,!1)}}
function o(t,e,n,i,r){if(i.length===n.length){var o=e.apply(e,i);s.resolved[t]=o||{}}
else r&&(s.unresolved[t]={dependencies:n,factory:e})}
var s={resolved:{},unresolved:{}};e=function(t,e,n){return s.resolved[t]?void console.warn("There is already a module with id <"+t+"> defined. Therefore this module will be ignored"):"string"==typeof t&&Array.isArray(e)&&"function"==typeof n?(0===e.length?o(t,n,e,[],!1):o(t,n,e,i(e),!0),void r()):void console.warn("Passed arguments for module are invalid")},e.amd={},t=function(t,e){t=Array.isArray(t)?t:[t];var n=i(t);if(1===n.length&&!e)return n[0];if(n.length!==t.length||!e)throw new Error("Not all modules are resolved");e.apply(e,n)}}(),e("node_modules/jean-amd/dist/jean-amd",function(){}),e("TypeCheck",[],function(){return{isString:function(t){return"string"==typeof t},isBoolean:function(t){return"boolean"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:function(t){return!this.isArray(t)&&null!==t&&"object"==typeof t},isEmptyObject:function(t){var e=!1;return this.isObject(t)&&0===Object.keys(t).length&&(e=!0),e},isFunction:function(t){return"function"==typeof t},isDefined:function(t){return void 0!==t&&null!=t},isArray:function(t){return Array.isArray(t)},isEmptyArray:function(t){return this.isArray(t)&&0===t.length},isArrayTypeOf:function(t,e){var n=!0;if(!this.isString(e))throw new TypeError("options.type is not a string");if(!Array.isArray(t))throw new TypeError("options.array is not an array");0===t.length&&(n=!1);for(var i=0,r=t.length;i<r;i++){if(typeof t[i]!==e){n=!1;break}}return n},areObjectsInstanceOf:function(t,e){if(!this.isArray(t))throw new TypeError("array is not an array");if(!this.isFunction(e))throw new TypeError("fn is not a function");var n,i,r=t.length,o=!0;for(n=0;n<r;n++)if(i=t[n],!this.isObject(i)||!this.isInstanceOf(i,e)){o=!1;break}return o},areObjectsInstancesOf:function(t,e){var n,i,r,o,s=t.length,a=e.length,l=!0;if(!this.isArray(t))throw new TypeError("objects is not an array");if(!this.isArray(e))throw new TypeError("constructors is not an array");if(!this.isArrayTypeOf(e,"function"))throw new TypeError("constructors is not an array of constructor functions");for(n=0;n<s;n++){for(r=t[n],o=!0,i=0;i<a&&this.isObject(r);i++)if(this.isInstanceOf(r,e[i])){o=!1;break}if(!0===o){l=!1;break}}return l},isInstanceOf:function(t,e){if(!this.isObject(t))throw new TypeError("child is not an object");
if(!this.isFunction(e))throw new TypeError("parent is not a function");return t instanceof e},isEnumValue:function(t,e){if(!this.isString(t)&&!this.isNumber(t))throw new TypeError("value must be a String or a Number");if(!this.isObject(e))throw new TypeError("o is not an object");var n,i=Object.keys(e),r=i.length,o=!1;for(n=0;n<r;n++)if(e[i[n]]===t){o=!0;break}return o}}}),e("Inheritance",["TypeCheck"],function(t){return{inheritConstructor:function(e,n,i){var r=!1,i=i||{};return t.isFunction(e)&&t.isObject(n)&&(Array.isArray(i)?e.apply(n,i):e.apply(n,[i]),r=!0),r},inheritPrototype:function(e,n){var i=!1;return t.isFunction(e)&&t.isFunction(n)&&(e.prototype=Object.create(n.prototype),e.prototype.constructor=e,i=!0),i}}}),e("NotImplementedError",[],function(){var t=function(t){this.name="NotImplementedError",this.message=t||"Function must be implemented in Class"};return t.prototype=Error.prototype,t}),e("Failure",[],function(){return{throwError:function(t){throw new Error(t)},throwTypeError:function(t){throw new TypeError(t)}}}),e("Interface",["NotImplementedError","TypeCheck","Failure"],function(t,e,n){return{areMembersImplemented:function(t,i){e.isObject(i)||n.throwTypeError("instance is not an object"),e.isArrayTypeOf(t,"string")||n.throwTypeError("memberList is no a string array");var r,o=t.length,s="",a=[];for(r=0;r<o;r++)s=t[r],i.hasOwnProperty(s)||a.push(s);if(a.length>0)throw new TypeError("Members "+a.join(" ")+" are not implemented");return!0},areMethodsImplemented:function(i,r){e.isObject(r)||n.throwTypeError("instance is not an object"),e.isArrayTypeOf(i,"string")||n.throwTypeError("methodList is no a string array");var o,s=i.length,a="",l=Object.getPrototypeOf(r),d=[];for(o=0;o<s;o++)a=i[o],l.hasOwnProperty(a)||d.push(a);if(d.length>0)throw new t("Methods "+d.join(" ")+" are not implemented");return!0}}}),e("BaseOptions",[],function(){return{assets:"img/"}}),e("IndicatorBase",["TypeCheck","Interface","Failure","BaseOptions"],function(t,e,n,i){var r=function(i){t.isString(i.containerId)||n.throwTypeError("options.containerId is not a string"),e.areMethodsImplemented(["update"],this),this.svgElement=null,this.options=i,this.container=null,this.isReady=!1};return r.prototype.init=function(t){var e=this.options.containerId;this.container=document.getElementById(e),this.container||n.throwTypeError("There is no indicator container with id: "+e),this.container.innerHTML=this.options.template;
var r=document.getElementById(t.svgId),o=this;
if (typeof r  == null) {
  // Now we know that foo is defined, we are good to go.
  return;
}
r.data=i.assets+t.svgDataName,r.addEventListener("load",function(){o.svgElement=r.contentDocument,o.isReady=!0,t.onSvgReady()},!0)},r.prototype.calculatePercentage=function(t,e){return Math.abs(t)*e},r.prototype.isPositiveNumber=function(t){return t>0},r.prototype.isNegativeNumber=function(t){return t<0},r.prototype.formatCompassDegreeString=function(t){var e="";if(t=t.toFixed(0),this.isPositiveNumber(t))switch(t=t.toString(),t.length){case 1:e="000"+t;break;
case 2:e="00"+t;
break;
case 3:e="0"+t}else if(this.isNegativeNumber(t))switch(t=Math.abs(t),t=t.toString(),t.length){
	case 1:e="-00"+t;break;
	case 2:e="-0"+t;break;
	case 3:e="-"+t}else e="0000";return e},r.prototype.formatHorizonDegreeString=r.prototype.formatSpeedDegreeString=function(t){var e="";
	if(t=t.toFixed(0),this.isPositiveNumber(t))switch(t=t.toString(),t.length){
		case 1:e="00"+t;break;
		case 2:e="0"+t;break;
		case 3:case 4:e=t}else if(this.isNegativeNumber(t))switch(t=Math.abs(t),t=t.toString(),t.length){case 1:e="-0"+t;break;case 2:e="-"+t;break;case 3:case 4:e=t}else e="000";return e},r.prototype.formatVSpeedString=r.prototype.formatAltitudeString=function(t){var e="";if(t=t.toFixed(0),this.isPositiveNumber(t))switch(t=t.toString(),t.length){
			case 1:e="0000"+t;break;
			case 2:e="000"+t;break;
			case 3:e="00"+t;break;
			case 4:e="0"+t;break;
			case 5:case 6:e=t}else if(this.isNegativeNumber(t))switch(t=Math.abs(t),t=t.toString(),t.length){
				case 1:e="-000"+t;break;
				case 2:e="-00"+t;break;
				case 3:e="-0"+t;break;
				case 4:e="-"+t;break;
				case 5:case 6:e=t;}else e="00000";return e},r.prototype.getElementCenter=function(t){var e=t.getBBox();return{x:e.x+e.width/2,y:e.y+e.height/2}},r}),e("text",{load:function(t){throw new Error("Dynamic load not allowed: "+t)}}),e("text!heading-html",[],function(){return'<div id="heading-module" style="width: 100%">\r\n    <object id="heading-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n</div>'}),e("HeadingIndicator",["Inheritance","IndicatorBase","text!heading-html"],function(t,e,n){var i=function(i){var r=this;
				i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"heading-svg",svgDataName:"heading.svg",onSvgReady:function(){r.compassRose=r.svgElement.getElementById("compass-rose"),r.compassValueText=r.svgElement.getElementById("compass-value-text"),r.compassRose.setAttribute("transform","")}})};return t.inheritPrototype(i,e),i.prototype.update=function(t){if(this.isReady){t=t>360?360:t,t=t<-360?-360:t;var e=this.getElementCenter(this.compassRose);this.compassRose.attributes.transform.nodeValue="rotate("+-t+" "+e.x+" "+e.y+")",this.compassValueText.childNodes[0].textContent=this.formatCompassDegreeString(t)}},i}),e("text!speed-html",[],function(){return'<div id="speed-module" style="width: 100%">\r\n    <object id="speed-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n</div>'}),e("SpeedIndicator",["Inheritance","IndicatorBase","text!speed-html"],function(t,e,n){var i=function(i){var r=this;i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"speed-svg",svgDataName:"speed.svg",onSvgReady:function(){r.speedNeedle=r.svgElement.getElementById("speed-needle"),r.speedValueText=r.svgElement.getElementById("speed-value-text"),r.speedNeedle.setAttribute("transform","")}})};
return t.inheritPrototype(i,e),i.prototype.update=function(t){if(this.isReady){t=t>160?160:t,t=t<0?0:t;var e=this.speedNeedle.getBBox(),n=e.x+e.width/2,i=e.y+.94*e.height;this.speedNeedle.attributes.transform.nodeValue="rotate("+2*t+" "+n+" "+i+")",this.speedValueText.childNodes[0].textContent=this.formatSpeedDegreeString(t)}},i}),e("text!altitude-html",[],function(){return'<div id="altitude-module" style="width: 100%">\r\n    <object id="altitude-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n</div>'}),e("AltitudeIndicator",["Inheritance","IndicatorBase","text!altitude-html"],function(t,e,n){var i=function(i){var r=this;i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"altitude-svg",svgDataName:"altitude.svg",onSvgReady:function(){r.altitudeValueText=r.svgElement.getElementById("altitude-value-text"),r.hundredNeedle=r.svgElement.getElementById("needle-alt-hundred"),r.thousandNeedle=r.svgElement.getElementById("needle-alt-thousand"),r.tenthousandNeedle=r.svgElement.getElementById("needle-alt-tenthousand"),r.hundredNeedle.setAttribute("transform",""),r.thousandNeedle.setAttribute("transform",""),r.tenthousandNeedle.setAttribute("transform","")}}),this.degreePerHundredFeet=.36,this.degreePerThousandFeet=.036,this.degreePerTenthousandFeet=.0036};
return t.inheritPrototype(i,e),i.prototype.update=function(t){if(this.isReady){t=t>1e5?1e5:t,t=t<0?0:t;var e=this.hundredNeedle.getBBox(),n=e.x+e.width/2,i=e.y+.94*e.height,r=this.degreePerHundredFeet,o=this.degreePerThousandFeet,s=this.degreePerTenthousandFeet;this.hundredNeedle.attributes.transform.nodeValue="rotate("+r*t+" "+n+" "+i+")",this.thousandNeedle.attributes.transform.nodeValue="rotate("+o*t+" "+n+" "+i+")",this.tenthousandNeedle.attributes.transform.nodeValue="rotate("+s*t+" "+n+" "+i+")",this.altitudeValueText.childNodes[0].textContent=this.formatAltitudeString(t)}},i}),e("text!horizon-html",[],function(){return'<div id="horizon-module" style="width: 100%">\r\n    <object id="horizon-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n</div>'}),e("HorizonIndicator",["Inheritance","IndicatorBase","text!horizon-html"],function(t,e,n){var i=function(i){var r=this;i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"horizon-svg",svgDataName:"horizon.svg",onSvgReady:function(){r.horizonElement=r.svgElement.getElementById("horizon-element"),r.horizonElement.setAttribute("transform",""),r.pitchValueText=r.svgElement.getElementById("pitch-value-text"),r.rollValueText=r.svgElement.getElementById("roll-value-text")}}),this.pixelBounds={PITCH_MAX:128,PITCH_MIN:-128,PIXELS_PER_PITCH:3.2},this.valueBounds={PITCH_MAX:40,PITCH_MIN:-40,ROLL_MAX:30,ROLL_MIN:-30}};return t.inheritPrototype(i,e),i.prototype.update=function(t,e){if(this.isReady){var n,i=this.pixelBounds,r=t,o=e;t=t>i.PITCH_MAX?i.PITCH_MAX:t,t=t<i.PITCH_MIN?i.PITCH_MIN:t,e=e>i.ROLL_MAX?i.ROLL_MAX:e,e=e<i.ROLL_MIN?i.ROLL_MIN:e,n=this.getElementCenter(this.horizonElement),this.horizonElement.attributes.transform.nodeValue="translate(0, "+i.PIXELS_PER_PITCH*t+") rotate("+e+" "+n.x+" "+n.y+")",this.pitchValueText.childNodes[0].textContent=this.formatHorizonDegreeString(r),this.rollValueText.childNodes[0].textContent=this.formatHorizonDegreeString(o)}},i}),e("text!vertical-speed-html",[],function(){return'<div id="vertical-speed-module" style="width: 100%">\r\n    <object id="vertical-speed-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n</div>'}),e("VerticalSpeedIndicator",["Inheritance","IndicatorBase","text!vertical-speed-html"],function(t,e,n){var i=function(i){var r=this;i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"vertical-speed-svg",svgDataName:"vertical-speed.svg",onSvgReady:function(){r.varioElement=r.svgElement.getElementById("vario-element"),r.varioElement.setAttribute("transform",""),r.upValueText=r.svgElement.getElementById("up-value-text"),r.downValueText=r.svgElement.getElementById("down-value-text")}}),this.speedPerPixel=.045};return t.inheritPrototype(i,e),i.prototype.update=function(t){if(this.isReady){var e,n,i=t;t=t>4e3?4e3:t,t=t<-4e3?-4e3:t;var r=this.varioElement.getBBox(),o=r.x+.93*r.width,s=r.y+r.height/2;this.varioElement.attributes.transform.nodeValue="rotate("+this.speedPerPixel*t+" "+o+" "+s+")",this.isPositiveNumber(i)?(e=this.formatVSpeedString(i),n="00000"):this.isNegativeNumber(i)&&(e="00000",n=this.formatVSpeedString(i)),this.upValueText.childNodes[0].textContent=e,this.downValueText.childNodes[0].textContent=n}},i}),e("text!turn-html",[],function(){return'<div id="turn-module" style="width: 100%">\r\n    <object id="turn-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n</div>'}),e("TurnIndicator",["Inheritance","IndicatorBase","text!turn-html"],function(t,e,n){var i=function(i){var r=this;
i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"turn-svg",svgDataName:"turn.svg",onSvgReady:function(){r.vehicle=r.svgElement.getElementById("vehicle"),r.vehicle.setAttribute("transform",""),r.ball=r.svgElement.getElementById("ball"),r.ball.setAttribute("transform","")}}),this.maxTurn=17.5,this.maxSlip=84};return t.inheritPrototype(i,e),i.prototype.update=function(t,e){if(this.isReady){var n=this.vehicle.getBBox(),i=n.x+n.width/2,r=n.y+n.height/2;this.vehicle.attributes.transform.nodeValue="rotate("+t+" "+i+" "+r+")",this.ball.attributes.transform.nodeValue="translate("+e+", 0)"}},i}),e("text!stick-html",[],function(){return'<div id="stick-module" style="width: 100%">\r\n    <object id="stick-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n</div>'}),e("StickIndicator",["Inheritance","IndicatorBase","text!stick-html"],function(t,e,n){var i=function(i){var r=this;i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"stick-svg",svgDataName:"stick.svg",onSvgReady:function(){r.stickElement=r.svgElement.getElementById("stick-element"),r.stickElement.setAttribute("transform","")}}),this.bounds={high:175,low:-175}};return t.inheritPrototype(i,e),i.prototype.update=function(t,e){if(this.isReady){t=t>1?1:t,t=t<-1?-1:t,e=e>1?1:e,e=e<-1?-1:e;var n,i;n=this.isPositiveNumber(t)?this.calculatePercentage(t,this.bounds.high):this.isNegativeNumber(t)?this.calculatePercentage(t,this.bounds.low):0,i=this.isPositiveNumber(e)?this.calculatePercentage(e,this.bounds.high):this.isNegativeNumber(e)?this.calculatePercentage(e,this.bounds.low):0,this.stickElement.attributes.transform.nodeValue="translate("+n+", "+-i+")"}},i}),e("text!pedal-html",[],function(){return'<div id="pedal-module" style="width: 100%">\r\n        <object id="pedal-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n    </div>'}),e("PedalIndicator",["Inheritance","IndicatorBase","text!pedal-html"],function(t,e,n){var i=function(i){var r=this;i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"pedal-svg",svgDataName:"pedal.svg",onSvgReady:function(){r.pedalLeftElement=r.svgElement.getElementById("pedal-left-element"),r.pedalRightElement=r.svgElement.getElementById("pedal-right-element"),r.pedalLeftElement.setAttribute("transform",""),r.pedalRightElement.setAttribute("transform","")}}),this.bounds={high:373}};return t.inheritPrototype(i,e),i.prototype.update=function(t,e){if(this.isReady){t=t>1?1:t,t=t<0?0:t,e=e>1?1:e,e=e<0?0:e;var n,i;n=this.calculatePercentage(t,this.bounds.high),i=this.calculatePercentage(e,this.bounds.high),this.pedalLeftElement.attributes.transform.nodeValue="translate(0, "+n+")",this.pedalRightElement.attributes.transform.nodeValue="translate(0, "+i+")"}},i}),e("text!collective-html",[],function(){return'<div id="collective-module" style="width: 100%">\r\n    <object id="collective-svg" style="width: 100%" data="" type="image/svg+xml"></object>\r\n</div>'}),e("CollectiveIndicator",["Inheritance","IndicatorBase","text!collective-html"],function(t,e,n){var i=function(i){var r=this;i.template=n,t.inheritConstructor(e,this,i),this.init({svgId:"collective-svg",svgDataName:"collective.svg",onSvgReady:function(){r.collectiveElement=r.svgElement.getElementById("collective-element"),r.collectiveValueText=r.svgElement.getElementById("collective-value-text"),r.collectiveElement.setAttribute("transform","")}})};
return t.inheritPrototype(i,e),i.prototype.update=function(t){if(this.isReady){t=t>60?60:t,t=t<0?0:t;var e=this.collectiveElement.getBBox(),n=e.x,i=e.y+e.height/2;this.collectiveElement.attributes.transform.nodeValue="rotate("+-t+" "+n+" "+i+")",this.collectiveValueText.childNodes[0].textContent=this.formatSpeedDegreeString(t)}},i}),e("src/base/FlightIndicator",["TypeCheck","HeadingIndicator","SpeedIndicator","AltitudeIndicator","HorizonIndicator","VerticalSpeedIndicator","TurnIndicator","StickIndicator","PedalIndicator","CollectiveIndicator","BaseOptions"],function(t,e,n,i,r,o,s,a,l,d,c){return{Heading:e,Speed:n,Altitude:i,Horizon:r,VerticalSpeed:o,Stick:a,Pedal:l,Collective:d,Turn:s,setOptions:function(e)
{c.assets=t.isString(e.assets)?e.assets:function(){return console.info("The standard asset path is used"),c.assets}()}}}),t("src/base/FlightIndicator")});
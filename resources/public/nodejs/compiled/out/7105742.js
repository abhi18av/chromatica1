goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40439__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40440__i = 0, G__40440__a = new Array(arguments.length -  0);
while (G__40440__i < G__40440__a.length) {G__40440__a[G__40440__i] = arguments[G__40440__i + 0]; ++G__40440__i;}
  args = new cljs.core.IndexedSeq(G__40440__a,0,null);
} 
return G__40439__delegate.call(this,args);};
G__40439.cljs$lang$maxFixedArity = 0;
G__40439.cljs$lang$applyTo = (function (arglist__40441){
var args = cljs.core.seq(arglist__40441);
return G__40439__delegate(args);
});
G__40439.cljs$core$IFn$_invoke$arity$variadic = G__40439__delegate;
return G__40439;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40442__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40443__i = 0, G__40443__a = new Array(arguments.length -  0);
while (G__40443__i < G__40443__a.length) {G__40443__a[G__40443__i] = arguments[G__40443__i + 0]; ++G__40443__i;}
  args = new cljs.core.IndexedSeq(G__40443__a,0,null);
} 
return G__40442__delegate.call(this,args);};
G__40442.cljs$lang$maxFixedArity = 0;
G__40442.cljs$lang$applyTo = (function (arglist__40444){
var args = cljs.core.seq(arglist__40444);
return G__40442__delegate(args);
});
G__40442.cljs$core$IFn$_invoke$arity$variadic = G__40442__delegate;
return G__40442;
})()
;

return null;
});

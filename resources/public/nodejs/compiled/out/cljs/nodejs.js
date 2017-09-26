// Compiled by ClojureScript 1.9.908 {:target :nodejs}
goog.provide('cljs.nodejs');
goog.require('cljs.core');
cljs.nodejs.require = require;
cljs.nodejs.process = process;
cljs.nodejs.enable_util_print_BANG_ = (function cljs$nodejs$enable_util_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__40400__delegate = function (args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
};
var G__40400 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40401__i = 0, G__40401__a = new Array(arguments.length -  0);
while (G__40401__i < G__40401__a.length) {G__40401__a[G__40401__i] = arguments[G__40401__i + 0]; ++G__40401__i;}
  args = new cljs.core.IndexedSeq(G__40401__a,0,null);
} 
return G__40400__delegate.call(this,args);};
G__40400.cljs$lang$maxFixedArity = 0;
G__40400.cljs$lang$applyTo = (function (arglist__40403){
var args = cljs.core.seq(arglist__40403);
return G__40400__delegate(args);
});
G__40400.cljs$core$IFn$_invoke$arity$variadic = G__40400__delegate;
return G__40400;
})()
;

cljs.core._STAR_print_err_fn_STAR_ = (function() { 
var G__40404__delegate = function (args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
};
var G__40404 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40405__i = 0, G__40405__a = new Array(arguments.length -  0);
while (G__40405__i < G__40405__a.length) {G__40405__a[G__40405__i] = arguments[G__40405__i + 0]; ++G__40405__i;}
  args = new cljs.core.IndexedSeq(G__40405__a,0,null);
} 
return G__40404__delegate.call(this,args);};
G__40404.cljs$lang$maxFixedArity = 0;
G__40404.cljs$lang$applyTo = (function (arglist__40406){
var args = cljs.core.seq(arglist__40406);
return G__40404__delegate(args);
});
G__40404.cljs$core$IFn$_invoke$arity$variadic = G__40404__delegate;
return G__40404;
})()
;

return null;
});

//# sourceMappingURL=nodejs.js.map?rel=1506435337479

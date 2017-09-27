(ns cljs.user
  (:require [chromatica1.core]
            [chromatica1.system :as system]
            [figwheel-sidecar.repl-api :as f]))

(def go system/go)
(def reset system/reset)
(def stop system/stop)
(def start system/start)


(defn fig-start
  []
  (f/start-figwheel!))

(defn fig-stop
  []
  (f/stop-figwheel!))

(defn cljs-repl
  []
  (f/cljs-repl))
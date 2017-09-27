(defproject hello-nodejs "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :min-lein-version "2.7.1"

  :dependencies [
           [org.clojure/clojure "1.9.0-beta1"]
                 [org.clojure/clojurescript "1.9.908" :scope "provided"]

                 ]

  :plugins [[lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
            [lein-figwheel "0.5.13"]]

  :source-paths ["src"]

  :clean-targets ["server.js"
                  "target"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :figwheel true
              :compiler {
                :main hello-nodejs.core
                :asset-path "target/js/compiled/dev"
                :output-to "target/js/compiled/hello_nodejs.js"
                :output-dir "target/js/compiled/dev"
                :target :nodejs
                :optimizations :none
                :source-map-timestamp true}}]}

  :profiles {:dev {:dependencies [[figwheel-sidecar "0.5.13"]
                                  [com.cemerick/piggieback "0.2.2"]]
                   :source-paths ["src" "dev"]
                   :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]}}})


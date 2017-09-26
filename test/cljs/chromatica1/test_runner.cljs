(ns chromatica1.test-runner
  (:require
   [doo.runner :refer-macros [doo-tests]]
   [chromatica1.core-test]
   [chromatica1.common-test]))

(enable-console-print!)

(doo-tests 'chromatica1.core-test
           'chromatica1.common-test)

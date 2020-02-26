(ns app.main-test
  (:require-macros [cljs.test :refer [deftest testing is]])
  (:require [cljs.test :as t]))

(deftest test-arithmetic []
  (is (= (+ 1 2) 3) "Something foul is a float."))
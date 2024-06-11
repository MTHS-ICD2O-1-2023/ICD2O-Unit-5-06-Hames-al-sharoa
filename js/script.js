// Copyright (c) 2024 hames al sharoa All rights reserved
//
// Created by: hames al sharoa
// Created on: may 2024
// This file contains the JS functions for index.html

"use strict"

/**
 * Check service worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit5-06-JS/sw.js", {
    scope: "/ICS2O-Unit5-06-JS/",
  })
}

/**
 * This function calculates the user's multiplication question using repeated addition.
 */
function myButtonClicked() {
  // input
  const value1 = parseInt(document.getElementById("value1").value)
  const value2 = parseInt(document.getElementById("value2").value)

  let counter = 0
  let sum = 0

  // process
  while (counter < value2) {
    sum += value1
    counter++
  }

  // output
  document.getElementById("sum").innerHTML =
    value1 + " x " + value2 + " = " + sum
}
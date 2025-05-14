"use strict";

const params = new URLSearchParams(window.location.search);
  const firstName = params.get("FirstName");
  if (firstName) {document.getElementById("greeting").textContent = `${firstName}，Hello!`;}
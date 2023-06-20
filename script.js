//your JS code here. If required.
const bi = document.getElementById("browser-info");
let browserName = navigator.appName;
let version = navigator.appVersion;
bi.innerHTML = `You are using ${browserName} version ${version}`;

/* tab  */

$(document).ready(function(){
  $('ul.tabs').tabs();
});
$(document).ready(function(){
  $('ul.tabs').tabs;
});

/*document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.modal');
  var instances = M.Modal.init(elems, 0.5);
});*/


var tab_title = '';
function display_h1(results) {
  var result = '';
  [].forEach.call(results, function (img) {
    if (img) {
      result += img.src + ': ' + img.alt + '\n';
    }
  });
  document.querySelector("#id1").innerHTML = result;
  // h1 = results;
  // document.querySelector("#id1").innerHTML = "<p>tab title: " + tab_title + "</p><p>dom h1: " + h1 + "</p>";
}
var btn = document.getElementById('getImage');
btn.addEventListener('click', function () {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/inject.js'
    }, display_h1);
  });

});

var btn1 = document.getElementById('getLayout');
btn1.addEventListener('click', function () {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getlayout.js'
    }, display_h1);
  });

});

var btn2 = document.getElementById('outlinecomp');
btn2.addEventListener('click', function () {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/outlinecomp.js'
    }, display_h1);
  });

});

var btn3 = document.getElementById('getcomp');
btn3.addEventListener('click', function () {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/getcomp.js'
    }, display_h1);
  });

});


var btn4 = document.getElementById('getmeta');
btn4.addEventListener('click', function () {
  chrome.tabs.query({ active: true }, function (tabs) {
    var tab = tabs[0];
    tab_title = tab.title;
    chrome.tabs.executeScript(tab.id, {
      file: 'js/metainfo.js'
    }, display_h1);
  });

});


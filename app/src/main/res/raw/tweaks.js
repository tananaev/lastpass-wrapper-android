function removeAll (selector) {
    var elements = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, function (node) {
        node.parentNode.removeChild(node);
    });
}

function loadTweaks () {
    removeAll("#main2 > br");
    removeAll("body > br");
    removeAll("#main2 > img");
    removeAll("body > a:nth-child(4)");
}

window.addEventListener("load", function load (event) {
    window.removeEventListener("load", load, false);
    loadTweaks();
}, false);

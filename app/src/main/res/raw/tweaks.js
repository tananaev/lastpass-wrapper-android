function removeAll (selector) {
    var elements = document.querySelectorAll(selector);
    Array.prototype.forEach.call(elements, function (node) {
        node.parentNode.removeChild(node);
    });
}

function loadTweaks () {
    removeAll("body > a:nth-child(4)");
    removeAll("#main2 > div:nth-child(14)");
    removeAll("#main2 > br");
    removeAll("#main2 > img");
    removeAll("body > br");
}

window.addEventListener("load", function load (event) {
    window.removeEventListener("load", load, false);
    loadTweaks();
}, false);

// 스타일 파일 객체와 스타일 파일 이름
let fileref;
let filename;

// theme.js
function loadCSS() {
    let head;
    head = document.getElementsByTagName("head")[0];

    if (fileref) {
        head.removeChild(fileref);
    }

    fileref = document.createElement("link");
    fileref.rel= "stylesheet";
    fileref.type = "text/css";
    if (filename === undefined) {
        filename = 'main-theme.css';
    }
    else if (filename === 'main-theme.css') {
        filename = 'dark-theme.css';
    }
    else if (filename === 'dark-theme.css') {
        filename = 'green-theme.css';
    }
    else {
        filename = 'main-theme.css';
    }
    fileref.href = 'styles/' + filename;
    head.appendChild(fileref);
}

loadCSS();
let toolButton;
let tool;
let menuTypeSelect, menuTypeSelectButton, menuTypeSelectContent;
let titleTF, menuTF, priceTF, typeTF;

document.addEventListener('DOMContentLoaded', function () {

    document.body.classList.add('no-drag');
    // tool button
    toolButton = document.createElement('div');
    toolButton.className = 'toolbox-button';
    toolButton.classList.add('opened');
    toolButton.innerHTML = '<img src="./images/settings-icon.png" width="100%" height="100%">';
    document.body.appendChild(toolButton);
    toolButton.addEventListener('click', function(ev) {
        openOrclose(ev);
    }) 
    toolButton.opened = false;

    // tool
    tool = document.createElement('div');
    tool.className = 'toolbox';
    tool.classList.add('closed');
    document.body.appendChild(tool);

    // onDevText
    let onDevText = document.createElement('div');
    onDevText.className = 'text-tab';
    onDevText.textContent = '개발 중 입니다...';
    tool.appendChild(onDevText);

    // theme change
    let themeChangeButton = document.createElement('div');
    themeChangeButton.className = 'theme-change-button';
    themeChangeButton.addEventListener('click', loadCSS);
    themeChangeButton.innerHTML = '테마 바꾸기<div style="font-size: 10px;">ctrl + shift + k</div>';
    tool.appendChild(themeChangeButton);

    // lang change
    let langChangeButton = document.createElement('div');
    langChangeButton.className = 'lang-change-button';
    langChangeButton.addEventListener('click', changeLanguage);
    langChangeButton.innerHTML = '언어바꾸기<div style="font-size: 10px;">ctrl + shift + l</div>';
    tool.appendChild(langChangeButton);

    // menutypebox
    menuTypeSelect = document.createElement('div');
    menuTypeSelect.className = 'menu-type';

    menuTypeSelectButton = document.createElement('button');
    menuTypeSelectButton.className = 'menu-type-button';
    menuTypeSelectButton.textContent = '추가 종류';

    menuTypeSelectContent = document.createElement('div');
    menuTypeSelectContent.className = 'menu-type-content';

    let mtsc1 = document.createElement('div');
    mtsc1.id = 'mtsc-1';
    mtsc1.onclick = selectMenuType;

    menuTypeSelectContent.appendChild(mtsc1);
    menuTypeSelect.appendChild(menuTypeSelectButton);
    menuTypeSelect.appendChild(menuTypeSelectContent);
    tool.appendChild(menuTypeSelect);

    // 메뉴 텍스트
    menuTF = document.createElement('input');
    menuTF.setAttribute('type', 'text');
    tool.appendChild(menuTF);


    // description
    let description = document.createElement('div');
    description.className = 'text-tab';
    description.textContent = `설정탭 열기: Enter`;
    tool.appendChild(description);

    // global keyboard events
    document.addEventListener('keyup', function(ev) {
        if (ev.keyCode === 13) {
            openOrclose(ev);
        }
        
    });
    document.addEventListener('keydown', function(ev) {
        if ((ev.ctrlKey || ev.metaKey) && ev.shiftKey) {
            if (ev.keyCode === 76) {
                changeLanguage(ev);
            }
            if (ev.keyCode === 75) {
                loadCSS();
            }
        }
    })
});

function addMenuItem() {
    let s = window.m.findSector(menuTF.value);
}

function selectMenuType() {
    if (event.target.id = 'mtsc-1') {
        alert('change to menu item');
    }
}

function openOrclose(evt) {
    if (toolButton.anime) {
        return;
    }
    if (!toolButton.opened) {
        toolButton.removeEventListener('click', openOrclose);
        toolButton.removeEventListener('keyup', openOrclose);
        tool.classList.remove('closed');
        tool.classList.add('opened');
        toolButton.anime = true;
        setTimeout(function() {
            toolButton.opened = true;
            toolButton.addEventListener('click', openOrclose);
            toolButton.addEventListener('keyup', openOrclose);
            toolButton.anime = false;
        }, 1200);
    }
    else {
        toolButton.removeEventListener('click', openOrclose);
        toolButton.removeEventListener('keyup', openOrclose);
        tool.classList.remove('opened');
        tool.classList.add('closing');
        toolButton.anime = true;
        setTimeout(function() {
            toolButton.opened = false;
            tool.classList.remove('closing');
            tool.classList.add('closed');
            toolButton.addEventListener('click', openOrclose);
            toolButton.addEventListener('keyup', openOrclose);
            toolButton.anime = false;
        }, 1000);
    }
}

function changeLanguage(evt) {
    if(m.currentLanguage === 'KR') {
        m.currentLanguage = 'EN'
    }
    else {
        m.currentLanguage = 'KR'
    }
}
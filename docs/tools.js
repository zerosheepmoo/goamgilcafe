let toolButton;
let tool;
let menuTypeSelect, menuTypeSelectButton, menuTypeSelectContent;
let titleTF, menuTF, priceTF, typeTF;
document.addEventListener('DOMContentLoaded', function () {
    // tool button
    toolButton = document.createElement('div');
    toolButton.className = 'toolbox-button';
    toolButton.classList.add('opened');
    toolButton.innerHTML = '<img src="settings-icon.png" width="100%" height="100%">';
    document.body.appendChild(toolButton);
    toolButton.onclick = openOrclose;
    toolButton.opened = false;

    // tool
    tool = document.createElement('div');
    tool.className = 'toolbox';
    tool.classList.add('closed');
    document.body.appendChild(tool);

    //testflags
    let testFlag = document.createElement('pre');
    testFlag.className = 'test-flag';
    testFlag.textContent = `메뉴를 쉽게 관리하기
위한 설정탭`;
    tool.appendChild(testFlag);
    
    let testFlag2 = document.createElement('div');
    testFlag2.className = 'test-flag';
    testFlag2.textContent = '개발 중 입니다...';
    tool.appendChild(testFlag2);

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
    if (!toolButton.opened) {
        toolButton.onclick = null;
        tool.classList.remove('closed');
        tool.classList.add('opened');
        setTimeout(function() {
            toolButton.opened = true;
            toolButton.onclick = openOrclose;
        }, 900);
    }
    else {
        toolButton.onclick = null;
        tool.classList.remove('opened');
        tool.classList.add('closing');
        toolButton.opened = false;
        setTimeout(function() {
            tool.classList.remove('closing');
            tool.classList.add('closed');
            toolButton.onclick = openOrclose;
        }, 900);
    }
}
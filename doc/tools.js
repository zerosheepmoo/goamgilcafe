let tool;
        let menuTypeSelect, menuTypeSelectButton, menuTypeSelectContent;
        let titleTF, menuTF, priceTF, typeTF;
        document.addEventListener('DOMContentLoaded', function() {
            // tool
            tool = document.createElement('div');
            tool.className = 'toolbox';
            document.body.appendChild(tool);


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
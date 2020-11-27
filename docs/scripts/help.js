class DataTracker {
    constructor(dom, data) {
        this.dom = dom
        this.level = 0;
        this.convert(data, 'first');
    }
    convert(data, container, keyName) {
        this.level++;
        const p = container;
        let c;
        if (Array.isArray(data)) {
            c = new Component(undefined, 'container', keyName, this.level, false);
            for (let i = 0; i < data.length; i++) {
                this.convert(data[i], c);
            }
        }
        else if (typeof data === 'object') {
            c = new Component(undefined, 'container', keyName, this.level, true);
            let c2;
            for (let key in data) {
                if (typeof data[key] === 'boolean') {
                    c2 = new Component(data[key], 'boolean', key);
                    c.addChild(c2);
                }
                else if (typeof data[key] === 'string') {
                    c2 = new Component(data[key], 'string', key);
                    c.addChild(c2);
                }
                else if (typeof data[key] === 'number') {
                    c2 = new Component(data[key], 'number', key);
                    c.addChild(c2);
                }
                else {
                    this.convert(data[key], c, key);
                }
            }
            if (Object.keys(data).length === 0) {
                this.level--;
                return;
            }
        }
        else {
            c = this.createComponent(data);
        }

        if (p) {
            if (p === 'first') {
                this.dom.appendChild(c.dom);
                this.rootCompo = c;
            }
            else {
                if (p !== c) {
                    p.addChild(c);
                }
            }
        }
        this.level--;
    }
    exportData() {
        function download(filename, text) {
            let element = document.createElement('a');
            element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
            element.setAttribute('download', filename);

            element.style.display = 'none';
            document.body.appendChild(element);
            element.style.position = 'fixed';
            element.style.right = '30px';
            element.style.top = '30px';

            element.click();

            document.body.removeChild(element);
        }

        // Start file download.
        download("data.txt", "let data = " + JSON.stringify(this.rootCompo.exportData(), null, 4));

        console.log((this.rootCompo.exportData()));
    }
}

class Component {
    constructor(data, type, name, level, isObj) {
        this.type = type;
        this.data = type === typeof data ? data : type === 'number' ? Number(data) : type === 'boolean' ? Boolean(data) : 'invalid';
        if (type === 'container' && typeof data === 'undefined') {
            this.data = data;
        }
        if (this.data === 'invalid') {
            throw new Error('invalid type with: ' + type + ' and value: ' + data);
        }
        this.name = name;
        this.parent = null;
        this.level = level;
        this.isObj = isObj
        this.isEditorOpened = false;
        this.createView();
    }

    createView() {
        const _this = this;
        this.dom = document.createElement('div');
        if (this.type === 'container') {
            this.childs = [];
            this.dom.innerHTML = this.name ?? 'Level (' + this.level + ')' + (this.isObj ? '{}' : '[]') + '<br>';
            this.dom.style.padding = '5px';
            this.dom.addEventListener('click', _this.openContainerEditor.bind(this));
            this.applyStructureClassName();
        }
        else {
            if (this.type === 'boolean') {
                this.dom.innerText = this.name;
                this.applyBooleanColor();
                this.dom.addEventListener('click', _this.switchBooleanData.bind(this));
            }
            else if (this.type === 'string' || this.type === 'number') {
                this.dom.innerText = this.name + ' : ' + this.data;
                let isNumber;
                if (this.type === 'number') {
                    isNumber = true
                }
                this.dom.addEventListener('click', function (event) {
                    if (!_this.isEditorOpened && event.target === _this.dom) {
                        _this.isEditorOpened = true;
                        _this.openTextEditor(isNumber)
                    }
                });
            }
            else {
                throw new Error('invalid with the type: ' + this.type);
            }
        }
    }

    // boolean
    switchBooleanData(event) {
        if (event.target === this.dom) {
            this.data = !this.data;
            this.applyBooleanColor();
        }
    }

    applyBooleanColor() {
        if (this.type === 'boolean') {
            if (this.data) {
                this.dom.style.backgroundColor = 'green';
            }
            else {
                this.dom.style.backgroundColor = 'red';
            }
        }
    }

    // string & number
    openTextEditor(isNumber) {
        
        const _this = this;
        let container = document.createElement('div');
        _this.dom.appendChild(container);

        function deleteEvent(event) {
            if (_this.parent) {
                _this.parent.removeChild(_this);
            }
        }
        function confirmEvent(event) {
            if (event.key === 'Enter' || event.button !== undefined) {
                let value = isNumber ? Number(input.value) : input.value;

                container.children[2].removeEventListener('click', confirmEvent);
                container.removeChild(container.children[2]);

                container.children[1].removeEventListener('click', deleteEvent);
                container.removeChild(container.children[1]);

                container.children[0].removeEventListener('keydown', confirmEvent);
                container.removeChild(container.children[0]);

                _this.dom.removeChild(container)

                if (value) {
                    _this.data = value;
                    _this.dom.innerText = _this.name + ' : ' + _this.data;
                }

                _this.isEditorOpened = false;
            }
        }

        let input = document.createElement('input');
        input.placeholder = isNumber ? String(_this.data) : _this.data;
        input.addEventListener('keydown', confirmEvent.bind(this));

        let deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.addEventListener('click', deleteEvent.bind(this));

        let confirmButton = document.createElement('button');
        confirmButton.textContent = '수정';
        confirmButton.addEventListener('click', confirmEvent.bind(this));

        container.appendChild(input);
        container.appendChild(deleteButton);
        container.appendChild(confirmButton);
    }

    // container (object or array)
    openContainerEditor(event) {
        if (!this.isEditorOpened && event.target === this.dom) {
            this.isEditorOpened = true;
            let x = event.pageX;
            let y = event.pageY;
            const _this = this;

            let container = document.createElement('div');
            _this.dom.appendChild(container);
            container.style.position = 'absolute';
            container.style.top = y +'px';
            container.style.left = x + 'px';

            function deleteEvent(event) {
                if (_this.parent) {
                    _this.parent.removeChild(_this);
                }
            }

            function confirmEvent(event) {
                if (event.key === 'Enter' || event.button !== undefined) {
                    let value = input.value;
                    if (value) {

                        let c;
                        let vals = value.split(':');
    
                        if (vals.length < 3) {
                            throw new Error('Wrong input: ' + value);
                        }
    
                        if (vals[2] === '$obj') {
                            c = new Component(undefined, 'container', vals[0], _this.level + 1, true)
                        }
                        else if (vals[2] === '$arr') {
                            c = new Component(undefined, 'container', vals[0], _this.level + 1, false)
                        }
                        else {
                            c = new Component(vals[1], vals[2], vals[0]);
                        }
                        _this.addChild(c);
                    }


                    container.children[2].removeEventListener('click', confirmEvent);
                    container.removeChild(container.children[2]);

                    container.children[1].removeEventListener('click', deleteEvent);
                    container.removeChild(container.children[1]);

                    container.children[0].removeEventListener('keydown', confirmEvent);
                    container.removeChild(container.children[0]);

                    _this.dom.removeChild(container);

                    _this.isEditorOpened = false;
                }
            }

            let input = document.createElement('input');
            input.placeholder = `[key]:[value]:[type] 또는 [key]::$obj 또는 [key]::$arr`
            input.style.width = '300px'
            input.addEventListener('keydown', confirmEvent.bind(this));

            let deleteButton = document.createElement('button');
            deleteButton.textContent = '삭제';
            deleteButton.addEventListener('click', deleteEvent.bind(this));

            let confirmButton = document.createElement('button');
            confirmButton.textContent = '생성';
            confirmButton.addEventListener('click', confirmEvent.bind(this));

            container.appendChild(input);
            container.appendChild(deleteButton);
            container.appendChild(confirmButton);
        }
    }

    // export data;
    exportData() {
        let res;
        if (this.type === "container") {
            if (this.isObj) {
                res = {}
                for (let i = 0; i < this.childs.length; i++) {
                    let c = this.childs[i].exportData();
                    res = {...res, ...c}
                }
                if (this.name) {
                    res = {[this.name]: res}
                }
            }
            else {
                res = {};
                let subres = [];
                for (let i = 0; i < this.childs.length; i++) {
                    let c = this.childs[i].exportData();
                    subres.push(c);
                }
                if (this.name) {
                    res[this.name] = subres;
                }
                else {
                    res = subres;
                }
            }
        }
        else if (this.type === 'boolean' || this.type === 'number' || this.type === 'string') {
            res = {
                [this.name]: this.data
            }
        }
        return res;
    }

    addChild(compo) {
        this.childs.push(compo);
        this.dom.appendChild(compo.dom);
        compo.parent = this;
    }

    removeChild(compo) {
        compo.parent = null;
        this.dom.removeChild(compo.dom);
        this.childs.splice(this.childs.indexOf(compo), 1);
    }

    applyStructureClassName() {
        const styleNameByLevel = ['level-0', 'level-1', 'level-2', 'level-3', 'level-4', 'level-5', 'level-6', 'level-7', 'level-8', 'level-9', 'level-10']
        this.dom.className = styleNameByLevel[this.level];
    }
}

let dt = new DataTracker(document.getElementById('app'), data);
window.dt = dt;
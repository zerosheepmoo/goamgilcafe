

let tempPre = [];
let tempEv = [];

function putItems(sector, data) {
    const len = data.length;
    for (let i = 0; i < len; i++) {
        let _name, _subText, _prices, _pricesOrder, _isEvent, _isPrepared;
        _name = data[i]['name'];
        _subText = data[i]['subText'];
        _prices = data[i]['prices'];
        _pricesOrder = data[i]['pricesOrder'];
        _isEvent = data[i]['isEvent'];
        _isPrepared = data[i]['isPrepared'];
        parseSubText(_subText);

        sector.addChildItems(_name, _subText, _prices, _pricesOrder);
        if (_isPrepared) {
            tempPre.push({
                sector: sector,
                text: _name.KR
            })
        }
        if (_isEvent) {
            tempEv.push({
                sector: sector,
                text: _name.KR
            })
        }
    }
}

function apply() {
    for (let i = 0, len = tempPre.length; i < len; i++) {
        tempPre[i].sector.updatePrepared(tempPre[i].text);
    }
    tempPre = [];
    for (let i = 0, len = tempEv.length; i < len; i++) {
        tempEv[i].sector.updateEvent(tempEv[i].text);
    }
    tempEv = [];
}

// 커피,
let m;
document.addEventListener('DOMContentLoaded', function() {
    
    m = new Menu('app');
    
    // coffee and traditional tea
    addContent(m, data);
});

function addContent(menu, data) {
    for (let i = 0, len = data.length; i < len; i++) {
        let menuCol = m.addColumn();
        addSectorWithData(menuCol, data[i]);
    }
}

function addSectorWithData(menuColumn, data) {
    const len = data.length;
    for (let i = 0; i < len; i++) {
        let s = window['s' + (i+1)];
        s = menuColumn.addSector(data[i].name, data[i].template, data[i].options);
        putItems(s, data[i].items);
    }
}

function parseSubText(subText){
    for (let language in subText) {
        let subres;
        if (typeof subText[language] === 'string') {
            subres = subText[language]; 
        }
        else {
            subres = '<div class="custom-subtext"';
            const sli = subText[language].slicer;
            const items = subText[language].items;
            const styles = subText[language].style || '';
            subres += styles + '>'
            for (let i = 0, len = items.length; i < len; i++) {
                for (let n in items[i]) {
                    if (items[i][n]) {
                        subres += n
                    }
                    else {
                        subres += '<span class="custom-removed">' + n + '</span>'
                    }
                }
                if (i !== len-1) {
                    subres += sli;
                }
            }
            subres += '</div>';
        }
        subText[language] =subres
    }
}

setTimeout(function() {
    apply()
}, 500);
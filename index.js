

function appendRow() {
    let tbl = document.getElementById('my-table'),
        row = tbl.insertRow(tbl.rows.length);   
        row.className = 'row';
    for (let i = 0; i < tbl.rows[0].cells.length; i++) {
        createCell(row.insertCell(i), i, 'cell');
    }
}

function createCell(cell, text, style) {
    let div = document.createElement('div'), 
        txt = document.createTextNode(text); 
    div.appendChild(txt);                   
    div.setAttribute('class', style);      
    cell.appendChild(div);                   
}

function appendColumn() {
    let tbl = document.getElementById('my-table');
    for (let i = 0; i < tbl.rows.length; i++) {
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'cell');
    }
}

function deleteRows() {
    let tbl = document.getElementById('my-table'), 
        lastRow = tbl.rows.length - 1;             
    for (let i = lastRow; i > 0; i--) {
        tbl.deleteRow(i);
    }
}

function deleteColumns() {
    let tbl = document.getElementById('my-table'), 
        lastCol = tbl.rows[0].cells.length - 1;    
    for (let i = 0; i < tbl.rows.length; i++) {
        for (let j = lastCol; j > 0; j--) {
            tbl.rows[i].deleteCell(j);
        }
    }
}


let table = document.getElementById('my-table');

table.addEventListener('dblclick', ({ target }) => {
    if (target.classList.contains('cell')) {
        let input = document.createElement('input');
        target.innerText = '';
        target.appendChild(input);
        input.value = '';
        input.addEventListener('keypress', (event) => {
            if (event.keyCode === 13) {   
               target.removeChild(input);
               target.innerText = input.value; 
            }
        });
    }
});


const addRowBtn = document.createElement('input');
addRowBtn.setAttribute('value', 'Добавить ряд');
addRowBtn.setAttribute('type', 'button');
addRowBtn.addEventListener('click', () => {
    appendRow();
});
document.body.appendChild(addRowBtn);

const AddcolumnBtn = document.createElement('input');
AddcolumnBtn.setAttribute('value', 'Добавить колонку');
AddcolumnBtn.setAttribute('type', 'button');
AddcolumnBtn.addEventListener('click', () => {
    appendColumn();
});
document.body.appendChild(AddcolumnBtn);

const deleteRowsBtn = document.createElement('input');
deleteRowsBtn.setAttribute('value', 'Удалить ряды');
deleteRowsBtn.setAttribute('type', 'button');
deleteRowsBtn.addEventListener('click', () => {
    deleteRows();
});
document.body.appendChild(deleteRowsBtn);

const deleteColumnBtn = document.createElement('input');
deleteColumnBtn.setAttribute('value', 'Удалить колонки');
deleteColumnBtn.setAttribute('type', 'button');
deleteColumnBtn.addEventListener('click', () => {
    deleteColumns();
});
document.body.appendChild(deleteColumnBtn);

const deleteBothBtn = document.createElement('input');
deleteBothBtn.setAttribute('value', 'Удалить все');
deleteBothBtn.setAttribute('type', 'button');
deleteBothBtn.addEventListener('click', () => {
    deleteColumns(); 
    deleteRows();
});
document.body.appendChild(deleteBothBtn);







// ф-я создания дива где после в него добавляется text (контент) и атрибут class
function createCell(cell, text, style) {
    let div = document.createElement('div'), 
        txt = document.createTextNode(text); 
    div.appendChild(txt);                   
    div.setAttribute('class', style);      
    cell.appendChild(div); // добавление див в ячейку таблицы                 
}

// ф-я добавления строки в таблицу
function appendRow() {
    let tbl = document.getElementById('my-table'), // получение таблицу по id 
        row = tbl.insertRow(tbl.rows.length);   // добавление строки в таблицу 
        row.className = 'row';
    for (let i = 0; i < tbl.rows[0].cells.length; i++) { // перебор количества столбцов в первой строке
        createCell(row.insertCell(i), i, 'cell'); // создание и добавление строки с таким же количеством столбцов как в первой строке
    }
}

// ф-я добавления столбца в строку
function appendColumn() {
    let tbl = document.getElementById('my-table');
    for (let i = 0; i < tbl.rows.length; i++) { // перебираются все строки в таблице
        createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), i, 'cell'); // создание и добавление в каждую строку td с его индексом и классом cell
    }
}
// ф-я удаления строк
function deleteRows() {
    let tbl = document.getElementById('my-table'), 
        lastRow = tbl.rows.length - 1;  // получаю индекс последней строки         
    for (let i = lastRow; i > 0; i--) { // пеиребираю c конца все строки
        tbl.deleteRow(i); // удаляю все строки
    }
}
// ф-я удаления столбцов 
function deleteColumns() {
    let tbl = document.getElementById('my-table'), 
        lastCol = tbl.rows[0].cells.length - 1; // получаю индекс последнего столбца
    for (let i = 0; i < tbl.rows.length; i++) { // перебираю все строки в таблице 
        for (let j = lastCol; j > 0; j--) { // перебираю с конца все столбцы в строке
            tbl.rows[i].deleteCell(j); // удаляю у всех строк стобцы
        }
    }
}


let table = document.getElementById('my-table');
/** при двойном клике на элемент если у него есть класс cell сделать инпат
 * после заполнения при нажатии на энтер данные сохранятся в ячейке
 */
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

/**создание, добавление кнопок в body и добавления им атрибутов 
 * добавление им события 
*/
const addRowBtn = document.createElement('input');
addRowBtn.setAttribute('value', 'Добавить строку');
addRowBtn.setAttribute('type', 'button');
addRowBtn.addEventListener('click', () => {
    appendRow();
});
document.body.appendChild(addRowBtn);

const AddcolumnBtn = document.createElement('input');
AddcolumnBtn.setAttribute('value', 'Добавить столбец');
AddcolumnBtn.setAttribute('type', 'button');
AddcolumnBtn.addEventListener('click', () => {
    appendColumn();
});
document.body.appendChild(AddcolumnBtn);

const deleteRowsBtn = document.createElement('input');
deleteRowsBtn.setAttribute('value', 'Удалить строки');
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





let rowNumber = 0;

function addCell() {
        const row = document.querySelector('.tbody');
        const cell = document.createElement('tr');
        cell.innerHTML = `<td id = "row${rowNumber}" align="left">Row ${rowNumber}</td><td align="right"><button class="btn btn-danger" id = "btn${rowNumber}" onclick="deleteButton(this.id)">Delete</button></td>`;
        row.insertAdjacentElement('beforeend', cell);
        if (rowNumber >= 0) {
                rowNumber += 1;
                console.log(rowNumber);
        }
}

const tableButton = document.querySelector('.tableButton');
const table = document.querySelector('.tbody');

function deleteRow() {
        const lastCell = table.lastElementChild;
        lastCell.remove();
        if (rowNumber > 0) {
                rowNumber -= 1;
                console.log(rowNumber);
        }
}

function deleteButton(rowId) {
        const but = document.getElementById(rowId).parentElement.parentElement;
        but.remove();
}

tableButton.addEventListener(onclick, addCell);

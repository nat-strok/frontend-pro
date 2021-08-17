document.addEventListener("DOMContentLoaded", () => {

        const addProductForm = document.querySelector("#addProductForm");
        const productTable = document.querySelector("#productTable");
        const productName = addProductForm.querySelector("#productName");
        const productPrice = addProductForm.querySelector("#productPrice");
        const productNumber = addProductForm.querySelector("#productNumber");
        const productItemTemplate = document.querySelector("#productItemTemplate").innerHTML;
        const sumCell = productTable.querySelector('[data-id="sum"]');

        addProductForm.addEventListener("submit", onAddTaskFormSubmit);
        productTable.addEventListener("click", onDeleteRow);

        function onAddTaskFormSubmit(e) {
            e.preventDefault();
            submitForm();
        }

        function validateForm() {
            if (!productName.value || !+productPrice.value || !+productNumber.value) {
                alert('Введите корректные данные');
                return false;
            }
            return true;
        }

        function addProductRow(product) {
            const html = productItemTemplate.replace(/({{)(name|price|number)(}})/g, (match, p1, p2, p3) => product[p2]);
            productTable.querySelector(".summary").insertAdjacentHTML("beforebegin", html);
        }

        function calculateSum() {
            const tableContentArray = [];
            let rows = productTable.rows;
            for (let i = 1; i < rows.length - 1; i++) {
                const rowArray = [];
                let cells = rows[i].cells;
                for (let j = 1; j < cells.length - 1; j++) {
                    rowArray.push(+cells[j].textContent);
                }
                tableContentArray.push(rowArray);
            }
            sumCell.textContent = tableContentArray.reduce((sum, item) => sum + item.reduce((res, el) => res * el, 1), 0);
        }

        function resetForm() {
            addProductForm.reset();
            productName.focus();
        }

        function submitForm() {
            if (validateForm()) {
                const product = {
                    name: productName.value,
                    price: productPrice.value,
                    number: productNumber.value
                };
                addProductRow(product);
                calculateSum();
                resetForm();
            }
        }

        function onDeleteRow(e) {
            if (e.target.classList.contains('delete-btn')) e.target.closest('tr').remove();
            calculateSum();
        }
    }
);
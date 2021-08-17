document.addEventListener("DOMContentLoaded", () => {

        const addProductForm = document.querySelector("#addProductForm");
        const productTable = document.querySelector("#productTable");
        const productName = addProductForm.querySelector("#productName");
        const productPrice = addProductForm.querySelector("#productPrice");
        const productNumber = addProductForm.querySelector("#productNumber");
        const productItemTemplate = document.querySelector("#productItemTemplate").innerHTML;

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
            productTable.insertAdjacentHTML("beforeend", html);
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
                resetForm();
            }
        }

        function onDeleteRow(e) {
            if (e.target.classList.contains('delete-btn')) e.target.closest('tr').remove();
        }
    }
);


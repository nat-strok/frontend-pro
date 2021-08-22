document.addEventListener('DOMContentLoaded', () => {
    let itemTemplate = document.querySelector('#itemTemplate').innerHTML;
    const listToDo = document.querySelector('#listToDo');
    const loadToDos = document.querySelector('#loadToDos');
    loadToDos.addEventListener('click', getListToDo);

    function getListToDo() {
        fetch("https://jsonplaceholder.typicode.com/todos")
            .then((res) => res.json())
            .then((data) => handleToDo(data))
            .catch((error) => console.log(error.message))
            .finally(() => loadToDos.remove());
    }

    function handleToDo(data) {
        data.forEach(item => addItem(item));
        listToDo.addEventListener('click', onClickChangeItem);
    }

    function addItem(item) {
        let html = itemTemplate.replace('{{title}}', item.title);
        html = html.replace('{{id}}', item.id);
        html = !!item['completed'] ? html.replace('{{completed}}', ' done') : html.replace('{{completed}}', '');
        listToDo.insertAdjacentHTML('beforeend', html);
    }

    function onClickChangeItem(event) {
        if (event.target.closest('li')) event.target.classList.toggle('done');
        if (event.target.classList.contains('close')) event.target.parentElement.remove();
    }
});
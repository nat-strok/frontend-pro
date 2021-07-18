function defineListWrapper(ul) {
    if (!ul) {
        ul = document.createElement('ul');
        ul.setAttribute('id', 'listWrapper');
        document.body.append(ul);
    }
    return ul;
}

function onCreateListItem(event) {
    event.preventDefault();
    const inputText = document.querySelector('#textInput');
    if (!inputText.value) return;
    const li = document.createElement('li');
    li.setAttribute('class', 'toDo');
    const span = document.createElement('span');
    li.textContent = inputText.value;
    inputText.value = '';
    span.textContent = String.fromCharCode(215);
    listWrapper.append(li);
    li.append(span);
}

function onClickChangeItem(event) {
    const ul = listWrapper;
    const li = event.target.closest('li');
    const span = event.target.closest('span');
    if (!li) return;
    if (!span && li) {
        li.classList.toggle('toDo');
        li.classList.toggle('done');
    }
    if (span) ul.removeChild(li);
}

const btnAdd = document.querySelector('#btnAdd');
const listWrapper = defineListWrapper(document.querySelector('#listWrapper'));
btnAdd.addEventListener('click', onCreateListItem);
listWrapper.addEventListener('click', onClickChangeItem);



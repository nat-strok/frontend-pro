function onCreateListWrapper(event) {
    event.preventDefault();
    if (!document.querySelector('#listWrapper')) {
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'listWrapper');
        document.body.appendChild(ul);
    }
    event.target.removeEventListener('click', onCreateListWrapper);
}

function onCreateListItem(event) {
    event.preventDefault();
    const inputText = document.querySelector('#textInput');
    if (!inputText.value) return;

    const ul = document.querySelector('#listWrapper');

    const li = document.createElement('li');
    li.setAttribute('class', 'listItem');
    li.textContent = inputText.value;
    inputText.value = '';

    const span = document.createElement('span');
    span.setAttribute('class', 'close');
    span.textContent = String.fromCharCode(215);

    ul.append(li);
    li.append(span);
    ul.addEventListener('click', onClickChangeItem);
}

function onClickChangeItem(event) {
    if (event.target.classList.contains('listItem')) {
        event.target.classList.toggle('done');
    }
    if (event.target.classList.contains('close')) {
        event.target.parentElement.remove();
    }
}

const btnAdd = document.querySelector('#btnAdd');
btnAdd.addEventListener('click', onCreateListWrapper);
btnAdd.addEventListener('click', onCreateListItem);
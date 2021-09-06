const TILES = [];
const tilesContainer = document.getElementById("tiles");
const closeMessageElems = Array.from(document.querySelectorAll('[data-id="close"]'));
closeMessageElems.map(el => el.addEventListener("click", hideSuccessMessage));

function initGame() {
    tilesContainer.innerHTML = "";
    tilesContainer.addEventListener("click", onTileClick);
    TILES.length = 0; // clear all tiles in the array
    let tileIndex = 0;
    const randomIndex = getRandomIndex();
    // const randomIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]; // delete
    for (let i = 0; i < 4; i++) {
        TILES[i] = [];
        for (let j = 0; j < 4; j++) {
            tileIndex = randomIndex();
            // tileIndex = randomIndex.shift(); // delete
            TILES[i].push(createTileEl(tileIndex));
        }
    }
    if (isSolvable(TILES)) {
        renderTiles();
    } else {
        initGame()
    }
}

function isSolvable(arr) {
    let count = 0;
    arr = arr.flat().map(el => +el.textContent);
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] > arr[j])
                count++;
        }
    }
    return count % 2;
}

function getRandomIndex() {
    let availableIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    return function () {
        const randomIndex = Math.floor(Math.random() * availableIdx.length);
        const val = availableIdx[randomIndex];
        availableIdx = availableIdx.filter((el) => el !== val);
        return val;
    };
}

function createTileEl(text) {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.textContent = text;
    return tile;
}

function renderTiles() {
    tilesContainer.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            tilesContainer.append(TILES[i][j]);
        }
    }
}

function showSuccessMessage() {
    document.body.classList.add('visible');
}

function hideSuccessMessage() {
    document.body.classList.remove('visible');
    initGame();
}

function onTileClick(e) {
    if (e.target.classList.contains("tile")) {
        const id = +e.target.textContent;
        if (id) {
            swapTiles(id);
        }
    }
    renderTiles();
    if (isComplete()) showSuccessMessage();
}

function isComplete() {
    let tiles = document.querySelectorAll('.tile');
    tiles = Array.from(tiles).map(el => +el.textContent);
    if (tiles[tiles.length - 1]) return false;
    for (let i = 0; i < tiles.length - 1; i++) {
        if (tiles[i] != i + 1)
            return false;
    }
    return true;
}

function swapTiles(id) {
    const [tileX, tileY] = findTileCoordById(id);
    const [emptyX, emptyY] = findEmptyTileCoords();

    // are they neibors
    if (
        (tileX === emptyX && Math.abs(tileY - emptyY) === 1) ||
        (tileY === emptyY && Math.abs(tileX - emptyX) === 1)
    ) {
        const temp = TILES[tileX][tileY];
        TILES[tileX][tileY] = TILES[emptyX][emptyY];
        TILES[emptyX][emptyY] = temp;
    }
}

function findEmptyTileCoords() {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (TILES[i][j].textContent === "") {
                return [i, j];
            }
        }
    }
}

function findTileCoordById(id) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (TILES[i][j].textContent == id) {
                return [i, j];
            }
        }
    }
}

const obj = {
    name: 'Alina',
    age: 23,
    address: {
        country: 'UA',
        city: 'Kyiv'
    }
};

function toCloneObject(obj) {
    if (typeof obj !== 'object') {
        return obj;
    } else {
        let result = {};
        for (let key in obj) {
            result[key] = toCloneObject(obj[key]);
        }
        return result;
    }
}

const objCopy = toCloneObject(obj);

console.log(`оригинальный объект:\n${JSON.stringify(obj)}\n\nкопия объекта:\n${JSON.stringify(objCopy)}`);

// to be sure that changes in one object do not affect the other
obj.name = "Maria";
objCopy.address.city = "Kharkiv";
console.log(`\n\nСделаны изменения в обоих объектах:\n\nоригинальный объект (измененно поле name):\n${JSON.stringify(obj)}\n\nкопия объекта (изменено поле city):\n${JSON.stringify(objCopy)}`);

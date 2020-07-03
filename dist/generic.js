"use strict";
const promise = new Promise(resolve => {
    setTimeout(() => {
        resolve(42);
    }, 2000);
});
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'Mikhail' }, { age: 22 });
function withCount(value) {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    };
}
function getObjectValue(obj, key) {
    return obj[key];
}
const person = {
    name: "Mikhail",
    age: 22
};
class Collection {
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter(i => i !== item);
    }
    get items() {
        return this._items;
    }
}
function createAndValidateCar(model, year) {
    const car = {};
    if (model.length > 3) {
        car.model = model;
    }
    if (year > 2000) {
        car.year = year;
    }
    return car;
}
const cars = ['Ford', 'Audi'];
const ford = {
    model: "Ford",
    year: 2020
};
//# sourceMappingURL=generic.js.map
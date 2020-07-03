const promise = new Promise<number>(resolve => { //const promise: Promise<number> = new Promise
    setTimeout(() => {
        resolve(42)
    }, 2000)
});

// promise.then(data => {
//     console.log(data.toFixed())
// });

//----------------

function mergeObjects<T extends object, R extends object>(a: T, b: R) { //подстраиваем тип данных объект для входных параметров и выходных данных
    return Object.assign({}, a, b)
}

const merged = mergeObjects({name: 'Mikhail'}, {age: 22});
//
// //----------------
interface ILength { //указываем, что в типе данных для ф-ии может быть св-во length
    length: number
}

function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

// console.log(withCount("Привет медвед"));
// console.log(withCount([1, 2, 3]));

//----------------
function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) { //R берет ключи из объекта T
    return obj[key]
}

const person = {
    name: "Mikhail",
    age: 22
};
//
// console.log(getObjectValue(person, 'name'));
// console.log(getObjectValue(person, 'age'));
// console.log(getObjectValue(person, 'job')); - ошибка

//--------------
class Collection<T extends number | string | boolean> {
    constructor(private _items: T[] = []) {
    }

    add(item: T) {
        this._items.push(item)
    }

    remove(item: T) {
        this._items = this._items.filter(i => i !== item)
    }

    get items(): T[] {
        return this._items
    }
}

// const strings = new Collection(['q', 'w', 'e']);
// strings.add('!');
// strings.remove('q');
// // console.log(strings.items);
//
// const numbers = new Collection([1, 2, 3]);
// numbers.add(4);
// numbers.remove(1);
// // console.log(numbers.items);

//-----------------
interface Car {
    model: string
    year: number
}

function createAndValidateCar(model: string, year: number): Car {
    const car: Partial<Car> = {}; //создаем временный объект без ключей

    if (model.length > 3) {
        car.model = model
    }

    if (year > 2000) {
        car.year = year
    }

    return car as Car
}

const cars: Readonly<Array<string>> = ['Ford', 'Audi'];

const ford: Readonly<Car> = {
    model: "Ford",
    year: 2020
};
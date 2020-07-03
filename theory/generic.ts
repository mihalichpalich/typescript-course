const arrayOfNumbers: Array<number> = [1, 2, 3, 4];
const arrayOfStrings: Array<string> = ['Hello', 'Mikhail'];

function reverseArray<T>(array: T[]): T[] { //ф-я работает со всеми типами данных
    return array.reverse()
}

reverseArray(arrayOfNumbers);
reverseArray(arrayOfStrings);
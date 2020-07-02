const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;

const message = 'Hello World!';

const numberArray: number[] = [1, 1, 2, 3, 5];
const numberArray2: Array<number> = [1, 1, 2, 3, 5];

//смешанный массив
const contacts: [string, number] = ['Mikhail', 1234567];

//переменная любого типа
let variable: any = 42;
variable = 'new string';

function sayMyName(name: string): void { //: void - ф-я ничего не возвращает
    console.log(name)
}
sayMyName('Хайзенберг');
interface Rect {
    readonly id: string //параметр id только для чтения
    color?: string //параметр color не обязателен
    size: {
        width: number
        height: number
    }
}

const rect1: Rect = {
    id: '1234',
    size: {
        width: 10,
        height: 15
    }
};

rect1.color = 'black';

const rect2 = {} as Rect;
const rect3 = <Rect>{};

//наследование интерфейсов
interface RectWithArea extends Rect {
    getArea: () => number //ф-я возвращает число
}

const rect4: RectWithArea = {
    id: '1234',
    size: {
        width: 10,
        height: 15
    },
    getArea(): number {
        return this.size.width * this.size.height
    }
};

//взаимодействие с классами
interface IClock {
    time: Date
    setTime(date: Date): void
}

class Clock implements IClock{
    time: Date = new Date()

    setTime(date: Date): void {
        this.time = date
    }
}

//общий интерфейс для всех параметров объекта
interface Styles {
    [key: string]: string
}

const css: Styles = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
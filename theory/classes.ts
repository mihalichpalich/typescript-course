class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`
    }
}

// class Car {
//     readonly model: string;
//     readonly numberOfWheels: number = 4;
//
//     constructor(theModel: string) { //readonly перезаписывается только внутри конструктора
//         this.model = theModel
//     }
// }

class Car {
    readonly numberOfWheels: number = 4;
    constructor(readonly model: string) {}
}

class Animal {
    protected voice: string = ''; //protected может наследоваться и изменяться, но к ним нет доступа вне класса
    color: string = 'black'; //по умолчанию public

    constructor() {
        this.go()
    }

    private go() { //private не наследуется, изменяется только в своем классе
        console.log('Go')
    }
}

class Cat extends Animal {
    setVoice(voice: string): void {
        this.voice = voice
    }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);

//абстрактные классы - наследуются только в Typescript, но не компилируются в js
abstract class Component {
    abstract render(): void
    abstract info(): string
}

class AppComponent extends Component{
    render(): void {
        console.log("Component on render")
    }

    info(): string {
        return "This is info";
    }
}
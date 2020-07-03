interface Person {
    name: string
    age: number
}

type PersonKeys = keyof Person //в типе PersonKeys могут находится ключи параметров name или age

let personKey: PersonKeys = 'name';
personKey = 'age';
//key = 'job' - ошибка

type User = {
    _id: number
    name: string
    email: string
    createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> //создать тип на основе User и исключить из него параметры _id и createdAt
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> //создать тип на основе User, взяв в него параметры name и email

let u1: UserKeysNoMeta1 = 'name';
// u1 = '_id'; - ошибка
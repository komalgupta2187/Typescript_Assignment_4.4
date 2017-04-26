class GenericsClass<T> {
    name : T;
    setName(name : T) {
        this.name = name;
    }
    getName() : T {
        return this.name;
    }
}

let gen1 = new GenericsClass<string>();
gen1.setName("Hello World");
console.log(gen1.getName());

let gen2 = new GenericsClass<number>();
gen2.setName(1);
console.log(gen2.getName());

let gen3 = new GenericsClass<boolean>();
gen3.setName(true);
console.log(gen3.getName());


console.log("//*********************************//")

interface IUser {

    userType: string;
}

class User<T extends IUser>{
    role: T
    constructor(arg: T){
        this.role = arg
    }
    printUser() : void {
        console.log(`User has the role of ${this.role.userType}` )
    }
}

let adminUser = new User({userType: "Admin"})
adminUser.printUser()
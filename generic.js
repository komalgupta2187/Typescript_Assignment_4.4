var GenericsClass = (function () {
    function GenericsClass() {
    }
    GenericsClass.prototype.setName = function (name) {
        this.name = name;
    };
    GenericsClass.prototype.getName = function () {
        return this.name;
    };
    return GenericsClass;
}());
var gen1 = new GenericsClass();
gen1.setName("Hello World");
console.log(gen1.getName());
var gen2 = new GenericsClass();
gen2.setName(1);
console.log(gen2.getName());
var gen3 = new GenericsClass();
gen3.setName(true);
console.log(gen3.getName());
console.log("//*********************************//");
var User = (function () {
    function User(arg) {
        this.role = arg;
    }
    User.prototype.printUser = function () {
        console.log("User has the role of " + this.role.userType);
    };
    return User;
}());
var adminUser = new User({ userType: "Admin" });
adminUser.printUser();

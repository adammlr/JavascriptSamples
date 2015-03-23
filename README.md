Javascript modules as
+ Singleton (most common)
+ Instance
+ Prototyped instances
```
//module pattern as singleton
ns.module.add(1);
console.log(ns.module.getValue()); //1

//module pattern as instance
var obj = ns.moduleInstance();
var obj2 = ns.moduleInstance();
obj.add(5);
console.log(obj.getValue()); //5
console.log(obj2.getValue()); //0

//module pattern as prototype
var obj3 = new ns.ModulePrototype();
var obj4 = new ns.ModulePrototype();
obj3.add(2);
console.log(obj3.getValue()); //2
console.log(obj4.getValue()); //0
```
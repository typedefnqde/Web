ECMAScript Syntax [Lexical Structure]


1.大小写敏感


2.松散的变量类型
	- var
	- 变量不需要声明就可以赋值
	- hoisting: 
			所有变量、函数的声明在脚本执行前会被提前到当前scope的最前面；
			变量只有名字被提前（值不提前），函数名及其函数体都被提前。	
			"http://www.adequatelygood.com/JavaScript-Scoping-and-Hoisting.html"
			eg:
				for(var i=0; i<10; i++){} //出了此循环，变量i依旧存在且值为10
    -  未声明的变量在赋值时自动全局化
			eg:
				function foo() { car = "bwo"; }
				foo();  //实现赋值，变量car被全局化
				car;   // "bwo"


3.语句结束标志:分号(可选)
    - 要么都加,要么必要时才加(与Python的风格保持一致).
    - 在没有分号下,JavaScript判断语句结束规则:
        - 当且仅当下一语句无法成为当前语句的延续时,才视当前语句的换行为分号(语句结束):
            eg1:
                var a
                a
                =
                3
                console.log(a)
            相当于:
                var a; a=3; console.log(a);  //var a a 不成立,所以var a的换行即为结束
            eg2:
                var y = x + f
                (a+b).toString()
            相当于:
                var y = x + f(a+b).toString();  //第二句能够成为第一句的延续
        - return, break, continue后的换行视为分号(语句结束),即:
                return
                false
              相当于:
                return; false;
        - ++, --前的换行视为分号,eg:
                x
                ++
                y
              相当于:
                x;
                ++y;
    - 每条语句后加分号与否是风格的问题, 但在必要的地方必须加否则会引发各种问题.


4.注释：
	//注释
	/*注释*/


5.代码块：
	{ code block }


6.标识符（变量名，关键字，函数名，标签）
	- 头字符为字母(Unicode Characters)、下划线(_)或美元符($)，其余字符可为数字、字母、下划线或$.
	- 头字符不能为数字,否则JavaScript不容易与数字常量区分
	- 风格：驼峰，eg: firstName, secondName
	合法的标识符:
        x
        my_variable_name
        v23
        _dummy
        $str
        var sí = true;
        var π = 3.14;


7.关键字 & 预留字 (不能用作标识符)
	- break, case, switch, if, else, for, var, try, catch, throw, etc;
	  "https://www.w3schools.com/js/js_reserved.asp"
	- 此外还应避免标识符 与 ECMAScript,BOM,DOM的 内置变量名/函数名 冲突.


8.Primitive values and Reference values
	"http://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value?answertab=active#tab-top"
	A variable can hold one of two value types: primitive values or reference values.
	- Primitive value
		data that are stored on the stack.
		stored directly in the location that the variable accesses.
		Primitive types include Undefined, Boolean, Number, or String.
	- Reference value
		objects that are stored in the heap.
		stored in the variable location is a pointer to a location in memory where the object is stored.


9.常量
    12      // The number twelve
    1.2     // The number one point two
    "hello world" // A string of text
    'Hi'    // Another string
    true    // A Boolean value
    false   // The other Boolean value
    /javascript/gi    // A "regular expression" literal (for pattern matching)
    null    // Absence of an object
    { x:1, y:2 }    // An object initializer
    [1,2,3,4,5]     // An array initializer


10.内存自动回收
    When an object is no longer reachable—when a program no longer has any way to refer to it,
    the interpreter knows it can never be used again and automatically reclaims the memory it was occupying.

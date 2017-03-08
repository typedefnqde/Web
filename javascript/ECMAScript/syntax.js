ECMAScript Syntax

"JavaScript borrows most of its syntax from Java, but also inherits from Awk and Perl, with some inherits influence from Self in its object prototype system."


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

3.语句结束分号可省

4.注释：
	//注释
	/*注释*/

5.代码快：
	{ code block }

6.标识符（变量名，关键字，函数名，标签）
	- 头字符为字母、下划线或$，其余字符可为数字、字母、下划线或$.
	- 风格：驼峰，eg: firstName, secondName

7.关键字 & 预留字 (不能用作标识符)
	break, case, switch, if, else, for, var, try, catch, throw, etc;
	https://www.w3schools.com/js/js_reserved.asp

8.Primitive values and Reference values
	http://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value?answertab=active#tab-top
	A variable can hold one of two value types: primitive values or reference values.
	- Primitive value
		data that are stored on the stack.
		stored directly in the location that the variable accesses.
		Primitive types include Undefined, Null, Boolean, Number, or String.
	- Reference value
		objects that are stored in the heap.
		stored in the variable location is a pointer to a location in memory where the object is stored.

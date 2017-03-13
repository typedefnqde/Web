Numbers

JavaScript numbers are always stored as double precision floating point numbers, following the international IEEE 754 standard.

This format stores numbers in 64 bits,
where the number (the fraction) is stored in bits 0 to 51,
the exponent in bits 52 to 62,
and the sign in bit 63.

It can represent numbers as large as ±1.7976931348623157 × 10^308 and as small as ±5 × 10^−324,
and represent all integers between −9007199254740992 (−2^53) and 9007199254740992 (2^53).
But certain operations in JavaScript are performed with 32-bit integers (such as array indexing and the bitwise operators).


整数常量:
    - 233 //十进制
    - 0xA9 //10+9=19, 十六进制
    - 018 //8+8=16, 八进制, forbidden in strict mode.
    - 0b11 //2+1=3, 二进制


有理数常量(floating-point literals):
    [digits][.digits][(E|e)[(+|-)]digits]
    - 3.14
    - 233.489
    - .3333333333
    - 6.02e23 // 6.02 × 1023
    - 1.4738223E-32 // 1.4738223 × 10−32


Math Class(数学方法)
    - Math.pow(2, 3)    // => 2^3=8
    - Math.round(.6)    // => 1.0: round to the nearest integer
    - Math.ceil(.6)     // => 1.0: round up to an integer
    - Math.floor(.6)    // => 0.0: round down to an integer
    - Math.abs(-5)      // => 5: absolute value
    - Math.max(x,y,z)   // Return the largest argument
    - Math.min(x,y,z)   // Return the smallest argument
    - Math.random()     // A floating-point, pseudo-random number between 0 (inclusive) and 1 (exclusive).
    - Math.PI           // π: circumference of a circle / diameter
    - Math.E            // e: The base of the natural logarithm
    - Math.sqrt(4)      // => 2, 取平方根
    - Math.pow(27, 1/3) // => 3, 取立方根
    - Math.sin(0)       // Trigonometry: also Math.cos, Math.atan, etc.
    - Math.log(10)      // Natural logarithm of 10
    - Math.log(100)/Math.LN10   // Base 10 logarithm of 100
    - Math.log(512)/Math.LN2    // Base 2 logarithm of 512
    - Math.exp(3)       // Math.E cubed


计算结果异常
    - overflow
        When the result of a numeric operation is larger than the largest representable number,
        the result is a special infinity value, which JavaScript prints as Infinity.
        eg:
            Math.pow(2, 83993)      // => Infinity
            Math.pow(-2, 83993)     // => -Infinity
            Number.MAX_VALUE * 2    // => Infinity

    - underflow
        Occurs when the result of a numeric operation is closer to zero than the smallest representable number.
        In this case, JavaScript returns 0.
        eg:
            Number.MIN_VALUE / 2    // => 0
            -Number.MIN_VALUE / 2   // => -0

    - division by zero
        Division by zero is not an error in JavaScript.(Python中会报错:ZeroDivisionError)
        eg:
            12/0    // => Infinity
            -12/0   // => -Infinity
            Infinity/0  // => Infinity
            0/0     // => NaN
            Infinity/Infinity   // => NaN


    - 精度问题(rounding error)
        There are infinitely many real numbers,
        but only a finite number of them (18437736874454810627, to be exact)
        can be represented exactly by the JavaScript floating-point format.
        This means that when you’re working with real numbers in JavaScript,
        the representation of the number will often be an approximation of the actual number.
        The IEEE-754 floating-point representation used by JavaScript is a binary representation,
        which can exactly represent fractions like 1/2, 1/8, and 1/1024,
        Binary floating-point representations cannot exactly represent numbers as simple as 0.1.
        eg:
            x = .3 - .2     // => 0.09999999999999998, 非常接近0.1, 如果不是在比较值的场所, 该微小差异可以忽略
            y = .2 - .1     // => 0.1
            x == y          // => false
        This problem is not specific to JavaScript:
        it affects any programming language that uses binary floating-point numbers.(Python躺枪)
        The computed values are adequate for almost any purpose:
        the problem arises when we attempt to compare values for equality.
        解决:
            x = (.3*10 - .2*10)/10  // => 0.1  转换为整数运算后再转换回来
            x == 0.1    // => true



==============================================================================================

Number Methods and Properties
    Primitive values (like 3.14 or 2014),
    cannot have properties and methods (because they are not objects).
    But with JavaScript, methods and properties are also available to primitive values,
    because JavaScript treats primitive values as objects when executing methods and properties.

Properties
    - Number.MAX_VALUE    //1.7976931348623157e+308
    - Number.MIN_VALUE    //5e-324
    - Number.NEGATIVE_INFINITY    //-Infinity
    - Number.POSITIVE_INFINITY    //Infinity
    - Number.NaN  //NaN, Represents a "Not-a-Number" value

Methods
    - Number.isFinite() -> boolean    // Checks whether a value is a finite number
            //Number.isFinite(NaN) => false
            //Number.isFinite(23) => true
            //Number.isFinite('23') => false
    - Number.isInteger() -> boolean   // Checks whether a value is an integer
            //Number.isInteger(23) => true
            //Number.isInteger(23.) => true
            //Number.isInteger('23') => false
            //Number.isInteger(Math.pow(2, 534) - 1) => true
    - Number.isNaN()  -> boolean     // Checks whether a value is Number.NaN
            //Number.isNaN(Infinity/Infinity) => true
            //Number.isNaN(23) => false
    - Number.isSafeInteger() -> boolean  // Check whether a value is an safe integer.
                                // A safe integer is an integer that can be exactly represented as
                                // an IEEE-754 double precision number(all integers from (253 - 1) to -(253 - 1))
            //Number.isSafeInteger(Math.pow(2, 53) - 1) => true
            //Number.isSafeInteger(Math.pow(2, 534) - 1) => false
    - num.toExponential(x) -> string  //指数记数, x:保留小数位数,默认全部
            //x=23566; x.toExponential(3) => '2.357e+4'
            //3623.45467.toExponential() => '3.62345467e+3'
            //3.4.toExponential(20) => '3.39999999999999991118e+0'
    - num.toFixed(x) -> string  // x:保留小数个数,默认0; Converts a number into a string, keeping a specified number of decimals.
            //34.748.toFixed() => '35'
            //34.748.toFixed(20) => '34.74799999999999755573'
    - num.toPrecision(x) -> string  //x:保留数字个数,默认全部; Formats a number to a specified length.
            //34.748.toPrecision() => '34.748'
            //34.748.toPrecision(1) => '3e+1'
            //34.748.toPrecision(2) => '35'
            //34.748.toPrecision(10) => '34.74800000'
    - num.toString([radix]) -> string  //数字转换为字符, radix:可选,进制数,默认十进制
            //0xab.toString() => '171'
            //0xab.toString(16) => 'ab'
            //23..toString() => '23'
            //23..toString(2) => '10111'
            //23..toString(8) => '27'
    - num.valueOf() -> number //returns the primitive value of a number.
            //23..valueOf() => 23
            //a = new Number(23.4); a.valueOf() => 23.4

            
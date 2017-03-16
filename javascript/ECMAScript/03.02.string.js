Strings

A string is an immutable ordered sequence of 16-bit values,
each of which typically represents a Unicode character.
JavaScript uses the UTF-16 encoding of the Unicode character set,
and JavaScript strings are sequences of unsigned 16-bit values.
JavaScript’s strings (and its arrays) use zero-based indexing:
the first 16-bit value is at position 0, the second at position 1 and so on.
JavaScript does not have a special type that represents a single element of a string.

一个字节存储一个字符.但Javascript没有字符类型.



字符串常量
""      // The empty string: it has zero characters
'testing'
"3.14"
'name="myform"' // 'name="myform"'
"Wouldn't you prefer O'Reilly's book?"  //'Wouldn\'t you prefer O\'Reilly\'s book?'


backslash(\,反斜杠)
- 字符串过长:Used before a line break to break a string literal across multiple lines.
    eg:
       "one\    //A one-line string written on 3 lines. ECMAScript 5+ only.
       long\
       line"
- 转义
    eg:
        'You\'re right, it can\'t be a quote'
        "\0"    // => '\u0000'
        '\k'    // => 'k', 转义无效,\被忽略
        '\u2388' // => '⎈'
        '\xab'  // => '«'
    Escape Sequences(转义符):
    - '\0'   // The NUL character (\u0000)
    - '\b'   // Backspace (\u0008)
    - '\t'   // Horizontal tab (\u0009)
    - '\n'   // Newline (\u000A)
    - '\v'   // Vertical tab (\u000B)
    - '\f'   // Form feed (\u000C)
    - '\r'   // Carriage return (\u000D)
    - '\"'   // Double quote (\u0022)
    - '\''   // Apostrophe or single quote (\u0027)
    - '\\'   // Backslash (\u005C)
    - '\xXX'   // The Latin-1 character specified by the two hexadecimal digits XX
    - '\uXXXX'   // The Unicode character specified by the four hexadecimal digits XXXX


==================================================================

Properties
    - str.length    // Determine the length of a string—the number of 16-bit values it contains
    - +     // concatenate
            // 'AB' + 'CD' => 'ABCD'
            // '7' + 5  => '75'
    - str.constructor   // Returns the string's constructor function
            // 'ss'.constructor => [Function: String]
    - str[pos] // In ECMAScript 5, strings can be treated like read-only arrays,
            // 'abcd'[0] => 'a'

Methods
    - str.concat(str1, str2, ...) -> string
            // 'dd'.concat('23','er') => 'dd23er'
    - String.toString() -> string // returns the value of a String object.类似Number.valueOf()
            // ss = new String(s); ss.toString() => 'hello,world'
    - str.charAt(pos=0) -> string  // Returns the character at the specified index (position)
            // pos:默认0, 范围:[0,str.length-1]; 注意: 不同于Python, JS不支持从后找, 即pos不能为负数
            // 'hello,world'.charAt(0) => 'h'
            // 'hello,world'.charAt(-1) => ''
            // s='hello,world'; s.charAt(s.length-1) => 'd'
    - str.substring(start, end) -> str[start,end-1] // start>=0, end>=0, 负数无效
            // 'hello,world'.substring(1,3) => 'el'
            // 'hello,world'.substring(3,1) => 'el', 当end<start时,自动交换start和end
            // 'hello,world'.substring(1,-3) => 'h'
    - str.slice(start=0, end=str.length) -> str[start, end-1] //start和end可以为负数, 表倒数
            // 'hello,world'.slice(2,0) => ''   当end在start之前时提取无效
            // 'hello,world'.slice(-2) => 'ld'
    - str.indexOf(searchvalue, start=0) -> number // 从start开始往后找
            // start 表示真实的pos, 因为string从0算起,故当start<0时实际从0开始找
            // 'hello,world'.indexOf('l') => 2
            // 'hello,world'.indexOf('l',4) => 9
            // 'hello,world'.indexOf('l',-4) => 2,从头开始找
            // 'hello,world'.indexOf('l',10) => -1, -1表示没找到
    - str.lastIndexOf(searchvalue, start=str.length-1) -> nunmber // 从start开始往前找
            // 'hello,world'.lastIndexOf('l') => 9
            // 'hello,world'.lastIndexOf('l',8) => 3
            // 'hello,world'.lastIndexOf('l',0) => -1, 找不到
    - str.split([separator, limit]) -> array
            // 'hello,world'.split() => [ 'hello,world' ]
            // 'hello,world'.split('') => [ 'h', 'e', 'l', 'l', 'o', ',', 'w', 'o', 'r', 'l', 'd' ]
            // 'hello,world'.split('',3) => [ 'h', 'e', 'l' ]
            // 'hello,world'.split('l') => [ 'he', '', 'o,wor', 'd' ]
            // 'hello,world'.split('ddd') => [ 'hello,world' ]  找不到时不分割
            // 'hello,world'.split(/LL/gi) => searchvalue可以为正则表达式
    - str.toUpperCase() -> string
            // 'hello,world'.toUpperCase() => 'HELLO,WORLD'
    - str.toLowerCase() -> string
            // 'ABC'.toLowerCase() => 'abc'


==================================================================

String and RegExp:
    - str.match(pattern) -> array(matched-str1, matched-str2,...)
            // "testing: 1, 2, 3".match(/\d+/) => [ '1', index: 9, input: 'testing: 1, 2, 3' ]
            // "testing: 1, 2, 3".match(/\d+/g) => [ '1', '2', '3' ]
            // "testing: 1, 2, 3".match(/ddd/) => null  未匹配
    - str.search(pattern) -> number  // returns the position of the match.
            // "testing: 1, 2, 3".search(/\d+/) => 9
            // "testing: 1, 2, 3".search(/\d+/g) => 9
            // "testing: 1, 2, 3".search(/ddd/) => -1  未匹配
    - str.replace(pattern, newvalue) -> string
            // 'hello,world'.replace(/L/gi, 'P') => 'hePPo,worPd'
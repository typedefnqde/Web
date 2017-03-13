Type:

第一种分类: primitive types and object types.

- Primitive Types
    Data that are stored on the stack.
    Stored directly in the location that the variable accesses.
    - numbers
    - strings
    - booleans
    - undefined

- Object Types
    Objects that are stored in the heap.
    Stored in the variable location is a pointer to a location in memory where the object is stored.
    An object is a collection of properties where each property has a name and a value (either a primitive value, such as a number or string, or an object).
    - key-values: an unordered collection of named values.
    - arrays: an ordered collection of numbered values.
    - functions: has executable code, true values that js can treat them like regular objects;
                 constructor -- a kind of function that creates object.
    - null



第二种分类: 有方法的类型 和 不带方法的类型
    JavaScript is an object-oriented language, the types themselves define methods for working with values.
    Technically, it is only JavaScript objects that have methods.
    But numbers, strings, and boolean values behave as if they had methods.
    In JavaScript, null and undefined are the only values that methods cannot be invoked on.

- Types with methods:
    - Objects
    - numbers
    - strings
    - booleans

- Types without methods
    - null
    - undefined



第三种分类: 可变类型 和 不可变类型

 - Mutable Types (可变类型)
     A value of a mutable type can change.
     - Objects
     - Arrays

- Immutable Types (不可变类型)
    - numbers
    - booleans
    - strings
    - null
    - undefined



============================================================================
Values:

JavaScript converts values liberally from one type to another.
If a program expects a string, for example, and you give it a number, it will automatically convert the number to a string for you.
If you use a nonboolean value where a boolean is expected, JavaScript will convert accordingly.



============================================================================
Variables:

JavaScript variables are untyped:
you can assign a value of any type to a variable,
and you can later assign a value of a different type to the same variable.

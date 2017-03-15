Dates Object
    A JavaScript date can be written as a string:
        Tue Mar 14 2017 17:28:40 GMT+0800 (CST)
    or as a number:
        1489483720461   //specifies the number of milliseconds since January 1, 1970, 00:00:00.


初始化(创建Date对象):
    - new Date()    // 当前时间
            // new Date() => Tue Mar 14 2017 17:30:42 GMT+0800 (CST)
    - new Date(milliseconds)  //自1970-1-1 00:00:00起milliseconds
            // new Date(1) => Thu Jan 01 1970 08:00:00 GMT+0800 (CST)
    - new Date(dateString)
            // new Date('Tue Mar 14 2017 17:28:40 GMT+0800 (CST)') => Tue Mar 14 2017 17:28:40 GMT+0800 (CST)
            // new Date("October 13, 2014 11:13:00") => Mon Oct 13 2014 11:13:00 GMT+0800 (CST)
    - new Date(year, month, day, hours, minutes, seconds, milliseconds)
            // new Date(2017, 1, 31) => Fri Mar 03 2017 00:00:00 GMT+0800 (CST)
            // new Date(2017, 1, 31, 17, 52, 30) => Fri Mar 03 2017 17:52:30 GMT+0800 (CST)

    ps:
        new Date() -> object    // => Wed Mar 15 2017 09:45:34 GMT+0800 (CST)
        Date() -> string        // => 'Wed Mar 15 2017 09:45:37 GMT+0800 (CST)'

        Date(2015,10,2) => 'Wed Mar 15 2017 09:48:14 GMT+0800 (CST)'    // 无视参数,返回当前时间
        new Date(2015,10,2) => Mon Nov 02 2015 00:00:00 GMT+0800 (CST)  // 参数有效


Formats:
    - ISO Date(The International Standard, ISO 8601): "YYYY-MM-DD"
            eg: "2015-03-25"
    - Short Date: "MM/DD/YYYY"
            eg: "03/25/2015"
    - Long Date: "MMM DD YYYY" / "DD MMM YYYY"
            eg: "Mar 25 2015" or "25 Mar 2015"
    - Full Date:
            eg: "Wednesday March 25 2015"

Methods:
    - toDateString() -> string
            // var now = new Date(); now.toDateString(); => 'Tue Mar 14 2017'
            // new Date().toDateString(); => 'Wed Mar 15 2017' 方法跟在构造函数后

    - Date.parse(datestring) -> msec  // Return the number of milliseconds between January 1, 1970 and datestring
            // Date.parse("2012-03-21") => 1332288000000
            // Date.parse("March 21, 2012") => 1332259200000

    Get
    - getDate()     -> number   // Get the day as a number (1-31)
    - getDay()      -> number	// Get the weekday as a number (0-6), In JavaScript, the first day of the week (0) means "Sunday".
    - getFullYear()	-> number   // Get the four digit year (yyyy)
    - getHours()    -> number	// Get the hour (0-23)
    - getMilliseconds()	-> number  //Get the milliseconds (0-999)
    - getMinutes()  -> number	// Get the minutes (0-59)
    - getMonth()    -> number	// Get the month (0-11)
    - getSeconds()  -> number	// Get the seconds (0-59)
    - getTime()     -> number	//Get the time (milliseconds since January 1, 1970)

    Set: 改变自身
    - setDate(days)	     // Set the day as a number (1-31), days超过当月天数,顺数到下个月.下同
    - setFullYear(year, [month, days])	 // Set the year (optionally month and day)
    - setHours(hour)	 //Set the hour (0-23)
    - setMilliseconds(msec)	 // Set the milliseconds (0-999)
    - setMinutes(min)	 // Set the minutes (0-59)
    - setMonth(mon)	     // Set the month (0-11)
    - setSeconds(sec)	 // Set the seconds (0-59)
    - setTime(msec)	     // Set the time (milliseconds since January 1, 1970)


========================================================================================

Exercises:
Write a JavaScript program to display the current day and time in the following format.
Today is : Friday.
Current time is : 4 PM : 50 : 22

http://www.w3resource.com/javascript-exercises/javascript-basic-exercise-1.php



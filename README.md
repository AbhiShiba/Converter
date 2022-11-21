Project Name: Converter

	In general a converter is a person or a thing, which converts something from one form to another.
In this project converter is to convert Hexadecimal, Decimal, Octal and Binary values to each other and vice-versa.

Libraries/Framework used:
    Bootstrap: It is a free, open source front-end development framework for the creation of websites and web apps. Designed to enable responsive development of mobile-first websites, Bootstrap provides a collection of syntax for template designs.

    The Bootstrap framework is built on Hypertext Markup Language (HTML), cascading style sheets (CSS) and JavaScript.
    using Bootstrap  websites can be built much faster without spending time worrying about basic commands and functions.
    Font Awesome: It is a font and icon toolkit based on CSS and Less.

Conversion is done using following Built-in function.

	1. parseInt()
	2. toString()

parseInt() function: This function parses a string argument and returns an integer of the specified radix
                        (the base in mathematical numeral     systems).
        Syntax:
            parseInt(string)
            parseInt(string,radix)

    The radix argument is converted to a number. If it's unprovided, or if the value becomes 0, NaN or Infinity (undefined is coerced to NaN),JavaScript assumes the following:

        1.	If the input string, with leading whitespace and possible +/- signs removed, begins with 0x or 0X (a zero, followed by lowercase or uppercase X), radix is assumed to be 16 and the rest of the string is parsed as a hexadecimal number.
        2.	If the input string begins with any other value, the radix is 10 (decimal).

                Example:parseInt('fc',16)// output is 252
                        parseInt('110',2)// output is 6
                        parseInt('24',8)// output is 20

toString() method:  This method returns a string representing the object. This method is meant to be overridden by derived objects 
                    for custom type conversion logic.
	    Syntax:
            toString()

        By default toString() takes no parameters. However, objects that inherit from Object may override it with their own implementations
        do take parameters. For example, the Number.prototype.toString() and BigInt.prototype.toString() methods take an   parameter. optional radix parameter.

                Example:var temp = 10;
                        temp.toString(16)// output is “a”
                        temp.toString(2)// output is “1010”
                        temp.toString(8)// output is “12”

Use case of this project:

For smaller numbers conversion can be done manually but as the length of the number increases, it becomes harder to convert numbers from one form to another form. So with the help of converter conversion becomes easier and less time consuming.

With the help of Built-in methods, conversions are done and displayed on UI.

This converter can convert Digits from:
    Hexadecimal to Decimal and vice-versa
    Binary to Decimal and vice-versa
    Octal to Decimal and vice-versa
    Hexadecimal to Binary and vice-versa
    Binary to Octal and vice-versa
    Hexadecimal to Octal and vice-versa

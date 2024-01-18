var Stext = "txt";
var Snum = 1;
let someText = "Text";
let someNum2 = 2;
newWord = "itsOkeyOnJSWtf"
//var 222lol = "2lolol2" нельзя называть переменные с цифры (первый символ не может быть цифрой)

const username = "ghbdfa"; // тут тоже нельзя объявить константу не проинициализировав, впринципе логично почему

DoTheThing("someKakaka", 22);

function DoTheThing(kakakaka, kokokok)
{
    document.writeln(Stext + Snum + someText + someNum2 + (Snum + someNum2));
    document.write(newWord, " ", kakakaka, " ", kokokok); // у меня только-что получилось вывести эти элементы через ЗАПЯТУЮ!! в шарпах перегрузки мне бы, тупо, винду уже снесли и все транзисторы процессора вырвали
}


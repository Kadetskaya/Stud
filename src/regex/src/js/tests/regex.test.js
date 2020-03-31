const {describe} = require('mocha');
const reg = require('../regex');

describe('task1', function () {
    it('Найти строки ahb, acb, aeb', function () {
        assert.deepEqual(reg.regex1('ahb acb aeb aeeb adcb axeb'), ['ahb', 'acb', 'aeb']);
    });
});

describe('task2', function () {
    it('Найти строки abba adca abea', function () {
        assert.deepEqual(reg.regex2('aba aca aea abba adca abea'), ['abba', 'adca', 'abea']);
    });
});

describe('task3', function () {
    it('Найти строки abba и abea', function () {
        assert.deepEqual(reg.regex3('aba aca aea abba adca abea'), ['abba', 'abea']);
    });
});

describe('task4', function () {
    it('Найти строки aba, abba, abbba', function () {
        assert.deepEqual(reg.regex4('aa aba abba abbba abca abea'), ['aba', 'abba', 'abbba']);
    });
});

describe('task5', function () {
    it('Найти строки aa, aba, abba, abbba', function () {
        assert.deepEqual(reg.regex5('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
    });
});

describe('task6', function () {
    it('Найти строки aa, aba', function () {
        assert.deepEqual(reg.regex6('aa aba abba abbba abca abea'), ['aa', 'aba']);
    });
});

describe('task7', function () {
    it('Найти строки aa, aba, abba, abbba', function () {
        assert.deepEqual(reg.regex7('aa aba abba abbba abca abea'), ['aa', 'aba', 'abba', 'abbba']);
    });
});

describe('task8', function () {
    it('Найти строки ab abab abab abababab abea', function () {
        assert.deepEqual(reg.regex8('ab abab abab abababab abea'), ['ab', 'abab', 'abab', 'abababab', 'ab']);
    });
});

describe('task9', function () {
    it('Найти строки a.a', function () {
        assert.deepEqual(reg.regex9('a.a aba aea'), ['a.a']);
    });
});

describe('task10', function () {
    it('Найти строки 2+3', function () {
        assert.deepEqual(reg.regex10('2+3 223 2223'), ['2+3']);
    });
});

describe('task11', function () {
    it('Найти строки 2+3, 2++3, 2+++3', function () {
        assert.deepEqual(reg.regex11('23 2+3 2++3 2+++3 345 567'), ['2+3', '2++3', '2+++3']);
    });
});

describe('task12', function () {
    it('Найти строки 23, 2+3, 2++3, 2+++3', function () {
        assert.deepEqual(reg.regex12('23 2+3 2++3 2+++3 445 677'), ['23', '2+3', '2++3', '2+++3']);
    });
});

describe('task13', function () {
    it('Найти строки *q+, *qq+, *qqq+', function () {
        assert.deepEqual(reg.regex13('*+ *q+ *qq+ *qqq+ *qqq qqq+'), ['*q+', '*qq+', '*qqq+']);
    });
});

describe('task14', function () {
    it('Найти строки, по краям которых стоят буквы "a", и заменит каждую из них на "!"', function () {
        assert.deepEqual(reg.regex14('aba accca azzza wwwwa'), '!b!, !ccc!, !zzz!');
    });
});

describe('task15', function () {
    it('Найти строки abba, abbba, abbbba и только их', function () {
        assert.deepEqual(reg.regex15('aa aba abba abbba abbbba abbbbba'), ['abba', 'abbba', 'abbbba']);
    });
});

describe('task16', function () {
    it('Найти строки вида aba, в которых \'b\' встречается менее 3-х раз (включительно).', function () {
        assert.deepEqual(reg.regex16('aa aba abba abbba abbbba abbbbba'), ['aba', 'abba', 'abbba']);
    });
});

describe('task17', function () {
    it('Найти строки вида aba, в которых \'b\' встречается более 4-х раз (включительно)', function () {
        assert.deepEqual(reg.regex17('aa aba abba abbba abbbba abbbbba'), ['abbbba', 'abbbbba']);
    });
});

describe('task18', function () {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними одна цифра', function () {
        assert.deepEqual(reg.regex18('a1a a2a a3a a4a a5a aba aca'), ['a1a', 'a2a', 'a3a', 'a4a', 'a5a']);
    });
});

describe('task19', function () {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними любое количество цифр', function () {
        assert.deepEqual(reg.regex19('a1a a22a a333a a4444a a55555a aba aca'), ['a1a', 'a22a', 'a333a', 'a4444a', 'a55555a']);
    });
});

describe('task20', function () {
    it('Найти строки, в которых по краям стоят буквы \'a\', а между ними любое количество цифр (в том числе и ноль)', function () {
        assert.deepEqual(reg.regex20('aa a1a a22a a333a a4444a a55555a aba aca'), ['aa', 'a1a', 'a22a', 'a333a', 'a4444a', 'a55555a']);
    });
});

describe('task21', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\' и \'b\', а между ними - не число', function () {
        assert.deepEqual(reg.regex21('avb a1b a2b a3b a4b a5b abb acb'), ['avb', 'abb', 'acb']);
    });
});

describe('task22', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\' и \'b\', а между ними - не буква и не цифра', function () {
        assert.deepEqual(reg.regex22('ave a#b a2b a$b a4b a5b a-b acb'), ['a#b', 'a$b', 'a-b']);
    });
});

describe('task23', function () {
    it('Заменить все пробелы на \'!\'', function () {
        assert.deepEqual(reg.regex23('ave a#a a2a a$a a4a a5a a-a aca'), 'ave!a#a!a2a!a$a!a4a!a5a!a-a!aca');
    });
});

describe('task24', function () {
    it('Найти строки aba, aea, axa, не затронув остальных', function () {
        assert.deepEqual(reg.regex24('aba aea aca aza axa'), ['aba', 'aea', 'axa']);
    });
});

describe('task25', function () {
    it('Найти строки aba, a.a, a+a, a*a, не затронув остальных', function () {
        assert.deepEqual(reg.regex25('aba aea aca aza axa a.a a+a a*a'), ['aba', 'a.a', 'a+a', 'a*a']);
    });
});

describe('task26', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - цифра от 3-х до 7-ми', function () {
        assert.deepEqual(reg.regex26('a0a a2a a4a a6a a7a a.a a+a a*a'), ['a4a', 'a6a', 'a7a']);
    });
});

describe('task27', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до g.', function () {
        assert.deepEqual(reg.regex27('aba aea aca aza axa a.a a+a a*a'), ['aba', 'aea', 'aca']);
    });
});

describe('task28', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до f и от j до z', function () {
        assert.deepEqual(reg.regex28('aba aea aca aza axa a.a aha a*a'), ['aba', 'aea', 'aca', 'aza', 'axa']);
    });
});

describe('task29', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква от a до f и от A до Z', function () {
        assert.deepEqual(reg.regex29('aba aea aCa aza aXa aOa aka ala'), ['aba', 'aea', 'aCa', 'aXa', 'aOa']);
    });
});

describe('task30', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - не \'e\' и не \'x\'', function () {
        assert.deepEqual(reg.regex30('aba aea aca aza axa a-a a#a'), ['aba', 'aca', 'aza', 'a-a', 'a#a']);
    });
});

describe('task31', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'w\', а между ними - буква кириллицы', function () {
        assert.deepEqual(reg.regex31('wйw wяw wёw wqw'), ['wйw', 'wяw', 'wёw']);
    });
});

describe('task32', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие латинские буквы, не затронув остальных', function () {
        assert.deepEqual(reg.regex32('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza']);
    });
});

describe('task33', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие и большие латинские буквы, не затронув остальных', function () {
        assert.deepEqual(reg.regex33('aAXa aeffa aGha aza ax23a a3sSa'), ['aAXa', 'aeffa', 'aGha', 'aza']);
    });
});

describe('task34', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - маленькие латинские буквы и цифры, не затронув остальных', function () {
        assert.deepEqual(reg.regex34('aAXa aeffa aGha aza ax23a a3sSa'), ['aeffa', 'aza', 'ax23a']);
    });
});

describe('task35', function () {
    it('Найти все слова по шаблону: любая кириллическая буква любое количество раз', function () {
        assert.deepEqual(reg.regex35('ааа ббб ёёё ззз ййй ААА БББ ЁЁЁ ЗЗЗ ЙЙЙ'), ['ааа', 'ббб', 'ёёё', 'ззз', 'ййй', 'ААА', 'БББ', 'ЁЁЁ', 'ЗЗЗ', 'ЙЙЙ']);
    });
});

describe('task36', function () {
    it('Заменить первое \'aaa\' на \'!\'', function () {
        assert.deepEqual(reg.regex36('aaa aaa aaa'), '! aaa aaa');
    });
});

describe('task37', function () {
    it('Заменить первое \'aaa\' на \'!\'', function () {
        assert.deepEqual(reg.regex37('aaa aaa aaa'), 'aaa aaa !');
    });
});

describe('task38', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - буква \'x\' или буква \'e\' любое количество раз', function () {
        assert.deepEqual(reg.regex38('aeeea aeea aea axa axxa axxxa'), ['aeeea', 'aeea', 'aea', 'axa', 'axxa', 'axxxa']);
    });
});

describe('task39', function () {
    it('Найти строки следующего вида: по краям стоят буквы \'a\', а между ними - или буква \'e\' два раза или буква \'x\' любое количество раз', function () {
        assert.deepEqual(reg.regex39('aeeea aeea aea axa axxa axxxa'), ['aeea', 'axa', 'axxa', 'axxxa']);
    });
});

describe('task40', function () {
    it('Заменить строку \'a\\a\' на \'!\'', function () {
        assert.deepEqual(reg.regex40('a\\a abc'), '! abc');
    });
});

describe('task41', function () {
    it('Заменить строку \'a\\\\\\a\' на \'!\'', function () {
        assert.deepEqual(reg.regex41('a\\a a\\\\a a\\\\\\a'), 'a\\a a\\\\a !');
    });
});

describe('task42', function () {
    it('Заменить содержимое всех конструкций /...\\ на \'!\'', function () {
        assert.deepEqual(reg.regex42('bbb \/aaa\\ bbb \/ccc\\'), 'bbb ! bbb !');
    });
});

describe('task43', function () {
    it('Поменять местами то, что стоит до @ на то, что стоит после нее', function () {
        assert.deepEqual(reg.regex43('aaa@bbb eee7@kkk'), 'bbb@aaa kkk@eee7');
    });
});

describe('task44', function () {
    it('Найти все цифры и удвоить их количество', function () {
        assert.deepEqual(reg.regex44('a1b2c3'), 'a11b22c33');
    });
});

describe('task45', function () {
    it('Определить, что переданная строка является емэйлом mymail@mail.ru', function () {
        assert.deepEqual(reg.regex45('mymail@mail.ru'), true);
    });
    it('Определить, что переданная строка является емэйлом my.mail@mail.ru', function () {
        assert.deepEqual(reg.regex45('my.mail@mail.ru'), true);
    });
    it('Определить, что переданная строка является емэйлом my-mail@mail.ru', function () {
        assert.deepEqual(reg.regex45('my-mail@mail.ru'), true);
    });
    it('Определить, что переданная строка является емэйлом mail@mail.com', function () {
        assert.deepEqual(reg.regex45('mail@mail.com'), true);
    });
    it('Определить, что переданная строка является емэйлом mail.com', function () {
        assert.deepEqual(reg.regex45('mail.com'), false);
    });
});

describe('task46', function () {
    it('Выделить из текста емейлы: "Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com"',
        function () {
            assert.deepEqual(reg.regex46('Примеры емэйлов для тестирования mymail@mail.ru, my.mail@mail.ru, my-mail@mail.ru, my_mail@mail.ru, mail@mail.com'),
                ['mymail@mail.ru', 'my.mail@mail.ru', 'my-mail@mail.ru', 'my_mail@mail.ru', 'mail@mail.com']);
        });
});

describe('task47', function () {
    it('Определить, что переданная строка является доменом site.ru', function () {
        assert.deepEqual(reg.regex47('site.ru'), true);
    });
    it('Определить, что переданная строка является доменом my-site.com', function () {
        assert.deepEqual(reg.regex47('my-site.com'), true);
    });
    it('Определить, что переданная строка является доменом my-site', function () {
        assert.deepEqual(reg.regex47('my-site'), false);
    });
});

describe('task48', function () {
    it('Определить, что переданная строка является доменом http://site.ru', function () {
        assert.deepEqual(reg.regex48('http://site.ru'), true);
    });
    it('Определить, что переданная строка является доменом my-site.com', function () {
        assert.deepEqual(reg.regex48('my-site.com'), false);
    });
    it('Определить, что переданная строка является доменом http://site.com', function () {
        assert.deepEqual(reg.regex48('http://site.com'), true);
    });
});

describe('task49', function () {
    it('Определить, что переданная строка является доменом http://site.ru', function () {
        assert.deepEqual(reg.regex49('http://site.ru'), true);
    });
    it('Определить, что переданная строка является доменом my-site.com', function () {
        assert.deepEqual(reg.regex49('my-site.com'), false);
    });
    it('Определить, что переданная строка является доменом https://site.com', function () {
        assert.deepEqual(reg.regex49('https://site.com'), true);
    });
});

describe('task50', function () {
    it('Определить, что переданная строка является доменом http://site.ru', function () {
        assert.deepEqual(reg.regex50('http://site.ru'), true);
    });
    it('Определить, что переданная строка является доменом my-site.com', function () {
        assert.deepEqual(reg.regex50('my-site.com'), false);
    });
});

describe('task51', function () {
    it('Определить, что переданная строка заканчивается расширением txt, html или php: index.html', function () {
        assert.deepEqual(reg.regex51('index.html'), true);
    });
    it('Определить, что переданная строка заканчивается расширением txt, html или php: imagine', function () {
        assert.deepEqual(reg.regex51('imagine'), false);
    });
    it('Определить, что переданная строка заканчивается расширением txt, html или php: crud.php', function () {
        assert.deepEqual(reg.regex51('crud.php'), true);
    });
    it('Определить, что переданная строка заканчивается расширением txt, html или php: note.txt', function () {
        assert.deepEqual(reg.regex51('note.txt'), true);
    });
});

describe('task52', function () {
    it('Определить, что переданная строка заканчивается расширением jpg или jpeg: index.html', function () {
        assert.deepEqual(reg.regex52('index.html'), false);
    });
    it('Определить, что переданная строка заканчивается расширением jpg или jpeg: imagine.jpg', function () {
        assert.deepEqual(reg.regex52('imagine.jpg'), true);
    });
    it('Определить, что переданная строка заканчивается расширением jpg или jpeg: crud.jpeg', function () {
        assert.deepEqual(reg.regex52('crud.jpeg'), true);
    });
});

describe('task53', function () {
    it('Узнать является ли строка числом, длиной до 12 цифр: 53674835640987', function () {
        assert.deepEqual(reg.regex53('53674835640987'), false);
    });
    it('Узнать является ли строка числом, длиной до 12 цифр: 536748', function () {
        assert.deepEqual(reg.regex53('536748'), true);
    });
});

describe('task54', function () {
    it('Найти сумму всех чисел из данной строки: ha 7 j 54 jfk a#a 4 ha 8', function () {
        assert.deepEqual(reg.regex54('ha 7 j 54 jfk a#a 4 ha 8'), 28);
    });
    it('Найти сумму всех чисел из данной строки: br 1 f 4 hf3 j6d jd23', function () {
        assert.deepEqual(reg.regex54('br 1 f 4 hf3 j6d jd23'), 19);
    });
});

describe('task55', function () {
    it('Заменить в строке домен вида http://site.ru на <a href="http://site.ru">site.ru</a>', function () {
        assert.deepEqual(reg.regex55('http://site.ru'), '<a href="http://site.ru">site.ru</a>');
    });
});

describe('task56', function () {
    it('Заменить все повторяющиеся пробелы на один: ts  43   jdk    tey', function () {
        assert.deepEqual(reg.regex56('ts  43   jdk    tey'), 'ts 43 jdk tey');
    });
});

describe('task57', function () {
    it('Найти и удалить все комментарии CSS', function () {
        assert.deepEqual(reg.regex57('/*add styles*/'), '');
    });
});

describe('task58', function () {
    it('Найти и удалить все комментарии HTML', function () {
        assert.deepEqual(reg.regex58('//add a new container'), '');
    });
});

describe('task59', function () {
    it('Из \'aaab\' нужно сделать \'!b\'', function () {
        assert.deepEqual(reg.regex59('aaab aawa aaaw'), '!b aawa aaaw');
    });
});

describe('task60', function () {
    it('Из \'aaaw\' нужно сделать \'!w\'', function () {
        assert.deepEqual(reg.regex60('aaab aawa aaaw'), 'aaab aawa !w');
    });
});

describe('task61', function () {
    it('Преобразовать строку так, чтобы вместо целых чисел стояли их квадраты: 2 3 10 9', function () {
        assert.deepEqual(reg.regex61('2 3 10 9'), '4 9 100 81');
    });
});

describe('task62', function () {
    it('Найти числа, стоящие в кавычках и увеличьте их в два раза', function () {
        assert.deepEqual(reg.regex62('2aaa\'3\'bbb\'4\''), '2aaa\'6\'bbb\'8\'');
    });
});

describe('task63', function () {
    it('Найти все такие {{текст}} вставки и поменяйте в них порядок букв на обратный', function () {
        assert.deepEqual(reg.regex63('Найти все такие {{текст}} вставки'), 'Найти все такие {{тскет}} вставки');
    });
});

describe('task64', function () {
    it('Дана строка \'23 + 35 =\'. Выведите на экран результат операции в виде \'23 + 35 = 58\'', function () {
        assert.deepEqual(reg.regex64('23 + 35 ='), '23 + 35 =58');
    });
});

describe('task65', function () {
    it('Определить, что год находится в интервале от 1900 до 2100', function () {
        assert.deepEqual(reg.regex65('1999'), true);
    });
    it('Определить, что год находится в интервале от 1900 до 2100', function () {
        assert.deepEqual(reg.regex65('2200'), false);
    });
});

describe('task66', function () {
    it('Определить, что переданная строка является корректным временем 23:41', function () {
        assert.deepEqual(reg.regex66('23:41'), true);
    });
    it('Определить, что переданная строка является корректным временем 12.93', function () {
        assert.deepEqual(reg.regex66('12.93'), false);
    });
});

describe('task67', function () {
    it('Определить, что переданная строка является корректным временем 9.59 am', function () {
        assert.deepEqual(reg.regex67('9.59 am'), true);
    });
    it('Определить, что переданная строка является корректным временем 12.93', function () {
        assert.deepEqual(reg.regex67('59.59 am'), false);
    });
});

describe('task68', function () {
    it('Удалить все слова из предложения, содержащие две одинаковые следующие друг за другом буквы: aaaab ssst opppp kilo map', function () {
        assert.deepEqual(reg.regex68('aaaab ssst opppp kilo map'), 'kilo map');
    });
});

describe('task69', function () {
    it('Удалить все повторяющиеся слова из строки \'dsf xxx xxx sd\'', function () {
        assert.deepEqual(reg.regex69('dsf xxx xxx sd'), 'dsf xxx sd');
    });
});

describe('task70', function () {
    it('Удалить все повторяющиеся слова из строки \'dsf xxx xxx xxx xxx xxx sd\'', function () {
        assert.deepEqual(reg.regex70('dsf xxx xxx xxx xxx xxx sd'), 'dsf xxx sd');
    });
});
'use strict';

//На '.', символы

function regex1(str) {
    return str.match(/a.b/g);
};

function regex2(str) {
    return str.match(/a..a/g);
};

function regex3(str) {
    return str.match(/ab.a/g);
};


//На '+', '*', '?', ()

function regex4(str) {
    return str.match(/ab+a/g);
};

function regex5(str) {
    return str.match(/ab*a/g);
};

function regex6(str) {
    return str.match(/ab?a/g);
};

function regex7(str) {
    return str.match(/a(b|b*)a/g);
};

function regex8(str) {
    return str.match(/(ab)+/g);
};


//На экранировку

function regex9(str) {
    return str.match(/a\.a/g);
};

function regex10(str) {
    return str.match(/\d\+\d/g);
};

function regex11(str) {
    return str.match(/\d\++\d/g);
};

function regex12(str) {
    return str.match(/[2]\+*[3]/g);
};

function regex13(str) {
    return str.match(/\*q+\+/g);
};


//На жадность

function regex14(str) {
    let arr = str.match(/a.+?a/g).join(', ');
    let newStr = arr.replace(/a/g, '!');
    return newStr;
};


//На {}

function regex15(str) {
    return str.match(/ab{2,4}a/g);
    ;
};

function regex16(str) {
    return str.match(/ab{1,3}a/g);
};

function regex17(str) {
    return str.match(/ab{4,5}a/g);
};


//На \s, \S, \w, \W, \d, \D

function regex18(str) {
    return str.match(/a\da/g);
};

function regex19(str) {
    return str.match(/a\d+a/g);
};

function regex20(str) {
    return str.match(/a\d*a/g);
};

function regex21(str) {
    return str.match(/a[\D*]b/g);
};

function regex22(str) {
    return str.match(/a[\W*]b/g);
};

function regex23(str) {
    return str.replace(/\s/g, '!');
};


//На [], '^' - не, [a-zA-Z], кириллицу

function regex24(str) {
    return str.match(/a[^cz\s]a/g);
};

function regex25(str) {
    return str.match(/a[^c-z\s]a/g);
};

function regex26(str) {
    return str.match(/a[3-7]a/g);
};

function regex27(str) {
    return str.match(/a[a-g]a/g);
};

function regex28(str) {
    return str.match(/a[a-fj-z]a/g);
};

function regex29(str) {
    return str.match(/a[a-fA-Z]a/g);
};

function regex30(str) {
    return str.match(/a[^ex\s]a/g);
};

function regex31(str) {
    return str.match(/w[а-яё]w/g);
};


//На [a-zA-Z] и квантификаторы

function regex32(str) {
    return str.match(/a[a-z]+a/g);
};

function regex33(str) {
    return str.match(/a[a-zA-Z]+a/g);
};

function regex34(str) {
    return str.match(/a[a-z0-9]+a/g);
};

function regex35(str) {
    return str.match(/[а-яА-ЯёЁ]+/g);
};


//На '^', '$'

function regex36(str) {
    return str.replace(/^a{3}/g, '!');
};

function regex37(str) {
    return str.replace(/a{3}$/g, '!');
};


//На '|'

function regex38(str) {
    return str.match(/ae+a|ax+a/g);
};

function regex39(str) {
    return str.match(/ae{2}a|ax+a/g);
};


//На обратный слеш \

function regex40(str) {
    return str.replace(/a\\a/g, '!');
};

function regex41(str) {
    return str.replace(/a\\{3}a/g, '!');
};


//На экранировку посложнее

function regex42(str) {
    return str.replace(/\/.{3}\\/g, '!');
};


//На экранировку посложнее

function regex43(str) {
    return str.replace(/(\w+)@(\w+)/g, '$2@$1');
};

function regex44(str) {
    return str.replace(/(\d)/g, '$1$1');
};


//Задачи на test и match

function regex45(str) {
    return /^[a-z]+@[a-z]+\.[a-z]{2,3}$|^[a-z]+.[a-z]+@[a-z]+\.[a-z]{2,3}$/.test(str);
};

function regex46(str) {
    return str.match(/[a-z]+@[a-z]+\.[a-z]{2,3}|[a-z]+.[a-z]+@[a-z]+\.[a-z]{2,3}/g);
};

function regex47(str) {
    return /^[a-z]+\.[a-z]{2,3}$|^[a-z]+.[a-z]+\.[a-z]{2,3}$/.test(str);
};

function regex48(str) {
    return /^http:\/\/[a-z]+\.[a-z]{2,3}$/.test(str);
};

function regex49(str) {
    return /^http:\/\/[a-z]+\.[a-z]{2,3}$|^https:\/\/[a-z]+\.[a-z]{2,3}$/.test(str);
};

function regex50(str) {
    return /^http|^https/.test(str);
};

function regex51(str) {
    return /txt$|html$|php$/.test(str);
};

function regex52(str) {
    return /jpg$|jpeg$/.test(str);
};

function regex53(str) {
    return /^[0-9]{1,12}$/.test(str);
};

function regex54(str) {
    let arr = str.match(/\d/g);
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += parseInt(arr[i]);
    }
    return sum;
};


//Задачи на replace

function regex55(str) {
    return str.replace(/http:\/\/site\.[a-z]{2,3}/g,
        "<a href=\"http:\/\/site\.ru\">site\.ru<\/a>");
};

function regex56(str) {
    return str.replace(/\s+/g, " ");
}

function regex57(str) {
    return str.replace(/\/\*.*?\*\//g, "");
};

function regex58(str) {
    return str.replace(/\/\/.*/g, "");
};


//На позитивный и негативный просмотр

function regex59(str) {
    return str.replace(/a{3}(?=b)/, '!');
};

function regex60(str) {
    return str.replace(/a{3}(?!b)/, '!');
};


//На replace

function regex61(str) {
    return str.replace(/\d+/g, function (match) {
        return match * match;
    });
};

function regex62(str) {
    return str.replace(/\d+(?=')/g, function (match) {
        return match * 2;
    });
};

function regex63(str) {
    return str.replace(/(т)(е)(к)(с)(т)(?=}})/g, '$5$4$3$2$1');
};

function regex64(str) {
    return str.replace(/(\d+)\s\+\s(\d+)\s=/g, function (match, match1, match2) {
        let res = parseInt(match1) + parseInt(match2);
        return match + res;
    })
};

function regex65(str) {
    return (/^(19\d\d|20\d\d|2100)$/.test(str));
};

function regex66(str) {
    return /^([01]\d|2[0-3]):[0-5]\d$/.test(str);
};

function regex67(str) {
    return /^(\d|[10-12]\d)\.[0-5]\d\s[ap]m$/.test(str);
};

function regex68(str) {
    return str.replace(/\W*\w*(\w)\1\w*\W*/g, "");
};

function regex69(str) {
    return str.replace(/\b(\w+)\s+\1/g, "$1");
};

function regex70(str) {
    return str.replace(/\b(\w+)\b(?:\s+\1\b)+/g, "$1");
};



module.exports = {
    regex1, regex2, regex3, regex4, regex5, regex6, regex7, regex8, regex9, regex10,
    regex11, regex12, regex13, regex14, regex15, regex16, regex17, regex18, regex19, regex20,
    regex21, regex22, regex23, regex24, regex25, regex26, regex27, regex28, regex29, regex30,
    regex31, regex32, regex33, regex34, regex35, regex36, regex37, regex38, regex39, regex40,
    regex41, regex42, regex43, regex44, regex45, regex46, regex47, regex48, regex49, regex50,
    regex51, regex52, regex53, regex54, regex55, regex56, regex57, regex58, regex59, regex60,
    regex61, regex62, regex63, regex64, regex65, regex66, regex67, regex68, regex69, regex70
};
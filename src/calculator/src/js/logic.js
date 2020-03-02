function add (val1, val2) {
    return val1 + val2;
};

function subtract (val1, val2) {
    return val1 - val2;
};

function multiply (val1, val2) {
    return val1 * val2;
};

function divide (val1, val2) {
    if (val2 === 0) {
        let error = "Error";
        return error;
    }
    return val1 / val2;
};

module.exports = {
     add,
     subtract,
     multiply,
     divide
 };
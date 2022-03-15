"use strict";
let g_final_result = "";
const base_opts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const number_opts = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '+'];
function verify_number_errors(number_input, number_len) {
    //console.log("got inside verify number errors")
    let i;
    let j;
    let equal_found = 0;
    i = 0;
    j = 0;
    if (number_len < 1)
        return true;
    if ((number_input[0] == '+' || number_input[0] == '-')
        && number_len < 2)
        return true;
    while (i <= number_len) {
        j = 1;
        while (j <= number_len) {
            if ((number_input[0] == '-' || number_input[0] == '+')
                && number_input[j] == number_input[0])
                return true;
            j++;
        }
        for (let index in number_opts) {
            if (!(number_opts.includes(number_input[i])))
                return true;
        }
        i++;
    }
    return false;
}
function verify_base_errors(base_val, base_len) {
    let i;
    let j;
    i = 0;
    j = 0;
    if (base_val[i] == '\0' || base_len < 2)
        return true;
    while (i <= base_len) {
        if (base_val[i] == '+' || base_val[i] == '-')
            return true;
        if ((base_val[i] < '0' && base_val[i] > '9')
            && (base_val[i] < 'a' && base_val[i] > 'z')
            && (base_val[i] < 'A' && base_val[i] > 'Z'))
            return true;
        j = 1;
        while ((i + j) <= base_len) {
            if (base_val[i + j] == base_val[i])
                return true;
            j++;
        }
        i++;
    }
    return false;
}
function calculate_base(base_input, base_len, number) {
    //console.log(base_input)
    if (number < 0) {
        g_final_result = g_final_result + "-";
        //console.log(g_final_result)
        number = (number * (-1));
    }
    if (number < base_len) {
        //console.log(base_input.charAt(number % base_len))
        g_final_result = g_final_result + base_input.charAt(number % base_len);
        //console.log(g_final_result)
        return g_final_result;
    }
    else {
        calculate_base(base_input, base_len, (number / base_len));
        calculate_base(base_input, base_len, (number % base_len));
    }
    return g_final_result;
}
function main() {
    const base_input = document.getElementById("base_input").value;
    const base_len = base_input.length;
    const number_input = document.getElementById("number_input").value;
    const number_len = number_input.length;
    let result = document.getElementById("result");
    g_final_result = "";
    if (verify_base_errors(base_input, base_len))
        return result.value = "Invalid base!";
    else if (verify_number_errors(number_input, number_len))
        return result.value = "Invalid number!";
    else
        return result.value = calculate_base(base_input, base_len, parseInt(number_input));
}
// https://pt.wikipedia.org/wiki/Convers%C3%A3o_de_base_num%C3%A9rica

// const base_input = "eee"
var result = document.getElementById("result");
function verify_base_errors(base_input) {
    var i;
    var j;
    var str_len;
    i = 0;
    while (base_input[i] != '\0') {
        i++;
    }
    str_len = i;
    i = 0;
    if (base_input[i] == '\0' || str_len == 1)
        return true;
    while (base_input[i] != '\0') {
        if (base_input[i] == '+' || base_input[i] == '-')
            return true;
        j = 1;
        while (base_input[i + j] != '\0') {
            if (base_input[i + j] == base_input[i])
                return true;
            j++;
        }
        i++;
    }
    return false;
}
function calculate_base(base_input) {
    if (verify_base_errors(base_input)) {
        return "Base invalida!";
    }
    else
        return "Base valida!";
}
function main() {
    var base_input = document.getElementById("base_input");
    // const number_input = (<HTMLInputElement>document.getElementById("number_input")).value
    result.value = "que odio porra";
}

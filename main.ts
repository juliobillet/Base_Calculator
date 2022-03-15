
let g_final_result = ""

function is_valid_base(base_input:string)
{
	if(base_input.length < 2)
		return false
	for(const i of base_input)
	{
		if(!i.match(/[a-z]|[0-9]/i))
			return false
	}
	if([...(new Set(base_input))].length !== base_input.length)
		return false
	return true
}

function	is_valid_number(input: string)
{
	if(input.includes('.'))
		return false;
	if (input.length < 1)
		return false;
	return !isNaN(Number(input));
}

function    calculate_base(base_input: string, number: number): string
{
	if (number < 0)
	{
		g_final_result = g_final_result + "-"
		number = (number * (-1))
	}
	if (number < base_input.length)
	{
		g_final_result = g_final_result + base_input.charAt(number % base_input.length)
		return g_final_result
	}
	else
	{
		calculate_base(base_input, (number / base_input.length))
		calculate_base(base_input, (number % base_input.length))
	}
	return g_final_result
}

function    main()
{ 
    const base_input = (<HTMLInputElement>document.getElementById("base_input")).value

    const number_input = (<HTMLInputElement>document.getElementById("number_input")).value

	let result = <HTMLInputElement>document.getElementById("result")
	
	g_final_result = ""

	if (!is_valid_base(base_input))
		return result.value = "Invalid base!"
	else if (!is_valid_number(number_input))
		return result.value = "Invalid number!"
	else
		return result.value = calculate_base(base_input, parseInt(number_input))
}

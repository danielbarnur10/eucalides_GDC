function euclides(a, b) {
    if (b === 0) {
        return a;
    }
    else {
        console.log(a, b);
        return euclides(b, a % b)
    }
};

function onSubmitDetails(event) {
    event.preventDefault();
    const data = event.target;
    const a = data.param1.value;
    const b = data.param2.value;
    semiResult = euclides(a, b);
    const result = (a * b) / semiResult;
    pElem = document.createElement("p");
    pElem.textContent = `Result is :  ${a}*${b}/${semiResult} = ${result}`;
    document.body.appendChild(pElem);
}
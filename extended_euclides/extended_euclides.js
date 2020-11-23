
function Extended_Euclid(a, b) {
    if (b === 0) {
        const abc = {
            d: a,
            x: 1,
            y: 0,
        };
        return abc;
    }
    let obj = Extended_Euclid(b, a % b);
    console.log(obj)
    let newd = obj.d;
    let newx = obj.x;
    let newy = obj.y;
    obj.d = newd;
    obj.x = newy;
    obj.y = newx - parseInt(a / b) * newy;
    console.log(obj.d, obj.x, obj.y);
    return obj;
};
function submitDetails(event) {
    event.preventDefault();
    const data = event.target;
    const a = data.param1.value;
    const b = data.param2.value;
    let pElem = document.createElement('p');
    
    const result = Extended_Euclid(a, b);
    pElem.textContent = `Result: d = ${result.d} x = ${result.x} y = ${result.y}`;
    console.log('GCD(' + a + ',' + b + ')' + ' is done =', result);
    document.body.appendChild(pElem)

}

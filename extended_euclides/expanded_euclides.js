
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
document.querySelector('button').addEventListener('click', () => {
    let r = 0;
    const a = +document.querySelector('.param1').value;
    const b = +document.querySelector('.param2').value;
    let pElem = document.createElement('p');
    r = Extended_Euclid(a, b);
    pElem.textContent = `Result: d = ${r.d} x = ${r.x} y = ${r.y}`;
    console.log('GCD(' + a + ',' + b + ')' + ' is done =', r);
    document.body.appendChild(pElem)

})

let a = 35, b = 15;
Extended_Euclid(a, b)
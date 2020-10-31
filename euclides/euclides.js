function euclid(a, b) {
    if (b === 0) {
        return a;
    }
    else {
        console.log(a, b);
        return euclid(b, a % b)
    }

};
document.querySelector('button').addEventListener('click', () => {
let r = 0;
    const a = +document.querySelector('.param1').value;
    const b = +document.querySelector('.param2').value;
    let pElem = document.createElement('p')
    pElem.textContent = 'Result:' + (r = euclid(a, b));
    console.log('GCD('+ a+','+ b+')' + ' is done =' , r );
    document.body.appendChild(pElem)

})


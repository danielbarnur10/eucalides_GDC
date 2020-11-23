function euclid(a, b) {
    if (b === 0) {
        return a;
    }
    else {
        console.log(a, b);
        return euclid(b, a % b)
    }

};
function submitDetails(event) {
    event.preventDefault();
    const data = event.target;
    const a = data.param1.value;
    const b = data.param2.value;
    let pElem = document.createElement('p');
    
    const result = euclid(a, b);
    pElem.textContent = 'Result:' + (result);
    console.log('GCD('+ a + ',' + b + ')' + ' is done =' , result );
    document.body.appendChild(pElem)

}

   


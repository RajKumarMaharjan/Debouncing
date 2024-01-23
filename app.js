const searchInput = document.querySelector("#search-input");
const searchBtn = document.querySelector('button')

function debounce(func, delay){
    let timeOut;
    return function(...args){
        clearTimeout(timeOut);
       timeOut = setTimeout(() => {
            func(...args)
        }, delay);
    }
};

const myFunction = function (event) {
    const query = event.target.value;
    console.log(query)
};


searchInput.addEventListener("input", debounce(myFunction, 500));

// function throttle(func, delay){
//     let shouldCall = true;
//     return function(...args){
//         if(!shouldCall)
//         return;

//         func(...args)
//         shouldCall = false;

//         setTimeout(() => {
//             shouldCall = true;
//         }, delay);
//     }
// }

function throttle(func, delay){
    let lastCall = 0;
    return function (...args){
        const now = new Date().getTime();
        if((now-lastCall) < delay)
        return;
        lastCall = now;
        func(...args)
    }
}

const buttonClick = () => {
     console.log('button...')
}
searchBtn.addEventListener("click", throttle(buttonClick, 1000))
(function () {
    const ex1 = document.querySelector('.example-1');
    const ex2 = document.querySelector('.example-2');
    const timeToFill = 3000;
    /** Implementstion 1 */
    const fillBar1 = () => {
        const bar = ex1.querySelector('.bar');
        let progress = 0;
        const interval = setInterval(() => {
            bar.style.width = progress + '%';
            bar.innerHTML = progress + '%';
            console.log('runnig at ' + progress + '%');
            progress++;
            if (progress > 100) {
                clearInterval(interval);
            }
        }, timeToFill / 100);
    };
    /** Implementation 2 */
    const fillBar2 = () => {
        const bar = ex2.querySelector('.bar');
        bar.style.width = '100%';
        bar.style.transition = `${timeToFill}ms linear width`;
    };

    ex1.addEventListener('click', fillBar1);
    ex2.addEventListener('click', fillBar2);
})();

setInterval(()=>{
    const Red = Math.round(Math.random() * 255)
    let Bleu = Math.round(Math.random() * 255)
    let green = Math.round(Math.random() * 255)
    document.body.style.background = `rgb(${Red},${Bleu},${green})`
}, 100)

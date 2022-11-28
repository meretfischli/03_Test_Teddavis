function draw(ctx) {
    const canvas = document.getElementById('cnv1');
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        canvas.width = 100
        canvas.height = 100

        ctx.strokeRect(pos, pos, size, size);
        ctx.strokeRect(pos*2, pos*2, size/3, size/3);
    }
   
}

function update(){
    draw()
    pos += 10
    requestAnimationFrame(update)
}

//hello
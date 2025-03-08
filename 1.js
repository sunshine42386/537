const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');  
const text = document.querySelector('.text');
const button2Text = document.querySelector('.button2').innerHTML;
const img1 = document.querySelector('.img1');
let count = 0;
button2.addEventListener('click', () => {
    count++;
    // 基础缩放值
    const baseScale1 = 1.2; // 可以按钮的基础放大倍数
    const baseScale2 = 0.9; // 不可以按钮的基础缩小倍数
    
    if (count >= 1) {
        // 每次点击增加或减少的比例
        const scale1 = baseScale1 + (count * 0.1); // 每次增加0.1
        const scale2 = baseScale2 - (count * 0.05); // 每次减少0.05
        if(scale2 < 0.05){
            scale2 = 0.05;
        }
        button1.style.transform = `scale(${scale1})`;
        button2.style.transform = `scale(${scale2})`;
        
        // 根据点击次数更新图片和文本
        if (count === 1) {
            button2.innerHTML = "哈？？！";
            img1.src = './static/2.png';
        } else if (count === 2) {
            button2.innerHTML = "乌拉拉拉拉！";
            img1.src = './static/3.png';
        } else if (count === 3) {
            button2.innerHTML = "乌拉...";
            img1.src = './static/4.png';
        } else if (count === 4) {
            button2.innerHTML = "乌哭了（乌装的)";
            img1.src = './static/6.png';
        }
    }
});

button1.addEventListener('click', () => {
    button1.style.display = 'none';
    button2.style.display = 'none';
    text.innerHTML = '乌拉呀哈呀哈乌拉';
    img1.src = './static/5.png';
});


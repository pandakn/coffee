const text = document.getElementById("text");
const letter = "Start the day with coffee.";

let idx = 1;

const writeText = () => {
    //ใช้ slice ดึงตัวอักษรทีละตัวมาแสดง
    text.innerHTML = letter.slice(0, idx) + "|";
    idx++;

    if (idx > letter.length) {
        setTimeout(() => {
            idx = 1;
        }, 150);
    }
}

setInterval(writeText, 150);
const s = "12:01:00AM"

function timeConversion(time){
  const mod = time.substr(-2);
  let [h, m, s] = time.substr(0, time.length -2).split(":");
  h = h == 12 && mod == "AM" ? 0 : 12;
  h = mod == "PM" ? h + 12 : h;
  h = h.toString().padStart(2, '0');
  console.log(`${h}:${m}:${s}`);
}

timeConversion(s)

let ctx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq){
  let osc = ctx.createOscillator();
  let gain = ctx.createGain();
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(1, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
  osc.connect(gain).connect(ctx.destination);
  osc.start();
  osc.stop(ctx.currentTime + 0.3);
}

function playLeft(){ playTone(140); }
function playRight(){ playTone(200); }

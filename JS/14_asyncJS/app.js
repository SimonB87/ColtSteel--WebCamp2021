const delayedColor = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.background = color;
      resolve();
    }, delay)
  })
}

delayedColor("red", 1000)
.then(() => delayedColor("orange", 500))
.then(() => delayedColor("yellow", 500))
.then(() => delayedColor("green", 500))
.then(() => delayedColor("purple", 500))
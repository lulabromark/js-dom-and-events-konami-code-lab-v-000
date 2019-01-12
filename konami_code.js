const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  const body = document.querySelector('body');
  let index = 0;

  body.addEventListener('keydown', function onKeyDownHandler(e) {
    const key = parseInt(e.which || e.location);

    if (key === code[index]) {
      index++

      if (index === code.length) {
        alert('Congratulations! Konami Code accepted.');

        index = 0;
      }
    } else {
      index = 0;
    }
  });
}

init()
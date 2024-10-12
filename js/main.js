// script.js

// Ensure the script runs after the DOM has loaded
window.onload = () => {
  // Handle title animation
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = 'hope you have a best day'.split('');
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);

  // Handle audio playback
  document.getElementById('playButton').addEventListener('click', () => {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.play();
  });
};

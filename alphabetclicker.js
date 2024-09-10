
document.addEventListener('DOMContentLoaded', () => {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const data = {
      A: { word: 'Apple', image: 'images/apple.jpg', sound: 'sounds/apple.mp3' },
      B: { word: 'Ball', image: 'images/ball.jpg', sound: 'sounds/ball.mp3' },
      C: { word: 'Cat', image: 'images/chair.jpg', sound: 'sounds/chair.mp3' },
      D: { word: 'Doctor', image: 'images/doctor.png', sound: 'sounds/doctor.mp3' },
      E: { word: 'Elephant', image: 'images/elephant.png', sound: 'sounds/elephant.mp3' },
      F: { word: 'Flower', image: 'images/flower.png', sound: 'sounds/flower.mp3' },
      G: { word: 'Giraffe', image: 'images/giraffe.png', sound: 'sounds/giraffe.mp3' },
      H: { word: 'Hat', image: 'images/hat.png', sound: 'sounds/hat.mp3' },
      I: { word: 'Ice', image: 'images/ice.png', sound: 'sounds/ice.mp3' },
      J: { word: 'Jacket', image: 'images/jacket.png', sound: 'sounds/jacket.mp3' },
      K: { word: 'Kite', image: 'images/kite.png', sound: 'sounds/kite.mp3' },
      L: { word: 'Lion', image: 'images/lion.png', sound: 'sounds/lion.mp3' },
      M: { word: 'Monkey', image: 'images/monkey.png', sound: 'sounds/monkey.mp3' },
      N: { word: 'Notebook', image: 'images/notebook.png', sound: 'sounds/notebook.mp3' },
      O: { word: 'Orange', image: 'images/orange.png', sound: 'sounds/orange.mp3' },
      P: { word: 'Pencil', image: 'images/pencil.png', sound: 'sounds/pencil.mp3' },
      Q: { word: 'Queen', image: 'images/queen.png', sound: 'sounds/queen.mp3' },
      R: { word: 'Rabbit', image: 'images/rabbit.png', sound: 'sounds/rabbit.mp3' },
      S: { word: 'Sun', image: 'images/sun.png', sound: 'sounds/sun.mp3' },
      T: { word: 'Tiger', image: 'images/tiger.png', sound: 'sounds/tiger.mp3' },
      U: { word: 'Umbrella', image: 'images/umbrella.png', sound: 'sounds/umbrella.mp3' },
      V: { word: 'Violin', image: 'images/violin.png', sound: 'sounds/violin.mp3' },
      W: { word: 'Watch', image: 'images/watch.png', sound: 'sounds/watch.mp3' },
      X: { word: 'Xylophone', image: 'images/xylophone.png', sound: 'sounds/xylophone.mp3' },
      Y: { word: 'Yacht', image: 'images/yacht.png', sound: 'sounds/yacht.mp3' },
      Z: { word: 'Zebra', image: 'images/zebra.png', sound: 'sounds/zebra.mp3' },
      
          // Add more entries as needed
    };
  
    const alphabetContainer = document.querySelector('.alphabet-container');
    const displayImage = document.getElementById('display-image');
    const displayAudio = document.getElementById('display-audio');
  
    // Create alphabet buttons
    alphabet.split('').forEach(letter => {
      const button = document.createElement('button');
      button.textContent = letter;
      button.addEventListener('click', () => handleAlphabetClick(letter));
      alphabetContainer.appendChild(button);
    });
  
    function handleAlphabetClick(letter) {
      const entry = data[letter];
      if (entry) {
        displayImage.src = entry.image;
        displayImage.alt = entry.word;
        displayImage.style.display = 'block';
  
        displayAudio.src = entry.sound;
        displayAudio.play();
      }
    }
  });
  
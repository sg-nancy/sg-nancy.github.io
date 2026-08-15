// menu hamburger using tailwind
const nav = document.querySelector('nav');

// toggle hidden class
const toggleMenu = () => {
  nav.classList.toggle('hidden');
}

// close menu when clicking outside
const closeOutside = (e) => {
  if (!e.target.closest('.menu')) {
    nav.classList.add('hidden');
  }
}

document.querySelector('.menu').addEventListener('click', toggleMenu);
// document.querySelector('.menu').addEventListener('touchend', toggleMenu);
document.addEventListener('click', closeOutside);
// document.addEventListener('touchend', closeOutside);

let audio;

function canPlayAudio() {
  return !!window.speechSynthesis;
}

function display(state) {
  let selector = document.querySelector(audio);
  let icon = selector.querySelector('i');

  if (state) {
    icon.classList.add('fa-volume-up');
    icon.classList.remove('fa-volume-off');
    icon.parentElement.innerHTML = icon.parentElement.innerHTML.replace('Lire', 'Arrêter');
  } else {
    icon.classList.add('fa-volume-off');
    icon.classList.remove('fa-volume-up');
    icon.parentElement.innerHTML = icon.parentElement.innerHTML.replace('Arrêter', 'Lire');
  }
}

function readCardContent(cardSelector) {
  if (!canPlayAudio()) {
    return;
  }

  let selector = document.querySelector(cardSelector);

  if (speechSynthesis.speaking && audio) {
    speechSynthesis.cancel();
    display(false);
    return;
  }

  audio = cardSelector;

  let nodes = selector.querySelectorAll('p');
  let paragraphs = Array.from(nodes);
  let content = paragraphs.map(p => p.textContent).join('. ');
  let cleanContent = content.replace(/\s+/g, ' ').trim();

  speechSynthesis.speak(new SpeechSynthesisUtterance(cleanContent));
  display(true);
}

function toggleText(bouton) {
  const carteGlobale = bouton.closest('.bg-card-background');
  const blocContenu = carteGlobale.querySelector('.more-content');
  const blocContenuGradient = blocContenu.nextElementSibling;

  if (blocContenu) {
    blocContenu.classList.toggle('max-h-[3.5rem]');
    blocContenu.classList.toggle('max-h-[500px]');
    blocContenuGradient.classList.toggle('opacity-0');
    blocContenu.classList.toggle('opacity-60');

    if (blocContenu.classList.contains('max-h-[3.5rem]')) {
      bouton.innerText = "Lire plus";
    } else {
      bouton.innerText = "Lire moins";
    }
  } else {
    console.error("Le script n'a pas trouvé la classe '.more-content' dans cette carte.");
  }
}

function toggleTextDiv(div) {
  const carteGlobale = div.closest('.bg-card-background');
  const blocContenuText = carteGlobale.querySelector('.more-content-text');
  if (blocContenuText) {
    toggleText(blocContenuText);
  }
}

  // on va chercher la vidéo à l'intérieur du conteneur cliqué
function togglePlayVideo(conteneur) {
  const video = conteneur.querySelector('video');

  if (video) {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}

function togglePlayVideo(conteneur) {
  // on récupère l'événement du clic et la vidéo concernée
  const e = window.event || event;
  const video = conteneur.querySelector('video');

  if (video) {
    if (e && e.target.tagName === 'VIDEO' && e.offsetY > video.clientHeight - 50) {
      return;
    }
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
}

// on écoute le lancement de n'importe quelle vidéo sur la page
document.querySelectorAll('video').forEach(video => {
  video.addEventListener('play', function () {
    document.querySelectorAll('video').forEach(autreVideo => {
      if (autreVideo !== video && !autreVideo.paused) {
        autreVideo.pause();
      }
    });
  });
});
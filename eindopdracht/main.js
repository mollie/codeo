/**
 * 1. Define file input
 * 2. Pass file input handle to library
 * 3. Manipulate photo filter via CSSgram
 * 4. Bind event to form submission
 * 5. Ask binary file from library (4. Use html2canvas for converting to binary file)
 * 6. Upload to API
 * 
 * Bonus: style app to heart's content
 */
let fotoKnop = document.querySelector('.maak-foto');
let cancel = document.querySelector('.cancel');
let fotoPreview = document.querySelector('.foto-preview');
let canvas = document.querySelector('canvas');
let photo = document.querySelector('.foto');

fotoKnop.addEventListener('click', () => {
  capture();
});

cancel.addEventListener('click', () => {
  photo.src = '';
});

let video = renderPreview();

/*---------------------------------------------

 Alles wat hieronder staat mag je vergeten

---------------------------------------------*/

function capture() {
  const context = canvas.getContext('2d');

  canvas.width = video.clientWidth;
  canvas.height = video.clientHeight;
  context.drawImage(video, 0, 0, video.clientWidth, video.clientHeight);

  const data = canvas.toDataURL('image/png');
  photo.setAttribute('src', data);
  photo.classList.add('visible');

  canvas.toBlob((result) => {
    // Todo move upload to success button
    upload(result);
  });
}

function renderPreview() {
  let video = document.createElement('video');
  video.setAttribute('playsinline', '');
  video.setAttribute('autoplay', '');
  video.setAttribute('muted', '');

  let facingMode = "environment";
  let constraints = {
    audio: false,
    video: {
    facingMode: facingMode
    }
  };

  navigator.mediaDevices.getUserMedia(constraints).then(function success(stream) {
    video.srcObject = stream;
  });

  fotoPreview.appendChild(video);

  return video;
}

async function upload(img) {
  let formData = new FormData();
  formData.append('image', img);

  await fetch('https://xenn.at/codeo/images', {
     method: 'POST',
     body: formData
  });
}
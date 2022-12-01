const fileInput = document.getElementById('fileInput');
let dataUrl = null;

const copyToClipboard = () => {
  navigator.clipboard.writeText(dataUrl);
  document.querySelector('#copied').classList.remove('hidden');
};

fileInput.addEventListener('change', (evt) => {
  const file = fileInput.files[0];
  const reader = new FileReader();
  results.querySelector('#results > button').removeEventListener('click', copyToClipboard);

  reader.addEventListener('load', () => {
    // Base64 Data URL
    const resultsText = document.getElementById('data-url');
    dataUrl = reader.result;
    resultsText.innerHTML = dataUrl;
    const results = document.getElementById('results');
    results.querySelector('img').src = dataUrl;
    document.querySelector('#copied').classList.add('hidden');
    results.querySelector('button').addEventListener('click', copyToClipboard);
    results.classList.remove('hidden');
  });

  reader.readAsDataURL(file);
});

fileInput.addEventListener('dragenter', (evt) => {
  evt.target.classList.add('drag-over');
});

fileInput.addEventListener('dragleave', (evt) => {
  evt.target.classList.remove('drag-over');
});

fileInput.addEventListener('drop', (evt) => {
  evt.target.classList.remove('drag-over');
});

const viewer = document.querySelector('dialog');
const image = viewer.querySelector('img');
document.querySelectorAll('.zoom').forEach(link => {
  link.addEventListener('click', event => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || !viewer.showModal) return;
    event.preventDefault();
    document.getElementById('image-title').textContent = link.dataset.title;
    image.src = link.href;
    image.alt = link.querySelector('img').alt;
    viewer.showModal();
  });
});
viewer.querySelector('button').addEventListener('click', () => viewer.close());
viewer.addEventListener('click', event => {
  if (event.target === viewer) viewer.close();
});

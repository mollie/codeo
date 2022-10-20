window.render = function(text) {
  const renderTarget = document.querySelector('.container');

  renderTarget.innerText += text;
}
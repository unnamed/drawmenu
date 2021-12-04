const DialogUI = (function () {
  const dialogElement = document.getElementById('dialog-container');
  const dialogHeading = document.getElementById('dialog__heading');
  const dialogInfo = document.getElementById('dialog__info');

  /**
   * Shows a dialog and sets the given title
   * and description to it
   * @param {string} title The dialog title
   * @param {string} description The dialog description
   */
  function show(title, description) {
    dialogHeading.innerText = title;
    dialogInfo.innerText = description;
    // show the dialog
    dialogElement.classList.remove('hidden');
  }

  /**
   * Closes the dialog
   */
  function close() {
    dialogElement.classList.add('hidden');
  }

  return {
    show,
    close
  };
})();
const openModalButton = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal-close');

openModalButton.addEventListener('click', () => {
    modal.classList.add ('modal-container');
})

closeModalButton.addEventListener('click', () => {
    modal.classList.remove ('modal-container');
})

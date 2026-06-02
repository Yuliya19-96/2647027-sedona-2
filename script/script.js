const openModalButton = document.querySelector('.open-modal');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.modal-close');
openModalButton.addEventListener('click', () => {
    modal.classList.remove('modal-closed');
})
closeModalButton.addEventListener('click', () => {
    modal.classList.add('modal-closed');
})

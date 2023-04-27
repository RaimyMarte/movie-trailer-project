export const previewImg = (form, modal) => {
    const previewImg = form.querySelector('.previewImg')
    const imgInput = form.querySelector('.imgInput')

    imgInput.addEventListener('input', () => previewImg.setAttribute('src', imgInput.value))
    form.addEventListener('submit', () => previewImg.setAttribute('src', ''))
    modal.addEventListener('hide.bs.modal', () => previewImg.setAttribute('src', ''))
}
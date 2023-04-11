export const previewImg = (form) => {
    const previewImg = form.querySelector('.previewImg')
    const imgInput = form.querySelector('.imgInput')
    imgInput.addEventListener('change', () => previewImg.setAttribute('src', imgInput.value))
}
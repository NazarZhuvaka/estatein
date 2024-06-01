function banner () {
    const closeBtn = document.querySelector('.banner__close')
    closeBtn.addEventListener('click' , () => document.querySelector('.banner').classList.add('none'))
}

export default banner;

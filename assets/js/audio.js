const sound = document.querySelector('#sound');
const soundImg = document.querySelector('#sound img');
const soundImgSrc = soundImg.src;
const audio = document.querySelector('#audio');


const checkAudio = () => {
    if(audio.paused){
        sound.style.backgroundColor = '#C7B8A1';
        soundImg.src = soundImgSrc.replace('on', 'off');
    }else{
        sound.style.backgroundColor = '#9B8765';
        soundImg.src = soundImgSrc.replace('off', 'on');
    }
}

const clickAudioHandler = () => {
    if(audio.paused){
        audio.play();
    }else{
        audio.pause()
    }
    checkAudio();
}

sound.addEventListener('click', clickAudioHandler);

setTimeout(checkAudio, 500);

window.onload = () => {
    setTimeout(checkAudio, 500);
};
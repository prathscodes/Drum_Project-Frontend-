
const wkey=document.querySelector('.w');
const akey=document.querySelector('.a');
const skey=document.querySelector('.s');
const dkey=document.querySelector('.d');
const jkey=document.querySelector('.j');
const kkey=document.querySelector('.k');
const lkey=document.querySelector('.l');

function playSound(key){
    let sound;
    if(key==='w'){
        sound=document.querySelector('#sound-w');
    }
    else if(key==='a'){
        sound=document.querySelector('#sound-a');
    }
    else if(key==='s'){
        sound=document.querySelector('#sound-s');
    }
    else if(key==='d'){
        sound=document.querySelector('#sound-d');
    }
    else if(key==='j'){
        sound=document.querySelector('#sound-j');
    }
    else if(key==='k'){
        sound=document.querySelector('#sound-k');
    }
    else if(key==='l'){
        sound=document.querySelector('#sound-l');
    }
    
    if(sound){
        sound.currentTime = 0;
        sound.play();
    }
}
document.body.addEventListener('keypress',(event)=>{
    playSound(event.key);
})

wkey.addEventListener('click', ()=>{
    document.querySelector('#sound-w').play();
});

akey.addEventListener('click', ()=>{
    document.querySelector('#sound-a').play();
});

skey.addEventListener('click', ()=>{
    document.querySelector('#sound-s').play();
});

dkey.addEventListener('click', ()=>{
    document.querySelector('#sound-d').play();
});

jkey.addEventListener('click', ()=>{
    document.querySelector('#sound-j').play();
});

kkey.addEventListener('click', ()=>{
    document.querySelector('#sound-k').play();
});

lkey.addEventListener('click', ()=>{
    document.querySelector('#sound-l').play();
});

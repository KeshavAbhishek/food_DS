var expand = 0;

function menuClicked(){
    if(expand==0){

        document.getElementById('unorderedList').classList.remove('navcssRemove');
        document.getElementById('unorderedList').classList.add('navcss');
        expand+=1;

        document.getElementById('bar-1').style.transform='rotate(45deg)';document.getElementById('bar-1').style.left='7%';document.getElementById('bar-4').style.transform='rotate(-45deg)';document.getElementById('bar-4').style.left='40%';document.getElementById('bar-2').style.width='0%';document.getElementById('bar-5').style.width='0%';document.getElementById('bar-3').style.transform='rotate(-45deg)';document.getElementById('bar-3').style.left='7%';document.getElementById('bar-6').style.transform='rotate(45deg)';document.getElementById('bar-6').style.left='40%';
    
        document.getElementById('bar-1').style.transition='all 0.5s ease';document.getElementById('bar-2').style.transition='all 0.5s ease';document.getElementById('bar-3').style.transition='all 0.5s ease';document.getElementById('bar-4').style.transition='all 0.5s ease';document.getElementById('bar-5').style.transition='all 0.5s ease';document.getElementById('bar-6').style.transition='all 0.5s ease';
    }
    else{
        document.getElementById('unorderedList').classList.add('navcssRemove');
        document.getElementById('unorderedList').classList.remove('navcss');
        expand-=1;

        document.getElementById('bar-1').style.transform='rotate(0deg)';document.getElementById('bar-1').style.left='25%';document.getElementById('bar-4').style.transform='rotate(0deg)';document.getElementById('bar-4').style.left='25%';document.getElementById('bar-2').style.width='50%';document.getElementById('bar-5').style.width='50%';document.getElementById('bar-3').style.transform='rotate(0deg)';document.getElementById('bar-3').style.left='25%';document.getElementById('bar-6').style.transform='rotate(0deg)';document.getElementById('bar-6').style.left='25%';
    
        document.getElementById('bar-1').style.transition='all 0.5s ease';document.getElementById('bar-2').style.transition='all 0.5s ease';document.getElementById('bar-3').style.transition='all 0.5s ease';document.getElementById('bar-4').style.transition='all 0.5s ease';document.getElementById('bar-5').style.transition='all 0.5s ease';document.getElementById('bar-6').style.transition='all 0.5s ease';
    };
};

window.addEventListener('resize',()=>{
    if(window.innerWidth>700){
        document.getElementById('unorderedList').classList.remove('navcssRemove');
        document.getElementById('unorderedList').classList.remove('navcss');
    }
});

document.getElementsByClassName('links')[0].addEventListener('click',()=>{menuClicked()})
document.getElementsByClassName('links')[1].addEventListener('click',()=>{menuClicked()})
document.getElementsByClassName('links')[2].addEventListener('click',()=>{menuClicked()})
document.getElementsByClassName('links')[3].addEventListener('click',()=>{menuClicked()})

// 130.531 on expand
// 53.7812 on collapse
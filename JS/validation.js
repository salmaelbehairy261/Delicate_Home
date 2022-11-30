var form=document.getElementById('form');
var Name=document.getElementById('name');
var email=document.getElementById('email');
var phone=document.getElementById('phone');
var password=document.getElementById('password');
var nameValid=document.getElementById('nameValid');
var emailValid=document.getElementById('emailValid');
var phoneValid=document.getElementById('phoneValid');
var passLen=document.getElementById('passLen');
var passValid=document.getElementById('passValid');
var first=document.getElementById('first');
var valid=document.getElementById('valid');
var flag;
function validate(e){
    flag=0;
    e.preventDefault();
    if(!Name.value ||!/^[a-zA-Z]*$/.test(Name.value) || Name.value.length<3){
        nameValid.style.display='block';
        Name.addEventListener('keyup',validate);
        Name.classList.add('error');
        flag++;
    }else{
        Name.classList.remove('error');
        nameValid.style.display='none';
    }
    if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)){
        emailValid.style.display='block';
        email.addEventListener('keyup',validate);
        email.classList.add('error');
        flag++;
    }else{
        email.classList.remove('error');
        emailValid.style.display='none';
    }
    if(isNaN(phone.value) || String(phone.value).length!=11 || (!/^010/.test(String(phone.value)) && !/^012/.test(String(phone.value)) && !/^011/.test(String(phone.value)))){
        phoneValid.style.display='block';
        phone.addEventListener('keyup',validate);
        phone.classList.add('error');
        flag++;
    }else{
        phone.classList.remove('error');
        phoneValid.style.display='none';
    }
    if(password.value.length<8){
        passLen.style.display='block';
        password.classList.add('error');
        password.addEventListener('keyup',validate);
        flag++;
    }else{
        password.classList.remove('error');
        passLen.style.display='none';
    }
    if(!/[a-zA-Z]/.test(password.value)||!/\d/.test(password.value)){
        passValid.style.display='block';
        password.classList.add('error');
        password.addEventListener('keyup',validate);
        flag++;
    }else{
        password.classList.remove('error');
        passValid.style.display='none';
}
}
form.addEventListener('submit',function(e){
    validate(e);
    if(flag==0){
        first.style.display='none';
        valid.style.display='block';
        form.reset();
    }
})
document.getElementById('count').innerHTML=sessionStorage.getItem('count')||0;
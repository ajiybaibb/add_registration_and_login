var adlar=new Array("ali","mehmet","hüseyin","ahmet kaya");
var şifreler=new Array("12","123","1234","13456");
function kayıt(){

    adlar.push(kod.value);
    şifreler.push(sifreler.value);
document.getElementById("sonuç").innerHTML="kaydınız başarılı oluştu";
}
function giriş(){
if(adlar.indexOf(kod.value)<0){
    document.getElementById("sonuç").innerHTML="kullanıcı adı yanlış";
}
else{
    if(şifreler.indexOf(sifreler.value)>0){
        document.getElementById("sonuç").innerHTML="giriş başarılı";
    }
    else{
        document.getElementById("sonuç").innerHTML="şifre yanlış";
    }  
}

}


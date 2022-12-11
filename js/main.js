function passdata()
{
var namepass=document.getElementById('name').value;
var emailpass=document.getElementById('email').value;
var phonepass=document.getElementById('phone').value;


localStorage.setItem("sendname", namepass);
localStorage.setItem("sendemail", emailpass);
localStorage.setItem("sendphone", phonepass);
}



//card validation
function card()
{
    const string = document.getElementById('cardnum').value;
    if(string.slice(0, 1)==4)
    {
    document.getElementById('visa').style.display='block';
    document.getElementById('cardvisa').style.display='block';
    document.getElementById('mastar').style.display='none';
    document.getElementById('cardmatar').style.display='none';
    document.getElementById('express').style.display='none';
    document.getElementById('cardexpress').style.display='none';
    document.getElementById('discover').style.display='none';
    document.getElementById('carddiscover').style.display='none';
    document.getElementById('invalid').style.display='none';
    }
    else if(string.slice(0, 1)==5)
    {
    document.getElementById('mastar').style.display='block';
    document.getElementById('cardmatar').style.display='block';
    document.getElementById('visa').style.display='none';
    document.getElementById('cardvisa').style.display='none';
    document.getElementById('express').style.display='none';
    document.getElementById('cardexpress').style.display='none';
    document.getElementById('discover').style.display='none';
    document.getElementById('carddiscover').style.display='none';
    document.getElementById('invalid').style.display='none';
    }
    else if(string.slice(0, 2)==37||string.slice(0, 2)==34)
    {
    document.getElementById('express').style.display='block';
    document.getElementById('cardexpress').style.display='block';
    document.getElementById('mastar').style.display='none';
    document.getElementById('cardmatar').style.display='none';
    document.getElementById('visa').style.display='none';
    document.getElementById('cardvisa').style.display='none';
    document.getElementById('discover').style.display='none';
    document.getElementById('carddiscover').style.display='none';
    document.getElementById('invalid').style.display='none';
    }
    else if(string.slice(0, 1)==6)
    {    
    document.getElementById('discover').style.display='block';
    document.getElementById('carddiscover').style.display='block';
    document.getElementById('mastar').style.display='none';
    document.getElementById('cardmatar').style.display='none';
    document.getElementById('express').style.display='none';
    document.getElementById('cardexpress').style.display='none';
    document.getElementById('visa').style.display='none';
    document.getElementById('cardvisa').style.display='none';
    document.getElementById('invalid').style.display='none';

    }
    else
    {
    document.getElementById('invalid').style.display='block';
    document.getElementById('discover').style.display='none';
    document.getElementById('carddiscover').style.display='none';
    document.getElementById('mastar').style.display='none';
    document.getElementById('cardmatar').style.display='none';
    document.getElementById('express').style.display='none';
    document.getElementById('cardexpress').style.display='none';
    document.getElementById('visa').style.display='none';
    document.getElementById('cardvisa').style.display='none';
    }
    
}

//get total from seat page to form
var gettotal = localStorage.getItem('totalget');
var gettic = localStorage.getItem('getprice');
var getmenu = localStorage.getItem('menuget');

document.getElementById('total').innerText= 'TOTAL :  '+ gettotal + ' EGP';
document.getElementById('ticpric').innerText= 'Ticket : ' + gettic;
document.getElementById('menpric').innerText= 'Menu : ' + getmenu;


//show pop up message
function create()
{
            
            
                document.querySelector(".popup").style.display = "block";
            
                var txtname = document.getElementById("name");
                var txtphone = document.getElementById("phone");
                var txtemail = document.getElementById("email");

                var butt = document.getElementById("butt");

                var qr = document.getElementById("qr");

    

                    qr.innerHTML = "";
                    const href ='"'+ txtname.value + txtemail.value+ txtphone.value +'"';
                    // size of the image
                    const size = 360;

                    new QRCode(qr , {
                        text: href,
                        width: size,
                        height: size,

                        colorDark: "#040404",
                        colorLight: "#e9eef4"
                    })
                

    var username = document.getElementById('name').value;
    var useremail = document.getElementById('email').value;
    var userphone = document.getElementById('phone').value;

    var data =username+useremail+userphone;
    

    var string_data = JSON.stringify(data);

    var file = new Blob([string_data],{type:"text"});
    var anchor = document.createElement('a');
    anchor.href=URL.createObjectURL(file);
    anchor.download="save.text";
    anchor.click();

            
}
 

//pass picture to localstorage
document.getElementById('uploadpic').addEventListener('change', (e)=>{
    const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result.replace('data:', '').replace(/^.+,/, '');
        localStorage.setItem('wallpaper', base64String);
        const setpic = `url(data:image/png;base64,${base64String})`;
        localStorage.setItem('passpicc',setpic)
      };
      reader.readAsDataURL(file);
  })
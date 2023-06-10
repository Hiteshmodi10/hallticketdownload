window.onload = function() {
    var url = window.location.href,
    params = url.split('?')[1].split('&'),
    data = [],
    tmp;
    for (var i = 0; i < params.length; i++) {
            tmp = params[i].split('=');
            data[tmp[0]] = tmp[1];
    }
   let personFullName = `${data.personName.split('%20')[0]} ${data.personName.split('%20')[1]} ${data.personName.split('%20')[2]}`
    console.log(personFullName);
    document.querySelector(".student-enrollment-no").innerHTML= data.enrollementNo;
    document.querySelector("#seatNo").innerHTML= data.seatNo;
    document.querySelector(".student-name").innerHTML=  personFullName.toUpperCase();
    document.querySelector(".student-old-enrollment-no").innerHTML = data.oldEnrollementNo;
}
function PrintHallticket(){
    window.print();
} 

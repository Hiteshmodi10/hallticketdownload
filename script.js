function submitInput(event){
    event.preventDefault();
    let form = document.querySelector(".form");
    let formData = new FormData(form);
    var seatNo = formData.get("seatNo"),
     enrollementNo = formData.get("enrollement"), 
     personName = formData.get("personName"),
     oldEnrollementNo = formData.get("oldEnrollement")

    url = `https://hiteshmodi10.github.io/hallticketdownload/result.html?seatNo=${encodeURIComponent(seatNo)}&enrollementNo=${encodeURIComponent(enrollementNo)}&personName=${encodeURIComponent(personName)}&oldEnrollementNo=${oldEnrollementNo}`;
    
        document.location.href = url;

}


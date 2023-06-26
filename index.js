let headers = document.querySelectorAll(".top-of-box").length;

for(let i = 0; i < headers; i++) {

    document.querySelectorAll(".top-of-box")[i].addEventListener("click", function(){

        // console.log("I was clicked!");

        let header = document.querySelectorAll(".top-of-box")[i];
        let bodyOfBox = document.querySelectorAll(".body-of-box")[i];

        let currentlyActive = document.querySelector(".top-of-box.active");
        // let indexOf = headers.indexOf(currentlyActive);
        // console.log(indexOf);

        let currentlyActive2;
        let bodyOfBox2;

        for(let j = 0; j < headers; j++) {

            currentlyActive2 = document.querySelectorAll(".top-of-box")[j];
            if(currentlyActive2.classList.contains("active") && currentlyActive2 !== header) {
                currentlyActive2.classList.remove("active");
                bodyOfBox2 = document.querySelectorAll(".body-of-box")[j];
                bodyOfBox2.style.maxHeight = 0;
            }

        }

        // if(currentlyActive && currentlyActive !== header){
        //     // console.log("Yess");
        //     currentlyActive.classList.remove("active");
        //     currentlyActive.nextElementSibling.style.maxHeight = 0;
        // }

        header.classList.toggle("active");
        console.log(header);
        console.log(currentlyActive);
        // header.style.maxHeight = "20px";

        if(header.classList.contains("active")){
        bodyOfBox.style.maxHeight = bodyOfBox.scrollHeight + "px";
    } else {
        bodyOfBox.style.maxHeight = 0;
    }
    })

}
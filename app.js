const universitiesInfo = await fetch("https://ctthinzar.github.io/universities_in_busan/data.json");
const universities = await universitiesInfo.json()

//render universities cards
const template = document.querySelector("#university-card");

universities.forEach(university => {

    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = university.name;

    const img = clone.querySelector("img")
    img.src = university.photo;
    img.alt = `${university.id} image`;


    clone.querySelector(".type").textContent = university.type;
    clone.querySelector(".description").textContent = university.description;
    clone.querySelector(".btn").href = `https://ctthinzar.github.io/universities_in_busan/universities/${university.id}`;

    document.querySelector(".universities").appendChild(clone)
})



//search university
const search = document.getElementById("search-input");
search.addEventListener('keyup', searchUni)

function searchUni(e){
     const inputValue = e.target.value.toLowerCase();
     const uniCards = document.querySelectorAll(".university-card");
     const noResult = document.querySelector(".no-result");
     let visibleCount = 0;

     uniCards.forEach(uniCard => {
        const uniName = uniCard.querySelector("h3").textContent.toLowerCase();
        if(uniName.includes(inputValue)){
            uniCard.style.display = "";
            visibleCount++
        }else {
            uniCard.style.display = "none";
        }
     })
    if(visibleCount==0){
        noResult.style.display = "";
     }else {
        noResult.style.display = "none";
    }
}


//Add filter
const filter = document.getElementById("filter")
filter.addEventListener("change", function () {
    const filterValue = this.value;
    console.log("Selected category:", filterValue);

    filterItems(filterValue);
  });

  function filterItems(type) {
    const allUni = document.querySelectorAll(".university-card");
    const noResult = document.querySelector(".no-result");
    let visibleCount = 0;

    if(type == "all") {
        allUni.forEach(e => {
            e.style.display = "";
            visibleCount++
        })
    }else {
        allUni.forEach(e => {
            if(e.querySelector(".type").textContent.toLowerCase() == type){
                e.style.display = "";
                visibleCount++
            }else{
                e.style.display = "none"
            }
        })
    }

    if(visibleCount==0){
        noResult.style.display = "";
     }else {
        noResult.style.display = "none";
    }
  }


// Add year automatically in the disclaimer
const currentYear = new Date().getFullYear();
const autoYear = document.getElementById("autoyear");
autoYear.textContent = currentYear;

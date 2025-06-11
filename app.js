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
const search = document.getElementById("search-btn");
search.addEventListener('click', searchUni)




function searchUni(){
     const inputValue = document.getElementById("search-input").value.toLowerCase();
     const uniCards = document.querySelectorAll(".university-card");
     console.log(inputValue);

     uniCards.forEach(uniCard => {
        const uniName = uniCard.querySelector("h3").textContent.toLowerCase();
        if(uniName.includes(inputValue)){
            uniCard.style.display = "";
        }else {
            uniCard.style.display = "none";
        }
        
     })
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

    if(type == "all") {
        allUni.forEach(e => {
            e.style.display = "";
        })
    }else {
        allUni.forEach(e => {
            if(e.querySelector(".type").textContent.toLowerCase() == type){
                e.style.display = "";
            }else{
                e.style.display = "none"
            }
        })
    }
  }


// Add year automatically in the disclaimer
const currentYear = new Date().getFullYear();
const autoYear = document.getElementById("autoyear");
autoYear.textContent = currentYear;

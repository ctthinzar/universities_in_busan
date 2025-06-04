const universitiesInfo = await fetch("https://ctthinzar.github.io/universities_in_busan/data.json");
const universities = await universitiesInfo.json()

// const universities = [
//     {
//         "id": "pnu",
//         "name": "Pusan National University",
//         "type": "National",
//         "photo": "assets/pnulogo.png",
//         "location": "Geumjeong-gu",
//         "description": "One of Korea’s top research universities with strong engineering programs.",
//         "krRanking": "",
//         "wldRanking": ""
//     },
//     {
//         "id": "pknu",
//         "name": "Pukyong National University",
//         "type": "National",
//         "photo": "assets/pknulogo.jpg",
//         "location": "Nam-gu",
//         "description": "A prominent national university in known for its specialization in fisheries sciences, marine studies, and engineering.",
//         "krRanking": "",
//         "wldRanking": ""
//     },
//     {
//         "id": "donga",
//         "name": "Dong-A University",
//         "type": "Private",
//         "photo": "assets/dong_a_logo.jpg",
//         "location": "Seo-gu",
//         "description": "A leading private university known for law, medicine, and arts.",
//         "krRanking": "",
//         "wldRanking": ""
//     },
//     {
//         "id": "kmou",
//         "name": "National Korea Maritime & Ocean University",
//         "type": "National",
//         "photo": "assets/kmoulogo.png",
//         "location": "Yeongdo-gu",
//         "description": "Specialized university for maritime studies and marine engineering.",
//         "krRanking": "",
//         "wldRanking": ""
//     },
//     {
//         "id": "dongseo",
//         "name": "Dongseo University",
//         "type": "Private",
//         "photo": "assets/dsulogo.jpg",
//         "location": "Sasang-gu",
//         "description": "A private institution renowned for its strengths in digital content, film, design, and IT.",
//         "krRanking": "",
//         "wldRanking": ""
//     }
// ]

//render universities cards
const template = document.querySelector("#university-card");
const wrapper = document.createElement("div");


universities.forEach(university => {

    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = university.name;

    const img = clone.querySelector("img")
    img.src = university.photo;
    img.alt = `${university.id} image`;


    clone.querySelector(".type").textContent = university.type;
    clone.querySelector(".description").textContent = university.description;
    clone.querySelector(".btn").href = ``;

    wrapper.appendChild(clone);
})

document.querySelector(".universities").appendChild(wrapper)



// const uniNames = document.querySelector(".universities").querySelector("div").querySelectorAll("h3");
// const letters = uniNames[0].textContent.toLowerCase();
// console.log(uniNames)


//search university
const search = document.getElementById("search-btn");
search.addEventListener('click', searchUni)




function searchUni(){
     const inputValue = document.getElementById("search-input").value.toLowerCase();
     const uniCards = document.querySelector(".universities").querySelector("div").querySelectorAll(".university-card");
    //  const uniCards = document.querySelector(".universities").querySelector("div").querySelectorAll(".university-card")

     uniCards.forEach((uniCard)=> {
         const letters = uniCard.firstChild.firstChild.textContent.toLowerCase();
         if(letters.includes(inputValue)){
            console.log(uniCard)
         }
     })
}

//Add filter
const filter = document.getElementById("filter")
filter.addEventListener("change", function () {
    const filterValue = this.value;
    console.log("Selected category:", filterValue);

    // Example: Filter items based on value
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
            if(e.querySelector(".type").textContent == type){
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
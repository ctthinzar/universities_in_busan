const universitiesInfo = await fetch("https://ctthinzar.github.io/universities_in_busan/data.json");
const universities = await universitiesInfo.json()
console.log(universities)



universities.forEach(university => {
    const id = document.querySelector('meta[name="page-id"]').content;
    const img = document.querySelector('.university-title').querySelector('img')
    const name = document.getElementById("name");
    const description = document.getElementById("description");
    const kRanking = document.getElementById("kr-ranking")
    const wldRanking = document.getElementById("world-ranking")
    const location = document.getElementById("location")
    
    if(university.id == id){
        name.textContent = university.name;
        description.textContent = university.description;
        location.textContent = university.location;
        kRanking.textContent = university.krRanking;
        wldRanking.textContent = university.wldRanking;
        img.src = `../../${university.photo}`


        const map = L.map('map').setView([university.lat, university.lng], 15);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution:
            '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
        }).addTo(map);

        L.marker([university.lat, university.lng]).addTo(map)
            .bindPopup(university.name)
            .openPopup();
    }
});
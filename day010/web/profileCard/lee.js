const lee = {
    fullName: "BruceLee",
    born: "November 27, 1940",
    died: "July 20, 1973",
    spouse: "Linda Lee Cadwell",
    children: ["Brandon", "Shannon"],
    height: 172,
    image: "lee.jpg",
    martialArts: ["Boxing", "Jeet Kune Do",
        "Chinese martial arts", "Wing Chun",
        "Taekwondo", "Wrestling"],
    tombAddress: {
        street: "1554 15th Ave E",
        city: "Seattle",
        state: "Washington",
        country: "USA",
        zip: "WA 98112"
    },
    quote: "I fear not the man who"
        + " has practiced 10,000 kicks once,"
        + " but I fear the man who had"
        + " practiced one kick 10,000 times."
};

const html = `<div class="card">
<img src="${lee.image}" class="card-image" />
<div class="card-content">
<h3>${lee.fullName}</h3>
<p><b>Born: </b> ${lee.born}</p>
<p><b>Died: </b> ${lee.died}</p>
<p><b>Spouse: </b> ${lee.spouse}</p>
<p><b>Children: </b> ${lee.children}</p>
<p><b>Height: </b> ${lee.height} cm</p>
<p>${lee.quote}</p>
</div></div>`;
personCard.innerHTML = html;
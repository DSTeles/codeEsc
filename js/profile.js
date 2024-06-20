const cards = document.querySelectorAll(".card-custom");

cards.forEach(card_custom => {
  const cardBody = card_custom.querySelector(".card-body");
  const cardInfo = card_custom.querySelector(".card-info");

  cardBody.addEventListener("click", () => {
    //Close All Cards
    cards.forEach(otherCard => {
      const otherInfo = otherCard.querySelector(".card-info");
      if (otherInfo !== cardInfo) {
        otherInfo.classList.remove("active");
        otherInfo.style.display = "none";
      }
    });

    // Open or close the clicked card
    if (cardInfo.classList.contains("active")) {
      cardInfo.classList.remove("active");
      cardInfo.style.display = "none";
    } else {
      cardInfo.classList.add("active");
      cardInfo.style.display = "block";
    }
  });
});

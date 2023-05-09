let range = document.querySelector(".my-range");
let output = document.getElementsByClassName("demo");
let screenWidth = window.innerWidth;
output.innerHTML = range.value;

range.addEventListener("input", refreshPrices);

function refreshPrices() {
  output.innerHTML = range.value;
  // Free card
  if (screenWidth < 991) {
    if (range.value >= 0 && range.value <= 33) {
      $(".standard-card, .premium-card").hide();
      $(".free-card").show();
      $(".price-card").removeClass("active-price-card");
      $(".free-card").addClass("active-price-card");
    }

    // Standard card
    else if (range.value > 33 && range.value < 65) {
      $(".free-card, .premium-card").hide();
      $(".standard-card").show();
      $(".price-card").removeClass("active-price-card");
      $(".standard-card").addClass("active-price-card");
    }

    // Premium card
    else {
      $(".free-card, .standard-card").hide();
      $(".premium-card").show();
      $(".price-card").removeClass("active-price-card");
      $(".premium-card").addClass("active-price-card");
    }
  } else {
    if (range.value >= 0 && range.value <= 33) {
      $(".price-card").removeClass("active-price-card");
      $(".free-card").addClass("active-price-card");
    }

    // Standard card
    else if (range.value > 33 && range.value < 65) {
      $(".price-card").removeClass("active-price-card");
      $(".standard-card").addClass("active-price-card");
    }

    // Premium card
    else {
      $(".price-card").removeClass("active-price-card");
      $(".premium-card").addClass("active-price-card");
    }
  }
}

window.addEventListener("resize", function () {
  screenWidth = window.innerWidth;
  refreshPrices();
});

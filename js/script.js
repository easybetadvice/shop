function moveDiv() {
    const standardMoveable = document.getElementById('standardMoveable');
    const valueMoveable = document.getElementById('valueMoveable');
    const arbitrageMoveable = document.getElementById('arbitrageMoveable');
    const fullMoveable = document.getElementById('fullMoveable');
    const cardsMainParent1 = document.getElementById('cardsMainParent1');
    const cardsMainParent2 = document.getElementById('cardsMainParent2');
    const cardsMainParent3 = document.getElementById('cardsMainParent3');
    const cardsMainParent4 = document.getElementById('cardsMainParent4');
    const standardCardParent2 = document.getElementById('standardCardParent2');
    const valueCardParent2 = document.getElementById('valueCardParent2');
    const arbitrageCardParent2 = document.getElementById('arbitrageCardParent2');
    const fullCardParent2 = document.getElementById('fullCardParent2');
    
    if (window.innerWidth <= 799) {
        if (standardMoveable && cardsMainParent1.contains(standardMoveable)) {
            standardCardParent2.appendChild(standardMoveable);
            valueCardParent2.appendChild(valueMoveable);
            arbitrageCardParent2.appendChild(arbitrageMoveable);
            fullCardParent2.appendChild(fullMoveable);
        }
    } 
    else {
        if (standardMoveable && standardCardParent2.contains(standardMoveable)) {
            cardsMainParent1.appendChild(standardMoveable);
            cardsMainParent2.appendChild(valueMoveable);
            cardsMainParent3.appendChild(arbitrageMoveable);
            cardsMainParent4.appendChild(fullMoveable);
        }
    }
}
window.addEventListener('load', moveDiv);
window.addEventListener('resize', moveDiv);

//SCRIPT FOR STANDARD VIP CARD//
function standardOneMonth(){
    const link  = document.getElementById('standardPurchBtn');
    const priceBanner  = document.getElementById('standardPriceBanner');
    const priceText = document.getElementById('standardPriceText');
    
    priceBanner.textContent = '€9 for 1 Month';
    priceText.textContent = '€9'
    link.textContent = "Join Standard VIP for €9";
    link.href = "https://buy.stripe.com/6oEg2gceO0LCf6M9AA";

    standardOneMonthBtn.classList.add('toggled','toggled-standard');
    standardThreeMonthsBtn.classList.remove('toggled','toggled-standard');
    standardLifetimeBtn.classList.remove('toggled','toggled-standard');
}
function standardThreeMonths(){
    const link  = document.getElementById('standardPurchBtn');
    const priceBanner  = document.getElementById('standardPriceBanner');
    const priceText = document.getElementById('standardPriceText');

    priceBanner.textContent = '€26 for 3 Months';
    priceText.textContent = '€26'
    link.textContent = "Join Standard VIP for €26";
    link.href = "https://buy.stripe.com/aEU8zO7Yybqg6AgeVh";

    standardThreeMonthsBtn.classList.add('toggled','toggled-standard');
    standardOneMonthBtn.classList.remove('toggled','toggled-standard');
    standardLifetimeBtn.classList.remove('toggled','toggled-standard');
}

function standardLifetime(){
    const link  = document.getElementById('standardPurchBtn');
    const priceBanner  = document.getElementById('standardPriceBanner');
    const priceText = document.getElementById('standardPriceText');

    priceBanner.textContent = '€99 for Lifetime';
    priceText.textContent = '€99'
    link.textContent = "Join Standard VIP for €99";
    link.href = "https://buy.stripe.com/5kAeYcgv465W0bS9AM";

    standardThreeMonthsBtn.classList.remove('toggled','toggled-standard');
    standardOneMonthBtn.classList.remove('toggled','toggled-standard');
    standardLifetimeBtn.classList.add('toggled','toggled-standard');
}
//END SCRIPT FOR STANDARD VIP CARD//

//SCRIPT FOR VALUE VIP CARD//
function valueOneMonth(){
    const link  = document.getElementById('valuePurchBtn');
    const priceBanner  = document.getElementById('valuePriceBanner');
    const priceText = document.getElementById('valuePriceText');
    
    priceBanner.textContent = '€24 for 1 Month';
    priceText.textContent = '€24'
    link.textContent = "Join Value VIP for €24";
    link.href = "https://buy.stripe.com/00g3fu92C3XOf6M6oD";

    valueOneMonthBtn.classList.add('toggled','toggled-value');
    valueThreeMonthsBtn.classList.remove('toggled','toggled-value');
    valueLifetimeBtn.classList.remove('toggled','toggled-value');
}
function valueThreeMonths(){
    const link  = document.getElementById('valuePurchBtn');
    const priceBanner  = document.getElementById('valuePriceBanner');
    const priceText = document.getElementById('valuePriceText');

    priceBanner.textContent = '€60 for 3 Months';
    priceText.textContent = '€60'
    link.textContent = "Join Value VIP for €60";
    link.href = "https://buy.stripe.com/6oE6rGgv49i87Ek00m";

    valueThreeMonthsBtn.classList.add('toggled','toggled-value');
    valueOneMonthBtn.classList.remove('toggled','toggled-value');
    valueLifetimeBtn.classList.remove('toggled','toggled-value');
}

function valueLifetime(){
    const link  = document.getElementById('valuePurchBtn');
    const priceBanner  = document.getElementById('valuePriceBanner');
    const priceText = document.getElementById('valuePriceText');

    priceBanner.textContent = '€269 for Lifetime';
    priceText.textContent = '€269'
    link.textContent = "Join Value VIP for €269";
    link.href = "https://buy.stripe.com/8wM4jy4Mm51S7Ek00p";

    valueThreeMonthsBtn.classList.remove('toggled','toggled-value');
    valueOneMonthBtn.classList.remove('toggled','toggled-value');
    valueLifetimeBtn.classList.add('toggled','toggled-value');
}
//END OF SCRIPT FOR VALUE VIP CARD//

//SCRIPT FOR ARBITRAGE VIP CARD//
function arbitrageOneMonth(){
    const link  = document.getElementById('arbitragePurchBtn');
    const priceBanner  = document.getElementById('arbitragePriceBanner');
    const priceText = document.getElementById('arbitragePriceText');
    
    priceBanner.textContent = '€19 for 1 Month';
    priceText.textContent = '€19'
    link.textContent = "Join Arbitrage VIP for €19";
    link.href = "https://buy.stripe.com/9AQ9DSgv41PGcYE4gu";

    arbitrageOneMonthBtn.classList.add('toggled','toggled-arbitrage');
    arbitrageThreeMonthsBtn.classList.remove('toggled','toggled-arbitrage');
    arbitrageLifetimeBtn.classList.remove('toggled','toggled-arbitrage');
}
function arbitrageThreeMonths(){
    const link  = document.getElementById('arbitragePurchBtn');
    const priceBanner  = document.getElementById('arbitragePriceBanner');
    const priceText = document.getElementById('arbitragePriceText');

    priceBanner.textContent = '€49 for 3 Months';
    priceText.textContent = '€49'
    link.textContent = "Join Arbitrage VIP for €49";
    link.href = "https://buy.stripe.com/00g2bqemWgKA2k028w";

    arbitrageThreeMonthsBtn.classList.add('toggled','toggled-arbitrage');
    arbitrageOneMonthBtn.classList.remove('toggled','toggled-arbitrage');
    arbitrageLifetimeBtn.classList.remove('toggled','toggled-arbitrage');
}
function arbitrageLifetime(){
    const link  = document.getElementById('arbitragePurchBtn');
    const priceBanner  = document.getElementById('arbitragePriceBanner');
    const priceText = document.getElementById('arbitragePriceText');

    priceBanner.textContent = '€269 for Lifetime';
    priceText.textContent = '€269'
    link.textContent = "Join Arbitrage VIP for €269";
    link.href = "https://buy.stripe.com/8wM4jy4Mm51S7Ek00p";

    arbitrageThreeMonthsBtn.classList.remove('toggled','toggled-arbitrage');
    arbitrageOneMonthBtn.classList.remove('toggled','toggled-arbitrage');
    arbitrageLifetimeBtn.classList.add('toggled','toggled-arbitrage');
}
//END SCRIPT FOR ARBITRAGE VIP CARD//

//SCRIPT FOR FULL VIP CARD//
function fullOneMonth(){
    const link  = document.getElementById('fullPurchBtn');
    const priceBanner  = document.getElementById('fullPriceBanner');
    const priceText = document.getElementById('fullPriceText');
    
    priceBanner.textContent = '€49 for 1 Month';
    priceText.textContent = '€49'
    link.textContent = "Join Full VIP for €49";
    link.href = "https://buy.stripe.com/dR603iceO3XOgaQ3cs";

    fullOneMonthBtn.classList.add('toggled','toggled-full');
    fullLifetimeBtn.classList.remove('toggled','toggled-full'); 
}
function fullLifetime(){
    const link  = document.getElementById('fullPurchBtn');
    const priceBanner  = document.getElementById('fullPriceBanner');
    const priceText = document.getElementById('fullPriceText');

    priceBanner.textContent = '€499 for Lifetime';
    priceText.textContent = '€499'
    link.textContent = "Join Full VIP for €499";
    link.href = "https://buy.stripe.com/cN217m2Eeamc0bS8wR";

    fullOneMonthBtn.classList.remove('toggled','toggled-full');
    fullLifetimeBtn.classList.add('toggled','toggled-full');
}
//END SCRIPT FOR FULL VIP CARD//

    window.addEventListener('scroll', function() {
    var heroBanner = document.getElementById('heroBanner');
    var scrollPosition = window.scrollY; 
    heroBanner.style.transform = ' translateY(' + scrollPosition * 0.5 + 'px)';
    });

    $('.owl-carousel').owlCarousel({
        items:4,
        loop:false,
        margin:30,
        center:true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            800:{
                items:2.2
            },
            1000:{
                items:2.5
            }
        }
    })
    
    $(".owl-item").each(function(index) {
        var uniqueId = "cardsMainParent" + (index + 1); 
        $(this).attr("id", uniqueId);
    });

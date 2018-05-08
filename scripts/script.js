// Create app namespace to hold all methods
var worldEatsApp = {};
worldEatsApp.key = "d94c1ca1c7f5d2ae03e3d677efb36552";
worldEatsApp.cuisines = [
  {
    continent: "Africa",
    name: "African",
    id: 152
  },
  {
    continent: "North America",
    name: "American",
    id: 1
  },
  {
    continent: "Arabian",
    name: "Asia",
    id: 4
  },
  {
    continent: "South America",
    name: "Argentine",
    id: 151
  },
  {
    continent: "Asia",
    name: "Armenian",
    id: 175
  },
  {
    continent: "Asia",
    name: "Asian Fusion",
    id: 152
  },
  {
    continent: "Australia",
    name: "Australian",
    id: 131
  },
  {
    continent: "Europe",
    name: "Austrian",
    id: 201
  },
  {
    continent: "Asia",
    name: "Bangladeshi",
    id: 145
  },
  {
    continent: "Europe",
    name: "Belgian",
    id: 132
  },
  {
    continent: "Europe",
    name: "Brasserie",
    id: 195
  },
  {
    continent: "Europe",
    name: "British",
    id: 133
  },
  {
    continent: "Asia",
    name: "Bubble Tea",
    id: 247
  },
  {
    continent: "Asia",
    name: "Burmese",
    id: 22
  },
  {
    continent: "North America",
    name: "Cajun",
    id: 491
  },
  {
    continent: "North America",
    name: "California",
    id: 956
  },
  {
    continent: "Asia",
    name: "Cambodian",
    id: 111
  },
  {
    continent: "North America",
    name: "Canadian",
    id: 381
  },
  {
    continent: "Asia",
    name: "Cantonese",
    id: 121
  },
  {
    continent: "North America",
    name: "Caribbean",
    id: 158
  },
  {
    continent: "Asia",
    name: "Chinese",
    id: 25
  },
  {
    continent: "South America",
    name: "Colombian",
    id: 287
  },
  {
    continent: "Europe",
    name: "Crepes",
    id: 881
  },
  {
    continent: "North America",
    name: "Cuban",
    id: 153
  },
  {
    continent: "Asia",
    name: "Dim Sum",
    id: 411
  },
  {
    continent: "Europe",
    name: "Eastern European",
    id: 651
  },
  {
    continent: "Africa",
    name: "Egyptian",
    id: 146
  },
  {
    continent: "Africa",
    name: "Ethiopian",
    id: 149
  },
  {
    continent: "Asia",
    name: "Filipino",
    id: 112
  },
  {
    continent: "North America",
    name: "First Nations",
    id: 421
  },
  {
    continent: "Europe",
    name: "Fish and Chips",
    id: 298
  },
  {
    continent: "Europe",
    name: "French",
    id: 45
  },
  {
    continent: "Europe",
    name: "Georgian",
    id: 205
  },
  {
    continent: "Europe",
    name: "German",
    id: 134
  },
  {
    continent: "Europe",
    name: "Greek",
    id: 156
  },
  {
    continent: "South America",
    name: "Guyanese",
    id: 431
  },
  {
    continent: "Asia",
    name: "Hakka Chinese",
    id: 441
  },
  {
    continent: "North America",
    name: "Hawaiian",
    id: 521
  },
  {
    continent: "Asia",
    name: "Hong Kong Style",
    id: 791
  },
  {
    continent: "Europe",
    name: "Hungarian",
    id: 228
  },
  {
    continent: "Asia",
    name: "Indian",
    id: 148
  },
  {
    continent: "Asia",
    name: "Indonesian",
    id: 114
  },
  {
    continent: "Asia",
    name: "Iranian",
    id: 140
  },
  {
    continent: "Europe",
    name: "Irish",
    id: 135
  },
  {
    continent: "Asia",
    name: "Israeli",
    id: 218
  },
  {
    continent: "Europe",
    name: "Italian",
    id: 55
  },
  {
    continent: "North America",
    name: "Jamaican",
    id: 207
  },
  {
    continent: "Asia",
    name: "Japanese",
    id: 60
  },
  {
    continent: "Asia",
    name: "Jewish",
    id: 265
  },
  {
    continent: "Asia",
    name: "Korean",
    id: 67
  },
  {
    continent: "South America",
    name: "Latin American",
    id: 136
  },
  {
    continent: "Asia",
    name: "Lebanese",
    id: 66
  },
  {
    continent: "Asia",
    name: "Malaysian",
    id: 69
  },
  {
    continent: "Europe",
    name: "Mediterranean",
    id: 70
  },
  {
    continent: "North America",
    name: "Mexican",
    id: 73
  },
  {
    continent: "Asia",
    name: "Kebab",
    id: 178
  },
  {
    continent: "Europe",
    name: "Modern European",
    id: 294
  },
  {
    continent: "Europe",
    name: "Moldovan",
    id: 591
  },
  {
    continent: "Asia",
    name: "Mongolian",
    id: 74
  },
  {
    continent: "Africa",
    name: "Moroccan",
    id: 147
  },
  {
    continent: "Asia",
    name: "Nepalese",
    id: 117
  },
  {
    continent: "North America",
    name: "New Mexican",
    id: 995
  },
  {
    continent: "Africa",
    name: "Nigerian",
    id: 296
  },
  {
    continent: "Asia",
    name: "North Indian",
    id: 50
  },
  {
    continent: "Asia",
    name: "Northern Chinese",
    id: 861
  },
  {
    continent: "North America",
    name: "Pacific Northwest",
    id: 963
  },
  {
    continent: "Asia",
    name: "Pakistani",
    id: 139
  },
  {
    continent: "Asia",
    name: "Persian",
    id: 81
  },
  {
    continent: "South America",
    name: "Peruvian",
    id: 162
  },
  {
    continent: "Europe",
    name: "Polish",
    id: 219
  },
  {
    continent: "Europe",
    name: "Portuguese",
    id: 87
  },
  {
    continent: "North America",
    name: "Quebecois",
    id: 511
  },
  {
    continent: "Asia",
    name: "Ramen",
    id: 320
  },
  {
    continent: "Asia",
    name: "Russian",
    id: 84
  },
  {
    continent: "North America",
    name: "Salvadorean",
    id: 601
  },
  {
    continent: "Europe",
    name: "Scottish",
    id: 210
  },
  {
    continent: "Asia",
    name: "Shanghai",
    id: 831
  },
  {
    continent: "Asia",
    name: "Sichuan",
    id: 128
  },
  {
    continent: "Asia",
    name: "Singaporean",
    id: 119
  },
  {
    continent: "Africa",
    name: "Somali",
    id: 611
  },
  {
    continent: "Asia",
    name: "South Indian",
    id: 85
  },
  {
    continent: "North America",
    name: "Southern",
    id: 471
  },
  {
    continent: "North America",
    name: "Southwestern",
    id: 966
  },
  {
    continent: "Europe",
    name: "Spanish",
    id: 89
  },
  {
    continent: "Asia",
    name: "Sri Lankan",
    id: 86
  },
  {
    continent: "Asia",
    name: "Sushi",
    id: 177
  },
  {
    continent: "Europe",
    name: "Swedish",
    id: 211
  },
  {
    continent: "Europe",
    name: "Swiss",
    id: 213
  },
  {
    continent: "Taiwanese",
    name: "Asia",
    id: 190
  },
  {
    continent: "Africa",
    name: "Tanzanian",
    id: 621
  },
  {
    continent: "Europe",
    name: "Tapas",
    id: 179
  },
  {
    continent: "North America",
    name: "Tex-Mex",
    id: 150
  },
  {
    continent: "Asia",
    name: "Thai",
    id: 95
  },
  {
    continent: "South America",
    name: "Trinbagonian",
    id: 631
  },
  {
    continent: "Asia",
    name: "Turkish",
    id: 142
  },
  {
    continent: "Europe",
    name: "Ukrainian",
    id: 451
  },
  {
    continent: "South America",
    name: "Venezuelan",
    id: 641
  },
  {
    continent: "Asia",
    name: "Vietnamese",
    id: 99
  },
  {
    continent: "Asia",
    name: "West Indian",
    id: 531
  },
  {
    continent: "Asia",
    name: "Xingiang",
    id: 851
  },
  {
    continent: "Asia",
    name: "Yunnan",
    id: 841
  }
]

worldEatsApp.init = function() {
  //Initialize CSS MAP
  $("#map-continents").CSSMap({
    "size": 1450,
    "mapStyle": "default",
    //Use CSS Map built in Click Listener
    onClick: function(e) {
      var continentSelection = $(e[0]).text();
      //Empty Button Container and Results
      $('.buttonContainer').empty();
      $('.results').empty();
      //Call Continent Choice Method
      worldEatsApp.continentChoice(continentSelection);
      //Smooth Scroll to Next Section of the page.
      $('html, body').animate({
        scrollTop: $('#pickACuisine').offset().top
      }, 500);
    }
  });
};

worldEatsApp.getEats = function(userChoice) {
  console.log(userChoice.id)
  $.ajax({
    url: 'https://developers.zomato.com/api/v2.1/search',
    method: 'GET',
    dataType: 'json',
    headers: {
      'user-key': worldEatsApp.key
    },
    data: {
      entity_id: '89',
      entity_type: 'city',
      cuisines: `${userChoice.id}`,
      sort: 'rating'
    }
  }).then(function(res) {
    //Call display results method once ajax request has been made. 
    worldEatsApp.displayResults(res.restaurants);
  });
};

worldEatsApp.continentChoice = function(continentSelection) {
  $('.buttonContainer').empty();
  $('.results').empty();
  //Use Filter to return all items that match continent selection from cuisines array. 
  if (continentSelection === "North America") {
    var selectedCuisines = worldEatsApp.cuisines.filter(function(value) {
      return value.continent === "North America"
    });
  } else if (continentSelection === "South America") {
    var selectedCuisines = worldEatsApp.cuisines.filter(function(value) {
      return value.continent === "South America"
    });
  } else if (continentSelection === "Africa") {
    var selectedCuisines = worldEatsApp.cuisines.filter(function(value) {
      return value.continent === "Africa"
    });
  } else if (continentSelection === "Europe") {
    var selectedCuisines = worldEatsApp.cuisines.filter(function(value) {
      return value.continent === "Europe"
    });
  } else if (continentSelection === "Asia") {
    var selectedCuisines = worldEatsApp.cuisines.filter(function(value) {
      return value.continent === "Asia"
    });
  } else if (continentSelection === "Australia") {
    var selectedCuisines = worldEatsApp.cuisines.filter(function(value) {
      return value.continent === "Australia"
    });
  }
  $('.buttonContainer').empty();
  $('.results').empty();
  //Use for each loop to append all items from selectedCuisines array as buttons to the page. Add data-id attribute to allow for ajax request. 
  selectedCuisines.forEach(function(cuisineName) {
    $('.buttonContainer').append(`<a href="#cuisineResults"><button class="cuisineOption animated flipInX" data-id=${cuisineName.id}>${(cuisineName.name)}</button></a>`);
  });
  //Use an on click listener to get data attribute of button to allow for ajax request. 
  $('.cuisineOption').on("click", function() {
    var cuisineChoice = ($(this).data());
    //Call ajax request.
    worldEatsApp.getEats(cuisineChoice);
  });
};

//Display results method. 
worldEatsApp.displayResults = function(cuisineResults) {
  $('.results').empty();
  cuisineResults.forEach(function(restaurant) {
    var restaurant = restaurant.restaurant;
    var thumbnail = restaurant.thumb;
    //Use a placeholder thumbnail if data from ajax request doesn't have one. 
    if (restaurant.thumb === "") {
      thumbnail = "assets/logoWhite.png";
    } else {
      thumbnail = restaurant.thumb;
    }
    //Append results to page.
    $('.results').append(`<div class="resultItem animated flipInX"><h4>${restaurant.name}</h4><p>${restaurant.location.address}</p><img class="thumbnail" src=${thumbnail}><a href=${restaurant.url} target="_blank">Get more info here!</a></div>`);
  });
  //Wait for smooth scroll until results are loaded on page.
  $('html, body').animate({
    scrollTop: $('#results').offset().top
  }, 500);
};

// General smooth scroll code inspired by: https://css-tricks.com/snippets/jquery/smooth-scrolling/
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function(event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { 
            return false;
          } else {
            $target.attr('tabindex', '-1'); 
            // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(function() {
  worldEatsApp.init();
});
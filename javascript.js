let chartAnimated = false;

function animateChart() {
    const chart = document.querySelector(".chart");
    chart.style.transform = "rotate(360deg)";
    chartAnimated = true;
}

function handleScroll() {
    if (!chartAnimated) {
        const chart = document.querySelector(".chart");
        const chartTop = chart.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (chartTop < windowHeight) {
            animateChart();
        }
    }
}

$(document).ready(function (){
  let offset = {offset: "80%"}
  $(".table_of_content_title").waypoint(function(){
      $(".table_of_content_title").addClass(
          "animate__animated animate__backInUp"
      );
  }, offset );
});

window.addEventListener("scroll", handleScroll);




// animations on links button
document.addEventListener('DOMContentLoaded', function() {
    const scrollLinkhome = document.getElementById('scroll-linkhome-1');
    
    scrollLinkhome.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Add a class to trigger the animation
      scrollLinkhome.classList.add('clicked');
      
      // Wait for 1 second
      setTimeout(function() {
        // Scroll to the target section smoothly
        const targetSection = document.querySelector(scrollLinkhome.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500); // 1000 milliseconds = 1 second
    });
  })


  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinkhome = document.getElementById('scroll-linkhome-2');
    
    scrollLinkhome.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Add a class to trigger the animation
      scrollLinkhome.classList.add('clicked');
      
      // Wait for 1 second
      setTimeout(function() {
        // Scroll to the target section smoothly
        const targetSection = document.querySelector(scrollLinkhome.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500); // 1000 milliseconds = 1 second
    });
  })

  document.addEventListener('DOMContentLoaded', function() {
    const scrollLinkhome = document.getElementById('scroll-linkhome-3');
    
    scrollLinkhome.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      
      // Add a class to trigger the animation
      scrollLinkhome.classList.add('clicked');
      
      // Wait for 1 second
      setTimeout(function() {
        // Scroll to the target section smoothly
        const targetSection = document.querySelector(scrollLinkhome.getAttribute('href'));
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 500); // 1000 milliseconds = 1 second
    });
  })




 
  $(document).ready(function (){
    let offset = {offset: "100%"}
    $(".table_of_content_title").waypoint(function(){
        $(".table_of_content_title").addClass(
            "animate_animated animate_backInUp"
        );
    }, offset );
});




// animation 
window.addEventListener("scroll", function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 200;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
        // reveals[i].classList.remove("active");
    }
  }
});
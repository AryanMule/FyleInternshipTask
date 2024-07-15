$(document).ready(function () {
  // Slider
  var currentSlide = 0;
  var totalSlides = $(".slider-track .card").length;
  var slidesPerPage = 3;
  var totalPages = Math.ceil(totalSlides / slidesPerPage);
  var dots = $(".slider-dots .dot");

  function showSlide(index) {
    var offset = -index * 100;
    $(".slider-track").css("transform", "translateX(" + offset + "%)");
    dots.removeClass("active").eq(index).addClass("active");
  }

  dots.click(function () {
    var dotIndex = $(this).index();
    currentSlide = dotIndex;
    showSlide(dotIndex);
  });

  // Automatically move to the next slide every 3 seconds
  setInterval(function () {
    currentSlide = (currentSlide + 1) % totalPages;
    showSlide(currentSlide);
  }, 5000);
});

document.querySelectorAll(".projects-name div").forEach((project) => {
  project.addEventListener("click", function () {
    var imgSrc = this.getAttribute("data-img");
    document.getElementById("project-image").setAttribute("src", imgSrc);
  });
});
$(document).ready(function () {
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    var formData = {
      email: $("#email").val(),
      firstName: $("#firstName").val(),
      lastName: $("#lastName").val(),
      termsAgreed: $("#terms").is(":checked"),
    };

    $.ajax({
      url: "https://getform.io/f/bqonkryb",
      method: "POST",
      data: formData,
      success: function (response) {
        alert("Form submitted successfully!");
        $("#contactModal").modal("hide");
        $("#contactForm")[0].reset();
      },
      error: function (error) {
        alert("There was an error submitting the form.");
      },
    });
  });
});

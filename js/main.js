$(document).ready(function () {
  // Initialize Isotope
  if ($(".isotope_tab").length) {
    var $grid = $(".isotope_tab").isotope({});
  }
  // Check if .agents__category exists before applying click handler
  if ($(".agents__category").length) {
    $(".agents__category").on("click", "li", function () {
      $(".agents__category li").removeClass("active");
      $(this).addClass("active");

      var filterValue = $(this).attr("data-filter");
      $grid.isotope({ filter: filterValue });
    });
  }

  // Custom Counter starts
  if ($(".count").length) {
    function startCounter($element) {
      var countTo = $element.attr("data-count");
      $({ countNum: $element.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 3000,
          easing: "swing",
          step: function () {
            $element.text(Math.floor(this.countNum));
          },
          complete: function () {
            $element.text(this.countNum);
          },
        }
      );
    }

    function checkCounterInView() {
      $(".count").each(function () {
        var $this = $(this);
        var elementTop = $this.offset().top;
        var elementBottom = elementTop + $this.outerHeight();
        var viewportTop = $(window).scrollTop();
        var viewportBottom = viewportTop + $(window).height();

        if (elementBottom > viewportTop && elementTop < viewportBottom) {
          if (!$this.hasClass("animated")) {
            startCounter($this);
            $this.addClass("animated");
          }
        }
      });
    }

    $(window).on("load", function () {
      checkCounterInView();
    });
    $(window).on("scroll", function () {
      checkCounterInView();
    });

    checkCounterInView();
  }

  // Partners slider (only if .partners exists)
  if ($(".partners").length) {
    $(".partners").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      prevArrow: null,
      nextArrow: null,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "150px",
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "100px",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "50px",
          },
        },
      ],
    });
  }

  // Testimonial slider (only if .testemonials exists)
  if ($(".testemonials").length) {
    $(".testemonials").slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 3000,
      prevArrow:
        '<button class="slide-arrow testemonial prev-arrow"><i class="fa-solid fa-chevron-left"></i></button>',
      nextArrow:
        '<button class="slide-arrow testemonial next-arrow active"><i class="fa-solid fa-chevron-right"></i></button>',
    });
    $(".prev-arrow").on("click", function () {
      $(this).addClass("active");
      $(".next-arrow").removeClass("active");
    });

    $(".next-arrow").on("click", function () {
      $(this).addClass("active");
      $(".prev-arrow").removeClass("active");
    });
  }

  // VenoBox (only if the element exists)
  if ($(".how__it__works--img").length) {
    $(".how__it__works--img").venobox();
  }

  // Collapse (only if the element exists)
  if ($(".collapse").length) {
    $(".collapse").collapse();
  }

  // Datepicker (only if .datepicker exists)
  if ($(".datepicker").length) {
    $(".datepicker").datepicker({
      showOtherMonths: true,
      selectOtherMonths: true,
      dateFormat: "dd/mm/yy",
      onSelect: function (dateText) {
        $("#date-input").val(dateText);
        $("#datepicker").slideUp();
      },
    });

    $(".input-icon").on("click", function () {
      const formGroup = $(this).closest(".form__group");
      if (formGroup.hasClass("disabled")) {
        return;
      }
      const inputField = $(this).siblings(".datepicker");
      if (inputField.length) {
        inputField.datepicker("show");
      }
    });
  }

  // Timepicker (only if .timepicker exists)
  if ($(".timepicker").length) {
    $(".timepicker").mdtimepicker();

    $(".input-icon").on("click", function () {
      const inputField = $(this).siblings(".timepicker");
      if (inputField.length) {
        inputField.mdtimepicker("show");
      }
    });
  }

  // Service- Latest Work Slider (only if .latest__work--slider exists)
  if ($(".latest__work--slider").length) {
    $(".latest__work--slider").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      prevArrow: null,
      nextArrow: null,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }

  // Home page Latest Work Slider (only if .work__slider--small exists)
  if ($(".work__slider--small").length) {
    $(".work__slider--small").slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false,
      prevArrow: null,
      nextArrow: null,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "150px",
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "150px",
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });
  }

  // Big Work Slider (only if .work__slider--big exists)
  if ($(".work__slider--big").length) {
    $(".work__slider--big").slick({
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: false,
      prevArrow: null,
      nextArrow: null,
      autoplay: true,
      autoplaySpeed: 3000,
      centerMode: true,
      centerPadding: "200px",
      responsive: [
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding: "150px",
            variableWidth: true,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: false,
          },
        },
      ],
    });
  }
});

//Responsive Menu Start
document.addEventListener("DOMContentLoaded", () => {
  const dropdownToggles = document.querySelectorAll(".dropdown__item");

  dropdownToggles.forEach((menu) => {
    menu.addEventListener("click", (e) => {
      menu.classList.toggle("open");
    });
  });

  const menuOpen = document.querySelector(".menu__open");
  const responsiveMenu = document.querySelector(".responsive__menu--area");
  const responsiveMenuBg = document.querySelector(".responsive__menu--bg");
  menuOpen.addEventListener("click", function () {
    responsiveMenu.classList.toggle("open");
    responsiveMenuBg.classList.toggle("open");
  });

  const menuClose = document.querySelector(".menu__close");

  menuClose.addEventListener("click", function () {
    responsiveMenu.classList.toggle("open");
    responsiveMenuBg.classList.toggle("open");
  });
  responsiveMenuBg.addEventListener("click", function () {
    responsiveMenu.classList.toggle("open");
    responsiveMenuBg.classList.toggle("open");
  });
});
//Responsive Menu End

// how it works accordion start
const howItWorks = document.querySelectorAll(".how__it__works--single");

howItWorks.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      howItWorks.forEach((el) => el.classList.remove("active"));
      item.classList.add("active");
    }
  });
});

// how it works accordion end

// Fix the position of view more button of isotope
document.addEventListener("click", function (event) {
  if (
    event.target.matches("li[data-filter]") ||
    event.target.closest("li[data-filter]")
  ) {
    const agentsContainerHeight =
      document.querySelector(".agents").clientHeight;

    let viewMoreBtn = document.querySelector(".view__more--btn");

    // Check if viewMoreBtn exists before attempting to modify its style
    if (viewMoreBtn) {
      viewMoreBtn.style.top = `${agentsContainerHeight + 20}px`;
    } else {
      console.error("viewMoreBtn element not found.");
    }
  }
});

// Password eye open and close
document.querySelectorAll(".form__group .eye").forEach((eyeIcon) => {
  eyeIcon.addEventListener("click", () => {
    // Get the corresponding input field in the same .form__group
    const passwordInput = eyeIcon
      .closest(".form__group--inner")
      .querySelector("input");

    if (passwordInput) {
      if (passwordInput.type === "password") {
        passwordInput.type = "text"; // Change to text to show the password
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye"); // Change icon to 'eye' (open)
      } else {
        passwordInput.type = "password"; // Change back to password to hide it
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash"); // Change icon to 'eye-slash' (closed)
      }
    }
  });
});

// custom select
$(".custom-select").select2({
  placeholder: "Select an option",
  minimumResultsForSearch: -1,
});

// modal, responsive dropdown and back to top
document.addEventListener("DOMContentLoaded", function () {
  // responsive dropdown
  const dropdownLis = document.querySelectorAll(".dropdown__li");

  dropdownLis.forEach(function (dropdownLi) {
    const dropdownUl = dropdownLi.querySelector(".dropdown__ul");

    dropdownLi.addEventListener("click", function () {
      dropdownUl.classList.toggle("dropdown__open");
    });
  });

  // Modal functionality
  const modalOpen = document.querySelector(".modal__open");
  const modalArea = document.querySelector(".modal__area");
  const modalClose = document.querySelector(".modal__close");

  if (modalOpen && modalArea && modalClose) {
    modalOpen.addEventListener("click", function (event) {
      event.preventDefault();
      modalArea.classList.add("modal__open");
    });

    modalClose.addEventListener("click", function () {
      modalArea.classList.remove("modal__open");
    });
  }

  // Back to top functionality
  const backToTop = document.getElementById("backToTop");

  if (backToTop) {
    window.addEventListener(
      "scroll",
      function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 500) {
          if (!backToTop.classList.contains("show")) {
            backToTop.classList.add("show");
          }
        } else {
          if (backToTop.classList.contains("show")) {
            backToTop.classList.remove("show");
          }
        }
      },
      { passive: true }
    );

    backToTop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  }
});

// read more button
document.querySelectorAll(".read__more--btn").forEach((button) => {
  const textElement = button
    .closest(".service__inner")
    ?.querySelector(".service__text");
  const link = button.querySelector(".read__more");

  if (textElement && link) {
    // Check if both text element and link exist
    button.addEventListener("click", (event) => {
      event.preventDefault();

      textElement.classList.toggle("expanded"); // Toggle the expanded class

      // Update button text
      if (textElement.classList.contains("expanded")) {
        link.textContent = "Show Less";
      } else {
        link.textContent = "Read More";
      }
    });
  }
});

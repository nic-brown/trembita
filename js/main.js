$(document).ready(function () {
  // якщо потрібно буде показувати лоадер один раз в сесії
  // if (!sessionStorage.isVisited) {
  //   sessionStorage.isVisited = 'true'
  //   console.log('seesion true')
  // } else {
  //   console.log('seesion false')
  // }

  // $.fancybox.open({
  //   src: "#thx-popup",
  //   type: "inline",
  //   opts: {
  //     beforeShow: function (instance, current) {
  //       $('.fancybox-custom-overlay').addClass('active');
  //     },
  //     beforeClose: function (instance, current) {
  //       $('.fancybox-custom-overlay').removeClass('active');
  //     },
  //   },
  // });

  // Close currently active fancybox instance (pass `true` to close all instances)
  //$.fancybox.close();

  $("#burger").click(function () {
    $(this).toggleClass("open");
    $(".nav-mob").toggleClass("visible");
    $("body").toggleClass("no-scrollbar");

    if (!$("#main-nav").hasClass("fixed")) {
      $("#main-nav").addClass("fixed");
    }

    if ($(window).scrollTop() < 10 && !$("body").hasClass("no-scrollbar")) {
      $("#main-nav").removeClass("fixed");
    }
  });

  // $(window).on("resize scroll", function () {
  $(window).on("resize scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 10) {
      $("#main-nav").addClass("fixed");
    } else {
      if (!$(".nav-mob").hasClass("visible")) {
        $("#main-nav").removeClass("fixed");
      }
    }
  });

  gsap.registerPlugin(ScrollTrigger);

  if ($(".main-header").length) {
    const tl = gsap.timeline({
      ease: "none",
    });

    tl.fromTo(
      ".header-bg",
      {
        scale: 1,
        duration: 1,
        transformOrigin: "bottom center",
      },
      {
        duration: 1,
        scale: 1.1,
      }
    );
    ScrollTrigger.create({
      trigger: ".main-header",
      start: "top top",
      // start: 100,
      end: "+=100%",
      pin: false,
      animation: tl,
      scrub: 1,
      pinSpacing: false,
    });
  }

  //  SIMPLE ANIMATIONS WITH GSAP

  const buttons = gsap.utils.toArray(".animate-me");
  buttons.forEach((btn) => {
    gsap.from(btn, {
      scrollTrigger: {
        // markers: true,
        start: "top 70%",
        trigger: btn,
        onEnter() {
          btn.classList.add("play-ani");
        },
        onLeave() {
          btn.classList.add("play-ani");
        },
        onEnterBack() {
          btn.classList.add("play-ani");
        },
        onLeaveBack() {
          btn.classList.add("play-ani");
        },
      },
    });
  });

  // gsap.to(".brig-show-r", {
  //   scrollTrigger: {
  //     markers: true,
  //     start: "top 70%",
  //     trigger: ".brig-box"
  //   },
  //   // x: 100,
  //   opacity: 1,
  //   // rotation: 360,
  //   duration: 1
  // });
  // gsap.to(".brig-show-l", {
  //   scrollTrigger: {
  //     markers: true,
  //     start: "top 70%",
  //     trigger: ".brig-box"
  //   },
  //   // x: 100,
  //   opacity: 1,
  //   // rotation: 360,
  //   duration: 1
  // });

  if ($(".dream-slider").length) {
    var dreamSwiper = new Swiper(".dream-slider", {
      // Enable lazy loading
      // lazy: true,

      slidesPerView: "auto",
      speed: 800,
      spaceBetween: 8,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      },
      navigation: {
        nextEl: ".dream-next",
        prevEl: ".dream-prev",
      },
      breakpoints: {
        576: {
          spaceBetween: 12,
        },
        //   768: {
        //     slidesPerView: 3,
        //   },
        //   992: {
        //     slidesPerView: 3,
        //   },
        //   1200: {
        //     slidesPerView: 4,
        //   },
      },
    });
  }

  if ($(".rev-slider").length) {
    var revSwiper = new Swiper(".rev-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 1,
      // loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".rev-next",
        prevEl: ".rev-prev",
      },
    });
  }

  if ($(".single-slider").length) {
    var revSwiper = new Swiper(".single-slider", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      initialSlide: 1,
      spaceBetween: 140,
      // loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 0,
        slideShadows: false,
      },
      navigation: {
        nextEl: ".single-next",
        prevEl: ".single-prev",
      },
      breakpoints: {
        992: {
          coverflowEffect: {
            rotate: 0,
            stretch: 500,
            depth: 450,
            modifier: 1,
            slideShadows: false,
          },
        },
      },
    });
  }

  // swiper.update()

  if ($(".parent-slider").length) {
    $(".parent-slider").each(function (index, element) {
      var $this = $(this);
      $this.addClass("instance-parent-" + index);
      $this.find(".swiper-prev").addClass("parent-prev-" + index);
      $this.find(".swiper-next").addClass("parent-next-" + index);
      var swiper = new Swiper(".instance-parent-" + index, {
        slidesPerView: 1,
        noSwiping: true,
        centeredSlides: true,
        spaceBetween: 30,
        autoHeight: true,
        navigation: {
          nextEl: ".parent-next-" + index,
          prevEl: ".parent-prev-" + index,
        },
      });
    });

    $(".child-slider").each(function (index, element) {
      var $this = $(this);
      $this.addClass("instance-" + index);
      $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
      $this.find(".swiper-button-next").addClass("btn-next-" + index);
      var swiper = new Swiper(".instance-" + index, {
        lazy: true,
        slidesPerView: 1,
        noSwiping: false,
        navigation: {
          nextEl: ".btn-next-" + index,
          prevEl: ".btn-prev-" + index,
        },
      });
    });
  }

  $(".inline-gallery").click(function () {
    var galleryName = $(this).attr("data-fancybox");
    var galleryNameForOneGroup = '[data-fancybox="' + galleryName + '"]';

    $().fancybox({
      hideScrollbar: false,
      baseClass: "image-on-top",
      animationEffect: "fade",
      selector: galleryNameForOneGroup,
      thumbs: false,
      loop: false,
      infobar: false,
      // toolbar  : false,
      buttons: ["close"],
      hash: false,
      backFocus: false,
      beforeShow: function (instance, current) {
        $(".fancybox-custom-overlay").addClass("active");
      },
      beforeClose: function (instance, current) {
        $(".fancybox-custom-overlay").removeClass("active");
      },
      btnTpl: {
        arrowLeft:
          '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
          '  <svg    viewBox="0 0 17.41 32.01">	<path   d="M3.46,16L17,2.45a1.44,1.44,0,0,0-2-2L0.42,15a1.44,1.44,0,0,0,0,2L15,31.59a1.44,1.44,0,0,0,2-2Z">						</path>				</svg>' +
          "</button>",
        arrowRight:
          '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
          '<svg  viewBox="0 0 17.41 32.01">		<path		d="M13.95,16L0.42,29.56a1.44,1.44,0,1,0,2,2L17,17a1.44,1.44,0,0,0,0-2L2.45,0.42a1.44,1.44,0,1,0-2,2Z">			</path>		</svg>' +
          "</button>",
      },
    });
  });

  $(".port-item:first-child").addClass("active");
  $(".tab-item:first-child").addClass("active");

  $(".port-nav-btn").click(function (e) {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      let portId = $(this).attr("data-port-id");
      $(".port-item").removeClass("active");

      $(portId).addClass("active");
      // console.log(portId);
    }
    $(".port-nav-btn").not(this).removeClass("active");
  });

  $(".tab-nav-btn").click(function (e) {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
      let portId = $(this).attr("data-tab-id");
      $(".tab-item").removeClass("active");

      $(portId).addClass("active");
      // console.log(portId);
    }
    $(".tab-nav-btn").not(this).removeClass("active");
  });

  $(".comm-card").click(function (e) {
    if (!$(this).hasClass("active")) {
      $(this).addClass("active");
    }
    $(".comm-card").not(this).removeClass("active");
    $(".comm-btn")
      .text("НАДІСЛАТИ ЗАЯВКУ")
      .addClass("active")
      .prop("disabled", false);

    //
  });

  $(".beefup").beefup({
    openSingle: true,
    // stayOpen: 'last'
  });

  $(".open-popup").fancybox({
    type: "inline",
    thumbs: false,
    loop: false,
    touch: false,
    infobar: false,
    buttons: ["close"],
    hash: false,
    backFocus: false,
    autoFocus: false,
    beforeShow: function (instance, current) {
      $(".fancybox-custom-overlay").addClass("active");
    },
    beforeClose: function (instance, current) {
      $(".fancybox-custom-overlay").removeClass("active");
    },
    // beforeLoad: function (instance, current) {
    //   if (instance.current.src == "#main-menu-pop") {
    //     instance.$refs.container.addClass("main-menu-pop-fancy");
    //     var eTop =
    //       $("#open-catalog").offset().top + $("#open-catalog").outerHeight(); //get the offset top of the element
    //     $("#main-menu-pop").css(
    //       "margin-top",
    //       eTop - $(window).scrollTop() + "px"
    //     );
    //   }
    //   // console.log(instance.current.src);
    // },
  });

  $(".go-to-link").on("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href");
    $("html, body").animate(
      {
        scrollTop: $(target).offset().top,
      },
      1000
    );
  });

  $(".myfile").change(function () {
    if ($(this).val() != "")
      $(this)
        .closest(".input-row")
        .children(".myfile-label")
        .text("Прикріплено " + $(this)[0].files.length + " файл");
    else
      $(this)
        .closest(".input-row")
        .children(".myfile-label")
        .html(
          'Завантажити пропозицію <br> <strong>у форматі PDF</strong><svg class="dream-arrow" width="22.000000" height="12.000000" viewBox="0 0 22 12" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> <defs></defs> <path id="Vector" d="M15.678 0.243286C15.6042 0.319824 15.5457 0.410767 15.5059 0.511108C15.4658 0.611328 15.4453 0.718872 15.4453 0.827393C15.4453 0.936035 15.4658 1.04358 15.5059 1.1438C15.5457 1.24402 15.6042 1.33508 15.678 1.4115L19.2947 5.1958L0.786133 5.1958C0.577637 5.1958 0.377686 5.28247 0.230225 5.43677C0.0827637 5.59106 0 5.80029 0 6.01855C0 6.23669 0.0827637 6.44592 0.230225 6.60022C0.377686 6.75452 0.577637 6.84119 0.786133 6.84119L19.2791 6.84119L15.678 10.6008C15.5315 10.7549 15.4492 10.9635 15.4492 11.1808C15.4492 11.3981 15.5315 11.6067 15.678 11.7607C15.8252 11.9139 16.0244 12 16.2322 12C16.4399 12 16.6392 11.9139 16.7866 11.7607L21.7871 6.52856C21.8545 6.46106 21.908 6.37988 21.9446 6.29016C21.9812 6.20032 22 6.10376 22 6.00623C22 5.90857 21.9812 5.81201 21.9446 5.72217C21.908 5.63245 21.8545 5.55139 21.7871 5.48376L16.7944 0.243286C16.7212 0.16626 16.6343 0.10498 16.5386 0.0632324C16.4426 0.0214844 16.3398 0 16.2361 0C16.1323 0 16.0295 0.0214844 15.9338 0.0632324C15.8379 0.10498 15.751 0.16626 15.678 0.243286Z" fill-opacity="1.000000" fill-rule="nonzero"></path> </svg> '
        );
  });

  if ($("#single-content-buy").length) {
    let a = document.querySelector("#single-content-buy"),
      b = null,
      K = null,
      Z = 0,
      P = $("nav").outerHeight() + 20,
      N = 0; // если у P ноль заменить на число, то блок будет прилипать до того, как верхний край окна браузера дойдёт до верхнего края элемента, если у N — нижний край дойдёт до нижнего края элемента. Может быть отрицательным числом
    window.addEventListener("scroll", Ascroll, false);
    document.body.addEventListener("scroll", Ascroll, false);

    function Ascroll() {
      let Ra = a.getBoundingClientRect(),
        R1bottom =
          document
            .querySelector(".single-content-holder")
            .getBoundingClientRect().bottom - 30;
      if (Ra.bottom < R1bottom) {
        if (b == null) {
          let Sa = getComputedStyle(a, ""),
            s = "";
          for (let i = 0; i < Sa.length; i++) {
            if (
              Sa[i].indexOf("overflow") == 0 ||
              Sa[i].indexOf("padding") == 0 ||
              Sa[i].indexOf("border") == 0 ||
              Sa[i].indexOf("outline") == 0 ||
              Sa[i].indexOf("box-shadow") == 0 ||
              Sa[i].indexOf("background") == 0
            ) {
              s += Sa[i] + ": " + Sa.getPropertyValue(Sa[i]) + "; ";
            }
          }
          b = document.createElement("div");
          b.className = "stop";
          b.style.cssText =
            s + " box-sizing: border-box; width: " + a.offsetWidth + "px;";
          a.insertBefore(b, a.firstChild);
          let l = a.childNodes.length;
          for (let i = 1; i < l; i++) {
            b.appendChild(a.childNodes[1]);
          }
          a.style.height = b.getBoundingClientRect().height + "px";
          a.style.padding = "0";
          a.style.border = "0";
        }
        let Rb = b.getBoundingClientRect(),
          Rh = Ra.top + Rb.height,
          W = document.documentElement.clientHeight,
          R1 = Math.round(Rh - R1bottom),
          R2 = Math.round(Rh - W);
        if (Rb.height > W) {
          if (Ra.top < K) {
            // скролл вниз
            if (R2 + N > R1) {
              // не дойти до низа
              if (Rb.bottom - W + N <= 0) {
                // подцепиться
                b.className = "sticky";
                b.style.top = W - Rb.height - N + "px";
                Z = N + Ra.top + Rb.height - W;
              } else {
                b.className = "stop";

                b.style.top = -Z + "px";
              }
            } else {
              b.className = "stop";

              b.style.top = -R1 + "px";
              Z = R1;
            }
          } else {
            // скролл вверх
            if (Ra.top - P < 0) {
              // не дойти до верха
              if (Rb.top - P >= 0) {
                // подцепиться
                b.className = "sticky";
                b.style.top = P + "px";

                Z = Ra.top - P;
              } else {
                b.className = "stop";

                b.style.top = -Z + "px";
              }
            } else {
              b.className = "";
              b.style.top = "";
              Z = 0;
            }
          }
          K = Ra.top;
        } else {
          // console.log(Ra.top - P);
          if (Ra.top - P <= 0) {
            if (Ra.top - P <= R1) {
              b.className = "stop";
              b.style.top = -R1 + "px";
              // b.style.transform = 'translateY(80px)';
            } else {
              b.className = "sticky";
              b.style.top = P + "px";
            }
          } else {
            b.className = "";
            b.style.top = "";
          }
        }
        window.addEventListener(
          "resize",
          function () {
            a.children[0].style.width = getComputedStyle(a, "").width;
          },
          false
        );
      }
    }
  }

  // if ($("input[name='your-tel']").length) {
  //   $("input[name='your-tel']").mask("+38 099 999 99 99", {
  //     completed: function () {
  //       this.attr("aria-invalid", "false");
  //       this.closest(".wpcf7-form-control-wrap")
  //         .find(".wpcf7-not-valid-tip")
  //         .remove();
  //     },
  //   });
  // }

  // if ($('.comment-form').length) {
  //   $('.comment-form').parsley({
  //     errorClass: 'is-invalid text-danger',
  //     successClass: 'is-valid', // Comment this option if you don't want the field to become green when valid. Recommended in Google material design to prevent too many hints for user experience. Only report when a field is wrong.
  //     errorsWrapper: '<span class="errorWrapper"></span>',
  //     errorTemplate: '<span class="errorInfo"></span><br>',
  //     trigger: 'change'
  //   });
  // }

  // if ($("#wpmtst_client_phone").length) {
  //   $("#wpmtst_client_phone").mask("+38 099 999 99 99");
  // }
  // if ($("#phone").length) {
  //   $("#phone").mask("+38 099 999 99 99", {
  //     completed: function () {
  //       // this.attr("aria-invalid", "false");
  //       this.closest(".comment-form-phone")
  //         .find(".errorWrapper")
  //         .empty().removeClass('filled');
  //     },
  //   });
  // }

  // // simplevar on class name

  // // ця хрінь фігачила фільтр, тому що він починав працювати лише на другий клік
  // // думаю через те, що у фільтрі він змінює структуру чекбоксів і тд

  // // $(".searchandfilter > ul ul").each(
  // //   (index, element) => new SimpleBar(element, { autoHide: false })
  // // );
  // // #container {
  // //       background-color: lightgray;
  // //       max-height: 200px;
  // //       overflow: auto;
  // //     }

  // $(".open-popup").fancybox({
  //   type: "inline",
  //   thumbs: false,
  //   loop: false,
  //   touch: false,
  //   infobar: false,
  //   buttons: ["close"],
  //   hash: false,
  //   backFocus: false,
  //   autoFocus: false,
  //   beforeLoad: function (instance, current) {
  //     if (instance.current.src == "#main-menu-pop") {
  //       instance.$refs.container.addClass("main-menu-pop-fancy");
  //       var eTop =
  //         $("#open-catalog").offset().top + $("#open-catalog").outerHeight(); //get the offset top of the element
  //       $("#main-menu-pop").css(
  //         "margin-top",
  //         eTop - $(window).scrollTop() + "px"
  //       );
  //     }
  //     // console.log(instance.current.src);
  //   },
  // });

  // $(".open-filter-btn,.sf-field-submit input[type='submit']").click(
  //   function () {
  //     $(".filter").toggleClass("visible");

  //     // $(this).text(function (i, text) {
  //     //   return text === "Відкрити фільтр" ? "Приховати фільтр" : "Відкрити фільтр";
  //     // })
  //   }
  // );

  // $(document).mouseup(function (e) {
  //   var container = $(".filter");
  //   if (!container.is(e.target) && container.has(e.target).length === 0) {
  //     $(".filter").removeClass("visible");
  //   }
  // });

  // // $(".open-menu").click(function () {
  // //   $(".menu-overlay").addClass("visible");
  // // });

  // // $(".menu-overlay").click(function () {
  // //   $(this).removeClass("visible");
  // // });

  // // $(".card-popup-wrapper,.header-cart").mouseleave(function () {
  // //   $(".card-popup-wrapper").removeClass('visible');

  // // });

  // // $(".contact-box-extend").on("click", function () {
  // //   // .contact-box-wrapper
  // //   let contact_box = $(this).closest(".contact-box-wrapper");

  // //   contact_box.find(".contact-box-overlay").toggleClass("active");
  // //   $(this).toggleClass("active");
  // //   contact_box.find(".contact-box").toggleClass("active");
  // // });

  // // $(".contact-box-overlay").on("click", function () {
  // //   $(this).removeClass("active");
  // //   $(".contact-box-extend").removeClass("active");

  // //   $(".contact-box").removeClass("active");
  // // });

  // $(".call-us-back").on("click", function () {
  //   $(".contact-box-overlay").removeClass("active");
  //   $(".contact-box-extend").removeClass("active");
  //   $(".contact-box").removeClass("active");
  // });

  // $(".inline-gallery").click(function () {
  //   var galleryName = $(this).attr("data-fancybox");
  //   var galleryNameForOneGroup = '[data-fancybox="' + galleryName + '"]';

  //   $().fancybox({
  //     hideScrollbar: false,
  //     baseClass: "image-on-top",
  //     animationEffect: "fade",
  //     selector: galleryNameForOneGroup,
  //     thumbs: false,
  //     loop: false,
  //     infobar: false,
  //     // toolbar  : false,
  //     buttons: ["close"],
  //     hash: false,
  //     backFocus: false,

  //     btnTpl: {
  //       arrowLeft:
  //         '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' +
  //         '  <svg    viewBox="0 0 17.41 32.01">	<path   d="M3.46,16L17,2.45a1.44,1.44,0,0,0-2-2L0.42,15a1.44,1.44,0,0,0,0,2L15,31.59a1.44,1.44,0,0,0,2-2Z">						</path>				</svg>' +
  //         "</button>",
  //       arrowRight:
  //         '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' +
  //         '<svg  viewBox="0 0 17.41 32.01">		<path		d="M13.95,16L0.42,29.56a1.44,1.44,0,1,0,2,2L17,17a1.44,1.44,0,0,0,0-2L2.45,0.42a1.44,1.44,0,1,0-2,2Z">			</path>		</svg>' +
  //         "</button>",
  //     },
  //   });
  // });

  // // // Hide them all

  // // let get_products = $(".product-holder .product");
  // // get_products.hide();

  // // get_products.slice(0, 8).show();
  // // $("#loadMore").on("click", function (e) {
  // //   e.preventDefault();

  // //   // If there is no hidden elements
  // //   if ($(".product-holder .product:hidden").length === 0) {
  // //     // get_products.hide();
  // //     get_products.slice(0, 4).show();
  // //   }
  // //   // If there is at least one hidden element
  // //   else {
  // //     $(".product-holder .product:hidden").slice(0, 4).fadeIn();
  // //   }

  // //   if ($(".product-holder .product:hidden").length === 0) {
  // //     $(this).addClass("disabled");
  // //   }
  // // });

  // if ($(".custom-select").length) {
  //   $(".custom-select").select2({
  //     minimumResultsForSearch: -1,
  //     width: "100%",
  //   });
  // }

  // if ($(".swiper-product").length) {
  //   var swiper_product = new Swiper(".swiper-product-nav", {
  //     spaceBetween: 5,
  //     slidesPerView: 3,
  //     watchSlidesProgress: true,

  //     direction: "horizontal",
  //     breakpoints: {
  //       1200: {
  //         spaceBetween: 15,
  //         direction: "vertical",
  //         slidesPerView: 2,
  //       },
  //     },
  //   });
  //   var swiper_product_nav = new Swiper(".swiper-product ", {
  //     slidesPerView: 1,
  //     lazy: true,
  //     // watchSlidesProgress: true,
  //     slideToClickedSlide: true, // click on any slide will produce transition to this slide
  //     navigation: {
  //       nextEl: ".product-next",
  //       prevEl: ".product-prev",
  //     },
  //     thumbs: {
  //       swiper: swiper_product,
  //     },
  //   });
  // }

  // // increment & decrement input value by 1
  // let buttonPlus = $(".cart-qty-plus");
  // let buttonMinus = $(".cart-qty-minus");
  // let get_prod_price = parseInt($("#prodsin-price").attr('data-price'));

  // let incrementPlus = buttonPlus.click(function () {

  //   let $n = $(this)
  //     .parent(".button-container")
  //     .parent(".incdec-box")
  //     .find(".qty");
  //   $n.val(Number($n.val()) + 1);
  //   // console.log($n.val());
  //   $("#prodsin-price").attr('data-price-total', $n.val() * get_prod_price);
  //   $("#prodsin-price label").text($n.val() * get_prod_price);
  // });
  // let incrementMinus = buttonMinus.click(function () {
  //   let $n = $(this)
  //     .parent(".button-container")
  //     .parent(".incdec-box")
  //     .find(".qty");
  //   let amount = Number($n.val());
  //   if (amount > 1) {
  //     $n.val(amount - 1);
  //   }
  //   // console.log($n.val());
  //   $("#prodsin-price").attr('data-price-total', $n.val() * get_prod_price);
  //   $("#prodsin-price label").text($n.val() * get_prod_price);
  // });

  // $("#qty").on("change paste keyup", function () {

  //   $("#prodsin-price").attr('data-price-total', $(this).val() * get_prod_price);
  //   $("#prodsin-price label").text($(this).val() * get_prod_price);
  // });

  // $('#qty').keyup(function () {
  //   this.value = this.value.replace(/[^0-9\.]/g, '');
  // });

  // // $(".product-holder .product").slice(0, 8).show();
  // $(".product-holder .product").slice(0, 8).addClass("visible");
  // $("#loadMore").on("click", function (e) {
  //   e.preventDefault();
  //   $(".product-holder .product:hidden").slice(0, 100).addClass("visible");
  //   if ($(".product-holder .product:hidden").length == 0) {
  //     $("#loadMore").addClass("disabled");
  //     $(".home-product-holder").addClass("disabled");
  //     $(".main-header .btn-wrapper").addClass("disabled");
  //   }
  //   // якщо потірбно якийсь скрол до товару при завантаженні то можна підключити його
  //   // $("html,body").animate(
  //   //   {
  //   //     scrollTop:
  //   //       $(this).offset().top - $(".product-holder .product").outerHeight(),
  //   //   },
  //   //   800
  //   // );
  // });

  // $(".our-box .inline-gallery").slice(0, 8).show();
  // $("#loadMoreGallery").on("click", function (e) {
  //   e.preventDefault();
  //   $(".our-box .inline-gallery:hidden").slice(0, 100).fadeIn();
  //   if ($(".our-box .inline-gallery:hidden").length == 0) {
  //     $("#loadMoreGallery").addClass("disabled");
  //     // $(".home-product-holder").addClass("disabled");
  //     // $(".main-header .btn-wrapper").addClass("disabled");
  //   }
  // });

  // if ($(".news-slider").length) {
  //   var swiper = new Swiper(".news-slider", {
  //     slidesPerView: "auto",
  //     speed: 800,
  //     spaceBetween: 20,
  //     navigation: {
  //       nextEl: ".swiper-news-next",
  //       prevEl: ".swiper-news-prev",
  //     },
  //     breakpoints: {
  //       768: {
  //         slidesPerView: 2,
  //       },
  //       992: {
  //         slidesPerView: 3,
  //       },
  //     },
  //   });
  // }

  // if ($(".port-slider").length) {
  //   var swiper = new Swiper(".port-slider", {
  //     // Enable lazy loading
  //     // lazy: true,

  //     slidesPerView: "auto",
  //     speed: 800,
  //     spaceBetween: 20,

  //     navigation: {
  //       nextEl: ".swiper-port-next",
  //       prevEl: ".swiper-port-prev",
  //     },
  //     breakpoints: {
  //       768: {
  //         slidesPerView: 3,
  //       },
  //       992: {
  //         slidesPerView: 3,
  //       },
  //       1200: {
  //         slidesPerView: 4,
  //       },
  //     },
  //     on: {
  //       lazyImageReady: (swiper) => {
  //         swiper.update();
  //       },
  //     },
  //   });
  // }

  // if ($(".main-slider").length) {
  //   var swiper = new Swiper(".main-slider", {
  //     // Enable lazy loading
  //     lazy: true,
  //     autoHeight: true,
  //     slidesPerView: 1,
  //     speed: 800,
  //     pagination: {
  //       el: ".swiper-pagination",
  //     },
  //     navigation: {
  //       nextEl: ".swiper-header-next",
  //       prevEl: ".swiper-header-prev",
  //     },
  //   });
  // }

  // var swiper2 = new Swiper(".rev-slider", {
  //   //  autoHeight: true,
  //   direction: "horizontal",
  //   slidesPerView: "auto",
  //   speed: 800,
  //   spaceBetween: 10,
  //   autoHeight: true,
  //   // centeredSlides: true,
  //   // initialSlide: 0,
  //   // slidesPerView: 2,
  //   // freeMode: true,
  //   // autoHeight: true,
  //   // loop: true,
  //   // scrollbar: {
  //   //   el: ".swiper-scrollbar",
  //   //   hide: false,
  //   //   // draggable: true,
  //   // },
  //   navigation: {
  //     nextEl: ".swiper-rev-next",
  //     prevEl: ".swiper-rev-prev",
  //   },
  //   breakpoints: {
  //     // 768: {
  //     //   slidesPerView: 3,
  //     // },
  //     992: {
  //       direction: "vertical",
  //     },
  //   },
  //   on: {
  //     reachEnd: function () {
  //       // do something
  //       console.log(swiper2.progress);
  //       $(".rev-slider").addClass("reachEnd");
  //     },
  //     slideChange: function () {
  //       // do something
  //       console.log("move detected");
  //       if (swiper2.progress != 1) {
  //         $(".rev-slider").removeClass("reachEnd");
  //       }
  //     },
  //   },
  // });

  // //overflow check
  // $(".expand-overflow").click(function () {
  //   let min_height = $(this)
  //     .closest(".overflow-wrapper")
  //     .find(".overflow-con")
  //     .height();
  //   let get_el = $(this).closest(".overflow-wrapper").find(".overflow-con");
  //   let get_el_table = $(this)
  //     .closest(".overflow-wrapper")
  //     .find(".overflow-con .content")
  //     .height();
  //   let currentHeight = get_el.innerHeight();
  //   // get height with auto applied
  //   get_el.css({
  //     height: currentHeight,
  //     maxHeight: "unset",
  //   });

  //   $(this).closest(".overflow-wrapper").addClass("visible");

  //   console.log(
  //     $(this)
  //       .closest(".overflow-wrapper")
  //       .find(".overflow-con .content")
  //       .height()
  //   );

  //   get_el.css("height", currentHeight).animate(
  //     {
  //       // height: (currentHeight == autoHeight ? min_height : autoHeight)
  //       height: get_el_table,
  //     },
  //     500
  //   );

  //   function sayHi() {
  //     get_el.css("height", "auto");
  //   }

  //   setTimeout(sayHi, 1000);
  // });

  // // breakpoint where swiper will be destroyed
  // // and switches to a dual-column layout
  // const breakpoint = window.matchMedia("(min-width: 1200px)");

  // // keep track of swiper instances to destroy later
  // let popularGoods;

  // //////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////

  // const breakpointChecker = function () {
  //   // if larger viewport and multi-row layout needed
  //   if (breakpoint.matches === true) {
  //     // clean up old instances and inline styles when available
  //     if (popularGoods !== undefined) popularGoods.destroy(true, true);

  //     // or/and do nothing
  //     return;

  //     // else if a small viewport and single column layout needed
  //   } else if (breakpoint.matches === false) {
  //     // fire small viewport version of swiper
  //     return enableSwiper();
  //   }
  // };

  // //////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////

  // const enableSwiper = function () {
  //   popularGoods = new Swiper(".popular-goods", {
  //     // centeredSlides: true,
  //     // loop: true,
  //     // slidesPerView: 1.5,
  //     slidesPerView: "auto",
  //     // centeredSlides: true,
  //     // spaceBetween: 15, // ця хрінь фігачить все
  //     a11y: true,
  //     // freeMode: true,
  //     // grabCursor: true,
  //     // pagination
  //     // pagination: '.swiper-pagination',
  //     paginationClickable: true,
  //     navigation: {
  //       nextEl: ".swiper-goods-next",
  //       prevEl: ".swiper-goods-prev",
  //     },
  //   });
  // };

  // //////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////
  // //////////////////////////////////////////////////////////////////
  // // keep an eye on viewport size changes
  // breakpoint.addListener(breakpointChecker);
  // // kickstart
  // breakpointChecker();

  // $(window).on("resize scroll", function () {
  //   // if ($(".home-slider").length) {
  //   //   if ($(".home-slider").isInViewport()) {
  //   //     // do something
  //   //     console.log("visible brah");
  //   //     // home_slider.autoplay.start();
  //   //   } else {
  //   //     // do something else
  //   //     console.log("hidden brah");
  //   //     // home_slider.autoplay.stop();
  //   //   }
  //   // }

  //   var scroll = $(window).scrollTop();
  //   if (scroll >= 600) {
  //     $("nav").addClass("fixed");
  //   } else {
  //     $("nav").removeClass("fixed");
  //   }
  // });
});

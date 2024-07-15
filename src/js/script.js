const slider = tns({
    container: ".carousel__slider",
    items: 1,
    slideBy: "page",
    autoplay: true,
    autoplayButtonOutput: false,
    controls: false,
});

document.querySelector(".prev").onclick = function () {
    slider.goTo("prev");
};
document.querySelector(".next").onclick = function () {
    slider.goTo("next");
};

(function ($) {
    $(function () {
        $("ul.catalog__tabs").on(
            "click",
            "li:not(.catalog__tab_active)",
            function () {
                $(this)
                    .addClass("catalog__tab_active")
                    .siblings()
                    .removeClass("catalog__tab_active")
                    .closest("div.container")
                    .find("div.catalog__content")
                    .removeClass("catalog__content_active")
                    .eq($(this).index())
                    .addClass("catalog__content_active");
            }
        );

        function toggleSlide(item) {
            $(item).each(function (i) {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    $(".card").eq(i).toggleClass("card_active");
                });
            });
        }

        toggleSlide(".card__link");
        toggleSlide(".card__link_back");

        //modal
        $("[data-modal=consultation]").on("click", function () {
            $(".overlay, #consultation").fadeIn();
        });
        $(".modal__close").on("click", function () {
            $(".overlay, #consultation, #thanks, #order").fadeOut();
        });
        $(".card .button_mini").each(function (i) {
            $(this).on("click", function () {
                $("#order .modal__subtitle").text(
                    $(".card .card__subtitle").eq(i).text()
                );
                $(".overlay, #order").fadeIn("slow");
            });
        });
    });

})(jQuery);

function inputError(form) {
    $(form).validate({
    rules: {
        name: "required",

        email: {
            required: true,
            email: true
            },
        phone: {
                required: true,
                minlength: 5,
            },
        },
        

    messages: {
        name: "Пожалуйста, введите имя..",
        email: {
            required: "Нам нужен твой E-mail",
            email: "Твой E-mail адресс должен быть в таком формате: name@domain.com"
        },
        phone: {
            required: "Введите номер телефона",
            minlength: jQuery.validator.format("Номер должен содержать минимум {0} цифр!")
                },
        
        }
    
});

    
}

inputError('#consultation form')
inputError('#consultation-form')
inputError('#order form')

$(document).ready(function () {

    let page = "";

    const fillsubpage = function(icon) {
        page = icon.attr('value');
        $('#scrollernum1').click();

        $('#subpagedesc').children().hide();
        $('#' + page + 'desc').show();

        let numimages = icon.attr('numimages');
        $('.scrollernum').each(function () {
            if ($(this).children().text() <= numimages) {
                $(this).show();
            }
            else {
                $(this).hide();
            }
        });
    };

    $('.icon').click(function () {
        
        let icon = $(this);
        $('body').get(0).scrollIntoView({behavior: 'smooth'});
        if (page === "") {
            fillsubpage(icon); 
            $('#subpage').slideDown("slow");
        }
        else {
            $('#subpage').slideUp("slow", function() {
                fillsubpage(icon);
                $('#subpage').slideDown("slow");
            });
        }
    });

    $('.scrollernum').children().click(function () {
        let num = $(this).text();
        $('#subpageimage').attr('src', 'images/' + page + num + '.png');
        $('.scrollernum').each(function () {
            if ($(this).children().text() === num) {
                $(this).addClass('active');
            }
            else {
                $(this).removeClass('active');
            }
        });
    });

    const arrowfunc = function(move) {
        $('#scrollernum' + (parseInt($('.scrollernum.active').text()) + move) + ':visible').click();
    };

    $('#scrollerleftarrow').click(function () {
        arrowfunc(-1);
    });

    $('#scrollerrightarrow').click(function () {
        arrowfunc(1);
    });

    $('#closebutton').click(function () {
        page = "";
        $('#subpage').slideUp("slow");
    });

    $('#comingsoon').off('click');
});

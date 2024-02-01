/*$(function(){
    $('img').on('error', function(){
        $(this).attr("src", "img/error.png");
    });
    $('img').on('error', function(){
        $('img').attr("src","img/error.png");
    });
});*/

    $(function(){
        var ex = $('.ex1');

        $('img').width($(window).width()).height($(window).height());
        $(window).resize(function(){
            $('img').width($(window).width()).height($(window).height());
        });
        $('body').css("height", "5000px");
        $(window).scroll(function(){
            var topo = $(window).scrollTop();
            if(topo > 300){
                $('img').fadeOut('2000');
            } else {
                $('img').fadeIn('2000');
            }
        });
        $('.ev1').click(function(){
            $(this).css("background", "#ccc");
            ex.text("Você clicou!");
        });

        $('.ev2').dblclick(function(){
            $(this).css("background", "#ccc");
            ex.text("Você deu dois cliques!");
        });

        $('.ev3').focusin(function() {
            $(this).css("background", "#ccc");
            $('.ex1').text("Você deu foco!");
        }).focusout(function() {
            $(this).css("background", "#000");
            $('.ex1').text("Você tirou o foco!");
        });

        $('.ev4').hover(function() {
            $(this).css("background", "#ccc");
            $('.ex1').text("Você passou o mouse!");
        }, function() {
            $(this).css("background", "#000");
            $('.ex1').text("Você tirou o mouse!");
            }
        );

        $('.ev5').mousedown(function() {
            $(this).css("background", "#ccc");
            $('.ex1').text("Você está segurando o botão do mouse!");
        }).mouseup(function() {
            $(this).css("background", "#000");
            $('.ex1').text("Você soltou o botão do mouse!");
        });

        var a = 0;
        var b = 0;
        $('.ev6').mouseenter(function() {
            a += 1;
            $('.ex1').text("Entradas do mouse: " + a);
        }).mouseout(function() {
            b += 1;
            $('.ex1').text("Saídas do mouse: " + b);
        });

        var c = 0;
        $('.ev7').mouseover(function() {
            c += 1;
            $('.ex1').text("Mouse over: " + c);
        }).mouseleave(function() {
            $('.ex1').text("Mouse leave");
        });

        $('.ev8').mousemove(function(move){
            var localx = move.pageX;
            var localy = move.pageY;

            $('.ex1').text("Eixo x: " + localx + " - Eixo y: " + localy);
        });

        /*$('.place').each(function() {
            var place = $(this).attr('title');
            var input = $(this);
            
            input
                .val(place)
                .css("color", "#ccc")
                .focusin(function() {
                    input.css("color", "#000")
                    if(input.val() == place) {
                        input.val('');
                    }
                }).focusout(function() {
                    if(input.val() == '') {
                        input.css("color", "#ccc");
                        input.val(place);
                    }
                })
        });*/
        
        /*$('.key').keypress(function(){
            $('.ex1').text($(this).val());
        });*/
        $('.key, .ev3').keyup(function(){
            $('.ex1').text($(this).val());
        });

        $('.selecionar').click(function(){
            $('.key').select();
            $('form').submit(function(){
                return false;
            })
        });

        $('.hide').click(function(){
            ex.hide(2000);
        });

        $('.show').click(function(){
            ex.show(2000);
        });

        $('.toggle').click(function(){
            ex.toggle('slow');
        });

        $('.botao').click(function(){
            ex.fadeTo('slow', 0.5, function(){
                $('.ex2').fadeTo('slow', 0.2);
            });
        });

        $(window).scroll(function(){
            if($(this).scrollTop() > 20){
                $('.menu').addClass('menu-fixo');
            } else {
                $('.menu').removeClass('menu-fixo');
            }
        });
        
        $('#slide img:eq(0)').addClass('ativo').show();
        var texto = $('.ativo').attr('alt');
        $('#slide').prepend('<p>'+texto+'</p>');
        setInterval(slide, 3000);

        function slide(){
            if($('.ativo').next().length){
                $('.ativo').fadeOut().removeClass('ativo').next().fadeIn().addClass('ativo');
            } else {

                $('.ativo').fadeOut().removeClass('ativo');
                $('#slide img:eq(0)').fadeIn().addClass('ativo');
            }
            var texto = $('.ativo').attr('alt');
            $('#slide p').hide().html(texto).delay(500).fadeIn();
        };

    });

    $(function(){
        $('.titulo').click(function(){
            var conteudo = $(this).parent().find('.conteudo');

            if (!conteudo.hasClass('show')){
                $('.caixa').find('.show').slideUp('fast', function(){
                    $(this).addClass('hide').removeClass('show')
                });

                conteudo.slideDown('fast', function(){
                    $(this).addClass('show').removeClass('hide')
                });
            }
        });
    });

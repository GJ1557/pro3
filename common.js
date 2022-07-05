$(function(){
    // ham & bav
    $('.ham').click(function(){
        $(this).toggleClass('on')
        $('nav').toggleClass('on')
    })
    $('.gnb>li>a').click(function(e){
        e.preventDefault()
    })
    $('.gnb>li').click(function(){
        if($(this).attr('class') != 'on'){
            $('.sub').slideUp()
            $(this).find('.sub').slideToggle()
            $('.gnb>li').removeClass('on')
            $(this).addClass('on')
        }else{
            $(this).find('.sub').slideToggle()
            $('.gnb>li').removeClass('on')
        }
    })
    // menu
    $('.menu_btn').click(function(){
        $('.menu').removeClass('on')
        $('.main').removeClass('on')

        $('.menu2').addClass('on')
        $('.store').addClass('on')
    })
    $('.menu2_btn').click(function(){
        if (choice == 1) {
            $('.canvas').removeClass('on')
            $('.menu_con').removeClass('on')

            $('.store').addClass('on')
            choice = 0
        } else {
            $('.menu2').removeClass('on')
            $('.store').removeClass('on')
            $('.canvas').removeClass('on')
            $('.menu_con').removeClass('on')

            $('.main').addClass('on')
            $('.menu').addClass('on')                    
        }
    })
    // store
    let choice
    $('.choice_btn').click(function(){
        $('.store').removeClass('on')

        $('.canvas').addClass('on')
        $('.menu_con').addClass('on')
        choice = 1
        console.log(choice)
    })
    $('.location li').click(function(){
        $('.location li').removeClass('on')
        $(this).addClass('on')
    })
    $('.branch ul li').click(function(){
        $('.branch ul li').removeClass('on')
        $(this).addClass('on')
    })

    // tab_tab
    $('#tab1').click(function(){
        $('.tab_tab li').removeClass('on')
        $('.top, .bottom').removeClass('on')

        $('#tab1').addClass('on')
        $('.building').addClass('on')
        $('.info').addClass('on')
    })
    $('#tab2').click(function(){
        $('.tab_tab li').removeClass('on')
        $('.top, .bottom').removeClass('on')

        $('#tab2').addClass('on')
        $('.review_more').addClass('on')
        $('.review').addClass('on')
    })
    $('#tab3').click(function(){
        $('.tab_tab li').removeClass('on')
        $('.top, .bottom').removeClass('on')

        $('#tab3').addClass('on')
        $('.menu_price').addClass('on')
        $('.menu_list').addClass('on')
    })
    $('#tab4').click(function(){
        $('.tab_tab li').removeClass('on')
        $('.top, .bottom').removeClass('on')

        $('#tab4').addClass('on')
        $('.calendar').addClass('on')
        $('.reserve').addClass('on')
    })

    // logo
    $('.logo').click(function(){
        $('.menu2').removeClass('on')
            $('.store').removeClass('on')
            $('.canvas').removeClass('on')
            $('.menu_con').removeClass('on')

            $('.main').addClass('on')
            $('.menu').addClass('on')  
    })

    // review_con
    $('.alignment li').click(function(){
        $('.alignment li').removeClass('on')
        $(this).addClass('on')
    })

    // menu_list
    $('.menu_list ul li').click(function(){
        $('.menu_list ul li').removeClass('on')
        $(this).addClass('on')
    })

    // reserve
    $('.lunch_btn').click(function(){
        $('.reserve>div>button').removeClass('on')
        $(this).addClass('on')
        $('.dinner').removeClass('on')
        $('.lunch').addClass('on')
    })
    $('.dinner_btn').click(function(){
        $('.reserve>div>button').removeClass('on')
        $(this).addClass('on')
        $('.lunch').removeClass('on')
        $('.dinner').addClass('on')
    })
    $('.reserve ul li').click(function(){
        $('.reserve ul li').removeClass('on')
        $(this).addClass('on')
    })

    // calendar
    $('.calendar ul li').click(function(){
        $('.calendar ul li').removeClass('on')
        $(this).addClass('on')
    })
})
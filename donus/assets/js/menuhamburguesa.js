        $(document).ready(function() {
            $("#sidebar").mCustomScrollbar({
                theme: "minimal"
            });

            $('#dismiss, .overlay, section, a').on('click', function() {
                $('#sidebar').removeClass('active');
                $('.overlay').removeClass('active');
            });

            $('#sidebarCollapse').on('click', function() {
                $('#sidebar').addClass('active');
                $('.overlay').addClass('active');
                $('.collapse.in').toggleClass('in');
                $('a[aria-expanded=true]').attr('aria-expanded', 'false');
            });
        });

        var nav_sections = $('section');
        var main_nav = $('.nav-menu, #mobile-nav');

        $(window).on('scroll', function() {
            var cur_pos = $(this).scrollTop() + 200;

            nav_sections.each(function() {
                var top = $(this).offset().top,
                    bottom = top + $(this).outerHeight();

                if (cur_pos >= top && cur_pos <= bottom) {
                    if (cur_pos <= bottom) {
                        main_nav.find('li').removeClass('active');
                    }
                    main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
                }
                if (cur_pos < 300) {
                    $(".nav-menu ul:first li:first").addClass('active');
                }
            });
        });
$(document).ready(function(){
    function run () {
        var output = $('.output');
        var inputArea = $('label:last').clone();
        $('input:text').on('change', function(){
            var val = $(this).val();
            $('input:text')
            if (val==='help') {
                var copy = $('#' + val).clone();
                $('.output').append(copy);
            } else if (val==='clear') {
                var copy = $('#' + val).clone();
                $('.output').empty();
                $('.container label').hide();
            } else if (val==='about') {
                var copy = $('#' + val).clone();
                $('.output').append(copy);
            } else if (val==='objective') {
                var copy = $('#' + val).clone();
                $('.output').append(copy)
            } else if (val==='experience') {
                var copy = $('#' + val).clone();
                $('.output').append(copy)
            } else if (val==='education') {
                var copy = $('#' + val).clone();
                $('.output').append(copy)
            } else if (val==='training') {
                var copy = $('#' + val).clone();
                $('.output').append(copy)
            } else if (val==='cources') {
                var copy = $('#' + val).clone();
                $('.output').append(copy)
            } else if (val==='computer-skills') {
                var copy = $('#' + val).clone();
                $('.output').append(copy)
            } else if (val==='voluntary-work') {
                var copy = $('#' + val).clone();
                $('.output').append(copy)
            } else if (val==='languages') {
                var copy = $('#' + val).clone();
                $('.output').append(copy)
            } else {
                output.append('<div>' + val + ': command not found</div>');
            }

            output.append(inputArea);
            $('.output label span').removeClass('flash');
            $('.container label span').removeClass('flash');
            var lastInput = $('.output label:last input:text');
            lastInput.focus();
            lastInput.prev('span').addClass('flash');

            return run();
        });
        var r = $('.output').children().show();
        if ($('.output').has('label').length > 0) {
            var scroll = $('.output').children('label:last').offset().top;
            $(window).scrollTop(scroll);
        } 
    }
    run();
    
});
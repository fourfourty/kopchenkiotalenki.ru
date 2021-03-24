import $ from 'jquery';

function scrollTo( scroll ){

    $('html,body').stop().animate({ scrollTop: $(`[name=`+ scroll + `]`).offset().top }, 1500);
};

export default scrollTo;
var hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];

$('#currentDay').text(moment().format('dddd, MMMM Do YYYY'));

//creates hour blocks in html
hoursArray.forEach(function(hour) {
    var rowDiv = $('<div>');
    rowDiv.addClass('row time-block');
    rowDiv.attr('id', hour);
    var timeColomn = $('<div>');
    timeColomn.addClass('col-1 hour');
    timeColomn.text(hour + ':00');
    var textColomn = $('<textarea>');
    textColomn.addClass('col-10 description');
    var btnCol = $('<button>');
    btnCol.addClass('col-1 btn saveBtn');
    btnCol.text('save');
    rowDiv.append(timeColomn, textColomn, btnCol);
    $('container').append(rowDiv);
})

//setter
moment().seconds(30);

//getter
moment().seconds();


//pass in milliseconds
moment.duration (3600).humanize();

//specify what kind of time measurement
moment.duration(3600, 'seconds').hours();


//languages
moment.locale('es');
var march = moment ('2017-03')
// console.log(march.format('MMMM'))


// var currentDayEl = $('#currentDay');
// var currentDay = moment().format('MMMM Do YYYY');
// currentDayEl.text(currentDay);


var currentTime =  moment().hours();

$('#currentDay').text(moment().format('MMMM Do YYYY'));


function saveDescription () {
    var time = $(this).parent().attr('id');
    var descriptionText = $(this).siblings('.description').val();
    localStorage.setItem(time, descriptionText);
}


$('#9 .description').val(localStorage.getItem('9'));
$('#10 .description').val(localStorage.getItem('10'));



$('.time-block').each(function(){
    var hourBlock = parseInt($(this).attr('id')) 

    if ( hourBlock < currentTime ) {
        $(this).addClass('past')
    } else if ( hourBlock === currentTime ) {
        $(this).removeClass('past')
        $(this).addClass('present')
    } else {
        $(this).removeClass('past');
        $(this).removeClass('present');
        $(this).addClass('future');
    }
})





$('.saveBtn').click(saveDescription);
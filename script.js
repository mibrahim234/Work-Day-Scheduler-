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
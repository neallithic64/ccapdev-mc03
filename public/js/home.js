$(document).ready(function () {

    $('#number').keyup(function() {
        var num = $('#number').val();
        
        $.get('/getCheckNumber', {number: num}, function(result) {
            if (result !== '') {
                $('#number').css('background-color', 'red');
                $('#error').text('Number already registered');
                $('#submit').prop('disabled', true);
            } else {
                $('#number').css('background-color', '#e3e3e3');
                $('#error').text('');
                $('#submit').prop('disabled', false);
            }
        });
    });

    $('#submit').click(function() {
        var name = $('#name').val(),
            num = $('#number').val();

        if (name !== '' && num !== '') {
            $.get('/add', {name: name, number: num}, function(result) {
                if (result) {
                    $('#contacts').append(result);
                    $('#name').val('');
                    $('#number').val('');
                }
            });
        } else alert('Missing field/s!');
    });

    $('#contacts').on('click', '.remove', function() {
        var card = $(this),
            text = card.siblings('div').text(),
            contact = text.trim().split(/(\s)/);

        $.get('/delete', {number: contact[contact.length-1]}, function(result) {
            if (result) card.parent().remove();
        });
    });

})

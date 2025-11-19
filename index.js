$(document).ready(function() {
    $('.validate').on('keyup blur change', function() {
        var $this = $(this);
        var val = $this.val().trim();
        var $error = $('#' + $this.attr('id') + '-error');

        if (val === '') {
            $this.removeClass('success').addClass('error');
            $error.text('This field is required.');
        } else {
            $this.removeClass('error').addClass('success');
            $error.text('');
        }
    });
});

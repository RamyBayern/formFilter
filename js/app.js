 $(document).ready(function () {
        $('select.ddlFilterTableRow').bind('change', function () {
            $('select.ddlFilterTableRow').attr('disabled', 'disabled');
           $('#movie-table').find('.Row').hide();
            var critriaAttribute = '';

            $('select.ddlFilterTableRow').each(function () {
                if ($(this).val() != '0') {
                    critriaAttribute += '[data-' + $(this).data('attribute') + '="' + $(this).val() + '"]';
                }
            });

            $('#movie-table').find('.Row' + critriaAttribute).show();
//            $('#headerCount').html($('table#employees tr.Row:visible').length + ' Registered Kids');
            $('select.ddlFilterTableRow').removeAttr('disabled');
        });
$(function(){
  $('#movie-table').tablesorter(); 
});
    });
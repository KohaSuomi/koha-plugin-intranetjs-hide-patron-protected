///ALKU///
// Asiakastietojen suojattu-valinnan piilotus
$(document).ready(function() {
    if (window.location.href.indexOf('/cgi-bin/koha/members/memberentry.pl') > -1) {
        var superlib = $('span#logged-in-info-full').children().hasClass('is_superlibrarian');
        if (!superlib) {
            var label = $('label[for="protected"]');
            label.parent().children().hide();
        }
    }
});
///LOPPU///
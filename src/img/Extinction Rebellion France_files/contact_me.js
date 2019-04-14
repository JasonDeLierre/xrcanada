// Contact Form Scripts

$(function() {

    $("#joinXRForm input, #joinXRForm textarea, #joinXRForm select").jqBootstrapValidation({
        preventSubmit: true,
        submitError: function($form, event, errors) {
            // additional error messages or events
        },
        submitSuccess: function($form, event) {
            event.preventDefault(); // prevent default submit behaviour
            var name = $("input#name").val();
            var firstName = name; // For Success/Failure Message

            // Check for white space in name for Success/Fail message
            if (firstName.indexOf(' ') >= 0) {
                firstName = name.split(' ').slice(0, -1).join(' ');
            }

            $.ajax({
                url: '/php/rebel.php',
                type: "POST",
                data: $('#joinXRForm').serialize(),
                cache: false,
                success: function(data) {
                    console.log(data);
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Message envoyé. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    //$('#contactForm').trigger("reset");
                },
                error: function(data) {
                    console.log(data);
                    // Fail message
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("<strong>Désolé " + firstName + ", on dirait que le serveur ne répond pas, essaie encore d'ici quelques temps !");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    //$('#joinXRForm').trigger("reset");
                },
            });
        },
        filter: function() {
            return $(this).is(":visible");
        },
    });

    $("a[data-toggle=\"tab\"]").click(function(e) {
        e.preventDefault();
        $(this).tab("show");
    });
});


/*When clicking on Full hide fail/success boxes */
$('#name').focus(function() {
    $('#success').html('');
});

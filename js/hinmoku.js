            $(function() {
              $("button").click(function() {
                var myValue = $('#hinmoku option:selected').val();
                $("#hinmoku2").text(myValue);
              });
            });

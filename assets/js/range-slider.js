/*=====================
     range slider js
     ==========================*/

$(function() {
    $("#slider-range").slider({
        range: true,
        min: 500,
        max: 5000,
        values: [1000, 3000],
        slide: function(event, ui) {
            $("#amount").val("R" + ui.values[0] + " - R" + ui.values[1]);
        }
    });
    $("#amount").val("R" + $("#slider-range").slider("values", 0) +
        " - R" + $("#slider-range").slider("values", 1));
});

$(function() {
    $("#slider-range1").slider({
        range: true,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(event, ui) {
            $("#amount1").val(ui.values[0] + " - " + ui.values[1] + " sq ft");
        }
    });
    $("#amount1").val($("#slider-range1").slider("values", 0) +
        " - " + $("#slider-range1").slider("values", 1) + " sq ft");
});
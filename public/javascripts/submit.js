$(function () {
  $('#orderForm').submit(function (event) {
    console.log('called');
    event.preventDefault();
    $.post("/order/create", $('#orderForm').serialize());

    $('#result').html("<p>Submitted!</p>")

  })
	
  $('.button').click(function (event) {
    console.log('called');
    event.preventDefault();
    var id = $(this).attr('id');
    var response = {};
    response.name = id;
    $.post("/orders/delete", response);

	$('#result').html("<p>Gone!</p>")

  })
})





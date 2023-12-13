// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require rails-ujs
//= require activestorage
//= require turbolinks
//= require_tree .

$("#onSubmit").click(function () {
  let user_data = [];
  let name = $(".user").val();
  let password = $(".pass").val();
  user_data.push(name);
  user_data.push(password);
  $.ajax({
    url: "users/login",
    type: "POST",
    data: {
      user_datos: user_data,
    },
    success: () => {
      alert("Se ha logeado correctamente");
    },
  });
});

// connect to the socket

let socket = io();


socket.on('number', (msg) => {
})

console.log('test')


$(function() {
  //handle nav-list click task
  $('#nav_dev').click(function() {
    var dev_item = $('#dev_item')
    if (dev_item.css("display") == "none") {
      dev_item.show(300)
    } else {
      dev_item.hide(300)
    }
  })

  //handle nav-bar show and hide
  $('.nav_icon').click(function() {
    var nav_bar = $('.navsection')
    if (nav_bar.css("display") == "none") {
      nav_bar.fadeIn(600)
    } else {
      nav_bar.fadeOut(300)
    }
  })
})

//handle nav-button click task - tab switch
function handleTab(id, bid) {
  // tab switch
  $('.pages').hide(0)
  $(id).fadeIn(300)

  // button color
  // reset button color and font color
  $('.navbutton').removeClass('btn_selected')
  //change selected button color and font color
  $(bid).addClass('btn_selected')
}

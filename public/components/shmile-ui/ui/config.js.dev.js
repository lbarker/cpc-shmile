var Config = {
  photo_margin: 50, // Margin for the composite photo per side
  window_width: $(window).width(),
  window_height: $(window).height() - 10,
  overlay_delay: 10,
  next_delay: 10,
  cheese_delay: 400,
  flash_duration: 10,
  ready_delay: 10,
  nice_delay: 10,

  // The amount of time we should pause between each frame shutter
  // I tend to bump this up when 1) photobooth participants want more
  // time to review their photos between shots, and 2) when I'm shooting
  // with external flash and the flash needs more time to recharge.
  between_snap_delay: 10,

  // For usability enhancements on iPad, set this to "true"
  is_mobile: false
}


var Config = {
  photo_margin: 50, // Margin for the composite photo per side
  window_width: $(window).width(),
  window_height: $(window).height() - 10,
  overlay_delay: 2000,
  next_delay: 2000,
  cheese_delay: 400,
  flash_duration: 1000,
  ready_delay: 800,
  nice_delay: 5000,

  // The amount of time we should pause between each frame shutter
  // I tend to bump this up when 1) photobooth participants want more
  // time to review their photos between shots, and 2) when I'm shooting
  // with external flash and the flash needs more time to recharge.
  between_snap_delay: 500,

  // For usability enhancements on iPad, set this to "true"
  is_mobile: false
}

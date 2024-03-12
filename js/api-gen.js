/**
 * Function to produce UUID.
 * See: http://stackoverflow.com/a/8809472
 */
function generateUUID()
{
  var d = new Date().getTime();

  if (window.performance && typeof window.performance.now === "function")
  {
    d += performance.now();
  }

  var uuid = 'xxxxxxxx-xxxx-3xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c)
  {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : r & 0x3 | 0x8).toString(16);
  });

  return uuid;
}

/**
 * Generate new key and insert into input value
 */
$('#keygen').on('click', function ()
{
  $('#apikey').val(generateUUID());
});
//# sourceURL=pen.js

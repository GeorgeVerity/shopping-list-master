function addShoppingItem() {
  var text = $("#shopping-list-entry").val();
  $(".shopping-list").append('<li><span class="shopping-item">'+text+'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>');
  $("#shopping-list-entry").val('');
  return false
}

function deleteItem () {
  $(this).closest('li').remove();
}
function checkItem () {
   $(this).closest('li').css('textDecoration', 'line-through');
}

$(function() {
  $("#add").on('click', addShoppingItem);
  $('ul').on('click',".shopping-item-delete", deleteItem);
  $('ul').on('click',".shopping-item-toggle", checkItem);
});

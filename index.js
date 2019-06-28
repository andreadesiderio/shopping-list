'use strict'
function createNewItem(){
    $('input').attr('required', true);
$('#js-shopping-list-form').on('submit', function(event){
    event.preventDefault();
    let item = $('#shopping-list-entry').val();
    let addedItem = $('li:first').clone();
    addedItem.find('.shopping-item').removeClass('shopping-item__checked');
    addedItem.find('.shopping-item').text(item);
    $(addedItem).appendTo('ul');
    $('#shopping-list-entry').val("");
});
}

$('ul.shopping-list').on('click', '.shopping-item-delete', function (event){
   $(this).closest('li').remove();
   console.log($(this).tagName);
});

$('ul.shopping-list').on('click', '.shopping-item-toggle', function (event){
    // $(this).closest('span.shopping-item').remove();
    // toggleClass('shopping-item__checked');
    // $(this).closest('span.shopping-item').css('color', 'blue');
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
 });

$(createNewItem);
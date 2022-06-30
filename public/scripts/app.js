// Client facing scripts here

// ------------------------------------------------------------------------------------------------
// index page show all lists in individual container
// ------------------------------------------------------------------------------------------------

$(document).ready(function() {
  console.log('HI, FROM DOCUMENT.READY FUNCTION')

  // fake list object/data
//   const listsData =
//   [
//     {
//         "id": 2,
//         "user_id": 1,
//         "name": "Summer Plan",
//         "icon_url": null
//     },
//     {
//         "id": 5,
//         "user_id": 1,
//         "name": "Fall Plan",
//         "icon_url": null
//     },
//     {
//         "id": 8,
//         "user_id": 1,
//         "name": "Winter Plan",
//         "icon_url": null
//     }
// ]

  const createListElement = (list) => {
    console.log('Inside createListElement')
    console.log('lists[i].name:', list.name)
    // code creating the list element
    const $list =
        $(`
        <div class="list_container">
          <article>
          <div class="list_left">
          <a href = /list/${list.id}><h2 id="list_name">${list.name}</h2></a>
          </div>
          <div class="list_right">
          <form method="DELETE" action="/api/lists/${list.id}"><button id="list_delete" type="submit">Delete</button></form>
          </div>
          </article>
        </div>

      `);
      console.log('createListElement:', $list)


    return $list;
  };

  $('#list_delete').click(() => {
    
  })

  // IMPLEMENT TO LOAD LISTS USING AJAX (SIMILAR TO TWEETER)

  const loadLists = function() {
    console.log('loadLists function')

    $.ajax({
      url: '/api/lists',
      method: 'GET',
      dataType: "json"
    })
      .then(function(lists) {
        console.log('Success: See lists', lists);
        renderLists(lists);
      });
  };

  const renderLists = (listData) => {
    const lists = listData.lists
    console.log('renderLists lists:', lists)

    for (let i = 0; i < lists.length; i++) { // loops through lists

      console.log('renderLists lists:', lists);
      console.log('renderLists lists[i]:', lists[i]);

      let list = lists[i];
      list = createListElement(list);

      console.log('renderLists createListElement list:', list);
      $('.lists').append(list);// takes return value and appends it to the listscontainer
      // to add it to the page so we can make sure it's got all the right elements, classes, etc.
    }
  }
  // renderLists(listsData);
    loadLists()
  });

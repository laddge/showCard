var links = document.getElementsByClassName('showcard');
for (let i = 0; i < links.length; i++) {
  api = 'https://laddge.tk/api/showcard.php?url=' + links[i].href;
  fetch(api)
    .then(data => {
      return data.json();
    })
    .then(json => {
      if (json.image != '') {
        links[i].innerHTML = '<img src="' + json.image + '" class="card_image">';
      } else {
        links[i].innerHTML = '';
      }
      if (json.meta_title != '') {
        links[i].innerHTML = links[i].innerHTML + '<p class="card_title">' + json.meta_title + '</p>';
      } else if (json.title != '') {
        links[i].innerHTML = links[i].innerHTML + '<p class="card_title">' + json.title + '</p>';
      }
      if (json.description != '') {
        desc = json.description;
        if (desc.length > 50) {
          desc = desc.slice(0, 50) + '……';
        }
        links[i].innerHTML = links[i].innerHTML + '<p class="card_description">' + desc + '</p>';
      }
    });
}
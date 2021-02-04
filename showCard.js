window.onload = function () {
  var links = document.getElementsByClassName('showcard');
  for (let i = 0; i < links.length; i++) {
    api = 'https://laddge.tk/api/showcard.php?url=' + links[i].href;
    fetch(api)
      .then(data => {
        return data.json();
      })
      .then(json => {
        if (json.image != '') {
          if (json.title != '') {
            if (json.description != '') {
              desc = json.description;
              if (desc.length > 50) {
                desc = desc.slice(0, 50) + '……';
              }
              links[i].innerHTML = '<img src="' + json.image + '" class="card_image"><p class="card_title">' + json.title + '</p><p class="card_description">' + desc + '</p>';
              links[i].classList.add('card_box');
            }
          }
        }  
      });
  }
}
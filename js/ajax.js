function fetchData() {
  let data = localStorage.getItem('postsData');
  if (data) {
    return Promise.resolve(JSON.parse(data));
  } else {
    return Promise.reject('No data found in local storage');
  }
}

function sendData(data) {
  localStorage.setItem('postsData', JSON.stringify(data));
}

function toggleLike(id) {
  $(`#score-${id}`).get(0).classList.toggle('liked');
  if ($(`#score-${id}`).get(0).classList.contains('liked')) {
    fetchData().then((data) => {
      data[id]['likes']++;
      $(`#like-${id}`).get(0).textContent = data[id]['likes'];
      sendData(data);
      console.log(JSON.parse(localStorage.getItem('postsData'))[id]['likes']);
    });
  } else {
    fetchData().then((data) => {
      data[id]['likes']--;
      $(`#like-${id}`).text(data[id]['likes']);
      sendData(data);
      console.log(JSON.parse(localStorage.getItem('postsData'))[id]['likes']);
    });
  }
}

$(document).ready(() => {
  fetch('json/posts.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((data) => {
      localStorage.setItem('likes', JSON.stringify(data));
      let postList = '';
      for (let i = 0; i < data.length; ++i) {
        postList += `<div class="post">
            <h3>${data[i]['title']}</h3>
            <p>${data[i]['body']}</p>
            <i onclick="toggleLike(${i})" id="score-${i}" class="fa fa-heart heart-pos"><span class="score" id="like-${i}">${JSON.parse(localStorage.getItem('postsData'))[i]['likes']}</span></i>
            </div>`;
      }
      $('#posts').html(postList);
    })
    .catch((error) => {
      console.error('Error: ', error);
    });
});

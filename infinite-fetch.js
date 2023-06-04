let currentPage = 1;
let isFetching = false;
let hasMore = true;

let root = document.getElementById('where the cars are');

async function fetchData() {
  isFetching = true;

  let response = await fetch('http://:From where u get the data');
  let data = await response.json();

  isFetching = true;

  if (data.length === 0) {
    hasMore = false;
    return;
  }

  data.forEach((x) => {
    let div = document.createElement('div');
    div.innerHTML = `<h1>${x.title}<h1> etc...`;
    root.appendChild(div);
  });

  currentPage++;
}

window.addEventListener('scroll', (e) => {
  if (isFetching || !hasMore) {
    return;
  }

  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    fetchData();
  }
});

fetchData();

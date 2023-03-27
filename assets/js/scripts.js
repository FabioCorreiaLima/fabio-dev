function searchAnime() {
  // Limpa a tela com informações existentes de buscas anteriores:
  const animeInfo = document.getElementById("id-anime-info");
  animeInfo.innerHTML = '';

  // Remove os espaços antes e depois do texto, substitui espaços por _ (underline), deixando todas as letras minúsculas e substitui "dublado" por "dub":
  var searchQuery = document.getElementById("search-bar").value.trim().replace(/\s+/g, '-').toLowerCase().replace(/dubeed/g, 'dub');

  // A constante abaixo retorna um array com os dados da busca.
  const apiURL = `https://api.consumet.org/anime/gogoanime/${searchQuery}`;

  if (searchQuery) {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        //console.log(data.results)
        // Verifica se não há conteúdo.
        if (data.results.length === 0) {
          alert('Anime not found.');
        } else {
          const animeList = document.getElementById("id-anime-info");
          data.results.forEach(anime => {
            const animeId = anime.id;
            const animeTitle = anime.title;
            const animeImage = anime.image;
            const divElement = document.createElement('div');
            const imgElement = document.createElement('img');
            const titleElement = document.createElement('h4');

            // cria div para receber a div do anime
            const fundoPretoDiv = document.createElement('div');
            fundoPretoDiv.className = 'fundo_preto';

            // cria a div do anime
            divElement.className = 'card-anime';
            divElement.id = animeId;
            divElement.classList.add("col-md-2", "card");

            // adiciona a imagem e o título à div do anime
            imgElement.src = animeImage;
            divElement.appendChild(imgElement)
            titleElement.innerHTML = animeTitle;
            divElement.appendChild(titleElement)

            // adiciona a div do anime à div pai
            fundoPretoDiv.appendChild(divElement);

            // adiciona a div pai à lista de animes
            animeList.appendChild(fundoPretoDiv);

            divElement.onclick = () => redirecionarAnime(anime.id)
          });
        }
      })
      .catch(error => {
        console.error('Ocorreu um erro ao obter informações do anime:', error);
      });

    // Limpa o valor da barra de pesquisa.
    document.getElementById("search-bar").value = "";
  } else {
    alert('Type the name of an anime to search.');
  }
}


function redirecionarAnime(id) {
  fetch(`https://api.consumet.org/anime/gogoanime/info/${id}`)
    .then(response => response.json())
    .then(data => {
      //console.log(data);

      // Cria o conteúdo do modal com os dados do anime
      const modalTitle = document.querySelector('#animeModal .modal-title');
      modalTitle.innerText = data.title;

      const modalBody = document.querySelector('#animeModal #animeModalBody');

      modalBody.innerHTML = `
        <img class="modal-img" src="${data.image}" alt="${data.title}">
        <p class="mx-4 my-4"><b>Sinopse:</b> ${data.description}</p>
      `;

      const titlesList = document.createElement('ul');
      titlesList.className = 'list-group';

      data.episodes.forEach(episode => {
        const id = episode.id
        fetch(`https://api.consumet.org/anime/gogoanime/watch/${id}`)
          .then(response => response.json())
          .then(data => {
            //console.log(data)
            const episodeTitle = id;
            const episodeLocation = data.sources[2].url;
            const titleItem = document.createElement('li');
            titleItem.className = 'list-group-item';
            titleItem.innerHTML = `
              <h4>${episodeTitle}</h4>
              <div class="d-grid gap-2">
                <a class="btn btn-lg btn-outline-danger" href="${episodeLocation}" role="button" target="_blank">Assistir</a>
              </div>
            `;
            titlesList.appendChild(titleItem);

            // Ordena a lista de títulos pelo episódio
            Array.from(titlesList.children)
              .sort((a, b) => a.querySelector('h4').innerText.localeCompare(b.querySelector('h4').innerText))
              .forEach(li => titlesList.appendChild(li));
          })
          .catch(error => console.error('Erro:', error));
      })
      modalBody.appendChild(titlesList);

      // Exibe o modal
      const animeModal = new bootstrap.Modal(document.getElementById('animeModal'));
      animeModal.show();
    })
    .catch(error => console.error(error));
}

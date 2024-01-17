// Começo do programa para uma função da resolução para exibir os filmes na tela

function exibirFilme(){
  limpaDiv()

// declração dos filmes
  let filmes = [
    'moana',
    'up',
	'toy story',
	'viva',
	'divertida mente', 
	'a bela e a fera'
];
// nomes dados aos próprios filmes
  let nomes = [
    'Moana: Um Mar de Aventuras','Up: Altas Aventuras', 
    'Toy Story 4', 'Viva - a Vida é uma Festa', 
    'Divertida mente',
    'A Bela e a Fera'
  ];
// url das capas
  let capas = [
    'https://cinemaemcena.com.br/uploads/banners/636192695824828449.jpg',
    'https://cinemaemcena.com.br/uploads/criticas_old/filmes-6368-cartazes-up_20.jpg', 
    'https://upload.wikimedia.org/wikipedia/pt/4/4c/Toy_Story_4_poster.jpg',
    'https://www.papodecinema.com.br/wp-content/uploads/2018/01/20180105-coco_brazil_payoff_poster_brazil.jpg', 
    'https://www.papodecinema.com.br/wp-content/uploads/2015/06/20181003-divertida-mente-hd-d_nq_np_929731-mlb26068923997_092017-f.jpg', 
    'https://www.papodecinema.com.br/wp-content/uploads/2017/03/20170306-a-bela-e-a-fera-papo-de-cinema-cartaz.jpg'
  ];
// url dos video e trailers
  let videos = [
    'https://www.youtube.com/embed/XL4Tf1Eohv8?si=6ZMvyU0wDvTkYqAD', 
    'https://www.youtube.com/embed/-_kUiZkAKKY?si=sS4mdwwCkgtUidO4', 
    'https://www.youtube.com/embed/76CslX-q5C4',
    'https://www.youtube.com/embed/iLmZZV-Nkuk?si=q22P3na2ocBKCeXI', 
    'https://www.youtube.com/embed/w2YRoV--CHo?si=0tMrHXzuM9Fl1aRH',
    'https://www.youtube.com/embed/3Qxt86RCuH0?si=c7r0NATEZeBy6CK-'
  ];
  // descrições dos filmes, falando como sinopse da história
  let descricoes = [
    'Moana Waialiki é uma corajosa jovem, filha do chefe de uma tribo na Oceania, vinda de uma longa linhagem de navegadores. Querendo descobrir mais sobre seu passado e ajudar a família, ela resolve partir em busca de seus ancestrais.',
    'Carl Fredricksen é um vendedor de balões que, aos 78 anos, está prestes a perder a casa em que sempre viveu com sua esposa. Para evitar que isto aconteça, decide levantar voo com a própria residência. Só que descobre que Russell, um menino de 8 anos, embarcou junto.',
    'Quando um novo brinquedo chamado "Forky" se une a Woody e à turma, uma viagem ao lado de velhos e novos amigos revela o quão grande o mundo pode ser para um brinquedo',
    'Miguel sonha em se tornar um grande músico, assim como seu ídolo, Ernesto de la Cruz. Isso apesar da música ter sido banida há gerações em sua família. Desesperado para provar o seu talento, o garoto se vê na deslumbrante e pitoresca Terra dos Mortos.', 
    'Riley é uma menina de 11 anos que é retirada de sua vida no meio-oeste americano quando seu pai arruma um novo emprego em São Francisco. Como todos nós, ela é guiada pelas emoções – aqui representadas pelos divertidos personagens Alegria, Medo Raiva, Nojinho e Tristeza.', 
    'Bela é uma camponesa prometida a um truculento homem de seu vilarejo, Gaston. Certo dia, ela acaba sob a custódia de uma besta feroz. Porém, descobre que o monstro de quem é refém talvez não seja assim tão feio por dentro, podendo se mostrar uma boa pessoa.' 
 ];
  
  // variável declarada para pegar todos os links de ID dos filmes...
  let imdb = [
    'https://www.imdb.com/title/tt3521164/?ref_=nv_sr_srsg_0',
    'https://www.imdb.com/title/tt1049413/?ref_=ext_shr_lnk',
    'https://www.imdb.com/title/tt1979376/?ref_=nv_sr_srsg_0',
    'https://www.imdb.com/title/tt2380307/?ref_=fn_al_tt_1', 
    'https://www.imdb.com/title/tt2096673/?ref_=fn_al_tt_1', 
    'https://www.imdb.com/title/tt2771200/?ref_=fn_al_tt_1'
  ];

  let filme=document.getElementById("filme")
  filme = (filme.value).toLowerCase()
  let filmeIndex = filmes.indexOf(filme)
  
  if (filmeIndex != -1){
    let capa = document.getElementById("capa")
    capa.innerHTML = `<img src=${capas[filmeIndex]} + >`
    let video = document.getElementById("descricao")
    video.innerHTML= `<span id='titulo'> ${nomes[filmeIndex]} </span><a href=${imdb[filmeIndex]} target='_blank'>IMDB</a><span id='p'> ${descricoes[filmeIndex]} </span><iframe id='frame' width='380' height='213' src=${videos[filmeIndex]}></iframe>`
  }
  else{
    let aviso = document.querySelector("#descricao")
    aviso.innerHTML= `<span id='indisponivel'>Ainda não possuimos esse filme :(</span>`
  }
}

function passaValor(valor){
  let input = document.getElementById('filme')
  let nome = document.getElementById(valor)
  input.value = nome.innerText
  exibirFilme()
}

div.innerHTML = " "
function limpaDiv(){
  let div = document.getElementById('capa')
}
var filtrosSelecionados = {
  cat: [1, 2, 3],
  dog: [1, 2, 3]
};

function toggleFiltro(obj, filtro, nome) {

  if (obj[filtro].includes(nome)) {

    return {
      ...obj,

      [filtro]: obj[filtro].filter(
        opcao => opcao !== nome
      )
    };

  } else {

    return {
      ...obj,

      [filtro]: [
        ...obj[filtro],
        nome
      ]
    };
  }
}

filtrosSelecionados = toggleFiltro(
  filtrosSelecionados,
  'cat',
  2
);

filtrosSelecionados = toggleFiltro(
  filtrosSelecionados,
  'cat',
  2
);

  const params = new URLSearchParams();

  Object.keys(filtrosSelecionados).forEach(chave => {
      if (filtrosSelecionados[chave].length > 0) {
        for (let i = 0; i < filtrosSelecionados[chave].length; i++) {
          params.append(`${chave}`, filtrosSelecionados[chave][i]);
        }}})


console.log(params.toString());
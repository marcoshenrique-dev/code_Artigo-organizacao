
  // Código de exemplo

  let TarefasaFazer = [
    {nome : "Geografia" , prazo : 4}, //Prazo com número
    {nome : "Matematica" , prazo : 3},
    {nome : "História" , prazo : 2},
    {nome : "Português" , prazo : 1},
  ]

  let TarefasFeitas = []


  function organizarTarefas(lista){ //Função que organiza as tarefas

    let prazos = []

    for(let valor of lista){

        prazos.push(valor.prazo);
    }

    prazos.sort(function compare(a, b) {
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;

  })

  for(let i = 0; i < lista.length ; i++){

    lista[i].prazo = prazos[i]
  }

    console.log(prazos);
  }

  organizarTarefas(TarefasaFazer);

  function removeTarefa(lista){
    
    let value = lista[0];

    lista.splice(0, 1);

    TarefasFeitas.push(value);

  }

  removeTarefa(TarefasaFazer);
  
  console.table(TarefasFeitas);
  console.table(TarefasaFazer);
const start = () => {
  while (true) {
    let opcao = "sair";
    switch (opcao) {
      case "cadastrar":
        console.log("Opção cadastrar");
        break;
      case "listar":
        console.log("Opção listar");
        break;
      case "sair":
        console.log("Saindo...");
        return;
    }
  }
};

start();

import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
  return (
    <div>
      <Titulo
        principal="Página de cadatro"
        secundario="Incluir, alterar e excluir coisas!"
      />
      <Titulo
        principal="Página de login"
        secundario="Informe seu e-mail e senha"
        pequeno
      />
      <Titulo
        principal="Página de login"
        secundario="Informe seu e-mail e senha"
      />
    </div>
  );
}

// posso importar um component para reuso, o que é bem mais confortavel
// reultilizando o componente faz mais sentido do que refazer

// o true define que aquele é o verdadeiro, que, no caso, para ele usar como pequeno
// mas nao precisa dizer explicitamente se ele é verdade
// só é preciso passar o parametro

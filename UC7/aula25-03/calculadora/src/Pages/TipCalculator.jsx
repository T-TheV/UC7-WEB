// Importa o React e o hook useState para gerenciar estados no componente
import React, { useState } from "react";

// Importa os componentes reutilizáveis Button, InputField e ResultDisplay
import Button from "../Components/Button/Button";
import InputField from "../Components/InputField/InputField";
import ResultDisplay from "../Components/ResultDisplay/ResultDisplay";

// Importa o arquivo CSS modular para estilizar o componente TipCalculator
import style from "../Pages/TipCalculator.module.css";

function TipCalculator() {
  // Estado para armazenar o valor da conta inserido pelo usuário
  const [valorConta, setValorConta] = useState("");

  // Estado para armazenar a porcentagem da gorjeta inserida pelo usuário
  const [porcentagemGorjeta, setPorcentagemGorjeta] = useState("");

  // Estado para armazenar o resultado do cálculo (gorjeta e total)
  const [resultado, setResultado] = useState(null);

  // Função para calcular a gorjeta e o total com base nos valores inseridos
  const calcularGorjeta = () => {
    const valor = parseFloat(valorConta); // Converte o valor da conta para número
    const valorGorjeta = (valor * parseFloat(porcentagemGorjeta)) / 100; // Calcula o valor da gorjeta
    const total = valor + valorGorjeta; // Calcula o total (conta + gorjeta)
    setResultado({ gorjeta: valorGorjeta, total: total }); // Atualiza o estado com os resultados
  };

  return (
    <>
      {/* Contêiner principal do componente com a classe CSS TipCalculator */}
      <div className={style.TipCalculator}>
        {/* Título da calculadora */}
        <h1>Calculadora de Gorjeta</h1>

        {/* Campo de entrada para o valor da conta */}
        <InputField
          label="Valor da Conta:" // Rótulo do campo
          value={valorConta} // Valor atual do campo
          onChange={(e) => setValorConta(e.target.value)} // Atualiza o estado ao digitar
        />

        {/* Campo de entrada para a porcentagem da gorjeta */}
        <InputField
          label="Porcentagem da Gorjeta (%)" // Rótulo do campo
          value={porcentagemGorjeta} // Valor atual do campo
          onChange={(e) => setPorcentagemGorjeta(e.target.value)} // Atualiza o estado ao digitar
        />

        {/* Botão para calcular a gorjeta */}
        <Button
          text="Calcular" // Texto exibido no botão
          onClick={calcularGorjeta} // Chama a função calcularGorjeta ao clicar
        />

        {/* Componente para exibir os resultados do cálculo */}
        {resultado && (
          <ResultDisplay
            gorjeta={resultado.gorjeta} // Valor da gorjeta calculada
            total={resultado.total} // Valor total calculado
          />
        )}
      </div>
    </>
  );
}

// Exporta o componente TipCalculator para ser usado em outras partes da aplicação
export default TipCalculator;
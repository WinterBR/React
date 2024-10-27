import React, { useState, useEffect } from 'react';

export default function calcularIMC() {
  const [altura, setAltura] = useState('');
    const [peso, setPeso] = useState('');
    const [imc, setImc] = useState(null);
    const [texto, setTexto] = useState('');
  
    useEffect(() => {
      const calcularIMC = () => {
        if (!peso && !altura) {
          setTexto("Insira a altura e o peso");
          setImc(null);
        } else if (!peso) {
          setTexto("Insira o valor do peso");
          setImc(null);
        } else if (!altura) {
          setTexto("Insira o valor da altura");
          setImc(null);
        } else {
          const alturaNum = parseFloat(altura).toFixed(2);
          const pesoNum = parseFloat(peso).toFixed(0);
          const imcCalculado = pesoNum / (alturaNum ** 2);
          const imcArrend = imcCalculado.toFixed(1);
  
          setImc(imcArrend);
  
          if (imcArrend < 18.5) {
            setTexto("Abaixo do peso normal");
          } else if (imcArrend >= 18.5 && imcArrend <= 24.9) {
            setTexto("Peso normal");
          } else if (imcArrend >= 25 && imcArrend <= 29.9) {
            setTexto("Excesso de peso");
          } else if (imcArrend >= 30 && imcArrend <= 34.9) {
            setTexto("Obesidade I");
          } else if (imcArrend >= 35 && imcArrend <= 39.9) {
            setTexto("Obesidade II");
          } else if (imcArrend >= 40) {
            setTexto("Obesidade III");
          }
        }
      };
      calcularIMC();
    }, [altura, peso]);
  
    return (
      <div>
        <form id='Formulario'>
          <div className="laput">
            <label htmlFor="Formulario_altura">Sua altura:</label>
            <input id="Formulario_altura" type="number" step="0.01" placeholder="Altura em Metros" value={altura}
              onChange={(e) => setAltura(e.target.value)}
            />
          </div>
          <div className="laput">
            <label htmlFor="Formulario_peso">Seu peso:</label>
            <input id="Formulario_peso" type="number" step="0.1" placeholder="Peso em Quilos" value={peso}
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
        </form>
        <section id="IMC_final">
          {imc ? (
            <>
              <h3>Seu IMC é:</h3>
              <h2>{imc}</h2>
              <h2>{texto}</h2>
            </>
          ) : (
            <h2>{texto}</h2>
          )}
        </section>
      </div>
    );
};
    

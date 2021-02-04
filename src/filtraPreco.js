// Organize os produtos como mostrado no vídeo
// Mostre apenas produtos que forem mais caros que R$ 1500

import React from 'react';
const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const FiltraPreco = () => {
  const style1 = {
    fontWeight: 'bold',
    color: 'pink',
  };

  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$', '')) > 1500,
  );

  return (
    <div className="App">
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h2 style={style1}>{nome}</h2>
          <p>Preço: {preco}</p>
          <ul>
            {cores.map((cor, i) => (
              <li style={{ backgroundColor: cor, width: '500px' }} key={i}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default FiltraPreco;

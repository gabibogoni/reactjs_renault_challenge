import { useState } from 'react';
import './styles.css';

export const Form = () => {
  const [model, setModel] = useState('');
  const [color, setColor] = useState('');
  const [value, setValue] = useState('');
  const [image, setImage] = useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log({ model, color, value, image });
  };

  const armazenar = (chave, valor) => {
    localStorage.setItem(chave, valor);
  };

  const consultar = (chave) => {
    localStorage.getItem(chave);
  };

  const excluir = (chave) => {
    localStorage.remoceItem(chave);
  };

  return (
    <>
      <body className="container">
        <div className="form-container">
          <form onSubmit={handleSubmitForm} className="form">
            <h1 className="form-title">Cadastro de veículo</h1>

            <div className="input-field">
              <input
                type="text"
                placeholder="Informe o modelo"
                value={model}
                onChange={(event) => setModel(event.target.value)}
              />
              <div className="underline"></div>
            </div>

            <div className="input-field">
              <input
                type="string"
                placeholder="Informe o valor"
                value={value}
                onChange={(event) => setValue(event.target.value)}
              />
              <div className="underline"></div>
            </div>

            <div className="input-field">
              <input
                type="text"
                placeholder="Informe a cor"
                value={color}
                onChange={(event) => setColor(event.target.value)}
              />
              <div className="underline"></div>
            </div>

            <div className="input-field">
              <input
                type="file"
                value={image}
                onChange={(event) => setImage(event.target.value)}
              />
            </div>

            <button
              className="register-button"
              type="submit"
              onClick={() => armazenar('ls_model', model)}
            >
              Cadastrar
            </button>
          </form>
        </div>
      </body>
    </>
  );
};

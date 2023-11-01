import './styles.css';

export const CarSearch = () => {
  //console.log('**1', JSON.parse(localStorage.getItem('1')).model);
  return (
    <>
      <body className="container">
        <div className="search-container">
          <h1 className="search-title">Consulta de veículo</h1>
          <table border="1" className="nitro-offscreen">
            <tbody>
              <tr>
                <th>Modelo</th> <th>Valor</th> <th>Cor</th> <th>Imagem</th>
              </tr>

              <tr>
                <td>{JSON.parse(localStorage.getItem('1')).model}</td>
                <td>{JSON.parse(localStorage.getItem('1')).value}</td>
                <td>{JSON.parse(localStorage.getItem('1')).color}</td>
                <td>{JSON.parse(localStorage.getItem('1')).image}</td>
              </tr>

              <tr>
                <td>{JSON.parse(localStorage.getItem('2')).model}</td>
                <td>{JSON.parse(localStorage.getItem('2')).value}</td>
                <td>{JSON.parse(localStorage.getItem('2')).color}</td>
                <td>{JSON.parse(localStorage.getItem('2')).image}</td>
              </tr>

              <tr>
                <td>{JSON.parse(localStorage.getItem('3')).model}</td>
                <td>{JSON.parse(localStorage.getItem('3')).value}</td>
                <td>{JSON.parse(localStorage.getItem('3')).color}</td>
                <td>{JSON.parse(localStorage.getItem('3')).image}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </body>
    </>
  );
};

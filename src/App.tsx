import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Time from './Componentes/Time';
import Rodape from './Componentes/Rodape';
import { IColaborador } from './compartilhado/interfaces/IColaborador';

function App() {

  const times = [
    {
      nome: 'Pequeno porte',
      corPrimaria: '#F0685C',
      corSecundaria: '#FFD1CD'
    },
    {
      nome: 'Médio porte',
      corPrimaria: '#FFC24B',
      corSecundaria: '#FFDC98'
    },
    {
      nome: 'Grande porte',
      corPrimaria: '#A6D157',
      corSecundaria: '#EAF4A3'
    },
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])

  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner 
        enderecoImagem="/imagens/banner.png"
        textoAlternativo="Banner principal da página do Organo"
      />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   
      <Rodape />
    </div>
  );
}

export default App;
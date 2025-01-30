import { Routes, Route } from 'react-router-dom'; // Certifique-se de importar isso
import Home from '../pages/Home'; // Verifique se os caminhos estão corretos
import Visualization from '../pages/Visualization.js'; // Verifique o caminho
import newAccount from '../pages/newAccount'; // Verifique o caminho

const ConfigRotes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/visualization" element={<Visualization />} />
      <Route path="/NovaConta" element={<newAccount />} />
    </Routes>
  );
};

export default ConfigRotes;

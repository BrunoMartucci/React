import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './views/Home/';
import { Listar } from './views/Cliente/Listar/';
import { ListarP } from './views/Pedido/ListarCompras';
import { ListarS } from './Servico/ListarProduto';
import { Menu } from './components/Menu';
import { Item} from './Produto/Item';
import { Cadastrar } from './Servico/Cadastrar';


function App() {
  return (
    <div>
      <Router>
        <Menu/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route  path="/listar-cliente" component={Listar}/>
          <Route  path="/listar-compra" component={ListarP}/> 
          <Route  path="/listar-produto" component={ListarS}/>
          <Route  path="/listar-compra/:id" component={Item}/>
          <Route  patch="/cadastrarproduto" component={Cadastrar}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;

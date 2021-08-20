import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'

import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

const App = () => {

  const componenteFeedBack = <Feedback funcaoOk={() => alert("Agradecemos a confirmação")} textoOk="Já foi entregue" funcaoNOk={() => alert("Vamos verificar")} textoNOk="Ainda não foi entregue"/>

  return (
    <div className="container border mt-2">

      <div className="row border-bottom m-2">
        <h1 className="display-5 text-center">Seus pedidos</h1>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="22/04/2021">
            <Pedido icone="fas fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400 - SATA"/>
            {componenteFeedBack}
          </Cartao>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="20/04/2021">
            <Pedido icone="fas fa-book fa-2x" titulo="Livro" descricao="Concrete Mathematics - Donald Knuth"/>
            {componenteFeedBack}
          </Cartao>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 m-2">
          <Cartao cabecalho="21/04/2021" >
            <Pedido icone="fas fa-laptop fa-2x" titulo="Notebook" descricao="Notebook Dell - 8Gb - 15"/>
            {componenteFeedBack}
          </Cartao>
        </div>
      </div>

    </div> 
  )
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

import React from 'react';
import {
  MdAddCircleOutline,
  MdRemoveCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
                alt="tenis"
              ></img>
            </td>
            <td>
              <strong>Tenis Nike</strong>
              <span>320,00</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline
                    size={20}
                    color="#7159c1"
                  ></MdRemoveCircleOutline>
                </button>

                <input type="number" readOnly value={1}></input>

                <button type="button">
                  <MdAddCircleOutline
                    size={20}
                    color="#7159c1"
                  ></MdAddCircleOutline>
                </button>
              </div>
            </td>
            <td>
              <strong>640,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="#7159c1"></MdDelete>
              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1992,20</strong>
        </Total>
      </footer>
    </Container>
  );
}

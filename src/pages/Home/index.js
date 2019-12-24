import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
          alt="Tenis"
        ></img>
        <strong>Tênis Nike</strong>
        <span>350,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"></MdAddShoppingCart>3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
          alt="Tenis"
        ></img>
        <strong>Tênis Nike</strong>
        <span>350,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"></MdAddShoppingCart>3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
          alt="Tenis"
        ></img>
        <strong>Tênis Nike</strong>
        <span>350,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff"></MdAddShoppingCart>3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
          alt="Tenis"
        ></img>
        <strong>Tênis Nike</strong>
        <span>350,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
          alt="Tenis"
        ></img>
        <strong>Tênis Nike</strong>
        <span>350,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-shox-nz-eu-masculino/14/D12-9970-014/D12-9970-014_detalhe2.jpg?ims=326x"
          alt="Tenis"
        ></img>
        <strong>Tênis Nike</strong>
        <span>350,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff">
              3
            </MdAddShoppingCart>
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

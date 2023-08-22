import Layout from '../components/layout';

export default function Practice() {
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const listItems = products.map(product =>
    <li key={product.id}>
      {product.title}
    </li>
  );
  
  return (
    <Layout>
      <ul>{listItems}</ul>
    </Layout>
    
  );    
}


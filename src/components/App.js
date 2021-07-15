import { useEffect } from 'react';
import { Header } from './Header';
import { CategoryList } from './CategoryList';
import informations from '../apis/informations';

function App() {
  useEffect(() => {
    let data = {
      headers: {
        'X-ACCESS-TOKEN': '0f28d368-4347-4653-b4b6-94392e644447',
        'content-type': 'application/json',
      },
    };

    informations.get(`/category`, data).then((res) => {
      // console.log(res);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <CategoryList />
    </div>
  );
}

export default App;

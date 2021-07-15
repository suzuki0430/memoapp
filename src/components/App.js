import { Header } from './Header';
import { CategoryList } from './CategoryList';
import { MemoItem } from './MemoItem';
import Grid from '@material-ui/core/Grid';

function App() {
  return (
    <div className="container">
      <Header />

      <Grid container spacing={3}>
        <Grid item xs={3}>
          <CategoryList />
        </Grid>
        <Grid item xs={9}>
          <MemoItem />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;

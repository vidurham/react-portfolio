import Header from "./components/Header";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Works from "./components/Works";
import About from "./components/About";
import Grid from '@mui/material/Grid';

function App() {
  return (
    <main>
      <Header></Header>
      <Grid
        container
        marginTop={7}
      >
        <About />
      </Grid>
      <Footer></Footer>
      
    </main>

  );
}

export default App;

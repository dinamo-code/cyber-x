
import { About,Contact,Footer,Head,Acountmanage,Hero,Products,Productscards,Sales,Sponsored,State } from "./components" ;
function App() {
  return (
    <>
    <div className="main">
    <div className="head">
        <Head />
    </div>
    <div className="rest">
        <div>
        <Hero />
        <Acountmanage />
        <Products />
        <Productscards />
        <Sales />
        <State />
        <About />
        <Contact />
        <Sponsored />
        </div>
        <div className="footer">
        <Footer />
        </div>
    </div>
    </div>

    </>
  )
}

export default App

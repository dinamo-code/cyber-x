import { About,Contact,Footer,Head,Hero,Products,Productscards,Sales,Sponsored,State } from "./components" ;
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

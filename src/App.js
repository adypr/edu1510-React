
import './App.css';
import {Route, BrowserRouter, Link} from "react-router-dom";
import {Header} from "./components/Header";
import {Slider} from "./components/Slider";
import {Service} from "./components/Service";
import {Petcare} from "./components/Petcare";
import {Adapt} from "./components/Adapt";
import {Testmonial} from "./components/Testmonial";
import {Team} from "./components/Team";
import {Contact} from "./components/Contact";
import {Footer} from "./components/Footer";
import {Bradcam} from "./components/Bradcam";
import {Blog} from "./components/Blog";
import {Bradcamblog} from "./components/Bradcam-blog";
import {Bradcamsingleblog} from "./components/Bradcam-single-blog";
import {Post} from "./components/Post";
import {Bradcamelements} from "./components/Bradcam-elements";
import {Sampletext} from "./components/Sampletext";
import {Samplebuttons} from "./components/Samplebuttons";
import {Samplealign} from "./components/Samplealign";
import {Bradcamservices} from "./components/Bradcam-services";
import {Bradcamcontacts} from "./components/Bradcam-contacts";
import {Contacts} from "./components/Contacts";

function App() {
  return (
    <div>

        <BrowserRouter>
            <Header/>

          <Route exact path="/" component={()=><div>
              <Slider/>
              <Service/>
              <Petcare/>
              <Adapt/>
              <Testmonial/>
              <Team/>
              <Contact/>
          </div>
          }/>
          <Route path="/about" component={()=>
              <div>
                  <Bradcam/>
                  <Petcare/>
                  <Adapt/>
                  <Testmonial/>
                  <Team/>
                  <Contact/>
              </div>
          }/>
            <Route path="/blog" component={()=>
                <div>
                    <Bradcamblog/>
                    <Blog/>
                </div>
            }/>
            <Route path="/single-blog" component={()=>
                <div>
                    <Bradcamsingleblog/>
                    <Post/>
                </div>
            }/>
            <Route path="/elements" component={()=>
                <div>
                    <Bradcamelements/>
                    <Sampletext/>
                    <Samplebuttons/>
                    <Samplealign/>
                </div>
            }/>
            <Route path="/services" component={()=>
                <div>
                    <Bradcamservices/>
                    <Service/>
                    <Testmonial/>
                    <Team/>
                    <Contact/>
                </div>
            }/>
            <Route path="/contacts" component={()=>
                <div>
                    <Bradcamcontacts/>
                    <Contacts/>
                </div>
            }/>
          <Footer/>
        </BrowserRouter>

    </div>

  );
}

export default App;

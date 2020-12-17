
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
import {Post} from "./components/Post";
import {Sampletext} from "./components/Sampletext";
import {Samplebuttons} from "./components/Samplebuttons";
import {Samplealign} from "./components/Samplealign";
import {Contacts} from "./components/Contacts";
import React from "react";

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
                  <Bradcam bradcamTitle="About us" />
                  <Petcare/>
                  <Adapt/>
                  <Testmonial/>
                  <Team/>
                  <Contact/>
              </div>
          }/>
            <Route path="/blog" component={()=>
                <div>
                    <Bradcam bradcamTitle="Blog" />
                    <Blog/>
                </div>
            }/>
            <Route path="/single-blog" component={()=>
                <div>
                    <Bradcam bradcamTitle="Single Blog" />
                    <Post/>
                </div>
            }/>
            <Route path="/elements" component={()=>
                <div>
                    <Bradcam bradcamTitle="Elements" />
                    <Sampletext/>
                    <Samplebuttons/>
                    <Samplealign/>
                </div>
            }/>
            <Route path="/services" component={()=>
                <div>
                    <Bradcam bradcamTitle="Services" />
                    <Service/>
                    <Testmonial/>
                    <Team/>
                    <Contact/>
                </div>
            }/>
            <Route path="/contacts" component={()=>
                <div>
                    <Bradcam bradcamTitle="Contact" />
                    <Contacts/>
                </div>
            }/>
          <Footer/>
        </BrowserRouter>

    </div>

  );
}

export default App;

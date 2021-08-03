import React,{useState,useEffect} from 'react'
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import {Container,Row,Col} from 'react-bootstrap'
import AddArticle from './components/AddArticle';
import ArticleLists from './components/ArticleLists';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import UserList from './components/UserList';
import AddConsumer from './components/AddConsumer';
import EditConsumer from './components/EditConsumer';
import Faturat from './components/Faturat';
import FaturaCard from './components/FaturaCard';
import Login from './components/Login';
import RegistrationForm from './components/RegistrationForm';
import NotFound from './components/NotFound';
import Searchdata from './components/Searchdata';
import  PrivateRoutes  from './components/PrivateRoutes';
 

const App=({props})=> {
const [loading,setLoading]=useState(true);
useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 2500);
})

const marginTop={
marginTop:"20px"
};
const nav={
marginBottom:"30px"
}
return (

<Router >

  <Container>
    <Row>
      <Col lg={12} style={marginTop}>
        <Switch>
        <Route  exact path="/" component={Login} >
          <Login/>
        </Route>
        <Route path="/Registration">
    <RegistrationForm/>
  </Route>
  
  <div style={nav}>
    
      <NavigationBar/>
      <br/>
      <br/>
      <br/>
      
    
<PrivateRoutes   path="/bleresi" component={props=><AddConsumer {...props}/>}/>   
<PrivateRoutes  path="/faturaCard/:id" component={props=><FaturaCard {...props}/>}/>   
<PrivateRoutes  path="/add" component={props=><AddArticle {...props}/>}/>   
<PrivateRoutes  path="/lists" component={ArticleLists}  component={props=><ArticleLists {...props}/>}/> 
<PrivateRoutes   path="/edit/:id" component={props=><AddArticle {...props}/>}/>
<PrivateRoutes   exact path="/Welcome"  component={props => <Welcome {...props}/>}  />
<PrivateRoutes    path="/lista/bleresi" component={props=><UserList {...props}/>}  />
<PrivateRoutes   path="/editt/bleresi/:id"  component={props=><EditConsumer {...props}/>}  />
<PrivateRoutes  path="/faturat"   component={props=><Searchdata {...props}/>}  /> 


  </div>
  

  <Route  component={NotFound}>
    
    </Route> 
        </Switch>
  
      </Col>
    </Row>
    

  </Container>


</Router>

);
}

export default App;

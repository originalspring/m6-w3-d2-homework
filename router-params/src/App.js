import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
  useParams,
  Outlet
} from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";


export default function App() {
  //Insert router, links here
   return(
   <Router>
      <nav>
          <Link to='/Netflix' >
             <img className="img img.nf"
             src="https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg"/>
          </Link>
          <Link to='/HBO'>
            <img className="img img.hb"
             src="https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg"/>
          </Link>
           <Link to='/Hulu' >
            <img className="img img.hl"
             src="https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg"/>
          </Link>
          <Link to='/Prime'>
            <img className="img img.pr"
             src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png"/>
          </Link>
      </nav>


    <Routes>
       <Route path="/" element={<Posts />}>
          {/* <Route path="posts" element={<PostLists />}/> */}
          <Route path=":slug" element={<PostList />}/>      
      </Route>
      
    </Routes>
    </Router>);
}

const picList = {
  'Netflix':{
    src :"https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
    title:"Netflix"
  },
  'HBO':{
    src :"https://upload.wikimedia.org/wikipedia/commons/1/17/HBO_Max_Logo.svg",
    title:"HBO"
  },
  'Hulu':{
    src :"https://upload.wikimedia.org/wikipedia/commons/e/e4/Hulu_Logo.svg", 
    title:"Hulu"
  },
  'Prime':{
    src :"https://upload.wikimedia.org/wikipedia/commons/f/f1/Prime_Video.png", 
    title:"Prime"
  }
  }

  function Posts(){
    return(
      <div>
        <h2>TV APPs</h2>
        <Outlet />
      </div>
    );
  }

function PostList() {
const{slug}=useParams();
    const post = picList[slug];
    const {title}  = post;
  // Below this comment, there's one major key script missing
  

  return (
    <div>

    
        {Object.entries(picList).map(([slug,{title}])=>(
          <div key={slug}>
            <Link to={`/${slug}`}>
            </Link>
          </div>

        ))}

      <h3>You Selected:<span>{title}</span></h3>
    </div>
  );
}


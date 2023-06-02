import styles from './App.module.css';

import { Route, Routes } from 'react-router-dom';
import Nav from './layout/Nav';
import Header from './layout/Header';
import ListContainer from './layout/ListContainer';
import Footer from './layout/Footer';
import Issue from './pages/Issue';
import Code from './pages/Code'
import PullRequests from './pages/PullRequests'
import Actions from './pages/Actions';
import Project from './pages/Project';
import Wiki from './pages/Wiki';
import Security from './pages/Security';
import Insights from './pages/Insights';
import Setting from './pages/Setting';


function App() {

  //'Code', 'Issues', 'Pull requests', 'Actions', 'Project', 'Wiki', 'Security', 'Insights', 'Setting'
  return (
    <>
      <Nav />
      <Header />
      <Routes>
        <Route path='/' element={<Issue />} />
        <Route path='/code' element={<Code />} />
        <Route path='/issue' element={<Issue />} />
        <Route path='/pulls' element={<PullRequests />} />
        <Route path='/actions' element={<Actions />} />
        <Route path='/project' element={<Project />} />
        <Route path='/wiki' element={<Wiki />} />
        <Route path='/security' element={<Security />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </>

  );
}
export default App;



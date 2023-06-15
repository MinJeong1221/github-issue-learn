import styles from './App.module.css';

import { Route, Routes } from 'react-router-dom';
import Nav from './layout/Nav';
import Header from './layout/Header';
import Issue from './pages/Issue';
import Code from './pages/Code'
import PullRequests from './pages/PullRequests'
import Actions from './pages/Actions';
import Project from './pages/Project';
import Wiki from './pages/Wiki';
import Security from './pages/Security';
import Insights from './pages/Insights';
import Setting from './pages/Setting';
import CreateIssue from './pages/CreateIssue';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { GITHUB_API } from './api';
import { UserContext } from './context/UserContext';


function App() {

  const [user, setUser] = useState();

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const data = await axios.get(`${GITHUB_API}/user`, {
      headers: {
        Authorization: process.env.REACT_APP_GITHUB_TOKEN,
        "Content-Type": "applications/json",
      },
    });
    setUser(data.date);
  }

  console.log({ user });



  //'Code', 'Issues', 'Pull requests', 'Actions', 'Project', 'Wiki', 'Security', 'Insights', 'Setting'
  return (
    <UserContext.Provider value={{ user }}>
      <Nav />
      <Header />
      <Routes>
        <Route path='/' element={<Issue />} />
        <Route path='/code' element={<Code />} />
        <Route path='/issue' element={<Issue />} />
        <Route path='/new' element={<CreateIssue />} />
        <Route path='/pulls' element={<PullRequests />} />
        <Route path='/actions' element={<Actions />} />
        <Route path='/project' element={<Project />} />
        <Route path='/wiki' element={<Wiki />} />
        <Route path='/security' element={<Security />} />
        <Route path='/insights' element={<Insights />} />
        <Route path='/setting' element={<Setting />} />
      </Routes>
    </UserContext.Provider>

  );
}
export default App;



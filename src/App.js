import { Route, Routes } from "react-router-dom";
import Nav from "./layout/Nav";
import Header from "./layout/Header";
import Issue from "./pages/Issue";
import Code from "./pages/Code";
import PullRequests from "./pages/PullRequests";
import Actions from "./pages/Actions";
import Project from "./pages/Project";
import Wiki from "./pages/Wiki";
import Security from "./pages/Security";
import Insights from "./pages/Insights";
import Setting from "./pages/Setting";
import CreateIssue from "./pages/CreateIssue";
import { QueryClient, QueryClientProvider } from "react-query";

// Context Api - 전역적인 정보 prop drilling 없이 사용할때
// => 굳이 사용안해도 된다면,
// hooks로 빼내어 사용한다.
// => hooks로 선언한 부분이 반복적으로 네트워크 콜을 유발한다면, cache를 통해 개선해볼 수 있을것.

//캐시 - 쉽게 변하지 않는 데이터르 ㄹ임시적으로 제장해두는 부분 User
const queryClient = new QueryClient();

function App() {
  //'Code', 'Issues', 'Pull requests', 'Actions', 'Project', 'Wiki', 'Security', 'Insights', 'Setting'
  return (
    <QueryClientProvider client={queryClient}>
      <Nav />
      <Header />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/code" element={<Code />} />
        <Route path="/issue" element={<Issue />} />
        <Route path="/new" element={<CreateIssue />} />
        <Route path="/pulls" element={<PullRequests />} />
        <Route path="/actions" element={<Actions />} />
        <Route path="/project" element={<Project />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/security" element={<Security />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </QueryClientProvider>
  );
}
export default App;

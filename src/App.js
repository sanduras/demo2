import Layout from "./components/layout/Layout";
import Home from "./pages/home";
import Blog from "./pages/blog/Blog";
import Team from "./pages/team/Team";
import Services from "./pages/services/Services";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Route, Routes , Navigate, HashRouter ,MemoryRouter } from "react-router-dom";
import BlogId from "./pages/blog/BlogId";
import BlogEdit from "./pages/blog/BlogEdit";
import Dashboard from "./pages/admin/Dashboard";
import AdminLayout from "./components/layout/AdminLayout";
import Users from "./pages/admin/users/Users";
import Content from "./pages/admin/content/Content";
import Monitoring from "./pages/admin/monitoring/Monitoring";


function App() {
  return (
    <>
    <MemoryRouter >
      
      {/* <Layout> */}
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/content" element={<Content />} />
        <Route path="/monitoring" element={<Monitoring />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      {/* </Layout> */}
    </MemoryRouter>
    
    </>
    

  );
}

export default App;

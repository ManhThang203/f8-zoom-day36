import { HashRouter, Routes, Route } from "react-router";
// Layout
import DefaultLayout from "../../layout/DefaultLayout";
import AuthLayout from "../../layout/AuthLayout";
import AdminLayout from "../../layout/AdminLayout";
// page
import Home from "../../page/Home";
import About from "../../page/About";
import Posts from "../../page/Posts";
import PostDetail from "../../page/PostDetail";
import Contact from "../../page/Contact";
import Privacy from "../../page/Privacy";
import Login from "../../page/Login";
import Register from "../../page/Register";
import ForgotPassword from "../../page/ForgotPassword";
import Dashboard from "../../page/Dashboard";
import Users from "../../page/Users";
import Settings from "../../page/Settings";
import NotFound from "../../page/NotFound";
import SomeLayout from "../../layout/SomeLayout";
// Component
import ScrollToTop from "../ScrollToTop";
function AppRoutes() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SomeLayout />}>
          {/* Default Layout */}
          <Route element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="posts" element={<Posts />} />

            <Route path="posts/:id" element={<PostDetail />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
          </Route>
          {/* Auth Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/forgotpassword" element={<ForgotPassword />}></Route>
          </Route>
          {/* Admin Layout */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          {/* No Layout */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
export default AppRoutes;

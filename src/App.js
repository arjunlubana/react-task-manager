import Layout from "./components/Layout";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Layout>
        </Layout>
      </div>
    </BrowserRouter>
  );
}

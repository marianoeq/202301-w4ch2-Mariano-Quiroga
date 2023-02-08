import { Form } from "../../Form/form";
import { Header } from "../../../pages/header/header";
import { Footer } from "../../../pages/footer/footer";
import "./App.css";

export function App() {
  return (
    <div className="App">
      <Header></Header>
      <Form></Form>
      <Footer></Footer>
    </div>
  );
}

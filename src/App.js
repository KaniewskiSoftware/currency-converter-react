import "./App.css";
import Label from "./Label";
import Input from "./Input";
import Container from "./Container";
import { Fragment } from "react";

function App() {
  return (
    <Container>
      <Form>
        <Label title={"Kwota:"} body={<Input />} />
        <Label title={"Waluta początkowa"} body={<Select />} />
        <Label title={"Waluta końcowa"} body={<Select />} />
       </Form>
    </Container>
  );
}

export default App;

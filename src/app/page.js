import Image from "next/image";
import Table from "./components/Table";
import Container from "./components/Container";

export default function Home() {
  return (
    <main>
      <Container>
          <Table/>
      </Container>
    </main>  
  );
}

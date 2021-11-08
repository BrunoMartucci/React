import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                </div>
                <div className="p-2">
                    <a href="/listar-cliente"
                        className="btn btn-outline-success btn-sm">Clientes</a>
                    <a href="/listar-compra"
                        className="btn btn-outline-success btn-sm">Compras</a>
                    <a href="/listar-produto"
                        className="btn btn-outline-success btn-sm">Produtos</a>

                </div>


            </Container>
        </div>
    );
};
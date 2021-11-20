import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransctionsTable() {

    useEffect(() => {
        api('/transctions')
        .then(response => response.data)
    },[])
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolmimento Web</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>25/10/1985</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdrow">R$ 2.000</td>
                        <td>Casa</td>
                        <td>25/10/1985</td>
                    </tr>
                    
                </tbody>
            </table>
        </Container>
    );
}
import { Summary } from "../Summary";
import { TransctionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Deshboard(){
    return(
        <Container>
            <Summary />
            <TransctionsTable />
        </Container>
    );
}
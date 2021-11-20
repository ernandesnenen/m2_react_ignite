import { Summary } from "../Summary";
import { TransctionsTable } from "../TransctionsTable";
import { Container } from "./styles";

export function Deshboard(){
    return(
        <Container>
            <Summary />
            <TransctionsTable />
        </Container>
    );
}
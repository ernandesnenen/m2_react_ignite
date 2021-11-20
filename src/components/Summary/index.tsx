import { Container } from "./styles";
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import total from '../../assets/total.svg'

export function Summary(){
    return(
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img  src={income} alt="Entrada"/>
                </header>
                <strong>R$ 1000</strong>
            </div>
            <div>
                <header>
                    <p>Saída</p>
                    <img  src={outcome} alt="Saída"/>
                </header>
                <strong>R$ 500</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img  src={total} alt="Total"/>
                </header>
                <strong>R$ 500</strong>
            </div>


        </Container>
    );
}
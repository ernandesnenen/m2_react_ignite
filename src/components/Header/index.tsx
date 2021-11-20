import logo from '../../assets/logo.svg'
import { Container, Content} from './styles'
interface HeaderModalProps{
    onOpenNewTransactionModal:()=> void;
}



export function Header({onOpenNewTransactionModal} : HeaderModalProps){
   
    // ------------------------------------------------------------------------------------
    return(
        <Container> 
            <Content>
                <img src={logo} alt="logo dt money"/>
                <button type='button' onClick={onOpenNewTransactionModal}> new transection </button>
               
            </Content>
        </Container>
    )
}
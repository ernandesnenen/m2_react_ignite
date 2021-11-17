import logo from '../../assets/logo.svg'
import { Contianer, Content} from './styles'
export function Header(){
    return(
        <Contianer>
            <Content>
                <img src={logo} alt="logo dt money"/>
                <button type='button'> new transection </button>
            </Content>
        </Contianer>
    )
}
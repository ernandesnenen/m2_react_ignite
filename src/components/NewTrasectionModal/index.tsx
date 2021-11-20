import Modal from 'react-modal'
import { Container,TypeTrasaction } from './styles';
import iconClose from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'

interface NewTrasnsationModalProps{
    isOpen: boolean;
    onRequestClose: ()=>void;
}

export function NewTransactionModal ({isOpen, onRequestClose} : NewTrasnsationModalProps){
    return(
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='modal-react-overlay'
    className='modal-react'
    >
        <Container>
            <h2>new transaction</h2>
            <button type="button" className="iconClose" onClick={onRequestClose}>
                <img src={iconClose} alt="close Modal" />
            </button>
            <input type="text"  placeholder='title'/>
            <input type="number"  placeholder='value'/>
            <TypeTrasaction>
                <button type="button">
                    <img src={income} alt="close Modal" />
                    <span>input</span>
                </button>
                <button type="button">
                    <img src={outcome} alt="close Modal" />
                    <span>output</span>
                </button>
            </TypeTrasaction>
            <input type="text"  placeholder='category'/>
            <button type='submit'>                
                register
            </button>
 
        </Container>
    </Modal>
    );

}
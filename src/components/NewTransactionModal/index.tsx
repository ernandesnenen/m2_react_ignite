import Modal from 'react-modal'
import { Container,TypeTrasaction, RadioBox } from './styles';
import iconClose from '../../assets/close.svg'
import income from '../../assets/income.svg'
import outcome from '../../assets/outcome.svg'
import { FormEvent, useContext, useState } from 'react';

import { TransactionContext } from '../../Context/TransactionsContext';

interface NewTrasnsationModalProps{
    isOpen: boolean;
    onRequestClose: ()=>void;
}

export function NewTransactionModal ({isOpen, onRequestClose} : NewTrasnsationModalProps){
    const { createTransaction } = useContext(TransactionContext)

    const [type, setType] = useState('deposit')
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

 async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault()
  await createTransaction({
      title,
      amount: value,
      type,
      category
  })  ;

  setTitle('')
  setValue(0)
  setType('deposit')
  setCategory('')

  onRequestClose();
 }

// --------------------------------------------------------------------------------------------------    
    return(
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName='modal-react-overlay'
    className='modal-react'
    >
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>new transaction</h2>
            <button type="button" className="iconClose" onClick={onRequestClose}>
                <img src={iconClose} alt="close Modal" />
            </button>
            <input type="text"
              placeholder='title'
              value= {title}
              onChange = {event => setTitle(event.target.value)}
              />
            <input type="number"
              placeholder='value'
              value= {value}
              onChange = {event =>setValue(Number(event.target.value))}
              />
            <TypeTrasaction>
                <RadioBox 
                type='button'
                onClick={()=> { setType('deposit') }}
                isActive={type==='deposit'}
                activeColor='green'
                >
                    <img src={income} alt="close Modal" />
                    <span>input</span>
                </RadioBox>
                
                <RadioBox 
                type='button'
                onClick={()=>{setType('withdraw')}}
                isActive={type==='withdraw'}
                activeColor='red'
                >
                    <img src={outcome} alt="close Modal" />
                    <span>output</span>
                </RadioBox>
            </TypeTrasaction>
            <input type="text"
              placeholder='category'
              value= {category}
              onChange = {event => setCategory(event.target.value)}
              />
            <button type='submit'>                
                register
            </button>
 
        </Container>
    </Modal>
    );

}
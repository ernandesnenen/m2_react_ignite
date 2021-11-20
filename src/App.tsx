
import { GlobalStyle } from './styles/global';
import {Header} from './components/Header'
import { Deshboard } from './components/Deshboard';
import { NewTransactionModal } from './components/NewTrasectionModal';
import Modal from 'react-modal'
import { useState } from 'react'


Modal.setAppElement('#root');
export function App() {
  const [isNewTransactionModalOpen, setIsTransactionModal] = useState(false)

  function handleOpenNewIstransactionModal () {
      setIsTransactionModal(true);
  }
  function handleCloseIstransactionModal () {
      setIsTransactionModal(false);
  }
// ---------------------------------------------------------------------------------------
  return (
    <div className="App">
        <Header  onOpenNewTransactionModal={handleOpenNewIstransactionModal}/>
        <Deshboard />
       <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseIstransactionModal}/>
       <GlobalStyle /> 
    </div>
  );
}



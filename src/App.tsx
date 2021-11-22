
import { GlobalStyle } from './styles/global';
import {Header} from './components/Header'
import { Deshboard } from './components/Deshboard';
import { NewTransactionModal } from './components/NewTransactionModal';
import Modal from 'react-modal'
import { useState } from 'react'
import { TransactionsProvider} from './Context/TransactionsContext';



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
    <TransactionsProvider >
        <Header  onOpenNewTransactionModal={handleOpenNewIstransactionModal}/>
        <Deshboard />
       <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseIstransactionModal}/>
       <GlobalStyle />       
    </TransactionsProvider>
  );
}



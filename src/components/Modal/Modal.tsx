import React, { useContext } from 'react'
import Modal from 'react-modal'
import { ListContext } from '../../ListContext'

Modal.setAppElement('#root')

const ModalComponent = () => {
  const [state, setState] = useContext(ListContext)
  return (
    <Modal
      isOpen={state.isOpen}
      onRequestClose={() => setState((prevState: any) => ({ ...prevState, isOpen: false }))}
      style={{
        overlay: {
          backgroundColor: 'gray',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        content: {
          width: '80%',
          maxHeight: '90vh',
          position: 'static',
          overflowY: 'auto'
        }
      }}
    >
      <h2>{state.selectedCard.title}</h2>
      <div style={{ marginBottom: '20px' }}>
        <a href={state.selectedCard.link}>Link to question on StackOverflow</a>
      </div>
      <p dangerouslySetInnerHTML={{ __html: state.selectedCard.body }} />
      <button
        onClick={() => setState((prevState: any) => ({ ...prevState, isOpen: false }))}
      >Close</button>
    </Modal>

  )
}

export default ModalComponent

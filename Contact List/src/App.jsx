import ContactList from './components/ContactList'
import SelectedContact from './components/SelectedContact.jsx'
import { useState } from 'react'

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)
  return(
    <>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} setSelectedContactId={setSelectedContactId}/>
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId}/>
      )}
    </>
  )
}

export default App

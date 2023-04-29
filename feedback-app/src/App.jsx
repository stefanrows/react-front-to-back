import "./App.css"
import Header from "./components/Header"
import FeedbackItem from "./components/FeedbackItem"

function App() {
  return (
    <>
      <Header text='Feedback UI' />
      <div className='container'>
        <FeedbackItem />
      </div>
    </>
  )
}

export default App

import './App.css'
import { Footer } from '@components/Footer'
import { Header } from '@components/Header'
import { Form } from './components/Form'
import { TodoList } from './components/TodoList'

function App() {
    return (
        <>
            <Header />
            <main>
                <Form />
                <TodoList />
            </main>
            <Footer />
        </>
    )
}

export default App

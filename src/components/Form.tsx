import { useTodoStore } from '@/state/todoStore'
import { useState } from 'react'
import { TiPlus } from 'react-icons/ti'
import styled from 'styled-components'

export const Form = () => {
    const [text, setText] = useState('')
    const addTodo = useTodoStore((state) => state.addTodo)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim()) {
            addTodo(text)
            setText('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <Wrapper>
                <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Something to do?"
                />
                <Button type="submit">
                    <span>Add</span>
                    <TiPlus className="plus_icon" />
                </Button>
            </Wrapper>
        </form>
    )
}

const Wrapper = styled.div`
    position: relative;
    margin: auto;
    display: flex;
    align-items: center;
    max-width: 750px;
`

const Input = styled.input`
    height: 60px;
    width: 100%;
    background-color: var(--todo-secondary-dark);
    border: none;
    font-size: 1.2rem;
    border-radius: 30px;
    padding-left: 2.5rem;
    color: var(--todo-light);
    caret-color: var(--todo-primary);

    &::placeholder {
        color: var(--todo-darker);
    }

    &:focus {
        outline: none;
    }
`

const Button = styled.button`
    position: absolute;
    right: 0.9rem;
    background-color: var(--todo-darker);
    color: var(--todo-light);
    padding: 0.7rem 1.2rem 0.7rem 1.6rem;
    border: none;
    border-radius: 25px;
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: bold;

    span {
        margin-right: 0.5rem;
        color: var(--todo-secondary-light);
    }

    .plus_icon {
        color: var(--todo-primary);
    }
`

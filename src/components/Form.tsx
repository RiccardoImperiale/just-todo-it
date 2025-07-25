import { useState, useEffect } from 'react'
import { useTodoStore } from '@/state/todoStore'
import { TiPlus } from 'react-icons/ti'
import styled from 'styled-components'
import { useMutation } from '@tanstack/react-query'
import { generateRandomTodo } from '@/services/api'

export const Form = () => {
    const [text, setText] = useState('')
    const addTodo = useTodoStore((state) => state.addTodo)

    const {
        mutate: generateTodo,
        error,
        isPending,
    } = useMutation({
        mutationFn: generateRandomTodo,
        onSuccess: (data) => {
            const generated = data.todo
            setText(generated)
        },
        onError: (error) => {
            console.error('Failed to generate random todo:', error)
        },
    })

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (text.trim()) {
            addTodo(text)
            setText('')
        }
    }

    const thinkingText = useThinkingAnimation(isPending)

    let displayText = isPending ? thinkingText : text
    if (error) displayText = error.message + ' 😢'

    return (
        <form onSubmit={handleSubmit}>
            <Wrapper>
                <Label htmlFor="todoInput">New todo</Label>
                <Input
                    id="todoInput"
                    value={displayText}
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    placeholder="Something to do?"
                    autoComplete="off"
                />
                <Buttons>
                    <Button type="button" onClick={() => generateTodo()}>
                        <span>Generate Random</span>
                        <TiPlus className="plus_icon" />
                    </Button>
                    <Button type="submit">
                        <span>Add</span>
                        <TiPlus className="plus_icon" />
                    </Button>
                </Buttons>
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

const Label = styled.label`
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
    white-space: nowrap;
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
    padding-right: 18.2rem;
    overflow: auto;

    &::placeholder {
        color: var(--todo-darker);
    }

    &:focus {
        outline: none;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 0.4rem;
    position: absolute;
    right: 0.9rem;
`

const Button = styled.button`
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
function useThinkingAnimation(active: boolean, interval = 500) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!active) {
            setCount(0)
            return
        }

        const id = setInterval(() => {
            setCount((prev) => (prev === 3 ? 0 : prev + 1))
        }, interval)

        return () => clearInterval(id)
    }, [active, interval])

    return `🤔 ${'💭'.repeat(count)}`
}

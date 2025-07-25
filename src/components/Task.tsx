import styled from 'styled-components'
import { FaRegTrashCan } from 'react-icons/fa6'
import { MdCheckCircle, MdRadioButtonUnchecked } from 'react-icons/md'
import { useTodoStore, type Todo } from '@/state/todoStore'

export const Task = ({ todo }: { todo: Todo }) => {
    const toggleTodo = useTodoStore((state) => state.toggleTodo)
    const removeTodo = useTodoStore((state) => state.removeTodo)
    const editTodo = useTodoStore((state) => state.editTodo)

    const checkIcon = todo.completed ? (
        <CheckIcon onClick={() => toggleTodo(todo.id)} />
    ) : (
        <UncheckIcon onClick={() => toggleTodo(todo.id)} />
    )

    return (
        <TasksStyled>
            <Wrapper>
                {checkIcon}
                <Input
                    type="text"
                    onChange={(e) => editTodo(todo.id, e.target.value)}
                    value={todo.text}
                    checked={todo.completed}
                    disabled={todo.completed}
                />
            </Wrapper>
            <TrashIcon onClick={() => removeTodo(todo.id)} />
        </TasksStyled>
    )
}

const TasksStyled = styled.div`
    padding: 0.8rem 0;
    border-bottom: 1px dashed var(--todo-secondary-dark);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 0.5rem;
`

const Wrapper = styled.div`
    width: 100%;
    padding: 1.2rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
    text-transform: capitalize;
`

const Input = styled.input<{ checked?: boolean }>`
    width: 80%;
    background-color: transparent;
    border: none;
    color: ${({ checked }) => (checked ? 'var(--todo-secondary)' : 'var(--todo-light)')};
    font-size: 1.2rem;
    font-weight: 700;
    text-transform: capitalize;
    caret-color: var(--todo-primary);

    &:focus {
        outline: none;
    }

    ${({ checked }) =>
        !checked &&
        `
        &:hover {
            cursor: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='32' height='32'><text y='22' font-size='22'>✏️</text></svg>") 0 10, text;
        }
    `}
`

const CheckIcon = styled(MdCheckCircle)`
    font-size: 1.8rem;
    color: var(--todo-primary);
    cursor: pointer;
`

const UncheckIcon = styled(MdRadioButtonUnchecked)`
    font-size: 1.8rem;
    color: var(--todo-secondary);
    cursor: pointer;
`

const TrashIcon = styled(FaRegTrashCan)`
    font-size: 1.6rem;
    color: var(--todo-secondary-light);
    cursor: pointer;
`

import styled from 'styled-components'

interface TodoHeaderProps {
    total: number
    completed: number
}

export const TodoHeader = (props: TodoHeaderProps) => {
    return (
        <Head>
            <Wrapper>
                <h3>Total Tasks</h3>
                <Circle>{props.total}</Circle>
            </Wrapper>
            <Wrapper>
                <h3>Completed</h3>
                <Circle>{props.completed}</Circle>
            </Wrapper>
        </Head>
    )
}

const Head = styled.div`
    padding: 0.5rem 0;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--todo-darker);
`
const Circle = styled.div`
    background-color: var(--todo-darker);
    width: 2rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.9rem;
    color: var(--todo-primary);
`
const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    color: var(--todo-secondary-light);
`

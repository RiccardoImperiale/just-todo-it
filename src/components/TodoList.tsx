import { AnimatePresence, motion } from 'framer-motion'
import { TodoHeader } from './TodoHeader'
import styled from 'styled-components'
import { useTodoStore } from '@/state/todoStore'
import { Task } from './Task'
import { TodoTextLogo } from '@/assets/StaticAssets'

export const TodoList = () => {
    const todos = useTodoStore((state) => state.todos)
    const completed = todos.filter((t) => t.completed).length

    return (
        <ListWrapper>
            <List>
                <TodoHeader total={todos.length} completed={completed} />
                <AnimatePresence>
                    {todos.map((todo) => (
                        <motion.div
                            key={todo.id}
                            layout
                            transition={{
                                duration: 0.3,
                                type: 'spring',
                                stiffness: 500,
                                damping: 30,
                            }}
                        >
                            <Task todo={todo} />
                        </motion.div>
                    ))}
                </AnimatePresence>
                <motion.div
                    className="todoIt"
                    layout
                    transition={{ duration: 0.3, type: 'spring', stiffness: 500, damping: 30 }}
                >
                    <img width={180} src={TodoTextLogo} alt="just todo it logo" />
                </motion.div>
            </List>
        </ListWrapper>
    )
}

const ListWrapper = styled.div`
    max-width: 750px;
    margin: auto;
`
const List = styled.div`
    padding: 0 2.5rem;
    min-height: 400px;

    .todoIt {
        text-align: center;
        padding-top: 5rem;
    }
`

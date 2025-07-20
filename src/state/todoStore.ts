import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Todo {
    id: string
    text: string
    completed: boolean
}

interface TodoState {
    todos: Todo[]
    addTodo: (text: string) => void
    toggleTodo: (id: string) => void
    removeTodo: (id: string) => void
    editTodo: (id: string, text: string) => void
}

export const useTodoStore = create<TodoState>()(
    persist(
        (set) => ({
            todos: [{ id: '1', text: 'test', completed: false }],
            addTodo: (text) =>
                set((state) => ({
                    todos: [...state.todos, { id: Date.now().toString(), text, completed: false }],
                })),
            toggleTodo: (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id ? { ...todo, completed: !todo.completed } : todo
                    ),
                })),
            removeTodo: (id) =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id),
                })),
            editTodo: (id, text) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id ? { ...todo, text: text, completed: todo.completed } : todo
                    ),
                })),
        }),
        {
            name: 'todos',
        }
    )
)

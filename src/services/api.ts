const BASE_SINGLE_TODO_URL = 'https://dummyjson.com/todos/random'
const BASE_RANDOM_TODOS_URL = 'https://jsonplaceholder.typicode.com/todos?_limit='
const LIMIT = 5

export const generateRandomTodo = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const res = await fetch(BASE_SINGLE_TODO_URL)
    if (!res.ok) throw new Error('Failed to fetch data')
    return res.json()
}

export const listRandomTodos = async (limit: number = LIMIT) => {
    const res = await fetch(`${BASE_RANDOM_TODOS_URL}${limit}`)
    if (!res.ok) throw new Error('Failed to fetch todos')
    return res.json()
}

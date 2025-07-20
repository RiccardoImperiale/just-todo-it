const BASE_URL = 'https://dummyjson.com/todos/random'

export const getRandomTodo = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    const res = await fetch(BASE_URL)
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}

import todos from "./todos";

describe("Todos reducer unit tests" , () => {
    it("should return empty array when initial state and action is undefined", () => {
        expect(todos(undefined, {})).toEqual([])
    })

    it("should update an initial state by adding 1 todo item in the list", () => {
        const AddTodoAction = {
            type: 'ADD_TODO',
            id: 1,
            text: 'buy milk',
        }
        expect(todos([], AddTodoAction)).toEqual([{
            id: 1,
            text: "buy milk",
            completed: false,
        }])
    })

    it("should update an initial state by adding 2 todo item in the list", () => {

        const initialState = [{
            id: 1,
            text: 'buy milk',
            completed: false,
        }]
        const AddTodoAction = {
            type: 'ADD_TODO',
            id: 2,
            text: 'go to shopping',
        }
        expect(todos(initialState, AddTodoAction)).toEqual([{
            id: 1,
            text: "buy milk",
            completed: false,
        }, 
        {
            id: 2,
            text: "go to shopping",
            completed: false,
        }
    ])
    })

    it("should update an initial state by adding toggle", () => {
        const initialState = [{
            completed:false,
            id: 1,
            text: 'buy milk',
        }]
        const toggleTodoAction = {
            type: "TOGGLE_TODO",
            id:1
        }
        expect(todos(initialState, toggleTodoAction)).toEqual([{
            id: 1,
            text: "buy milk",
            completed: true,
        }])
    })
})